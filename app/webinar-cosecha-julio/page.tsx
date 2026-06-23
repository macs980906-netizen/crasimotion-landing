import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouLearn from "@/components/WhatYouLearn";
import SecurityBacking from "@/components/SecurityBacking";
import Speaker from "@/components/Speaker";
import VideoPodcast from "@/components/VideoPodcast";
import HostTeam from "@/components/HostTeam";
import IsItForYou from "@/components/IsItForYou";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Webinar Privado · Diversifica tu patrimonio con activos agrícolas",
  description:
    "Webinar privado de Cosecha Capital. Conoce el modelo de inversión agrícola respaldado por tierra, producción y fideicomisos, orientado a exportación. Miércoles 01 de julio · Modalidad online · Cupo limitado.",
  alternates: { canonical: "/webinar-cosecha-julio" },
  openGraph: {
    title: "Webinar Privado · Cosecha Capital",
    description:
      "Cómo diversificar tu patrimonio mediante activos agrícolas respaldados por producción real.",
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
        <IsItForYou />
        <WhatYouLearn />
        <Speaker />
        <VideoPodcast />
        <SecurityBacking />
        <HostTeam />
        <RegistrationForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
