import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle, ArrowRight, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxISXHhQQdF6ZAQ4Ex3bVbLOMvF4x1Xm2ZH7c_D6z1hOpx3xJZ7jo3ujl-WuqhHCt0a/exec";

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

const program = {
  title: "PG Diploma in AI-ML & Agentic AI Engineering",
  imgSrc: "/programs/AIA.jpg",
  description:
    "Deep dive into advanced AI methodologies, agentic systems, ethical AI, and responsible governance.",
  link: "/gen-ai-agentic-aiml",
  highlights: [
    "Advanced AI methodologies",
    "Agentic AI systems",
    "Ethical AI principles",
    "Responsible AI governance",
    "Scalable AI solutions",
  ],
};

const feeStructure = [
  {
    component: "Tuition Fee",
    amount: "Rs 5,00,000",
    details: "All inclusive",
    payableTo: "IIT Gandhinagar CDF",
  },
  {
    component: "Hostel & Operations Fee",
    amount: "Rs 1,25,000",
    details: "GST applicable and includes hostels, meals, labs and admin for 6 months. Non Refundable.",
    payableTo: "Futurense Technologies",
  },
  {
    component: "Application Fee",
    amount: "Rs 3,000",
    details: "One-time, Non Refundable",
    payableTo: "Futurense Technologies",
  },
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

      <section className="section-muted border-b border-border pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow mb-3">Academic Programs</p>
            <GraduationCap className="w-10 h-10 text-secondary mb-4" aria-hidden="true" />
            <h1 className="text-display-md mb-4">
              Future Ready <span className="text-secondary">Skill Development Program</span>
            </h1>
            <p className="text-lead max-w-2xl">
              Explore IIT Gandhinagar&apos;s immersive specialization in AI-ML and Agentic Engineering,
              crafted to mirror the clarity and focus of our placement-ready cohort.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="card-elevated border-primary/20 bg-primary/5">
              <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Download the IITGN CDF PG Diploma brochure to explore curriculum highlights,
                  campus experience, and admission details.
                </p>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="ctaOutline"
                      className="px-8"
                    >
                      Download Brochure
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Tell us a bit about you</DialogTitle>
                      <DialogDescription>
                        Fill this short form to unlock the detailed brochure and curriculum.
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 lg:mb-16 animate-fade-up">
            <h2 className="text-display-sm text-foreground">
              An Immersive PG Diploma with Pathways to Multiple Job Families in the AI-ML and Agentic AI Space
            </h2>
          </div>

          <Card className="card-panel max-w-5xl mx-auto overflow-hidden border-t-4 border-t-accent">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[240px] overflow-hidden border-b md:border-b-0 md:border-r border-border">
                <img
                  src={program.imgSrc}
                  alt={program.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col h-full">
                <CardHeader className="space-y-4 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <CardTitle className="text-heading-lg text-foreground">
                      {program.title}
                    </CardTitle>

                    <Button asChild variant="ctaOutline" size="sm">
                      <Link to={program.link} onClick={scrollToTop} className="group flex items-center gap-2">
                        <span>Know More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  <CardDescription className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto p-6 lg:p-8 pt-0">
                  <div className="border border-border bg-muted/30 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2.5">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          <div className="mt-12 max-w-3xl mx-auto animate-fade-up animation-delay-200">
            <Card className="border border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-center">
                  <span className="font-semibold text-primary">Common Foundation (First 6 Weeks):</span>{" "}
                  All learners begin with a shared foundation in AI-ML fundamentals before deepening into agentic systems and production engineering.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Fee Structure
              </p>
              <h3 className="text-heading-md text-foreground mt-2">Transparent Program Investment</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Covers academic delivery, labs, residential experience, and admissions processing.
              </p>
            </div>
            <div className="overflow-x-auto card-panel">
              <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
                <thead className="bg-muted/60 text-muted-foreground uppercase tracking-wide text-xs">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Component</th>
                    <th className="px-6 py-4 font-semibold">Amount</th>
                    <th className="px-6 py-4 font-semibold">Details</th>
                    <th className="px-6 py-4 font-semibold">Payable to</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row) => (
                    <tr key={row.component} className="border-t border-border/60">
                      <td className="px-6 py-4 font-semibold text-foreground">{row.component}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{row.amount}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.details}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.payableTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-6 py-4 text-xs text-muted-foreground bg-muted/40">
                * Detailed payment schedules are shared with admitted cohorts. Financing and EMI support is available through IITGN CDF partners.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 text-center">
            <div className="section-navy px-6 py-10 lg:px-10 lg:py-12 text-center border border-primary/20">
              <p className="eyebrow-light mb-2">Admissions Open</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-3">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-base text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed">
                Apply now and take the first step towards building future-ready skills in AI-ML and Agentic AI Engineering.
              </p>
              <Button asChild size="lg" variant="ctaOnDark">
                <Link to="/admissions">Apply for a Program</Link>
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
