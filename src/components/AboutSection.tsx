import { Target, Eye, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            Shaping the Future of{" "}
            <span className="text-gradient">Travel Professionals</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bucketlist Future School Pvt Ltd, the education division of Bucketlist Holidays, offers industry-focused training in travel, tourism, hospitality, and hotel management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Target className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-all" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower the next generation of travel entrepreneurs and world-class hospitality professionals by providing industry-focused education, practical training, and real business exposure.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-all">
              <Eye className="w-7 h-7 text-accent transition-all" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To establish Bucketlist Future School as a premier travel hub in Kerala, cultivating highly qualified travel entrepreneurs and world-class hospitality professionals.
            </p>
          </div>
        </div>

        {/* Features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            { icon: Award, label: "NSDC Certified", desc: "Govt. Approved" },
            { icon: Users, label: "Expert Trainers", desc: "Industry Veterans" },
            { icon: Target, label: "Practical Training", desc: "Hands-on Learning" },
            { icon: Eye, label: "Global Exposure", desc: "International Careers" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
