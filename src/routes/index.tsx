import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Crown, Heart, Sparkles, ShieldCheck, Star, CheckCircle2, XCircle,
  Award, Brain, Flame, Gem, Zap, Smartphone, Monitor, Tablet, Lock,
  CreditCard, Smartphone as Pix, ChevronRight, Quote,
} from "lucide-react";
import { Header } from "@/components/Header";
import { TopCountdown } from "@/components/TopCountdown";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { Countdown } from "@/components/Countdown";
import logo from "@/assets/logo-nefertiti.png";
import mockup from "@/assets/mockup-nefertiti.png";
import marina from "@/assets/marina.jpg";
import sophia from "@/assets/sophia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Nefertiti — Desperte sua Rainha Interior" },
      {
        name: "description",
        content:
          "Sistema de Reversão Psicológica validado por Harvard que transformou +3.847 mulheres. Desperte seu magnetismo irresistível em 21 dias.",
      },
      { property: "og:title", content: "Método Nefertiti — Desperte sua Rainha Interior" },
      {
        property: "og:description",
        content:
          "Transforme a dor da rejeição em magnetismo irresistível. Junte-se a +3.847 mulheres que reescreveram seu destino amoroso.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background overflow-x-hidden">
      <TopCountdown hours={12} />
      <Header />
      <SocialProofPopup />

      <Hero />
      <Pain />
      <FirstResults />
      <MarinaStory />
      <Discovery />
      <Method />
      <Triggers />
      <MoreProof />
      <Modules />
      <Devices />
      <Bonuses />
      <Offer />
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
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Método Nefertiti" className="h-20 md:h-28 w-auto float-soft" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 backdrop-blur border border-rose-gold/30 text-xs md:text-sm font-heading font-semibold text-rose-gold-deep uppercase tracking-wider mb-6">
                <Sparkles className="h-4 w-4" /> Validado por Harvard
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                <span className="font-script text-5xl md:text-7xl lg:text-8xl text-rose-gold-gradient block leading-none mb-3">Método Nefertiti</span>
                O segredo das <span className="text-rose-gold-gradient">3.847 mulheres</span> que transformaram a dor da rejeição em magnetismo irresistível
              </h1>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                O <strong className="text-foreground">único sistema de reversão psicológica</strong> que faz ex-parceiros se arrependerem e homens de alto valor te perseguirem — mesmo que você se sinta invisível agora.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-col items-center lg:items-start gap-3">
                <CTAButton size="xl">Desperte sua Rainha Interior</CTAButton>
                <p className="text-xs text-muted-foreground italic">
                  Clique e garanta seu acesso imediato. Vagas limitadas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.65}>
              <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-left">
                {[
                  "Acesso imediato e vitalício",
                  "Garantia incondicional 7 dias",
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

          <Reveal delay={0.3} y={40}>
            <div className="relative">
              <div className="absolute -inset-6 bg-rose-gold-gradient opacity-25 blur-3xl rounded-full" />
              <img
                src={mockup}
                alt="Método Nefertiti — acesso em celular, tablet e computador"
                className="relative w-full h-auto object-contain drop-shadow-2xl float-soft"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-card border border-rose-gold/30 rounded-2xl px-4 py-3 shadow-card-soft hidden md:flex items-center gap-2">
                <Star className="h-5 w-5 text-rose-gold-deep" fill="currentColor" />
                <span className="font-heading font-bold text-sm">4.9 / 5 — 3.847 alunas</span>
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
    "Fingiu que estava bem nas redes sociais (mas chorava no banho, em segredo).",
    "Saiu com outros homens para tentar esquecer (e se sentiu mais vazia).",
    "Seguiu todos os conselhos das amigas (que só te confundiram mais).",
  ];
  const feels = [
    "Acorda no meio da madrugada com o coração apertado pensando nele.",
    "Verifica compulsivamente as redes sociais buscando sinais dele — ou dela.",
    "Se pergunta 'o que ela tem que eu não tenho?' até a autoestima ruir.",
    "Sente que perdeu sua capacidade de atrair e está em frangalhos.",
    "Se fechou para o amor, com medo de sofrer novamente.",
  ];
  return (
    <section className="py-20 md:py-28 bg-muted relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            A ferida aberta — onde a alma chora e o mundo não vê
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Se a dor da rejeição parece uma ferida que nunca cicatriza, e a cada amanhecer a ausência dele é um peso insuportável no peito… eu sei <em className="text-foreground font-semibold not-italic">exatamente</em> como você se sente.
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
              Se você assentiu para pelo menos 3 delas, você não está sozinha. E, mais importante: <strong>você está no lugar certo</strong>.
            </p>
            <CTAButton size="xl">Entrar para o Método Nefertiti</CTAButton>
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
      name: "Fernanda M.", age: 36, role: "Publicitária",
      text: "Em apenas 10 dias aplicando o Método Nefertiti, meu ex (que havia me bloqueado há 3 meses) apareceu na porta da minha casa com flores. Hoje estou com alguém 10x melhor!",
      highlight: "Desenvolveu poder de escolha total.",
    },
    {
      name: "Claudia R.", age: 49, role: "Dentista",
      text: "Aos 49 anos e após 3 filhos, eu pensava que jamais seria desejada. Hoje estou noiva de um empresário de 41 anos que me trata como a mulher mais especial do mundo.",
      highlight: "Idade não importa. O amor verdadeiro floresce em qualquer fase.",
    },
    {
      name: "Ana Carolina", age: 28, role: "Arquiteta",
      text: "Em 2 semanas tinha 3 homens de alto valor interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Não precisava mais implorar por atenção.",
      highlight: "Ela se tornou a caçadora, não a caça.",
    },
    {
      name: "Regina T.", age: 56, role: "Professora",
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
              ⭐⭐⭐⭐⭐ Resultados reais
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
              O exército de rainhas que já <span className="text-rose-gold-gradient">despertaram</span>
            </h2>
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
                <Quote className="h-8 w-8 text-rose-gold-deep mb-3 opacity-70" />
                <p className="text-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-heading font-bold text-foreground">{t.name} <span className="text-muted-foreground font-normal">• {t.age} anos • {t.role}</span></p>
                  <p className="mt-2 text-sm text-rose-gold-deep font-medium flex items-start gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 mt-0.5" /> {t.highlight}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-14">
            <CTAButton size="xl">Desperte sua Rainha Interior agora</CTAButton>
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
                Meu nome é <span className="text-rose-gold-gradient">Marina</span>, e eu era você alguns anos atrás.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Em outubro de 2022, eu estava exatamente onde você está agora. Deitada no chão do banheiro, às 3h da manhã, chorando porque tinha visto uma foto dele com outra mulher.
                </p>
                <p>
                  <strong>6 anos de relacionamento. Jogados fora.</strong> Eu, que sempre fui a namorada perfeita. Cuidava dele, cozinhava, estava sempre disponível. E mesmo assim, ele me trocou.
                </p>
                <p>
                  Por 6 meses fui uma sombra: perdi 8kg, evitava sair de casa, me sentia invisível. Até que numa viagem sozinha conheci a Dra. Sophia Miendez — psicóloga comportamental que estudou por 25 anos os padrões das mulheres mais magneticamente irresistíveis da história.
                </p>
                <p className="font-display italic text-xl text-rose-gold-deep border-l-4 border-rose-gold pl-5">
                  "Marina, você acredita que Nefertiti chorava no banheiro quando foi rejeitada? Ela fazia o oposto. E muito provavelmente, fez ELE chorar."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- DISCOVERY -------------------- */
function Discovery() {
  const milestones = [
    { day: "7 dias", text: "Um homem na academia me parou: 'preciso saber qual é o seu segredo, estou hipnotizado.'" },
    { day: "14 dias", text: "3 convites para jantar. Meu ex mandou mensagem perguntando 'como eu estava'." },
    { day: "21 dias", text: "5 homens me cortejando simultaneamente. Me sentia poderosa pela primeira vez em anos." },
  ];
  return (
    <section className="py-20 md:py-28 bg-graphite-gradient text-pearl relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.7 0.105 33 / 0.6), transparent 60%)" }} />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">A grande descoberta</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold leading-tight">
              O <span className="text-rose-gold-gradient">"Efeito Inversão Psicológica"</span> — sua arma secreta
            </h2>
            <p className="mt-6 text-pearl/85 leading-relaxed">
              Estudos de Harvard provam: homens relatam <strong className="text-rose-gold-gradient">347% mais atração</strong> por mulheres que demonstram "disponibilidade seletiva" — presentes, mas não necessitadas. Não é joguinho. É valor intrínseco.
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
      </div>
    </section>
  );
}

/* -------------------- METHOD INTRO -------------------- */
function Method() {
  const items = [
    "Funciona dos 20 aos 65 anos — a psicologia humana é universal",
    "Independente de há quanto tempo foi o término",
    "Mesmo se ele já estiver com outra",
    "Mesmo se você se sente 'sem esperança'",
  ];
  return (
    <section className="py-20 md:py-28 bg-rose-soft-gradient">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <Reveal>
          <img src={logo} alt="Método Nefertiti" className="h-24 md:h-32 w-auto mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Apresentando o <span className="font-script text-5xl md:text-7xl text-rose-gold-gradient block leading-none mt-2">Método Nefertiti</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            O primeiro sistema de reversão psicológica que transforma rejeição em <strong>magnetismo irresistível</strong> — sem joguinhos, apenas pura persuasão e magnetismo natural.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-5 flex items-start gap-3 border border-rose-gold/20 shadow-card-soft">
                <CheckCircle2 className="h-6 w-6 text-rose-gold-deep shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{t}</span>
              </div>
            </Reveal>
          ))}
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
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">O código secreto</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              Os <span className="text-rose-gold-gradient">3 gatilhos neurológicos</span> que fazem homens te perseguirem
            </h2>
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

/* -------------------- MORE PROOF -------------------- */
function MoreProof() {
  const list = [
    { name: "Maria Clara", age: 28, text: "Em 11 dias meu ex voltou pedindo outra chance. Mas agora EU é que não sei se quero ele de volta…" },
    { name: "Mariana K.", age: 38, text: "Ele bloqueou todo mundo menos eu. Agora me liga às 2 da manhã dizendo que errou…" },
    { name: "Patrícia L.", age: 50, text: "Aos 50, em 3 semanas tinha 2 homens me cortejando. Estou nas nuvens!" },
    { name: "Suzana S.", age: 52, text: "Depois de 5 anos num relacionamento tóxico, em menos de um mês conheci um homem incrível." },
    { name: "Vanessa L.", age: 41, text: "Hoje estou solteira, feliz e com uma fila de pretendentes de alto valor. A liberdade é indescritível." },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            Não acredite em mim. <span className="text-rose-gold-gradient">Acredite nelas.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-card rounded-2xl p-6 shadow-card-soft border border-rose-gold/10 h-full">
                <div className="flex items-center gap-1 text-rose-gold-deep mb-3">
                  {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4" fill="currentColor" />)}
                </div>
                <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
                <p className="mt-4 font-heading font-bold text-foreground">{t.name}, <span className="text-muted-foreground font-normal">{t.age}</span></p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <CTAButton size="xl">Desperte seu poder Nefertiti</CTAButton>
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
          <div className="text-center mb-14">
            <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">Sua rota para a realeza</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              O mapa da sua <span className="text-rose-gold-gradient">transformação</span> em 21 dias
            </h2>
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
          <p className="font-heading font-semibold text-foreground">Sua transformação acessível em qualquer lugar</p>
          <div className="mt-4 flex items-center justify-center gap-6 md:gap-10 text-rose-gold-deep">
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
            <p className="font-heading font-bold text-rose-gold tracking-widest uppercase text-sm">Oferta por tempo limitado</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-rose-gold-gradient">Bônus exclusivos</span> — somente para as primeiras 25
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="relative bg-card/10 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-7 h-full">
                <div className="absolute -top-3 -right-3 bg-rose-gold-gradient text-pearl font-heading font-bold text-xs px-3 py-1.5 rounded-full shadow-glow">
                  BÔNUS #{i + 1}
                </div>
                <Award className="h-10 w-10 text-rose-gold mb-4" />
                <h3 className="font-display text-xl font-bold text-pearl">{b.title}</h3>
                <ul className="mt-4 space-y-2">
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
            <p className="font-heading uppercase tracking-widest text-pearl/90 text-sm">Valor total dos bônus</p>
            <p className="font-display text-4xl md:text-5xl font-bold text-pearl mt-2">R$ 1.461,00</p>
            <p className="mt-2 text-pearl/95 font-heading">Seu presente HOJE — incluso gratuitamente.</p>
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
              ⚠ Apenas 12 vagas restantes neste lote
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

            <div className="mt-10 text-center">
              <p className="font-heading text-foreground/70 line-through text-lg">De R$ 997,00</p>
              <p className="mt-2 font-heading text-sm uppercase tracking-widest text-rose-gold-deep">por apenas</p>
              <p className="font-display font-bold text-foreground text-5xl md:text-7xl mt-2">
                12<span className="text-3xl md:text-4xl">x</span> R$ 19<span className="text-3xl md:text-4xl">,70</span>
              </p>
              <p className="mt-2 text-muted-foreground">ou R$ 197,00 à vista</p>

              <div className="mt-8">
                <CTAButton size="xl">Garantir minha vaga agora</CTAButton>
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

/* -------------------- OBJECTIONS -------------------- */
function Objections() {
  const items = [
    {
      q: "E se isso não funcionar comigo porque meu caso é diferente?",
      a: "Todas as minhas alunas pensavam que eram 'caso perdido'. O Método Nefertiti não é sobre seu passado, é sobre seu futuro magnético. Ele atua nos princípios universais da psicologia comportamental.",
    },
    {
      q: "E se eu não gostar ou não vir resultados?",
      a: "Sua satisfação é minha missão. Por isso, garantia incondicional de 7 dias. Sem perguntas. Seu risco é zero, minha promessa é tudo.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground leading-tight">
            "Marina, mas e se…" <span className="text-rose-gold-gradient block mt-2">A mente da rainha tem respostas.</span>
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
            <CTAButton size="xl">Desperte sua Rainha Interior agora</CTAButton>
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
          <img src={logo} alt="Método Nefertiti" className="h-16 w-auto mx-auto mb-4" />
          <p className="font-script text-2xl text-rose-gold-gradient">Sua coroa te espera</p>
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
        <p className="mt-6 text-center text-xs text-pearl/40">© {new Date().getFullYear()} Método Nefertiti. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
