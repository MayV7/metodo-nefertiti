import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ minutes = 47 }: { minutes?: number }) {
  const [end] = useState(() => Date.now() + minutes * 60 * 1000);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  const cell = (label: string, value: string) => (
    <div className="flex flex-col items-center min-w-[64px] md:min-w-[80px] bg-graphite-gradient text-pearl rounded-xl px-3 py-3 md:py-4 shadow-card-soft border border-rose-gold/30">
      <span className="font-display text-3xl md:text-5xl font-bold text-rose-gold-gradient leading-none">{value}</span>
      <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest mt-1.5 opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      {cell("horas", pad(h))}
      <span className="font-display text-3xl md:text-4xl text-rose-gold-deep">:</span>
      {cell("min", pad(m))}
      <span className="font-display text-3xl md:text-4xl text-rose-gold-deep">:</span>
      {cell("seg", pad(s))}
    </div>
  );
}
