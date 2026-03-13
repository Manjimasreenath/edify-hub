import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    name: "Calicut",
    address: "Opp. Matter Lab Meenchanda, Mini Bypass Rd, Tiruvannur, Kozhikode-673029, Kerala",
  },
  {
    name: "Malappuram",
    address: "Skill Development Centre, Door No. 82/D, Amal College of Advanced Studies Nilambur, Santhigramam, Myladi, Eranhimangad (P.O), Pin: 679329, Kerala",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. I'm interested in ${formData.program || "your programs"}. ${formData.message}`;
    window.open(`https://wa.me/917559944728?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-3xl shadow-card p-8 md:p-10 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              >
                <option value="">Select Program</option>
                <option value="Travel & Tourism Business">Travel & Tourism Business (Business Oriented)</option>
                <option value="Tourism & Hotel Management">Tourism & Hotel Management (Job Oriented)</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary-gradient text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-elevated transition-all hover:opacity-90"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                <a href="tel:+917559944728" className="text-accent font-semibold text-lg hover:underline">+91 7559944728</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <a href="mailto:bucketlistfutureschool@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">bucketlistfutureschool@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Website</h4>
                <a href="https://bucketlistedu.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">bucketlistedu.in</a>
              </div>
            </div>

            {/* Locations */}
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{loc.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
