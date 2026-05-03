import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crown, CheckCircle2 } from "lucide-react";

const buyers = [
  { name: "Larissa B.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Tatiane F.", city: "Goiânia, GO", time: "há 4 minutos" },
  { name: "Aline P.", city: "Rio de Janeiro, RJ", time: "há 6 minutos" },
  { name: "Débora C.", city: "Florianópolis, SC", time: "há 8 minutos" },
  { name: "Sabrina V.", city: "São Paulo, SP", time: "há 11 minutos" },
  { name: "Helena G.", city: "Manaus, AM", time: "há 13 minutos" },
  { name: "Priscila D.", city: "Campinas, SP", time: "há 16 minutos" },
  { name: "Letícia M.", city: "Natal, RN", time: "há 19 minutos" },
  { name: "Gabriela H.", city: "Vitória, ES", time: "há 21 minutos" },
];

const CADENCE_MS = 40_000;

export function SocialProofPopup() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First popup appears quickly so the user sees it immediately, then
    // every 40s thereafter — in lockstep with the spots store cadence.
    const start = window.setTimeout(() => {
      setVisible(true);
      window.dispatchEvent(new CustomEvent("nefertiti:buyer-shown"));
    }, 5000);

    const interval = window.setInterval(() => {
      setIdx((i) => (i + 1) % buyers.length);
      setVisible(true);
      window.dispatchEvent(new CustomEvent("nefertiti:buyer-shown"));
    }, CADENCE_MS);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, []);

  const b = buyers[idx];

  return (
    <div className="fixed bottom-20 sm:bottom-24 left-3 sm:left-4 z-50 max-w-[92vw] sm:max-w-sm pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              boxShadow: [
                "0 0 0 0 rgba(212,165,116,0.0), 0 10px 30px -10px rgba(0,0,0,0.4)",
                "0 0 24px 6px rgba(212,165,116,0.55), 0 10px 30px -10px rgba(0,0,0,0.4)",
                "0 0 0 0 rgba(212,165,116,0.0), 0 10px 30px -10px rgba(0,0,0,0.4)",
              ],
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="pointer-events-auto bg-card/95 backdrop-blur-xl border border-rose-gold/50 rounded-2xl p-4 flex items-center gap-3"
          >
            <div className="h-12 w-12 rounded-full bg-rose-gold-gradient flex items-center justify-center shrink-0 shadow-glow">
              <Crown className="h-6 w-6 text-pearl" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-heading font-semibold text-foreground flex items-center gap-1.5">
                {b.name}
                <CheckCircle2 className="h-4 w-4 text-rose-gold-deep" />
              </p>
              <p className="text-xs text-muted-foreground truncate">
                comprou {b.time} • {b.city}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
