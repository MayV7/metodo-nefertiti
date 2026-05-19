import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { CountdownDigits } from "@/components/nefertiti/Countdown";
import { CTAButton, Eyebrow, SectionTitle } from "@/components/nefertiti/CTAButton";
import { IMG, TESTIMONIALS, PHOTO_PROOFS, CHATS, FAQ } from "@/components/nefertiti/data";
import { SocialProofToast, StickyBottomCTA } from "@/components/nefertiti/StickyCTA";

import { Check, CheckCircle2, X, Crown, Sparkles, Heart, Shield, ShieldCheck, Clock, Star, MessageCircle, Smartphone, Brain, MessagesSquare, Gift, Lock, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Método Nefertiti — Desperte sua Rainha Interior em 21 dias" },
      { name: "description", content: "Protocolo emocional de 21 dias que já reconstruiu a presença e o magnetismo de +3.847 mulheres. Sem perseguir, sem implorar." },
      { property: "og:title", content: "Método Nefertiti — Desperte sua Rainha Interior" },
      { property: "og:description", content: "Transforme rejeição em magnetismo irresistível em 21 dias." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
});

function TopBar() {
  return (
    <div className="w-full bg-noir text-cream py-2.5 px-4 text-xs md:text-sm flex flex-wrap items-center justify-center gap-x-6 gap-y-1 sticky top-0 z-50">
      <span className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-rose-soft animate-countdown-pulse" />
        A oferta termina em <CountdownDigits />
      </span>
      <span className="text-rose-soft">•</span>
      <span className="flex items-center gap-2 px-3 py-1 rounded-full animate-vagas-pulse">
        <span className="text-rose-soft inline-block animate-flame">🔥</span>
        <strong>Últimas 13 vagas</strong> disponíveis
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-cream pt-12 md:pt-20 pb-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <img src={IMG.logo} alt="Método Nefertiti" className="h-20 md:h-28 object-contain" />
        </div>
        <Eyebrow>✨ Para mulheres que amaram demais e foram esquecidas rápido demais ✨</Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] text-center mt-6 max-w-5xl mx-auto">
          <em className="font-normal italic text-foreground/80 block text-3xl md:text-4xl mb-2">Se ele te deixou</em>
          <span className="text-gradient-rose">e levou junto a sua autoestima…</span>
          <span className="block mt-4">descubra o método em 21 dias que já reconstruiu a presença e o magnetismo de +3.847 mulheres</span>
          <span className="block italic font-normal text-2xl md:text-3xl mt-4 text-muted-foreground">— sem perseguir, sem implorar, sem fingir que está bem.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Um <strong>protocolo emocional de 21 dias</strong> criado para mulheres que estão cansadas de chorar escondido e prontas para voltar a se sentir <strong>inteiras, desejadas e no comando</strong> — começando hoje, mesmo que ele já tenha seguido em frente.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gold fill-gold" /> 4.9/5 avaliação</span>
              <span>· +3.847 mulheres</span>
            </div>
            <div className="mt-8">
              <CTAButton />
              <p className="text-xs text-muted-foreground mt-3">
                Acesso imediato · Garantia incondicional de 7 dias · Restam apenas 13 vagas neste lote.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              {["Acesso imediato e vitalício", "Garantia de 7 dias — risco zero", "+3.847 mulheres transformadas"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-deep" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={IMG.mockup} alt="Método Nefertiti em todos os dispositivos" className="w-full rounded-2xl shadow-elegant" />
            <p className="text-center text-xs text-muted-foreground mt-3">Celular · Tablet · Computador</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>A Ferida Aberta: onde a alma chora e o mundo não vê</SectionTitle>
        <p className="text-lg text-foreground/85 mt-8 leading-relaxed text-center md:text-left">
          Se você já sentiu o chão sumir sob seus pés após um término… se a dor da rejeição parece uma ferida que nunca cicatriza… se a cada amanhecer a ausência dele é um peso insuportável no peito… eu sei <em>exatamente</em> como você se sente. Você está aqui porque algo dentro de você QUEBROU quando ele disse aquelas palavras. Elas não apenas terminaram um relacionamento — estilhaçaram sua autoestima.
        </p>

        <h3 className="font-display text-2xl md:text-3xl font-semibold mt-12 mb-6 text-center">
          <span className="text-gradient-rose">Você já tentou de tudo para parar a dor:</span>
        </h3>
        <ul className="grid md:grid-cols-3 gap-5">
          {[
            "Fingiu que estava bem pessoalmente e nas redes sociais (mas chorava no banho, em segredo, onde ninguém podia ver sua alma sangrar).",
            "Saiu com outros homens para tentar esquecer (mas só se sentiu mais vazia, comparando cada um deles a ele).",
            "Seguiu todos os conselhos das amigas (que só te confundiram mais, pois elas não entendem a profundidade da sua dor).",
          ].map((t, i) => (
            <li
              key={t}
              className="relative bg-card rounded-2xl p-6 border border-rose-soft/30 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute -top-4 -left-2 text-7xl font-display font-bold text-rose-soft/20 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-full bg-noir/90 flex items-center justify-center mb-3 relative shadow-soft">
                <X className="w-6 h-6 text-rose-soft" strokeWidth={3} />
              </div>
              <p className="text-foreground/85 leading-relaxed relative">{t}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-rose" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <h3 className="font-display text-2xl md:text-3xl font-semibold mt-12 mb-4 text-center">
          <span className="text-gradient-rose">Posso estar errada, mas tenho quase certeza que você…</span>
        </h3>
        <div className="space-y-3">
          {[
            "Acorda no meio da madrugada, com o coração apertado, pensando nele — e ele ainda assombra seus sonhos, roubando seu sono e sua energia.",
            "Verifica compulsivamente as redes sociais, buscando qualquer sinal dele, ou pior, dela — sentindo uma pontada de ciúmes a cada nova foto.",
            "Se ele já estiver com outra, a pergunta 'o que ela tem que eu não tenho?' te consome, minando sua autoconfiança.",
            "Sente que perdeu sua capacidade de atrair e sua autoestima está em frangalhos, acreditando que nunca mais será desejada.",
            "Se fechou para o amor, com medo de sofrer novamente, e teme nunca mais ser desejada como antes.",
          ].map((t) => (
            <div
              key={t}
              className="flex items-start gap-4 bg-card/70 backdrop-blur-sm border border-rose-soft/25 rounded-xl px-5 py-4 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center shadow-soft">
                <Heart className="w-5 h-5 text-cream" fill="currentColor" />
              </div>
              <p className="text-foreground/85 leading-relaxed italic">{t}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg text-foreground/85">
          Se você assentiu para pelo menos 3 dessas afirmações, você não está sozinha. E, mais importante: <strong>você está no lugar CERTO!</strong> O que vou compartilhar com você nas próximas linhas não vai apenas mudar a forma como você se vê, mas como o mundo inteiro — e principalmente os homens — te veem.
        </p>

        <div className="text-center mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function MarinaStory() {
  return (
    <section className="py-20 px-4 bg-cream-deep/40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr_3fr] gap-10 items-center">
        <img src={IMG.marina} alt="Marina, mentora do Método Nefertiti" className="rounded-2xl shadow-elegant w-full" />
        <div>
          <Eyebrow>Vamos às apresentações</Eyebrow>
          <SectionTitle className="!text-left mt-3">Meu nome é Marina e eu era você alguns anos atrás…</SectionTitle>
          <div className="space-y-4 mt-6 text-foreground/85 leading-relaxed">
            <p>Em outubro de 2022, eu estava exatamente onde você está agora. Deitada no chão do banheiro, às 3h da manhã, chorando compulsivamente porque tinha visto uma foto dele com outra mulher no Instagram.</p>
            <p><strong>6 anos de relacionamento. JOGADOS FORA, do nada.</strong> Eu, que sempre fui a namorada perfeita. Cuidava dele, cozinhava, estava sempre disponível. E mesmo assim, ele me trocou. A dor era insuportável, a humilhação, paralisante.</p>
            <p>Pelos próximos 6 meses, me transformei numa sombra: perdi 8kg, evitava sair de casa para não ver outros casais, me sentia <strong>INVISÍVEL</strong> para qualquer homem interessante.</p>
            <p>Mas então, durante uma viagem pela primeira vez SOZINHA, conheci a <strong>Dra. Sophia Miendez</strong> — psicóloga comportamental renomada, especializada em dinâmicas de atração, que havia estudado por mais de <strong>25 anos</strong> os padrões das mulheres mais magneticamente irresistíveis da história.</p>
            <blockquote className="border-l-4 border-rose-deep pl-5 italic text-foreground/90">
              "Marina, você realmente acredita que Nefertiti chorava no banheiro quando foi rejeitada? Ela fazia o OPOSTO disso. Sua presença deixava os homens loucos para decifrá-la."
            </blockquote>
            <p>Hoje já ajudamos <strong>+3.847 mulheres</strong> a superarem um término doloroso, recuperarem a autoestima e darem a volta por cima.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForYouSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Eyebrow>⚖️ Honestidade total</Eyebrow>
        <SectionTitle className="mt-3">O Método Nefertiti é para você?</SectionTitle>
        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          Eu prefiro ser direta agora a te decepcionar depois. Leia com atenção — esta página não é para todo mundo.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="relative bg-gradient-pearl rounded-3xl p-8 border border-rose-soft/40 shadow-elegant overflow-hidden hover:-translate-y-1 transition-all">
            <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-rose opacity-20 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-rose flex items-center justify-center shadow-soft">
                <Crown className="w-7 h-7 text-cream" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold">Sua história começa aqui</div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient-rose">É para você se…</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3 relative">
              {[
                "Mulheres entre 25 e 60 anos que viveram um término doloroso e ainda carregam a dor.",
                "Quem está cansada de chorar escondido fingindo que está bem nas redes sociais.",
                "Quem já tentou conselhos de amigas, terapia, distrações — e nada devolveu sua autoestima.",
                "Mulheres prontas para parar de implorar atenção e voltar a ser a escolhida, não a opção.",
                "Quem quer reconstruir presença, magnetismo e poder de escolha — sem mudar quem é.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-rose flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-cream" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/85 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-rose" />
          </div>

          <div className="relative bg-gradient-noir text-cream rounded-3xl p-8 shadow-elegant overflow-hidden hover:-translate-y-1 transition-all border border-rose-deep/30">
            <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose-deep/30 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-rose-deep/20 border border-rose-soft/30 flex items-center justify-center backdrop-blur-sm">
                <X className="w-7 h-7 text-rose-soft" strokeWidth={3} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-rose-soft font-semibold">Honestidade total</div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold">NÃO é para você se…</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3 relative">
              {[
                "Mulheres que querem manipular, vingar-se ou destruir o ex.",
                "Quem busca uma 'fórmula mágica' que funciona sem aplicação consciente.",
                "Quem não está disposta a investir 15 minutos por dia em si mesma por 21 dias.",
                "Quem prefere continuar reclamando da situação a transformá-la de verdade.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-rose-deep/30 border border-rose-soft/40 flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-soft" strokeWidth={3} />
                  </span>
                  <span className="text-cream/85 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-rose opacity-60" />
          </div>
        </div>
        <p className="text-center mt-10 text-foreground/85">
          Se você se reconheceu na coluna da esquerda, <strong>esta pode ser a decisão mais importante que você toma este ano</strong>.
        </p>
      </div>
    </section>
  );
}

function DiscoverySection() {
  const items = [
    { d: "Em 7 dias", t: "Um homem na academia do meu prédio me parou e disse: 'UAU! Preciso saber qual é o seu segredo, pois não paro mais de olhar pra você… estou hipnotizado!' E pediu meu WhatsApp." },
    { d: "Em 14 dias", t: "Recebi 3 convites para jantar. Meu ex mandou mensagem perguntando 'como eu estava'. Amigas começaram a perguntar que BRUXARIA eu estava fazendo. 🤣 A verdade? Não era bruxaria — era CIÊNCIA." },
    { d: "Em 21 dias", t: "Tinha 5 homens me cortejando simultaneamente. Me sentia PODEROSA pela primeira vez em anos. Finalmente senti o oposto de migalhas emocionais — eu havia me tornado a Rainha da minha própria vida." },
  ];
  const bars = [
    { label: "Antes", h: "20%" },
    { label: "+150%", h: "60%" },
    { label: "+347%", h: "100%" },
  ];
  return (
    <section className="relative py-20 md:py-28 px-4 bg-gradient-noir text-cream overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.62 0.13 38 / 0.35), transparent 60%)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: heading + bars */}
          <div>
            <p className="font-heading font-bold text-rose-soft tracking-[0.3em] uppercase text-xs md:text-sm">
              A Grande Descoberta
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">
              O <span className="text-gradient-rose">"Efeito Inversão Psicológica"</span> — sua arma secreta
            </h2>
            <p className="mt-6 text-cream/85 leading-relaxed">
              Dra. Sophia me mostrou pesquisas comportamentais de referência (incluindo trabalhos divulgados por Harvard) sugerindo que homens relatam atração significativamente maior por mulheres que praticam o que ela chama de{" "}
              <strong className="text-gradient-rose">"disponibilidade seletiva"</strong> — estar presente, mas não necessitada. Não é sobre joguinhos; é sobre <strong>valor intrínseco</strong>.
            </p>
            <p className="mt-4 text-cream/85 leading-relaxed">
              E o que aconteceu depois que Marina aplicou esse conhecimento? A transformação foi{" "}
              <strong className="text-gradient-rose">IMEDIATA e IRREVERSÍVEL</strong>:
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 items-end h-40">
              {bars.map((b) => (
                <div
                  key={b.label}
                  className="bg-gradient-rose rounded-t-lg flex items-end justify-center pb-2 text-xs font-bold text-cream shadow-elegant transition-[height] duration-700"
                  style={{ height: b.h }}
                >
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3 sparkle cards + Sophia */}
          <div className="space-y-4">
            {items.map((it) => (
              <div
                key={it.d}
                className="bg-card/10 backdrop-blur-md border border-rose-soft/30 rounded-2xl p-5 flex gap-4"
              >
                <div className="shrink-0 h-14 w-14 rounded-full bg-gradient-rose flex items-center justify-center text-cream shadow-elegant">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-gradient-rose text-lg">{it.d}</p>
                  <p className="text-cream/90 text-sm leading-relaxed mt-1">{it.t}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 mt-6 bg-card/10 backdrop-blur rounded-2xl p-4 border border-rose-soft/20">
              <img
                src={IMG.sophia}
                alt="Dra. Sophia Miendez"
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover border-2 border-rose-soft"
              />
              <div>
                <p className="font-heading font-bold text-cream">Dra. Sophia Miendez</p>
                <p className="text-xs text-cream/70">Psicóloga comportamental • 25 anos de pesquisa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-cream/90 leading-relaxed">
            Hoje, <strong className="text-gradient-rose">+4 anos depois</strong>, já ajudei +3.847 mulheres a fazerem a mesma transformação e ressignificarem suas vidas amorosas. Elas não apenas superaram o término — elas <strong>DOMINARAM</strong> a arte da atração. E agora é{" "}
            <span className="text-gradient-rose font-bold">SUA vez</span>. Não amanhã. Não depois. <strong>AGORA</strong>.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function TriggersSection() {
  const triggers = [
    { n: "01", title: "Escassez Neural", subtitle: "O segredo da obsessão", Icon: Brain,
      body: "Quando você para de estar 'sempre disponível', o cérebro masculino interpreta como alta qualidade e dispara o sistema de recompensa primitivo.",
      arrow: "Ele pensa em você obsessivamente.", stat: "+340%", statLabel: "atividade dopaminérgica" },
    { n: "02", title: "Desafio Cognitivo", subtitle: "A caça que ele não pode resistir", Icon: Crown,
      body: "Tornar-se ligeiramente inalcançável ativa o centro de prazer cerebral — o mesmo que durante a caça. Ele quer o desafio de conquistar uma rainha.",
      arrow: "Necessidade compulsiva de te conquistar.", stat: "+218%", statLabel: "engajamento masculino" },
    { n: "03", title: "Investimento Crescente", subtitle: "Ancoragem emocional irreversível", Icon: Heart,
      body: "Quando ele percebe que está investindo mais do que recebendo, o Efeito IKEA é ativado — quanto mais investe, mais valoriza.",
      arrow: "Ele luta para te manter.", stat: "+512%", statLabel: "vínculo emocional" },
  ];
  return (
    <section className="relative py-20 md:py-28 px-4 bg-gradient-noir text-cream overflow-hidden">
      <span className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-deep/25 blur-3xl pointer-events-none" />
      <span className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

      {/* Subtle dotted texture */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(oklch(0.95 0.05 70) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold/30 text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold">
            <Brain className="w-3.5 h-3.5" /> O código secreto da atração
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center leading-tight mt-5">
            <span className="text-gradient-gold">Os 3 Gatilhos Neurológicos</span>
            <span className="block text-cream/95 text-2xl md:text-3xl italic font-normal mt-2">que fazem homens te perseguirem (no bom sentido)</span>
          </h2>
          <p className="text-center text-cream/70 max-w-3xl mx-auto mt-6 text-base md:text-lg">
            Não são truques baratos. São princípios da <strong className="text-rose-soft">neurociência</strong> e da <strong className="text-rose-soft">psicologia comportamental</strong> que ativam o centro de prazer e recompensa no cérebro masculino — tornando você uma obsessão saudável.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8 mt-20 pt-6">
          {/* Connecting glowing line (desktop) */}
          <div className="hidden md:block absolute top-6 left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          {triggers.map((t) => (
            <div key={t.n} className="group relative rounded-3xl p-7 md:p-8 pt-20 border border-gold/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm shadow-elegant overflow-hidden hover:-translate-y-2 hover:border-gold/40 transition-all">
              <span className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-rose opacity-25 blur-3xl group-hover:opacity-40 transition-opacity" />
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Watermark number (inside, clipped safely) */}
              <div className="absolute top-2 right-3 text-[5rem] md:text-[6rem] font-display font-black text-gold/[0.08] select-none leading-none pointer-events-none">{t.n}</div>

              {/* Floating icon orb — kept fully inside card */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <div className="relative w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-noir shadow-elegant ring-4 ring-noir/80">
                  <t.Icon className="w-7 h-7" strokeWidth={2} />
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                </div>
              </div>

              <div className="relative text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-bold">Gatilho {t.n}</div>
                <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold mt-2 text-gradient-gold leading-tight">{t.title}</h3>
                <div className="text-rose-soft text-xs uppercase tracking-wider mt-1.5 italic">{t.subtitle}</div>

                <p className="mt-5 text-cream/80 leading-relaxed text-sm md:text-[15px] text-left">{t.body}</p>

                {/* Stat chip */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-noir/60 border border-gold/30">
                  <span className="font-display text-lg font-extrabold text-gradient-gold">{t.stat}</span>
                  <span className="text-[10px] uppercase tracking-widest text-cream/70">{t.statLabel}</span>
                </div>

                {/* Outcome bar */}
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-2 text-left">
                  <span className="w-7 h-7 rounded-full bg-gradient-rose flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-cream" />
                  </span>
                  <p className="text-rose-soft font-semibold text-sm leading-snug">{t.arrow}</p>
                </div>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-rose" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12"><CTAButton /></div>
      </div>
    </section>
  );
}

function MethodIntro() {
  const works = [
    "Sua idade — funciona MUITO bem dos 20 aos 65 anos (a psicologia humana é universal)",
    "Há quanto tempo foi o término — a dor pode ser revertida a qualquer momento",
    "Se ele já está com outra — o magnetismo que você vai desenvolver é incomparável",
    "Se você se sente 'sem esperança' — este método é sua última e definitiva esperança",
  ];
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-pearl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-rose opacity-25 blur-3xl rounded-full" />
              <img
                src={IMG.mockup}
                alt="Método Nefertiti — acesso em celular, tablet e computador"
                loading="lazy"
                width={900}
                height={748}
                className="relative w-full max-w-md mx-auto h-auto object-contain drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="font-heading font-bold text-rose-deep tracking-widest uppercase text-sm">
              Apresentando a vocês
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="block italic font-semibold text-4xl md:text-6xl text-gradient-rose leading-tight mt-2">
                Método Nefertiti
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
              O primeiro sistema de reversão psicológica que transforma rejeição em{" "}
              <strong>magnetismo irresistível</strong> — validado por quem realmente entende da mente masculina. Você para de ser a "rejeitada" e se torna a Rainha Desejada, de forma 100% autêntica. Sem joguinhos. Apenas pura persuasão e magnetismo natural.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
              {works.map((t) => (
                <div
                  key={t}
                  className="bg-card/80 backdrop-blur rounded-2xl p-4 flex items-start gap-3 border border-rose-soft/30 shadow-soft h-full"
                >
                  <CheckCircle2 className="h-5 w-5 text-rose-deep shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeWeeksSection() {
  const weeks = [
    {
      tag: "Semana 1 · Dias 1-7",
      n: "01",
      title: "Reset emocional",
      body: "Você corta o ciclo da ansiedade, do choro escondido e da checagem de redes. Aprende a respirar, dormir e voltar a se enxergar no espelho sem aquela aperto no peito.",
      note: "→ A maioria das alunas relata o primeiro 'alívio real' entre o 4º e o 7º dia.",
    },
    {
      tag: "Semana 2 · Dias 8-14",
      n: "02",
      title: "Reconstrução da presença",
      body: "Você instala os gatilhos de magnetismo: postura, voz, olhar, silêncio estratégico. Começa a perceber pessoas (homens e mulheres) reagindo diferente a você na rua, no trabalho, no celular.",
      note: "→ Aqui costumam aparecer os primeiros 'oi' inesperados — inclusive dele.",
    },
    {
      tag: "Semana 3 · Dias 15-21",
      n: "03",
      title: "Magnetismo Nefertiti",
      body: "Você consolida a mulher nova: escolhe, não corre atrás. Aprende a responder (ou não responder) sem ansiedade. Sai do lugar de quem implora e entra no lugar de quem é desejada.",
      note: "→ No fim do 21º dia, você é outra mulher — e isso é irreversível.",
    },
  ];
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-heading font-bold text-rose-deep tracking-widest uppercase text-sm">
            📅 Como funciona em 21 dias
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            O caminho da mulher quebrada à{" "}
            <span className="text-gradient-rose">Rainha Nefertiti</span>
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl mx-auto">
            Sem fórmula mágica. Um protocolo de 21 dias dividido em 3 semanas com objetivos claros para cada etapa da sua reconstrução.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {weeks.map((w) => (
            <div
              key={w.n}
              className="relative bg-card rounded-3xl p-7 border border-rose-soft/30 shadow-soft h-full flex flex-col"
            >
              <span className="absolute -top-3 left-7 bg-gradient-rose text-cream text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-elegant">
                {w.tag}
              </span>
              <div className="mt-3 flex items-center gap-3">
                <span className="font-display text-4xl font-bold text-gradient-rose">{w.n}</span>
                <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                  {w.title}
                </h3>
              </div>
              <p className="mt-4 text-foreground/80 text-[15px] leading-relaxed">{w.body}</p>
              <p className="mt-4 text-rose-deep text-sm font-heading font-semibold italic">
                {w.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const mods = [
    { tag: "Módulo 1 • Dias 1-7", title: "Cura e Renovação Interior",
      items: ["Ritual de 48h que elimina 90% da dor emocional", "Técnica de Ressignificação Neural", "Protocolo de Libertação Emocional", "7 exercícios de reconexão com sua essência"],
      result: "Você vai se sentir 10x mais forte e centrada." },
    { tag: "Módulo 2 • Dias 8-14", title: "Ativação do Poder Feminino",
      items: ["Os 7 Pilares da Presença Magnética", "Linguagem Corporal de Poder", "Técnicas de Comunicação Hipnótica", "Sistema de Elevação da Autoestima"],
      result: "Homens demonstrarão interesse renovado e genuíno." },
    { tag: "Módulo 3 • Dias 15-21", title: "Estratégias de Atração Natural",
      items: ["Sistema de Escassez Saudável", "Protocolo de Atração Reversa", "Estratégias de reconquista sem desespero", "Como atrair homens de alto valor"],
      result: "Você vai ter opções, e poder de escolha total." },
  ];
  return (
    <section className="relative py-24 px-4 bg-gradient-pearl overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <Eyebrow>O Que Você Vai Receber</Eyebrow>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-rose-deep/70">Por dentro do Método Nefertiti</p>
          <SectionTitle className="mt-4">Um programa de 21 dias, em 3 módulos poderosos</SectionTitle>
          <p className="text-center text-foreground/75 max-w-2xl mx-auto mt-5 text-lg">
            Desenhado para reativar seu poder feminino e transformar sua vida amorosa de forma <strong>permanente</strong>.
          </p>
        </div>

        <div className="relative mt-12 flex justify-center">
          {/* Glow halos */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-rose opacity-25 blur-3xl" />
          </div>
          <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none">
            <div className="w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem] rounded-full border border-rose-soft/30 animate-spin-slow" />
          </div>

          {/* Mockup */}
          <div className="relative w-full max-w-2xl">
            <img src={IMG.mockup} alt="Método Nefertiti em todos os dispositivos" className="relative w-full rounded-2xl shadow-elegant animate-float" />

            {/* Floating tags around mockup */}
            <div className="absolute -top-2 -left-2 sm:-left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-rose-soft/40 shadow-elegant animate-float-tag">
              <span className="w-2 h-2 rounded-full bg-rose-deep animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">21 dias · 3 módulos</span>
            </div>
            <div className="absolute top-10 -right-10 sm:-right-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-rose text-cream shadow-elegant animate-float-slow" style={{ animationDelay: "1.2s" }}>
              <Sparkles className="w-3 h-3" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">Bônus inclusos</span>
            </div>
            <div className="absolute bottom-16 -left-12 sm:-left-24 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-card border border-rose-soft/40 shadow-elegant animate-float-tag" style={{ animationDelay: "0.6s" }}>
              <Star className="w-3 h-3 text-gold fill-gold" />
              <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">4.9/5 · +3.847</span>
            </div>
            <div className="absolute -bottom-2 -right-10 sm:-right-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gradient-noir text-cream shadow-elegant animate-float-slow" style={{ animationDelay: "1.8s" }}>
              <Shield className="w-3 h-3 text-rose-soft" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">Garantia 7d</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {mods.map((m, i) => (
            <div key={m.tag} className="group relative bg-card rounded-2xl p-7 shadow-soft border border-rose-soft/30 hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-rose" />
              <div className="absolute -top-6 -right-6 text-8xl font-display font-bold text-rose-soft/15 select-none">0{i + 1}</div>
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-rose-deep font-bold">{m.tag}</div>
                <h3 className="font-display text-2xl font-semibold mt-2 text-gradient-rose">{m.title}</h3>
                <ul className="mt-5 space-y-2.5 text-foreground/85 text-sm">
                  {m.items.map((it) => (
                    <li key={it} className="flex gap-2"><Check className="w-4 h-4 text-rose-deep mt-1 shrink-0" />{it}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm italic text-rose-deep border-t border-rose-soft/30 pt-4 flex gap-2 items-start">
                  <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />{m.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  const bonus = [
    {
      n: "01", title: "Guia de Transformação Digital", price: "R$ 297",
      Icon: Smartphone, accent: "Reposicionamento online em 7 dias",
      items: ["Scripts prontos para redes sociais", "Bio irresistível no WhatsApp", "Soft ghosting que faz ele correr atrás"],
    },
    {
      n: "02", title: "Manual de Inteligência Emocional", price: "R$ 467",
      Icon: Brain, accent: "Leia qualquer homem em segundos",
      items: ["Identifique homens emocionalmente indisponíveis", "Leia sinais masculinos com 99% de precisão", "Faça qualquer homem se abrir emocionalmente"],
    },
    {
      n: "03", title: "Comunicação Feminina Avançada", price: "R$ 697",
      Icon: MessagesSquare, accent: "Texting que gera desejo incontrolável",
      items: ["Scripts testados de conversação", "Técnicas para cada situação", "Respostas que viram vontade em obsessão"],
    },
  ];
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-cream">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-rose-soft/30 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-gold/30 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-deep/10 border border-rose-deep/20 text-rose-deep text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold">
            <Gift className="w-3.5 h-3.5 animate-bounce-slow" /> Empilhamento de valor
          </div>
          <SectionTitle className="mt-5">Bônus Exclusivos — seu caminho acelerado</SectionTitle>
          <p className="text-center text-foreground/75 mt-5 text-base md:text-lg max-w-2xl mx-auto">
            Um presente de valor incalculável — incluso <strong className="text-rose-deep">gratuitamente</strong> na sua compra hoje.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-12 md:mt-16">
          {bonus.map((b, i) => (
            <div
              key={b.n}
              className="group relative bg-card rounded-3xl p-6 md:p-7 pt-14 md:pt-16 shadow-soft border border-rose-soft/40 hover:shadow-elegant hover:-translate-y-2 transition-all overflow-hidden"
            >
              {/* Top stripe */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-rose" />

              {/* Center floating ribbon */}
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-rose text-cream text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.25em] rounded-b-2xl shadow-soft flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Bônus #{b.n}
              </div>

              {/* Corner GOLD seal */}
              <div className="absolute top-3 right-3 z-10">
                <div className="relative w-14 h-14 rounded-full bg-gradient-gold shadow-soft flex flex-col items-center justify-center text-noir border-2 border-cream rotate-[8deg] animate-float-tag">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest leading-none">Grátis</span>
                  <span className="text-[9px] font-bold leading-none mt-0.5">hoje</span>
                  <span className="absolute inset-0 rounded-full ring-1 ring-noir/10" />
                </div>
              </div>

              {/* Big watermark digit */}
              <div className="absolute -bottom-12 -right-6 text-[9rem] md:text-[11rem] font-display font-black text-rose-soft/[0.08] select-none leading-none pointer-events-none">
                {b.n}
              </div>

              <div className="relative">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-rose flex items-center justify-center text-cream shadow-soft animate-float-slow">
                  <b.Icon className="w-8 h-8" strokeWidth={1.8} />
                  <span className="absolute inset-0 rounded-2xl bg-gradient-rose blur-xl opacity-40 -z-10" />
                </div>

                <div className="mt-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-rose-deep/80">{b.accent}</div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mt-1.5 text-gradient-rose leading-tight">{b.title}</h3>

                <ul className="mt-5 space-y-2.5 text-sm text-foreground/85">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-deep/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-rose-deep" strokeWidth={3} />
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-dashed border-rose-soft/40 flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Valor</div>
                    <div className="line-through text-muted-foreground text-base font-medium">{b.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-rose-deep/80">Hoje</div>
                    <div className="text-gradient-rose font-extrabold text-xl">GRÁTIS</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total stack card */}
        <div className="relative mt-14 max-w-2xl mx-auto bg-gradient-noir text-cream rounded-3xl p-8 md:p-10 text-center overflow-hidden shadow-elegant border border-rose-deep/30">
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-rose-deep/30 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-deep/30 border border-rose-soft/30">
              <Lock className="w-3.5 h-3.5 text-rose-soft" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-soft font-semibold">Valor total dos bônus</span>
            </div>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-cream/50 line-through text-lg md:text-xl">R$ 1.461,00</span>
            </div>
            <div className="font-display text-5xl md:text-7xl font-black mt-1 text-gradient-gold leading-none">R$ 1.461</div>
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-rose text-cream font-extrabold tracking-[0.3em] text-xs md:text-sm shadow-soft">
              <Zap className="w-4 h-4" /> GRÁTIS HOJE
            </div>
            <p className="mt-5 text-sm text-cream/75 max-w-sm mx-auto">
              Tudo isso incluso na sua matrícula — apenas para as próximas alunas deste lote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="py-20 px-4 bg-cream-deep/50">
      <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-rose-soft/40 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-rose flex flex-col items-center justify-center text-cream shadow-elegant">
            <Shield className="w-8 h-8" />
            <div className="font-display text-3xl font-bold mt-1">7</div>
            <div className="text-xs uppercase tracking-wider">dias</div>
          </div>
          <div className="mt-3 text-xs uppercase tracking-widest text-rose-deep font-semibold">Risco invertido</div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold">
            Se o método não funcionar para você, eu devolvo cada centavo — e você fica com os bônus.
          </h3>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Você tem <strong>7 dias inteiros</strong> para mergulhar no Método Nefertiti. Se em qualquer momento desse período você sentir que não é para você, basta enviar um e-mail. Sem perguntas. Sem burocracia. O risco é todo meu.
          </p>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="py-20 px-4 bg-noir text-cream">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow><span className="text-rose-soft">⚠ Apenas 13 vagas restantes neste lote</span></Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">A decisão que define seu futuro</h2>
        <div className="mt-8">
          <div className="text-sm uppercase tracking-widest text-rose-soft mb-4">A oferta termina em</div>
          <CountdownDigits size="lg" />
        </div>

        <div className="bg-cream text-foreground rounded-2xl p-6 md:p-8 mt-10 text-left shadow-elegant">
          <div className="text-sm font-semibold uppercase tracking-widest text-rose-deep">Tudo o que você recebe hoje</div>
          <ul className="mt-4 space-y-2">
            {[
              ["Método Nefertiti completo (3 módulos)", "R$ 997"],
              ["Bônus #1 — Guia de Transformação Digital", "R$ 297"],
              ["Bônus #2 — Manual de Inteligência Emocional", "R$ 467"],
              ["Bônus #3 — Comunicação Feminina Avançada", "R$ 697"],
            ].map(([t, v]) => (
              <li key={t} className="flex justify-between border-b border-border pb-2 text-sm">
                <span>{t}</span><span className="font-semibold">{v}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4 text-lg">
            <span className="font-semibold">Valor real</span>
            <span className="font-bold line-through text-muted-foreground">R$ 2.458</span>
          </div>
          <div className="text-center mt-6 border-t border-border pt-6">
            <div className="text-sm text-muted-foreground">De <span className="line-through">R$ 997,00</span></div>
            <div className="text-sm text-muted-foreground mt-1">Hoje, por apenas</div>
            <div className="font-display text-5xl md:text-6xl font-bold text-rose-deep mt-2">
              12x R$ 14,70
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              ou <strong>R$ 147,00</strong> à vista no PIX — menos de R$ 0,50/dia pela sua transformação
            </div>
            <div className="mt-6"><CTAButton /></div>
            <div className="text-xs text-muted-foreground mt-3">Compra 100% segura · Cartão · PIX</div>
          </div>
        </div>

        <div className="mt-8 text-sm text-cream/80">
          <strong className="text-rose-soft">Garantia incondicional de 7 dias.</strong> Se por qualquer motivo você não se sentir satisfeita, basta enviar um e-mail e devolveremos cada centavo.
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>⭐⭐⭐⭐⭐ Resultados Reais</Eyebrow>
        <SectionTitle className="mt-3">O Que Nossas Alunas Estão Dizendo</SectionTitle>
        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          Já são mais de <strong>3.847 transformações documentadas</strong> que comprovam: o Método Nefertiti funciona.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center">
          {[
            ["3.847+", "Mulheres transformadas"],
            ["96%", "Taxa de satisfação"],
            ["21", "Dias para resultados"],
            ["4.9★", "Avaliação média"],
          ].map(([n, l]) => (
            <div key={l} className="bg-card rounded-2xl p-5 shadow-soft border border-border">
              <div className="font-display text-3xl md:text-4xl font-bold text-rose-deep">{n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 shadow-soft border border-border flex gap-4">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover shrink-0" />
              <div>
                <div className="font-display font-semibold text-lg">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="text-gold mt-1 text-sm">★★★★★</div>
                <p className="mt-2 text-foreground/85 italic text-sm">"{t.quote}"</p>
                <div className="mt-2 text-xs text-rose-deep font-medium">{t.badge}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}

function ChatsSection() {
  const [i, setI] = useState(0);
  const c = CHATS[i];
  return (
    <section className="py-20 px-4 bg-cream-deep/40">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>💬 Conversas reais de alunas</Eyebrow>
        <SectionTitle className="mt-3">As mensagens que chegam todos os dias <span className="text-gradient-rose">no WhatsApp da Marina</span></SectionTitle>
        <p className="text-center text-muted-foreground mt-4">
          Navegue pelos prints reais (com identidades preservadas) de alunas que aplicaram o Método Nefertiti.
        </p>

        <div className="bg-[#0b1410] rounded-3xl shadow-elegant mt-10 overflow-hidden border-4 border-noir">
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs opacity-80">online</div>
            </div>
            <MessageCircle className="ml-auto w-5 h-5 opacity-60" />
          </div>
          <div className="bg-[#e5ddd5] p-4 space-y-2 min-h-[380px]">
            {c.messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.from === "marina" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] px-3 py-2 rounded-lg text-sm shadow-sm ${
                  m.from === "marina" ? "bg-[#dcf8c6] text-foreground" : "bg-white text-foreground"
                }`}>
                  <div>{m.text}</div>
                  <div className="text-[10px] text-muted-foreground text-right mt-1">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => setI((i - 1 + CHATS.length) % CHATS.length)}
            className="text-rose-deep font-medium text-sm hover:underline">← Anterior</button>
          <div className="text-xs text-muted-foreground">{i + 1} / {CHATS.length}</div>
          <button onClick={() => setI((i + 1) % CHATS.length)}
            className="text-rose-deep font-medium text-sm hover:underline">Próxima →</button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          * Prints baseados em depoimentos reais. Nomes e fotos das alunas preservados por questões de privacidade.
        </p>
      </div>
    </section>
  );
}

function PhotoProofsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Não acredite em mim. Acredite nelas.</SectionTitle>
        <p className="text-center text-muted-foreground mt-4">
          Mulheres reais, histórias reais — alunas que reescreveram seus destinos com o Método Nefertiti.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          {PHOTO_PROOFS.map((p) => (
            <div key={p.name} className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border">
              <img src={p.img} alt={p.name} className="w-full aspect-[3/4] object-cover" />
              <div className="p-4">
                <div className="font-display font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.age}</div>
                <p className="text-sm text-foreground/85 italic mt-2">"{p.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}

function TripleGuarantee() {
  return (
    <section className="py-20 px-4 bg-cream-deep/40">
      <div className="max-w-5xl mx-auto">
        <Eyebrow>🛡️ Tripla garantia blindada</Eyebrow>
        <SectionTitle className="mt-3">Você literalmente não tem nada a perder</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { n: "#1", t: "Resultados ou dinheiro de volta", d: "Se em 7 dias você não se sentir pelo menos 10x mais confiante e poderosa, devolvemos cada centavo. Sem perguntas, sem burocracia." },
            { n: "#2", t: "Satisfação total", d: "Se por qualquer motivo você não ficar 100% satisfeita com o conteúdo, tem 7 dias para pedir reembolso total." },
            { n: "#3", t: "Suporte VIP", d: "Acesso direto comigo e com minha equipe por 21 dias. Suas perguntas serão respondidas em até 48 horas." },
          ].map((g) => (
            <div key={g.n} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="text-rose-deep font-display text-3xl font-bold">{g.n}</div>
              <h3 className="font-display text-xl font-semibold mt-2">{g.t}</h3>
              <p className="mt-3 text-sm text-foreground/85">{g.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-foreground/85">Ou você se transforma, ou seu dinheiro volta integralmente. 💕</p>
      </div>
    </section>
  );
}

function CostOfInaction() {
  const rows = [
    ["Terapia tradicional (3 meses)", "1 sessão/semana · R$ 100 a R$ 300/sessão", "R$ 1.200"],
    ["Livros e cursos avulsos", "média de 4 livros + 1 curso de autoajuda", "R$ 480"],
    ["Tempo perdido em sofrimento", "noites em claro, energia, oportunidades", "Inestimável"],
    ["Aceitar migalhas de quem não te valoriza", "o preço mais alto que existe", "Sua dignidade"],
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>💰 Investimento vs. Custo da inação</Eyebrow>
        <SectionTitle className="mt-3">Quanto custa continuar onde está?</SectionTitle>
        <div className="space-y-3 mt-10">
          {rows.map(([t, d, v]) => (
            <div key={t} className="bg-card rounded-xl p-5 shadow-soft border border-border flex justify-between items-center gap-4">
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
              <div className="text-rose-deep font-bold whitespace-nowrap">{v}</div>
            </div>
          ))}
          <div className="bg-gradient-rose text-cream rounded-xl p-5 shadow-elegant flex justify-between items-center gap-4">
            <div>
              <div className="font-semibold">Método Nefertiti — hoje</div>
              <div className="text-xs opacity-90 mt-1">Tudo, de uma vez, para sempre</div>
            </div>
            <div className="font-display text-2xl font-bold">R$ 147</div>
          </div>
        </div>
        <p className="mt-6 text-foreground/85 text-center">
          <strong>Menos de R$ 0,50 por dia</strong> pelo método que pode encerrar anos de sofrimento.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-cream">
      <div className="max-w-4xl mx-auto text-center">
        <Eyebrow>👑 Sua coroa está pronta</Eyebrow>
        <SectionTitle className="mt-3">Agora que você está 100% protegida, garanta seu acesso pelo valor especial</SectionTitle>
        <p className="mt-4 text-foreground/85 max-w-2xl mx-auto">
          Tudo o que você viu até aqui — método completo, bônus exclusivos e tripla garantia blindada — por um investimento simbólico perto da transformação que você vai viver.
        </p>

        <div className="bg-card rounded-3xl p-8 mt-10 shadow-elegant border border-rose-soft/40 text-left">
          <div className="font-semibold uppercase tracking-widest text-rose-deep text-sm">Você leva tudo isto:</div>
          <ul className="mt-4 space-y-2 text-foreground/85">
            {[
              "Método Nefertiti completo (3 módulos)",
              "Bônus #1 — Guia de Transformação Digital (R$ 297)",
              "Bônus #2 — Manual de Inteligência Emocional (R$ 467)",
              "Bônus #3 — Comunicação Feminina Avançada (R$ 697)",
              "Acesso vitalício + atualizações futuras",
              "Suporte VIP por 21 dias",
            ].map((t) => (
              <li key={t} className="flex gap-3"><Crown className="w-4 h-4 text-rose-deep mt-1 shrink-0" />{t}</li>
            ))}
          </ul>
          <div className="border-t border-border mt-6 pt-6 text-center">
            <div className="text-sm text-muted-foreground">Valor real: <span className="line-through">R$ 2.458,00</span></div>
            <div className="text-sm text-muted-foreground mt-1">De <span className="line-through">R$ 997,00</span></div>
            <div className="mt-3 text-sm">12x de</div>
            <div className="font-display text-6xl font-bold text-rose-deep">R$ 14,70</div>
            <div className="text-sm text-muted-foreground">no cartão</div>
            <div className="mt-6"><CTAButton /></div>
            <div className="text-xs text-muted-foreground mt-3">Compra 100% segura · Garantia de 7 dias · Cartão em até 12x · PIX · Acesso imediato</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Perguntas frequentes</SectionTitle>
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/85 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}

function PSSection() {
  return (
    <section className="py-20 px-4 bg-noir text-cream">
      <div className="max-w-3xl mx-auto">
        <Eyebrow><span className="text-rose-soft">A última objeção</span></Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-center">"Mas Marina… e se eu não tiver tempo?"</h2>
        <p className="mt-6 text-cream/85 leading-relaxed">
          Se essa é a sua dúvida final, eu te respondo com toda honestidade: <strong>15 a 20 minutos por dia.</strong> Só. É o tempo que você gasta scrollando o Instagram dele, da nova, das amigas felizes — chorando escondida no banheiro do trabalho.
        </p>
        <p className="mt-4 text-cream/85 leading-relaxed">
          É o tempo de uma fila de banco, de uma viagem de Uber, de um intervalo entre uma reunião e outra. <strong>Você tem esse tempo.</strong> A pergunta é: você quer continuar gastando ele com a dor, ou começar a investir ele na mulher que você vai ser daqui a 21 dias?
        </p>
        <p className="mt-6 italic text-rose-soft text-center font-display text-xl">Não existe "depois". Existe agora ou nunca.</p>

        <div className="mt-12 border-t border-cream/20 pt-10 space-y-4 text-cream/85">
          <p className="font-script text-3xl text-rose-soft">Querida,</p>
          <p>Se você chegou até aqui, é porque alguma coisa dentro de você já decidiu. A sua intuição reconheceu este método como a virada que estava esperando — e a única coisa que separa você da Rainha que existe aí dentro são <strong>dois cliques no botão abaixo</strong>.</p>
          <p>Com amor e verdade,</p>
          <p className="font-script text-2xl text-rose-soft">Marina · Método Nefertiti</p>

          <p className="text-sm"><strong>P.S.</strong> Por <strong>R$ 14,70 parcelado</strong> (menos que um delivery), você leva o método completo + 3 bônus + acesso vitalício. Quando este lote esgotar, o preço volta para R$ 997.</p>
          <p className="text-sm"><strong>P.P.S.</strong> Você tem <strong>7 dias de garantia incondicional</strong>. Entra, lê tudo, aplica os exercícios. Se não sentir transformação real, peça reembolso e fica com os 3 bônus de presente. <strong>O risco é meu, não seu.</strong></p>
          <p className="text-sm"><strong>P.P.P.S.</strong> Restam apenas 13 vagas neste lote. Quando fechar, fecha de verdade — abrimos lista de espera sem data definida.</p>
        </div>
        <div className="text-center mt-10"><CTAButton /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-noir text-cream/80 overflow-hidden">
      {/* Top decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-rose-deep/15 blur-[120px] pointer-events-none" />

      {/* Brand hero */}
      <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-10 text-center">
        <img src={IMG.logo} alt="Método Nefertiti" className="h-16 md:h-20 object-contain mx-auto mb-5" />
        <p className="font-display italic text-cream/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Para mulheres que escolheram renascer — e nunca mais voltar atrás.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-gold/20 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            <Shield className="w-3 h-3" /> Compra segura
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-gold/20 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            <Lock className="w-3 h-3" /> SSL 256-bit
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-gold/20 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            <ShieldCheck className="w-3 h-3" /> Garantia 7 dias
          </span>
        </div>
      </div>

      {/* Columns */}
      <div className="relative max-w-6xl mx-auto px-4 pb-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 border-t border-cream/10 pt-12">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Sobre</div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Protocolo emocional de 21 dias baseado em psicologia comportamental e neurociência da atração — criado por Marina para reconstruir presença, autoestima e magnetismo.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Institucional</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-rose-soft transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-rose-soft" /> Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-rose-soft transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-rose-soft" /> Termos de Uso</a></li>
            <li><a href="#" className="hover:text-rose-soft transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-rose-soft" /> Política de Reembolso</a></li>
            <li><a href="#" className="hover:text-rose-soft transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-rose-soft" /> Perguntas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Suporte</div>
          <ul className="space-y-2.5 text-sm text-cream/75">
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-rose-soft shrink-0" /> suporte@metodonefertiti.com</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-rose-soft shrink-0" /> Seg a Sex · 9h às 18h</li>
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-rose-soft shrink-0" /> Resposta em até 48h</li>
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {["Visa", "Master", "Elo", "Amex", "Pix", "Boleto"].map((m) => (
              <span key={m} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] uppercase tracking-widest text-cream/70 font-semibold">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimers */}
      <div className="relative border-t border-cream/10 bg-black/30">
        <div className="max-w-5xl mx-auto px-4 py-8 text-[11px] leading-relaxed text-cream/55 space-y-3">
          <p>
            <strong className="text-cream/80">Aviso legal:</strong> este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms. Após sair dessas plataformas, a responsabilidade pelo conteúdo é inteiramente nossa.
          </p>
          <p>
            <strong className="text-cream/80">Disclaimer de resultados:</strong> os depoimentos refletem experiências reais de alunas. Resultados individuais podem variar conforme o nível de comprometimento. Este conteúdo não substitui acompanhamento psicológico, médico ou terapêutico.
          </p>
          <p>
            <strong className="text-cream/80">Pagamentos:</strong> processados de forma 100% segura pela plataforma Kiwify, com criptografia de ponta a ponta. Nenhum dado de cartão é armazenado em nossos servidores.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-cream/10 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-cream/55">
          <p className="flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 text-gold" />
            © {new Date().getFullYear()} Método Nefertiti — Todos os direitos reservados.
          </p>
          <p>CNPJ XX.XXX.XXX/0001-XX · Feito com 💕 para mulheres que escolheram renascer.</p>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="pb-24 md:pb-20">
      <TopBar />
      <Hero />
      <PainSection />
      <MarinaStory />
      <ForYouSection />
      <DiscoverySection />
      <TriggersSection />
      <MethodIntro />
      <ThreeWeeksSection />
      <ModulesSection />
      <BonusSection />
      <GuaranteeSection />
      <OfferSection />
      <TestimonialsSection />
      <ChatsSection />
      <PhotoProofsSection />
      <TripleGuarantee />
      <CostOfInaction />
      <FinalCTA />
      <FAQSection />
      <PSSection />
      <Footer />
      <SocialProofToast />
      <StickyBottomCTA />
    </main>
  );
}
