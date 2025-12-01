import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import platinumImage from "@/assets/platinum-equipment.png";
import goldImage from "@/assets/gold-equipment.png";
import pesoLivreImage from "@/assets/peso-livre.jpg";

export const ProductLines = () => {
  const products = [
    {
      badge: "PREMIUM",
      title: "Linha Platinum",
      description: "Nossa linha premium totalmente carenada, ideal para academias que buscam o máximo em qualidade, durabilidade e design sofisticado.",
      image: platinumImage,
      link: "/linha-platinum",
      features: [
        "Acabamento 100% carenado premium",
        "Estrutura em aço carbono reforçado",
        "Estofados em couro sintético premium",
      ],
    },
    {
      badge: "DESTAQUE",
      title: "Linha Gold",
      description: "Linha semi-carenada com excelente custo-benefício, perfeita para academias que buscam qualidade profissional.",
      image: goldImage,
      link: "/linha-gold",
      features: [
        "Acabamento semi-carenado elegante",
        "Estrutura robusta em aço",
        "Estofados de alta resistência",
      ],
    },
    {
      badge: "ESSENCIAL",
      title: "Peso Livre",
      description: "Equipamentos de peso livre com a qualidade Apollo, ideal para treinos funcionais e de alta performance.",
      image: pesoLivreImage,
      link: "/peso-livre",
      features: [
        "Design funcional e robusto",
        "Estrutura em aço de qualidade",
        "Ótimo custo-benefício",
      ],
    },
    {
      badge: "FUNCIONAL",
      badgeColor: "bg-orange-500",
      title: "Linha Articulados",
      description: "Equipamentos com movimentos articulados que proporcionam maior amplitude e biomecânica natural.",
      image: pesoLivreImage,
      link: "/linha-articulados",
      features: [
        "Movimento articulado natural",
        "Maior amplitude de movimento",
        "Ergonomia avançada",
      ],
    },
    {
      badge: "ELITE",
      badgeColor: "bg-cyan-500",
      title: "Linha Pro Diamond",
      description: "Nossa linha mais sofisticada com acabamento premium e tecnologia de ponta para academias de alto padrão.",
      image: platinumImage,
      link: "/linha-pro-diamond",
      features: [
        "Acabamento Diamond exclusivo",
        "Tecnologia de ponta",
        "Design exclusivo",
      ],
    },
    {
      badge: "CARDIO",
      badgeColor: "bg-red-500",
      title: "Linha Cardio",
      description: "Equipamentos de cardio de alta performance para treinos aeróbicos intensos. Esteiras, bicicletas e elípticos.",
      image: goldImage,
      link: "/linha-cardio",
      features: [
        "Esteiras profissionais",
        "Bicicletas ergométricas",
        "Elípticos e transport",
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Linhas de Produtos Premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipamentos desenvolvidos para diferentes perfis e necessidades, sempre mantendo 
            nossa excelência em qualidade e design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden group animate-in fade-in slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                <Badge className={`absolute top-4 left-4 text-white ${product.badgeColor || "bg-primary"}`}>
                  {product.badge}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link to={product.link}>Conferir</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
