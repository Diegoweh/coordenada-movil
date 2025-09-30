import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Equipos = () => {
  return (
    <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md">Equipos y accesorios para <span className="text-[#934991]">cualquier tipo de vehículo</span></h2>
            <Button className="bg-[#934991] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                Contáctanos
                <ArrowUpRight className="w-4 h-4" />
            </Button>
            </div>
        </div>
    </section>
  )
}

export default Equipos