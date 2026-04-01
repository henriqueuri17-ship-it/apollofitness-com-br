import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import cardioEscada from "@/assets/cardio-escada.png";
import cardioEsteiraLateral from "@/assets/cardio-esteira-lateral.jpg";
import cardioEsteiraPainel from "@/assets/cardio-esteira-painel.jpg";
import cardioEsteiraFrente from "@/assets/cardio-esteira-frente.jpg";
import cardioEscadaDetalhe1 from "@/assets/cardio-escada-detalhe1.webp";
import cardioEscadaDetalhe2 from "@/assets/cardio-escada-detalhe2.webp";
import cardioEscadaDetalhe3 from "@/assets/cardio-escada-detalhe3.webp";
import cardioBike from "@/assets/cardio-bike.png";

const LinhaCardio = () => {
  const whatsappUrl = "https://wa.me/5517997712913?text=Olá! Gostaria de saber mais sobre a Linha Cardio.";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const equipamentos = [
    {
      name: "Simulador de Escada Profissional",
      image: cardioEscada,
      details: [cardioEscadaDetalhe1, cardioEscadaDetalhe2, cardioEscadaDetalhe3],
    },
    {
      name: "Esteira Profissional - Vista Lateral",
      image: cardioEsteiraLateral,
      details: [],
    },
    {
      name: "Esteira Profissional - Painel",
      image: cardioEsteiraPainel,
      details: [],
    },
    {
      name: "Esteira Profissional - Detalhes",
      image: cardioEsteiraFrente,
      details: [],
    },
    {
      name: "Bicicleta Spinning Profissional",
      image: cardioBike,
      details: [],
    },
  ];

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

        {/* Equipment Gallery */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              Equipamentos da Linha Cardio
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Conheça nossos equipamentos de cardio profissionais.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {equipamentos.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 md:p-4 border-t border-border">
                    <h3 className="text-xs md:text-sm font-semibold text-center">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Equipamento"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LinhaCardio;
