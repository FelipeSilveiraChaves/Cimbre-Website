# Contexto

Este é um projeto Next.js (App Router) que serve landing pages de um curso chamado "Cimbre" (R$97), vendido via checkout externo da Hubla. A integração de tracking usa o Meta Pixel (client-side) + Conversions API / CAPI (server-side), enviando os mesmos eventos pelos dois canais para melhorar a atribuição de campanhas.

# Problema

No Meta Events Manager (Diagnóstico do pixel), aparecem 4 avisos de "Os eventos do servidor não são desduplicados", todos com a mesma causa raiz indicada pela Meta: falta o parâmetro `event_id` para casar o evento do Pixel (browser) com o evento da CAPI (servidor).

Eventos com erro:
- AddToCart
- ViewContent ("Ver conteúdo")
- CheckoutButtonClick
- ViewOffer

# O que já existe implementado

- `CheckoutButtonClick`, `ViewOffer` e `PageView` já geram um `event_id`/`eventID` no client e enviam o MESMO id tanto para `fbq('track'/'trackCustom', ..., { eventID })` quanto para o endpoint `/api/meta/events`, que repassa esse `event_id` para a CAPI via `setEventId()`.
- O endpoint `/api/meta/events` (route.ts) só aceita `PageView`, `ViewOffer`, `CheckoutButtonClick` (`ALLOWED_EVENTS`).
- `AddToCart` e `ViewContent` NÃO aparecem em nenhum lugar do código-fonte (`src`) — não são disparados nem pelo Pixel nem pela CAPI nesse repo. Suspeita: vêm da página de checkout da Hubla (fora do nosso controle direto).

# O que peço para você verificar

1. Para `CheckoutButtonClick` e `ViewOffer`: confirmar se a implementação atual de `event_id`/`eventID` está correta e suficiente para a Meta deduplicar (formato do id, timing de geração, se o id é realmente idêntico nos dois envios, etc.). Os avisos no diagnóstico foram detectados em 2026-06-10, um dia depois do deploy do fix — pode ser cache/janela de 3 dias da Meta, ou pode haver um bug residual.
2. Para `AddToCart` e `ViewContent`: ajudar a entender de onde esses eventos podem estar vindo (Hubla?) e se há algo que possamos fazer do nosso lado (ex: parâmetros repassados na URL de checkout) para viabilizar a deduplicação, ou se isso depende 100% da configuração de pixel/CAPI da Hubla.
3. Revisar de forma geral o fluxo de `_fbp`/`_fbc`/`event_id` entre Pixel, endpoint CAPI e cookies, procurando inconsistências que impeçam o "event match" da Meta.

# Arquivos relevantes

- `src/app/components/MetaPixel.tsx` — base do Pixel + evento PageView (browser e CAPI)
- `src/app/utils/metaEvents.ts` — geração de event_id e disparo de ViewOffer/CheckoutButtonClick (browser e CAPI)
- `src/app/api/meta/events/route.ts` — endpoint que envia para a Conversions API via SDK oficial (facebook-nodejs-business-sdk)
- `src/app/components/calltoaction.tsx` — dispara ViewOffer (via IntersectionObserver)
- `src/app/components/purchasebutton.tsx` — dispara CheckoutButtonClick no clique do botão de compra
- `src/app/layout.tsx` — onde MetaPixel/TrackingCapture/GoogleAnalytics são montados
- `src/app/utils/buildCheckoutUrl.ts` — repassa fbp/fbc/UTMs na URL de checkout da Hubla
- `src/app/utils/trackingStorage.ts` — armazena UTMs/fbclid em localStorage
- `src/app/utils/trackingCapture.tsx` — captura parâmetros da URL no carregamento da página

# Variáveis de ambiente envolvidas (não compartilhar valores)

`META_PIXEL_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `META_TEST_EVENT_CODE`, `NEXT_PUBLIC_CHECKOUT_URL`
