// app/equipos/page.tsx
import Image from "next/image"
import Link from "next/link"
import { ImageHeader } from '@/components/equipos/ImageHeader'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { products } from "@/lib/products"
import React from 'react'

const page = () => {
  const randomIndex = Math.floor(Math.random() * products.length)
  const product = products[randomIndex]
  const otherProducts = products.filter((_, i) => i !== randomIndex)

  return (
    <>
      <ImageHeader />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
          <div>
            <div className=" text-gray-800/90 leading-relaxed">
              EQUIPOS Y ACCESORIOS
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 drop-shadow-sm">
              Monitoreo vehicular vía GPS, rastrea y controla cualquier tipo de vehículo
            </h2>
          </div>

          <div className="text-gray-800/90 leading-relaxed">
            Proporcionamos servicios personalizados, consultoría especializada y tecnología de vanguardia. Optimizamos sus flotas, mejorando la rentabilidad y avanzando hacia el éxito en el mundo de la logística moderna.
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-5 rounded-lg font-medium flex items-center gap-2">
            Contáctanos
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Random Product Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Equipos <span className="text-[#934991]">certificados</span>
          </h2>
        </div>

        {/* Producto aleatorio */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Imagen a la izquierda */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Texto a la derecha */}
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {product.name}
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <ul className="mt-6 grid gap-2">
              {product.features.slice(0, 4).map((feat, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#934991]" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-lg font-medium">{product.price}</span>
              <Link href={`/equipos/${product.slug}`}>
                <Button className="bg-[#934991] hover:bg-purple-900 text-white">
                  Ver detalles
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Mira todos nuestros <span className="text-[#934991]">productos</span>
          </h2>
        </div>

        {/* Grid con los demás productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {otherProducts.map((p) => (
            <Link
              key={p.id}
              href={`/equipos-y-accesorios/${p.slug}`}
              className="p-4 border rounded-lg hover:shadow-md transition bg-white flex flex-col items-center"
            >
              {/* Contenedor de la imagen */}
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Texto */}
              <h4 className="text-lg font-medium text-gray-900 text-center">{p.name}</h4>
              <p className="text-sm text-gray-500 text-center">{p.category}</p>
            </Link>
          ))}
        </div>

      </section>
    </>
  )
}

export default page
