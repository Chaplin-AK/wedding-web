import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya & Rahul", text: "Absolutely breathtaking! Every photo captured our emotions perfectly.", location: "Mumbai" },
  { name: "Sarah & James", text: "The best decision we made for our wedding was hiring Eternal Frames.", location: "Delhi" },
  { name: "Anita & Vikram", text: "Our wedding album is a work of art. We relive the day every time we look at it.", location: "Bangalore" },
  { name: "Emma & David", text: "Incredible eye for detail. They captured moments we didn't even notice.", location: "Goa" },
  { name: "Meera & Arjun", text: "Professional, creative, and so easy to work with. Highly recommend!", location: "Jaipur" },
  { name: "Lisa & Michael", text: "The cinematic style is exactly what we dreamed of. Pure magic.", location: "Pune" },
  { name: "Kavya & Siddharth", text: "They made us feel so comfortable, the candid shots are priceless.", location: "Chennai" },
  { name: "Nina & Alex", text: "Every single guest complimented our wedding photos. Worth every penny.", location: "Udaipur" },
  { name: "Riya & Dev", text: "The drone shots of our venue were absolutely stunning and cinematic.", location: "Kerala" },
  { name: "Sophia & Rohan", text: "Our pre-wedding shoot was the most fun experience. Amazing team!", location: "Shimla" },
  { name: "Aisha & Kabir", text: "They captured the essence of our love story beautifully.", location: "Hyderabad" },
  { name: "Maya & Chris", text: "Professional from start to finish. The final album exceeded all expectations.", location: "Kolkata" },
];

const TestimonialCard = ({ name, text, location }: { name: string; text: string; location: string }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-card border border-border rounded-lg p-6 mx-3">
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground/80 font-accent text-lg italic leading-relaxed mb-4">"{text}"</p>
    <div>
      <p className="text-primary font-display text-sm">{name}</p>
      <p className="text-muted-foreground text-xs font-body">{location}</p>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div className="testimonial-track flex">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
