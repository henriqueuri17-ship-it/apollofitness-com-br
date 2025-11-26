import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Features } from "@/components/Features";
import { ProductLines } from "@/components/ProductLines";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Features />
      <ProductLines />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
