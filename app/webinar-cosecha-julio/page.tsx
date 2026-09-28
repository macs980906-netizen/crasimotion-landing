import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModelThesis from "@/components/ModelThesis";
import SessionAgenda from "@/components/SessionAgenda";
import Team from "@/components/Team";
import VideoPodcast from "@/components/VideoPodcast";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Invierte en el campo mexicano · Sesión en vivo | Cosecha Capital",
  description:
    "Conoce cómo funciona una operación agrícola real, estructurada y orientada a exportación, y evalúa si encaja con tu estrategia patrimonial. Sesión en vivo por Zoom, cupo limitado.",
  alternates: { canonical: "/webinar-cosecha-julio" },
  openGraph: {
    title: "Invierte en el campo mexicano",
    description:
      "Regístrate a la sesión en vivo de Cosecha Capital y conoce cómo evaluar una operación agrícola respaldada por producción real y orientada a exportación.",
    url: "/webinar-cosecha-julio",
    type: "website",
    images: [{ url: "/assets/hero.webp", width: 1400, height: 2488 }],
  },
};

export default function WebinarCosechaJulioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ModelThesis />
        <SessionAgenda />
        <Team />
        <VideoPodcast />
        <RegistrationForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
