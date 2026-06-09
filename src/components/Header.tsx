import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { applicationFormLinkProps } from "@/data/applicationForm";
import CtaArrow from "@/components/CtaArrow";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className={cn(styles.header, isScrolled && styles.headerScrolled)}>
        <div className={styles.topBar}>
          <div className="container mx-auto px-4 lg:px-8">
            <p className="py-1.5 text-center text-[0.7rem] sm:text-xs text-muted-foreground tracking-wide">
              Indian Institute of Technology Gandhinagar · Competency Development Foundation
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-[4.5rem] lg:h-20">
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <div className={styles.logoBox}>
                  <img src="/logo.png" alt="CDF" className="h-[70%] w-[70%] object-contain" loading="lazy" />
                </div>
                <div className={styles.logoDivider} aria-hidden="true" />
                <div className={styles.logoBox}>
                  <img src="/logo2.png" alt="IIT Gandhinagar" className="h-[70%] w-[70%] object-contain" loading="lazy" />
                </div>
              </div>

              <div className={styles.brandText}>
                <span className={styles.brandTitle}>IITGN CDF</span>
                <span className={styles.brandSubtitle}>Competency Development Foundation</span>
              </div>
            </Link>

            <nav className={styles.navDesktop} aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn("nav-link", isActive(link.path) && "nav-link-active")}
                >
                  {link.label}
                </Link>
              ))}
              <a
                {...applicationFormLinkProps}
                className={cn(buttonVariants({ variant: "cta", size: "default" }), "ml-2")}
              >
                Apply Now
                <CtaArrow />
              </a>
            </nav>

            <div className={styles.mobileActions}>
              <a
                {...applicationFormLinkProps}
                className={cn(buttonVariants({ variant: "cta", size: "sm" }), "hidden min-[400px]:inline-flex")}
              >
                Apply
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.menuToggle}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={cn(styles.mobileDrawer, isMenuOpen && styles.mobileDrawerOpen)}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Menu</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className={styles.menuToggle}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className={styles.drawerNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                styles.mobileNavLink,
                isActive(link.path) && styles.mobileNavLinkActive,
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <Button asChild variant="cta" className="w-full">
            <a {...applicationFormLinkProps} onClick={() => setIsMenuOpen(false)}>
              Apply Now
              <CtaArrow />
            </a>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
