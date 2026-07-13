import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { AIAssistant } from "@/components/portfolio/AIAssistant";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { ExperienceSection } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Skills } from "@/components/portfolio/Skills";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { useRevealObserver } from "@/hooks/use-reveal";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sinesipho Matam — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sinesipho Matam: Software Engineer, IT Support Specialist and Cybersecurity enthusiast. Secure, scalable, AI-powered web apps.",
      },
      { property: "og:title", content: "Sinesipho Matam — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Sinesipho Matam: Software Engineer, IT Support Specialist and Cybersecurity enthusiast. Secure, scalable, AI-powered web apps.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sinesipho Matam",
          jobTitle: "Software Engineer",
          description:
            "Software Engineer, IT Support Specialist and Cybersecurity Enthusiast.",
          url: "https://github.com/SneG21",
          sameAs: ["https://github.com/SneG21"],
          knowsAbout: [
            "Software Engineering",
            "Cybersecurity",
            "Python",
            "Django",
            "AI Web Development",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  useRevealObserver();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <h1 className="sr-only">Sinesipho Matam — Software Engineer Portfolio</h1>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ExperienceSection />
        <GitHubStats />
        <Achievements />
        <ResumeSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <Toaster position="top-center" richColors />
    </div>
  );
}
