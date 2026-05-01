# Execução aprovada

As 9 fotos já foram geradas, validadas em grade de QA (9 mulheres distintas, idades 23-51, cabelos/cenários únicos, estilo natural de WhatsApp) e copiadas para `src/assets/`:

- `aluna-beatriz.jpg` (26, castanha lisa) · `aluna-camila.jpg` (31, cacheada morena) · `aluna-paula.jpg` (47, curta com fios grisalhos)
- `aluna-juliana.jpg` (25, loira longa) · `aluna-renata.jpg` (36, preta lisa, blazer) · `aluna-amanda.jpg` (29, ruiva com sardas)
- `aluna-larissa.jpg` (41, ondulada com óculos) · `aluna-tatiane.jpg` (51, prata pixie) · `aluna-isabela.jpg` (23, longa escura, parque)

Resta aplicar **3 edições de código** (bloqueadas pelo plan mode):

## 1. `src/hooks/use-spots.ts` — store global com `useSyncExternalStore`

Substituir o hook por um singleton de módulo:
- `state = { spots, lastTick }` em escopo de módulo.
- `bootstrap()` roda uma única vez no primeiro `subscribe`: limpa chaves legadas, lê localStorage uma vez, aplica catch-up por tempo decorrido, registra listener de `nefertiti:buyer-shown`, `setInterval` global (1s) de fallback, e listener `storage` cross-tab que adota o menor valor.
- `useSyncedSpots()` consome via `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` → todos os componentes leem o MESMO snapshot no mesmo render.
- Mantém `INITIAL_SPOTS=25`, `MIN_SPOTS=3`, `POPUP_CADENCE_MS=40_000`.
- Preserva assinatura `{ spots, ready, initial }` para não quebrar consumidores.

## 2. `src/components/WhatsAppProof.tsx` — fotos únicas + sem corte

- Importar 9 assets e mapear 1-para-1 (zero reuso): cada `Conversation.avatar` recebe sua própria imagem.
- **Eliminar corte das mensagens**:
  - Trocar `aspect-[9/17]` → `aspect-[9/19]` no `<Phone>` e no `<PhoneSkeleton>`.
  - Trocar `text-[13.5px]` → `text-[12.5px]` e `space-y-2` → `space-y-1.5` nas bolhas.
  - Adicionar `overflow-y-auto scrollbar-none` ao container de mensagens (substituindo o `overflow-hidden` atual) como rede de segurança.
  - Aumentar `max-w-[min(280px,78vw)]` → `max-w-[min(290px,80vw)]` para folga em mobile.

## 3. `src/components/AnimatedSpots.tsx` — sem mudança necessária

Já consome `useSyncedSpots()` e a assinatura é mantida. Funciona automaticamente com o novo store.

## Resultado esperado

- WhatsApp: 9 conversas, cada uma com aluna visualmente diferente, idades de 23 a 51 anos; nenhuma mensagem cortada em mobile/desktop.
- Vagas: TopCountdown, StickyBottomBar, AnimatedSpots e Offer leem o **mesmo** valor garantido pelo `useSyncExternalStore` — impossível haver discrepância entre seções.

Aprove para sair do plan mode e aplicar as 3 edições.
