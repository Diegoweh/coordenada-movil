import Image from "next/image";
import React from "react";

type Props = {
  /** Título del lado izquierdo */
  title: string;
  /** Párrafo debajo del título (lado izquierdo) */
  leftParagraph: React.ReactNode;
  /** Párrafo del lado derecho */
  rightParagraph: React.ReactNode;
  /** Ruta de la imagen de fondo (colócala en /public) */
  backgroundSrc: string;
  /** Texto alternativo para la imagen */
  alt?: string;
  /** Clases Tailwind para personalizar el degradado (from-*) */
  gradientFrom?: string; // default: from-white/90
  /** Clases Tailwind para personalizar el degradado (to-*) */
  gradientTo?: string; // default: to-gray-100/80
};

export default function WeSection({
  title,
  leftParagraph,
  rightParagraph,
  backgroundSrc,
  alt = "",
  gradientFrom = "from-white/90",
  gradientTo = "to-gray-100/80",
}: Props) {
  return (
    <section className="relative isolate">
      {/* Fondo + Degradado */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`} />
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className=" text-gray-800/90 leading-relaxed">
              {leftParagraph}
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 drop-shadow-sm">
              {title}
            </h2>
          </div>

          <div className="text-gray-800/90 leading-relaxed">
            {rightParagraph}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
USO DE EJEMPLO:

<InfoSplitSection
  title="Protege tu espacio con tecnología confiable"
  leftParagraph={
    <p>
      Ofrecemos soluciones integrales de seguridad y monitoreo para hogares y negocios.
      Instalación profesional y soporte continuo.
    </p>
  }
  rightParagraph={
    <p>
      Nuestros equipos están diseñados para operar 24/7 con alta eficiencia. 
      Integramos cámaras, sensores y software para darte visibilidad total.
    </p>
  }
  backgroundSrc="/img/hero-seguridad.jpg"
  alt="Panel y cámaras de seguridad"
/>
*/
