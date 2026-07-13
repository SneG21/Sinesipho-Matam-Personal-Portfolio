import { Brain, Code2, GraduationCap, Shield, Workflow } from "lucide-react";

const PASSIONS = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Brain, label: "AI-Powered Web Development" },
  { icon: Workflow, label: "Business Automation" },
  { icon: GraduationCap, label: "Continuous Learning" },
];

const TECH = [
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "PostgreSQL",
  "SQLite",
  "Docker",
  "Git",
  "GitHub",
  "Linux",
  "REST APIs",
  "JWT Authentication",
];

export function About() {
  return (
    <section id="about" className="bg-section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">About Me</span>
          <h2 className="section-title mt-3">
            From IT Support to <span className="text-gradient">Software Engineering</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="reveal space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              My journey into tech started on the front lines of IT Support — building, fixing and
              securing the systems people depend on every day. Working hands-on with hardware,
              networks and users at Hemingways Casino taught me how technology really serves
              people, and it sparked a deeper ambition: to build the software itself.
            </p>
            <p>
              I completed HyperionDev's Software Engineering Bootcamp and transformed that
              foundation into full-stack expertise — designing Django applications, REST APIs and
              PostgreSQL-backed systems, containerised with Docker. Along the way I earned
              CompTIA Security+, ITIL 4 Foundation and CompTIA A+ certifications, bringing a
              security-first, service-minded approach to everything I build.
            </p>
            <p>
              Today I focus on helping businesses grow with AI-powered websites, web applications
              and automation — combining engineering rigour with real-world business insight.
            </p>
          </div>

          <div className="space-y-6">
            <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PASSIONS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition-transform hover:-translate-y-1"
                >
                  <Icon className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="reveal">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Technologies I work with
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
