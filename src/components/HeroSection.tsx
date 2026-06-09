import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  icon?: ReactNode;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  backgroundImage?: string;
  eyebrow?: string;
};

const HeroSection = ({
  icon,
  title,
  highlight,
  description,
  align = "center",
  className,
  backgroundImage,
  eyebrow,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative border-b border-border pt-28 pb-12 lg:pt-36 lg:pb-16 section-muted",
        className,
      )}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
        </>
      )}
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div
          className={cn(
            "max-w-3xl animate-fade-up",
            align === "center" ? "mx-auto text-center" : "text-left",
          )}
        >
          {eyebrow && <p className={cn("eyebrow mb-3", align === "center" && "text-center")}>{eyebrow}</p>}

          {icon && (
            <div className={cn("mb-5 text-secondary", align === "center" && "flex justify-center")}>
              {icon}
            </div>
          )}

          <h1 className="text-display-md mb-4">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-secondary">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <div className="text-lead max-w-2xl mx-auto">{description}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
