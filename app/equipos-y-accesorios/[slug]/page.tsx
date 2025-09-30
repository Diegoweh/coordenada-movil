// app/equipos-y-accesorios/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return { title: "Producto no encontrado" }
  return {
    title: `${product.name} – Equipos y Accesorios`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return notFound()

  // relacionados: 4 productos distintos al actual (puedes cambiar la lógica)
  const related = products
    .filter(p => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-12 md:py-16">
      {/* Breadcrumb + back */}
      <div className="mb-6">
        <Link href="/equipos-y-accesorios" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4" />
          Volver a Equipos y Accesorios
        </Link>
      </div>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen */}
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

        {/* Datos */}
        <div>
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6">
            <span className="text-lg font-medium">{product.price}</span>
          </div>

          {product.features?.length > 0 && (
            <ul className="mt-6 grid gap-2">
              {product.features.map((feat, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#934991]" />
                  {feat}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex gap-3">
            <Button className="bg-[#934991] hover:bg-purple-900 text-white">
              Cotizar
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/contacto">
              <Button variant="outline">
                Hablar con un asesor
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            También podría interesarte
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/equipos-y-accesorios/${p.slug}`}
                className="p-4 border rounded-lg hover:shadow-md transition bg-white flex flex-col items-center"
              >
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h4 className="text-base font-medium text-gray-900 text-center">{p.name}</h4>
                <p className="text-xs text-gray-500 text-center">{p.category}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
