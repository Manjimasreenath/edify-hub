import { GraduationCap, FileText, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="section-padding bg-primary-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-primary-foreground/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-primary-foreground/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container mx-auto relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-4 py-1.5 mb-4 border border-accent/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold tracking-widest uppercase text-xs">Admissions</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6 font-display">
            Start Your Journey <span className="text-accent">Today</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Limited seats available for the 2026-27 batch. Apply now and take the first step toward your dream career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: GraduationCap, title: "Eligibility", desc: "+2 & Above or Any Degree. Open to Plus Two students, Graduates, Job Seekers, and Entrepreneurs." },
            { icon: FileText, title: "Registration", desc: "Simple registration process. Visit our campus or register online. Limited seats available per batch." },
            { icon: Clock, title: "Duration", desc: "1 Year comprehensive program including internship and practical industry exposure." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="relative bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-all overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5 relative z-10"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <item.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3 font-display relative z-10">{item.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-10 py-4 rounded-full font-bold text-lg shadow-glow transition-shadow"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
