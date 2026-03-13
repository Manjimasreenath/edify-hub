import { GraduationCap, FileText, Clock, ArrowRight } from "lucide-react";

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="section-padding bg-primary-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/5" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5" />

      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Admissions</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6 font-display">
            Start Your Journey <span className="text-accent">Today</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Limited seats available for the 2026-27 batch. Apply now and take the first step toward your dream career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Eligibility",
              desc: "+2 & Above or Any Degree. Open to Plus Two students, Graduates, Job Seekers, and Entrepreneurs.",
            },
            {
              icon: FileText,
              title: "Registration",
              desc: "Simple registration process. Visit our campus or register online. Limited seats available per batch.",
            },
            {
              icon: Clock,
              title: "Duration",
              desc: "1 Year comprehensive program including internship and practical industry exposure.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3 font-display">{item.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-gradient text-accent-foreground px-10 py-4 rounded-full font-bold text-lg hover:shadow-glow transition-all hover:scale-105"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
