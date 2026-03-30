import { Camera, Film, Heart } from "lucide-react";
import photographer from "@/assets/photographer.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const styles = [
  { icon: Camera, title: "Candid", desc: "Natural, unposed moments that tell the real story of your day." },
  { icon: Film, title: "Cinematic", desc: "Dramatic compositions with beautiful light and depth." },
  { icon: Heart, title: "Traditional", desc: "Classic portraits and family photos that stand the test of time." },
];

const About = () => (
  <main className="pt-24">
    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="overflow-hidden rounded-lg">
            <img src={photographer} alt="Photographer" className="w-full object-cover aspect-[3/4]" loading="lazy" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="font-accent text-primary text-lg tracking-[0.2em] uppercase mb-3">About Me</p>
          <h1 className="font-display text-3xl md:text-5xl gold-gradient-text mb-6">The Story Behind the Lens</h1>
          <div className="gold-separator !mx-0 mb-6" />
          <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              With over 5 years of experience capturing weddings across India, I've had the privilege of documenting hundreds of beautiful love stories.
            </p>
            <p>
              My approach blends candid storytelling with cinematic artistry — creating images that don't just show what happened, but how it felt.
            </p>
            <p>
              Every wedding is unique, and I believe your photos should reflect the genuine emotions, spontaneous laughter, and quiet intimate moments that make your day truly yours.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-8">
            {[["500+", "Weddings"], ["5+", "Years"], ["1000+", "Happy Couples"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl text-primary">{num}</p>
                <p className="text-muted-foreground text-xs font-body">{label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-card/50">
      <SectionHeading title="My Style" subtitle="A blend of three approaches to capture every dimension of your day" />
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {styles.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.15}>
            <div className="text-center p-8 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <s.icon size={36} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </main>
);

export default About;
