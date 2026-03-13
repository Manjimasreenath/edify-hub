import { Briefcase, Hotel, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import travelImage from "@/assets/travel-business-image.jpg";
import hospitalityImage from "@/assets/hospitality-image.jpg";

const programs = [
  {
    icon: Briefcase,
    title: "Travel & Tourism Business",
    subtitle: "Business Oriented Program",
    image: travelImage,
    duration: "1 Year with Internship",
    description: "Start and manage your own travel business. Complete practical training on establishing, operating, and growing a travel enterprise successfully.",
    highlights: [
      "Complete travel business setup training",
      "Legal registration, GST & licensing guidance",
      "Vendor & supplier connection support",
      "Business partnership opportunities",
      "Govt. Approved NSDC Certification",
    ],
    careers: ["Start Your Own Travel Agency", "Independent Tour Operator", "Online Travel Business Owner", "Travel Consultant"],
    color: "primary" as const,
  },
  {
    icon: Hotel,
    title: "Tourism & Hotel Management",
    subtitle: "Job Oriented Program",
    image: hospitalityImage,
    duration: "1 Year with Internship",
    description: "Prepare for successful employment in the travel, tourism, and hospitality industry with structured classroom learning and real-world exposure.",
    highlights: [
      "Hotel management & tourism training",
      "English communication development",
      "National & international placement",
      "Industrial visits & practical exposure",
      "Interview grooming & mock interviews",
    ],
    careers: ["Travel Consultant", "Tour Executive", "Hotel Front Office Executive", "Hospitality Industry Roles"],
    color: "accent" as const,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Our Programs</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            Diploma in <span className="text-gradient">1 Year</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Two specialized diploma programs designed to launch your career in travel and hospitality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group"
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
                    program.color === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}>
                    <program.icon className="w-4 h-4" />
                    {program.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground font-display">{program.title}</h3>
                </div>
                <div className="text-sm text-accent font-semibold mb-4">{program.duration}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {program.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Careers */}
                <div className="border-t border-border pt-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Career Paths</div>
                  <div className="flex flex-wrap gap-2">
                    {program.careers.map((c) => (
                      <span key={c} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className={`mt-6 inline-flex items-center gap-2 font-semibold transition-colors ${
                    program.color === "primary" ? "text-primary hover:text-primary/80" : "text-accent hover:text-accent/80"
                  }`}
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Degree programs */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto bg-primary-gradient rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground font-display mb-4">
            Complete Your Degree & Masters
          </h3>
          <p className="text-primary-foreground/70 mb-8">Advance your education with our partner university programs</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["BTS", "BATS", "BAVTM", "MTTM"].map((degree, i) => (
              <motion.div
                key={degree}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary-foreground/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="text-primary-foreground font-bold text-lg">{degree}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
