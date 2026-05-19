import { useEffect, useState } from "react";

export function useCountdown(initialSeconds = 11 * 3600 + 59 * 60 + 58) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(sec) };
}

export function CountdownDigits({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { h, m, s } = useCountdown();
  if (size === "lg") {
    return (
      <div className="flex items-end justify-center gap-3 font-display text-foreground">
        <Block n={h} label="horas" />
        <span className="text-4xl pb-6 text-rose-deep">:</span>
        <Block n={m} label="min" />
        <span className="text-4xl pb-6 text-rose-deep">:</span>
        <Block n={s} label="seg" />
      </div>
    );
  }
  return (
    <span className="font-mono font-semibold tracking-wider animate-countdown-pulse">
      {h} : {m} : {s}
    </span>
  );
}

function Block({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-rose-deep tabular-nums">{n}</span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</span>
    </div>
  );
}
