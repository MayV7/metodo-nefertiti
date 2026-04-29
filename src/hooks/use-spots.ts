import { useEffect, useState } from "react";

// Versioned keys — bumping the suffix invalidates any stale value that may
// have frozen previous visitors at the floor (e.g. "1 vaga restante").
const STORAGE_KEY = "nefertiti_spots_remaining_v2";
const STORAGE_LAST = "nefertiti_spots_last_tick_v2";
const STORAGE_EPOCH = "nefertiti_spots_epoch_v2";
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
const RESYNC_EVENT = "nefertiti:spots-resync";
let activeHooks = 0;
let controllerStop: (() => void) | null = null;

function clampSpots(value: number) {
  if (Number.isNaN(value)) return INITIAL_SPOTS;
  return Math.min(INITIAL_SPOTS, Math.max(MIN_SPOTS, value));
}

function readStoredSpots() {
  return clampSpots(parseInt(window.localStorage.getItem(STORAGE_KEY) ?? String(INITIAL_SPOTS), 10));
}

function writeSyncedSpots(spots: number, tickTime = Date.now()) {
  const safeSpots = clampSpots(spots);
  const epoch = Date.now();
  window.localStorage.setItem(STORAGE_KEY, String(safeSpots));
  window.localStorage.setItem(STORAGE_LAST, String(tickTime));
  window.localStorage.setItem(STORAGE_EPOCH, String(epoch));
  window.dispatchEvent(new CustomEvent(RESYNC_EVENT, { detail: { spots: safeSpots, epoch } }));
  return safeSpots;
}

function initializeSpotsState() {
  for (const k of LEGACY_KEYS) window.localStorage.removeItem(k);

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const lastTick = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10);
  const now = Date.now();
  let current = clampSpots(stored ? parseInt(stored, 10) : INITIAL_SPOTS);
  let syncedLastTick = lastTick || now;

  if (lastTick && current > MIN_SPOTS) {
    const elapsedTicks = Math.floor((now - lastTick) / POPUP_CADENCE_MS);
    if (elapsedTicks > 0) {
      current = Math.max(MIN_SPOTS, current - elapsedTicks);
      syncedLastTick = lastTick + elapsedTicks * POPUP_CADENCE_MS;
    }
  }

  return writeSyncedSpots(current, syncedLastTick);
}

function startSpotsController() {
  if (controllerStop) return;

  const tickSpot = () => {
    const storedNow = readStoredSpots();
    if (storedNow <= MIN_SPOTS) {
      writeSyncedSpots(storedNow);
      return;
    }
    writeSyncedSpots(storedNow - 1);
  };

  const onBuyer = () => tickSpot();
  window.addEventListener("nefertiti:buyer-shown", onBuyer);

  const fallbackTicker = window.setInterval(() => {
    const last = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10);
    const time = Date.now();
    if (!last || time - last < POPUP_CADENCE_MS) return;
    tickSpot();
  }, 1000);

  const resyncInterval = window.setInterval(() => {
    const last = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? String(Date.now()), 10);
    writeSyncedSpots(readStoredSpots(), last);
  }, 5000);

  controllerStop = () => {
    window.removeEventListener("nefertiti:buyer-shown", onBuyer);
    window.clearInterval(fallbackTicker);
    window.clearInterval(resyncInterval);
    controllerStop = null;
  };
}

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

    let current = clampSpots(stored ? parseInt(stored, 10) : INITIAL_SPOTS);

    if (lastTick && current > MIN_SPOTS) {
      const elapsedTicks = Math.floor((now - lastTick) / POPUP_CADENCE_MS);
      if (elapsedTicks > 0) {
        current = Math.max(MIN_SPOTS, current - elapsedTicks);
      }
    }

    current = writeSyncedSpots(current, now);
    setSpots(current);
    setReady(true);

    const tickSpot = () => {
      const storedNow = readStoredSpots();
      if (storedNow <= MIN_SPOTS) {
        setSpots(storedNow);
        return;
      }
      const next = writeSyncedSpots(storedNow - 1);
      setSpots(next);
    };

    // Primary trigger: every time the popup shows a new buyer, drop a spot.
    const onBuyer = () => tickSpot();
    window.addEventListener("nefertiti:buyer-shown", onBuyer);

    // Fallback trigger: guarantees depletion every 40s even if a popup is
    // delayed, remounted, or missed during fast navigation/re-renders.
    const fallbackTicker = window.setInterval(() => {
      const last = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10);
      const time = Date.now();
      if (!last || time - last < POPUP_CADENCE_MS) return;
      tickSpot();
    }, 1000);

    // Auto-resync: if localStorage becomes invalid/inconsistent, normalize it
    // and push the same value to every mounted counter immediately.
    const resync = () => {
      const normalized = writeSyncedSpots(readStoredSpots(), parseInt(window.localStorage.getItem(STORAGE_LAST) ?? String(Date.now()), 10));
      setSpots(normalized);
    };
    const resyncInterval = window.setInterval(resync, 5000);

    const onResync = (e: Event) => {
      const detail = (e as CustomEvent<{ spots?: number }>).detail;
      if (typeof detail?.spots === "number") setSpots(clampSpots(detail.spots));
    };
    window.addEventListener(RESYNC_EVENT, onResync as EventListener);

    // Cross-tab sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setSpots(clampSpots(parseInt(e.newValue, 10)));
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("nefertiti:buyer-shown", onBuyer);
      window.removeEventListener(RESYNC_EVENT, onResync as EventListener);
      window.removeEventListener("storage", onStorage);
      window.clearInterval(fallbackTicker);
      window.clearInterval(resyncInterval);
    };
  }, []);

  return { spots, ready, initial: INITIAL_SPOTS };
}
