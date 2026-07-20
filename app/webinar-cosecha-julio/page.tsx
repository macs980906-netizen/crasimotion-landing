import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlternativeIntro from "@/components/AlternativeIntro";
import WhatYouLearn from "@/components/WhatYouLearn";
import SecurityBacking from "@/components/SecurityBacking";
import Speakers from "@/components/Speakers";
import RiskInfo from "@/components/RiskInfo";
import IsItForYou from "@/components/IsItForYou";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title:
    "Clase en vivo: Inversión en activos productivos agrícolas | Cosecha Capital",
  description:
    "Conoce cómo funciona un modelo de inversión respaldado por activos productivos del campo mexicano, sus riesgos, estructura y criterios de evaluación. Clase en vivo gratuita el 30 de julio.",
  alternates: { canonical: "/webinar-cosecha-julio" },
  openGraph: {
    title: "Hay inversiones que crecen en el campo mexicano",
    description:
      "Regístrate a la clase en vivo gratuita de Cosecha Capital y aprende cómo evaluar un modelo respaldado por activos productivos agrícolas.",
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
        <AlternativeIntro />
        <IsItForYou />
        <WhatYouLearn />
        <Speakers />
        <SecurityBacking />
        <RiskInfo />
        <RegistrationForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
