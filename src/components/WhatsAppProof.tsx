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
import marina from "@/assets/marina.jpg";

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

const conversations: Conversation[] = [
  {
    name: "Beatriz · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, EU NÃO ACREDITO 😱 ele acabou de me chamar… depois de 4 meses sumido!!", time: "14:08" },
      { from: "marina", text: "Eu te disse, querida 👑 quando você para de correr atrás, eles voltam correndo. O que ele disse?", time: "14:09", read: true },
      { from: "aluna", text: "Que sentiu MUITA falta de mim e que se arrepende de ter terminado 🥹 já chamou pra jantar sábado", time: "14:11" },
      { from: "marina", text: "Vai sem ansiedade. Lembre-se: você é a rainha agora. Ele que precisa provar 💎", time: "14:12", read: true },
    ],
  },
  {
    name: "Camila · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, dia 14 do método e já tenho 2 homens incríveis me chamando 😳", time: "09:42" },
      { from: "aluna", text: "Um deles é médico, o outro é arquiteto. Nunca aconteceu isso comigo!!", time: "09:42" },
      { from: "marina", text: "É isso, minha rainha 👑 magnetismo verdadeiro atrai homens à altura. Agora você ESCOLHE ✨", time: "09:45", read: true },
      { from: "aluna", text: "Marina, obrigada por mudar minha vida. De verdade. ❤️", time: "09:46" },
    ],
  },
  {
    name: "Paula · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, lembra que eu te disse que tinha 47 anos e achava que ninguém ia me querer mais?", time: "21:03" },
      { from: "aluna", text: "ELE PEDIU MINHA MÃO HOJE 💍✨ estamos noivos!!!", time: "21:03" },
      { from: "marina", text: "Paula, eu chorei lendo isso 🥹 você merece TUDO. Idade nunca foi o problema — era a forma como você se via.", time: "21:08", read: true },
      { from: "aluna", text: "Hoje me vejo como rainha. E ele me trata como uma 👑", time: "21:09" },
    ],
  },
  {
    name: "Juliana · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, ele acabou de aparecer aqui no meu trabalho com flores 🌹😳", time: "11:20" },
      { from: "aluna", text: "Falou que está há semanas tentando coragem pra me procurar de novo", time: "11:21" },
      { from: "marina", text: "Viu? O protocolo funciona. Respira, escuta, e responde com elegância 👑", time: "11:23", read: true },
      { from: "aluna", text: "Estou tremendo, mas dessa vez é DE PODER, não de ansiedade ❤️", time: "11:24" },
    ],
  },
  {
    name: "Renata · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, recebi um convite pra viajar com um homem incrível… ele tem yacht 🛥️😅", time: "18:02" },
      { from: "marina", text: "Olha você atraindo homens à sua altura ✨ e aí, vai?", time: "18:04", read: true },
      { from: "aluna", text: "Vou! Mas SEM ansiedade. Sigo as leis do método: presença, não dependência 👑", time: "18:05" },
      { from: "marina", text: "É ASSIM que se faz, rainha 💎", time: "18:06", read: true },
    ],
  },
  {
    name: "Amanda · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, o ex que me bloqueou em TODAS as redes acabou de me desbloquear 😱", time: "07:55" },
      { from: "aluna", text: "Pediu desculpas e disse que foi o pior erro da vida dele", time: "07:56" },
      { from: "marina", text: "Energia de rainha cura distância 👑 não responde correndo. Dá tempo dele sentir o peso da ausência.", time: "08:01", read: true },
      { from: "aluna", text: "Tô seguindo o protocolo à risca. Obrigada Marina 🥹", time: "08:02" },
    ],
  },
  {
    name: "Larissa · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, primeira vez que ALGUÉM me trata como prioridade na vida 🥹", time: "22:41" },
      { from: "aluna", text: "Ele chegou do trabalho com jantar pronto e flores. Sem motivo nenhum.", time: "22:42" },
      { from: "marina", text: "Esse é o padrão de homem que você merece, sempre mereceu 👑", time: "22:45", read: true },
      { from: "aluna", text: "Eu nunca mais aceito menos que isso ✨", time: "22:46" },
    ],
  },
  {
    name: "Tatiane · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, depois de 12 anos casada e divórcio doloroso… achei que era o fim 😞", time: "16:10" },
      { from: "aluna", text: "Hoje, 28 dias do método, conheci alguém que me faz sentir nova de novo 🥹", time: "16:11" },
      { from: "marina", text: "Você floresceu de dentro pra fora 🌹 e o universo respondeu. Aproveita CADA segundo.", time: "16:14", read: true },
      { from: "aluna", text: "Obrigada, Marina. De coração ❤️👑", time: "16:15" },
    ],
  },
  {
    name: "Isabela · aluna",
    avatar: marina,
    status: "online",
    messages: [
      { from: "aluna", text: "Marina, ele me ligou chorando ontem 😳 disse que não consegue mais dormir pensando em mim", time: "23:18" },
      { from: "marina", text: "É o efeito da inversão psicológica. A pergunta agora é: você QUER de volta?", time: "23:20", read: true },
      { from: "aluna", text: "Sinceramente? Não sei. Tô ESCOLHENDO pela primeira vez 👑", time: "23:21" },
      { from: "marina", text: "ESSA é a verdadeira vitória, rainha ✨ poder de escolha.", time: "23:23", read: true },
    ],
  },
];

function Bubble({ msg }: { msg: Msg }) {
  const isMarina = msg.from === "marina";
  return (
    <div className={`flex ${isMarina ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[82%] px-3.5 py-2 rounded-2xl text-[13.5px] leading-snug shadow-sm ${
          isMarina
            ? "bg-[#dcf8c6] text-[#0b1f10] rounded-tr-sm"
            : "bg-white text-[#0b1f10] rounded-tl-sm"
        }`}
      >
        <p className="whitespace-pre-wrap">{msg.text}</p>
        <span className="flex items-center gap-1 justify-end text-[10px] text-[#5e7066] mt-1">
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
  // Lightweight initials fallback — shown until the real avatar loads
  // (or permanently if it fails on slow mobile networks).
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
        alt=""
        loading="lazy"
        decoding="async"
        width={36}
        height={36}
        className="relative h-full w-full object-cover"
        onError={(e) => {
          // Hide broken image so the initials placeholder remains visible.
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </span>
  );
}

function Phone({ convo }: { convo: Conversation }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] aspect-[9/17] rounded-[2rem] bg-[#0b141a] p-1.5 shadow-elegant border border-rose-gold/20 flex flex-col">
      <div className="mx-auto h-4 w-20 rounded-b-2xl bg-[#0b141a] absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="rounded-[1.6rem] overflow-hidden bg-[#e5ddd5] flex flex-col flex-1">
        <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 text-pearl shrink-0">
          <Avatar src={convo.avatar} name={convo.name} />
          <div className="leading-tight flex-1 min-w-0">
            <p className="font-heading font-semibold text-[12.5px] truncate">
              {convo.name}
            </p>
            <p className="text-[10px] opacity-80">{convo.status}</p>
          </div>
          <MessageCircle className="h-4 w-4 opacity-80" />
        </div>

        <div
          className="px-3 py-3 space-y-2 flex-1 overflow-hidden"
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
      className="relative mx-auto w-full max-w-[280px] aspect-[9/17] rounded-[2rem] bg-[#0b141a] p-1.5 shadow-elegant border border-rose-gold/20 flex flex-col"
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
    // Brief delay so the shimmer is perceptible on slower mobile networks,
    // and to let Embla measure layout before the first paint.
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
              As mensagens que <span className="text-rose-gold-gradient">chegam todos os dias</span> no WhatsApp da Marina
            </h2>
            <p className="mt-4 text-foreground/75 max-w-2xl mx-auto">
              Navegue pelos prints reais (com identidades preservadas) de alunas que aplicaram o <span className="font-display italic">Método Nefertiti</span> e tiveram suas vidas transformadas em poucas semanas.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {!ready ? (
            <div
              className="w-full max-w-5xl mx-auto px-2 sm:px-10"
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
              className="w-full max-w-5xl mx-auto px-2 sm:px-10"
            >
              <CarouselContent className="-ml-4">
                {conversations.map((c) => (
                  <CarouselItem
                    key={c.name}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
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
            * Prints baseados em depoimentos reais. Nomes e fotos das alunas preservados por questões de privacidade. Deslize para navegar entre as 9 conversas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
