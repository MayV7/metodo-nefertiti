import { Check, CheckCheck, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
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
    name: "Fernanda · aluna",
    avatar: marina,
    status: "online",
    messages: [
      {
        from: "aluna",
        text: "Marina, EU NÃO ACREDITO 😱 ele acabou de me chamar… depois de 4 meses sumido!!",
        time: "14:08",
      },
      {
        from: "marina",
        text: "Eu te disse, querida 👑 quando você para de correr atrás, eles voltam correndo. O que ele disse?",
        time: "14:09",
        read: true,
      },
      {
        from: "aluna",
        text: "Que sentiu MUITA falta de mim e que se arrepende de ter terminado 🥹 já chamou pra jantar sábado",
        time: "14:11",
      },
      {
        from: "marina",
        text: "Vai sem ansiedade. Lembre-se: você é a rainha agora. Ele que precisa provar 💎",
        time: "14:12",
        read: true,
      },
    ],
  },
  {
    name: "Carolina · aluna",
    avatar: marina,
    status: "online",
    messages: [
      {
        from: "aluna",
        text: "Marina, dia 14 do método e já tenho 2 homens incríveis me chamando 😳",
        time: "09:42",
      },
      {
        from: "aluna",
        text: "Um deles é médico, o outro é arquiteto. Nunca aconteceu isso comigo!!",
        time: "09:42",
      },
      {
        from: "marina",
        text: "É isso, minha rainha 👑 magnetismo verdadeiro atrai homens à altura. Agora você ESCOLHE, não aceita o que sobra ✨",
        time: "09:45",
        read: true,
      },
      {
        from: "aluna",
        text: "Marina, obrigada por mudar minha vida. De verdade. ❤️",
        time: "09:46",
      },
    ],
  },
  {
    name: "Patrícia · aluna",
    avatar: marina,
    status: "online",
    messages: [
      {
        from: "aluna",
        text: "Marina, lembra que eu te disse que tinha 47 anos e achava que ninguém ia me querer mais?",
        time: "21:03",
      },
      {
        from: "aluna",
        text: "ELE PEDIU MINHA MÃO HOJE 💍✨ estamos noivos!!!",
        time: "21:03",
      },
      {
        from: "marina",
        text: "Patrícia, eu chorei lendo isso 🥹 você merece TUDO. Idade nunca foi o problema — era a forma como você se via.",
        time: "21:08",
        read: true,
      },
      {
        from: "aluna",
        text: "Hoje me vejo como rainha. E ele me trata como uma. Obrigada Marina 👑",
        time: "21:09",
      },
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

function Phone({ convo }: { convo: Conversation }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[2.2rem] bg-[#0b141a] p-2 shadow-elegant border border-rose-gold/20">
      {/* Phone notch */}
      <div className="mx-auto h-5 w-24 rounded-b-2xl bg-[#0b141a] absolute top-0 left-1/2 -translate-x-1/2 z-10" />
      <div className="rounded-[1.8rem] overflow-hidden bg-[#e5ddd5]">
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#075e54] px-3 py-3 text-pearl">
          <img
            src={convo.avatar}
            alt={convo.name}
            className="h-9 w-9 rounded-full object-cover border border-pearl/30"
          />
          <div className="leading-tight flex-1 min-w-0">
            <p className="font-heading font-semibold text-[13.5px] truncate">
              {convo.name}
            </p>
            <p className="text-[11px] opacity-80">{convo.status}</p>
          </div>
          <MessageCircle className="h-4 w-4 opacity-80" />
        </div>

        {/* Chat body — subtle WhatsApp pattern */}
        <div
          className="px-3 py-4 space-y-2 min-h-[320px]"
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

export function WhatsAppProof() {
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
              Estes são apenas alguns prints reais (com identidades preservadas) de alunas que aplicaram o <span className="font-display italic">Método Nefertiti</span> e tiveram suas vidas transformadas em poucas semanas.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {conversations.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <Phone convo={c} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-12 text-center text-xs text-foreground/55 italic max-w-2xl mx-auto">
            * Prints baseados em depoimentos reais. Nomes e fotos das alunas preservados por questões de privacidade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
