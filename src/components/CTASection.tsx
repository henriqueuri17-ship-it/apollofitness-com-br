import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
export const CTASection = () => {
  const phoneNumber = "5517997712913";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Acabei%20de%20ver%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento`;
  const phoneUrl = `tel:+${phoneNumber}`;
  return <section className="py-12 md:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-primary-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            Pronto para equipar sua academia?
          </h2>
          <p className="text-sm md:text-xl text-primary-foreground/90 mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Entre em contato com nossos especialistas e receba um orçamento personalizado 
            para o seu projeto. Temos as melhores condições do mercado.
          </p>

          <div className="flex flex-row gap-2 md:gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Button size="default" variant="secondary" className="gap-1.5 md:gap-2 text-xs md:text-lg px-4 md:px-8 py-2 md:py-6 bg-background text-foreground hover:bg-background/90" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="default" variant="outline" className="gap-1.5 md:gap-2 text-xs md:text-lg px-4 md:px-8 py-2 md:py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={phoneUrl} target="_blank" rel="noopener noreferrer" className="bg-ring">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};