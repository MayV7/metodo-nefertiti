import { useEffect, useState } from "react";

const STORAGE_KEY = "nefertiti_countdown_end";
const DEFAULT_HOURS = 12;

/**
 * Shared countdown hook — all instances on the page read the same end timestamp
 * persisted in localStorage, so every counter (top bar, offer, scarcity) stays
 * perfectly synchronized.
 */
export function useSyncedCountdown(hours: number = DEFAULT_HOURS) {
  const [end, setEnd] = useState<number | null>(null);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    let target: number;
    if (stored) {
      const v = parseInt(stored, 10);
      target = !Number.isNaN(v) && v > Date.now() ? v : Date.now() + hours * 3_600_000;
    } else {
      target = Date.now() + hours * 3_600_000;
    }
    window.localStorage.setItem(STORAGE_KEY, String(target));
    setEnd(target);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [hours]);

  const diff = end ? Math.max(0, end - now) : hours * 3_600_000;
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  return { hours: h, minutes: m, seconds: s, ready: end !== null };
}
