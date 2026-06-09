interface TimelineItem {
  step: string;
  title: string;
  description: string;
}

interface TimelineComponentProps {
  items: TimelineItem[];
}

const TimelineComponent = ({ items }: TimelineComponentProps) => {
  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
        <div className="absolute top-8 left-0 right-0 h-px bg-border hidden lg:block" aria-hidden="true" />
        {items.map((item) => (
          <div key={item.step} className="relative text-center">
            <div className="w-12 h-12 mx-auto rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm mb-4 relative z-10 border-2 border-background">
              {item.step}
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden relative pl-10 space-y-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
        {items.map((item) => (
          <div key={item.step} className="relative">
            <div className="absolute -left-10 top-0 w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
              {item.step}
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimelineComponent;
