import { MessageSquareQuote, Star } from "lucide-react";

const PLACEHOLDERS = [
  {
    type: "Client Testimonial",
    quote:
      "Your feedback could be here. I'd love to build something great together — and let the results speak for themselves.",
    name: "Future Client",
    role: "Ascend Digital Partner",
  },
  {
    type: "LinkedIn Recommendation",
    quote:
      "Colleagues and mentors: your recommendation would mean a lot. Connect with me on LinkedIn and let's share our experience working together.",
    name: "Your Name Here",
    role: "Connect on LinkedIn",
  },
  {
    type: "Professional Reference",
    quote:
      "References from managers and team leads available on request — covering IT support, operations leadership and software delivery.",
    name: "Available on Request",
    role: "Professional Reference",
  },
];

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Testimonials</span>
          <h2 className="section-title mt-3">
            What people <span className="text-gradient">say</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDERS.map((t) => (
            <figure
              key={t.type}
              className="reveal flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <MessageSquareQuote className="h-8 w-8 text-secondary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="mb-1.5 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
