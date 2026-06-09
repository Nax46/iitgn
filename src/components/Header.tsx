import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/campus-life", label: "Campus Life" },
    { path: "/placements", label: "Placements" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 border-b-2 border-primary/10 bg-background">
        <div className="border-b border-border/80 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="py-1.5 text-center text-[0.7rem] sm:text-xs text-muted-foreground tracking-wide">
              Indian Institute of Technology Gandhinagar · Competency Development Foundation
            </p>
          </div>
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-[4.5rem] lg:h-20">
            <Link
              to="/"
              className="flex items-center gap-3 min-w-0 flex-shrink hover:no-underline focus-visible:no-underline"
            >
              <div className="flex items-center gap-2 shrink-0">
                <div className="h-11 w-11 sm:h-12 sm:w-12 border border-border bg-white flex items-center justify-center">
                  <img src="/logo.png" alt="CDF" className="h-[70%] w-[70%] object-contain" loading="lazy" />
                </div>
                <div className="hidden sm:block h-8 w-px bg-border" aria-hidden="true" />
                <div className="h-11 w-11 sm:h-12 sm:w-12 border border-border bg-white flex items-center justify-center">
                  <img src="/logo2.png" alt="IIT Gandhinagar" className="h-[70%] w-[70%] object-contain" loading="lazy" />
                </div>
              </div>

              <div className="min-w-0 leading-tight">
                <span className="block font-serif text-base sm:text-lg font-semibold text-primary truncate">
                  IITGN CDF
                </span>
                <span className="block text-[0.65rem] sm:text-xs text-muted-foreground truncate">
                  Competency Development Foundation
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn("nav-link", isActive(link.path) && "nav-link-active")}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                className={cn(buttonVariants({ variant: "cta", size: "default" }), "ml-4")}
              >
                Apply Now
              </Link>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/admissions"
                className={cn(buttonVariants({ variant: "cta", size: "sm" }), "hidden min-[400px]:inline-flex")}
              >
                Apply
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground border border-border rounded-sm hover:bg-muted transition-colors"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <nav
            id="mobile-navigation"
            className={cn(
              "lg:hidden border-t border-border bg-background overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
              isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
            )}
            aria-hidden={!isMenuOpen}
          >
            <div className="py-3 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-2 py-2.5 text-sm font-medium border-l-2 transition-colors hover:no-underline",
                    isActive(link.path)
                      ? "border-accent text-primary bg-muted/50 pl-3"
                      : "border-transparent text-foreground/80 hover:text-primary hover:bg-muted/30",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-2">
                <Button asChild variant="cta" className="w-full">
                  <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
