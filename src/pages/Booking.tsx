import { useState } from "react";
import { Phone, MessageCircle, Send, MapPin, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const eventTypes = ["Wedding", "Pre-Wedding", "Engagement", "Event", "Other"];

const contactCards = [
  { icon: MapPin, title: "Visit Us", content: "123 Creative Studio, Metro Design Park, NY 10012" },
  { icon: Phone, title: "Call Us", content: "+91 98765 43210\n+91 91234 56789" },
  { icon: Mail, title: "Email Us", content: "hello@eternal-frames.com\nbookings@eternal-frames.com" },
  { icon: Clock, title: "Working Hours", content: "Mon - Sat: 10:00 AM - 7:00 PM\nSun: Closed" },
];

const Booking = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", date: "", eventType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", phone: "", date: "", eventType: "", message: "" });
  };

  return (
    <main className="pt-24 min-h-screen bg-background">
      
      {/* 1. TOP CONTACT INFO SECTION */}
      <section className="section-padding pb-10">
        <SectionHeading title="Let's Connect" subtitle="Reach out to us through any of our channels" />
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[var(--gold-glow)] flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon strokeWidth={1.5} size={32} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{card.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {card.content}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 2. QUOTE SECTION */}
      <section className="py-12 px-4 selection:bg-primary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-accent text-3xl md:text-4xl italic text-primary leading-relaxed tracking-wide mb-8">
              "Every love story deserves to be captured beautifully and remembered forever."
            </h2>
            <div className="gold-separator mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* 3 & 4. BOOKING FORM SECTION + SIDE PANEL */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* BOOKING FORM */}
            <AnimatedSection>
              <div className="mb-10 lg:mb-12">
                <h2 className="font-display text-3xl md:text-5xl gold-gradient-text mb-4">Book Your Shoot</h2>
                <p className="text-muted-foreground font-body text-sm md:text-base">Tell us about your special day and we'll create a custom plan for you.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-wider uppercase text-foreground/80 block">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-background/50 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-lg h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-wider uppercase text-foreground/80 block">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="bg-background/50 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-lg h-12"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs tracking-wider uppercase text-foreground/80 block">Event Date</label>
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="bg-background/50 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-lg h-12"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-body text-xs tracking-wider uppercase text-foreground/80 block">Event Type</label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, eventType: type })}
                        className={`font-body text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                          form.eventType === type
                            ? "bg-primary text-primary-foreground border-primary shadow-[var(--gold-glow)] scale-105"
                            : "border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs tracking-wider uppercase text-foreground/80 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background/50 border-border hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-lg min-h-[140px] resize-y"
                    placeholder="Tell us about your event, venue details, or any special requests..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-widest uppercase text-sm h-14 mt-4 shadow-lg hover:shadow-[var(--gold-glow)] transition-all">
                  <Send size={18} className="mr-3" /> Submit Inquiry
                </Button>
              </form>
            </AnimatedSection>

            {/* SIDE PANEL */}
            <AnimatedSection delay={0.2} className="h-full">
              <div className="space-y-6 lg:mt-32"> {/* Offset to align with form body visually */}
                
                {/* Contact Quick Buttons */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group shadow-sm hover:shadow-[var(--gold-glow)]"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                      <MessageCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground tracking-wide uppercase">WhatsApp</p>
                      <p className="text-muted-foreground text-xs mt-1">Instant Chat</p>
                    </div>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group shadow-sm hover:shadow-[var(--gold-glow)]"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground tracking-wide uppercase">Call Box</p>
                      <p className="text-muted-foreground text-xs mt-1">+91 98765 43210</p>
                    </div>
                  </a>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm h-[320px] md:h-[400px] w-full relative">
                  <iframe 
                    src="https://www.google.com/maps?q=Chennai&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(100%) opacity(0.8) contrast(1.2)" }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                    className="absolute inset-0 h-full w-full"
                  />
                  {/* Subtle overlay to blend map perfectly with theme */}
                  <div className="absolute inset-0 pointer-events-none border border-black/10 dark:border-white/10 rounded-2xl mix-blend-overlay" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. FINAL QUOTE */}
      <section className="py-12 px-4 mb-4">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="font-accent text-2xl md:text-3xl italic text-primary leading-relaxed tracking-wide">
              "The best investment you can make is preserving your most beautiful memories."
            </p>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
};

export default Booking;
