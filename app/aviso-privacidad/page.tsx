import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/config";
import { IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | CresiMotion",
  description:
    "Conoce cómo CresiMotion protege y trata tus datos personales con responsabilidad y transparencia.",
  alternates: { canonical: "/aviso-privacidad" },
};

export default function AvisoPrivacidad() {
  return (
    <>
      <Header />
      <main id="contenido" className="pt-28 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Aviso de Privacidad
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Última actualización: junio de 2026.
          </p>

          <div className="prose-cresi mt-10 space-y-8 text-base leading-relaxed text-slate-600">
            <Section title="1. Responsable del tratamiento">
              CresiMotion es responsable del tratamiento de los datos
              personales que nos proporcionas al utilizar nuestra plataforma de
              transformación emocional. Tratamos tu información de forma
              confidencial y conforme a la normativa de protección de datos
              aplicable.
            </Section>

            <Section title="2. Datos que recopilamos">
              Podemos recopilar información que compartes voluntariamente al
              usar la aplicación, como respuestas a autoevaluaciones,
              preferencias y datos de contacto. También recopilamos información
              técnica básica de uso para mejorar la experiencia.
            </Section>

            <Section title="3. Finalidad del tratamiento">
              Utilizamos tus datos para brindarte acompañamiento emocional
              personalizado, mostrar tu progreso, mejorar continuamente nuestros
              contenidos y herramientas, y mantener la seguridad de la
              plataforma.
            </Section>

            <Section title="4. Confidencialidad y seguridad">
              Aplicamos medidas técnicas y organizativas razonables para
              proteger tu información frente a accesos no autorizados, pérdida o
              alteración. Tu proceso emocional es privado y lo tratamos con el
              máximo respeto.
            </Section>

            <Section title="5. Uso de terceros">
              Para facilitar el acceso a la aplicación utilizamos servicios de
              terceros, los cuales tratan la información conforme a sus propias
              políticas. No vendemos tus datos personales.
            </Section>

            <Section title="6. Tus derechos">
              Puedes solicitar el acceso, rectificación, cancelación u oposición
              al tratamiento de tus datos personales, así como revocar tu
              consentimiento en cualquier momento, escribiéndonos a través de
              nuestro correo de contacto.
            </Section>

            <Section title="7. Contacto">
              Si tienes dudas sobre este Aviso de Privacidad o sobre el manejo
              de tus datos, escríbenos a{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-brand-green hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-brand-navy">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
