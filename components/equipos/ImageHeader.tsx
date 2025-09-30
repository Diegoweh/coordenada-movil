"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"

export function ImageHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/equipos/imgHeader.jpg" // Cambia esta ruta por la de tu imagen
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Fallback gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/20 to-background/30" />
      </div>

      {/* Dark overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/img/coordenada.png"
              alt="Logo"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Títulos */}
        <div className="space-y-6">
          {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 text-balance">
            {"EN CADA VIAJE"}
          </h2> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            {"Equipos y Accesorios"}
          </h1>

          <h3 className="text-lg sm:text-xl text-white/80 text-balance max-w-2xl mx-auto leading-relaxed">
            {
              "La mejor tecnología para rastreo y gestión de flotas en tiempo real."
            }
          </h3>
        </div>
      </div>
    </section>
  )
}
