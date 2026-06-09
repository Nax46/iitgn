import { FormEvent, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Plane,
  Train,
  Car,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  SendIcon,
  Loader2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const CONTACT_PROGRAM_OPTIONS = [
  {
    value: "aiml",
    label: "PG Diploma in AI-ML & Agentic AI Engineering",
  },
  {
    value: "not-sure",
    label: "I'm still exploring my options",
  },
];

const API_TIMEOUT_MS = 12000;

const sanitizeText = (value: FormDataEntryValue | null) => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : undefined;
};

const normalizePhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return null;
  }
  return value.trim().startsWith("+") ? `+${digits}` : `+${digits}`;
};

const resolveApiBaseUrl = () => {
  const envUrl = (import.meta.env.VITE_API_URL as string | undefined)?.trim();
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    const isLocalHost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalHost) {
      return "http://localhost:3333";
    }

    return window.location.origin.replace(/\/$/, "");
  }

  return "http://localhost:3333";
};

type SubmissionFeedback = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<SubmissionFeedback | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = sanitizeText(formData.get("fullName"));
    const email = sanitizeText(formData.get("email"));
    const organization = sanitizeText(formData.get("organization"));
    const message = sanitizeText(formData.get("message"));
    const programSelection = sanitizeText(formData.get("programInterest"));
    const programInterest =
      programSelection &&
      CONTACT_PROGRAM_OPTIONS.find((option) => option.value === programSelection)?.label;
    const normalizedPhone = normalizePhoneNumber((formData.get("phone") as string) ?? "");
    const honeypot = sanitizeText(formData.get("honeypot"));

    if (!fullName || !email) {
      toast({
        title: "Missing information",
        description: "Please provide both your full name and email address.",
        variant: "destructive",
      });
      return;
    }

    if (!normalizedPhone) {
      toast({
        title: "Invalid mobile number",
        description: "Include your country code (e.g., +91) followed by 10-15 digits.",
        variant: "destructive",
      });
      return;
    }

    if (!message || message.length < 20) {
      toast({
        title: "Message is too short",
        description: "Please share at least 20 characters so we can guide you properly.",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      fullName,
      email,
      phone: normalizedPhone,
      organization,
      programInterest: programInterest ?? programSelection ?? undefined,
      message,
      honeypot,
    };

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    // try {
    //   setIsSubmitting(true);
    //   setSubmissionFeedback(null);

    //   const apiUrl = `${resolveApiBaseUrl()}/api/forms/contact`;
    //   console.log("Submitting contact form to:", apiUrl);

    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //     signal: controller.signal,
    //   });

    //   clearTimeout(timeoutId);

    //   console.log("Response status:", response.status, response.statusText);

    //   const result = await response.json().catch(() => ({}));

    //   if (!response.ok) {
    //     console.error("API error:", result);
    //     throw new Error(result.message ?? result.error?.message ?? "Unable to send your message right now.");
    //   }

    //   const successMessage =
    //     result.status === "queued_for_review"
    //       ? "We received your submission and queued it for a quick manual review."
    //       : "Thank you! Our team will reach out within 24–48 hours.";

    //   setSubmissionFeedback({ type: "success", message: successMessage });
    //   toast({
    //     title: "Message sent successfully!",
    //     description: successMessage,
    //   });

    //   form.reset();
    // } catch (error) {
    try {
      setIsSubmitting(true);
      setSubmissionFeedback(null);

      // PASTE YOUR GOOGLE APPS SCRIPT URL HERE
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxSHUL3RdqGBxf_7si0PZ3wxtTxMkhXR0BGL97ZE-ubVl22atYx2Nl_1SNj3MntOdhg/exec";

      console.log("Thanks!");

      // Note: We use 'no-cors' mode for Google Scripts sometimes to avoid CORS errors, 
      // but sending JSON usually works with the standard method if the script handles OPTIONS.
      // However, the most reliable way for Google Scripts from React is using fetch normally
      // but treating the response carefully as Google sends a redirect.

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // Google Scripts sometimes require 'text/plain' to avoid pre-flight CORS checks,
        // but the script parses it as JSON.
        body: JSON.stringify(payload),
      });

      // Google Script returns a 200 OK on success usually. 
      // With simple Google Scripts, we assume success if no network error occurred.

      const successMessage = "Thank you! Our team will reach out within 24–48 hours.";

      setSubmissionFeedback({ type: "success", message: successMessage });
      toast({
        title: "Message sent successfully!",
        description: successMessage,
      });

      form.reset();
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Contact form submission error:", error);
      const isAbortError = error instanceof DOMException && error.name === "AbortError";
      const isNetworkError = error instanceof TypeError && error.message.includes("fetch");
      const fallbackMessage = isAbortError
        ? "The request timed out. Please check your connection and try again."
        : isNetworkError
          ? "Unable to connect to the server. Please ensure the backend is running."
          : "Please try again shortly or reach out by phone/email.";
      const description =
        error instanceof Error && error.message ? error.message : fallbackMessage;

      setSubmissionFeedback({ type: "error", message: description });
      toast({
        title: "Failed to send message",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 section-muted border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Phone className="mx-auto mb-6 h-14 w-14 text-secondary" aria-hidden="true" />

            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[3.5rem] mb-6">
              Get in Touch with{" "}
              <span className="text-secondary">IITGN CDF</span>
            </h1>

            <p className="text-lead max-w-3xl mx-auto mb-8">
              We're here to guide you through admissions, campus visits, and program fit.
              Reach us directly or browse the FAQ to move forward with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Button
                variant="bare"
                size="lg"
                className="btn-swap-secondary px-8"
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=admission.caa@iitgn.ac.in",
                    "_blank",
                  );
                }}
              >
                Email IITGN CDF
              </Button>

              <Button asChild variant="bare" size="lg" className="btn-swap-outline-secondary px-8">
                <Link to="/faq">Browse FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display-md mb-12 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <ContactCard
                variant="address"
                icon={<MapPin className="w-6 h-6" />}
                title="Address"
                content={[
                  "Room No. 101, Academic Block No. 03",
                  "IIT Gandhinagar Campus",
                  "Near Palaj Village",
                  "Gandhinagar – 382355",
                  "Gujarat, India",
                ]}
              />
              <ContactCard
                variant="email"
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content={[
                  "Info: cdf@iitgn.ac.in",
                  "Admission: admission.caa@iitgn.ac.in",
                ]}
              />
              <ContactCard
                variant="phone"
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                content={[
                  "Main Office: +91-79-2395-2278",
                  "Admissions Helpline: +91-9220295236",
                ]}
              />
              <ContactCard
                variant="hours"
                icon={<Clock className="w-6 h-6" />}
                title="Office Hours"
                content={["Monday – Friday", "10:00 AM – 6:00 PM IST"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing section-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-medium">
              <div className="mb-8 text-center">
                <h2 className="text-display-md mb-3">Get in Touch!</h2>
                <p className="text-lead">
                  Have a question about our programs? Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      className="rounded-xl"
                      required
                    />
                    <p className="text-xs text-muted-foreground">Include your country code (e.g., +91) followed by 10–15 digits so we can reach you internationally.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Current company or institution"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="programInterest">Program of Interest</Label>
                    <div className="relative">
                      <select
                        id="programInterest"
                        name="programInterest"
                        defaultValue=""
                        className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm font-medium text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <option value="" disabled>
                          Select a program
                        </option>
                        {CONTACT_PROGRAM_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px] rounded-xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="bare"
                  className="btn-swap-secondary w-full py-6"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon className="mr-2 h-4 w-4" />
                      Get in Touch!
                    </>
                  )}
                </Button>
                {submissionFeedback && (
                  <p
                    className={`text-sm text-center ${submissionFeedback.type === "success" ? "text-emerald-600" : "text-destructive"
                      }`}
                    role="status"
                    aria-live="assertive"
                  >
                    {submissionFeedback.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Campus */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-display-md mb-4">Visit Our Campus</h2>
              <p className="text-base lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Interested in experiencing IIT Gandhinagar firsthand?
                <br />
                Schedule a campus tour to explore our facilities, meet faculty and current students,
                <br />
                and learn about the residential experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="group contact-card-interactive rounded-xl border-border bg-primary shadow-soft">
                <CardContent className="p-6">
                  <Plane className="mx-auto mb-4 h-10 w-10 text-white" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-white text-center mb-2">By Air</h3>
                  <p className="text-base text-white/85 text-center leading-relaxed">
                    Sardar Vallabhbhai Patel International Airport, Ahmedabad (30 km)
                    <br />
                    Approximately 45 minutes by taxi/cab
                  </p>
                </CardContent>
              </Card>

              <Card className="group contact-card-interactive rounded-xl border-border bg-primary shadow-soft">
                <CardContent className="p-6">
                  <Train className="mx-auto mb-4 h-10 w-10 text-white" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-white text-center mb-2">By Train</h3>
                  <p className="text-base text-white/85 text-center leading-relaxed">
                    Gandhinagar Capital Railway Station (8 km) – 15 minutes drive
                    <br />
                    Ahmedabad Railway Station (25 km) – 40 minutes drive
                  </p>
                </CardContent>
              </Card>

              <Card className="group contact-card-interactive rounded-xl border-border bg-primary shadow-soft">
                <CardContent className="p-6">
                  <Car className="mx-auto mb-4 h-10 w-10 text-white" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-white text-center mb-2">By Road</h3>
                  <p className="text-base text-white/85 text-center leading-relaxed">
                    Well-connected by state highways from Ahmedabad, Vadodara, and other major cities
                    <br />
                    Ample parking available on campus
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border-border shadow-medium">
              <CardContent className="p-8 md:p-10 text-center">
                <h3 className="text-heading-md mb-3">Schedule a Campus Visit</h3>
                <p className="text-lead mb-6">
                  Campus visits are available by prior appointment only (Monday–Friday)
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="bare" size="lg" className="btn-swap-secondary px-8">
                    <a href="mailto:visit@iitgncdf.ac.in">Email to Schedule Visit</a>
                  </Button>
                  <Button asChild variant="bare" size="lg" className="btn-swap-outline-secondary px-8">
                    <a href="tel:+917923950000">Call to Schedule</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="section-spacing section-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-md mb-3">Stay Connected</h2>
            <p className="text-lead mb-8">
              Follow us on social media for the latest updates, program announcements, and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { Icon: Linkedin, label: "Visit our LinkedIn profile", title: "Follow us on LinkedIn" },
                { Icon: Twitter, label: "Visit our Twitter profile", title: "Follow us on Twitter" },
                { Icon: Facebook, label: "Visit our Facebook page", title: "Follow us on Facebook" },
                { Icon: Instagram, label: "Visit our Instagram profile", title: "Follow us on Instagram" },
                { Icon: Youtube, label: "Visit our YouTube channel", title: "Subscribe to our YouTube channel" },
              ].map(({ Icon, label, title }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-medium hover:text-white hover:no-underline"
                  title={title}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <p className="eyebrow mb-2">Explore More</p>
              <h2 className="text-display-sm">Quick Links</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { to: "/admissions", text: "Apply Now" },
                { to: "/programs", text: "View Programs" },
                { to: "/admissions", text: "Check Eligibility" },
                { to: "/placements", text: "Career Support" },
                { to: "/faq", text: "FAQ" },
                { to: "/about", text: "About Us" },
              ].map((link, index) => (
                <Button key={index} asChild variant="bare" className="btn-swap-secondary w-full">
                  <Link to={link.to}>{link.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
