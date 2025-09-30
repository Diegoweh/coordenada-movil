"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface CarouselItem {
  id: number
  image: string
  title: string
  description: string
  /** Optional thumbnail override; defaults to image */
  thumb?: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/img/equipo1.jpg",
    title: "Equipo GPS Portátil",
    description:
      "Diferentes modelos y tamaños. Adecuamos uno a su medida: Solares, Al puerto OBD, Portátiles con imán, Minis y Bluetooth.",
  },
  {
    id: 2,
    image: "/img/equipo2.webp",
    title: "Seguimiento GPS Avanzado",
    description:
      "Tecnología GPS de alta precisión que te permite rastrear la ubicación exacta de tus vehículos las 24 horas del día, los 7 días de la semana.",
  },
  {
    id: 3,
    image: "/img/equipo3.webp",
    title: "Optimización de Rutas",
    description:
      "Algoritmos inteligentes que calculan las rutas más eficientes, reduciendo costos de combustible y tiempo de viaje para maximizar la productividad.",
  },
  {
    id: 4,
    image: "/img/equipo4.jpg",
    title: "Alertas de Mantenimiento",
    description:
      "Sistema automatizado de notificaciones que te avisa sobre mantenimientos programados, alertas de seguridad y posibles problemas mecánicos.",
  },
//   {
//     id: 5,
//     image: "/img/equipo5.webp",
//     title: "Reportes y Análisis",
//     description:
//       "Genera reportes detallados sobre el rendimiento de tu flota, consumo de combustible, tiempos de conducción y métricas clave para la toma de decisiones.",
//   },
]

export function ImageCarousel({
  autoPlay = true,
  autoPlayMs = 6000,
}: {
  autoPlay?: boolean
  autoPlayMs?: number
}) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState<boolean[]>(() => Array(carouselItems.length).fill(false))
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((i) => (i + 1) % carouselItems.length), autoPlayMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoPlay, autoPlayMs])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === "Escape") setIsLightboxOpen(false)
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
        return
      }
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isLightboxOpen])

  const goTo = (idx: number) => setCurrent(idx)
  const prev = () => setCurrent((i) => (i === 0 ? carouselItems.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === carouselItems.length - 1 ? 0 : i + 1))

  // Touch/drag support
  const startX = useRef(0)
  const deltaX = useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    deltaX.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    deltaX.current = e.touches[0].clientX - startX.current
  }
  const onTouchEnd = () => {
    const threshold = 50
    if (deltaX.current > threshold) prev()
    else if (deltaX.current < -threshold) next()
  }

  const sizes = "(min-width: 1024px) 50vw, 100vw"

  const currentItem = useMemo(() => carouselItems[current], [current])

  return (
    <section className="py-6 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Image side */}
          <div className="relative isolate">
            {/* Subtle gradient to improve contrast at edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10" />

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full bg-black/50 p-2 backdrop-blur text-white hover:bg-black/60 transition"
              aria-label="Ampliar imagen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>

            {/* Progressive image with skeleton */}
            <div className="relative w-full h-full aspect-[16/11] lg:aspect-auto lg:min-h-[520px]">
              {!loaded[current] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-100" />
              )}
              <Image
                key={currentItem.id}
                src={currentItem.image || "/placeholder.svg"}
                alt={currentItem.title}
                fill
                sizes={sizes}
                className="object-cover"
                priority
                onLoadingComplete={() =>
                  setLoaded((prev) => {
                    const n = [...prev]
                    n[current] = true
                    return n
                  })
                }
              />

              {/* Parallax caption over image (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 lg:hidden">
                <div className="p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white">
                  <h3 className="text-xl font-semibold">{currentItem.title}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-6 md:p-10 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 mb-4">
                Solución {current + 1} / {carouselItems.length}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentItem.title}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{currentItem.description}</p>
            </div>

            {/* Thumbnails */}
            <div className="mt-8 hidden lg:block">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {carouselItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => goTo(idx)}
                    className={`relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-xl ring-1 transition-all duration-200 ${
                      idx === current ? "ring-purple-500 ring-2 scale-[1.02]" : "ring-black/10 hover:ring-black/20"
                    }`}
                    aria-label={`Ir al slide ${idx + 1}`}
                  >
                    <Image
                      src={item.thumb || item.image}
                      alt={item.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Prev/Next */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
          <button
            onClick={prev}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg ring-1 ring-black/5 transition hover:scale-110"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg ring-1 ring-black/5 transition hover:scale-110"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Dots (mobile-first) */}
        <div className="flex justify-center gap-2 py-4">
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                current === idx ? "w-8 bg-[#934991]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
            aria-modal
            role="dialog"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="relative w-full max-w-6xl aspect-[16/10]">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="mx-auto max-w-5xl px-4 pb-6">
                <div className="flex items-center justify-center gap-3 overflow-x-auto">
                  {carouselItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => goTo(idx)}
                      className={`relative h-14 w-24 flex-shrink-0 overflow-hidden rounded-lg ring-1 transition-all ${
                        idx === current ? "ring-white ring-2" : "ring-white/30 hover:ring-white/60"
                      }`}
                      aria-label={`Abrir ${item.title}`}
                    >
                      <Image src={item.thumb || item.image} alt={item.title} fill sizes="96px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Lightbox prev/next */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={prev}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition hover:bg-white/20"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition hover:bg-white/20"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ImageCarousel
