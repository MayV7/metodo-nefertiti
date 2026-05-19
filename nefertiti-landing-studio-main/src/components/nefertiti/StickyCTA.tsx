import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "./data";
import { Crown, Flame, ShieldCheck, Sparkles } from "lucide-react";

const BUYERS = [
  { name: "Mariana S.", city: "Belo Horizonte/MG" },
  { name: "Patrícia L.", city: "Curitiba/PR" },
  { name: "Juliana R.", city: "São Paulo/SP" },
  { name: "Beatriz F.", city: "Salvador/BA" },
  { name: "Camila T.", city: "Florianópolis/SC" },
  { name: "Renata M.", city: "Porto Alegre/RS" },
  { name: "Amanda P.", city: "Recife/PE" },
  { name: "Larissa O.", city: "Brasília/DF" },
  { name: "Tatiane V.", city: "Goiânia/GO" },
  { name: "Isabela C.", city: "Rio de Janeiro/RJ" },
  { name: "Fernanda B.", city: "Fortaleza/CE" },
  { name: "Cláudia N.", city: "Manaus/AM" },
  { name: "Vanessa A.", city: "Vitória/ES" },
  { name: "Suzana K.", city: "Campinas/SP" },
  { name: "Aline G.", city: "Natal/RN" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function SocialProofToast() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * BUYERS.length));
  const [visible, setVisible] = useState(false);
  const [secondsAgo, setSecondsAgo] = useState(42);

  useEffect(() => {
    let mounted = true;
    const show = () => {
      if (!mounted) return;
      setSecondsAgo(20 + Math.floor(Math.random() * 90));
      setVisible(true);
      setTimeout(() => mounted && setVisible(false), 6500);
    };
    const first = setTimeout(show, 5000);
    // a cada ~60s mostra uma nova compra
    const interval = setInterval(() => {
      setIdx((v) => (v + 1) % BUYERS.length);
      show();
    }, 60000);
    return () => {
      mounted = false;
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  const buyer = BUYERS[idx];

  return (
    <div
      className={`fixed left-3 md:left-6 bottom-24 md:bottom-28 z-[60] max-w-xs ${
        visible ? "animate-toast-in" : "animate-toast-out pointer-events-none"
      }`}
      aria-live="polite"
    >
      <div className="relative bg-card/95 backdrop-blur-md border border-rose-soft/40 shadow-elegant rounded-2xl p-3 pr-4 flex items-center gap-3 overflow-hidden">
        <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-rose" />
        <div className="relative shrink-0">
          <div className="w-11 h-11 rounded-full bg-gradient-rose flex items-center justify-center text-cream font-bold text-sm shadow-soft animate-pulse-ring">
            {initials(buyer.name)}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-card" />
        </div>
        <div className="text-xs leading-snug min-w-0">
          <p className="font-semibold text-foreground truncate">{buyer.name}</p>
          <p className="text-muted-foreground truncate">{buyer.city}</p>
          <p className="text-rose-deep font-medium mt-0.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> garantiu agora · há {secondsAgo}s
          </p>
        </div>
      </div>
    </div>
  );
}

export function StickyBottomCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[55] transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-gradient-sticky text-cream ring-gold border-t border-gold/20 px-3 py-2.5 md:py-3 relative overflow-hidden">
        {/* shimmer top line */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          {/* Left badge — desktop */}
          <div className="hidden md:flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 rounded-full bg-rose-deep/30 border border-rose-soft/40 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-rose-soft animate-flame" />
              <span className="absolute -inset-0.5 rounded-full animate-pulse-ring" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.25em] text-rose-soft/80 font-semibold">Oferta deste lote</div>
              <div className="text-sm font-bold text-gradient-gold">Últimas 13 vagas disponíveis</div>
            </div>
          </div>

          {/* Mobile compact */}
          <div className="md:hidden flex-1 flex items-center gap-2 min-w-0">
            <div className="relative w-9 h-9 rounded-full bg-rose-deep/30 border border-rose-soft/40 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-rose-soft animate-flame" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="text-[9px] uppercase tracking-widest text-rose-soft/80 font-semibold">Oferta deste lote</div>
              <div className="text-[11px] font-bold text-gradient-gold truncate">Últimas 13 vagas disponíveis</div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="sticky-cta"
            className="ml-auto group relative inline-flex items-center justify-center rounded-full font-extrabold text-primary-foreground bg-gradient-rose px-5 sm:px-7 py-3 text-xs sm:text-sm shadow-elegant uppercase tracking-[0.15em] animate-cta-pulse"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-rose opacity-50 blur-md -z-10 animate-cta-glow" aria-hidden="true" />
            <Crown className="w-4 h-4 mr-2 -ml-1" />
            <span>Quero minha vaga</span>
          </a>
        </div>
      </div>
    </div>
  );
}
