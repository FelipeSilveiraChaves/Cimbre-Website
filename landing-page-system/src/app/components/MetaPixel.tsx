"use client";

import Script from "next/script";

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          var pvId = 'pv_' + (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
          var _fbclidVal = new URLSearchParams(window.location.search).get('fbclid');
          var _fbcVal = _fbclidVal ? ('fb.1.' + Date.now() + '.' + _fbclidVal) : null;
          var _secure = location.protocol === 'https:' ? '; Secure' : '';
          // Pré-seed do _fbp na primeira visita: neste ponto o fbevents.js ainda está
          // carregando (async) e ele reutiliza um _fbp pré-existente em vez de gerar
          // outro. Sem isso, o PageView da CAPI (fetch abaixo) sairia sem _fbp
          // justamente no clique fresco do anúncio. Mesmo formato/TTL do Pixel (90d).
          if (!/(?:^|; )_fbp=/.test(document.cookie)) {
            document.cookie = '_fbp=fb.1.' + Date.now() + '.' + Math.floor(Math.random() * 1e10) + '; Max-Age=7776000; Path=/; SameSite=Lax' + _secure;
          }
          // Mesmo racional para o _fbc quando a URL traz fbclid e o cookie não existe.
          if (_fbcVal && !/(?:^|; )_fbc=/.test(document.cookie)) {
            document.cookie = '_fbc=' + _fbcVal + '; Max-Age=7776000; Path=/; SameSite=Lax' + _secure;
          }
          // ID anônimo persistente do visitante (external_id). Setado ANTES do fetch
          // do PageView para que o cookie same-origin acompanhe a requisição da CAPI.
          var _eid = (function () {
            var m = document.cookie.match(/(?:^|; )cimbre_eid=([^;]*)/);
            if (m) return decodeURIComponent(m[1]);
            var id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : (Math.random().toString(36).slice(2) + Date.now().toString(36));
            document.cookie = 'cimbre_eid=' + encodeURIComponent(id) + '; Max-Age=31536000; Path=/; SameSite=Lax' + _secure;
            try { var raw = localStorage.getItem('cimbre_visitor_tracking'); var obj = raw ? JSON.parse(raw) : {}; obj.externalId = id; localStorage.setItem('cimbre_visitor_tracking', JSON.stringify(obj)); } catch (e) {}
            return id;
          })();
          fbq('init', '${pixelId}', { external_id: _eid });
          fbq('track', 'PageView', {}, { eventID: pvId });
          fetch('/api/meta/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event_name: 'PageView', event_id: pvId, event_source_url: window.location.href, fbc: _fbcVal }),
            keepalive: true
          }).catch(function () {});
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
