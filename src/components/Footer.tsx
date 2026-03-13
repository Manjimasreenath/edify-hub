import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold font-display mb-3">Bucket List</h3>
            <p className="text-sm text-primary-foreground/60">Future School & Holidays Pvt. Ltd.</p>
            <p className="text-sm text-primary-foreground/60 mt-3 leading-relaxed">
              Shaping the next generation of travel professionals and entrepreneurs.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Programs", "Why Us", "Admissions", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/60">Travel & Tourism Business</p>
              <p className="text-sm text-primary-foreground/60">Tourism & Hotel Management</p>
              <p className="text-sm text-primary-foreground/60">BTS / BATS / BAVTM / MTTM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Bucketlist Future School & Holidays Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
