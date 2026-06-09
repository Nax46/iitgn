import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTAButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
}

interface CTABannerProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
}

type CTAStyleVariant = "cta" | "ctaOutline" | "ctaOnDark";

const resolveVariant = (variant?: CTAButton["variant"]): CTAStyleVariant => {
  switch (variant) {
    case "outline":
      return "ctaOutline";
    case "secondary":
      return "ctaOnDark";
    default:
      return "ctaOnDark";
  }
};

const CTABanner = ({ title, description, buttons, className = "" }: CTABannerProps) => {
  return (
    <div className={cnSection(className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-3">Admissions</p>
      <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {buttons.map((button, index) => (
          <Button key={index} asChild size="lg" variant={resolveVariant(button.variant)}>
            <Link to={button.href}>{button.text}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

function cnSection(className: string) {
  return `section-navy border border-primary/20 px-6 py-10 lg:px-12 lg:py-14 text-center ${className}`;
}

export default CTABanner;
