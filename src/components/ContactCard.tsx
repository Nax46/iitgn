import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactCard = ({ icon, title, children }: ContactCardProps) => {
  return (
    <div className="card-panel p-6 h-full">
      <div className="icon-box-secondary mb-4">{icon}</div>
      <h3 className="font-serif font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
};

export default ContactCard;
