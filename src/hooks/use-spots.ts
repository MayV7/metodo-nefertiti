import { useEffect, useState } from "react";

const STORAGE_KEY = "nefertiti_spots_remaining";
const STORAGE_LAST = "nefertiti_spots_last_tick";
const INITIAL_SPOTS = 25;
const MIN_SPOTS = 1;
// Decrement aligned with the social-proof popup cadence (~26s per buyer).
const TICK_MS = 26_000;

/**
 * Shared scarcity counter — decrements over time and is synchronized across
 * every component on the page (and across tabs) via localStorage.
 * Mirrors the rhythm of the social-proof popup so the narrative stays coherent.
 */
export function useSyncedSpots() {
  const [spots, setSpots] = useState<number>(INITIAL_SPOTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const lastTick = parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10);
    const now = Date.now();

    let current = stored ? parseInt(stored, 10) : INITIAL_SPOTS;
    if (Number.isNaN(current) || current > INITIAL_SPOTS) current = INITIAL_SPOTS;

    // Catch up: if the page was closed for a while, decrement what would have
    // ticked down meanwhile (cap to keep the floor visible).
    if (lastTick && current > MIN_SPOTS) {
      const elapsedTicks = Math.floor((now - lastTick) / TICK_MS);
      if (elapsedTicks > 0) {
        current = Math.max(MIN_SPOTS, current - elapsedTicks);
      }
    }

    window.localStorage.setItem(STORAGE_KEY, String(current));
    window.localStorage.setItem(STORAGE_LAST, String(now));
    setSpots(current);
    setReady(true);

    const id = setInterval(() => {
      setSpots((prev) => {
        if (prev <= MIN_SPOTS) return prev;
        // 70% chance to drop by 1 each tick to feel organic.
        const next = Math.random() < 0.7 ? prev - 1 : prev;
        window.localStorage.setItem(STORAGE_KEY, String(next));
        window.localStorage.setItem(STORAGE_LAST, String(Date.now()));
        return next;
      });
    }, TICK_MS);

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const v = parseInt(e.newValue, 10);
        if (!Number.isNaN(v)) setSpots(v);
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      clearInterval(id);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return { spots, ready, initial: INITIAL_SPOTS };
}
