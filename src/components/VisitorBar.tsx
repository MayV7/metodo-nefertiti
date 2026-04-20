import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorBar() {
  const [count, setCount] = useState(247);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => Math.max(180, Math.min(420, c + Math.round((Math.random() - 0.45) * 6))));
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-graphite-gradient text-pearl text-xs md:text-sm py-2 px-4 text-center font-heading tracking-wide flex items-center justify-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-rose-gold opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-gold" />
      </span>
      <Eye className="h-3.5 w-3.5 text-rose-gold" />
      <span>
        <strong className="text-rose-gold-gradient">{count}</strong> mulheres assistindo agora
      </span>
    </div>
  );
}
