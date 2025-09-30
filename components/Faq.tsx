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

export function FaqSection() {
  const services: Service[] = [
    {
      title: "¿Cuanto tiempo tardan en instalar un equipo GPS?",
      
      extraText: "El promedio de una instalación del equipo GPS con su bloqueo de motor es de 50 MIN, dependiendo del vehículo a instalar.  Todo queda totalmente oculto.",
    },
    {
      title: "¿Donde podrían instalar mi equipo GPS?",
      
      extraText: "Instalamos tu GPS a domicilio (casa u oficina) o en nuestra red de talleres certificados, con cobertura en Mazatlán, Sinaloa y resto del país. La cita se agenda en el horario que más te convenga y la instalación toma 45 a 90 minutos, según el vehículo. Trabajamos autos, motos, camiones, flotillas y maquinaria.",
    },
    {
      title: "¿Qué servicios ofrece COORDENADA MÓVIL?",
      
      extraText: "Ofrecemos una solución integral de rastreo y gestión de vehículos/flotas: desde la instalación del GPS hasta la plataforma, reportes y soporte continuo. Optimizamos seguridad, operación y costos.",
    },
    {
      title: "¿Cómo puedo contactar a COORDENADA MÓVIL?",
      
      extraText: "Puedes comunicarte con COORDENADA MÓVIL por WhatsApp, llamada telefónica, correo o mediante nuestro formulario web. Atendemos 24/7 para emergencias (robo, bloqueo remoto, alertas críticas) y en horario extendido para ventas e instalaciones.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md">Preguntas frecuentes <span className="text-[#934991]">FAQ</span></h2>
          {/* <Button className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            Contáctanos
            <ArrowUpRight className="w-4 h-4" />
          </Button> */}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          

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

          {/* Left side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/faq1.png"
                alt="GPS vehicle tracking visualization"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
