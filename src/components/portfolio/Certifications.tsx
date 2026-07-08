import { CERTIFICATIONS, STUDYING } from "@/lib/portfolio-data";
import { Award, BadgeCheck, BookOpen, Calendar } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="bg-section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Certifications</span>
          <h2 className="section-title mt-3">
            Credentials that <span className="text-gradient">back the craft</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.name}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate awarded to Sinesipho Matam`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" /> {cert.org}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {cert.date}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline mt-5 !px-4 !py-2 text-xs"
                  >
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Verify Certificate
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 rounded-3xl border border-dashed border-primary/30 bg-card/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-bold">Currently Studying</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {STUDYING.map((s) => (
              <span
                key={s}
                className="rounded-full border border-primary/25 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
