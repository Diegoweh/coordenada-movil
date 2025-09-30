"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"

export function VideoHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/media/header.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/90" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className=" flex items-center justify-center">
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

        {/* Three Titles */}
        <div className="space-y-6">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 text-balance">
            {"EN CADA VIAJE"}
          </h2>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            {"La excelencia es nuestro destino:"}
          </h1>

          <h3 className="text-lg sm:text-xl text-white/80 text-balance max-w-2xl mx-auto leading-relaxed">
            {
              "Su tranquilidad, nuestro compromiso. Servicios de monitoreo y seguridad vehicular 24/7."
            }
          </h3>
        </div>

        
      </div>
    </section>
  )
}
