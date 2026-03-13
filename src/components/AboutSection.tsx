import { Target, Eye, Award, Users, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold tracking-widest uppercase text-xs">About Us</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            Shaping the Future of{" "}
            <span className="text-gradient">Travel Professionals</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bucketlist Future School Pvt Ltd, the education division of Bucketlist Holidays, offers industry-focused training in travel, tourism, hospitality, and hotel management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower the next generation of travel entrepreneurs and world-class hospitality professionals by providing industry-focused education, practical training, and real business exposure.", color: "primary" },
            { icon: Eye, title: "Our Vision", desc: "To establish Bucketlist Future School as a premier travel hub in Kerala, cultivating highly qualified travel entrepreneurs and world-class hospitality professionals.", color: "accent" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="relative glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={i + 1}
              whileHover={{ y: -5 }}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.color === "primary" ? "bg-primary-gradient" : "bg-gold-gradient"} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Corner decoration */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full ${item.color === "primary" ? "bg-primary/5" : "bg-accent/5"} group-hover:scale-150 transition-transform duration-500`} />
              
              <div className={`w-14 h-14 rounded-xl ${item.color === "primary" ? "bg-primary/10 group-hover:bg-primary" : "bg-accent/10 group-hover:bg-accent"} flex items-center justify-center mb-5 transition-all duration-300 relative z-10`}>
                <item.icon className={`w-7 h-7 ${item.color === "primary" ? "text-primary" : "text-accent"} group-hover:text-primary-foreground transition-all`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display relative z-10">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats counter row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { icon: Award, value: 100, suffix: "%", label: "Placement Assistance" },
            { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
            { icon: Target, value: 2, suffix: "", label: "Campus Locations" },
            { icon: Eye, value: 10, suffix: "+", label: "Industry Partners" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-3xl font-bold text-foreground font-display">
                <CountUp target={item.value} suffix={item.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
