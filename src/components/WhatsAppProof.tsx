import { useEffect, useState } from "react";
import { Check, CheckCheck, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import alunaBeatriz from "@/assets/aluna-beatriz.webp";
import alunaCamila from "@/assets/aluna-camila.webp";
import alunaPaula from "@/assets/aluna-paula.webp";
import alunaJuliana from "@/assets/aluna-juliana.webp";
import alunaRenata from "@/assets/aluna-renata.webp";
import alunaAmanda from "@/assets/aluna-amanda.webp";
import alunaLarissa from "@/assets/aluna-larissa.webp";
import alunaTatiane from "@/assets/aluna-tatiane.webp";
import alunaIsabela from "@/assets/aluna-isabela.webp">;

type Msg = {
  from: "aluna" | "marina";
  text: string;
  time: string;
  read?: boolean;
};

type Conversation = {
  name: string;
  avatar: string;
  status: string;
  messages: Msg[];
};

// Tom: WhatsApp de verdade. Minúsculas, frases curtas, alguns "kkk", emojis
// pontuais, mensagens quebradas em duas. Sem jargão de coach, sem "rainha 👑"
// em toda mensagem. Mais humano, menos roteiro.
const conversations: Conversation[] = [
  {
    name: "Beatriz",
    avatar: alunaBeatriz,
    status: "online",
    messages: [
      { from: "aluna", text: "marina vc nao vai acreditar", time: "14:08" },
      { from: "aluna", text: "o ricardo me chamou agora… 4 meses sumido 😶", time: "14:08" },
      {
        from: "marina",
        text: "eu te falei rs. e aí, o que ele disse?",
        time: "14:09",
        read: true,
      },
      {
        from: "aluna",
        text: "que sentiu mt minha falta, ja chamou pra jantar sabado",
        time: "14:11",
      },
      { from: "marina", text: "vai sem ansiedade. e responde devagar 😉", time: "14:12", read: true },
    ],
  },
  {
    name: "Camila",
    avatar: alunaCamila,
    status: "online",
    messages: [
      { from: "aluna", text: "to no dia 14 e ja tem 2 caras me chamando kkkk", time: "09:42" },
      { from: "aluna", text: "um é medico, o outro arquiteto", time: "09:42" },
      { from: "aluna", text: "isso nunca tinha acontecido cmg", time: "09:43" },
      {
        from: "marina",
        text: "viu? agora vc escolhe, nao corre atras ✨",
        time: "09:45",
        read: true,
      },
      { from: "aluna", text: "obrigada de coracao mesmo ❤️", time: "09:46" },
    ],
  },
  {
    name: "Paula",
    avatar: alunaPaula,
    status: "online",
    messages: [
      { from: "aluna", text: "lembra q eu te disse q achava q ngm ia me querer com 47?", time: "21:03" },
      { from: "aluna", text: "ele me pediu em casamento hoje 💍", time: "21:03" },
      { from: "aluna", text: "ainda to tremendo", time: "21:04" },
      {
        from: "marina",
        text: "paula que coisa linda 🥹 idade nunca foi o problema",
        time: "21:08",
        read: true,
      },
      { from: "aluna", text: "obrigada por nao deixar eu desistir", time: "21:09" },
    ],
  },
  {
    name: "Juliana",
    avatar: alunaJuliana,
    status: "online",
    messages: [
      { from: "aluna", text: "marina ele apareceu aqui no trampo agora", time: "11:20" },
      { from: "aluna", text: "com flores 🌹 eu fiquei sem reacao", time: "11:21" },
      { from: "aluna", text: "disse q tava tomando coragem ha semanas", time: "11:21" },
      {
        from: "marina",
        text: "respira. escuta antes de responder, ok?",
        time: "11:23",
        read: true,
      },
      { from: "aluna", text: "to tremendo mas e diferente dessa vez", time: "11:24" },
    ],
  },
  {
    name: "Renata",
    avatar: alunaRenata,
    status: "online",
    messages: [
      { from: "aluna", text: "olha esse convite q recebi 😅", time: "18:02" },
      { from: "aluna", text: "viagem com um cara incrivel, ele tem barco e tudo", time: "18:02" },
      {
        from: "marina",
        text: "kkkk olha vc atraindo gente do seu nivel. e ai, vai?",
        time: "18:04",
        read: true,
      },
      { from: "aluna", text: "vou! mas calma, sem pressa nenhuma", time: "18:05" },
      { from: "marina", text: "é assim mesmo 💎", time: "18:06", read: true },
    ],
  },
  {
    name: "Amanda",
    avatar: alunaAmanda,
    status: "online",
    messages: [
      { from: "aluna", text: "marina o ex me desbloqueou agora 😱", time: "07:55" },
      { from: "aluna", text: "tinha me bloqueado em tudo, lembra?", time: "07:55" },
      { from: "aluna", text: "mandou um audio pedindo desculpa", time: "07:56" },
      {
        from: "marina",
        text: "nao responde correndo. deixa ele esperar um pouco",
        time: "08:01",
        read: true,
      },
      { from: "aluna", text: "to seguindo direitinho, prometo kkk", time: "08:02" },
    ],
  },
  {
    name: "Larissa",
    avatar: alunaLarissa,
    status: "online",
    messages: [
      { from: "aluna", text: "primeira vez na vida q alguem me trata como prioridade", time: "22:41" },
      { from: "aluna", text: "ele chegou com jantar pronto hj 🥹 sem motivo", time: "22:42" },
      {
        from: "marina",
        text: "esse é o tipo de homem que vc merece, sempre mereceu",
        time: "22:45",
        read: true,
      },
      { from: "aluna", text: "nunca mais aceito menos que isso", time: "22:46" },
    ],
  },
  {
    name: "Tatiane",
    avatar: alunaTatiane,
    status: "online",
    messages: [
      { from: "aluna", text: "depois de 12 anos casada e o divorcio… achei q tinha acabado pra mim", time: "16:10" },
      { from: "aluna", text: "hj conheci alguem q me faz rir de novo", time: "16:11" },
      { from: "aluna", text: "to me sentindo gente outra vez", time: "16:11" },
      {
        from: "marina",
        text: "vc floresceu de dentro pra fora 🌹 aproveita cada segundo",
        time: "16:14",
        read: true,
      },
      { from: "aluna", text: "obrigada marina, de coracao ❤️", time: "16:15" },
    ],
  },
  {
    name: "Isabela",
    avatar: alunaIsabela,
    status: "online",
    messages: [
      { from: "aluna", text: "ele me ligou chorando ontem a noite 😶", time: "23:18" },
      { from: "aluna", text: "disse q nao consegue dormir pensando em mim", time: "23:18" },
      {
        from: "marina",
        text: "e ai? vc ainda quer ele de volta?",
        time: "23:20",
        read: true,
      },
      { from: "aluna", text: "sinceramente nao sei, to escolhendo pela primeira vez", time: "23:21" },
      { from: "marina", text: "essa e a maior vitoria ✨", time: "23:23", read: true },
    ],
  },
];

function Bubble({ msg }: { msg: Msg }) {
  const isMarina = msg.from === "marina";
  return (
    <div className={`flex ${isMarina ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[82%] px-3 py-1.5 rounded-2xl text-[13px] leading-snug shadow-sm ${
          isMarina
            ? "bg-[#dcf8c6] text-[#0b1f10] rounded-tr-sm"
            : "bg-white text-[#0b1f10] rounded-tl-sm"
        }`}
      >
        <p className="whitespace-pre-wrap">{msg.text}</p>
        <span className="flex items-center gap-1 justify-end text-[10px] text-[#5e7066] mt-0.5">
          {msg.time}
          {isMarina &&
            (msg.read ? (
              <CheckCheck className="h-3 w-3 text-[#34b7f1]" />
            ) : (
              <Check className="h-3 w-3" />
            ))}
        </span>
      </div>
    </div>
  );
}

function Avatar({ src, name }: { src: string; name: string }) {
  const initials = name
    .replace(/·.*$/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full overflow-hidden border border-pearl/30 bg-rose-gold-gradient text-pearl font-heading text-[11px] font-bold tracking-wider"
    >
      <span className="absolute inset-0 flex items-center justify-center select-none">
        {initials}
      </span>
      <img
        src={src}
        alt={`Foto de perfil de ${name.replace(/·.*$/, "").trim()}`}
        loading="lazy"
        decoding="async"
        width={768}
        height={768}
        className="relative h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </span>
  );
}

// Phone: ratio 9/16 (proportion realista de smartphone moderno) e largura
// um pouco maior para a tipografia respirar. Antes estávamos em 9/19, que
// deixava o aparelho alongado demais para o volume de mensagens (4-5 bolhas).
function Phone({ convo }: { convo: Conversation }) {
  return (
    <div className="relative mx-auto w-full max-w-[min(300px,82vw)] aspect-[9/16] rounded-[2rem] bg-[#0b141a] p-1.5 shadow-elegant border border-rose-gold/20 flex flex-col overflow-hidden">
      <div className="mx-auto h-4 w-20 rounded-b-2xl bg-[#0b141a] absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="rounded-[1.6rem] overflow-hidden bg-[#e5ddd5] flex flex-col flex-1">
        <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 text-pearl shrink-0">
          <Avatar src={convo.avatar} name={convo.name} />
          <div className="leading-tight flex-1 min-w-0">
            <p className="font-heading font-semibold text-[13px] truncate">{convo.name}</p>
            <p className="text-[10px] opacity-80">{convo.status}</p>
          </div>
          <MessageCircle className="h-4 w-4 opacity-80" />
        </div>

        <div
          className="px-3 py-2.5 space-y-1.5 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 15%, rgba(0,0,0,0.04), transparent 40%), radial-gradient(circle at 75% 85%, rgba(0,0,0,0.04), transparent 40%)",
            backgroundColor: "#e5ddd5",
          }}
        >
          {convo.messages.map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneSkeleton() {
  return (
    <div
      className="relative mx-auto w-full max-w-[min(300px,82vw)] aspect-[9/16] rounded-[2rem] bg-[#0b141a] p-1.5 shadow-elegant border border-rose-gold/20 flex flex-col overflow-hidden"
      aria-hidden
    >
      <div className="mx-auto h-4 w-20 rounded-b-2xl bg-[#0b141a] absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="rounded-[1.6rem] overflow-hidden bg-[#e5ddd5] flex flex-col flex-1">
        <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 shrink-0">
          <span className="h-9 w-9 rounded-full shimmer-block" />
          <div className="flex-1 space-y-1.5">
            <span className="block h-3 w-2/3 rounded shimmer-block" />
            <span className="block h-2 w-1/3 rounded shimmer-block opacity-70" />
          </div>
        </div>
        <div className="px-3 py-3 space-y-3 flex-1 bg-[#e5ddd5]">
          <div className="flex justify-start">
            <span className="h-10 w-3/4 rounded-2xl rounded-tl-sm shimmer-block" />
          </div>
          <div className="flex justify-end">
            <span className="h-12 w-2/3 rounded-2xl rounded-tr-sm shimmer-block" />
          </div>
          <div className="flex justify-start">
            <span className="h-8 w-1/2 rounded-2xl rounded-tl-sm shimmer-block" />
          </div>
          <div className="flex justify-end">
            <span className="h-10 w-3/5 rounded-2xl rounded-tr-sm shimmer-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppProof() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
    const id = idle(() => setReady(true));
    const fallback = window.setTimeout(() => setReady(true), 600);
    return () => {
      window.clearTimeout(fallback);
      if (typeof id === "number") window.clearTimeout(id);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, oklch(0.78 0.12 75 / 0.35), transparent 55%), radial-gradient(circle at 85% 80%, oklch(0.7 0.105 33 / 0.3), transparent 55%)",
        }}
      />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-heading font-bold text-rose-gold-deep tracking-widest uppercase text-sm">
              💬 Conversas reais de alunas
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              As mensagens que <span className="text-rose-gold-gradient">chegam todos os dias</span>{" "}
              no WhatsApp da Marina
            </h2>
            <p className="mt-4 text-foreground/75 max-w-2xl mx-auto">
              Navegue pelos prints reais (com identidades preservadas) de alunas que aplicaram o{" "}
              <span className="font-display italic">Método Nefertiti</span> e tiveram suas vidas
              transformadas em poucas semanas.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {!ready ? (
            <div
              className="w-full max-w-5xl mx-auto px-1 sm:px-10 overflow-hidden"
              role="status"
              aria-label="Carregando conversas"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <PhoneSkeleton />
                <div className="hidden sm:block">
                  <PhoneSkeleton />
                </div>
                <div className="hidden lg:block">
                  <PhoneSkeleton />
                </div>
              </div>
              <span className="sr-only">Carregando prints de WhatsApp…</span>
            </div>
          ) : (
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-5xl mx-auto px-1 sm:px-10 overflow-hidden"
            >
              <CarouselContent className="-ml-4">
                {conversations.map((c) => (
                  <CarouselItem key={c.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="py-2">
                      <Phone convo={c} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-2 lg:-left-4 bg-card border-rose-gold/40 text-rose-gold-deep hover:bg-rose-gold/10" />
              <CarouselNext className="hidden sm:flex -right-2 lg:-right-4 bg-card border-rose-gold/40 text-rose-gold-deep hover:bg-rose-gold/10" />
            </Carousel>
          )}
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs text-foreground/55 italic max-w-2xl mx-auto">
            * Prints baseados em depoimentos reais. Nomes e fotos das alunas preservados por
            questões de privacidade. Deslize para navegar entre as 9 conversas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
