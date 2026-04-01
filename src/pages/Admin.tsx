import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LogOut, Search, Download, Eye, ShoppingCart, Clock } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Quote = Tables<"quotes">;
type QuoteItem = Tables<"quote_items">;

const statusLabels: Record<string, string> = {
  novo: "Novo",
  em_contato: "Em Contato",
  negociacao: "Negociação",
  fechado: "Fechado",
  perdido: "Perdido",
};

const statusColors: Record<string, string> = {
  novo: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  em_contato: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  negociacao: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  fechado: "bg-green-500/20 text-green-400 border-green-500/30",
  perdido: "bg-red-500/20 text-red-400 border-red-500/30",
};

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"quotes" | "abandoned">("quotes");
  const [abandonedCarts, setAbandonedCarts] = useState<Tables<"abandoned_carts">[]>([]);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchQuotes();
      fetchAbandonedCarts();
    }
  }, [isAdmin]);

  const fetchQuotes = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });
    setQuotes(data || []);
    setLoading(false);
  };

  const fetchAbandonedCarts = async () => {
    const { data } = await supabase
      .from("abandoned_carts")
      .select("*")
      .order("created_at", { ascending: false });
    setAbandonedCarts(data || []);
  };

  const openQuote = async (quote: Quote) => {
    setSelectedQuote(quote);
    const { data } = await supabase
      .from("quote_items")
      .select("*")
      .eq("quote_id", quote.id);
    setQuoteItems(data || []);
  };

  const updateStatus = async (quoteId: string, newStatus: string) => {
    await supabase
      .from("quotes")
      .update({ status: newStatus as Quote["status"] })
      .eq("id", quoteId);
    fetchQuotes();
    if (selectedQuote?.id === quoteId) {
      setSelectedQuote((prev) => prev ? { ...prev, status: newStatus as Quote["status"] } : null);
    }
  };

  const exportCSV = () => {
    const headers = ["Nome", "Telefone", "E-mail", "Cidade", "Estado", "Status", "Data"];
    const rows = filteredQuotes.map((q) => [
      q.name, q.phone, q.email, q.city, q.state || "", statusLabels[q.status], new Date(q.created_at).toLocaleString("pt-BR"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orcamentos_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch =
      !search ||
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.email.toLowerCase().includes(search.toLowerCase()) ||
      q.phone.includes(search);
    const matchesStatus = statusFilter === "all" || q.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><p>Carregando...</p></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold">Painel Apollo Fitness</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <Button variant="ghost" size="sm" onClick={() => { signOut(); navigate("/"); }}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "quotes" ? "default" : "outline"}
            onClick={() => setActiveTab("quotes")}
          >
            <ShoppingCart className="w-4 h-4 mr-2" /> Orçamentos ({quotes.length})
          </Button>
          <Button
            variant={activeTab === "abandoned" ? "default" : "outline"}
            onClick={() => setActiveTab("abandoned")}
          >
            <Clock className="w-4 h-4 mr-2" /> Abandonados ({abandonedCarts.length})
          </Button>
        </div>

        {activeTab === "quotes" && (
          <>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome, e-mail ou telefone..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="novo">Novo</SelectItem>
                  <SelectItem value="em_contato">Em Contato</SelectItem>
                  <SelectItem value="negociacao">Negociação</SelectItem>
                  <SelectItem value="fechado">Fechado</SelectItem>
                  <SelectItem value="perdido">Perdido</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={exportCSV}>
                <Download className="w-4 h-4 mr-2" /> Exportar CSV
              </Button>
            </div>

            {/* Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium">Nome</th>
                      <th className="text-left px-4 py-3 font-medium">Telefone</th>
                      <th className="text-left px-4 py-3 font-medium">E-mail</th>
                      <th className="text-left px-4 py-3 font-medium">Cidade</th>
                      <th className="text-left px-4 py-3 font-medium">Status</th>
                      <th className="text-left px-4 py-3 font-medium">Data</th>
                      <th className="text-left px-4 py-3 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQuotes.map((quote) => (
                      <tr key={quote.id} className="border-t border-border hover:bg-muted/10">
                        <td className="px-4 py-3 font-medium">{quote.name}</td>
                        <td className="px-4 py-3">{quote.phone}</td>
                        <td className="px-4 py-3">{quote.email}</td>
                        <td className="px-4 py-3">{quote.city}</td>
                        <td className="px-4 py-3">
                          <Select
                            value={quote.status}
                            onValueChange={(v) => updateStatus(quote.id, v)}
                          >
                            <SelectTrigger className={`h-7 text-xs border ${statusColors[quote.status]} w-[130px]`}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(statusLabels).map(([k, v]) => (
                                <SelectItem key={k} value={k}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(quote.created_at).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="sm" onClick={() => openQuote(quote)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {filteredQuotes.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                          Nenhum orçamento encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === "abandoned" && (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium">E-mail</th>
                    <th className="text-left px-4 py-3 font-medium">Nome</th>
                    <th className="text-left px-4 py-3 font-medium">Itens</th>
                    <th className="text-left px-4 py-3 font-medium">Lembrete</th>
                    <th className="text-left px-4 py-3 font-medium">Recuperado</th>
                    <th className="text-left px-4 py-3 font-medium">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {abandonedCarts.map((cart) => {
                    const items = Array.isArray(cart.items) ? cart.items : [];
                    return (
                      <tr key={cart.id} className="border-t border-border hover:bg-muted/10">
                        <td className="px-4 py-3">{cart.email}</td>
                        <td className="px-4 py-3">{cart.name || "—"}</td>
                        <td className="px-4 py-3">{items.length} equipamentos</td>
                        <td className="px-4 py-3">
                          <Badge variant={cart.reminder_sent ? "default" : "outline"}>
                            {cart.reminder_sent ? "Enviado" : "Pendente"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={cart.recovered ? "default" : "secondary"}>
                            {cart.recovered ? "Sim" : "Não"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(cart.created_at).toLocaleDateString("pt-BR")}
                        </td>
                      </tr>
                    );
                  })}
                  {abandonedCarts.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                        Nenhum carrinho abandonado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Quote Detail Dialog */}
      <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Orçamento — {selectedQuote?.name}</DialogTitle>
          </DialogHeader>
          {selectedQuote && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nome</p>
                  <p className="font-medium">{selectedQuote.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium">{selectedQuote.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium">{selectedQuote.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cidade / Estado</p>
                  <p className="font-medium">{selectedQuote.city} {selectedQuote.state && `/ ${selectedQuote.state}`}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="font-medium">{new Date(selectedQuote.created_at).toLocaleString("pt-BR")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Select
                    value={selectedQuote.status}
                    onValueChange={(v) => updateStatus(selectedQuote.id, v)}
                  >
                    <SelectTrigger className={`h-8 text-xs border ${statusColors[selectedQuote.status]}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(statusLabels).map(([k, v]) => (
                        <SelectItem key={k} value={k}>{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold mb-3">Equipamentos ({quoteItems.length})</h3>
                <div className="space-y-3">
                  {quoteItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 bg-muted/20 rounded-lg p-3">
                      {item.equipment_image && (
                        <img src={item.equipment_image} alt={item.equipment_name} className="w-14 h-14 object-cover rounded pointer-events-auto" />
                      )}
                      <div>
                        <p className="font-medium">{item.equipment_name}</p>
                        <p className="text-sm text-muted-foreground">{item.equipment_line}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
