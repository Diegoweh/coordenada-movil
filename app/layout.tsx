import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coordenada Móvil | Monitoreo y Rastreo GPS para Vehículos",
  description:
    "Coordenada Móvil ofrece soluciones de monitoreo y rastreo GPS para vehículos particulares y flotas. Controla, localiza y protege tu automóvil con la mejor tecnología en seguridad vehicular.",
  keywords: [
    "Coordenada Móvil",
    "monitoreo de vehículos",
    "rastreo GPS",
    "equipo de rastreo",
    "seguimiento de flotas",
    "seguridad vehicular",
    "GPS para autos",
    "rastreo satelital",
    "monitoreo de transporte",
    "control de flotas"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
