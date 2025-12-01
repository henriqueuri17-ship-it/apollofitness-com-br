import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-main.png";
export const Hero = () => {
  const phoneNumber = "5517997712913";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-background/20 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-medium text-foreground uppercase tracking-wider">FABRICAÇÃO 100% NACIONAL</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Transforme seu projeto em{" "}
          <span className="text-primary">uma academia de sucesso</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Equipamentos premium fabricados com engenharia própria, materiais de primeira linha 
          e a garantia de uma empresa com mais de 15 anos de mercado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-glow" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Conhecer Produtos
          </Button>
        </div>
      </div>
    </section>;
};