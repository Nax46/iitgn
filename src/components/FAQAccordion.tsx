import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  category?: string;
}

const FAQAccordion = ({ faqs, category }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isOpen = (index: number) => openIndex === index;

  return (
    <div className="space-y-4 motion-safe:animate-fade-up">
      {category && (
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground lg:text-[1.75rem] mb-5 border-l-4 border-l-secondary pl-4">
          {category}
        </h3>
      )}
      {faqs.map((faq, index) => {
        const open = isOpen(index);

        return (
          <div
            key={index}
            className={cn(
              "group overflow-hidden rounded-xl border bg-card shadow-soft transition-all duration-300",
              open
                ? "border-secondary/50 shadow-medium -translate-y-0.5"
                : "border-border hover:border-secondary/30 hover:shadow-medium",
            )}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                open ? "bg-secondary/5" : "group-hover:bg-muted/40",
              )}
            >
              <span
                className={cn(
                  "font-serif text-base font-semibold leading-snug text-foreground transition-colors duration-300 lg:text-lg",
                  open && "text-secondary",
                )}
              >
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                  open && "rotate-180 text-secondary",
                )}
                aria-hidden="true"
              />
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border/80 bg-muted/25 px-6 py-5">
                  <p className="text-base leading-relaxed text-muted-foreground lg:text-[1.0625rem] lg:leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
