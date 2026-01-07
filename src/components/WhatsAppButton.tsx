import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const phoneNumber = "5517997712913";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Acabei%20de%20ver%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento`;

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-glow animate-bounce hover:animate-none"
      aria-label="Fale no WhatsApp"
      asChild
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-7 h-7" />
      </a>
    </Button>
  );
};
