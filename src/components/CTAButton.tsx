import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "lg" | "xl";
  href?: string;
  icon?: boolean;
}

export const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/iX5ySX9";

// Single, repeated CTA mantra used across the entire landing page.
// Direct-response best practice: one consistent action, repeated, builds
// recognition and lowers cognitive load on every scroll-stop.
export const CTA_MANTRA = "Quero despertar minha Rainha Interior";

export function CTAButton({
  children,
  className,
  size = "lg",
  href = KIWIFY_CHECKOUT_URL,
  icon = true,
}: CTAButtonProps) {
  const sizes = {
    lg: "px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg",
    xl: "px-7 py-4 text-sm sm:px-10 sm:py-5 sm:text-lg md:text-xl",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full font-heading font-bold tracking-wide text-primary-foreground bg-rose-gold-gradient cta-pulse transition-transform hover:scale-[1.03] active:scale-[0.98] uppercase text-center max-w-full",
        sizes[size],
        className,
      )}
    >
      {icon && <Crown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" strokeWidth={2.2} />}
      <span className="relative leading-tight">{children ?? CTA_MANTRA}</span>
    </a>
  );
}
