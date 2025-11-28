import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Trash2, Send, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Orcamento = () => {
  const { items, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione equipamentos ao seu orçamento antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    const itemsList = items.map((item) => `- ${item.name} (${item.line})`).join("%0A");
    const message = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Dados de Contato:*%0ANome: ${encodeURIComponent(formData.name)}%0AE-mail: ${encodeURIComponent(formData.email)}%0ATelefone: ${encodeURIComponent(formData.phone)}%0ACidade: ${encodeURIComponent(formData.city)}%0A%0A*Equipamentos Selecionados:*%0A${itemsList}`;
    
    const whatsappUrl = `https://wa.me/5517997712913?text=${message}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Orçamento enviado!",
      description: "Você será redirecionado para o WhatsApp.",
    });
    
    clearCart();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background min-h-[80vh]">
          <div className="container mx-auto px-4">
            <Link to="/#linhas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Linhas
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <ShoppingCart className="w-8 h-8 text-primary" />
              <h1 className="font-heading text-3xl md:text-4xl font-bold">
                Carrinho de Orçamento
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Cart Items */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4">
                  Equipamentos Selecionados ({items.length})
                </h2>
                
                {items.length === 0 ? (
                  <div className="bg-card border border-border rounded-lg p-8 text-center">
                    <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Nenhum equipamento selecionado.
                    </p>
                    <Link to="/linha-platinum">
                      <Button variant="outline" className="mt-4">
                        Ver Equipamentos
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-card border border-border rounded-lg p-4 flex items-center gap-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.line}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4">
                  Suas Informações
                </h2>
                
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-6">
                    <Send className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Orcamento;
