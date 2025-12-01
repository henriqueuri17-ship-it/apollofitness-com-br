import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import pesoLivreImage from "@/assets/peso-livre.jpg";
import supinoReto from "@/assets/peso-livre/supino-reto.png";
import bancoDeclinado from "@/assets/peso-livre/banco-declinado.png";
import bicepsScott from "@/assets/peso-livre/biceps-scott.png";
import supinoRetoArticulado from "@/assets/peso-livre/supino-reto-articulado.png";
import hack45 from "@/assets/peso-livre/hack-45.png";
import legPressVertical from "@/assets/peso-livre/leg-press-vertical.png";
import sissySquat from "@/assets/peso-livre/sissy-squat.png";
import cadeiraRomana from "@/assets/peso-livre/cadeira-romana.png";
import supinoInclinado from "@/assets/peso-livre/supino-inclinado.png";
import paralela from "@/assets/peso-livre/paralela.png";

const equipments = [
  { id: "pesolivre-supino-reto", name: "Supino Reto", image: supinoReto },
  { id: "pesolivre-banco-declinado", name: "Banco Declinado", image: bancoDeclinado },
  { id: "pesolivre-biceps-scott", name: "Bíceps Scott", image: bicepsScott },
  { id: "pesolivre-supino-reto-articulado", name: "Supino Reto Articulado", image: supinoRetoArticulado },
  { id: "pesolivre-hack-45", name: "Hack 45°", image: hack45 },
  { id: "pesolivre-leg-press-vertical", name: "Leg Press Vertical", image: legPressVertical },
  { id: "pesolivre-sissy-squat", name: "Sissy Squat", image: sissySquat },
  { id: "pesolivre-cadeira-romana", name: "Cadeira Romana", image: cadeiraRomana },
  { id: "pesolivre-supino-inclinado", name: "Supino Inclinado", image: supinoInclinado },
  { id: "pesolivre-paralela", name: "Paralela", image: paralela },
];

const PesoLivre = () => {
  const { addItem, removeItem, isInCart } = useCart();
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a linha Peso Livre.";

  const handleToggleItem = (equipment: typeof equipments[0]) => {
    if (isInCart(equipment.id)) {
      removeItem(equipment.id);
    } else {
      addItem({
        id: equipment.id,
        name: equipment.name,
        image: equipment.image,
        line: "Peso Livre",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-muted-foreground text-background px-4 py-1 rounded-full text-sm font-medium mb-4">
                  ESSENCIAL
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Peso Livre
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Equipamentos de peso livre com a qualidade Apollo, ideal para treinos funcionais e de alta performance.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li>✓ Design funcional e robusto</li>
                  <li>✓ Estrutura em aço de qualidade</li>
                  <li>✓ Ótimo custo-benefício</li>
                  <li>✓ Ideal para treinos funcionais</li>
                  <li>✓ Alta durabilidade</li>
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
                  src={pesoLivreImage} 
                  alt="Equipamento Peso Livre" 
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
              Equipamentos Peso Livre
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

export default PesoLivre;
