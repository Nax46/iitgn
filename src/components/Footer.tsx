import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-t-accent bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 border border-white/20 bg-white flex items-center justify-center shrink-0">
                <img src="/logo2.png" alt="IITGN" className="h-[75%] w-[75%] object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">IITGN CDF</h3>
                <p className="text-xs text-white/70">Competency Development Foundation</p>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Professional education programs at IIT Gandhinagar, focused on industry-ready competencies in AI-ML and Agentic AI.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/programs", label: "Programs" },
                { to: "/admissions", label: "Admissions" },
                { to: "/admissions#refund-policy", label: "Refund Policy" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/75 hover:text-white transition-colors hover:no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://iitgn.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  IITGN Website
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-4 text-sm uppercase tracking-wide">Our Program</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/gen-ai-agentic-aiml" className="text-sm text-white/75 hover:text-white transition-colors hover:no-underline">
                  PG Diploma in AI-ML &amp; Agentic AI Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-white/75 hover:text-white transition-colors hover:no-underline">
                  Program Details &amp; Fees
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-white mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:cdf@iitgn.ac.in" className="text-sm text-white/75 hover:text-white break-all">
                  cdf@iitgn.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="tel:+917923952278" className="text-sm text-white/75 hover:text-white">
                  +91-79-2395-2278
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-white/75 leading-relaxed">
                  IIT Gandhinagar, Palaj, Gujarat — 382055
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 border border-white/20 flex items-center justify-center text-white/75 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 text-center">
          <p className="text-xs text-white/60">
            &copy; 2025 IIT Gandhinagar Competency Development Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
