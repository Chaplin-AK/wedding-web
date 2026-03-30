import { Camera, Heart, Gem, PartyPopper, Plane } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Full-day coverage of your wedding with candid, cinematic, and traditional styles combined." },
  { icon: Heart, title: "Pre-Wedding Shoot", desc: "Romantic pre-wedding sessions at stunning locations to capture your love story before the big day." },
  { icon: Gem, title: "Engagement Shoot", desc: "Beautiful engagement photography to celebrate and announce your commitment to each other." },
  { icon: PartyPopper, title: "Event Coverage", desc: "Professional coverage for receptions, sangeets, mehndi ceremonies, and all wedding-related events." },
  { icon: Plane, title: "Drone Shoot", desc: "Breathtaking aerial photography and videography to capture your venue and celebrations from above." },
];

const Services = () => (
  <main className="pt-24">
    <section className="section-padding">
      <SectionHeading title="Our Services" subtitle="Comprehensive photography solutions for every moment of your wedding journey" />
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection className="text-center mt-16">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider uppercase text-sm px-10">
          <Link to="/booking">Get a Custom Quote</Link>
        </Button>
      </AnimatedSection>
    </section>
  </main>
);

export default Services;
