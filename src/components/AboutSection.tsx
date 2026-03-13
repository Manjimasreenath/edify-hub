import { Target, Eye, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">About Us</span>
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
              className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={i + 1}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 rounded-xl ${item.color === "primary" ? "bg-primary/10 group-hover:bg-primary" : "bg-accent/10 group-hover:bg-accent"} flex items-center justify-center mb-5 transition-all`}>
                <item.icon className={`w-7 h-7 ${item.color === "primary" ? "text-primary" : "text-accent"} group-hover:text-primary-foreground transition-all`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            { icon: Award, label: "NSDC Certified", desc: "Govt. Approved" },
            { icon: Users, label: "Expert Trainers", desc: "Industry Veterans" },
            { icon: Target, label: "Practical Training", desc: "Hands-on Learning" },
            { icon: Eye, label: "Global Exposure", desc: "International Careers" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
