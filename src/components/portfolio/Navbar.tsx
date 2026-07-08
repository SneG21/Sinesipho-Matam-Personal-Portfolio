import { NAV_LINKS } from "@/lib/portfolio-data";
import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 12);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-primary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight">
          Sinesipho<span className="text-gradient">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <span className="cursor-default rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground/60">
              Blog <span className="text-xs">(soon)</span>
            </span>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/resume" className="btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                    active === link.href.slice(1)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Download Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
