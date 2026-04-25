import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "xl";
  href?: string;
  icon?: boolean;
}

export const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/iX5ySX9";

export function CTAButton({ children, className, size = "lg", href = KIWIFY_CHECKOUT_URL, icon = true }: CTAButtonProps) {
  const sizes = {
    lg: "px-8 py-4 text-base md:text-lg",
    xl: "px-10 py-5 text-lg md:text-xl",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-full font-heading font-bold tracking-wide text-primary-foreground bg-rose-gold-gradient cta-pulse transition-transform hover:scale-[1.03] active:scale-[0.98] uppercase text-center",
        sizes[size],
        className,
      )}
    >
      {icon && <Crown className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />}
      <span className="relative">{children}</span>
    </a>
  );
}
