import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

import cardioEscada from "@/assets/cardio-escada.png";
import cardioEsteiraLateral from "@/assets/cardio-esteira-lateral.jpg";
import cardioBike from "@/assets/cardio-bike.png";

const equipments = [
  { id: "cardio-esteira", name: "Esteira Profissional", image: cardioEsteiraLateral },
  { id: "cardio-simulador-escada", name: "Simulador de Escada", image: cardioEscada },
  { id: "cardio-bike-spinning", name: "Bicicleta Spinning", image: cardioBike },
];

const LinhaCardio = () => {
  const { addItem, removeItem, isInCart } = useCart();
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Cardio.";

  const handleToggleItem = (equipment: typeof equipments[0]) => {
    if (isInCart(equipment.id)) {
      removeItem(equipment.id);
    } else {
      addItem({
        id: equipment.id,
        name: equipment.name,
        image: equipment.image,
        line: "Linha Cardio",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-red-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                CARDIO
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Linha Cardio
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Equipamentos de cardio de alta performance para treinos aeróbicos intensos. Esteiras, bicicletas, elípticos e mais.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li>✓ Esteiras profissionais</li>
                <li>✓ Bicicletas ergométricas</li>
                <li>✓ Simulador de escada</li>
                <li>✓ Monitores de frequência</li>
                <li>✓ Alta durabilidade</li>
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
              Equipamentos da Linha Cardio
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Selecione os equipamentos desejados e adicione ao carrinho de orçamento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipments.map((equipment) => {
                const inCart = isInCart(equipment.id);
                return (
                  <div 
                    key={equipment.id} 
                    className={`group bg-background rounded-lg overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 ${
                      inCart ? "border-primary ring-2 ring-primary/20" : "border-border"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden bg-muted relative">
                      <img 
                        src={equipment.image} 
                        alt={equipment.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {inCart && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-heading font-semibold text-lg">{equipment.name}</h3>
                      <Button
                        variant={inCart ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleToggleItem(equipment)}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Adicionado
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 mr-1" />
                            Adicionar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LinhaCardio;
