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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative border-b border-border overflow-hidden">
        <CarouselBackground />
        <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" aria-hidden="true" />

        <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl text-white animate-fade-up">
            <p className="eyebrow-light mb-4">IIT Gandhinagar · PG Diploma Program</p>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5">
              PG Diploma in AI-ML &amp; Agentic AI Engineering
            </h1>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
              An immersive residential program by the IITGN Competency Development Foundation —
              designed to prepare professionals for leadership roles in AI-ML and Agentic AI.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <Button asChild variant="ctaOnDark" size="lg">
                <Link to="/admissions" className="group flex items-center gap-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ctaOutline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
                <Link to="/programs">Program Details</Link>
              </Button>
              <BrochureDownloadButton
                size="lg"
                variant="ctaOutline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
                label="Download Brochure"
              />
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

      <section className="section-muted border-b border-border">
        <Board />
      </section>

      <section className="section-spacing border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-2">Industry Network</p>
            <h2 className="text-display-sm mb-3">Our Hiring Partners</h2>
            <p className="text-lead">
              Organizations that collaborate with IIT Gandhinagar CDF to develop placement-ready talent.
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

      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-navy px-6 py-10 lg:px-12 lg:py-14 text-center border border-primary/20">
            <p className="eyebrow-light mb-3">Career Development</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-4">
              Advance Your Professional Trajectory
            </h2>
            <p className="text-base lg:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build expertise aligned with roles such as AI Engineer, Generative AI Engineer,
              MLOps Engineer, and Agentic AI Systems Developer.
            </p>
            <Button asChild size="lg" variant="ctaOnDark">
              <Link to="/admissions" className="flex items-center justify-center gap-2">
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
