import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Crown, Heart, Sparkles, ShieldCheck, Star, CheckCircle2, XCircle,
  Brain, Flame, Gem, Zap, Smartphone, Monitor, Tablet, Lock,
  CreditCard, Smartphone as Pix, ChevronRight, Quote, Gift, HelpCircle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { TopCountdown } from "@/components/TopCountdown";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { SpotsResetButton } from "@/components/SpotsResetButton";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { WhatsAppProof } from "@/components/WhatsAppProof";
import { Countdown } from "@/components/Countdown";
import { useSyncedSpots } from "@/hooks/use-spots";
import { AnimatedSpots } from "@/components/AnimatedSpots";
import logo from "@/assets/logo-nefertiti.webp";
import mockup from "@/assets/mockup-nefertiti.webp";
import marina from "@/assets/marina.jpg";
import sophia from "@/assets/sophia.jpg";
import tFernanda from "@/assets/t-fernanda.jpg";
import tClaudia from "@/assets/t-claudia.jpg";
import tAna from "@/assets/t-ana.jpg";
import tRegina from "@/assets/t-regina.jpg";
import pMariaC from "@/assets/p-mariac.jpg";
import pMarianaK from "@/assets/p-marianak.jpg";
import pPatricia from "@/assets/p-patricia.jpg";
import pSuzana from "@/assets/p-suzana.jpg";
import pVanessa from "@/assets/p-vanessa.jpg";
import ogImage from "@/assets/og-nefertiti.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Método Nefertiti — Reconquiste sua Autoestima e Presença em 21 Dias";
    const description =
      "Programa de 21 dias inspirado em estudos comportamentais (referenciados em Harvard), com mais de 3.847 mulheres atendidas. Reconstrua sua autoestima, presença feminina e magnetismo natural — do seu jeito, no seu tempo.";
    const url = "https://pay.kiwify.com.br/iX5ySX9";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "método nefertiti, autoestima feminina, presença, magnetismo natural, superar término, autoconhecimento, rainha interior, marina nefertiti" },
        { name: "author", content: "Marina — Método Nefertiti" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "theme-color", content: "#c98a73" },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Método Nefertiti" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "1200" },
        { property: "og:image:alt", content: "Método Nefertiti — Desperte sua Rainha Interior" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:url", content: url },

        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:image:alt", content: "Método Nefertiti — Desperte sua Rainha Interior" },
      ],
    };
  },
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background overflow-x-hidden pb-20 md:pb-24">
      <TopCountdown hours={12} />
      <Header />
      <SocialProofPopup />
      <StickyBottomBar />
      <SpotsResetButton />

      <Hero />
      <Pain />
      <MarinaStory />
      <ForWhom />
      <Discovery />
      <Triggers />
      <Method />
      <Modules />
      <Bonuses />
      <Devices />
      <Offer />
      <FirstResults />
      <WhatsAppProof />
      <MoreProof />
      <Guarantee />
      <Decision />
      <PostGuaranteePrice />
      <FAQ />
      <Scarcity />
      <Objections />
      <Footer />
    </div>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-rose-soft-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 10%, oklch(0.82 0.075 35 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.95 0.025 75 / 0.7), transparent 60%)" }} />
      <div className="container mx-auto px-4 relative">
        <Reveal>
          <div className="flex justify-center mb-8 lg:mb-10">
            <img src={logo} alt="Método Nefertiti" width={200} height={200} fetchPriority="high" decoding="async" className="h-16 md:h-24 w-auto float-soft" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* COPY — 60% desktop */}
          <div className="text-center lg:text-left">
            <Reveal delay={0.15}>
              <p className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[0.7rem] md:text-xs text-rose-gold-deep uppercase tracking-[0.35em] font-heading font-semibold mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Para mulheres que amaram demais e foram esquecidas rápido demais</span>
                <Sparkles className="h-3.5 w-3.5" />
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-foreground">
                <span className="hero-headline block">
                  <span className="block">Se ele te deixou</span>
                  <span className="hero-power block mt-2">e levou junto a sua autoestima…</span>
                  <span className="accent block mt-3">descubra o método em 21 dias que já reconstruiu a presença e o magnetismo de +3.847 mulheres</span>
                  <span className="block mt-3 text-2xl md:text-3xl font-normal italic opacity-90">— sem perseguir, sem implorar, sem fingir que está bem.</span>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="hero-sub mt-6 max-w-2xl mx-auto lg:mx-0">
                Um <strong>protocolo emocional de 21 dias</strong> criado para mulheres que estão cansadas de chorar escondido e prontas para voltar a se sentir <strong>inteiras, desejadas e no comando</strong> — começando hoje, mesmo que ele já tenha seguido em frente.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
                <CTAButton size="xl" />
                <p className="text-xs text-muted-foreground italic max-w-md">
                  Acesso imediato · Garantia incondicional de 7 dias · Restam apenas <AnimatedSpots className="text-rose-gold-deep font-bold" /> vagas neste lote.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.65}>
              <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0">
                {[
                  "Acesso imediato e vitalício",
                  "Garantia de 7 dias — risco zero",
                  "+3.847 mulheres transformadas",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-rose-gold-deep shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* MOCKUP — 40% desktop */}
          <Reveal delay={0.3}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-6 bg-rose-gold-gradient opacity-30 blur-3xl rounded-full pointer-events-none" />
              <img
                src={mockup}
                alt="Método Nefertiti — acesso em todos os dispositivos"
                width={800}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="relative w-full h-auto float-soft drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
              <div className="relative mt-4 flex items-center justify-center gap-2 text-[10px] md:text-xs text-rose-gold-deep uppercase tracking-[0.3em] font-heading font-semibold">
                <Smartphone className="h-3.5 w-3.5" /> Celular
                <span className="opacity-30">·</span>
                <Tablet className="h-3.5 w-3.5" /> Tablet
                <span className="opacity-30">·</span>
                <Monitor className="h-3.5 w-3.5" /> Computador
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PAIN -------------------- */
function Pain() {
  const tried = [
    "Fingiu que estava bem pessoalmente e nas redes sociais (mas chorava no banho, em segredo, onde ninguém podia ver sua alma sangrar).",
    "Saiu com outros homens para tentar esquecer (mas só se sentiu mais vazia, comparando cada um deles a ele).",
    "Seguiu todos os conselhos das amigas (que só te confundiram mais, pois elas não entendem a profundidade da sua dor).",
  ];
  const feels = [
    "Acorda no meio da madrugada, com o coração apertado, pensando nele — e ele ainda assombra seus sonhos, roubando seu sono e sua energia.",
    "Verifica compulsivamente as redes sociais, buscando qualquer sinal dele, ou pior, dela — sentindo uma pontada de ciúmes a cada nova foto.",
    "Se ele já estiver com outra, a pergunta 'o que ela tem que eu não tenho?' te consome, minando sua autoconfiança.",
    "Sente que perdeu sua capacidade de atrair e sua autoestima está em frangalhos, acreditando que nunca mais será desejada.",
    "Se fechou para o amor, com medo de sofrer novamente, e teme nunca mais ser desejada como antes.",
  ];
  return (
    <section className="py-20 md:py-28 bg-muted relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            A Ferida Aberta: <span className="text-rose-gold-gradient">onde a alma chora</span> e o mundo não vê
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Se você já sentiu o chão sumir sob seus pés após um término… se a dor da rejeição parece uma ferida que nunca cicatriza… se a cada amanhecer a ausência dele é um peso insuportável no peito… eu sei <em className="text-foreground font-semibold not-italic">exatamente</em> como você se sente. Você está aqui porque algo dentro de você QUEBROU quando ele disse aquelas palavras. Elas não apenas terminaram um relacionamento — estilhaçaram sua autoestima.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 bg-card rounded-3xl p-6 md:p-10 shadow-card-soft border border-rose-gold/15">
            <h3 className="font-heading font-bold text-rose-gold-deep uppercase tracking-wider text-sm mb-5">
              Você já tentou de tudo para parar a dor:
            </h3>
            <ul className="space-y-3">
              {tried.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <XCircle className="h-5 w-5 text-rose-gold-deep shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <h3 className="mt-12 font-display text-2xl md:text-3xl text-center text-foreground">
            Posso estar errada, mas tenho quase certeza que você…
          </h3>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {feels.map((t, i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-5 border border-rose-gold/15 flex items-start gap-3 h-full shadow-card-soft">
                <Heart className="h-5 w-5 text-rose-gold-deep shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-foreground text-[15px]">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
              Se você assentiu para pelo menos 3 dessas afirmações, você não está sozinha. E, mais importante: <strong>você está no lugar CERTO!</strong> O que vou compartilhar com você nas próximas linhas não vai apenas mudar a forma como você se vê, mas como o mundo inteiro — e principalmente os homens — te veem.
            </p>
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- FIRST RESULTS -------------------- */
function FirstResults() {
  const stats = [
    { v: "3.847+", l: "Mulheres transformadas" },
    { v: "96%", l: "Taxa de satisfação" },
    { v: "21", l: "Dias para resultados" },
    { v: "4.9★", l: "Avaliação média" },
  ];
  const testimonials = [
    {
      name: "Fernanda M.", age: 36, role: "Publicitária", photo: tFernanda,
      text: "Em apenas 10 dias aplicando o Método Nefertiti, meu ex (que havia me bloqueado há 3 meses) voltou a me procurar. Mas o mais importante: hoje estou com alguém que me valoriza de verdade.",
      highlight: "Desenvolveu poder de escolha total.",
    },
    {
      name: "Claudia R.", age: 49, role: "Dentista", photo: tClaudia,
      text: "Aos 49 anos e após 3 filhos, eu pensava que jamais seria desejada. Hoje estou noiva de um empresário de 41 anos que me trata como a mulher mais especial do mundo.",
      highlight: "Idade não importa. O amor verdadeiro floresce em qualquer fase.",
    },
    {
      name: "Ana Carolina", age: 28, role: "Arquiteta", photo: tAna,
      text: "Em 2 semanas tinha 3 homens de alto valor interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Não precisava mais implorar por atenção.",
      highlight: "Ela se tornou a caçadora, não a caça.",
    },
    {
      name: "Regina T.", age: 56, role: "Professora", photo: tRegina,
      text: "Achava que minha idade era um problema. MENTIRA! Hoje namoro um homem 12 anos mais novo. Nunca fui tão feliz — viajamos, namoramos… só agradeço!",
      highlight: "Maturidade como superpoder.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-rose-soft-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">
              ⭐⭐⭐⭐⭐ Resultados Reais
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
              O Que Nossas Alunas <span className="text-rose-gold-gradient">Estão Dizendo</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Já são mais de <strong className="text-foreground">3.847 transformações documentadas</strong> que comprovam: o <span className="font-display italic">Método Nefertiti</span> funciona. Não é teoria; é realidade palpável.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="bg-graphite-gradient text-pearl rounded-2xl p-5 md:p-7 text-center shadow-card-soft border border-rose-gold/20">
                <div className="font-display text-3xl md:text-4xl font-bold text-rose-gold-gradient">{s.v}</div>
                <div className="mt-2 text-xs md:text-sm font-heading uppercase tracking-wider opacity-90">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-elegant border border-rose-gold/15 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.photo} alt={t.name} loading="lazy" width={64} height={64} className="h-16 w-16 rounded-full object-cover border-2 border-rose-gold/40 shadow-card-soft shrink-0" />
                  <div>
                    <p className="testimonial-name text-foreground leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.age} anos • {t.role}</p>
                    <div className="flex items-center gap-0.5 text-rose-gold-deep mt-1">
                      {[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-rose-gold-deep mb-2 opacity-60" />
                <p className="testimonial-quote text-foreground flex-1">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-sm text-rose-gold-deep font-medium flex items-start gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 mt-0.5" /> {t.highlight}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-14">
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- MARINA STORY -------------------- */
function MarinaStory() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal y={40}>
            <div className="relative">
              <div className="absolute -inset-4 bg-rose-gold-gradient opacity-25 blur-2xl rounded-full" />
              <img src={marina} alt="Marina, mentora do Método Nefertiti" loading="lazy" className="relative rounded-3xl shadow-elegant border border-rose-gold/20 w-full" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-heading font-bold text-rose-gold-deep uppercase tracking-widest text-sm">Vamos às apresentações</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Meu nome é <span className="text-rose-gold-gradient">Marina</span> e eu era você alguns anos atrás…
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Em outubro de 2022, eu estava exatamente onde você está agora. Deitada no chão do banheiro, às 3h da manhã, chorando compulsivamente porque tinha visto uma foto dele com outra mulher no Instagram.
                </p>
                <p>
                  <strong>6 anos de relacionamento. JOGADOS FORA, do nada.</strong> Eu, que sempre fui a namorada perfeita. Cuidava dele, cozinhava, estava sempre disponível para o que ele precisasse… fazia tudo para vê-lo feliz. E mesmo assim, ele me trocou. A dor era insuportável, a humilhação, paralisante.
                </p>
                <p>
                  Pelos próximos 6 meses, me transformei numa sombra: perdi 8kg (não de forma saudável), evitava sair de casa para não ver outros casais, me sentia <strong>INVISÍVEL</strong> para qualquer homem interessante. Chegava a ter ataques de pânico quando via que ele havia visualizado meu status — uma falsa esperança que só prolongava meu sofrimento.
                </p>
                <p>
                  Sofri TANTO… Mas então, durante uma viagem pela primeira vez SOZINHA, conheci a <strong>Dra. Sophia Miendez</strong> — psicóloga comportamental renomada, especializada em dinâmicas de atração, que havia estudado por mais de <strong>25 anos</strong> os padrões das mulheres mais magneticamente irresistíveis da história. Nefertiti, a Rainha do Egito, por exemplo.
                </p>
                <p className="font-display italic text-xl text-rose-gold-deep border-l-4 border-rose-gold pl-5">
                  "Marina, você realmente acredita que Nefertiti chorava no banheiro quando foi rejeitada? Ela fazia o OPOSTO disso. Sua presença deixava os homens loucos para decifrá-la."
                </p>
                <p>
                  Dra. Sophia me ajudou a refinar todo seu conhecimento e implementamos vários testes de campo antes de nascer o <span className="font-display italic">Método Nefertiti</span>. Deu tão certo que hoje já ajudamos <strong className="text-rose-gold-deep">+3.847 mulheres</strong> a superarem um término doloroso, recuperarem a autoestima e darem a volta por cima — tornando-se genuíno magnetismo irresistível para homens de alto valor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOR WHOM (filtro de qualificação) -------------------- */
function ForWhom() {
  const para = [
    "Mulheres entre 25 e 60 anos que viveram um término doloroso e ainda carregam a dor.",
    "Quem está cansada de chorar escondido fingindo que está bem nas redes sociais.",
    "Quem já tentou conselhos de amigas, terapia, distrações — e nada devolveu sua autoestima.",
    "Mulheres prontas para parar de implorar atenção e voltar a ser a escolhida, não a opção.",
    "Quem quer reconstruir presença, magnetismo e poder de escolha — sem mudar quem é.",
  ];
  const naoPara = [
    "Mulheres que querem manipular, vingar-se ou destruir o ex.",
    "Quem busca uma 'fórmula mágica' que funciona sem aplicação consciente.",
    "Quem não está disposta a investir 15 minutos por dia em si mesma por 21 dias.",
    "Quem prefere continuar reclamando da situação a transformá-la de verdade.",
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">⚖️ Honestidade total</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              O <span className="font-display italic text-rose-gold-gradient">Método Nefertiti</span> é para você?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Eu prefiro ser direta agora a te decepcionar depois. Leia com atenção — esta página não é para todo mundo.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="bg-rose-soft-gradient border-2 border-rose-gold/40 rounded-3xl p-7 md:p-9 h-full shadow-elegant">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-2xl bg-rose-gold-gradient flex items-center justify-center shadow-glow">
                  <CheckCircle2 className="h-6 w-6 text-pearl" strokeWidth={2.4} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">É para você se…</h3>
              </div>
              <ul className="space-y-3">
                {para.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-foreground/90 text-[15px] leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-rose-gold-deep shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-muted border border-border rounded-3xl p-7 md:p-9 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-2xl bg-foreground/10 flex items-center justify-center">
                  <span className="font-display font-bold text-foreground/70 text-2xl leading-none">×</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground/80">NÃO é para você se…</h3>
              </div>
              <ul className="space-y-3">
                {naoPara.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-foreground/70 text-[15px] leading-relaxed">
                    <span className="text-foreground/40 font-display font-bold text-lg leading-none mt-0.5 shrink-0">×</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Se você se reconheceu na coluna da esquerda, <strong className="text-rose-gold-deep">esta pode ser a decisão mais importante que você toma este ano</strong>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- DISCOVERY -------------------- */
function Discovery() {
  const milestones = [
    { day: "7 dias", text: "Um homem na academia do meu prédio me parou e disse: 'UAU! Preciso saber qual é o seu segredo, pois não paro mais de olhar pra você… estou hipnotizado!' E pediu meu WhatsApp." },
    { day: "14 dias", text: "Recebi 3 convites para jantar. Meu ex mandou mensagem perguntando 'como eu estava'. Amigas começaram a perguntar que BRUXARIA eu estava fazendo. 🤣 A verdade? Não era bruxaria — era CIÊNCIA." },
    { day: "21 dias", text: "Tinha 5 homens me cortejando simultaneamente. Me sentia PODEROSA pela primeira vez em anos. Finalmente senti o oposto de migalhas emocionais — eu havia me tornado a Rainha da minha própria vida." },
  ];
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.7 0.105 33 / 0.6), transparent 60%)" }} />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">A Grande Descoberta</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold leading-tight">
              O <span className="text-rose-gold-gradient">"Efeito Inversão Psicológica"</span> — sua arma secreta
            </h2>
            <p className="mt-6 text-pearl/85 leading-relaxed">
              Dra. Sophia me mostrou pesquisas comportamentais de referência (incluindo trabalhos divulgados por Harvard) sugerindo que homens relatam atração significativamente maior por mulheres que praticam o que ela chama de <strong className="text-rose-gold-gradient">"disponibilidade seletiva"</strong> — estar presente, mas não necessitada. Não é sobre joguinhos; é sobre <strong>valor intrínseco</strong>.
            </p>
            <p className="mt-4 text-pearl/85 leading-relaxed">
              E o que aconteceu depois que Marina aplicou esse conhecimento? A transformação foi <strong className="text-rose-gold-gradient">IMEDIATA e IRREVERSÍVEL</strong>:
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 items-end h-40">
              {[35, 60, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  className="bg-rose-gold-gradient rounded-t-lg flex items-end justify-center pb-2 text-xs font-bold text-pearl shadow-glow"
                >
                  {i === 0 ? "Antes" : i === 1 ? "+150%" : "+347%"}
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {milestones.map((m, i) => (
              <Reveal key={m.day} delay={i * 0.12}>
                <div className="bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-2xl p-5 flex gap-4">
                  <div className="shrink-0 h-14 w-14 rounded-full bg-rose-gold-gradient flex items-center justify-center font-display font-bold text-pearl shadow-glow">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-rose-gold-gradient text-lg">Em {m.day}</p>
                    <p className="text-pearl/90 text-sm leading-relaxed mt-1">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <div className="flex items-center gap-4 mt-6 bg-card/10 backdrop-blur rounded-2xl p-4 border border-rose-gold/20">
                <img src={sophia} alt="Dra. Sophia Miendez" loading="lazy" className="h-16 w-16 rounded-full object-cover border-2 border-rose-gold" />
                <div>
                  <p className="font-heading font-bold text-pearl">Dra. Sophia Miendez</p>
                  <p className="text-xs text-pearl/70">Psicóloga comportamental • 25 anos de pesquisa</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.5}>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-pearl/90 leading-relaxed">
              Hoje, <strong className="text-rose-gold-gradient">+4 anos depois</strong>, já ajudei +3.847 mulheres a fazerem a mesma transformação e ressignificarem suas vidas amorosas. Elas não apenas superaram o término — elas <strong>DOMINARAM</strong> a arte da atração. E agora é <span className="text-rose-gold-gradient font-bold">SUA vez</span>. Não amanhã. Não depois. <strong>AGORA</strong>.
            </p>
            <div className="mt-8">
              <CTAButton size="xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- METHOD INTRO -------------------- */
function Method() {
  const items = [
    "Sua idade — funciona MUITO bem dos 20 aos 65 anos (a psicologia humana é universal)",
    "Há quanto tempo foi o término — a dor pode ser revertida a qualquer momento",
    "Se ele já está com outra — o magnetismo que você vai desenvolver é incomparável",
    "Se você se sente 'sem esperança' — este método é sua última e definitiva esperança",
  ];
  return (
    <section className="py-20 md:py-28 bg-rose-soft-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal y={40}>
            <div className="relative">
              <div className="absolute -inset-6 bg-rose-gold-gradient opacity-25 blur-3xl rounded-full" />
              <img
                src={mockup}
                alt="Método Nefertiti — acesso em celular, tablet e computador"
                loading="lazy"
                width={900}
                height={748}
                className="relative w-full max-w-md mx-auto h-auto object-contain drop-shadow-2xl float-soft"
              />
            </div>
          </Reveal>
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">Apresentando a vocês</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                <span className="font-display italic font-semibold text-4xl md:text-6xl text-rose-gold-gradient block leading-tight mt-2">Método Nefertiti</span>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
                O primeiro sistema de reversão psicológica que transforma rejeição em <strong>magnetismo irresistível</strong> — validado por quem realmente entende da mente masculina. Você para de ser a "rejeitada" e se torna a Rainha Desejada, de forma 100% autêntica. Sem joguinhos. Apenas pura persuasão e magnetismo natural.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
              {items.map((t, i) => (
                <Reveal key={t} delay={i * 0.07}>
                  <div className="bg-card/80 backdrop-blur rounded-2xl p-4 flex items-start gap-3 border border-rose-gold/20 shadow-card-soft h-full">
                    <CheckCircle2 className="h-5 w-5 text-rose-gold-deep shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRIGGERS -------------------- */
function Triggers() {
  const triggers = [
    {
      icon: Brain, title: "Escassez Neural", subtitle: "O segredo da obsessão",
      text: "Quando você para de estar 'sempre disponível', o cérebro masculino interpreta como alta qualidade e dispara o sistema de recompensa primitivo.",
      result: "Ele pensa em você obsessivamente.",
    },
    {
      icon: Zap, title: "Desafio Cognitivo", subtitle: "A caça que ele não pode resistir",
      text: "Tornar-se ligeiramente inalcançável ativa o centro de prazer cerebral — o mesmo que durante a caça. Ele quer o desafio de conquistar uma rainha.",
      result: "Necessidade compulsiva de te conquistar.",
    },
    {
      icon: Gem, title: "Investimento Crescente", subtitle: "Ancoragem emocional irreversível",
      text: "Quando ele percebe que está investindo mais do que recebendo, o Efeito IKEA é ativado — quanto mais investe, mais valoriza.",
      result: "Ele luta para te manter.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">O código secreto da atração</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              Os <span className="text-rose-gold-gradient">3 Gatilhos Neurológicos</span> que fazem homens te perseguirem (no bom sentido)
            </h2>
            <p className="mt-4 text-pearl/80 max-w-2xl mx-auto text-sm md:text-base">
              Estes não são truques baratos. São princípios da neurociência e da psicologia comportamental que ativam o centro de prazer e recompensa no cérebro masculino — tornando você uma obsessão saudável.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {triggers.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.12}>
              <div className="bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-7 h-full hover:border-rose-gold/60 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-rose-gold-gradient flex items-center justify-center shadow-glow">
                    <t.icon className="h-6 w-6 text-pearl" />
                  </div>
                  <span className="font-display text-3xl font-bold text-rose-gold-gradient">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-pearl">{t.title}</h3>
                <p className="text-rose-gold text-sm font-heading uppercase tracking-wider mt-1">{t.subtitle}</p>
                <p className="mt-4 text-pearl/85 leading-relaxed text-sm">{t.text}</p>
                <div className="mt-5 pt-5 border-t border-rose-gold/20">
                  <p className="text-rose-gold-gradient font-heading font-bold text-sm">→ {t.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- MORE PROOF (with photos) -------------------- */
function MoreProof() {
  const list = [
    { name: "Maria Clara", age: 28, photo: pMariaC, text: "Em 11 dias meu ex voltou pedindo outra chance. Mas agora EU é que não sei se quero ele de volta…" },
    { name: "Mariana K.", age: 38, photo: pMarianaK, text: "Ele bloqueou todo mundo menos eu. Agora me liga às 2 da manhã dizendo que errou…" },
    { name: "Patrícia L.", age: 50, photo: pPatricia, text: "Aos 50, em 3 semanas tinha 2 homens me cortejando. Estou nas nuvens!" },
    { name: "Suzana S.", age: 52, photo: pSuzana, text: "Depois de 5 anos num relacionamento tóxico, em menos de um mês conheci um homem incrível." },
    { name: "Vanessa L.", age: 41, photo: pVanessa, text: "Hoje estou solteira, feliz e com uma fila de pretendentes de alto valor. A liberdade é indescritível." },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            Não acredite em mim. <span className="text-rose-gold-gradient">Acredite nelas.</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Mulheres reais, histórias reais — alunas que reescreveram seus destinos com o <span className="font-display italic">Método Nefertiti</span>.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-card rounded-3xl p-6 shadow-elegant border border-rose-gold/15 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.photo} alt={t.name} loading="lazy" width={64} height={64} className="h-16 w-16 rounded-full object-cover border-2 border-rose-gold/40 shrink-0" />
                  <div>
                    <p className="testimonial-name text-foreground leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.age} anos</p>
                    <div className="flex items-center gap-0.5 text-rose-gold-deep mt-1">
                      {[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="testimonial-quote text-foreground flex-1">"{t.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- MODULES -------------------- */
function Modules() {
  const mods = [
    {
      icon: Flame, title: "Cura e Renovação Interior", days: "Dias 1-7",
      bullets: [
        "Ritual de 48h que elimina 90% da dor emocional",
        "Técnica de Ressignificação Neural",
        "Protocolo de Libertação Emocional",
        "7 exercícios de reconexão com sua essência",
      ],
      outcome: "Você vai se sentir 10x mais forte e centrada.",
    },
    {
      icon: Gem, title: "Ativação do Poder Feminino", days: "Dias 8-14",
      bullets: [
        "Os 7 Pilares da Presença Magnética",
        "Linguagem Corporal de Poder",
        "Técnicas de Comunicação Hipnótica",
        "Sistema de Elevação da Autoestima",
      ],
      outcome: "Homens demonstrarão interesse renovado e genuíno.",
    },
    {
      icon: Zap, title: "Estratégias de Atração Natural", days: "Dias 15-21",
      bullets: [
        "Sistema de Escassez Saudável",
        "Protocolo de Atração Reversa",
        "Estratégias de reconquista sem desespero",
        "Como atrair homens de alto valor",
      ],
      outcome: "Você vai ter opções, e poder de escolha total.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-rose-soft-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">O Que Você Vai Receber</p>
            <p className="mt-2 font-heading font-semibold text-foreground/75 tracking-[0.25em] uppercase text-xs md:text-sm">
              Por dentro do <span className="font-display italic normal-case tracking-normal text-rose-gold-deep">Método Nefertiti</span>
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Um programa de <span className="text-rose-gold-gradient">21 dias</span>, em 3 módulos poderosos
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Desenhado para reativar seu poder feminino e transformar sua vida amorosa de forma <strong className="text-foreground">permanente</strong>.
            </p>
          </div>
        </Reveal>
        <Reveal y={40}>
          <div className="relative max-w-sm md:max-w-md mx-auto mb-14">
            <div className="absolute -inset-6 bg-rose-gold-gradient opacity-25 blur-3xl rounded-full" />
            <img
              src={mockup}
              alt="Método Nefertiti — acesso em celular, tablet e computador"
              loading="lazy"
              width={900}
              height={748}
              className="relative w-full h-auto object-contain drop-shadow-2xl float-soft"
            />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {mods.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.12}>
              <div className="bg-card rounded-3xl p-7 shadow-elegant border border-rose-gold/20 h-full flex flex-col">
                <div className="h-14 w-14 rounded-2xl bg-rose-gold-gradient flex items-center justify-center shadow-glow">
                  <m.icon className="h-7 w-7 text-pearl" />
                </div>
                <p className="mt-4 text-xs font-heading font-bold tracking-widest uppercase text-rose-gold-deep">Módulo {i + 1} • {m.days}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{m.title}</h3>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <ChevronRight className="h-4 w-4 text-rose-gold-deep shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-border bg-rose-soft-gradient -mx-7 -mb-7 px-7 py-4 rounded-b-3xl">
                  <p className="text-sm text-rose-gold-deep font-heading font-semibold flex items-start gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 mt-0.5" /> {m.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- DEVICES -------------------- */
function Devices() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <Reveal>
          <p className="font-heading font-semibold text-foreground text-lg md:text-2xl">
            <span className="font-display italic">Método Nefertiti</span> — Sua transformação acessível em qualquer lugar, a qualquer hora
          </p>
          <div className="mt-5 flex items-center justify-center gap-6 md:gap-10 text-rose-gold-deep">
            <div className="flex items-center gap-2"><Smartphone className="h-5 w-5" /><span className="text-sm font-heading">Celular</span></div>
            <div className="flex items-center gap-2"><Monitor className="h-5 w-5" /><span className="text-sm font-heading">Computador</span></div>
            <div className="flex items-center gap-2"><Tablet className="h-5 w-5" /><span className="text-sm font-heading">Tablet</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- BONUSES -------------------- */
function Bonuses() {
  const bonuses = [
    { title: "Guia de Transformação Digital", price: "R$297", items: ["Scripts para redes sociais", "Irresistível no WhatsApp", "Soft ghosting que faz ele correr atrás"] },
    { title: "Manual de Inteligência Emocional", price: "R$467", items: ["Identifique homens emocionalmente indisponíveis", "Leia sinais masculinos com 99% de precisão", "Faça qualquer homem se abrir emocionalmente"] },
    { title: "Comunicação Feminina Avançada", price: "R$697", items: ["Scripts testados de conversação", "Técnicas para cada situação", "Texting que gera desejo incontrolável"] },
  ];
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">🎁 Empilhamento de valor que quebra a banca</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-rose-gold-gradient">Bônus Exclusivos</span> — seu caminho acelerado para o magnetismo
            </h2>
            <p className="mt-4 text-pearl/80 max-w-2xl mx-auto">
              Um presente de valor incalculável — incluso gratuitamente na sua compra hoje.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="relative bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-7 h-full flex flex-col">
                <div className="absolute -top-3 -right-3 bg-rose-gold-gradient text-pearl font-heading font-bold text-xs px-3 py-1.5 rounded-full shadow-glow">
                  BÔNUS #{i + 1}
                </div>
                {/* Mockup visual do bônus — capa estilizada */}
                <div className="relative mx-auto mb-5 w-32 h-44 perspective">
                  <div className="absolute inset-0 bg-rose-gold-gradient opacity-40 blur-2xl rounded-2xl" />
                  <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-rose-gold via-rose-gold-deep to-graphite border-2 border-rose-gold/60 shadow-glow flex flex-col items-center justify-center p-3 text-center transform rotate-[-3deg] hover:rotate-0 transition-transform">
                    <Gift className="h-7 w-7 text-pearl mb-2" strokeWidth={2.2} />
                    <p className="font-heading uppercase tracking-widest text-[0.55rem] text-pearl/80">Bônus #{i + 1}</p>
                    <p className="font-display text-[0.7rem] font-bold text-pearl leading-tight mt-1">{b.title}</p>
                    <span className="mt-2 inline-block bg-pearl text-rose-gold-deep font-heading font-bold text-[0.55rem] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Grátis
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-pearl text-center">{b.title}</h3>
                <ul className="mt-4 space-y-2 flex-1">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-pearl/85">
                      <CheckCircle2 className="h-4 w-4 text-rose-gold shrink-0 mt-0.5" /><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-rose-gold/20 flex items-baseline justify-between">
                  <span className="text-pearl/60 line-through">{b.price}</span>
                  <span className="font-heading font-bold text-rose-gold-gradient">GRÁTIS hoje</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center bg-rose-gold-gradient rounded-3xl p-8 shadow-glow max-w-2xl mx-auto">
            <div className="flex justify-center mb-3">
              <Gift className="h-10 w-10 text-pearl" strokeWidth={2.2} />
            </div>
            <p className="font-heading uppercase tracking-widest text-pearl/90 text-sm">Valor total dos bônus</p>
            <p className="font-display text-3xl md:text-4xl font-bold text-pearl/70 mt-2 line-through decoration-pearl/80 decoration-[3px]">R$ 1.461,00</p>
            <p className="font-display text-4xl md:text-5xl font-bold text-pearl mt-3">GRÁTIS hoje</p>
            <p className="mt-2 text-pearl/95 font-heading">Seu presente — incluso gratuitamente na sua compra.</p>
          </div>
        </Reveal>

        {/* SELO DE GARANTIA AMPLIADO — RISCO INVERTIDO */}
        <Reveal delay={0.4}>
          <div className="mt-14 max-w-3xl mx-auto bg-pearl/5 backdrop-blur-md border-2 border-rose-gold/40 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-rose-gold-gradient opacity-20 blur-3xl pointer-events-none" />
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center relative">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-rose-gold-gradient flex flex-col items-center justify-center shadow-glow border-4 border-pearl/30">
                    <ShieldCheck className="h-10 w-10 text-pearl" strokeWidth={2.2} />
                    <p className="font-display font-bold text-pearl text-xl leading-none mt-1">7</p>
                    <p className="font-heading uppercase tracking-widest text-[0.55rem] text-pearl/95">dias</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="font-heading font-bold text-rose-gold uppercase tracking-widest text-xs">Risco invertido</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-pearl leading-tight">
                  Se o método não funcionar para você, <span className="text-rose-gold-gradient">eu devolvo cada centavo</span> — e você fica com os bônus.
                </h3>
                <p className="mt-4 text-pearl/85 leading-relaxed text-[15px]">
                  Você tem <strong>7 dias inteiros</strong> para mergulhar no Método Nefertiti. Se em qualquer momento desse período você sentir que não é para você, basta enviar um e-mail. Sem perguntas. Sem burocracia. <span className="text-rose-gold-gradient font-bold">O risco é todo meu.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- OFFER -------------------- */
function Offer() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-rose-soft-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-graphite-gradient text-pearl px-4 py-2 rounded-full font-heading text-xs md:text-sm uppercase tracking-widest border border-rose-gold/40">
              ⚠ Apenas <AnimatedSpots className="text-rose-gold font-bold" live /> vagas restantes neste lote
            </span>
            <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              A decisão que <span className="text-rose-gold-gradient">define seu futuro</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-elegant border border-rose-gold/30">
            <div className="text-center">
              <p className="font-heading uppercase tracking-widest text-rose-gold-deep text-sm">A oferta termina em</p>
              <div className="mt-4">
                <Countdown minutes={47} />
              </div>
            </div>

            <div className="mt-10">
              <p className="text-center font-heading uppercase tracking-[0.3em] text-rose-gold-deep text-xs mb-5">
                Tudo o que você recebe hoje
              </p>
              <ul className="space-y-2.5 max-w-xl mx-auto text-sm md:text-base">
                {[
                  { item: "Método Nefertiti completo (3 módulos)", value: "R$ 997" },
                  { item: "Bônus #1 — Guia de Transformação Digital", value: "R$ 297" },
                  { item: "Bônus #2 — Manual de Inteligência Emocional", value: "R$ 467" },
                  { item: "Bônus #3 — Comunicação Feminina Avançada", value: "R$ 697" },
                ].map((row) => (
                  <li
                    key={row.item}
                    className="flex items-start justify-between gap-4 py-2 border-b border-rose-gold/15 last:border-b-0"
                  >
                    <span className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-rose-gold-deep shrink-0 mt-1" />
                      {row.item}
                    </span>
                    <span className="font-heading font-semibold text-muted-foreground tabular-nums shrink-0">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between gap-4 max-w-xl mx-auto bg-muted/60 rounded-2xl px-5 py-4 border border-rose-gold/20">
                <span className="font-heading uppercase tracking-wider text-foreground text-sm">Valor real</span>
                <span className="font-display text-xl md:text-2xl font-bold text-foreground line-through opacity-70 tabular-nums">
                  R$ 2.458
                </span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="price-original">De R$ 997,00</p>
              <p className="mt-3 font-heading text-xs md:text-sm uppercase tracking-[0.4em] text-rose-gold-deep">Hoje, por apenas</p>
              <p className="mt-3 leading-none">
                <span className="price-hero-prefix">12x</span>
                <span className="price-hero">R$ 14<span className="price-hero-cents">,70</span></span>
              </p>
              <p className="price-sub mt-4 text-muted-foreground">
                ou <strong className="text-foreground">R$ 147,00</strong> à vista no PIX — <span className="text-rose-gold-deep font-semibold">menos de R$ 0,50/dia</span> pela sua transformação
              </p>

              <div className="mt-8">
                <CTAButton size="xl" />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-rose-gold-deep" /> Compra 100% segura</span>
                <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4 text-rose-gold-deep" /> Cartão</span>
                <span className="flex items-center gap-1.5"><Pix className="h-4 w-4 text-rose-gold-deep" /> PIX</span>
              </div>
            </div>

            <div className="mt-8 bg-muted/60 rounded-2xl p-5 flex items-start gap-4 border border-rose-gold/15">
              <ShieldCheck className="h-10 w-10 text-rose-gold-deep shrink-0" />
              <div>
                <p className="font-heading font-bold text-foreground">Garantia incondicional de 7 dias</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Se por qualquer motivo você não se sentir satisfeita, basta enviar um e-mail e devolveremos cada centavo. Seu risco é zero.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- DECISION -------------------- */
function Decision() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="font-heading font-bold text-rose-gold-deep uppercase tracking-widest text-sm">Querida</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Chegou <span className="text-rose-gold-gradient">sua hora</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Você tem duas opções agora:
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="bg-muted rounded-3xl p-7 md:p-9 border border-border h-full relative overflow-hidden">
              <div className="absolute top-5 right-5 text-6xl font-display font-bold text-foreground/5">01</div>
              <p className="font-heading font-bold text-muted-foreground uppercase tracking-widest text-xs">Opção 1</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground/70">Feche esta página</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">
                Continue vivendo a mesma dor, a mesma insegurança, a mesma sensação de que "nunca mais vai ser a mesma" — e ainda fique com aquele arrependimento por não ter entrado para o <span className="font-display italic">Método Nefertiti</span>.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">
                Continue vendo outras mulheres conquistarem os homens que você deseja. Continue se sentindo invisível e desvalorizada — e ainda somado a tudo isso, um coração partido e uma ferida que não cicatriza. 😪
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-rose-soft-gradient rounded-3xl p-7 md:p-9 border-2 border-rose-gold/40 shadow-elegant h-full relative overflow-hidden">
              <div className="absolute top-5 right-5 text-6xl font-display font-bold text-rose-gold/15">02</div>
              <p className="font-heading font-bold text-rose-gold-deep uppercase tracking-widest text-xs">Opção 2</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">
                Decida que <span className="text-rose-gold-gradient">hoje</span> sua vida muda 👸
              </h3>
              <p className="mt-4 text-foreground leading-relaxed text-[15px]">
                Porque <strong>VOCÊ MERECE</strong>. Que você nunca mais vai aceitar migalhas emocionais de homem nenhum. Que você vai se tornar a mulher que tem opções de alto valor e se sente estimada e valorizada.
              </p>
              <p className="mt-4 text-foreground leading-relaxed text-[15px]">
                Que <strong>você é quem escolhe</strong> e é desejada — não só pelo seu corpo, dinheiro ou beleza, mas por sua feminilidade e poder de atração magnética que deixa os homens hipnotizados, loucos para te decifrar.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              A escolha é sua. Mas lembre-se: <strong className="text-rose-gold-deep">apenas <AnimatedSpots className="font-bold" /> vagas restantes</strong> e este preço especial <strong>nunca mais</strong> será oferecido.
            </p>
            <div className="mt-8">
              <CTAButton size="xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- GUARANTEE -------------------- */
function Guarantee() {
  const items = [
    {
      title: "Resultados ou dinheiro de volta",
      text: "Se em 7 dias você não se sentir pelo menos 10x mais confiante e poderosa, devolvemos cada centavo. Sem perguntas, sem burocracia.",
    },
    {
      title: "Satisfação total",
      text: "Se por qualquer motivo você não ficar 100% satisfeita com o conteúdo, tem 7 dias para pedir reembolso total.",
    },
    {
      title: "Suporte VIP",
      text: "Acesso direto comigo e com minha equipe por 21 dias. Suas perguntas serão respondidas em até 48 horas.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, oklch(0.7 0.105 33 / 0.6), transparent 60%)" }} />
      <div className="container mx-auto px-4 max-w-5xl relative">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-20 w-20 rounded-full bg-rose-gold-gradient items-center justify-center shadow-glow mb-5">
              <ShieldCheck className="h-10 w-10 text-pearl" strokeWidth={2.2} />
            </div>
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">🛡️ Tripla garantia blindada</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              Você literalmente <span className="text-rose-gold-gradient">não tem nada a perder</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-7 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-3xl font-bold text-rose-gold-gradient">#{i + 1}</span>
                  <CheckCircle2 className="h-6 w-6 text-rose-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-pearl">{g.title}</h3>
                <p className="mt-3 text-pearl/85 text-sm leading-relaxed">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-pearl/95 max-w-2xl mx-auto leading-relaxed">
            Ou você se transforma, ou seu dinheiro volta integralmente. <span className="text-rose-gold-gradient font-bold">💕</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- POST-GUARANTEE PRICE -------------------- */
function PostGuaranteePrice() {
  const includes = [
    "Método Nefertiti completo (3 módulos)",
    "Bônus #1 — Guia de Transformação Digital (R$ 297)",
    "Bônus #2 — Manual de Inteligência Emocional (R$ 467)",
    "Bônus #3 — Comunicação Feminina Avançada (R$ 697)",
    "Acesso vitalício + atualizações futuras",
    "Suporte VIP por 21 dias",
  ];

  return (
    <section className="py-20 md:py-28 bg-pearl-gradient relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.7 0.105 33 / 0.18), transparent 55%), radial-gradient(circle at 80% 80%, oklch(0.78 0.12 75 / 0.18), transparent 55%)",
        }}
      />
      <div className="container mx-auto px-4 max-w-5xl relative">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">
              👑 Sua coroa está pronta
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Agora que você está <span className="text-rose-gold-gradient">100% protegida</span>,
              <br className="hidden md:block" /> garanta seu acesso pelo valor especial
            </h2>
            <p className="mt-4 text-foreground/75 max-w-2xl mx-auto leading-relaxed">
              Tudo o que você viu até aqui — método completo, bônus exclusivos e tripla garantia blindada — por um investimento simbólico perto da transformação que você vai viver.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-card border-2 border-rose-gold/40 rounded-3xl shadow-elegant p-8 md:p-12 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-heading uppercase tracking-widest text-xs text-foreground/60">
                  Você leva tudo isto:
                </p>
                <ul className="mt-4 space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-rose-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/85 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-heading text-foreground/70">
                  Valor real: <span className="line-through">R$ 2.458,00</span>
                </p>
              </div>

              <div className="text-center md:border-l md:border-rose-gold/25 md:pl-8">
                <p className="font-heading uppercase tracking-widest text-xs text-foreground/60">
                  Hoje, apenas
                </p>
                <p className="font-heading text-foreground/70 line-through text-lg mt-2">
                  De R$ 997,00
                </p>

                {/* Preço destacado — tipografia elegante e visual */}
                <div className="mt-3 relative inline-flex flex-col items-center">
                  <span className="font-heading uppercase tracking-[0.4em] text-[0.65rem] text-rose-gold-deep mb-1">
                    12x de
                  </span>
                  <div className="flex items-start justify-center leading-none">
                    <span className="font-display text-3xl md:text-4xl text-rose-gold-gradient font-bold mt-2 mr-1">
                      R$
                    </span>
                    <span
                      className="font-display font-bold text-rose-gold-gradient drop-shadow-sm"
                      style={{
                        fontSize: "clamp(4.5rem, 11vw, 6.75rem)",
                        letterSpacing: "-0.04em",
                        lineHeight: "0.9",
                      }}
                    >
                      14
                    </span>
                    <span className="font-display text-3xl md:text-4xl text-rose-gold-gradient font-bold mt-2">
                      ,70
                    </span>
                  </div>
                  <span className="block mt-2 h-px w-24 bg-rose-gold-gradient opacity-60" />
                  <span className="font-heading uppercase tracking-[0.3em] text-[0.65rem] text-foreground/60 mt-2">
                    no cartão
                  </span>
                </div>

                <div className="mt-6">
                  <CTAButton size="xl" />
                </div>

                <div className="mt-5 flex items-center justify-center gap-4 text-foreground/60 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" /> Compra 100% segura
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" /> Garantia de 7 dias
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-gold/20 flex flex-wrap items-center justify-center gap-4 text-foreground/65 text-xs font-heading">
              <span className="inline-flex items-center gap-1.5">
                <CreditCard className="h-4 w-4 text-rose-gold" /> Cartão em até 12x
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Pix className="h-4 w-4 text-rose-gold" /> PIX
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-rose-gold" /> Acesso imediato
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Lock, title: "Pagamento seguro", desc: "Criptografia SSL · Kiwify oficial" },
              { icon: Zap, title: "Acesso imediato", desc: "Liberação automática após o pagamento" },
              { icon: ShieldCheck, title: "Garantia de 7 dias", desc: "Reembolso integral · risco zero" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card/90 backdrop-blur border border-rose-gold/25 rounded-2xl p-5 text-center shadow-card-soft flex flex-col items-center gap-2 hover:border-rose-gold/60 transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-rose-gold-gradient flex items-center justify-center shadow-glow">
                  <Icon className="h-5 w-5 text-pearl" strokeWidth={2.2} />
                </div>
                <p className="font-heading font-bold uppercase tracking-wider text-xs text-foreground">
                  {title}
                </p>
                <p className="text-xs text-foreground/65 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-center text-foreground/70 max-w-2xl mx-auto text-sm">
            Lembre-se: se em <strong>7 dias</strong> você sentir que o Método Nefertiti não é para você, devolvemos <strong>cada centavo</strong>. Seu risco é literalmente <span className="text-rose-gold-gradient font-bold">ZERO</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const faqs = [
    {
      q: "💰 R$ 14,70 parcelado parece pouco. Tem alguma pegadinha?",
      a: "Nenhuma pegadinha. O preço cheio é R$ 997. Estamos rodando este lote especial de lançamento por 12x R$ 14,70 (ou R$ 147 à vista no PIX) justamente para que mulheres que mais precisam consigam entrar agora. Quando este lote esgotar, o valor volta para R$ 997. Você paga uma vez e tem acesso vitalício a tudo — método + 3 bônus + atualizações.",
    },
    {
      q: "⏰ Não tenho tempo. Quanto preciso me dedicar por dia?",
      a: "Apenas 15 a 20 minutos por dia, durante 21 dias. Foi desenhado exatamente para mulheres que trabalham, têm filhos, vida corrida. Você pode assistir no celular, no ônibus, na pausa do almoço. Se você tem tempo de scrollar Instagram chorando por causa dele, você tem tempo para reconstruir sua autoestima.",
    },
    {
      q: "👵 Tenho mais de 40 (ou 50). Ainda funciona pra mim?",
      a: "Funciona — e em muitos casos funciona MELHOR. As alunas que mais relatam transformações profundas têm entre 38 e 58 anos. Magnetismo feminino não é beleza de pele, é presença. E presença se constrói em qualquer idade. Temos depoimentos reais de mulheres de 27 a 62 anos.",
    },
    {
      q: "🤔 Já tentei terapia, livros, conselhos de amigas e nada funcionou. Por que isso seria diferente?",
      a: "Porque o Método Nefertiti não é teoria nem autoajuda genérica. É um protocolo prático de 21 dias com exercícios diários, gatilhos comportamentais e técnicas testadas em +3.847 mulheres. Você não vai apenas 'entender' o que fazer — vai aplicar passo a passo, com resultados visíveis a partir do 7º dia.",
    },
    {
      q: "😶 Tenho medo de ser julgada por comprar algo assim. É discreto?",
      a: "100% discreto. A cobrança aparece como 'Kiwify' no seu cartão (sem nenhuma menção ao produto). O acesso é por área de membros privada com login e senha. Ninguém precisa saber — exceto quando começarem a perguntar o que está acontecendo com você. 😉",
    },
    {
      q: "💔 Meu caso é diferente. Foi traição / casamento de 20 anos / ele já tem outra. Vai funcionar?",
      a: "Sim. As alunas chegaram com as histórias mais variadas: traição, abandono após 25 anos juntos, ex com nova namorada, ex que ainda mora na mesma casa. O método trabalha a sua reconstrução interna — independente do que ele fez ou está fazendo. Quando você muda, tudo ao seu redor muda.",
    },
    {
      q: "🛡️ E se eu comprar e não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Entra, assiste tudo, faz os exercícios. Se não sentir transformação real, basta enviar um e-mail e devolvemos cada centavo — e você ainda fica com os 3 bônus. O risco é todo nosso, não seu.",
    },
    {
      q: "🚀 Como recebo o acesso?",
      a: "Imediatamente após a confirmação do pagamento (cartão aprovado em segundos, PIX em até 5 minutos), você recebe um e-mail com login e senha da área de membros. Acesso vitalício — você assiste no seu ritmo, no seu tempo, quantas vezes quiser.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 rounded-full bg-rose-gold-gradient items-center justify-center shadow-glow mb-4">
              <HelpCircle className="h-8 w-8 text-pearl" strokeWidth={2.2} />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Perguntas <span className="text-rose-gold-gradient">frequentes</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="bg-card rounded-3xl border border-rose-gold/20 shadow-card-soft px-5 md:px-8">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-rose-gold/15 last:border-b-0">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-base md:text-lg py-5 hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="text-rose-gold-deep">❓</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed text-[15px] pl-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- SCARCITY -------------------- */
function Scarcity() {
  const { spots, initial } = useSyncedSpots();
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 30%, oklch(0.7 0.105 33 / 0.7), transparent 60%)" }} />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              A decisão que define seu futuro — <span className="text-rose-gold-gradient">não perca seu trono</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-card/10 backdrop-blur-md border border-rose-gold/40 rounded-2xl p-6 text-center shadow-glow">
              <p className="font-heading uppercase tracking-widest text-rose-gold text-xs">Vagas restantes</p>
              <p className="font-display text-5xl md:text-6xl font-bold text-rose-gold-gradient mt-2 cta-pulse">
                <AnimatedSpots live />
              </p>
              <p className="text-pearl/70 text-xs mt-1" suppressHydrationWarning>de {initial} disponíveis</p>
            </div>
            <div className="bg-card/10 backdrop-blur-md border border-rose-gold/40 rounded-2xl p-6 text-center shadow-glow">
              <p className="font-heading uppercase tracking-widest text-rose-gold text-xs">Tempo restante</p>
              <div className="mt-2"><Countdown minutes={47} /></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-7 md:p-10 space-y-5 text-pearl/90 leading-relaxed">
            <p className="font-display text-xl md:text-2xl text-rose-gold-gradient" suppressHydrationWarning>
              ⚠️ Vagas limitadas: apenas {initial} mulheres terão acesso a esta oportunidade única e irrepetível — restam só {spots}!
            </p>
            <p suppressHydrationWarning>
              <strong className="text-pearl">Por que esta oferta é tão exclusiva e limitada?</strong> Simples: quero garantir que cada uma das {initial} mulheres deste lote tenha resultados excepcionais e suporte personalizado de rainha. Sempre que abro turmas maiores, o suporte fica sobrecarregado e algumas alunas podem não conseguir a atenção que merecem. Eu não comprometo a sua transformação.
            </p>
            <p className="font-display italic text-lg md:text-xl text-pearl border-l-4 border-rose-gold pl-5" suppressHydrationWarning>
              Prefiro transformar {initial} vidas COMPLETAMENTE do que ajudar 100 pela metade.
            </p>
            <p>
              Além disso, este preço especial foi autorizado pela minha equipe apenas para <strong className="text-rose-gold-gradient">este lançamento exclusivo</strong>. A partir da próxima turma, o investimento volta para <span className="line-through">R$ 997,00</span>. Esta é a sua única chance de acessar o <span className="font-display italic">Método Nefertiti</span> por este valor.
            </p>
            <p className="bg-rose-gold/15 border border-rose-gold/40 rounded-2xl p-5 text-pearl" suppressHydrationWarning>
              ⏳ <strong className="text-rose-gold-gradient">Atenção:</strong> restam apenas {spots} vagas neste lote exclusivo! O tempo está se esgotando. Depois disso, terei que abrir lista de espera — e sinceramente, sem data ainda. Não deixe para depois o poder que você pode ter hoje.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center mt-10">
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- OBJECTIONS -------------------- */
function Objections() {
  const items = [
    {
      q: "E se isso não funcionar comigo porque meu caso é diferente?",
      a: "Querida, TODAS as minhas alunas pensavam que eram 'caso perdido'. A Carolina, a Fernanda, a Patrícia, a Suzana, a Carla… cada uma tinha uma história única de dor e rejeição. Mas o Método Nefertiti não é sobre o seu passado; é sobre o seu futuro magnético. Ele funciona porque atua nos princípios universais da psicologia comportamental e da neurociência, independentemente do seu passado. Sua singularidade é sua força — e o método irá lapidá-la.",
    },
    {
      q: "E se eu não gostar ou não vir resultados?",
      a: "Sua satisfação é minha MISSÃO. Por isso ofereço uma Garantia Incondicional de 7 Dias. Se por qualquer motivo você não se sentir 100% satisfeita com o Método Nefertiti, basta enviar um e-mail e eu devolverei cada centavo do seu investimento, sem perguntas. Seu risco é ZERO. Minha promessa é TUDO.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-rose-soft-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <p className="text-center font-heading font-bold text-rose-gold-deep uppercase tracking-widest text-sm">Quebra de objeções finais</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            "Marina, mas e se…" <span className="text-rose-gold-gradient block mt-2">A mente da rainha não tem dúvidas. Ela tem respostas.</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-5">
          {items.map((it, i) => (
            <Reveal key={it.q} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card-soft border border-rose-gold/15">
                <h3 className="font-display text-xl font-bold text-foreground flex items-start gap-3">
                  <Crown className="h-6 w-6 text-rose-gold-deep shrink-0 mt-0.5" />
                  {it.q}
                </h3>
                <p className="mt-3 text-foreground/80 leading-relaxed pl-9">{it.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <CTAButton size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="bg-graphite-gradient text-pearl py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <img src={logo} alt="Método Nefertiti" loading="lazy" className="h-14 w-auto mx-auto" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-pearl/80 font-heading">
          <a href="#" className="hover:text-rose-gold transition">Termos de Uso</a>
          <span className="opacity-30">|</span>
          <a href="#" className="hover:text-rose-gold transition">Política de Privacidade</a>
          <span className="opacity-30">|</span>
          <a href="#" className="hover:text-rose-gold transition">Contato</a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-pearl/70 text-sm">
          <span className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-rose-gold" /> Cartão de Crédito</span>
          <span className="flex items-center gap-2"><Pix className="h-4 w-4 text-rose-gold" /> PIX</span>
          <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-rose-gold" /> Compra Segura</span>
        </div>
        <p className="mt-10 text-xs text-pearl/55 text-center max-w-3xl mx-auto leading-relaxed">
          Este produto é um material digital informativo. Os resultados podem variar de pessoa para pessoa e dependem do comprometimento individual com o método. Não garantimos resultados específicos. Este site não é afiliado ao Facebook, Instagram ou qualquer outra plataforma. Pagamento processado com criptografia de dados.
        </p>
        <p className="mt-6 text-center text-xs text-pearl/40">© {new Date().getFullYear()} <span className="font-display italic">Método Nefertiti</span>. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
