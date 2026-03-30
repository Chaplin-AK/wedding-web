import { useState, useEffect } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

// Extended slightly if needed, but 5 covers the typical display (2 left, 1 center, 2 right)
const instagramImages = [p1, p3, p4, p5, p6];

const InstagramShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play sliding logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % instagramImages.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + instagramImages.length) % instagramImages.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % instagramImages.length);
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden bg-background relative">
      <AnimatedSection className="text-center mb-16 relative z-20">
        <h2 className="font-display text-4xl gold-gradient-text tracking-wider mb-4">Follow Our Journey</h2>
        <a 
          href="https://instagram.com/yourphotographyhandle" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-foreground/70 text-lg hover:text-primary transition-colors hover:underline underline-offset-4 group"
        >
          <Instagram size={20} className="group-hover:text-primary transition-colors" /> @yourphotographyhandle
        </a>
      </AnimatedSection>

      {/* Main Slider Container */}
      <div 
        className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center mt-8 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {instagramImages.map((img, i) => {
          // Circular diff calculation to wrap elements seamlessly
          const len = instagramImages.length;
          let diff = i - activeIndex;
          if (diff > Math.floor(len / 2)) diff -= len;
          if (diff < -Math.floor(len / 2)) diff += len;
          
          const isCenter = diff === 0;
          
          return (
            <div
              key={i}
              className="absolute w-[240px] h-[320px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden transition-all duration-700 ease-out shadow-2xl"
              style={{
                zIndex: 30 - Math.abs(diff) * 10,
                transform: `translateX(${diff * 60}%) scale(${1 - Math.abs(diff) * 0.15}) rotate(${diff * 2}deg)`,
                opacity: isCenter ? 1 : Math.max(0, 1 - Math.abs(diff) * 0.3),
                filter: isCenter ? "none" : `blur(${Math.abs(diff) * 3}px)`,
                boxShadow: isCenter ? "var(--gold-glow-strong)" : "none",
                pointerEvents: isCenter ? "auto" : "none", // Avoid hovering background cards
              }}
            >
              <img src={img} alt={`Instagram image ${i}`} className="w-full h-full object-cover" />
              
              {/* Overlay with CTA */}
              <div 
                className={`absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
                  isCenter ? "opacity-0 hover:opacity-100" : "opacity-0"
                }`}
              >
                <Button asChild className="bg-primary text-primary-foreground font-body tracking-wider uppercase scale-90 hover:scale-100 transition-transform shadow-[var(--gold-glow)]">
                  <a href="https://instagram.com/yourphotographyhandle" target="_blank" rel="noopener noreferrer">
                    View on Instagram
                  </a>
                </Button>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between px-8 max-w-6xl mx-auto pointer-events-none z-40">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-background pointer-events-auto transition-all shadow-[var(--gold-glow)]"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-background pointer-events-auto transition-all shadow-[var(--gold-glow)]"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
