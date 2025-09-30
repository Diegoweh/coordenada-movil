"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

type Service = {
  title: string;
  description?: string;
  extraText?: string;
};

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "Localización GPS",
      description: "Monitoreo vehicular vía GPS, rastrea y controla cualquier tipo de vehículo.",
      extraText: "Con nuestro sistema puedes ver la ubicación exacta, historial de recorridos y generar reportes.",
    },
    {
      title: "Centro de Monitoreo ACTIVO",
      description: "Supervisión constante para la seguridad de tus vehículos.",
      extraText: "Nuestro equipo trabaja 24/7 para responder de manera inmediata ante cualquier incidente.",
    },
    {
      title: "Atención a clientes PROACTIVA",
      description: "Te acompañamos antes de que surjan los problemas.",
      extraText: "Contamos con alertas preventivas y asesoría especializada.",
    },
    {
      title: "Soporte técnico y certificados",
      description: "Siempre a tu lado para resolver cualquier inconveniente.",
      extraText: "Nuestro soporte está certificado y disponible en todo momento.",
    },
  ];

  // Estado para controlar qué servicio está expandido
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-md">Nuestros servicios</h2>
          <Button className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            Contáctanos
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/services.webp"
                alt="GPS vehicle tracking visualization"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    {service.description && (
                      <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                    )}
                  </div>
                  {openIndex === index ? (
                    <ChevronDown className="w-6 h-6 text-[#934991]" />
                  ) : (
                    <ChevronUp className="w-6 h-6 text-[#934991]" />
                  )}
                </button>

                {/* Texto desplegable */}
                {openIndex === index && service.extraText && (
                  <div className="mt-4 text-gray-700 bg-gray-100 rounded-lg p-4">
                    {service.extraText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
