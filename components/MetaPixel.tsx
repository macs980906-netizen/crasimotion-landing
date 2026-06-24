"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

/** Meta (Facebook) Pixel ID — Cosecha Capital */
export const META_PIXEL_ID = "1239984030914416";

/**
 * Standard event fired on a successful GoHighLevel form submission.
 * Change to "CompleteRegistration" if you prefer that standard event.
 */
const CONVERSION_EVENT = "Lead";

/** Domains GoHighLevel uses to host / postMessage from the embedded form. */
const GHL_ORIGIN = /(\.cosechacapital\.com)|(\.leadconnectorhq\.com)|(\.msgsndr\.com)$/;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export default function MetaPixel() {
  const fired = useRef(false);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // Only trust messages coming from the GoHighLevel form domains.
      let host = "";
      try {
        host = new URL(event.origin).hostname;
      } catch {
        return;
      }
      if (!GHL_ORIGIN.test(host)) return;

      // GoHighLevel posts messages in several shapes:
      //   - array:  ["action-name", ...payload]
      //   - object: { action | type | event: "..." }
      //   - string: "action-name"
      // We normalise to a single string and look for a submit signal.
      const data = event.data as unknown;
      let signal = "";
      try {
        if (Array.isArray(data)) {
          signal = typeof data[0] === "string" ? data[0] : JSON.stringify(data);
        } else if (data && typeof data === "object") {
          const o = data as Record<string, unknown>;
          signal = String(o.action ?? o.type ?? o.event ?? JSON.stringify(o));
        } else if (typeof data === "string") {
          signal = data;
        }
      } catch {
        return;
      }

      const isSubmit = /submit|submitted|form[_-]?submit|formSubmitted/i.test(
        signal
      );
      if (!isSubmit || fired.current) return;

      fired.current = true;
      if (typeof window.fbq === "function") {
        window.fbq("track", CONVERSION_EVENT, {
          content_name: "WEBINAR_COSECHA_JULIO_2026",
        });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
