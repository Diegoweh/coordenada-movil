"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/equipos-y-accesorios", label: "Equipos y Accesorios" },
  { href: "/#monitoreo", label: "Monitoreo" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-700/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-[#c450c2] transition-colors duration-200 text-sm font-medium"
              >
                {label}
              </Link>
            ))}

            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-4 border-gray-500 bg-transparent hover:bg-[#934991] text-white hover:text-white"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>

          {/* Mobile menu (Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                  <Menu className="h-6 w-6 " />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[380px] bg-gray-700 text-white border-white/10"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-white">Menú</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-1">
                  {LINKS.map(({ href, label }) => (
                    <SheetClose asChild key={label}>
                      <Link
                        href={href}
                        className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#934991] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}

                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-3 mx-2 border-gray-500 bg-transparent hover:bg-[#934991] text-white hover:text-white"
                    >
                      <Link href="/contacto">Contacto</Link>
                    </Button>
                  </SheetClose>
                </nav>

                {/* Línea y mini footer del menú */}
                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/70">
                  <p>© {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
