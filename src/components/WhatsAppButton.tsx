import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-glow animate-bounce hover:animate-none"
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};
