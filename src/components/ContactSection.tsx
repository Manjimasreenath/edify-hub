import { MapPin, Phone, Mail, Globe, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const locations = [
  { name: "Calicut", address: "Opp. Matter Lab Meenchanda, Mini Bypass Rd, Tiruvannur, Kozhikode-673029, Kerala" },
  { name: "Malappuram", address: "Skill Development Centre, Door No. 82/D, Amal College of Advanced Studies Nilambur, Santhigramam, Myladi, Eranhimangad (P.O), Pin: 679329, Kerala" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual EmailJS Service ID, Template ID, and Public Key
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Enquiry sent successfully! We'll be in touch soon.");
      setFormData({ name: "", phone: "", email: "", program: "", message: "" });
    } catch (error) {
      console.error("EmailJS sending failed:", error);
      toast.error("Failed to send enquiry. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", content: <a href="tel:+917559944728" className="text-accent font-semibold text-lg hover:underline">+91 7559944728</a> },
    { icon: Mail, title: "Email", content: <a href="mailto:bucketlistfutureschool@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">bucketlistfutureschool@gmail.com</a> },
    { icon: Globe, title: "Website", content: <a href="https://bucketlistedu.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">bucketlistedu.in</a> },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold tracking-widest uppercase text-xs">Contact Us</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-display">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          {/* Form */}
          <motion.div
            className="relative bg-card rounded-3xl p-8 md:p-10 border border-border overflow-hidden max-w-2xl w-full"
            style={{ boxShadow: "var(--shadow-elevated)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Corner glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header with accent bar */}
            <div className="relative z-10 mb-8">
              <div className="w-12 h-1 bg-accent rounded-full mb-4" />
              <h3 className="text-2xl font-bold text-foreground font-display">Send an Enquiry</h3>
              <p className="text-muted-foreground text-sm mt-2">We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name *</label>
                <motion.input
                  type="text" placeholder="Enter your full name" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background transition-all text-sm"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Phone + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone *</label>
                  <motion.input
                    type="tel" placeholder="+91 XXXXX XXXXX" required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background transition-all text-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
                  <motion.input
                    type="email" placeholder="your@email.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background transition-all text-sm"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              {/* Program select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background transition-all text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="">Select a program...</option>
                  <option value="Travel & Tourism Business">Travel & Tourism Business (Business Oriented)</option>
                  <option value="Tourism & Hotel Management">Tourism & Hotel Management (Job Oriented)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
                <motion.textarea
                  placeholder="Tell us about your interests..." rows={3} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background transition-all resize-none text-sm"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 bg-primary-gradient text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base transition-all mt-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </motion.button>

              <p className="text-center text-xs text-muted-foreground/70 mt-2">
                Your enquiry will be sent to our admissions team.
              </p>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8 hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  {item.content}
                </div>
              </motion.div>
            ))}

            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (contactInfo.length + i) * 0.1, duration: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{loc.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{loc.address}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/917559944728?text=Welcome%20to%20Bucketlist%20Future%20School%20%F0%9F%8C%8D%0ADream%20it.%20Explore%20it.%20Achieve%20it.%0AWe%20help%20you%20build%20a%20future%20in%20travel%2C%20tourism%2C%20and%20hospitality%20with%20real-world%20skills%20and%20opportunities."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:shadow-glow transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity } }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary-foreground">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </section>
  );
};

export default ContactSection;
