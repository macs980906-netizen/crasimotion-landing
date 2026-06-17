"use client";

import Reveal from "./Reveal";
import { trackEvent } from "@/lib/analytics";
import {
  EXPO_APP_URL,
  EXPO_GO_ANDROID_URL,
  EXPO_GO_IOS_URL,
} from "@/lib/config";
import {
  IconAndroid,
  IconApple,
  IconArrowRight,
  IconWarning,
} from "./Icons";

export default function HowToStart() {
  return (
    <section
      id="como-comenzar"
      className="scroll-mt-20 bg-gradient-to-b from-brand-navy to-[#0a2347] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Cómo comenzar
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Comienza en pocos minutos
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Para acceder a CresiMotion sigue estos pasos.
          </p>
        </Reveal>

        {/* Requisito previo: Expo Go (de-emphasized) */}
        <Reveal delay={80}>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Paso 1 · Requisito previo
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  Instala la app gratuita{" "}
                  <span className="font-semibold text-white">Expo Go</span> en tu
                  teléfono.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <StoreChip
                  href={EXPO_GO_ANDROID_URL}
                  onClick={() => trackEvent("click_expo_android")}
                  icon={<IconAndroid className="h-4 w-4" />}
                  label="Android"
                />
                <StoreChip
                  href={EXPO_GO_IOS_URL}
                  onClick={() => trackEvent("click_expo_ios")}
                  icon={<IconApple className="h-4 w-4" />}
                  label="iPhone"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pasos 2 y 3 (resumen breve) */}
        <Reveal delay={120}>
          <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
            <MiniStep
              n={2}
              title="Regresa a esta página"
              text="Vuelve aquí desde tu teléfono."
            />
            <MiniStep
              n={3}
              title="Presiona “Comenzar ahora”"
              text="La app se abrirá en Expo Go."
            />
          </div>
        </Reveal>

        {/* Bloque CTA principal (protagonista) */}
        <Reveal delay={160}>
          <div className="relative mx-auto mt-10 max-w-xl overflow-hidden rounded-3xl border border-brand-green/40 bg-brand-green/[0.08] p-8 text-center shadow-2xl">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-green/30 blur-3xl" />

            <h3 className="relative text-2xl font-bold sm:text-3xl">
              ¿Listo para empezar?
            </h3>
            <p className="relative mt-2 text-slate-300">
              Abre CresiMotion en tu teléfono con un solo toque.
            </p>

            <a
              href={EXPO_APP_URL}
              onClick={() => trackEvent("click_comenzar")}
              className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-green px-10 py-5 text-xl font-bold text-white shadow-xl shadow-brand-green/30 transition-all hover:bg-brand-green-dark hover:shadow-2xl focus-visible:outline-white sm:w-auto"
            >
              Comenzar ahora
              <IconArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Aviso importante (compacto, dentro del bloque CTA) */}
            <div
              role="alert"
              className="relative mt-6 flex items-start gap-3 rounded-xl border border-amber-300/40 bg-amber-400/15 p-4 text-left"
            >
              <IconWarning className="h-5 w-5 shrink-0 text-amber-300" />
              <p className="text-sm font-medium text-amber-50">
                Necesitas Expo Go instalado para acceder correctamente a la
                aplicación.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniStep({
  n,
  title,
  text,
}: {
  n: number;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-sm font-bold text-brand-green">
        {n}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs text-slate-400">{text}</p>
      </div>
    </div>
  );
}

type StoreChipProps = {
  href: string;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

function StoreChip({ href, onClick, icon, label }: StoreChipProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}
