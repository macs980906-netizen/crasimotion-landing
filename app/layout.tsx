import type { Metadata } from "next";
import { Inter, Montserrat, Fraunces } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display font — heavy geometric sans to match Cosecha Capital's social identity.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

// Kept for occasional editorial accents.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cosechacapital.com"),
  title: "Invierte en el campo mexicano · Sesión en vivo | Cosecha Capital",
  description:
    "Conoce cómo funciona una operación agrícola real, estructurada y orientada a exportación, y evalúa si encaja con tu estrategia patrimonial. Sesión en vivo por Zoom, cupo limitado.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-950">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
