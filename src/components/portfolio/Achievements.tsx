import { useCountUp, useInView } from "@/hooks/use-reveal";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";

function Counter({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1.5 text-sm font-medium text-primary-foreground/85">{label}</p>
    </div>
  );
}

export function Achievements() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);

  return (
    <section aria-label="Achievements" className="px-4 py-10 sm:px-6">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-[2.5rem] bg-gradient-primary px-6 py-12 shadow-elevated sm:grid-cols-3 lg:grid-cols-5 lg:px-12"
      >
        {ACHIEVEMENTS.map((a) => (
          <Counter key={a.label} {...a} inView={inView} />
        ))}
      </div>
    </section>
  );
}
