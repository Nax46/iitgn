import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContactCardVariant = "address" | "email" | "phone" | "hours" | "default";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content?: string | string[];
  children?: ReactNode;
  link?: string;
  variant?: ContactCardVariant;
}

const cardBaseStyles =
  "border-l-4 border-l-secondary hover:border-l-primary group-hover:shadow-large";

const iconVariantStyles: Record<ContactCardVariant, string> = {
  address: "bg-secondary text-secondary-foreground",
  email: "bg-secondary text-secondary-foreground",
  phone: "bg-secondary text-secondary-foreground",
  hours: "bg-secondary text-secondary-foreground",
  default: "bg-secondary text-secondary-foreground",
};

const ContactCard = ({
  icon,
  title,
  content,
  children,
  link,
  variant = "default",
}: ContactCardProps) => {
  const lines = content
    ? Array.isArray(content)
      ? content
      : [content]
    : null;

  const body = children ?? (
    <div className="space-y-2">
      {lines?.map((line, index) => {
        if (variant === "email" && line.includes("@")) {
          const [label, email] = line.includes(": ")
            ? line.split(": ")
            : [null, line];
          return (
            <p key={index} className="text-base leading-relaxed">
              {label && <span className="font-medium text-foreground/85">{label}: </span>}
              <a
                href={`mailto:${email}`}
                className="text-secondary hover:text-primary hover:underline transition-colors duration-200"
              >
                {email}
              </a>
            </p>
          );
        }

        if (variant === "phone" && line.includes("+")) {
          const [label, phone] = line.includes(": ")
            ? line.split(": ")
            : [null, line];
          const digits = phone.replace(/\D/g, "");
          return (
            <p key={index} className="text-base leading-relaxed">
              {label && <span className="font-medium text-foreground/85">{label}: </span>}
              <a
                href={`tel:+${digits}`}
                className="whitespace-nowrap text-secondary hover:text-primary hover:underline transition-colors duration-200"
              >
                {phone.trim()}
              </a>
            </p>
          );
        }

        return (
          <p key={index} className="text-base leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );

  const card = (
    <div
      className={cn(
        "group flex h-full min-h-[240px] flex-col rounded-xl border border-border bg-card p-7 lg:p-8",
        "shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-medium",
        cardBaseStyles,
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300",
          iconVariantStyles[variant],
        )}
      >
        {icon}
      </div>
      <h3 className="mb-4 font-serif text-xl font-semibold text-foreground lg:text-2xl">{title}</h3>
      <div className="flex-1 text-muted-foreground">{body}</div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full no-underline hover:no-underline">
        {card}
      </a>
    );
  }

  return card;
};

export default ContactCard;
