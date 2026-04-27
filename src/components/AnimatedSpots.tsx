import { useEffect, useRef, useState } from "react";
import { useSyncedSpots } from "@/hooks/use-spots";

type Props = {
  /** Optional class for the animated number itself. */
  className?: string;
  /** When true, exposes a polite aria-live region so SR users hear updates. */
  live?: boolean;
};

/**
 * Renders the synced "spots remaining" count.
 *
 * Critical: the number must ALWAYS be visible — including during SSR and
 * before JS hydrates. So we render the value as plain text (never wrapped
 * in a transform/opacity that could hide it on slow devices), and only add
 * a brief CSS-driven flash + scale pulse when the value actually changes.
 */
export function AnimatedSpots({ className = "", live = false }: Props) {
  const { spots } = useSyncedSpots();
  const [pulse, setPulse] = useState(false);
  const prev = useRef<number | null>(null);

  useEffect(() => {
    if (prev.current !== null && prev.current !== spots) {
      setPulse(true);
      const id = window.setTimeout(() => setPulse(false), 600);
      return () => window.clearTimeout(id);
    }
    prev.current = spots;
  }, [spots]);

  return (
    <span
      className="inline-block tabular-nums"
      suppressHydrationWarning
      aria-live={live ? "polite" : undefined}
      aria-atomic={live ? "true" : undefined}
      aria-label={`${spots} vagas restantes`}
    >
      <span
        className={`inline-block transition-transform duration-500 ease-out ${
          pulse ? "scale-125 text-rose-gold" : "scale-100"
        } ${className}`}
        style={{ transformOrigin: "center" }}
      >
        {spots}
      </span>
    </span>
  );
}
