import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/CartButton";
import apolloLogo from "@/assets/apollo-logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Linhas", href: "#linhas" },
  { label: "Catálogo", href: "/catalogo", isRoute: true },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contatos", href: "#contatos" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5517997712913";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Acabei%20de%20ver%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img src={apolloLogo} alt="Apollo Fitness" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <CartButton />
            <Button size="sm" className="gap-2" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartButton />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="gap-2 w-full mt-2" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
