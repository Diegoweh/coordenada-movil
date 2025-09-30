"use client";

// components/Banner.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      className="relative w-full max-h-[900px] h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-md overflow-hidden mx-auto scale-90"
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
        src="/img/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
