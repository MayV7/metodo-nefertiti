import { Clock, Flame } from "lucide-react";
import { useSyncedCountdown } from "@/hooks/use-countdown";
import { AnimatedSpots } from "@/components/AnimatedSpots";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function TopCountdown({ hours = 12 }: { hours?: number }) {
  const { hours: h, minutes: m, seconds: s } = useSyncedCountdown(hours);

  return (
    <div className="bg-graphite-gradient text-pearl py-2 px-3 md:py-2.5 md:px-4 text-center font-heading tracking-wide flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-b border-rose-gold/20">
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <Clock className="h-4 w-4 text-rose-gold" />
        <span className="opacity-90">A oferta termina em</span>
        <span
          className="flex items-center gap-1 font-display font-bold text-rose-gold-gradient text-base md:text-lg tabular-nums"
          suppressHydrationWarning
        >
          <span>{pad(h)}</span>:<span>{pad(m)}</span>:<span>{pad(s)}</span>
        </span>
      </div>
      <span className="hidden md:inline opacity-30">•</span>
      <div className="flex items-center gap-1.5 text-xs md:text-sm">
        <Flame className="h-4 w-4 text-rose-gold" />
        <span>
          <strong className="text-rose-gold-gradient">
            Últimas <AnimatedSpots live /> vagas
          </strong>{" "}
          disponíveis
        </span>
      </div>
    </div>
  );
}
