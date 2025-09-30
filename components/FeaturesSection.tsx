import { MapPin, Smartphone, Shield, Car } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Por qué <span className="text-[#934991]">Coordenada Móvil</span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-foreground">es la mejor opción</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - 2x2 grid of feature cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Real-time monitoring */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-[#934991]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoreo en tiempo real</h3>
            <p className="text-gray-600 leading-relaxed">
              Localización y monitoreo en tiempo real a través de tecnología satelital GPS la ubicación de sus activos
              móviles.
            </p>
          </div>

          {/* Total control */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-[#934991]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Control total</h3>
            <p className="text-gray-600 leading-relaxed">Control total de flotas en un solo lugar.</p>
          </div>

          {/* Safe and reliable */}
          <div className="bg-gray-100 rounded-2xl p-8 md:col-span-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-[#934991]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Seguro y confiable</h3>
            <p className="text-gray-600 leading-relaxed">
              Accede a historiales detallados de rutas, recibir alertas personalizadas, detectar robos, decenas de
              reportes y mucho más.
            </p>
          </div>
        </div>

        {/* Right side - Vehicle types card */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Car className="w-8 h-8 text-[#934991]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Preparados para cualquier vehículo</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Estamos listos para cualquier giro o industria que puedas necesitar:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Vehículos particulares
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Transportes de carga
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Distribuidoras
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Maquinaria Pesada
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Transporte Público o Privado
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Maquinaria Agrícola
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>
              Grúas y Plataformas
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-[#934991] rounded-full mr-3"></div>Y muchos más...
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
