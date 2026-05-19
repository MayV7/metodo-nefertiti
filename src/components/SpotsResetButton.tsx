import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { resetSpots } from "@/hooks/use-spots";

/**
 * Small floating dev/test button to reset the "vagas restantes" counter
 * back to 13. Only renders when the URL has `?test=1` (or `#test`) so it
 * never shows up for real visitors.
 */
export function SpotsResetButton() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      const url = new URL(window.location.href);
      const on =
        url.searchParams.get("test") === "1" ||
        url.hash.includes("test") ||
        window.localStorage.getItem("nefertiti_test_mode") === "1";
      if (url.searchParams.get("test") === "1") {
        try {
          window.localStorage.setItem("nefertiti_test_mode", "1");
        } catch {
          /* ignore */
        }
      }
      setEnabled(on);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  if (!enabled) return null;

  return (
    <button
      type="button"
      onClick={() => resetSpots()}
      className="fixed bottom-3 right-3 z-[60] inline-flex items-center gap-1.5 rounded-full bg-card/95 backdrop-blur border border-rose-gold/50 text-foreground px-3 py-1.5 text-xs font-medium shadow-elegant hover:bg-card transition"
      aria-label="Resetar contador de vagas para 13"
    >
      <RotateCcw className="h-3.5 w-3.5 text-rose-gold" />
      Resetar 13 vagas
    </button>
  );
}
