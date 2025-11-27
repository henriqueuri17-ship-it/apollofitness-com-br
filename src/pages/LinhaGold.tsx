import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import goldImage from "@/assets/gold-equipment.png";

const LinhaGold = () => {
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Gold.";

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-yellow-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-yellow-500 text-yellow-950 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  DESTAQUE
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Linha Gold
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Linha semi-carenada com excelente custo-benefício, perfeita para academias que buscam qualidade profissional.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li>✓ Acabamento semi-carenado elegante</li>
                  <li>✓ Estrutura robusta em aço</li>
                  <li>✓ Estofados de alta resistência</li>
                  <li>✓ Excelente custo-benefício</li>
                  <li>✓ Ideal para academias profissionais</li>
                </ul>
                <Button asChild size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={goldImage} 
                  alt="Equipamento Linha Gold" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Gallery Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              Equipamentos da Linha Gold
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Em breve, fotos e informações detalhadas de cada aparelho.
            </p>
            
            {/* Placeholder for equipment gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item} 
                  className="bg-muted/50 rounded-lg aspect-square flex items-center justify-center border border-border"
                >
                  <span className="text-muted-foreground">Equipamento {item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LinhaGold;
