import { AnimatePresence, motion } from "framer-motion";
import { useSyncedSpots } from "@/hooks/use-spots";

type Props = {
  /** Optional class for the animated number itself. */
  className?: string;
  /** When true, exposes a polite aria-live region so SR users hear updates. */
  live?: boolean;
};

/**
 * Renders the synced "spots remaining" count with a soft fade+slide animation
 * each time the value changes. Accessible (aria-live polite + readable label)
 * and SSR-safe (suppressHydrationWarning, fixed width via tabular-nums).
 */
export function AnimatedSpots({ className = "", live = false }: Props) {
  const { spots } = useSyncedSpots();

  return (
    <span
      className="relative inline-flex items-baseline tabular-nums"
      suppressHydrationWarning
      aria-live={live ? "polite" : undefined}
      aria-atomic={live ? "true" : undefined}
      aria-label={`${spots} vagas restantes`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={spots}
          initial={{ y: -10, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 10, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${className}`}
        >
          {spots}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
