import { ShoppingCart, MousePointerClick, ClipboardList, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    step: "1",
    title: "Navegue pelas Linhas",
    description: "Acesse a linha de equipamentos desejada (Platinum, Gold ou Peso Livre) e veja todos os produtos disponíveis.",
  },
  {
    icon: ShoppingCart,
    step: "2",
    title: "Adicione ao Carrinho",
    description: "Clique em \"Adicionar\" nos equipamentos que deseja incluir no seu orçamento.",
  },
  {
    icon: ClipboardList,
    step: "3",
    title: "Preencha seus Dados",
    description: "No carrinho de orçamento, informe seu nome, e-mail, telefone e cidade.",
  },
  {
    icon: MessageCircle,
    step: "4",
    title: "Receba pelo WhatsApp",
    description: "Envie sua solicitação e nossa equipe entrará em contato com o orçamento personalizado.",
  },
];

export const HowToQuote = () => {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-heading text-xl md:text-4xl font-bold mb-2 md:mb-4">
            Como Solicitar seu Orçamento
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            Siga os passos abaixo para montar seu orçamento de forma rápida e fácil
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-xl p-3 md:p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                {item.step}
              </div>
              <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-2 md:mb-4 mt-1 md:mt-2 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xs md:text-lg mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
