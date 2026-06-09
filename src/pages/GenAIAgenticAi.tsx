import { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
import {
  GraduationCap,
  Clock,
  Users,
  Briefcase,
  Building2,
  ChevronDown,
  MessageSquare,
  FileSearch,
  Database,
  Workflow,
  LineChart,
  Rocket,
  BookOpen,
  Utensils,
  Dumbbell,
  Laptop,
  Home,
  Code2,
  Cpu,
  Users2,
  Check,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProgramSectionHeader from "@/components/programs/ProgramSectionHeader";
import CtaArrow from "@/components/CtaArrow";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";
import styles from "./GenAIAgenticAi.module.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxISXHhQQdF6ZAQ4Ex3bVbLOMvF4x1Xm2ZH7c_D6z1hOpx3xJZ7jo3ujl-WuqhHCt0a/exec";

const AIML_CURRICULUM_PATH =
  "/images/Curriculum%20%26%20Learning%20Journey%20-%20AI-ML%20%26%20Agentic%20AI%20Engineering.pdf";
const AIML_CURRICULUM_FILENAME = "IITGN-AIML-Curriculum.pdf";
const PROGRAM_NAME = "AI-ML & Agentic AI Engineering";

const encodeSegment = (segment: string) => encodeURIComponent(segment).replace(/%2F/g, "/");
const campusImage = (folder: string, file: string) =>
  `/iitcampus/${encodeSegment(folder)}/${encodeSegment(file)}`;

const heroMeta = [
  { icon: Clock, text: "6-Month Residential Program" },
  { icon: GraduationCap, text: "600+ Contact Hours" },
  { icon: Users, text: "Industry Mentorship" },
  { icon: Briefcase, text: "Placement Support" },
  { icon: Building2, text: "IIT Gandhinagar Ecosystem" },
];

const eligibleBackgrounds = [
  { icon: GraduationCap, label: "Engineering Graduates" },
  { icon: Code2, label: "Computer Science" },
  { icon: Laptop, label: "IT" },
  { icon: Cpu, label: "Electronics" },
  { icon: LineChart, label: "Mathematics" },
  { icon: Database, label: "Data Science" },
];

const preferredSkills = [
  "Programming Basics",
  "Analytical Thinking",
  "Problem Solving",
  "Interest in AI",
];

const curriculumTimeline = [
  {
    month: "Month 1",
    title: "Foundations of AI",
    description: "AI fundamentals, data workflows, Python for ML, and responsible AI development.",
  },
  {
    month: "Month 2",
    title: "Machine Learning",
    description: "Supervised learning, model evaluation, feature engineering, and ML projects.",
  },
  {
    month: "Month 3",
    title: "Deep Learning",
    description: "Neural networks, CNNs, RNNs, transfer learning, and deep learning applications.",
  },
  {
    month: "Month 4",
    title: "Generative AI",
    description: "Transformers, LLMs, fine-tuning, and generative AI system design.",
  },
  {
    month: "Month 5",
    title: "Agentic AI",
    description: "LangChain agents, RAG pipelines, and multi-agent systems with LangGraph and CrewAI.",
  },
  {
    month: "Month 6",
    title: "Capstone Project",
    description: "Industry-driven capstone with deployment and production readiness showcase.",
  },
];

const facultyRoles = [
  { icon: GraduationCap, role: "IIT Faculty", note: "Academic oversight" },
  { icon: Briefcase, role: "Industry Mentors", note: "Practitioner guidance" },
  { icon: Microscope, role: "AI Researchers", note: "Research perspective" },
  { icon: TrendingUp, role: "Startup Leaders", note: "Innovation mindset" },
];

const handsOnProjects = [
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Conversational assistant with context-aware responses.",
  },
  {
    icon: Database,
    title: "RAG Application",
    description: "Retrieval-augmented generation for enterprise knowledge bases.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence System",
    description: "Extract insights from unstructured documents at scale.",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Workflow",
    description: "Coordinated agents handling complex multi-step tasks.",
  },
  {
    icon: LineChart,
    title: "ML Prediction System",
    description: "End-to-end predictive modelling on real-world datasets.",
  },
  {
    icon: Rocket,
    title: "Industry Capstone Project",
    description: "Production-ready solution for a live industry problem.",
  },
];

const residentialGallery = [
  campusImage("Library", "library-01.jpg"),
  campusImage("Sports", "sports-03.jpg"),
  campusImage("Labs", "labs-04.jpg"),
  campusImage("Culturals", "culturals-04.jpg"),
];

const campusFacilities = [
  { icon: Home, title: "Hostel Facilities" },
  { icon: Utensils, title: "Dining" },
  { icon: Laptop, title: "Labs" },
  { icon: Building2, title: "Library" },
  { icon: Dumbbell, title: "Sports Facilities" },
  { icon: Users2, title: "Collaborative Learning" },
];

const feeSummary = [
  { label: "Tuition", amount: "₹5,00,000" },
  { label: "Residential & Operations", amount: "₹1,25,000" },
  { label: "Application", amount: "₹3,000" },
];

const investmentCards = [
  {
    label: "Tuition Fee",
    amount: "₹5,00,000",
    includes: [
      "Academic Delivery",
      "Faculty Sessions",
      "Labs & Learning Resources",
      "Assessments",
    ],
    tags: [] as string[],
    payableTo: "IIT Gandhinagar CDF",
  },
  {
    label: "Hostel & Operations Fee",
    amount: "₹1,25,000",
    includes: [
      "Hostel Accommodation",
      "Meals",
      "Campus Facilities",
      "Administrative Support",
    ],
    tags: ["GST Applicable"],
    payableTo: "Futurense Technologies",
  },
  {
    label: "Application Fee",
    amount: "₹3,000",
    includes: [] as string[],
    tags: ["One-Time Fee", "Non-Refundable"],
    payableTo: "Futurense Technologies",
  },
];

const financialSupportItems = [
  "EMI options available through partner institutions",
  "Financing support available for eligible candidates",
  "Detailed payment schedule shared after admission",
];

const admissionSteps = [
  { title: "Submit Application", description: "Complete the online application with required documents." },
  { title: "Profile Review", description: "Academic credentials and application reviewed by the admissions team." },
  { title: "Interview", description: "Panel interview with IIT faculty and industry mentors." },
  { title: "Offer Letter", description: "Selected candidates receive a formal admission offer." },
  { title: "Enrollment", description: "Confirm your seat by completing fee payment and onboarding." },
];

const programFaqs = [
  {
    question: "Is placement support available?",
    answer:
      "Yes. The programme includes structured placement support through IITGN CDF and CAA, including resume building, mock interviews, and access to the partner hiring network.",
  },
  {
    question: "Is hostel mandatory?",
    answer:
      "Yes. This is a full-time residential programme. Accommodation on the IIT Gandhinagar campus is mandatory for all participants.",
  },
  {
    question: "Who should apply?",
    answer:
      "Engineering graduates and professionals from CS, IT, Electronics, Mathematics, or Data Science backgrounds with basic programming proficiency and a strong interest in AI.",
  },
  {
    question: "Do I need prior AI knowledge?",
    answer:
      "No prior AI expertise is required. Basic programming proficiency and comfort with mathematics and statistics are expected. Pre-program preparatory materials are shared with admitted students.",
  },
  {
    question: "Are EMI options available?",
    answer:
      "Yes. EMI and education loan options are available through partner financing institutions including Propelld, Avanse, IDFC, and ICICI.",
  },
  {
    question: "What certification is awarded?",
    answer:
      "Successful graduates receive a Joint Postgraduate Diploma Certificate awarded by IIT Gandhinagar and CAA, reflecting IITGN academic oversight and industry-aligned training.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The process includes online application submission, profile review, a panel interview, offer letter, and enrollment with fee payment. Shortlisted candidates may also appear for the AINPT evaluation.",
  },
  {
    question: "Can working professionals apply?",
    answer:
      "Yes, provided they can commit full-time to the six-month residential programme. Working alongside the programme is not permitted due to the intensive schedule.",
  },
];

type AimlCurriculumFormState = {
  name: string;
  email: string;
  phone: string;
};

const aimlInitialFormState: AimlCurriculumFormState = {
  name: "",
  email: "",
  phone: "",
};

const GenAIAgenticEngineering = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<AimlCurriculumFormState>(aimlInitialFormState);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange =
    (field: keyof AimlCurriculumFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = AIML_CURRICULUM_PATH;
    link.download = AIML_CURRICULUM_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCurriculum = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please fill out all fields so we can share the curriculum.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ ...formData, program: PROGRAM_NAME }),
      });

      triggerDownload();
      setFormData(aimlInitialFormState);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Form submission error:", error);
      triggerDownload();
      setIsDialogOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadForm = (
    <form onSubmit={handleDownloadCurriculum} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="aiml-curriculum-name">Full Name</Label>
        <Input
          id="aiml-curriculum-name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange("name")}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="aiml-curriculum-email">Email ID</Label>
        <Input
          id="aiml-curriculum-email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange("email")}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="aiml-curriculum-phone">Mobile Number</Label>
        <Input
          id="aiml-curriculum-phone"
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
          {isSubmitting ? "Processing..." : "Download PDF"}
        </Button>
      </DialogFooter>
    </form>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — two column */}
      <section className="section-alt pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={styles.heroGrid}>
            <div className={styles.heroDetails}>
              <p className="eyebrow">Program Details</p>
              <h1 className={styles.heroTitle}>
                PG Diploma in AI-ML & Agentic AI Engineering
              </h1>

              <ul className={styles.heroMetaList}>
                {heroMeta.map(({ icon: Icon, text }) => (
                  <li key={text} className={styles.heroMetaItem}>
                    <span className={styles.heroMetaIcon}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className={styles.heroActions}>
                <Button asChild size="lg" variant="cta">
                  <a {...applicationFormLinkProps} className="hover:no-underline">
                    Apply Now
                    <CtaArrow />
                  </a>
                </Button>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="ctaOutline">
                      Download Curriculum
                      <CtaArrow />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Tell us a bit about you</DialogTitle>
                      <DialogDescription>
                        Share your details to receive the full curriculum PDF for the PG Diploma in
                        AI-ML and Agentic AI Engineering.
                      </DialogDescription>
                    </DialogHeader>
                    {downloadForm}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageWrap}>
                <img
                  src="/programs/AIA.jpg"
                  alt="PG Diploma in AI-ML and Agentic AI Engineering at IIT Gandhinagar"
                  loading="eager"
                />
              </div>
              <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
                <span className={styles.floatingIcon}>
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                </span>
                IITGN Certified
              </div>
              <div className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
                <span className={styles.floatingIcon}>
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </span>
                600+ Hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Who Can Apply"
            title="Eligibility Criteria"
            description="Open to graduates and professionals with strong analytical foundations and a passion for building AI systems."
          />

          <div className={styles.eligibilityFieldsGrid}>
            {eligibleBackgrounds.map(({ icon: Icon, label }) => (
              <div key={label} className={`institutional-card ${styles.eligibilityFieldCard}`}>
                <div className={styles.eligibilityFieldIcon}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className={styles.eligibilityFieldTitle}>{label}</p>
              </div>
            ))}
          </div>

          <div className={`accent-card ${styles.skillsCard}`}>
            <h3>Preferred Skills</h3>
            <div className={styles.skillsGrid}>
              {preferredSkills.map((skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Learning Journey"
            title="Curriculum Structure"
            description="A six-month progression from AI foundations to production-ready agentic systems and industry capstone."
          />

          <div className={styles.timeline}>
            {curriculumTimeline.map((item) => (
              <div key={item.month} className={styles.timelineItem}>
                <span className={styles.timelineDot} />
                <p className={styles.timelineMonth}>{item.month}</p>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — before faculty per user flow */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Applied Learning"
            title="Hands-On Industry Projects"
            description="Build a portfolio of production-grade AI systems across the programme."
          />

          <div className={styles.projectsGrid}>
            {handsOnProjects.map(({ icon: Icon, title, description }) => (
              <div key={title} className={`institutional-card ${styles.projectCard}`}>
                <div className={styles.projectIcon}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDesc}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Mentors */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Expert Guidance"
            title="Learn From Experts"
            description="Academic leaders and industry practitioners guide your learning journey."
          />

          <div className={styles.facultyGrid}>
            {facultyRoles.map(({ icon: Icon, role, note }) => (
              <div key={role} className={`institutional-card ${styles.facultyCard}`}>
                <div className={styles.facultyAvatar}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className={styles.facultyRole}>{role}</p>
                <p className={styles.facultyNote}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Experience */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Campus Life"
            title="Residential Experience"
            description="Live and learn on the IIT Gandhinagar campus with world-class facilities and a vibrant student community."
          />

          <div className={styles.residentialGallery}>
            {residentialGallery.map((src, i) => (
              <div key={src} className={styles.galleryThumb}>
                <img src={src} alt={`IIT Gandhinagar campus view ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className={styles.facilityGrid}>
            {campusFacilities.map(({ icon: Icon, title }) => (
              <div key={title} className={`institutional-card ${styles.facilityCard}`}>
                <div className={styles.facilityIcon}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className={styles.facilityTitle}>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Investment */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Investment"
            title="Program Investment"
            description="Transparent fee structure covering academic delivery, residential experience, and admissions."
          />

          <div className={styles.feeOverview}>
            <p className={styles.feeOverviewTitle}>Program Investment Overview</p>
            <div className={styles.feeOverviewGrid}>
              {feeSummary.map((item) => (
                <div key={item.label} className={styles.feeOverviewItem}>
                  <span className={styles.feeOverviewLabel}>{item.label}</span>
                  <span className={styles.feeOverviewAmount}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.pricingGrid}>
            {investmentCards.map((card) => (
              <article key={card.label} className={styles.pricingCard}>
                <p className={styles.pricingLabel}>{card.label}</p>
                <p className={styles.pricingAmount}>{card.amount}</p>

                {card.includes.length > 0 && (
                  <div className={styles.pricingIncludes}>
                    <p className={styles.pricingIncludesTitle}>Includes:</p>
                    <ul className={styles.pricingIncludesList}>
                      {card.includes.map((item) => (
                        <li key={item} className={styles.pricingIncludesItem}>
                          <Check className={styles.pricingCheck} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {card.tags.length > 0 && (
                  <div className={styles.pricingTags}>
                    {card.tags.map((tag) => (
                      <span key={tag} className={styles.pricingTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.pricingPayable}>
                  <span className={styles.pricingPayableLabel}>Payable To:</span>
                  <span className={styles.pricingPayableValue}>{card.payableTo}</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.financialSupport}>
            <h3 className={styles.financialSupportTitle}>Financial Support</h3>
            <ul className={styles.financialSupportList}>
              {financialSupportItems.map((item) => (
                <li key={item} className={styles.financialSupportItem}>
                  <Check className={styles.financialSupportCheck} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.feeImportantNote}>
            <p className={styles.feeImportantTitle}>Important Note</p>
            <p className={styles.feeImportantText}>
              Fee details are subject to institutional guidelines and may be updated for future
              cohorts. Candidates should refer to official admission communications for the latest
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="How to Join"
            title="Admission Process"
            description="A clear, professional pathway from application to enrollment."
          />

          <div className={styles.stepsGrid}>
            {admissionSteps.map((step, index) => (
              <div key={step.title} className={`institutional-card ${styles.stepCard}`}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <p className={styles.stepTitle}>{step.title}</p>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" />

          <div className={styles.faqList}>
            {programFaqs.map((faq, index) => (
              <div key={faq.question} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                      openFaq === index && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                {openFaq === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className={styles.finalCtaTitle}>Ready to Build Your Career in AI?</h2>
          <p className={styles.finalCtaDesc}>
            Join IIT Gandhinagar&apos;s immersive learning ecosystem and gain industry-relevant
            expertise in AI, ML, and Agentic Systems.
          </p>
          <div className={styles.finalCtaActions}>
            <Button asChild size="lg" variant="ctaOnDark">
              <a {...applicationFormLinkProps} className="hover:no-underline hover:text-[#0B1F4D]">
                Apply Now
                <CtaArrow />
              </a>
            </Button>

            <BrochureDownloadButton premium size="lg" variant="ctaOnDark" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIAgenticEngineering;
