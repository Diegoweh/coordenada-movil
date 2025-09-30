// components/Banner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full max-h-[900px] h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-md overflow-hidden mx-auto scale-90">
      <Image
        src="/img/banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
