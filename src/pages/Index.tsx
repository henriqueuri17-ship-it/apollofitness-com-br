import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";

import { HowToQuote } from "@/components/HowToQuote";
import { ProductLines } from "@/components/ProductLines";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Page principal
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <TrustBadges />
      
      <HowToQuote />
      <section id="linhas">
        <ProductLines />
      </section>
      <section id="orcamento">
        <CTASection />
      </section>
      <section id="contatos">
        <Footer />
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
