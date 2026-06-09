import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CtaArrow = ({ className }: { className?: string }) => (
  <ArrowRight
    className={cn("btn-arrow-icon h-4 w-4 shrink-0", className)}
    aria-hidden="true"
  />
);

export default CtaArrow;
