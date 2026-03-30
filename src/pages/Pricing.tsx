import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic",
    price: "₹25,000",
    features: ["4 Hours Coverage", "200+ Edited Photos", "Online Gallery", "1 Photographer", "Digital Delivery"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹50,000",
    features: ["8 Hours Coverage", "500+ Edited Photos", "Online Gallery", "2 Photographers", "Wedding Album (30 pages)", "Highlight Video (3 min)", "Pre-Wedding Shoot"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹1,00,000",
    features: ["Full Day Coverage", "1000+ Edited Photos", "Online Gallery", "2 Photographers + Videographer", "Premium Album (50 pages)", "Full Wedding Film", "Pre-Wedding Shoot", "Drone Coverage", "Same-Day Edit"],
    highlighted: false,
  },
];

const Pricing = () => (
  <main className="pt-24">
    <section className="section-padding">
      <SectionHeading title="Pricing" subtitle="Choose the perfect package for your special day" />
      <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-5xl">
        {packages.map((pkg, i) => (
          <AnimatedSection key={pkg.name} delay={i * 0.15}>
            <div
              className={`relative rounded-lg p-8 border h-full flex flex-col ${
                pkg.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/10 to-card shadow-[var(--gold-glow)]"
                  : "border-border bg-card"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
                <p className="font-display text-3xl gold-gradient-text">{pkg.price}</p>
              </div>
              <div className="flex-1 space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-body text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className={`w-full font-body tracking-wider uppercase text-sm ${
                  pkg.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-transparent border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                <Link to="/booking">Choose {pkg.name}</Link>
              </Button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </main>
);

export default Pricing;
