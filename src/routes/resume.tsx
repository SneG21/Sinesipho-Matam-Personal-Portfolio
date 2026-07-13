import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EXPERIENCE,
  FEATURED_PROJECTS,
  SKILL_GROUPS,
  STUDYING,
} from "@/lib/portfolio-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  validateSearch: (search: Record<string, unknown>) => ({
    print: search.print === true || search.print === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Resume — Sinesipho Matam" },
      {
        name: "description",
        content:
          "Resume of Sinesipho Matam: Software Engineer and Cybersecurity enthusiast. View, download or print.",
      },
      { property: "og:title", content: "Resume — Sinesipho Matam" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
});

function ResumePage() {
  const { print } = Route.useSearch();

  useEffect(() => {
    if (print) {
      const t = setTimeout(() => window.print(), 600);
      return () => clearTimeout(t);
    }
  }, [print]);

  return (
    <div className="min-h-screen bg-section py-10 print:bg-background print:py-0">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="btn-outline !px-4 !py-2 text-xs">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Portfolio
          </Link>
          <div className="flex gap-2">
            <button onClick={() => window.print()} className="btn-primary !px-4 !py-2 text-xs">
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </button>
            <button onClick={() => window.print()} className="btn-outline !px-4 !py-2 text-xs">
              <Printer className="h-4 w-4" aria-hidden="true" /> Print
            </button>
          </div>
        </div>

        <article className="rounded-3xl border border-border bg-card p-8 shadow-elevated sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <header className="border-b-2 border-primary pb-6">
            <h1 className="text-3xl font-bold">Sinesipho Matam</h1>
            <p className="mt-1 font-semibold text-primary">
              Software Engineer · Cloud Engineer · Co-Founder of Ascend Digital
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              github.com/SneG21 · South Africa
            </p>
          </header>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-primary">Profile</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Software Engineer with an IT Support foundation, specialising in secure, scalable,
              AI-powered web applications and cloud solutions. HyperionDev Software Engineering
              graduate, CompTIA Security+, ITIL 4 and CompTIA A+ certified, currently pursuing
              AWS certifications. Co-Founder & Lead Web Developer at Ascend Digital, helping
              businesses grow through AI websites, automation and consulting.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-primary">Experience</h2>
            <div className="mt-3 space-y-4">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold">
                      {exp.role} — {exp.company}
                    </h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <ul className="mt-1 ml-4 list-disc space-y-0.5 text-sm text-muted-foreground">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-primary">Certifications</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  <span className="font-semibold text-foreground">{c.name}</span> — {c.org} (
                  {c.date})
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Currently studying: {STUDYING.join(" · ")}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-primary">Key Projects</h2>
            <div className="mt-2 space-y-3">
              {FEATURED_PROJECTS.map((p) => (
                <div key={p.name}>
                  <h3 className="text-sm font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <p className="text-xs text-primary">{p.tech.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-bold text-primary">Technical Skills</h2>
            <div className="mt-2 space-y-1.5 text-sm">
              {SKILL_GROUPS.map((g) => (
                <p key={g.title}>
                  <span className="font-semibold">{g.title}: </span>
                  <span className="text-muted-foreground">
                    {g.skills.map((s) => s.name).join(", ")}
                  </span>
                </p>
              ))}
            </div>
          </section>

          <section className="mt-6 border-t border-border pt-4">
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
              {ACHIEVEMENTS.map((a) => (
                <span key={a.label}>
                  <span className="font-bold text-primary">
                    {a.value}
                    {a.suffix}
                  </span>{" "}
                  {a.label}
                </span>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
