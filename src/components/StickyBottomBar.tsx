import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { useSyncedSpots } from "@/hooks/use-spots";

export function StickyBottomBar() {
  const [show, setShow] = useState(false);
  const { spots } = useSyncedSpots();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-graphite-gradient border-t border-rose-gold/30 shadow-elegant px-3 py-2.5 md:px-6 md:py-3">
        <div className="container mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <Flame className="h-5 w-5 md:h-6 md:w-6 text-rose-gold shrink-0 cta-pulse" />
            <div className="min-w-0">
              <p className="font-heading font-bold text-pearl text-[11px] sm:text-sm md:text-base leading-tight truncate">
                <span className="text-rose-gold-gradient" suppressHydrationWarning>Últimas {spots} vagas</span> — garanta já
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-pearl/70 leading-tight">
                Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
          <a
            href="https://pay.kiwify.com.br/iX5ySX9"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-rose-gold-gradient text-primary-foreground font-heading font-bold uppercase tracking-wide px-3 py-2 text-[11px] sm:px-5 sm:py-2.5 sm:text-sm md:px-7 md:py-3 md:text-base shadow-glow cta-pulse hover:scale-[1.03] active:scale-[0.98] transition-transform whitespace-nowrap"
          >
            Quero minha vaga
          </a>
        </div>
      </div>
    </div>
  );
}
