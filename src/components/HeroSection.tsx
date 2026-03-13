import { ArrowRight, GraduationCap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Students exploring the world" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-primary-dark/40" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-20 h-20 rounded-full bg-accent/20 animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-16 w-14 h-14 rounded-full bg-gold/20 animate-float hidden lg:block" style={{ animationDelay: "1s" }} />

      <div className="relative container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wide">Admissions Open 2026-27</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Two Paths.{" "}
            <span className="text-accent">One Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Build your Travel Business or Shine in Global Hospitality. Your journey starts here at Bucket List Future School & Holidays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all hover:scale-105"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <Globe className="w-5 h-5" />
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { number: "100%", label: "Placement Assistance" },
              { number: "1 Year", label: "Diploma Programs" },
              { number: "Govt.", label: "Approved (NSDC)" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent font-display">{stat.number}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
