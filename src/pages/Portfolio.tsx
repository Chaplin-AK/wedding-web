import { useState } from "react";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import heroImage from "@/assets/hero-wedding.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["Photography", "Videography"];

const images = [
  { src: p1, alt: "Bridal portrait" },
  { src: p2, alt: "Couple in garden" },
  { src: p3, alt: "Ring exchange" },
  { src: p4, alt: "First dance" },
  { src: p5, alt: "Engagement ring" },
  { src: p6, alt: "Bridal party" },
  { src: heroImage, alt: "Cinematic wedding" },
  { src: p8, alt: "Reception setup" },
  { src: p2, alt: "Candid moment" },
  { src: p6, alt: "Event details" },
  { src: p1, alt: "Groom portrait" },
  { src: p4, alt: "Family portrait" },
];

const videos = [
  { type: 'reel', title: 'Cinematic Teaser', thumbnail: p1 },
  { type: 'landscape', title: 'Full Wedding Highlight', thumbnail: p2 },
  { type: 'reel', title: 'Pre-Wedding Shoot', thumbnail: p3 },
  { type: 'landscape', title: 'Reception Party', thumbnail: p4 },
  { type: 'reel', title: 'Mehendi Ceremony', thumbnail: p5 },
  { type: 'landscape', title: 'Engagement Details', thumbnail: p8 },
  { type: 'reel', title: 'Sangeet Highlights', thumbnail: p6 },
  { type: 'landscape', title: 'Haldi Ceremony', thumbnail: heroImage },
];

const Portfolio = () => {
  const [active, setActive] = useState("Photography");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<{title: string, type: string, thumbnail: string} | null>(null);

  return (
    <main className="pt-24 min-h-screen">
      <section className="section-padding">
        <SectionHeading title="Portfolio" subtitle="Browse through our collection of beautiful love stories" />

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full border transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--gold-glow)]"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {active === "Photography" ? (
          <div className="container mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <AnimatedSection key={`photo-${i}`} delay={i * 0.05}>
                <div
                  className="overflow-hidden rounded-xl cursor-pointer group break-inside-avoid relative"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px] grid-flow-row-dense">
            {videos.map((vid, i) => (
              <AnimatedSection
                key={`video-${i}`}
                delay={i * 0.05}
                className={`group relative overflow-hidden rounded-xl cursor-pointer border border-border/50 shadow-lg ${
                  vid.type === 'landscape' ? 'col-span-1 sm:col-span-2 row-span-1' : 'col-span-1 sm:col-span-1 row-span-2 h-full'
                }`}
              >
                <div className="w-full h-full" onClick={() => setVideoModal(vid)}>
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 text-primary-foreground backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="ml-1" size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-white font-display text-xl tracking-wide">{vid.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary z-50" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Full view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl relative z-40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setVideoModal(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary z-50 transition-colors" onClick={() => setVideoModal(null)}>
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`relative bg-card rounded-2xl overflow-hidden border border-border flex items-center justify-center shadow-[var(--gold-glow-strong)] ${
                videoModal.type === 'reel' ? 'w-full max-w-[400px] aspect-[9/16]' : 'w-full max-w-5xl aspect-video'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background blur from thumbnail */}
              <div 
                className="absolute inset-0 opacity-20 blur-3xl scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${videoModal.thumbnail})`, backgroundSize: 'cover' }}
              />

              <div className="relative z-10 text-center p-8 max-w-sm mx-auto">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Play className="w-10 h-10 text-primary opacity-80 ml-1" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">{videoModal.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">Video preview is currently unavailable for this project.</p>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-[0.2em] font-body uppercase">
                  Coming Soon
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
