"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // opcional: si no usas cn, puedes quitarlo y concatenar strings

interface BannerHeroProps {
  /** Ruta de la imagen de fondo (public/) o URL remota habilitada en next.config */
  backgroundImage: string
  /** Texto principal grande */
  title: string
  /** Texto secundario (opcional) */
  description?: string
  /** Texto superior (kicker) pequeño opcional */
  kicker?: string
  /** Texto del botón */
  ctaLabel?: string
  /** Enlace del botón. Si no se provee, se usará onCtaClick */
  ctaHref?: string
  /** Handler opcional si prefieres acción programática */
  onCtaClick?: () => void
  /** Alineación del contenido */
  align?: "left" | "center" | "right"
  /** Altura del banner */
  height?: "sm" | "md" | "lg" | number // px si es número
  /** Opacidad del overlay para mejorar contraste */
  overlayOpacity?: number // 0–100
  /** Clases extra */
  className?: string
}

export default function BannerHero({
  backgroundImage,
  title,
  description,
  kicker,
  ctaLabel = "Contáctanos",
  ctaHref,
  onCtaClick,
  align = "left",
  height = "md",
  overlayOpacity = 55,
  className,
}: BannerHeroProps) {
  const heightClass =
    typeof height === "number"
      ? `min-h-[${height}px]`
      : height === "sm"
      ? "min-h-[320px]"
      : height === "lg"
      ? "min-h-[640px]"
      : "min-h-[480px]" // md

  const alignItems = align === "center" ? "items-center" : align === "right" ? "items-end" : "items-start"
  const textAlign = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"

  return (
    <section className={cn("relative w-full overflow-hidden ", heightClass, className)}>
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="700vw"
        />
        {/* Overlay para contraste */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: Math.max(0, Math.min(100, overlayOpacity)) / 100 }}
        />
        {/* Degradado inferior sutil */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <div className={cn("mx-auto max-w-7xl px-4 py-14 md:py-20", textAlign)}>
          <div className={cn("flex flex-col gap-6 md:gap-7", alignItems)}>
            {kicker && (
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
                {kicker}
              </span>
            )}

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-sm max-w-3xl">
              {title}
            </h1>

            {description && (
              <p className="text-white/90 text-base md:text-lg max-w-2xl">
                {description}
              </p>
            )}

            {/* CTA */}
            <div className="pt-2">
              {ctaHref ? (
                <Button
                  asChild
                  className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  <Link href={ctaHref} aria-label={ctaLabel}>
                    {ctaLabel}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={onCtaClick}
                  className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                  aria-label={ctaLabel}
                >
                  {ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/*
USO RÁPIDO
----------

import BannerHero from "@/components/BannerHero"

export default function Home() {
  return (
    <BannerHero
      backgroundImage="/img/hero-fleet.jpg"
      title="Gestiona tu flota con tecnología inteligente"
      description="Monitoreo en tiempo real, rutas optimizadas y reportes accionables en un solo lugar."
      ctaLabel="Contáctanos"
      ctaHref="/contacto"
      align="left"
      height="lg"
      kicker="Soluciones para flotas"
    />
  )
}
*/
