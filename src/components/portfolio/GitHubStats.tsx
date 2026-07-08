import { SOCIALS } from "@/lib/portfolio-data";
import { Github } from "lucide-react";

export function GitHubStats() {
  return (
    <section id="github" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">GitHub Statistics</span>
          <h2 className="section-title mt-3">
            Coding <span className="text-gradient">Activity</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Live statistics synced automatically from my GitHub profile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-card p-4 shadow-soft">
            <img
              src="https://github-readme-stats.vercel.app/api?username=SneG21&show_icons=true&hide_border=true&title_color=2F80ED&icon_color=56CCF2&text_color=1E293B&bg_color=ffffff&count_private=true"
              alt="GitHub statistics for SneG21: stars, commits and contributions"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
          <div className="reveal rounded-3xl border border-border bg-card p-4 shadow-soft">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=SneG21&layout=compact&hide_border=true&title_color=2F80ED&text_color=1E293B&bg_color=ffffff"
              alt="Most used programming languages on Sinesipho Matam's GitHub"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>

        <div className="reveal mt-6 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Contribution Calendar
          </h3>
          <div className="overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/2F80ED/SneG21"
              alt="GitHub contribution calendar for SneG21"
              loading="lazy"
              className="min-w-[640px]"
            />
          </div>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
