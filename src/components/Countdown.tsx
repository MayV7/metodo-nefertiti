import { useSyncedCountdown } from "@/hooks/use-countdown";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ minutes: _legacyMinutes }: { minutes?: number }) {
  // The shared hook ignores per-instance "minutes" so all counters tick together.
  void _legacyMinutes;
  const { hours, minutes, seconds } = useSyncedCountdown(12);

  const cell = (label: string, value: string) => (
    <div className="flex flex-col items-center min-w-[64px] md:min-w-[80px] bg-graphite-gradient text-pearl rounded-xl px-3 py-3 md:py-4 shadow-card-soft border border-rose-gold/30">
      <span className="font-display text-3xl md:text-5xl font-bold text-rose-gold-gradient leading-none tabular-nums" suppressHydrationWarning>{value}</span>
      <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest mt-1.5 opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      {cell("horas", pad(hours))}
      <span className="font-display text-3xl md:text-4xl text-rose-gold-deep">:</span>
      {cell("min", pad(minutes))}
      <span className="font-display text-3xl md:text-4xl text-rose-gold-deep">:</span>
      {cell("seg", pad(seconds))}
    </div>
  );
}
