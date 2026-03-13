import { BookOpen, Users, Compass, Handshake, Heart, ShieldCheck, Globe, Award } from "lucide-react";
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
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Large decorative blobs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold tracking-widest uppercase text-xs">Why Choose Us</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-elevated)" }}
            >
              {/* Hover gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{f.desc}</p>
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
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {["NSDC", "Skill India", "MSME", "KCDS", "Amal College", "Nilambur Skills Foundation"].map((name, i) => (
              <motion.div
                key={name}
                className="px-6 py-3 rounded-xl bg-card text-foreground font-semibold text-sm border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.08, y: -3 }}
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
