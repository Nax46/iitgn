import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrochureDownloadButton from "@/components/BrochureDownloadButton";

const program = {
  title: "PG Diploma in AI-ML & Agentic AI Engineering",
  description:
    "Design production-grade LLM workflows, multi-agent pipelines, and responsible AI systems that combine LangChain, LangGraph, AutoGen, and CrewAI.",
  route: "/gen-ai-agentic-aiml",
  badge: "Residential PG Diploma",
  stats: [
    { label: "Duration", value: "6 Months" },
    { label: "Mentored Hours", value: "600+" },
    { label: "Certification", value: "PG Diploma" },
  ],
  skills: [
    "Multi-agent orchestration & tool usage",
    "LLM fine-tuning, evaluation, and guardrails",
    "MLOps, observability, and CI/CD for AI",
    "Responsible AI, governance, and compliance",
    "Capstone with LangChain + enterprise APIs",
  ],
};

const ProgramHighlights = () => {
  return (
    <section aria-labelledby="program-highlights-heading" className="section-spacing bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <p className="eyebrow mb-3">Program Overview</p>
          <h2 id="program-highlights-heading" className="text-display-sm mb-3">
            Our PG Diploma Program
          </h2>
          <p className="text-lead">
            A residential, industry-aligned specialization built for careers in AI-ML and Agentic AI.
          </p>
        </div>

        <article className="card-panel max-w-5xl border-t-4 border-t-accent">
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="space-y-3 border-b border-border pb-6">
              <p className="eyebrow">{program.badge}</p>
              <h3 className="text-heading-lg">{program.title}</h3>
              <p className="text-sm font-medium text-secondary">
                Futurense — Admissions, Industry and Hospitality Partner
              </p>
              <p className="text-lead max-w-3xl">{program.description}</p>
            </div>

            <dl className="grid gap-px sm:grid-cols-3 border border-border bg-border">
              {program.stats.map((stat) => (
                <div key={stat.label} className="bg-card p-4 lg:p-5">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
                  <dd className="font-serif text-xl font-semibold text-foreground mt-1">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
                Learning Outcomes
              </h4>
              <ul className="grid gap-3 md:grid-cols-2" aria-label={`${program.title} skill outcomes`}>
                {program.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
              <Button asChild variant="cta">
                <Link to={program.route}>View Full Curriculum</Link>
              </Button>
              <BrochureDownloadButton size="sm" variant="ctaOutline" label="Download Brochure" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProgramHighlights;
