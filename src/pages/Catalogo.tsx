import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import capa from "@/assets/catalogo/capa.png";
import platinumCapa from "@/assets/catalogo/platinum-capa.png";
import page03 from "@/assets/catalogo/page-03.png";
import page04 from "@/assets/catalogo/page-04.png";
import page05 from "@/assets/catalogo/page-05.png";
import page06 from "@/assets/catalogo/page-06.png";
import page07 from "@/assets/catalogo/page-07.png";
import page08 from "@/assets/catalogo/page-08.png";
import page09 from "@/assets/catalogo/page-09.png";
import page10 from "@/assets/catalogo/page-10.png";
import page11 from "@/assets/catalogo/page-11.png";
import page12 from "@/assets/catalogo/page-12.png";
import page13 from "@/assets/catalogo/page-13.png";
import page14 from "@/assets/catalogo/page-14.png";
import page15 from "@/assets/catalogo/page-15.png";
import page16 from "@/assets/catalogo/page-16.png";
import page17 from "@/assets/catalogo/page-17.png";
import page18 from "@/assets/catalogo/page-18.png";
import page19 from "@/assets/catalogo/page-19.png";
import page20 from "@/assets/catalogo/page-20.png";
import page21 from "@/assets/catalogo/page-21.png";
import page22 from "@/assets/catalogo/page-22.png";
import page23 from "@/assets/catalogo/page-23.png";
import page24 from "@/assets/catalogo/page-24.png";
import page25 from "@/assets/catalogo/page-25.png";
import page26 from "@/assets/catalogo/page-26.png";
import page27 from "@/assets/catalogo/page-27.png";
import page28 from "@/assets/catalogo/page-28.png";
import page29 from "@/assets/catalogo/page-29.png";
import page30 from "@/assets/catalogo/page-30.png";

const pages = [
  capa,
  platinumCapa,
  page03,
  page04,
  page05,
  page06,
  page07,
  page08,
  page09,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
  page24,
  page25,
  page26,
  page27,
  page28,
  page29,
  page30,
];

const Catalogo = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(pages.length - 1, p + 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
              Catálogo 2026
            </h1>
            <p className="text-muted-foreground text-center mb-6">
              Página {currentPage + 1} de {pages.length}
            </p>

            {/* Catalog viewer */}
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                disabled={currentPage === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur rounded-full p-2 border border-border shadow-lg disabled:opacity-30 hover:bg-accent transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentPage === pages.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur rounded-full p-2 border border-border shadow-lg disabled:opacity-30 hover:bg-accent transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Page image */}
              <div className="rounded-lg overflow-hidden shadow-2xl border border-border">
                <img
                  src={pages[currentPage]}
                  alt={`Catálogo página ${currentPage + 1}`}
                  className="w-full h-auto select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-6 overflow-x-auto pb-2 max-w-5xl mx-auto justify-center flex-wrap">
              {pages.map((page, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`flex-shrink-0 rounded border-2 overflow-hidden transition-all ${
                    i === currentPage
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={page}
                    alt={`Página ${i + 1}`}
                    className="w-20 h-12 md:w-28 md:h-16 object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
