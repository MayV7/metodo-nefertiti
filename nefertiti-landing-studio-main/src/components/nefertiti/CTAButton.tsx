import { CHECKOUT_URL } from "./data";

export function CTAButton({
  children = "Quero despertar minha Rainha Interior",
  className = "",
  size = "lg",
}: {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}) {
  const sizeCls =
    size === "lg"
      ? "px-8 py-5 text-base md:text-lg"
      : "px-6 py-3 text-sm";
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center rounded-full font-semibold text-primary-foreground bg-gradient-rose shadow-elegant hover:shadow-soft transition-all hover:scale-[1.03] active:scale-[0.99] uppercase tracking-wide animate-cta-pulse hover:animate-none ${sizeCls} ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-rose opacity-60 blur-md -z-10 animate-cta-glow" aria-hidden="true" />
      <span className="mr-2 animate-bounce-slow inline-block">👑</span>
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase tracking-[0.25em] text-xs md:text-sm font-medium text-rose-deep/80 text-center">
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-3xl md:text-5xl font-bold text-center leading-tight ${className}`}>
      <span className="text-gradient-rose">{children}</span>
    </h2>
  );
}
