import { Award, Factory, Shield } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Factory,
      label: "15+ anos no mercado",
    },
    {
      icon: Award,
      label: "+2000 academias equipadas",
    },
    {
      icon: Shield,
      label: "Garantia estendida",
    },
  ];

  return (
    <section className="py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-heading text-lg font-semibold">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
