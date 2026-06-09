import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { footerSocialLinks } from "@/data/socialLinks";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
} as const;

const Footer = () => {
  return (
    <footer className="footer-institutional border-t-4 border-t-accent mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-11 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 lg:items-start">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 border border-white/15 bg-white rounded-md flex items-center justify-center shrink-0">
                <img src="/logo2.png" alt="IITGN" className="h-[75%] w-[75%] object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base leading-tight">IITGN CDF</h3>
                <p className="text-xs text-white/65 mt-1">Competency Development Foundation</p>
              </div>
            </div>
            <p className="text-sm text-white/72 leading-relaxed max-w-xs">
              Professional education programmes at IIT Gandhinagar, focused on industry-ready
              competencies in AI-ML and Agentic AI.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-white text-xs uppercase tracking-[0.14em] pb-1 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/programs", label: "Programs" },
                { to: "/admissions", label: "Admissions" },
                { to: "/admissions#refund-policy", label: "Refund Policy" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/72 hover:text-white transition-colors hover:no-underline leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://iitgn.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/72 hover:text-white transition-colors leading-snug"
                >
                  IITGN Website
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-white text-xs uppercase tracking-[0.14em] pb-1 border-b border-white/10">
              Our Program
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/gen-ai-agentic-aiml"
                  className="text-sm text-white/72 hover:text-white transition-colors hover:no-underline leading-snug"
                >
                  PG Diploma in AI-ML &amp; Agentic AI Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-white/72 hover:text-white transition-colors hover:no-underline leading-snug"
                >
                  Program Details &amp; Fees
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-semibold text-white text-xs uppercase tracking-[0.14em] pb-1 border-b border-white/10">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <a href="mailto:cdf@iitgn.ac.in" className="text-sm text-white/72 hover:text-white break-all leading-snug">
                  cdf@iitgn.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <a href="tel:+917923952278" className="text-sm text-white/72 hover:text-white leading-snug">
                  +91-79-2395-2278
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-white/72 leading-snug">
                  IIT Gandhinagar, Palaj, Gujarat 382055
                </span>
              </li>
            </ul>

            <div className="mt-2 pt-5 border-t border-white/10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50 mb-3">
                Follow IIT Gandhinagar
              </p>
              <div className="flex items-center gap-2.5" role="list" aria-label="IIT Gandhinagar social media">
                {footerSocialLinks.map((link) => {
                  const Icon = socialIcons[link.platform as keyof typeof socialIcons];
                  const isDisabled = !link.href;

                  if (isDisabled) {
                    return (
                      <span
                        key={link.platform}
                        role="listitem"
                        className="h-9 w-9 border border-white/10 flex items-center justify-center text-white/25 cursor-not-allowed rounded-md bg-white/5"
                        aria-label={`${link.label} (unavailable)`}
                        title={`${link.label} (unavailable)`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </span>
                    );
                  }

                  return (
                    <a
                      key={link.platform}
                      href={link.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="listitem"
                      className="h-9 w-9 border border-white/18 bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 hover:border-white/35 transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(220,60%,9%)]"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/12 mt-9 lg:mt-11 pt-6 text-center">
          <p className="text-xs text-white/55">
            &copy; 2025 IIT Gandhinagar Competency Development Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
