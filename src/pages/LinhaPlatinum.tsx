import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import platinumImage from "@/assets/platinum-equipment.png";
import mesaFlexora from "@/assets/platinum/mesa-flexora.jpg";
import bicepsScott from "@/assets/platinum/biceps-scott.jpg";
import legPress from "@/assets/platinum/leg-press.jpg";
import graviton from "@/assets/platinum/graviton.jpg";
import peckDeck from "@/assets/platinum/peck-deck.jpg";
import abdominalRotatorio from "@/assets/platinum/abdominal-rotatorio.jpg";
import crossOver from "@/assets/platinum/cross-over.jpg";
import remadaSentado from "@/assets/platinum/remada-sentado.jpg";
import gluteo from "@/assets/platinum/gluteo.jpg";
import triceps from "@/assets/platinum/triceps.jpg";
import cadeiraExtensora from "@/assets/platinum/cadeira-extensora.jpg";
import adutorAbdutor from "@/assets/platinum/adutor-abdutor.jpg";
import pulley from "@/assets/platinum/pulley.jpg";
import peckFly from "@/assets/platinum/peck-fly.jpg";
import smithMachine from "@/assets/platinum/smith-machine.jpg";
import flexoraDeitado from "@/assets/platinum/flexora-deitado.jpg";

const equipments = [
  { id: "platinum-mesa-flexora", name: "Mesa Flexora", image: mesaFlexora },
  { id: "platinum-biceps-scott", name: "Bíceps Scott", image: bicepsScott },
  { id: "platinum-leg-press", name: "Leg Press", image: legPress },
  { id: "platinum-graviton", name: "Graviton", image: graviton },
  { id: "platinum-peck-deck", name: "Peck Deck", image: peckDeck },
  { id: "platinum-abdominal-rotatorio", name: "Abdominal Rotatório", image: abdominalRotatorio },
  { id: "platinum-cross-over", name: "Cross Over", image: crossOver },
  { id: "platinum-remada-sentado", name: "Remada Sentado", image: remadaSentado },
  { id: "platinum-gluteo", name: "Glúteo", image: gluteo },
  { id: "platinum-triceps", name: "Tríceps", image: triceps },
  { id: "platinum-cadeira-extensora", name: "Cadeira Extensora", image: cadeiraExtensora },
  { id: "platinum-adutor-abdutor", name: "Adutor/Abdutor", image: adutorAbdutor },
  { id: "platinum-pulley", name: "Pulley", image: pulley },
  { id: "platinum-peck-fly", name: "Peck Fly", image: peckFly },
  { id: "platinum-smith-machine", name: "Smith Machine", image: smithMachine },
  { id: "platinum-flexora-deitado", name: "Flexora Deitado", image: flexoraDeitado },
];

const LinhaPlatinum = () => {
  const { addItem, removeItem, isInCart } = useCart();
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Platinum.";

  const handleToggleItem = (equipment: typeof equipments[0]) => {
    if (isInCart(equipment.id)) {
      removeItem(equipment.id);
    } else {
      addItem({
        id: equipment.id,
        name: equipment.name,
        image: equipment.image,
        line: "Linha Platinum",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  PREMIUM
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Linha Platinum
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Nossa linha premium totalmente carenada, ideal para academias que buscam o máximo em qualidade, durabilidade e design sofisticado.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li>✓ Acabamento 100% carenado premium</li>
                  <li>✓ Estrutura em aço carbono reforçado</li>
                  <li>✓ Estofados em couro sintético premium</li>
                  <li>✓ Design moderno e sofisticado</li>
                  <li>✓ Garantia estendida</li>
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
                  src={platinumImage} 
                  alt="Equipamento Linha Platinum" 
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
              Equipamentos da Linha Platinum
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default LinhaPlatinum;
