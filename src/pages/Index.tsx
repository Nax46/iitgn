import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Board from "@/components/Board";
import LogoMarquee from "@/components/LogoMarquee";
import CarouselBackground from "@/components/CarouselBackground";
import { hiringPartnerLogos } from "@/data/partnerLogos";

import ProgramHighlights from "../components/ProgramHighlights";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";
import CtaArrow from "@/components/CtaArrow";
import { applicationFormLinkProps } from "@/data/applicationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative border-b border-border overflow-hidden">
        <CarouselBackground />
        <div
          className="absolute inset-0 bg-[hsl(210_58%_32%_/0.28)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/25 to-primary/40"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl text-white animate-fade-up">
            <p className="eyebrow-light mb-4">IIT Gandhinagar · PG Diploma Program</p>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5">
              PG Diploma in AI-ML &amp; Agentic AI Engineering
            </h1>

            <p className="text-base lg:text-lg text-white/95 leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
              A six-month residential PG Diploma offered by the IITGN Competency Development Foundation,
              preparing working professionals for senior roles in AI-ML and Agentic AI engineering.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <Button asChild variant="ctaOnDark" size="lg">
                <a {...applicationFormLinkProps} className="hover:no-underline">
                  Apply Now
                  <CtaArrow />
                </a>
              </Button>
              <Button asChild size="lg" variant="ctaOutlineOnDark">
                <Link to="/programs" className="hover:no-underline">
                  Program Details
                  <CtaArrow />
                </Link>
              </Button>
              <BrochureDownloadButton premium size="lg" variant="ctaOutlineOnDark" />
            </div>

            <div className="border-t border-white/20 pt-6 space-y-2 text-sm lg:text-base text-white/85">
              <p>
                <span className="font-semibold text-white">Program Start:</span>{" "}
                24 August 2026 (Tentative)
              </p>
              <p>On-campus availability expected from 23 August 2026 onwards.</p>
              <p className="text-white/70 text-sm">
                M/s. Futurense Technologies Pvt. Ltd. — Admissions, Industry and Hospitality Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProgramHighlights />

      <Board />

      <section className="section-spacing border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-2">Industry Network</p>
            <h2 className="text-display-sm mb-3">Our Hiring Partners</h2>
            <p className="text-lead">
              Organisations that recruit and mentor graduates from IITGN CDF programmes.
            </p>
          </div>

          <div className="card-panel p-6 lg:p-8">
            <LogoMarquee
              hiringTop={{
                logos: hiringPartnerLogos,
                leftToRight: true,
                duration: 28,
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-career-showcase relative max-w-5xl mx-auto px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-11 text-center">
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Career Development
            </p>
            <h2 className="relative font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
              Roles Our Graduates Pursue
            </h2>
            <p className="relative text-base sm:text-lg text-white/90 mb-7 max-w-2xl mx-auto leading-relaxed">
              Graduates advance into roles such as AI Engineer, Generative AI Engineer, MLOps Engineer,
              and Agentic AI Systems Developer, supported by structured placement assistance through CAA.
            </p>
            <Button asChild size="lg" variant="ctaOnDark" className="relative h-11 px-7 shadow-medium">
              <a
                {...applicationFormLinkProps}
                className="inline-flex items-center justify-center gap-2 hover:text-primary focus-visible:text-primary"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
