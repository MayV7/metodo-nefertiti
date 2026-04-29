import { useEffect, useState } from "react";

// Versioned keys — bumping the suffix invalidates any stale value that may
// have frozen previous visitors at the floor (e.g. "1 vaga restante").
const STORAGE_KEY = "nefertiti_spots_remaining_v2";
const STORAGE_LAST = "nefertiti_spots_last_tick_v2";
const LEGACY_KEYS = [
  "nefertiti_spots_remaining",
  "nefertiti_spots_last_tick",
];
const INITIAL_SPOTS = 25;
// Floor kept above zero so the offer never reads "0 vagas", but well below
// the previous floor of 1 so the counter visibly moves throughout the session.
const MIN_SPOTS = 3;
// Reference cadence for catch-up math (matches popup interval + fade ≈ 40s).
const POPUP_CADENCE_MS = 40_000;

/**
 * Shared scarcity counter — decrements in lockstep with the social-proof
 * popup so the two narratives are always coherent.
 *
 * Source of truth: the `nefertiti:buyer-shown` window event dispatched by
 * <SocialProofPopup /> every time a new buyer card appears. One buyer
 * shown = one spot taken. We freeze at MIN_SPOTS.
 *
 * On (re)load we also catch up using elapsed wall-clock time so users who
 * close and reopen the page never see the counter jump backwards.
 */
export function useSyncedSpots() {
  const [spots, setSpots] = useState<number>(INITIAL_SPOTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wipe any legacy keys from earlier deploys (they may have frozen at 1).
    for (const k of LEGACY_KEYS) window.localStorage.removeItem(k);

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const lastTick = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10);
    const now = Date.now();

    let current = stored ? parseInt(stored, 10) : INITIAL_SPOTS;
    if (Number.isNaN(current) || current > INITIAL_SPOTS) current = INITIAL_SPOTS;
    // Defensive: if stored value is somehow below the new floor, lift it back
    // up so the counter is never visually "travado" at the minimum.
    if (current < MIN_SPOTS) current = MIN_SPOTS;

    if (lastTick && current > MIN_SPOTS) {
      const elapsedTicks = Math.floor((now - lastTick) / POPUP_CADENCE_MS);
      if (elapsedTicks > 0) {
        current = Math.max(MIN_SPOTS, current - elapsedTicks);
      }
    }

    window.localStorage.setItem(STORAGE_KEY, String(current));
    window.localStorage.setItem(STORAGE_LAST, String(now));
    setSpots(current);
    setReady(true);

    // Primary trigger: every time the popup shows a new buyer, drop a spot.
    const onBuyer = () => {
      setSpots((prev) => {
        if (prev <= MIN_SPOTS) return prev;
        const next = prev - 1;
        window.localStorage.setItem(STORAGE_KEY, String(next));
        window.localStorage.setItem(STORAGE_LAST, String(Date.now()));
        return next;
      });
    };
    window.addEventListener("nefertiti:buyer-shown", onBuyer);

    // Cross-tab sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const v = parseInt(e.newValue, 10);
        if (!Number.isNaN(v)) setSpots(v);
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("nefertiti:buyer-shown", onBuyer);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return { spots, ready, initial: INITIAL_SPOTS };
}
