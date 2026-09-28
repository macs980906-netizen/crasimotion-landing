"use client";

import { useEffect } from "react";
import Script from "next/script";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function RegistrationForm() {
  // Redirige a /gracias cuando el formulario embebido de GHL se envía con
  // éxito. GHL publica un postMessage de envío desde el iframe del formulario;
  // escuchamos solo mensajes de su dominio y evitamos los de ajuste de altura.
  //
  // Requisito en GHL: el formulario debe tener "On Submit" en "Show a message"
  // (sin redirect propio), de lo contrario la redirección de GHL tiene
  // prioridad sobre esta.
  useEffect(() => {
    let redirected = false;

    const onMessage = (e: MessageEvent) => {
      if (!e.origin.endsWith("cosechacapital.com")) return;

      let serialized = "";
      try {
        serialized =
          typeof e.data === "string" ? e.data : JSON.stringify(e.data ?? "");
      } catch {
        return;
      }

      const isSubmit = /submit/i.test(serialized);
      const isResize = /height/i.test(serialized);

      if (isSubmit && !isResize && !redirected) {
        redirected = true;
        window.location.assign("/gracias");
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section
      id="registro"
      className="relative overflow-hidden bg-forest-950 py-20 sm:py-28"
    >
      {/* Ambient premium glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-citrus-500/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Aparta tu lugar</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-cream-50 sm:text-4xl">
              Aparta tu lugar con un asesor
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-cream-100/70">
              Déjanos tus datos y un asesor te contactará para confirmar tu
              acceso a la sesión en vivo por Zoom. El cupo es limitado.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream-100/70">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-citrus-500" />
                En vivo por Zoom
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-citrus-500" />
                Cupo limitado
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-citrus-500" />
                Acceso con registro
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-citrus-500" />
                Un asesor te contacta
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12">
          <div className="mx-auto w-full max-w-[600px]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-2xl bg-white">
                <iframe
                  src="https://link.cosechacapital.com/widget/form/HIgnlE8CLoEwmF8J1SOx"
                  style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  id="inline-HIgnlE8CLoEwmF8J1SOx"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WEBINAR_COSECHA_JULIO_2026"
                  data-height="505"
                  data-layout-iframe-id="inline-HIgnlE8CLoEwmF8J1SOx"
                  data-form-id="HIgnlE8CLoEwmF8J1SOx"
                  title="WEBINAR_COSECHA_JULIO_2026"
                  className="block min-h-[560px] w-full"
                />
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-[540px] space-y-3 text-center">
              <p className="text-[13px] leading-relaxed text-cream-100/55">
                Al registrarte, un asesor te contactará con la información de
                acceso y el seguimiento de la sesión. Revisa tu bandeja de spam
                en caso de que no te llegue la información.
              </p>
              <p className="text-[13px] leading-relaxed text-cream-100/55">
                Registrarte no representa un compromiso de inversión. Toda
                inversión implica riesgos.
              </p>
              <p className="text-[13px] leading-relaxed text-cream-100/55">
                <a
                  href="https://www.cosechacapital.com/aviso-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-cream-100/30 underline-offset-4 transition-colors hover:text-citrus-400"
                >
                  Aviso de privacidad
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Script
        src="https://link.cosechacapital.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
