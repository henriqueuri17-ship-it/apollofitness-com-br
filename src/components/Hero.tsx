import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/banners/banner-1.png";
import banner2 from "@/assets/banners/banner-2.png";
import banner3 from "@/assets/banners/banner-3.png";
import banner4 from "@/assets/banners/banner-4.png";
import banner5 from "@/assets/banners/banner-5.png";

const banners = [
  { src: banner1, alt: "Aparelhos de academia Apollo Fitness em academia profissional equipada" },
  { src: banner2, alt: "Linha de musculação Apollo Fitness com acabamento premium" },
  { src: banner3, alt: "Equipamentos de peso livre e racks Apollo Fitness" },
  { src: banner4, alt: "Equipamentos de cardio Apollo Fitness: esteira e bike de spinning" },
  { src: banner5, alt: "Academia completa equipada com aparelhos Apollo Fitness" },
];

export const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-auto object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-primary scale-125"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Ir para banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
