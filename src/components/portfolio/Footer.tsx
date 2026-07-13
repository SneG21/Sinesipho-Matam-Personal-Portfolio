import { NAV_LINKS, SOCIALS } from "@/lib/portfolio-data";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const SOCIAL_ICONS = [
  { icon: Github, href: SOCIALS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SOCIALS.email, label: "Email" },
  { icon: MessageCircle, href: SOCIALS.whatsapp, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold">
              Sinesipho<span className="text-gradient">.dev</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Software Engineer · IT Support Specialist · Cybersecurity Enthusiast. Building
              secure, scalable, AI-powered solutions.
            </p>
          </div>
          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Quick Links
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Social Media
            </h3>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-outline mt-6 !px-4 !py-2 text-xs"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" /> Back to Top
            </button>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-1.5 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© 2026 Sinesipho Matam. All rights reserved.</p>
          <p>Built with ❤️ by Sinesipho Matam · Powered by Lovable</p>
        </div>
      </div>
    </footer>
  );
}
