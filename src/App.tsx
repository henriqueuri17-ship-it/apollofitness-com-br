import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import LinhaPlatinum from "./pages/LinhaPlatinum";
import LinhaGold from "./pages/LinhaGold";
import PesoLivre from "./pages/PesoLivre";
import LinhaArticulados from "./pages/LinhaArticulados";
import LinhaProDiamond from "./pages/LinhaProDiamond";
import LinhaCardio from "./pages/LinhaCardio";
import Catalogo from "./pages/Catalogo";
import Orcamento from "./pages/Orcamento";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Disable right-click context menu on images
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/linha-platinum" element={<LinhaPlatinum />} />
              <Route path="/linha-gold" element={<LinhaGold />} />
              <Route path="/peso-livre" element={<PesoLivre />} />
              <Route path="/linha-articulados" element={<LinhaArticulados />} />
              <Route path="/linha-pro-diamond" element={<LinhaProDiamond />} />
              <Route path="/linha-cardio" element={<LinhaCardio />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/orcamento" element={<Orcamento />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
