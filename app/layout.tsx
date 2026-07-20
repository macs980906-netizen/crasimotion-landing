import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cosechacapital.com"),
  title:
    "Clase en vivo: Inversión en activos productivos agrícolas | Cosecha Capital",
  description:
    "Conoce cómo funciona un modelo de inversión respaldado por activos productivos del campo mexicano, sus riesgos, estructura y criterios de evaluación. Clase en vivo gratuita el 30 de julio.",
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-950">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
