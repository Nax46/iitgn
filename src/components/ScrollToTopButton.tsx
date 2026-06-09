import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 320);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-sm bg-primary text-primary-foreground border border-primary shadow-medium transition-opacity duration-200 focus-visible:ring-offset-4",
        "h-10 w-10 flex items-center justify-center",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTopButton;
