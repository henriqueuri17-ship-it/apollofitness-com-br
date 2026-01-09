import { Shield, Cpu, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Garantia estendida e suporte técnico especializado em todo território nacional. Tranquilidade total para seu investimento.",
    },
    {
      icon: Cpu,
      title: "Engenharia Nacional",
      description: "Tecnologia 100% brasileira, desenvolvida especificamente para as necessidades do mercado fitness nacional.",
    },
    {
      icon: Sparkles,
      title: "Materiais Premium",
      description: "Apenas materiais de primeira linha: aço inox, estruturas reforçadas e acabamentos de alta durabilidade.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-2xl md:text-5xl font-bold mb-2 md:mb-4">
            A escolha de profissionais exigentes
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Referência nacional em fabricação de equipamentos fitness premium, com mais de 15 anos 
            transformando projetos em academias de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-3 md:p-6">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-sm md:text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                  <CardDescription className="text-xs md:text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
