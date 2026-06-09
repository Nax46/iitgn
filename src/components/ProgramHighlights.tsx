import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";

const program = {
  title: "PG Diploma in AI-ML & Agentic AI Engineering",
  description:
    "A residential program combining IIT Gandhinagar's academic rigour with applied training in LLM systems, multi-agent workflows, and production AI deployment.",
  route: "/gen-ai-agentic-aiml",
  badge: "Residential PG Diploma",
  stats: [
    { label: "Duration", value: "6 Months", detail: "Full-time, on campus" },
    { label: "Mentored Hours", value: "600+", detail: "Labs, projects, and reviews" },
    { label: "Credential", value: "PG Diploma", detail: "Awarded by IIT Gandhinagar" },
  ],
  skills: [
    "Multi-agent orchestration and tool integration",
    "LLM fine-tuning, evaluation, and guardrails",
    "MLOps, observability, and CI/CD for AI systems",
    "Responsible AI, governance, and compliance frameworks",
    "Capstone project with industry mentorship",
  ],
};

const ProgramHighlights = () => {
  return (
    <section aria-labelledby="program-highlights-heading" className="section-spacing bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="eyebrow mb-3">Program Overview</p>
              <h2 id="program-highlights-heading" className="text-display-sm mb-4">
                PG Diploma in AI-ML &amp; Agentic AI
              </h2>
              <p className="text-lead">
                A six-month residential programme for engineers and technologists seeking depth in
                applied AI, with structured pathways to industry roles.
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                {program.badge}
              </p>
              <h3 className="text-heading-md">{program.title}</h3>
              <p className="text-sm text-muted-foreground">
                Delivered in partnership with Futurense (Admissions, Industry and Hospitality Partner)
              </p>
              <p className="text-base text-foreground/85 leading-relaxed pt-1">{program.description}</p>
            </div>

            <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 border-t border-border pt-8">
              {program.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <dd className="text-sm text-muted-foreground">{stat.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 border border-border bg-muted/30">
            <div className="border-b border-border bg-card px-6 py-5 lg:px-8">
              <h4 className="font-serif text-lg font-semibold text-foreground">Learning Outcomes</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Competencies graduates are expected to demonstrate upon completion.
              </p>
            </div>

            <ul className="divide-y divide-border" aria-label={`${program.title} learning outcomes`}>
              {program.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-4 px-6 py-4 lg:px-8 lg:py-5 bg-card">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm lg:text-base text-foreground leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 border-t border-border bg-card px-6 py-5 lg:px-8">
              <Button asChild variant="cta">
                <Link to={program.route}>View Full Curriculum</Link>
              </Button>
              <BrochureDownloadButton size="sm" variant="ctaOutline" label="Download Brochure" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
