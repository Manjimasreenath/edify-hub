import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-md shadow-elevated py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Bucket List Future School" className="h-12 w-auto rounded-lg" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent font-medium transition-colors text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917559944728"
            className="flex items-center gap-2 bg-gold-gradient text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-glow transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary-dark/98 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-accent py-2 font-medium text-lg border-b border-primary/30"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917559944728"
              className="flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-5 py-3 rounded-full font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              +91 7559944728
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
