import AnimatedSection from "./AnimatedSection";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-16">
    <h2 className="font-display text-3xl md:text-5xl gold-gradient-text mb-4">{title}</h2>
    <div className="gold-separator mb-4" />
    {subtitle && <p className="text-muted-foreground font-body text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
