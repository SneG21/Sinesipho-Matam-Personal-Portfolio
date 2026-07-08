import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import { useQuery } from "@tanstack/react-query";
import {
  Clock,
  ExternalLink,
  FolderGit2,
  Github,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
  created_at: string;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
}

const FILTERS = ["All", "Python", "Django", "AWS", "Docker", "JavaScript", "HTML", "CSS", "Full Stack"];
const SORTS = ["Featured", "Newest", "Recently Updated", "Most Popular"] as const;

const LANG_COLORS: Record<string, string> = {
  Python: "bg-primary",
  TypeScript: "bg-secondary",
  JavaScript: "bg-secondary",
  HTML: "bg-primary",
};

function matchesFilter(repo: Repo, filter: string) {
  if (filter === "All") return true;
  const haystack = `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""} ${(repo.topics ?? []).join(" ")}`.toLowerCase();
  if (filter === "Full Stack")
    return /django|full.?stack|management|booking|hub|mvp/.test(haystack);
  return haystack.includes(filter.toLowerCase());
}

const FEATURED_NAMES = ["student-management-system", "ai-productivity-assistant", "yla-solutions-mvp"];

function timeAgo(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");

  const { data: repos, isLoading } = useQuery({
    queryKey: ["github-repos"],
    staleTime: 10 * 60_000,
    queryFn: async (): Promise<Repo[]> => {
      const res = await fetch("https://api.github.com/users/SneG21/repos?per_page=100&sort=updated");
      if (!res.ok) throw new Error("GitHub API error");
      return res.json();
    },
  });

  const visible = useMemo(() => {
    const list = (repos ?? []).filter((r) => !r.fork && matchesFilter(r, filter));
    const sorted = [...list];
    switch (sort) {
      case "Newest":
        sorted.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
        break;
      case "Recently Updated":
        sorted.sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at));
        break;
      case "Most Popular":
        sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      default:
        sorted.sort((a, b) => {
          const fa = FEATURED_NAMES.indexOf(a.name.toLowerCase());
          const fb = FEATURED_NAMES.indexOf(b.name.toLowerCase());
          return (fa === -1 ? 99 : fa) - (fb === -1 ? 99 : fb) || +new Date(b.pushed_at) - +new Date(a.pushed_at);
        });
    }
    return sorted;
  }, [repos, filter, sort]);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="chip">Projects</span>
          <h2 className="section-title mt-3">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hand-picked highlights plus every public repository, synced live from GitHub.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <FolderGit2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="chip">Featured</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-5 !px-4 !py-2 text-xs"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> View on GitHub
                </a>
              )}
            </article>
          ))}
        </div>

        {/* GitHub repos */}
        <div className="reveal mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-bold">
              All GitHub Repositories{" "}
              <span className="text-sm font-medium text-muted-foreground">
                ({visible.length})
              </span>
            </h3>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              Sort by
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-44 animate-pulse rounded-3xl bg-muted" />
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((repo) => (
                <article
                  key={repo.id}
                  className="group flex flex-col rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="min-w-0 truncate font-bold group-hover:text-primary">
                      {repo.name.replace(/[-_]/g, " ")}
                    </h4>
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {repo.description ?? "A project by Sinesipho Matam — see the README on GitHub for details."}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${LANG_COLORS[repo.language] ?? "bg-primary"}`}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {timeAgo(repo.pushed_at)}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline flex-1 !px-3 !py-1.5 text-xs"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" /> Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary flex-1 !px-3 !py-1.5 text-xs"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live Demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
