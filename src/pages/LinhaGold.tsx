import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Plus, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import goldImage from "@/assets/gold-equipment.png";

// Equipment images
import pulleyImg from "@/assets/gold/pulley.jpg";
import gravitonImg from "@/assets/gold/graviton.jpg";
import supinoImg from "@/assets/gold/supino.jpg";
import mesaFlexoraImg from "@/assets/gold/mesa-flexora.jpg";
import adutorAbdutorImg from "@/assets/gold/adutor-abdutor.jpg";
import crossOverImg from "@/assets/gold/cross-over.jpg";
import crossOverDuploImg from "@/assets/gold/cross-over-duplo.jpg";
import gluteoImg from "@/assets/gold/gluteo.jpg";
import tricepsImg from "@/assets/gold/triceps.jpg";
import peckFlyImg from "@/assets/gold/peck-fly.jpg";
import gluteo2Img from "@/assets/gold/gluteo-2.jpg";
import peckDeckImg from "@/assets/gold/peck-deck.jpg";
import remadaSentadoImg from "@/assets/gold/remada-sentado.jpg";
import pulleyDuploImg from "@/assets/gold/pulley-duplo.jpg";
import cadeiraExtensoraImg from "@/assets/gold/cadeira-extensora.jpg";
import legPressImg from "@/assets/gold/leg-press.jpg";
import smithMachineImg from "@/assets/gold/smith-machine.jpg";
import desenvolvimentoImg from "@/assets/gold/desenvolvimento.jpg";
import flexoraSentadoImg from "@/assets/gold/flexora-sentado.jpg";
import remadaBaixaImg from "@/assets/gold/remada-baixa.jpg";
import pulleyCarenatoImg from "@/assets/gold/pulley-carenado.jpg";
import crossOverAbertoImg from "@/assets/gold/cross-over-aberto.jpg";
import bicepsScottImg from "@/assets/gold/biceps-scott.jpg";
import comboStationImg from "@/assets/gold/combo-station.jpg";
import crossOverPremiumImg from "@/assets/gold/cross-over-premium.jpg";
import flexoraExtensoraImg from "@/assets/gold/flexora-extensora.jpg";
import remadaArticuladaImg from "@/assets/gold/remada-articulada.jpg";
import agachamentoImg from "@/assets/gold/agachamento.jpg";
import abdominalImg from "@/assets/gold/abdominal.jpg";
import remadaDeitadoImg from "@/assets/gold/remada-deitado.jpg";
import pulleyBancoImg from "@/assets/gold/pulley-banco.jpg";
import bicepsConcentradoImg from "@/assets/gold/biceps-concentrado.jpg";
import gluteoPlataformaImg from "@/assets/gold/gluteo-plataforma.jpg";
import pulleySimplesImg from "@/assets/gold/pulley-simples.jpg";
import gluteoPanturrilhaImg from "@/assets/gold/gluteo-panturrilha.jpg";

const equipments = [
  { id: "gold-pulley", name: "Pulley", image: pulleyImg },
  { id: "gold-graviton", name: "Graviton", image: gravitonImg },
  { id: "gold-supino", name: "Supino Sentado", image: supinoImg },
  { id: "gold-mesa-flexora", name: "Mesa Flexora", image: mesaFlexoraImg },
  { id: "gold-adutor-abdutor", name: "Adutor/Abdutor", image: adutorAbdutorImg },
  { id: "gold-cross-over", name: "Cross Over", image: crossOverImg },
  { id: "gold-cross-over-duplo", name: "Cross Over Duplo", image: crossOverDuploImg },
  { id: "gold-gluteo", name: "Glúteo", image: gluteoImg },
  { id: "gold-triceps", name: "Tríceps", image: tricepsImg },
  { id: "gold-peck-fly", name: "Peck Fly", image: peckFlyImg },
  { id: "gold-gluteo-2", name: "Glúteo Máquina", image: gluteo2Img },
  { id: "gold-peck-deck", name: "Peck Deck", image: peckDeckImg },
  { id: "gold-remada-sentado", name: "Remada Sentado", image: remadaSentadoImg },
  { id: "gold-pulley-duplo", name: "Pulley Duplo", image: pulleyDuploImg },
  { id: "gold-cadeira-extensora", name: "Cadeira Extensora", image: cadeiraExtensoraImg },
  { id: "gold-leg-press", name: "Leg Press", image: legPressImg },
  { id: "gold-smith-machine", name: "Smith Machine", image: smithMachineImg },
  { id: "gold-desenvolvimento", name: "Desenvolvimento", image: desenvolvimentoImg },
  { id: "gold-flexora-sentado", name: "Flexora Sentado", image: flexoraSentadoImg },
  { id: "gold-remada-baixa", name: "Remada Baixa", image: remadaBaixaImg },
  { id: "gold-pulley-carenado", name: "Pulley Carenado", image: pulleyCarenatoImg },
  { id: "gold-cross-over-aberto", name: "Cross Over Aberto", image: crossOverAbertoImg },
  { id: "gold-biceps-scott", name: "Bíceps Scott", image: bicepsScottImg },
  { id: "gold-combo-station", name: "Combo Station", image: comboStationImg },
  { id: "gold-cross-over-premium", name: "Cross Over Premium", image: crossOverPremiumImg },
  { id: "gold-flexora-extensora", name: "Flexora/Extensora", image: flexoraExtensoraImg },
  { id: "gold-remada-articulada", name: "Remada Articulada", image: remadaArticuladaImg },
  { id: "gold-agachamento", name: "Agachamento", image: agachamentoImg },
  { id: "gold-abdominal", name: "Abdominal", image: abdominalImg },
  { id: "gold-remada-deitado", name: "Remada Deitado", image: remadaDeitadoImg },
  { id: "gold-pulley-banco", name: "Pulley com Banco", image: pulleyBancoImg },
  { id: "gold-biceps-concentrado", name: "Bíceps Concentrado", image: bicepsConcentradoImg },
  { id: "gold-gluteo-plataforma", name: "Glúteo Plataforma", image: gluteoPlataformaImg },
  { id: "gold-pulley-simples", name: "Pulley Simples", image: pulleySimplesImg },
  { id: "gold-gluteo-panturrilha", name: "Glúteo/Panturrilha", image: gluteoPanturrilhaImg },
];

const LinhaGold = () => {
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Gold.";
  const { addItem, removeItem, isInCart } = useCart();

  const handleToggleItem = (equipment: typeof equipments[0]) => {
    if (isInCart(equipment.id)) {
      removeItem(equipment.id);
    } else {
      addItem({
        id: equipment.id,
        name: equipment.name,
        image: equipment.image,
        line: "Linha Gold",
      });
    }
  };

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
              Selecione os equipamentos desejados e adicione ao seu orçamento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipments.map((equipment) => {
                const inCart = isInCart(equipment.id);
                return (
                  <div 
                    key={equipment.id} 
                    className={`bg-background rounded-lg overflow-hidden border transition-all ${
                      inCart ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="aspect-square bg-muted/30 p-4">
                      <img 
                        src={equipment.image} 
                        alt={equipment.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{equipment.name}</h3>
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

export default LinhaGold;
