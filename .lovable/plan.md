## Plano: Corrigir social proof + sincronizar contador em 13 vagas

### 1. `src/components/SocialProofPopup.tsx` — popup visível e texto correto
- **Garantir aparição a cada 40s**: trocar `setInterval` de `38800ms` para `40000ms` e simplificar a lógica de visibilidade. Hoje a "plaquinha" some entre ciclos (`setVisible(false)` por 1.2s antes do próximo); vou manter sempre visível alternando apenas o conteúdo via `key={idx}` no `motion.div` (AnimatePresence faz o cross-fade) — assim a plaquinha permanece na tela e o conteúdo troca a cada 40s.
- **Texto "comprou agora" → "comprou há X minutos"**: usar o campo `b.time` que já existe (ex: "há 11 minutos") como o verbo principal. Linha passa a ser:
  ```
  comprou {b.time} • {b.city}
  ```
  Removo a linha separada de tempo embaixo.
- **Primeiro popup**: aparece após 5s (em vez de 40s) para o usuário ver imediatamente; emite `nefertiti:buyer-shown` em sincronia com o store de vagas.

### 2. `src/hooks/use-spots.ts` — base de 13 vagas
- `INITIAL_SPOTS = 13` (era 25).
- `MIN_SPOTS = 3` mantido.
- **Bump de versão da chave** para `nefertiti_spots_remaining_v3` / `nefertiti_spots_last_tick_v3` e adicionar `v2` à lista `LEGACY_KEYS`, garantindo que usuários antigos (com 25/24/etc no localStorage) sejam ressincronizados em 13 automaticamente no próximo load. Sem isso, o site continua mostrando o valor antigo persistido.
- Cadência permanece 40s, dirigida pelo evento `nefertiti:buyer-shown`. Como o `useSyncExternalStore` já é a fonte única, TopCountdown, StickyBottomBar, AnimatedSpots e Offer leem o mesmo número no mesmo render — e cada popup do social proof decrementa exatamente 1 vaga, mantendo a sincronia pedida.

### 3. Verificação
- TopCountdown, StickyBottomBar e qualquer `<AnimatedSpots />` no Offer começam exibindo **13** e decrementam para 12, 11, 10… a cada popup (40s), até o piso de 3.
- Plaquinha do social proof permanece visível, trocando o nome/cidade/tempo a cada 40s, com o texto "comprou há X minutos".

### Arquivos a editar
- `src/components/SocialProofPopup.tsx`
- `src/hooks/use-spots.ts`

### Fora de escopo
- WhatsApp prints, headline do hero, fotos das alunas — não tocados.

Aprove para aplicar.