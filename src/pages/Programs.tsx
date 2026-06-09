import { ChangeEvent, FormEvent, useState } from "react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Check,
  Clock,
  GraduationCap,
  Home,
  MapPin,
  Award,
  Users,
  Bot,
  Brain,
  Cloud,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { applicationFormLinkProps } from "@/data/applicationForm";
import ProgramSectionHeader from "@/components/programs/ProgramSectionHeader";
import CtaArrow from "@/components/CtaArrow";
import styles from "./Programs.module.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxISXHhQQdF6ZAQ4Ex3bVbLOMvF4x1Xm2ZH7c_D6z1hOpx3xJZ7jo3ujl-WuqhHCt0a/exec";

const curriculumPdf = {
  path: "/images/Curriculum%20%26%20Learning%20Journey%20-%20AI-ML%20%26%20Agentic%20AI%20Engineering.pdf",
  fileName: "IITGN-AIML-Curriculum.pdf",
};

type GeneralFormState = {
  name: string;
  email: string;
  phone: string;
};

const initialFormState: GeneralFormState = {
  name: "",
  email: "",
  phone: "",
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const heroStats = [
  { icon: Clock, label: "600+ Contact Hours" },
  { icon: Home, label: "6-Month Residential Program" },
  { icon: Users, label: "Industry Mentorship" },
  { icon: Briefcase, label: "Placement Support" },
  { icon: Building2, label: "IIT Ecosystem Access" },
];

const brochureBenefits = [
  "Complete Curriculum",
  "Faculty Information",
  "Career Pathways",
  "Fee Structure",
  "Campus Experience",
  "Admission Process",
];

const program = {
  title: "PG Diploma in AI-ML & Agentic AI Engineering",
  imgSrc: "/programs/AIA.jpg",
  link: "/gen-ai-agentic-aiml",
  duration: "6 Months",
  mode: "Residential",
  location: "IIT Gandhinagar",
  certification: "IITGN CDF",
};

const learningOutcomes = [
  {
    icon: Brain,
    title: "AI Applications",
    description: "Build ML-powered applications.",
  },
  {
    icon: Bot,
    title: "Agentic Systems",
    description: "Create autonomous AI agents.",
  },
  {
    icon: Cloud,
    title: "Enterprise Solutions",
    description: "Deploy scalable production AI.",
  },
  {
    icon: Target,
    title: "Capstone Projects",
    description: "Solve real industry problems.",
  },
];

const careerRoles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "LLM Engineer",
  "Prompt Engineer",
  "MLOps Engineer",
  "Data Scientist",
  "AI Product Developer",
];

const Programs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<GeneralFormState>(initialFormState);

  const handleInputChange =
    (field: keyof GeneralFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = curriculumPdf.path;
    link.download = curriculumPdf.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCurriculum = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill out all fields so we can share the brochure.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ ...formData, program: "aiml" }),
      });

      triggerDownload();
      setFormData(initialFormState);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Submission failed", error);
      triggerDownload();
      setIsDialogOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="section-alt pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl animate-fade-up">
            <p className="eyebrow mb-3">Academic Programs</p>
            <h1 className="text-display-md mb-4">
              Build Industry-Ready Expertise in{" "}
              <span className="text-secondary">AI, Machine Learning & Agentic AI</span>
            </h1>
            <p className="text-lead max-w-2xl">
              An immersive residential learning experience at IIT Gandhinagar designed to prepare
              future AI engineers, innovators, and technology leaders.
            </p>

            <div className={styles.heroStats}>
              {heroStats.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className={styles.statValue}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={styles.brochureGrid}>
            <div className={styles.brochureMockup}>
              <div className={styles.brochureMockupInner}>
                <img
                  src={program.imgSrc}
                  alt="PG Diploma program brochure preview"
                  loading="lazy"
                />
                <span className={styles.brochureMockupBadge}>Official Brochure</span>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-3">Program Brochure</p>
              <h2 className="text-display-sm mb-3">
                Everything You Need to Know About the PG Diploma
              </h2>
              <p className="text-lead">
                Get a comprehensive overview of curriculum, faculty, campus life, fees, and the
                admission journey — all in one document.
              </p>

              <ul className={styles.benefitsList}>
                {brochureBenefits.map((benefit) => (
                  <li key={benefit} className={styles.benefitItem}>
                    <span className={styles.benefitCheck}>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="cta" className="px-8">
                    Download Program Brochure
                    <CtaArrow />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Tell us a bit about you</DialogTitle>
                    <DialogDescription>
                      Share your details to receive the programme brochure and curriculum overview.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleDownloadCurriculum} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="prog-name">Full Name</Label>
                      <Input
                        id="prog-name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange("name")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prog-email">Email ID</Label>
                      <Input
                        id="prog-email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prog-phone">Mobile Number</Label>
                      <Input
                        id="prog-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange("phone")}
                        required
                      />
                    </div>
                    {formError && <p className="text-sm text-destructive">{formError}</p>}
                    <DialogFooter>
                      <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Download Brochure"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Program Card */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Flagship Programme"
            title="PG Diploma with Pathways to Roles in AI-ML and Agentic AI Engineering"
          />

          <article className={styles.programCard}>
            <div className={styles.programCardGrid}>
              <div className={styles.programCardImage}>
                <img src={program.imgSrc} alt={program.title} loading="lazy" />
              </div>

              <div className={styles.programCardBody}>
                <h3 className="text-heading-lg">{program.title}</h3>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{program.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Mode</span>
                    <span className={styles.metaValue}>{program.mode}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>
                      <MapPin className="w-3.5 h-3.5 inline mr-1 -mt-0.5" aria-hidden="true" />
                      {program.location}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Certification</span>
                    <span className={styles.metaValue}>
                      <Award className="w-3.5 h-3.5 inline mr-1 -mt-0.5" aria-hidden="true" />
                      {program.certification}
                    </span>
                  </div>
                </div>

                <span className={styles.placementBadge}>
                  <Briefcase className="w-4 h-4" aria-hidden="true" />
                  Placement Support Included
                </span>

                <Button asChild variant="cta" size="lg" className="w-fit">
                  <Link to={program.link} onClick={scrollToTop} className="flex items-center gap-2 hover:no-underline">
                    Explore Program
                    <CtaArrow />
                  </Link>
                </Button>
              </div>
            </div>
          </article>

          <div className={styles.announcementBox}>
            <p className="text-base text-muted-foreground leading-relaxed">
              <span className="font-semibold text-primary">Common Foundation (First 6 Weeks):</span>{" "}
              All learners begin with a shared foundation in AI-ML fundamentals before deepening into
              agentic systems and production engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Career Pathways"
            title="Career Opportunities After Completion"
          />

          <div className={styles.careerGrid}>
            {careerRoles.map((role) => (
              <div key={role} className={`institutional-card ${styles.careerCard}`}>
                <div className={styles.careerIcon}>
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className={styles.careerTitle}>{role}</p>
              </div>
            ))}
          </div>

          <p className={styles.disclaimer}>
            Career outcomes depend on prior experience, academic background, and performance during
            the program.
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader eyebrow="Learning Journey" title="What You Will Build" />

          <div className={styles.outcomesGrid}>
            {learningOutcomes.map(({ icon: Icon, title, description }) => (
              <div key={title} className={`accent-card ${styles.outcomeCard}`}>
                <div className={styles.outcomeIcon}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-heading-md text-base mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-navy rounded-xl px-6 py-10 lg:px-12 lg:py-14 text-center">
            <BookOpen className="w-10 h-10 text-accent mx-auto mb-4" aria-hidden="true" />
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-3">
              Ready to Begin Your AI Journey?
            </h2>
            <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Explore the full curriculum, faculty, campus experience, and admission process for the
              PG Diploma programme.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="ctaOnDark">
                <Link to={program.link} onClick={scrollToTop} className="hover:no-underline hover:text-[#0B1F4D]">
                  Explore Program
                  <CtaArrow />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ctaOutlineOnDark">
                <a {...applicationFormLinkProps} className="hover:no-underline">
                  Apply Now
                  <CtaArrow />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
