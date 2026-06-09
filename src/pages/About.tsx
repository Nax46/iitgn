import {
  Building2,
  Target,
  Heart,
  Users,
  Award,
  Shield,
  GraduationCap,
  Home,
  Briefcase,
  Eye,
  BookOpen,
  Handshake,
  FlaskConical,
  Cpu,
  Network,
  Play,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Board from "@/components/Board";
import styles from "./About.module.css";

const missions = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Prepare Professionals for Emerging Fields",
    description:
      "Deliver rigorous training in AI, data science, and related disciplines so graduates can apply current methods with confidence in industry settings.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Support Career Transitions",
    description:
      "Offer structured mentorship, project reviews, and placement coordination for participants moving into new technical roles.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Connect Research with Practice",
    description:
      "Draw on IIT Gandhinagar's faculty expertise and research culture to inform curriculum design and capstone work.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Uphold Ethical Standards",
    description:
      "Emphasise responsible development of AI systems, data governance, and professional conduct throughout the programme.",
  },
];

const whyChooseUs = [
  {
    icon: <Award className="w-5 h-5" />,
    title: "IIT Gandhinagar Credential",
    description:
      "Programmes are offered under the aegis of IIT Gandhinagar, with academic oversight from institute faculty and leadership.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: "Industry-Aligned Curriculum",
    description:
      "Course content is developed with input from practitioners so that labs and projects reflect workplace expectations.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Applied Learning Hours",
    description:
      "A substantial share of contact hours is devoted to laboratories, projects, and capstones rather than lecture-only delivery.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Focus on AI and Agentic Systems",
    description:
      "The PG Diploma concentrates on AI-ML, large language models, multi-agent workflows, and production deployment practices.",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Residential Campus Experience",
    description:
      "Participants live on campus for six months, with access to institute facilities and a cohort-based learning environment.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Placement Coordination",
    description:
      "Career support includes resume review, interview preparation, and introductions through CAA and partner organisations.",
  },
];

const advantageHighlights = [
  {
    icon: <Award className="w-5 h-5" />,
    title: "PG Diploma from IIT Gandhinagar",
    description:
      "Successful participants receive a Post Graduate Diploma awarded through the institute's competency development framework.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "On-Campus Residence",
    description:
      "Residential stay provides access to laboratories, the library, maker spaces, and the wider IITGN academic community.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Industry Mentorship",
    description:
      "Practitioners contribute to project reviews and guest sessions, helping align outcomes with hiring expectations.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Career Services Network",
    description:
      "Placement coordination is supported by CAA and Futurense, with interview preparation and recruiter introductions.",
  },
];

const commitments = [
  {
    title: "Academic Integrity",
    desc: "Maintain clear standards for assessment, attendance, and programme completion.",
  },
  {
    title: "Student Support",
    desc: "Provide academic guidance, career counselling, and access to institute resources throughout the programme.",
  },
  {
    title: "Curriculum Relevance",
    desc: "Review course content regularly in consultation with faculty and industry advisors.",
  },
  {
    title: "Responsible Technology",
    desc: "Address data ethics, model governance, and safe deployment in teaching and project work.",
  },
  {
    title: "Public Purpose",
    desc: "Contribute to national skill development goals through rigorous, accessible professional education.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — Institutional Profile */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 section-muted border-b border-border overflow-hidden">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <p className="eyebrow mb-4">Institutional Profile</p>
            <div className="icon-box mx-auto mb-6">
              <Building2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <h1 className="text-display-md mb-5">
              About{" "}
              <span className="text-secondary">IIT Gandhinagar Competency Development Foundation</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              IITGN CDF is a Section 8 company under IIT Gandhinagar, established to offer residential
              professional programmes that link institute academics with industry practice.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial profile */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`${styles.editorial} animate-fade-up`}>
            <p>
              The IIT Gandhinagar Competency Development Foundation (IITGN CDF) was set up under the
              Indian Institute of Technology Gandhinagar to extend the institute&apos;s teaching and
              research strengths into professional education for working graduates and early-career
              professionals.
            </p>
            <p>
              Programmes are delivered through the Competency Advancement Academy (CAA) in partnership
              with IITGN CDF. They combine residential instruction, laboratory work, and capstone projects
              with input from faculty and industry practitioners.
            </p>
            <p>
              Current offerings include intensive programmes in Artificial Intelligence, Data Science,
              Cloud Computing, Cybersecurity, Robotics, and Semiconductor Manufacturing. IITGN CDF
              operates according to the institute&apos;s values of integrity, rigour, and service to
              society.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section className="py-14 lg:py-20 section-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12 animate-fade-up">
            <p className="eyebrow mb-3">Leadership</p>
            <h2 className="text-display-sm mb-3">Message from the Director</h2>
            <p className="text-lead">
              Prof Rajat Moona, Director of IIT Gandhinagar and Chairman of IITGN CDF, on the
              foundation&apos;s role in professional education.
            </p>
          </div>

          <div className={`${styles.leadershipFrame} animate-fade-up animation-delay-100`}>
            <iframe
              className={styles.leadershipVideo}
              src="https://www.youtube.com/embed/_FsoQVOXw20"
              title="Message from Prof Rajat Moona, Director, IIT Gandhinagar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className={styles.leadershipCaption}>
              <p className="font-serif font-semibold text-foreground">Prof Rajat Moona</p>
              <p className="text-sm text-muted-foreground mt-1">
                Director, IIT Gandhinagar · Chairman, IITGN Competency Development Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus experience */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12 animate-fade-up">
            <p className="eyebrow mb-3">Campus</p>
            <h2 className="text-display-sm mb-3">Life at IIT Gandhinagar</h2>
            <p className="text-lead">
              Residential programmes take place on the IITGN campus in Palaj, Gandhinagar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <article className={`${styles.campusCard} animate-fade-up`}>
              <iframe
                className={styles.campusMedia}
                src="https://www.youtube.com/embed/fK9y8wiHUsk"
                title="IIT Gandhinagar campus tour"
                allowFullScreen
              />
              <div className={styles.campusBody}>
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <Play className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Campus Tour</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  IIT Gandhinagar Campus
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  An overview of academic buildings, residential facilities, and the riverfront
                  setting of the institute.
                </p>
              </div>
            </article>

            <article className={`${styles.campusCard} animate-fade-up animation-delay-100`}>
              <div className={styles.campusPlaceholder}>
                <div className="text-center px-6">
                  <div className="icon-box-secondary mx-auto mb-4">
                    <Users className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Student life video forthcoming</p>
                </div>
              </div>
              <div className={styles.campusBody}>
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Community</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Residential Learning Environment
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Participants join a cohort on campus, with access to institute clubs, sports
                  facilities, and cultural activities.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 lg:py-20 section-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 lg:mb-10 animate-fade-up">
            <p className="eyebrow mb-3">Our Vision</p>
            <div className="icon-box mx-auto mb-4">
              <Eye className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <blockquote className={`${styles.visionQuote} animate-fade-up animation-delay-100`}>
            <p className={styles.visionText}>
              To establish IIT Gandhinagar as a leading centre for competency-based professional
              education that serves industry needs and advances public understanding of technology.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 lg:mb-14 animate-fade-up">
            <p className="eyebrow mb-3">Our Mission</p>
            <h2 className="text-display-sm mb-3">What We Set Out to Do</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Four commitments that guide programme design and delivery at IITGN CDF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {missions.map((mission, index) => (
              <article
                key={mission.title}
                className={`${styles.missionCard} animate-fade-up`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={styles.missionIcon} aria-hidden="true">
                  {mission.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {mission.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mission.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CAA */}
      <section className="py-14 lg:py-20 section-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 lg:mb-14 animate-fade-up">
            <p className="eyebrow mb-3">Programme Distinction</p>
            <h2 className="text-display-sm mb-3">Why Choose CAA at IITGN</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Reasons professionals select our residential programmes at IIT Gandhinagar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <article
                key={reason.title}
                className={`${styles.featureCard} animate-fade-up`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className={styles.featureIcon} aria-hidden="true">
                  {reason.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Board />

      {/* IIT Advantage — unified panel */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 lg:mb-12 animate-fade-up">
            <p className="eyebrow mb-3">Participant Benefits</p>
            <h2 className="text-display-sm mb-3">The IIT Advantage</h2>
            <p className="text-lead max-w-2xl mx-auto">
              What participants gain from studying on the IIT Gandhinagar campus.
            </p>
          </div>

          <div className={`${styles.advantagePanel} max-w-5xl mx-auto animate-fade-up animation-delay-100`}>
            <div className={styles.advantageList}>
              {advantageHighlights.map((highlight) => (
                <div key={highlight.title} className={styles.advantageItem}>
                  <div className={styles.advantageItemIcon} aria-hidden="true">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.advantageImageWrap}>
              <img
                src="/images/IIT.avif"
                alt="Classroom and learning spaces at IIT Gandhinagar"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to excellence — values timeline */}
      <section className="py-14 lg:py-20 section-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 lg:mb-12 animate-fade-up">
            <p className="eyebrow mb-3">Our Values</p>
            <div className="icon-box mx-auto mb-4">
              <Heart className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2 className="text-display-sm mb-3">Commitment to Excellence</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Principles that inform academic standards and student support at IITGN CDF.
            </p>
          </div>

          <div className={`${styles.valuesStack} animate-fade-up animation-delay-100`}>
            {commitments.map((item) => (
              <div key={item.title} className={styles.valueItem}>
                <span className={styles.valueDot} aria-hidden="true" />
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
