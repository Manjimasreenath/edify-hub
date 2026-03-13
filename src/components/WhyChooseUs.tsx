import { BookOpen, Users, Compass, Handshake, Heart, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: BookOpen, title: "Practical Training", desc: "Hands-on industry experience through Bucketlist Holidays operations" },
  { icon: Users, title: "Experienced Trainers", desc: "Learn from industry veterans with real-world expertise" },
  { icon: Compass, title: "Career Guidance", desc: "Personalized career counseling and placement assistance" },
  { icon: Handshake, title: "Business Mentorship", desc: "Continued mentorship and business partnership opportunities" },
  { icon: Heart, title: "Supportive Environment", desc: "Nurturing atmosphere focused on student success" },
  { icon: ShieldCheck, title: "Govt. Approved", desc: "NSDC certified programs with recognized credentials" },
  { icon: Globe, title: "Global Placements", desc: "International placement assistance for global careers" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Approved By */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-muted-foreground font-semibold tracking-widest uppercase text-xs">Approved & Partnered With</span>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {["NSDC", "Skill India", "MSME", "KCDS", "Amal College", "Nilambur Skills Foundation"].map((name, i) => (
              <motion.div
                key={name}
                className="px-6 py-3 rounded-xl bg-secondary/80 text-foreground font-semibold text-sm border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.1 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
