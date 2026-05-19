import logo from "@/assets/nefertiti/logo-nefertiti-CWAL7eku.webp";
import mockup from "@/assets/nefertiti/mockup-nefertiti-BFpfl-To.webp";
import marina from "@/assets/nefertiti/marina-DInCGjRd.jpg";
import sophia from "@/assets/nefertiti/sophia-BSi4nOEE.jpg";

import tFernanda from "@/assets/nefertiti/t-fernanda-B-P8SjCh.jpg";
import tClaudia from "@/assets/nefertiti/t-claudia-2t3zzLcN.jpg";
import tAna from "@/assets/nefertiti/t-ana-DqwNSNvh.jpg";
import tRegina from "@/assets/nefertiti/t-regina-kjWMRw7B.jpg";

import pMariac from "@/assets/nefertiti/p-mariac-CS15QAYv.jpg";
import pMarianak from "@/assets/nefertiti/p-marianak-BEdroc7f.jpg";
import pPatricia from "@/assets/nefertiti/p-patricia-MUzPdwVo.jpg";
import pSuzana from "@/assets/nefertiti/p-suzana-c5N9EzJ6.jpg";
import pVanessa from "@/assets/nefertiti/p-vanessa-C2dZ-_i1.jpg";

import aBeatriz from "@/assets/nefertiti/aluna-beatriz-DVy6k3F7.webp";
import aCamila from "@/assets/nefertiti/aluna-camila-C4U26ZEL.webp";
import aPaula from "@/assets/nefertiti/aluna-paula-CJwdX7r2.webp";
import aJuliana from "@/assets/nefertiti/aluna-juliana-DxpnAdk-.webp";
import aRenata from "@/assets/nefertiti/aluna-renata-BJaHXGpm.webp";
import aAmanda from "@/assets/nefertiti/aluna-amanda-BwjX7IIW.webp";
import aLarissa from "@/assets/nefertiti/aluna-larissa-Lcl2mkrb.webp";
import aTatiane from "@/assets/nefertiti/aluna-tatiane-qzu5aPMB.webp";
import aIsabela from "@/assets/nefertiti/aluna-isabela-V3ZZJ5fi.webp";

export const IMG = {
  logo, mockup, marina, sophia,
  tFernanda, tClaudia, tAna, tRegina,
  pMariac, pMarianak, pPatricia, pSuzana, pVanessa,
  aBeatriz, aCamila, aPaula, aJuliana, aRenata, aAmanda, aLarissa, aTatiane, aIsabela,
};

export const CHECKOUT_URL = "https://pay.kiwify.com.br/iX5ySX9";

export const TESTIMONIALS = [
  { img: tFernanda, name: "Fernanda M.", role: "36 anos • Publicitária",
    quote: "Em apenas 10 dias aplicando o Método Nefertiti, meu ex (que havia me bloqueado há 3 meses) voltou a me procurar. Mas o mais importante: hoje estou com alguém que me valoriza de verdade.",
    badge: "Desenvolveu poder de escolha total." },
  { img: tClaudia, name: "Claudia R.", role: "49 anos • Dentista",
    quote: "Aos 49 anos e após 3 filhos, eu pensava que jamais seria desejada. Hoje estou noiva de um empresário de 41 anos que me trata como a mulher mais especial do mundo.",
    badge: "Idade não importa. O amor verdadeiro floresce em qualquer fase." },
  { img: tAna, name: "Ana Carolina", role: "28 anos • Arquiteta",
    quote: "Em 2 semanas tinha 3 homens de alto valor interessados em mim. Pela primeira vez na vida EU é que estava escolhendo. Não precisava mais implorar por atenção.",
    badge: "Ela se tornou a caçadora, não a caça." },
  { img: tRegina, name: "Regina T.", role: "56 anos • Professora",
    quote: "Achava que minha idade era um problema. MENTIRA! Hoje namoro um homem 12 anos mais novo. Nunca fui tão feliz — viajamos, namoramos… só agradeço!",
    badge: "Maturidade como superpoder." },
];

export const PHOTO_PROOFS = [
  { img: pMariac, name: "Maria Clara", age: "28 anos", quote: "Em 11 dias meu ex voltou pedindo outra chance. Mas agora EU é que não sei se quero ele de volta…" },
  { img: pMarianak, name: "Mariana K.", age: "38 anos", quote: "Ele bloqueou todo mundo menos eu. Agora me liga às 2 da manhã dizendo que errou…" },
  { img: pPatricia, name: "Patrícia L.", age: "50 anos", quote: "Aos 50, em 3 semanas tinha 2 homens me cortejando. Estou nas nuvens!" },
  { img: pSuzana, name: "Suzana S.", age: "52 anos", quote: "Depois de 5 anos num relacionamento tóxico, em menos de um mês conheci um homem incrível." },
  { img: pVanessa, name: "Vanessa L.", age: "41 anos", quote: "Hoje estou solteira, feliz e com uma fila de pretendentes de alto valor. A liberdade é indescritível." },
];

type Msg = { from: "her" | "marina"; text: string; time: string };
export const CHATS: { img: string; name: string; messages: Msg[] }[] = [
  { img: aBeatriz, name: "Beatriz", messages: [
    { from: "her", text: "marina vc nao vai acreditar", time: "14:08" },
    { from: "her", text: "o ricardo me chamou agora… 4 meses sumido 😶", time: "14:08" },
    { from: "marina", text: "eu te falei rs. e aí, o que ele disse?", time: "14:09" },
    { from: "her", text: "que sentiu mt minha falta, ja chamou pra jantar sabado", time: "14:11" },
    { from: "marina", text: "vai sem ansiedade. e responde devagar 😉", time: "14:12" },
  ]},
  { img: aCamila, name: "Camila", messages: [
    { from: "her", text: "to no dia 14 e ja tem 2 caras me chamando kkkk", time: "09:42" },
    { from: "her", text: "um é medico, o outro arquiteto", time: "09:42" },
    { from: "her", text: "isso nunca tinha acontecido cmg", time: "09:43" },
    { from: "marina", text: "viu? agora vc escolhe, nao corre atras ✨", time: "09:45" },
    { from: "her", text: "obrigada de coracao mesmo ❤️", time: "09:46" },
  ]},
  { img: aPaula, name: "Paula", messages: [
    { from: "her", text: "lembra q eu te disse q achava q ngm ia me querer com 47?", time: "21:03" },
    { from: "her", text: "ele me pediu em casamento hoje 💍", time: "21:03" },
    { from: "her", text: "ainda to tremendo", time: "21:04" },
    { from: "marina", text: "paula que coisa linda 🥹 idade nunca foi o problema", time: "21:08" },
    { from: "her", text: "obrigada por nao deixar eu desistir", time: "21:09" },
  ]},
  { img: aJuliana, name: "Juliana", messages: [
    { from: "her", text: "marina ele apareceu aqui no trampo agora", time: "11:20" },
    { from: "her", text: "com flores 🌹 eu fiquei sem reacao", time: "11:21" },
    { from: "her", text: "disse q tava tomando coragem ha semanas", time: "11:21" },
    { from: "marina", text: "respira. escuta antes de responder, ok?", time: "11:23" },
    { from: "her", text: "to tremendo mas e diferente dessa vez", time: "11:24" },
  ]},
  { img: aRenata, name: "Renata", messages: [
    { from: "her", text: "olha esse convite q recebi 😅", time: "18:02" },
    { from: "her", text: "viagem com um cara incrivel, ele tem barco e tudo", time: "18:02" },
    { from: "marina", text: "kkkk olha vc atraindo gente do seu nivel. e ai, vai?", time: "18:04" },
    { from: "her", text: "vou! mas calma, sem pressa nenhuma", time: "18:05" },
    { from: "marina", text: "é assim mesmo 💎", time: "18:06" },
  ]},
  { img: aAmanda, name: "Amanda", messages: [
    { from: "her", text: "marina o ex me desbloqueou agora 😱", time: "07:55" },
    { from: "her", text: "tinha me bloqueado em tudo, lembra?", time: "07:55" },
    { from: "her", text: "mandou um audio pedindo desculpa", time: "07:56" },
    { from: "marina", text: "nao responde correndo. deixa ele esperar um pouco", time: "08:01" },
    { from: "her", text: "to seguindo direitinho, prometo kkk", time: "08:02" },
  ]},
  { img: aLarissa, name: "Larissa", messages: [
    { from: "her", text: "primeira vez na vida q alguem me trata como prioridade", time: "22:41" },
    { from: "her", text: "ele chegou com jantar pronto hj 🥹 sem motivo", time: "22:42" },
    { from: "marina", text: "esse é o tipo de homem que vc merece, sempre mereceu", time: "22:45" },
    { from: "her", text: "nunca mais aceito menos que isso", time: "22:46" },
  ]},
  { img: aTatiane, name: "Tatiane", messages: [
    { from: "her", text: "depois de 12 anos casada e o divorcio… achei q tinha acabado pra mim", time: "16:10" },
    { from: "her", text: "hj conheci alguem q me faz rir de novo", time: "16:11" },
    { from: "her", text: "to me sentindo gente outra vez", time: "16:11" },
    { from: "marina", text: "vc floresceu de dentro pra fora 🌹 aproveita cada segundo", time: "16:14" },
    { from: "her", text: "obrigada marina, de coracao ❤️", time: "16:15" },
  ]},
  { img: aIsabela, name: "Isabela", messages: [
    { from: "her", text: "ele me ligou chorando ontem a noite 😶", time: "23:18" },
    { from: "her", text: "disse q nao consegue dormir pensando em mim", time: "23:18" },
    { from: "marina", text: "e ai? vc ainda quer ele de volta?", time: "23:20" },
    { from: "her", text: "sinceramente nao sei, to escolhendo pela primeira vez", time: "23:21" },
    { from: "marina", text: "essa e a maior vitoria ✨", time: "23:23" },
  ]},
];

export const FAQ = [
  { q: "💰 R$ 14,70 parcelado parece pouco. Tem alguma pegadinha?",
    a: "Nenhuma. É um lote promocional limitado a 13 vagas para validar o método com mais mulheres. Após o lote, o investimento volta para R$ 997. Você recebe 100% do conteúdo, bônus e suporte." },
  { q: "⏰ Não tenho tempo. Quanto preciso me dedicar por dia?",
    a: "Apenas 15 a 20 minutos por dia. É o tempo de uma fila de banco ou de uma viagem de Uber. Você só precisa de consistência durante 21 dias." },
  { q: "👵 Tenho mais de 40 (ou 50). Ainda funciona pra mim?",
    a: "Sim — e funciona ainda melhor. A maturidade é seu superpoder. Temos alunas de 50, 56 e até 60 anos com transformações incríveis. A psicologia é universal." },
  { q: "🤔 Já tentei terapia, livros, conselhos de amigas e nada funcionou. Por que isso seria diferente?",
    a: "Porque o Método Nefertiti não trabalha apenas a sua dor — ele instala gatilhos comportamentais e psicológicos que mudam a forma como o mundo (e os homens) reagem a você. É ação, não conversa." },
  { q: "😶 Tenho medo de ser julgada por comprar algo assim. É discreto?",
    a: "Totalmente. A cobrança aparece como Kiwify e o conteúdo fica numa área de membros privada e protegida por senha. Ninguém precisa saber." },
  { q: "💔 Meu caso é diferente. Foi traição / casamento de 20 anos / ele já tem outra. Vai funcionar?",
    a: "Sim. O método foi desenhado justamente para casos extremos. Cada aluna achava que era 'caso perdido' — e cada uma teve resultado. O foco não é o seu passado: é o seu futuro magnético." },
  { q: "🛡️ E se eu comprar e não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos cada centavo. Sem perguntas. Sem burocracia. O risco é todo meu." },
  { q: "🚀 Como recebo o acesso?",
    a: "O acesso é liberado AUTOMATICAMENTE no seu e-mail logo após a confirmação do pagamento. Você já pode começar hoje, em qualquer dispositivo." },
];
