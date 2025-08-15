import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5551234567"; // Número de WhatsApp sin + ni espacios
  const message = encodeURIComponent("Hola, me interesa obtener información sobre sus productos y servicios de FerreIndustrial.");

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      variant="hero"
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-accent-glow hover:shadow-primary-glow animate-pulse hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;