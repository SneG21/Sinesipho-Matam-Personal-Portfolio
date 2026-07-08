import { EXPERIENCE } from "@/lib/portfolio-data";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-section py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Experience</span>
          <h2 className="section-title mt-3">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <ol className="relative mt-14 space-y-10 border-l-2 border-primary/20 pl-8 sm:pl-10">
          {EXPERIENCE.map((exp) => (
            <li key={exp.role} className="reveal relative">
              <span
                className={`absolute top-1 -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full sm:-left-[3.05rem] ${
                  exp.current ? "bg-gradient-primary text-primary-foreground shadow-soft" : "border-2 border-primary/30 bg-card text-primary"
                }`}
                aria-hidden="true"
              >
                <Briefcase className="h-4 w-4" />
              </span>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <span className="chip">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">{exp.company}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
