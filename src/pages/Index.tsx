import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import InstagramShowcase from "@/components/InstagramShowcase";
import { Button } from "@/components/ui/button";

const portfolioImages = [
  { src: p1, alt: "Bridal portrait", className: "row-span-2" },
  { src: p2, alt: "Pre-wedding couple" },
  { src: p3, alt: "Wedding ceremony" },
  { src: p4, alt: "First dance", className: "row-span-2" },
  { src: p5, alt: "Engagement ring" },
  { src: p6, alt: "Bridal party" },
  { src: heroImage, alt: "Cinematic wedding preview" },
  { src: p8, alt: "Wedding reception" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Cinematic wedding photography" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-accent text-primary text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
          >
            Wedding Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl gold-gradient-text leading-tight mb-6"
          >
            Capturing Love Stories That Last Forever
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/70 font-body text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            We turn your special moments into timeless memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider uppercase text-sm px-8">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-body tracking-wider uppercase text-sm px-8">
              <Link to="/booking">Book Now</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <SectionHeading title="Our Work" subtitle="A glimpse into the love stories we've had the privilege to capture" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {portfolioImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className={`overflow-hidden rounded-lg group ${img.className || ""}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-body tracking-wider uppercase text-sm">
            <Link to="/portfolio">
              View Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Instagram Showcase */}
      <InstagramShowcase />

      {/* Testimonials */}
      <section className="section-padding bg-card/50">
        <SectionHeading title="Love Notes" subtitle="What our couples say about their experience" />
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl gold-gradient-text mb-6">
            Let's Capture Your Special Day
          </h2>
          <div className="gold-separator mb-6" />
          <p className="text-muted-foreground font-body mb-10">
            Every love story deserves to be told beautifully. Let us be part of yours.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider uppercase text-sm px-10">
            <Link to="/booking">Book Your Shoot</Link>
          </Button>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;
