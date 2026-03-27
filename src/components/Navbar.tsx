import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-lg shadow-elevated py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="BucketList Future School" className="h-11 w-auto rounded-lg shadow-card" />
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-display font-bold text-base leading-tight block">BucketList</span>
            <span className="text-primary-foreground/50 text-[10px] tracking-widest uppercase">Future School</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-primary-foreground/70 hover:text-primary-foreground font-medium transition-colors text-sm tracking-wide px-4 py-2 rounded-lg hover:bg-primary-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917559944728"
            className="flex items-center gap-2 bg-gold-gradient text-accent-foreground ml-4 px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-glow transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-dark/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 py-3 px-4 rounded-lg font-medium text-lg transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+917559944728"
                className="flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-5 py-3 rounded-full font-semibold mt-4"
              >
                <Phone className="w-4 h-4" />
                +91 7559944728
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
