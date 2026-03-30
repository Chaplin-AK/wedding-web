import { BookHeart, Film, Users, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: BookHeart,
    title: "Creative Storytelling",
    description: "We capture authentic emotions and weave them into a beautiful, timeless narrative.",
  },
  {
    icon: Film,
    title: "Cinematic Editing",
    description: "Every frame is meticulously graded and edited to resemble a luxury romantic film.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our experienced photographers work seamlessly without disrupting your special moments.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We value your time, ensuring your precious memories are delivered exactly when promised.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose Us" subtitle="The hallmarks of our luxury wedding photography experience" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--gold-glow)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon strokeWidth={1.5} size={32} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
