interface StatCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

const StatCard = ({ icon, value, label, description }: StatCardProps) => {
  return (
    <div className="text-center p-6 card-panel">
      {icon && <div className="icon-box-secondary mx-auto mb-4">{icon}</div>}
      <div className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-1">{value}</div>
      <div className="text-sm font-semibold text-foreground uppercase tracking-wide">{label}</div>
      {description && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>}
    </div>
  );
};

export default StatCard;
