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
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
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

        {/* Pasos */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Paso 1 */}
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <StepNumber n={1} />
              <h3 className="mt-4 text-xl font-bold">Descarga Expo Go</h3>
              <p className="mt-2 text-sm text-slate-300">
                Instala la aplicación gratuita Expo Go desde la tienda de tu
                dispositivo.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <StoreButton
                  href={EXPO_GO_ANDROID_URL}
                  onClick={() => trackEvent("click_expo_android")}
                  icon={<IconAndroid className="h-6 w-6" />}
                  primary="Descargar para"
                  secondary="Android"
                  hint="Disponible para dispositivos Android."
                />
                <StoreButton
                  href={EXPO_GO_IOS_URL}
                  onClick={() => trackEvent("click_expo_ios")}
                  icon={<IconApple className="h-6 w-6" />}
                  primary="Descargar para"
                  secondary="iPhone"
                  hint="Disponible para dispositivos iPhone."
                />
              </div>
            </article>
          </Reveal>

          {/* Paso 2 */}
          <Reveal delay={100}>
            <article className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <StepNumber n={2} />
              <h3 className="mt-4 text-xl font-bold">Regresa a esta página</h3>
              <p className="mt-2 text-sm text-slate-300">
                Una vez instalado Expo Go, vuelve aquí desde tu teléfono para
                continuar con el último paso.
              </p>
            </article>
          </Reveal>

          {/* Paso 3 */}
          <Reveal delay={200}>
            <article className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
              <StepNumber n={3} />
              <h3 className="mt-4 text-xl font-bold">
                Presiona “Comenzar ahora”
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Toca el botón principal y la aplicación se abrirá
                automáticamente dentro de Expo Go.
              </p>
            </article>
          </Reveal>
        </div>

        {/* Aviso importante */}
        <Reveal delay={120}>
          <div
            role="alert"
            className="mt-10 flex items-start gap-4 rounded-2xl border border-amber-300/40 bg-amber-400/15 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
              <IconWarning className="h-6 w-6" />
            </span>
            <p className="text-base font-medium text-amber-50">
              <span className="font-bold">Aviso importante:</span> Necesitas
              Expo Go instalado para acceder correctamente a la aplicación.
            </p>
          </div>
        </Reveal>

        {/* CTA principal */}
        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              href={EXPO_APP_URL}
              onClick={() => trackEvent("click_comenzar")}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-green px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-green/30 transition-all hover:bg-brand-green-dark hover:shadow-2xl focus-visible:outline-white"
            >
              Comenzar ahora
              <IconArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Se abrirá la aplicación dentro de Expo Go.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white">
      {n}
    </span>
  );
}

type StoreButtonProps = {
  href: string;
  onClick: () => void;
  icon: React.ReactNode;
  primary: string;
  secondary: string;
  hint: string;
};

function StoreButton({
  href,
  onClick,
  icon,
  primary,
  secondary,
  hint,
}: StoreButtonProps) {
  return (
    <div>
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-brand-navy transition-transform hover:scale-[1.02]"
      >
        <span className="text-brand-navy">{icon}</span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium uppercase tracking-wide text-slate-500">
            {primary}
          </span>
          <span className="block text-base font-bold">{secondary}</span>
        </span>
      </a>
      <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
    </div>
  );
}
