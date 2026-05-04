import { useSyncExternalStore } from "react";

/**
 * Global scarcity store — single source of truth for the "vagas restantes"
 * counter. Every consumer (TopCountdown, StickyBottomBar, AnimatedSpots in
 * the offer, etc.) subscribes via `useSyncExternalStore`, guaranteeing that
 * React renders the SAME value across every section in the same tick.
 *
 * - One module-level timer (not per component).
 * - One read of localStorage on boot, plus a single `storage` listener for
 *   cross-tab sync.
 * - Decrement is driven by the `nefertiti:buyer-shown` window event from
 *   <SocialProofPopup />, with a wall-clock fallback so the counter never
 *   freezes if the popup misses a tick.
 */

const STORAGE_KEY = "nefertiti_spots_remaining_v5";
const STORAGE_LAST = "nefertiti_spots_last_tick_v5";
const LEGACY_KEYS = [
  "nefertiti_spots_remaining",
  "nefertiti_spots_last_tick",
  "nefertiti_spots_epoch_v2",
  "nefertiti_spots_remaining_v2",
  "nefertiti_spots_last_tick_v2",
  "nefertiti_spots_remaining_v3",
  "nefertiti_spots_last_tick_v3",
];

const INITIAL_SPOTS = 13;
const MIN_SPOTS = 3;
const POPUP_CADENCE_MS = 40_000;
// Spots should feel organic: not every popup decrements the counter, and
// there's a minimum gap between decrements so the number doesn't tumble.
const MIN_DECREMENT_GAP_MS = 110_000; // ~1m50s minimum between drops
const DECREMENT_PROBABILITY = 0.45;   // ~45% of eligible popups actually decrement

type State = { spots: number; lastTick: number };

let state: State = { spots: INITIAL_SPOTS, lastTick: 0 };
let cachedSnapshot = INITIAL_SPOTS;
let initialized = false;
const listeners = new Set<() => void>();

function clampSpots(value: number): number {
  if (!Number.isFinite(value)) return INITIAL_SPOTS;
  return Math.min(INITIAL_SPOTS, Math.max(MIN_SPOTS, Math.floor(value)));
}

function emit() {
  cachedSnapshot = state.spots;
  for (const l of listeners) l();
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(state.spots));
    window.localStorage.setItem(STORAGE_LAST, String(state.lastTick));
  } catch {
    /* storage may be unavailable (private mode, quota); ignore */
  }
}

function setSpots(next: number, lastTick: number = state.lastTick) {
  const safe = clampSpots(next);
  if (safe === state.spots && lastTick === state.lastTick) return;
  state = { spots: safe, lastTick };
  persist();
  emit();
}

function tick() {
  if (state.spots <= MIN_SPOTS) return;
  const now = Date.now();
  // Enforce a minimum gap between decrements so vacancies feel natural.
  if (state.lastTick && now - state.lastTick < MIN_DECREMENT_GAP_MS) return;
  // Probabilistic decrement — not every popup drops a spot.
  if (Math.random() > DECREMENT_PROBABILITY) return;
  setSpots(state.spots - 1, now);
}

export function resetSpots() {
  if (typeof window === "undefined") return;
  state = { spots: INITIAL_SPOTS, lastTick: Date.now() };
  cachedSnapshot = INITIAL_SPOTS;
  persist();
  emit();
}

function bootstrap() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  try {
    for (const k of LEGACY_KEYS) window.localStorage.removeItem(k);
  } catch {
    /* ignore */
  }

  let stored = INITIAL_SPOTS;
  let lastTick = 0;
  try {
    const rawSpots = window.localStorage.getItem(STORAGE_KEY);
    const rawLast = window.localStorage.getItem(STORAGE_LAST);
    if (rawSpots != null) stored = clampSpots(parseInt(rawSpots, 10));
    if (rawLast != null) lastTick = parseInt(rawLast, 10) || 0;
  } catch {
    /* ignore */
  }

  const now = Date.now();
  if (lastTick && stored > MIN_SPOTS) {
    // Catch up organically: one possible decrement per MIN_DECREMENT_GAP_MS
    // window elapsed, capped so we never drain too fast on long absences.
    const windows = Math.floor((now - lastTick) / MIN_DECREMENT_GAP_MS);
    const cappedWindows = Math.min(windows, 4);
    let drops = 0;
    for (let i = 0; i < cappedWindows; i++) {
      if (Math.random() <= DECREMENT_PROBABILITY) drops++;
    }
    if (drops > 0) {
      stored = Math.max(MIN_SPOTS, stored - drops);
      lastTick = now;
    }
  } else if (!lastTick) {
    lastTick = now;
  }

  state = { spots: stored, lastTick };
  cachedSnapshot = stored;
  persist();

  window.addEventListener("nefertiti:buyer-shown", () => tick());
  window.addEventListener("nefertiti:spots-reset", () => resetSpots());

  // Wall-clock fallback: if no popup fires for too long, still try to tick
  // (still gated by MIN_DECREMENT_GAP_MS + probability inside tick()).
  window.setInterval(() => {
    if (state.spots <= MIN_SPOTS) return;
    if (Date.now() - state.lastTick >= MIN_DECREMENT_GAP_MS + 30_000) {
      tick();
    }
  }, 5000);

  window.addEventListener("storage", (e) => {
    if (e.key !== STORAGE_KEY || !e.newValue) return;
    const incoming = clampSpots(parseInt(e.newValue, 10));
    if (incoming !== state.spots) {
      const merged = Math.min(state.spots, incoming);
      let lastRaw = state.lastTick;
      try {
        lastRaw =
          parseInt(window.localStorage.getItem(STORAGE_LAST) ?? "0", 10) || state.lastTick;
      } catch {
        /* ignore */
      }
      state = { spots: merged, lastTick: lastRaw };
      cachedSnapshot = merged;
      emit();
    }
  });
}

function subscribe(listener: () => void) {
  bootstrap();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return cachedSnapshot;
}

function getServerSnapshot() {
  return INITIAL_SPOTS;
}

export function useSyncedSpots() {
  const spots = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { spots, ready: true, initial: INITIAL_SPOTS };
}
