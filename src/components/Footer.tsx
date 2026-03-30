import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl gold-gradient-text mb-4">Eternal Frames</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Capturing love stories that last forever. Premium wedding photography for your most cherished moments.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Portfolio", "About", "Services", "Pricing", "Booking"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm font-body hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-4 text-muted-foreground text-sm font-body">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>hello@eternalframes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-separator mt-12 mb-6" />
        <p className="text-center text-muted-foreground text-xs font-body tracking-wider">
          © {new Date().getFullYear()} Eternal Frames. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
