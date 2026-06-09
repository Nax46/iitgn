type ProgramSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const ProgramSectionHeader = ({ eyebrow, title, description }: ProgramSectionHeaderProps) => (
  <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="text-display-sm">{title}</h2>
    {description && <p className="text-lead mt-3">{description}</p>}
  </div>
);

export default ProgramSectionHeader;
