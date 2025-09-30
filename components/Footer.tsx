import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
              <div>
                <h3 className="text-xl font-bold">Coordenada</h3>
                <h3 className="text-xl font-bold text-[#934991]">Móvil</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Soluciones de rastreo y gestión de flotas en tiempo real</p>
          </div>

          {/* Phone Numbers Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#934991]" />
              Teléfonos
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-sm text-gray-400">Consultor</p>
                <a href="tel:+526699202328" className="text-white hover:text-[#934991] transition-colors">
                  (669) 920 2328
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-400">Administración</p>
                <a href="tel:+526699932155" className="text-white hover:text-[#934991] transition-colors">
                  (669) 993 2155
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-400">Monitoreo</p>
                <a href="tel:+526691202285" className="text-white hover:text-[#934991] transition-colors">
                  (669) 120 2285
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#934991]" />
              Ubicación
            </h4>
            <address className="not-italic text-gray-300 leading-relaxed">
              Avenida Rafael Buelna 928-local 3,
              <br />
              Sanchez Celis, Mazatlán, Sin.,
              <br />
              México
            </address>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#934991]" />
              Horarios
            </h4>
            <p className="text-gray-300 mb-6">
              Lunes a Sábado
              <br />
              <span className="text-white font-medium">09:00 a.m. a 05:00 p.m.</span>
            </p>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Síguenos</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#934991] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#934991] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Coordenada Móvil. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#934991] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#934991] transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
