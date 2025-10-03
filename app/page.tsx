import Banner from "@/components/Banner";
import BannerHero from "@/components/BannerHero";
import DistributorBanner from "@/components/DistributorBanner";
import Equipos from "@/components/Equipos";
import { FaqSection } from "@/components/Faq";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { VideoHeader } from "@/components/VideoHeader";
import WeSection from "@/components/WeSection";
import { Video } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>

    
    <VideoHeader />

    <WeSection
        title="Proporcionamos servicios 
        avanzados de localización 
        y monitoreo"
      leftParagraph={
        <p>
          NOSOTROS
        </p> 
      }
      rightParagraph={
        <p>
          Tecnología de vanguardia que permite a nuestros clientes rastrear en tiempo real la ubicación de sus activos móviles, acceder a historiales detallados de rutas, recibir alertas personalizadas, detectar robos, decenas de reportes y  mucho más
        </p>
      }
      backgroundSrc="/img/bgWeSection.webp"
      alt="Panel y cámaras de seguridad"
    />

    <Banner />
    <ServicesSection />
    <FeaturesSection />
    <Equipos />
    <ImageCarousel autoPlay autoPlayMs={6000} />
    <BannerHero
      backgroundImage="/img/bannerhero.webp"
      title="Gestiona tu flota con tecnología inteligente"
      description="Monitoreo en tiempo real, rutas optimizadas y reportes accionables en un solo lugar."
      ctaLabel="Contáctanos"
      ctaHref="https://wa.me/526699202328?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios%20"      
      align="left"
      height="lg"
      kicker="Soluciones para flotas"
    />
    <FaqSection />
    <DistributorBanner
      title="Distribuidores autorizados"
      subtitle="Trabajamos con marcas líderes para garantizar la mejor compatibilidad."
      logos={[
        { src: "/img/logo1.png", alt: "logo 1", href: "" },
        { src: "/img/logo2.png", alt: "logo 2", href: "" },
        { src: "/img/logo3.png", alt: "logo 3", href: "" },
        { src: "/img/logo4.png", alt: "logo 4", href: "" },
      ]}
    />


    </>
  );
}
