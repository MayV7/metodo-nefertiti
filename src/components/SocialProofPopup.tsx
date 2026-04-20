import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crown, CheckCircle2 } from "lucide-react";

const buyers = [
  { name: "Juliana M.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Carolina R.", city: "Belo Horizonte, MG", time: "há 4 minutos" },
  { name: "Patrícia L.", city: "Rio de Janeiro, RJ", time: "há 6 minutos" },
  { name: "Fernanda K.", city: "Curitiba, PR", time: "há 8 minutos" },
  { name: "Mariana T.", city: "Recife, PE", time: "há 11 minutos" },
  { name: "Beatriz S.", city: "Porto Alegre, RS", time: "há 13 minutos" },
  { name: "Renata A.", city: "Salvador, BA", time: "há 16 minutos" },
  { name: "Camila N.", city: "Brasília, DF", time: "há 19 minutos" },
  { name: "Vanessa O.", city: "Fortaleza, CE", time: "há 21 minutos" },
];

export function SocialProofPopup() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % buyers.length);
        setVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(id);
  }, [visible]);

  const b = buyers[idx];

  return (
    <div className="fixed bottom-20 sm:bottom-24 left-3 sm:left-4 z-50 max-w-[92vw] sm:max-w-sm pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, boxShadow: [
              "0 0 0 0 rgba(212,165,116,0.0), 0 10px 30px -10px rgba(0,0,0,0.4)",
              "0 0 24px 6px rgba(212,165,116,0.55), 0 10px 30px -10px rgba(0,0,0,0.4)",
              "0 0 0 0 rgba(212,165,116,0.0), 0 10px 30px -10px rgba(0,0,0,0.4)",
            ] }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
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
                comprou agora • {b.city}
              </p>
              <p className="text-[11px] text-rose-gold-deep font-medium mt-0.5">{b.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
