// components/ui/WhatsAppButton.tsx
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/526699202328?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios%20"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-[#25D366] hover:bg-[#934991]
        text-white
        shadow-lg shadow-black/30
        transition-all duration-300
      "
      aria-label="Chatea por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
