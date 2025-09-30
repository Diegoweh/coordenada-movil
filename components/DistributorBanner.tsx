"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface DistributorLogo {
  src: string
  alt: string
  href?: string
}

interface DistributorBannerProps {
  title: string
  logos: [DistributorLogo, DistributorLogo, DistributorLogo, DistributorLogo]
  subtitle?: string
  className?: string
}

export default function DistributorBanner({
  title,
  subtitle,
  logos,
  className,
}: DistributorBannerProps) {
  return (
    <section className={cn("w-full px-4 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm md:text-base text-gray-600">{subtitle}</p>
          ) : null}
        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-6 md:gap-10 lg:gap-12">
          {logos.map((logo, idx) => {
            const LogoBox = (
              <motion.div
                className="group relative mx-auto flex h-12 w-36 sm:h-14 sm:w-44 items-center justify-center rounded-xl bg-white/60 p-3 ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 * idx }}
                viewport={{ once: true }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(min-width: 768px) 176px, 144px"
                    className="object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            )

            return logo.href ? (
              <Link
                key={idx}
                href={logo.href}
                aria-label={logo.alt}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {LogoBox}
              </Link>
            ) : (
              <div key={idx} aria-label={logo.alt}>
                {LogoBox}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
