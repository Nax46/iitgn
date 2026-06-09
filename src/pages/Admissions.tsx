import {
  PenLine,
  UserCheck,
  Mail,
  CheckCircle2,
  Check,
  GraduationCap,
  Code2,
  Laptop,
  Cpu,
  LineChart,
  Database,
  ClipboardCheck,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  FolderKanban,
  Network,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CtaArrow from "@/components/CtaArrow";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";
import ProgramSectionHeader from "@/components/programs/ProgramSectionHeader";
import { applicationFormLinkProps } from "@/data/applicationForm";
import styles from "./Admissions.module.css";

const heroStats = [
  "600+ Learning Hours",
  "6-Month Residential Program",
  "Industry Mentorship",
  "Placement Assistance",
  "IIT Ecosystem",
];

const processSteps = [
  {
    icon: PenLine,
    title: "Submit Application",
    description: "Complete the online form with academic and identity documents.",
  },
  {
    icon: ClipboardCheck,
    title: "AINPT Assessment",
    description: "120-minute proctored evaluation of aptitude and technical fundamentals.",
  },
  {
    icon: UserCheck,
    title: "Panel Interview",
    description: "Conversation with IIT faculty and industry mentors on fit and potential.",
  },
  {
    icon: Mail,
    title: "Offer Letter",
    description: "Selected candidates receive a formal admission offer from IITGN CDF.",
  },
  {
    icon: CheckCircle2,
    title: "Enrollment",
    description: "Confirm your seat by completing fee payment and onboarding.",
  },
];

const eligibleFields = [
  { icon: GraduationCap, label: "Engineering" },
  { icon: Code2, label: "Computer Science" },
  { icon: Laptop, label: "IT" },
  { icon: Cpu, label: "Electronics" },
  { icon: LineChart, label: "Mathematics" },
  { icon: Database, label: "Data Science" },
];

const additionalRequirements = [
  "Programming Basics",
  "Problem Solving",
  "Analytical Thinking",
  "Communication Skills",
];

const admissionRounds = [
  {
    badge: "Round 1",
    icon: ClipboardCheck,
    title: "All India National Proficiency Test (AINPT · IITGN)",
    description: "A 120-minute online proctored test that evaluates:",
    highlights: [
      "Quantitative aptitude",
      "Logical reasoning",
      "Technical concepts (DSA basics, programming fundamentals)",
      "Coding challenges (Python/Java based on your chosen track)",
    ],
    note: "Results are declared within 48 hours of the test.",
  },
  {
    badge: "Round 2",
    icon: MessageSquare,
    title: "Personal Interview",
    description:
      "Shortlisted candidates appear for a panel interview with IIT faculty and industry mentors. The conversation assesses:",
    highlights: [
      "Technical capability and clarity of fundamentals",
      "Problem-solving approach and ability to learn fast",
      "Motivation, commitment, and fit for the residential program",
    ],
    note: "Panel feedback decides the final offer and track allocation.",
  },
];

const careerSupport = [
  {
    icon: Users,
    title: "Dedicated Placement Team",
    description: "Structured guidance from IITGN CDF placement support specialists.",
  },
  {
    icon: FileText,
    title: "Resume Building",
    description: "Professional resume and profile development for AI-ML roles.",
  },
  {
    icon: MessageSquare,
    title: "Mock Interviews",
    description: "Communication grooming and interview readiness sessions.",
  },
  {
    icon: Briefcase,
    title: "Industry Mentorship",
    description: "Direct interaction with practitioners and hiring leaders.",
  },
  {
    icon: FolderKanban,
    title: "Portfolio Development",
    description: "Build a showcase of projects and capstone work.",
  },
  {
    icon: Network,
    title: "Partner Network Opportunities",
    description: "Access placement pathways through IITGN CDF's partner network.",
  },
];

const feeSummary = [
  { label: "Tuition", amount: "₹5,00,000" },
  { label: "Residential & Operations", amount: "₹1,25,000" },
  { label: "Application", amount: "₹3,000" },
];

const feeBreakdown = [
  {
    label: "Tuition Fee",
    amount: "₹5,00,000",
    detail: "All inclusive — covers academic delivery, faculty sessions, labs, and assessments.",
    payableTo: "IIT Gandhinagar CDF",
  },
  {
    label: "Hostel & Operations Fee",
    amount: "₹1,25,000",
    detail: "GST applicable. Includes hostels, meals, campus facilities, and admin for 6 months.",
    payableTo: "Futurense Technologies",
  },
  {
    label: "Application Fee",
    amount: "₹3,000",
    detail: "One-time, non-refundable processing fee.",
    payableTo: "Futurense Technologies",
  },
];

const refundTimeline = [
  {
    period: "Before Program Start",
    amount: "₹4,00,000 Refund",
    status: "Eligible",
    variant: "refundGreen" as const,
  },
  {
    period: "Within 15 Days",
    amount: "₹2,00,000 Refund",
    status: "Partial",
    variant: "refundAmber" as const,
  },
  {
    period: "After 15 Days",
    amount: "No Refund",
    status: "Not Eligible",
    variant: "refundRed" as const,
  },
];

const trustBadges = [
  "IIT Ecosystem",
  "Industry Mentorship",
  "Placement Support",
  "Residential Experience",
];

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="section-alt pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={styles.heroGrid}>
            <div>
              <p className="eyebrow mb-3">Admissions 2026</p>
              <h1 className={styles.heroTitle}>Start Your Application</h1>
              <p className={styles.heroDesc}>
                Complete the online application for the PG Diploma in AI-ML and Agentic AI Engineering.
                Shortlisted candidates proceed through AINPT evaluation and a panel interview.
              </p>

              <div className={styles.heroStats}>
                {heroStats.map((stat) => (
                  <div key={stat} className={styles.heroStat}>
                    {stat}
                  </div>
                ))}
              </div>

              <div className={styles.heroActions}>
                <Button asChild size="lg" variant="cta">
                  <a {...applicationFormLinkProps} className="hover:no-underline">
                    Apply Now
                    <CtaArrow />
                  </a>
                </Button>
                <BrochureDownloadButton premium size="lg" variant="ctaOutline" />
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <img
                  src="/programs/AIA.jpg"
                  alt="IIT Gandhinagar admissions"
                  loading="eager"
                />
              </div>
              <span className={`${styles.floatingBadge} ${styles.badgeTop}`}>Admission Open</span>
              <span className={`${styles.floatingBadge} ${styles.badgeMid}`}>Limited Cohort</span>
              <span className={`${styles.floatingBadge} ${styles.badgeBottom}`}>IITGN Campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="How to Apply"
            title="Application Process"
            description="A clear five-step pathway from application to enrollment."
          />

          <div className={styles.stepsGrid}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <div className={styles.stepIcon}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Who Can Apply"
            title="Eligibility Criteria"
            description="Open to graduates from relevant technical and analytical backgrounds."
          />

          <div className={styles.eligibilityGrid}>
            {eligibleFields.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.eligibilityCard}>
                <div className={styles.eligibilityIcon}>
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className={styles.eligibilityLabel}>{label}</p>
              </div>
            ))}
          </div>

          <div className={styles.requirementsCard}>
            <h3>Additional Requirements</h3>
            <div className={styles.requirementsGrid}>
              {additionalRequirements.map((item) => (
                <span key={item} className={styles.requirementItem}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className={styles.degreeNote}>
            Applicants must hold a B.Tech / B.E. / B.S. (4-year), M.Sc., MCA, or equivalent with
            minimum 50% marks or 5.0 CPI/CGPA. Candidates with strong programming skills or industry
            experience may be considered at the Academic Committee&apos;s discretion.
          </p>
        </div>
      </section>

      {/* AINPT + Interview */}
      <section className="section-xl">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Evaluation"
            title="AINPT & Interview Rounds"
            description="Two structured rounds to evaluate skill, potential, and programme fit."
          />

          <div className={styles.roundsGrid}>
            {admissionRounds.map((round) => {
              const Icon = round.icon;
              return (
                <article key={round.title} className={styles.roundCard}>
                  <p className={styles.roundBadge}>{round.badge}</p>
                  <div className={styles.roundHeader}>
                    <div className={styles.roundIcon}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className={styles.roundTitle}>{round.title}</h3>
                  </div>
                  <p className={styles.roundDesc}>{round.description}</p>
                  <ul className={styles.roundList}>
                    {round.highlights.map((item) => (
                      <li key={item} className={styles.roundListItem}>
                        <Check className={styles.roundCheck} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.roundNote}>{round.note}</p>
                </article>
              );
            })}
          </div>

          <p className={styles.partnerNote}>
            M/s. Futurense Technologies Pvt. Ltd. is the Admissions, Industry and Hospitality
            Partner for the IITGN CDF PG Diploma Programs.
          </p>
        </div>
      </section>

      {/* Career Support */}
      <section className="section-xl section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Career Pathways"
            title="Career Assistance & Placement Support"
            description="Dedicated mentors guide you from resume building to partner-led placement opportunities."
          />

          <div className={styles.careerGrid}>
            {careerSupport.map(({ icon: Icon, title, description }) => (
              <article key={title} className={styles.careerCard}>
                <div className={styles.careerIcon}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className={styles.careerTitle}>{title}</h3>
                <p className={styles.careerDesc}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Investment */}
      <section className="section-xl">
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

          <div className={styles.financingPills}>
            <span className={styles.financingPill}>EMI Available</span>
            <span className={styles.financingPill}>Financing Support</span>
            <span className={styles.financingPill}>Transparent Payment Structure</span>
          </div>

          <div className={styles.pricingGrid}>
            {feeBreakdown.map((fee) => (
              <article key={fee.label} className={styles.pricingCard}>
                <p className={styles.pricingLabel}>{fee.label}</p>
                <p className={styles.pricingAmount}>{fee.amount}</p>
                <p className={styles.pricingDetail}>{fee.detail}</p>
                <p className={styles.pricingPayable}>
                  Payable to: <strong>{fee.payableTo}</strong>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section id="refund-policy" className="section-xl section-alt scroll-mt-28">
        <div className="container mx-auto px-4 lg:px-8">
          <ProgramSectionHeader
            eyebrow="Policy"
            title="Refund Policy"
            description="Tuition fee refund timelines for withdrawal requests. Application and hostel fees are non-refundable."
          />

          <div className={styles.refundGrid}>
            {refundTimeline.map((item) => (
              <article key={item.period} className={`${styles.refundCard} ${styles[item.variant]}`}>
                <span className={styles.refundStatus}>{item.status}</span>
                <p className={styles.refundPeriod}>{item.period}</p>
                <p className={styles.refundAmount}>{item.amount}</p>
              </article>
            ))}
          </div>

          <p className={styles.refundDisclaimer}>
            Application fees and hostel fees are non-refundable under all circumstances. Only the
            tuition fee is refunded depending on the date of withdrawal approval, as per institutional
            guidelines.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className={styles.finalCtaTitle}>Ready to Begin Your AI Journey?</h2>
          <p className={styles.finalCtaDesc}>
            Join IIT Gandhinagar&apos;s immersive residential learning ecosystem and accelerate your
            career in AI, ML and Agentic Systems.
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

          <div className={styles.trustBadges}>
            {trustBadges.map((badge) => (
              <span key={badge} className={styles.trustBadge}>
                <Check className={styles.trustCheck} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
