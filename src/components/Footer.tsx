import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-lg md:text-2xl font-bold mb-2 md:mb-4 text-primary">Apollo Fitness Equipamentos</h3>
            <p className="text-xs md:text-base text-muted-foreground mb-4">
              Equipamentos premium para academias profissionais. Mais de 15 anos transformando 
              projetos em realidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm md:text-lg font-semibold mb-2 md:mb-4">Contato</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-base">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>(17) 99771-2913</span>
              </li>
              <li className="flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-base">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="truncate">contato@apollofitness.com.br</span>
              </li>
              <li className="flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-base">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>São José do Rio Preto, SP</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm md:text-lg font-semibold mb-2 md:mb-4">Informações</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/catalogo" className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Catálogo de Produtos
                </Link>
              </li>
              <li>
                <Link to="/linha-platinum" className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Linhas de Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/orcamento" className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5517997712913?text=Acabei%20de%20ver%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 md:pt-8 border-t border-border text-center text-muted-foreground text-xs md:text-sm">
          <p>© 2024 Apollo Fitness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};