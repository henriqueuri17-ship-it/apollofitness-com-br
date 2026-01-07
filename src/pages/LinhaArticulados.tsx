import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Import equipment images
import legPress from "@/assets/articulados/leg-press.jpg";
import supinoInclinado from "@/assets/articulados/supino-inclinado.jpg";
import supinoDeclinado from "@/assets/articulados/supino-declinado.jpg";
import remada from "@/assets/articulados/remada.jpg";
import supinoSentado from "@/assets/articulados/supino-sentado.jpg";
import desenvolvimento from "@/assets/articulados/desenvolvimento.jpg";
import gluteo from "@/assets/articulados/gluteo.jpg";
import biceps from "@/assets/articulados/biceps.jpg";
import peckDeck from "@/assets/articulados/peck-deck.jpg";
import extensora from "@/assets/articulados/extensora.jpg";
import pulley from "@/assets/articulados/pulley.jpg";
import supinoReto from "@/assets/articulados/supino-reto.jpg";
import desenvolvimentoSentado from "@/assets/articulados/desenvolvimento-sentado.jpg";
import triceps from "@/assets/articulados/triceps.jpg";

const equipment = [
  { id: "art-1", name: "Leg Press Articulado", image: legPress },
  { id: "art-2", name: "Supino Inclinado Articulado", image: supinoInclinado },
  { id: "art-3", name: "Supino Declinado Articulado", image: supinoDeclinado },
  { id: "art-4", name: "Remada Articulada", image: remada },
  { id: "art-5", name: "Supino Sentado Articulado", image: supinoSentado },
  { id: "art-6", name: "Desenvolvimento Articulado", image: desenvolvimento },
  { id: "art-7", name: "Glúteo Articulado", image: gluteo },
  { id: "art-8", name: "Bíceps Articulado", image: biceps },
  { id: "art-9", name: "Peck Deck Articulado", image: peckDeck },
  { id: "art-10", name: "Extensora Articulada", image: extensora },
  { id: "art-11", name: "Pulley Articulado", image: pulley },
  { id: "art-12", name: "Supino Reto Articulado", image: supinoReto },
  { id: "art-13", name: "Desenvolvimento Sentado Articulado", image: desenvolvimentoSentado },
  { id: "art-14", name: "Tríceps Articulado", image: triceps },
];

const LinhaArticulados = () => {
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Articulados.";
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToQuote = (item: { id: string; name: string; image: string }) => {
    addItem({
      id: item.id,
      name: item.name,
      line: "Linha Articulados",
      image: item.image,
    });
    toast({
      title: "Adicionado ao orçamento",
      description: `${item.name} foi adicionado à sua lista.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-orange-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                FUNCIONAL
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Linha Articulados
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Equipamentos com movimentos articulados que proporcionam maior amplitude e biomecânica natural para treinos mais eficientes.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li>✓ Movimento articulado natural</li>
                <li>✓ Maior amplitude de movimento</li>
                <li>✓ Ergonomia avançada</li>
                <li>✓ Estrutura reforçada</li>
                <li>✓ Design moderno</li>
              </ul>
              <Button asChild size="lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Equipment Gallery Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              Equipamentos da Linha Articulados
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Confira nossos equipamentos articulados de alta performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-lg mb-3">{item.name}</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleAddToQuote(item)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar ao Orçamento
                    </Button>
                  </div>
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

export default LinhaArticulados;
