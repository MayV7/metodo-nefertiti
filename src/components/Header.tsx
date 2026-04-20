import { useEffect, useState } from "react";
import logo from "@/assets/logo-nefertiti.png";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-card-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="Método Nefertiti"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>
        <CTAButton size="lg" className="hidden md:inline-flex !px-6 !py-3 !text-sm">
          Quero minha vaga
        </CTAButton>
      </div>
    </header>
  );
}
