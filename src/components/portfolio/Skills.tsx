import { useInView } from "@/hooks/use-reveal";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Code2, Database, Layers, Sparkles, Terminal } from "lucide-react";

const ICONS: Record<string, typeof Code2> = {
  code: Code2,
  layers: Layers,
  database: Database,
  terminal: Terminal,
  sparkles: Sparkles,
};

function SkillCard({ group }: { group: (typeof SKILL_GROUPS)[number] }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const Icon = ICONS[group.icon] ?? Code2;

  return (
    <div
      ref={ref}
      className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-bold">{group.title}</h3>
      </div>
      <ul className="mt-5 space-y-4">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-xs font-semibold text-primary">{skill.level}%</span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            >
              <div
                className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000 ease-out"
                style={{ width: inView ? `${skill.level}%` : "0%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Technical Skills</span>
          <h2 className="section-title mt-3">
            My <span className="text-gradient">Toolbox</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            The languages, frameworks and tools I use to ship secure, scalable products.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
