import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

import abdutorGluteo from "@/assets/pro-diamond/abdutor-gluteo.png";
import desenvolvimentoOmbroVertical from "@/assets/pro-diamond/desenvolvimento-ombro-vertical.png";
import desenvolvimentoOmbro from "@/assets/pro-diamond/desenvolvimento-ombro.png";
import extensorUnilateral from "@/assets/pro-diamond/extensor-unilateral.png";
import flexorUnilateral from "@/assets/pro-diamond/flexor-unilateral.png";
import legPressUnilateral from "@/assets/pro-diamond/leg-press-unilateral.png";
import puxadaArticulada from "@/assets/pro-diamond/puxada-articulada.png";
import remadaGuiada from "@/assets/pro-diamond/remada-guiada.png";
import remadaLowRow from "@/assets/pro-diamond/remada-low-row.png";
import remadaSentadaConvergente from "@/assets/pro-diamond/remada-sentada-convergente.png";

const equipment = [
  { id: "prodiamond-1", name: "Abdutor Glúteo Pro Diamond", image: abdutorGluteo },
  { id: "prodiamond-2", name: "Desenvolvimento Ombro Vertical Pro Diamond", image: desenvolvimentoOmbroVertical },
  { id: "prodiamond-3", name: "Desenvolvimento Ombro Pro Diamond", image: desenvolvimentoOmbro },
  { id: "prodiamond-4", name: "Extensor Unilateral Pro Diamond", image: extensorUnilateral },
  { id: "prodiamond-5", name: "Flexor Unilateral Pro Diamond", image: flexorUnilateral },
  { id: "prodiamond-6", name: "Leg Press Unilateral Pro Diamond", image: legPressUnilateral },
  { id: "prodiamond-7", name: "Puxada Articulada Pro Diamond", image: puxadaArticulada },
  { id: "prodiamond-8", name: "Remada Guiada Pro Diamond", image: remadaGuiada },
  { id: "prodiamond-9", name: "Remada Low Row Pro Diamond", image: remadaLowRow },
  { id: "prodiamond-10", name: "Remada Sentada Convergente Pro Diamond", image: remadaSentadaConvergente },
];

const LinhaProDiamond = () => {
  const { addItem, removeItem, isInCart } = useCart();
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Pro Diamond.";

  const handleToggleItem = (equip: typeof equipment[0]) => {
    if (isInCart(equip.id)) {
      removeItem(equip.id);
    } else {
      addItem({
        id: equip.id,
        name: equip.name,
        image: equip.image,
        line: "Pro Diamond",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-cyan-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                ELITE
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Linha Pro Diamond
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa linha mais sofisticada com acabamento premium e tecnologia de ponta para academias de alto padrão.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li>✓ Acabamento Diamond exclusivo</li>
                <li>✓ Tecnologia de ponta</li>
                <li>✓ Design exclusivo</li>
                <li>✓ Materiais premium</li>
                <li>✓ Garantia estendida</li>
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
              Equipamentos da Linha Pro Diamond
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Selecione os equipamentos desejados e adicione ao carrinho de orçamento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((equip) => {
                const inCart = isInCart(equip.id);
                return (
                  <div 
                    key={equip.id} 
                    className={`group bg-background rounded-lg overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 ${
                      inCart ? "border-primary ring-2 ring-primary/20" : "border-border"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden bg-muted relative">
                      <img 
                        src={equip.image} 
                        alt={equip.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {inCart && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-1">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-heading font-semibold text-lg">{equip.name}</h3>
                      <Button
                        variant={inCart ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleToggleItem(equip)}
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

export default LinhaProDiamond;
