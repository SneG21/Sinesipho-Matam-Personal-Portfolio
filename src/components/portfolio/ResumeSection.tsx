import { Link } from "@tanstack/react-router";
import { Download, Eye, Printer } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="bg-section py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal glass rounded-[2.5rem] p-8 text-center shadow-elevated sm:p-12">
          <span className="chip">Resume</span>
          <h2 className="section-title mt-3">
            Want the full <span className="text-gradient">story</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            View, download or print my resume — a complete overview of my experience,
            certifications, projects and technical skills.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/resume" className="btn-primary">
              <Eye className="h-4 w-4" aria-hidden="true" /> View Resume
            </Link>
            <Link to="/resume" search={{ print: true }} className="btn-outline">
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </Link>
            <Link to="/resume" search={{ print: true }} className="btn-outline">
              <Printer className="h-4 w-4" aria-hidden="true" /> Print Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
