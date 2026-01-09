import { Award, Factory, Shield } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Factory,
      label: "15+ anos no mercado",
    },
    {
      icon: Award,
      label: "+800 academias equipadas",
    },
    {
      icon: Shield,
      label: "Garantia estendida",
    },
  ];

  return (
    <section className="py-6 md:py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <span className="font-heading text-xs md:text-lg font-semibold text-center">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
