import { useEffect, useState } from "react";
import { Clock, Flame } from "lucide-react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function TopCountdown({ hours = 12 }: { hours?: number }) {
  const [end] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("nefertiti_top_countdown_end");
      if (stored) {
        const v = parseInt(stored, 10);
        if (!Number.isNaN(v) && v > Date.now()) return v;
      }
      const v = Date.now() + hours * 60 * 60 * 1000;
      window.localStorage.setItem("nefertiti_top_countdown_end", String(v));
      return v;
    }
    return Date.now() + hours * 60 * 60 * 1000;
  });
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);

  return (
    <div className="bg-graphite-gradient text-pearl py-2 px-3 md:py-2.5 md:px-4 text-center font-heading tracking-wide flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-b border-rose-gold/20">
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <Clock className="h-4 w-4 text-rose-gold" />
        <span className="opacity-90">A oferta termina em</span>
        <span className="flex items-center gap-1 font-display font-bold text-rose-gold-gradient text-base md:text-lg tabular-nums">
          <span>{pad(h)}</span>:<span>{pad(m)}</span>:<span>{pad(s)}</span>
        </span>
      </div>
      <span className="hidden md:inline opacity-30">•</span>
      <div className="flex items-center gap-1.5 text-xs md:text-sm">
        <Flame className="h-4 w-4 text-rose-gold" />
        <span>
          <strong className="text-rose-gold-gradient">Últimas 12 vagas</strong> disponíveis
        </span>
      </div>
    </div>
  );
}
