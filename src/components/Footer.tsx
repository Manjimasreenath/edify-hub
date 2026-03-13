import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-primary-foreground relative">
      {/* Back to top */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1, y: -2 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-glow"
      >
        <ArrowUp className="w-5 h-5 text-accent-foreground" />
      </motion.a>

      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold font-display mb-2">Bucket List</h3>
            <p className="text-sm text-primary-foreground/50 mb-4">Future School & Holidays Pvt. Ltd.</p>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Shaping the next generation of travel professionals and entrepreneurs in Kerala.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-primary-foreground/70">Quick Links</h4>
            <div className="space-y-2.5">
              {["About", "Programs", "Why Us", "Admissions", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-primary-foreground/70">Programs</h4>
            <div className="space-y-2.5">
              <p className="text-sm text-primary-foreground/50">Travel & Tourism Business</p>
              <p className="text-sm text-primary-foreground/50">Tourism & Hotel Management</p>
              <p className="text-sm text-primary-foreground/50">BTS / BATS / BAVTM / MTTM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} Bucketlist Future School & Holidays Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/35 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent fill-accent" /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
