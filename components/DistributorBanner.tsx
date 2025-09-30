"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils" // si no usas cn, puedes eliminarlo y concatenar strings

interface DistributorLogo {
  /** Ruta en /public o URL remota permitida en next.config.js */
  src: string
  /** Descripción accesible del logo */
  alt: string
  /** Enlace opcional al distribuidor */
  href?: string
}

interface DistributorBannerProps {
  /** Título centrado arriba */
  title: string
  /** Array de exactamente 4 logos (se mostrarán en una fila en desktop) */
  logos: [DistributorLogo, DistributorLogo, DistributorLogo, DistributorLogo]
  /** Texto pequeño opcional bajo el título */
  subtitle?: string
  /** Clases extra para el contenedor */
  className?: string
}

export default function DistributorBanner({ title, subtitle, logos, className }: DistributorBannerProps) {
  return (
    <section className={cn("w-full px-4 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-sm md:text-base text-gray-600">{subtitle}</p>
          ) : null}
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-6 md:gap-10 lg:gap-12">
          {logos.map((logo, idx) => {
            const LogoBox = (
              <div className="group relative mx-auto flex h-12 w-36 sm:h-14 sm:w-44 items-center justify-center rounded-xl bg-white/60 p-3 ring-1 ring-black/5 backdrop-blur transition hover:bg-white">
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(min-width: 768px) 176px, 144px"
                    className="object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            )

            return logo.href ? (
              <Link key={idx} href={logo.href} aria-label={logo.alt} className="block" target="_blank" rel="noopener noreferrer">
                {LogoBox}
              </Link>
            ) : (
              <div key={idx} aria-label={logo.alt}>{LogoBox}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/*
USO RÁPIDO
----------

import DistributorBanner from "@/components/DistributorBanner"

export default function Page() {
  return (
    <DistributorBanner
      title="Distribuidores autorizados"
      subtitle="Trabajamos con marcas líderes para garantizar la mejor compatibilidad."
      logos={[
        { src: "/logos/distribuidor1.png", alt: "Distribuidor 1", href: "https://distribuidor1.com" },
        { src: "/logos/distribuidor2.png", alt: "Distribuidor 2", href: "https://distribuidor2.com" },
        { src: "/logos/distribuidor3.png", alt: "Distribuidor 3", href: "https://distribuidor3.com" },
        { src: "/logos/distribuidor4.png", alt: "Distribuidor 4", href: "https://distribuidor4.com" },
      ]}
    />
  )
}
*/
