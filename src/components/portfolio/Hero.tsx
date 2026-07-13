import { useTypingEffect } from "@/hooks/use-reveal";
import { PORTRAIT_URL, SOCIALS, TYPING_ROLES } from "@/lib/portfolio-data";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const typed = useTypingEffect(TYPING_ROLES);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-soft pt-28 pb-20 sm:pt-36">
      {/* Floating gradient orbs / particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-primary opacity-15 blur-3xl" />
        <div className="animate-float-slower absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
        <div className="animate-float-slow absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-primary/30" />
        <div className="animate-float-slower absolute top-1/4 right-1/3 h-2 w-2 rounded-full bg-secondary/50" />
        <div className="animate-float-slow absolute bottom-1/4 right-1/4 h-4 w-4 rounded-full bg-primary/20" />
        <div className="animate-float-slower absolute top-2/3 left-1/3 h-2.5 w-2.5 rounded-full bg-secondary/40" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="animate-fade-up">
          <span className="chip mb-5">Available for freelance & full-time opportunities</span>
          <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Sinesipho Matam</span>
          </h1>
          <p
            className="font-heading mt-4 min-h-[2.5rem] text-xl font-semibold text-primary sm:text-2xl"
            aria-live="polite"
          >
            {typed}
            <span className="animate-blink text-secondary" aria-hidden="true">
              |
            </span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design and develop secure, scalable, AI-powered web applications and digital
            experiences that help businesses grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/resume" className="btn-outline">
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </Link>
            <a href="#contact" className="btn-outline">
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto lg:mx-0" style={{ animationDelay: "0.15s" }}>
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-2xl"
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-elevated">
            <img
              src={PORTRAIT_URL}
              alt="Portrait of Sinesipho Matam, Software Engineer and Cloud Engineer"
              width={380}
              height={380}
              fetchPriority="high"
              className="h-72 w-72 rounded-[1.6rem] object-cover sm:h-[380px] sm:w-[380px]"
            />
          </div>
          <div className="glass absolute -bottom-4 -left-6 rounded-2xl px-4 py-2.5 shadow-soft">
            <p className="text-xs font-semibold">🛡️ Security+ Certified</p>
          </div>
          <div className="glass animate-float-slow absolute -top-4 -right-4 rounded-2xl px-4 py-2.5 shadow-soft">
            <p className="text-xs font-semibold">☁️ AWS Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
}
