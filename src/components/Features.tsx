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
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            A escolha de profissionais exigentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Referência nacional em fabricação de equipamentos fitness premium, com mais de 15 anos 
            transformando projetos em academias de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
