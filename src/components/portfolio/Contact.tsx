import { SOCIALS } from "@/lib/portfolio-data";
import { CalendarClock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SERVICES = [
  "AI Website Development",
  "Web Application Development",
  "Business Automation",
  "Website Hosting & Maintenance",
  "Technical Consulting",
  "Other",
];

const BUDGETS = ["Under R5,000", "R5,000 – R15,000", "R15,000 – R50,000", "R50,000+", "Not sure yet"];

const inputCls =
  "w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30 focus:outline-none transition-colors";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    service: "",
    description: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      toast.error("Please fill in your name, email and project description.");
      return;
    }
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nBudget: ${form.budget}\nService: ${form.service}\n\nProject Description:\n${form.description}`,
    );
    window.location.href = `${SOCIALS.email}?subject=${encodeURIComponent(`Project Enquiry from ${form.name}`)}&body=${body}`;
    toast.success("Opening your email client — I'll get back to you within 24 hours!");
  };

  return (
    <section id="contact" className="bg-section py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Contact</span>
          <h2 className="section-title mt-3">
            Let's build something <span className="text-gradient">great together</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="reveal mt-12 rounded-[2rem] border border-border bg-card p-6 shadow-elevated sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                Full Name *
              </label>
              <input id="name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Email Address *
              </label>
              <input id="email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-semibold">
                Company
              </label>
              <input id="company" value={form.company} onChange={set("company")} className={inputCls} placeholder="Company name (optional)" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
                Phone Number
              </label>
              <input id="phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+27 ..." />
            </div>
            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-semibold">
                Budget
              </label>
              <select id="budget" value={form.budget} onChange={set("budget")} className={inputCls}>
                <option value="">Select a budget range</option>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
                Service Required
              </label>
              <select id="service" value={form.service} onChange={set("service")} className={inputCls}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="mb-1.5 block text-sm font-semibold">
                Project Description *
              </label>
              <textarea
                id="description"
                required
                rows={5}
                value={form.description}
                onChange={set("description")}
                className={inputCls}
                placeholder="Tell me about your project, goals and timeline..."
              />
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button type="submit" className="btn-primary">
              <Send className="h-4 w-4" aria-hidden="true" /> Send Message
            </button>
            <a
              href={`${SOCIALS.email}?subject=${encodeURIComponent("Consultation Request")}`}
              className="btn-outline"
            >
              <CalendarClock className="h-4 w-4" aria-hidden="true" /> Schedule Consultation
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
