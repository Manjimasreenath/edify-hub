import { ArrowRight, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Students exploring the world"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" as const }}
        />
        <div className="absolute inset-0 bg-primary-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-primary-dark/50" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20 rounded-full border border-accent/20 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-14 h-14 rounded-full border border-gold/15 hidden lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-accent/20"
          >
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wide">Admissions Open 2026-27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-7"
          >
            Two Paths.{" "}
            <br className="hidden md:block" />
            <span className="text-accent">One Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed"
          >
            Build your Travel Business or Shine in Global Hospitality. Your journey starts here at Bucket List Future School & Holidays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-glow transition-shadow"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-foreground/5 backdrop-blur-sm transition-all"
            >
              <Globe className="w-5 h-5" />
              Contact Us
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-10 mt-20"
          >
            {[
              { number: "100%", label: "Placement Assistance" },
              { number: "1 Year", label: "Diploma Programs" },
              { number: "Govt.", label: "Approved (NSDC)" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent font-display">{stat.number}</div>
                <div className="text-xs md:text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
