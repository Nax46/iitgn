import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-anchor group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[14px] text-sm font-semibold ring-offset-background transition-all duration-300 ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#0B1F4D] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(11,31,77,0.25)] hover:bg-[#0B1F4D] hover:text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#0B1F4D] bg-white text-[#0B1F4D] hover:bg-[#0B1F4D] hover:text-white hover:border-[#0B1F4D]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost:
          "bg-transparent text-[#0B1F4D] hover:bg-[#0B1F4D]/5 hover:text-[#0B1F4D] rounded-[14px]",
        link: "text-[#0B1F4D] underline-offset-4 hover:underline rounded-none bg-transparent",
        cta: "bg-[#0B1F4D] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(11,31,77,0.25)] hover:bg-[#0B1F4D] hover:text-white [&_svg]:text-white",
        ctaOutline:
          "border border-[#0B1F4D] bg-white text-[#0B1F4D] hover:bg-[#0B1F4D] hover:text-white hover:border-[#0B1F4D] [&_svg]:text-[#0B1F4D] hover:[&_svg]:text-white",
        ctaOutlineOnDark:
          "border border-white/55 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/70 [&_svg]:text-white",
        ctaOnDark:
          "bg-white text-[#0B1F4D] border border-white/30 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,255,255,0.2)] hover:bg-white hover:text-[#0B1F4D] [&_svg]:text-[#0B1F4D]",
      },
      size: {
        default: "h-auto py-3 px-5",
        sm: "h-auto py-2 px-4 text-xs",
        lg: "h-auto py-[14px] px-7 text-sm",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
