import portraitAsset from "@/assets/portrait.png.asset.json";
import certSecurity from "@/assets/cert-security.jpg.asset.json";
import certItil from "@/assets/cert-itil.jpg.asset.json";
import certAplus from "@/assets/cert-aplus.jpg.asset.json";
import certHyperion from "@/assets/cert-hyperiondev.jpg.asset.json";

export const PORTRAIT_URL = portraitAsset.url;

export const SOCIALS = {
  github: "https://github.com/SneG21",
  linkedin: "https://www.linkedin.com/in/sinesipho-matam",
  email: "mailto:sinesipho.matam@outlook.com",
  whatsapp: "https://wa.me/27000000000",
  instagram: "https://instagram.com/ascenddigital",
  facebook: "https://facebook.com/ascenddigital",
};

export const TYPING_ROLES = [
  "Software Engineer",
  "Cloud Engineer",
  "IT Support Specialist",
  "Cybersecurity Enthusiast",
  "Co-Founder of Ascend Digital",
];

export const SKILL_GROUPS: {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 82 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: [
      { name: "Django", level: 90 },
      { name: "Django REST Framework", level: 88 },
      { name: "Tailwind CSS", level: 87 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Cloud (AWS)",
    icon: "cloud",
    skills: [
      { name: "S3 · IAM · EC2", level: 80 },
      { name: "Lambda · CloudFormation", level: 75 },
      { name: "Route53 · CloudFront", level: 74 },
      { name: "RDS · ECS · ECR", level: 72 },
      { name: "Elastic Beanstalk", level: 76 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 86 },
      { name: "SQLite", level: 90 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "terminal",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Git & GitHub", level: 90 },
      { name: "Linux & WSL", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "Other Skills",
    icon: "sparkles",
    skills: [
      { name: "REST APIs & JWT Auth", level: 88 },
      { name: "Responsive Design & UI/UX", level: 90 },
      { name: "SEO & Website Hosting", level: 84 },
      { name: "AI Website Development", level: 88 },
    ],
  },
];

export interface Certification {
  name: string;
  org: string;
  date: string;
  image: string;
  skills: string[];
  description: string;
  verifyUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Software Engineering Bootcamp",
    org: "HyperionDev",
    date: "18 November 2025",
    image: certHyperion.url,
    skills: ["Python", "Django", "OOP", "REST APIs", "Git", "Docker", "PostgreSQL"],
    description:
      "Intensive full-stack software engineering bootcamp covering Python, Django, databases, version control and professional software engineering practice.",
    verifyUrl: "https://www.hyperiondev.com/",
  },
  {
    name: "CompTIA Security+ (SY0-601)",
    org: "Alison · CPD Certified",
    date: "16 February 2026",
    image: certSecurity.url,
    skills: [
      "Cybersecurity",
      "Threat Management",
      "IAM",
      "Network Security",
      "Cryptography",
      "Cloud Security",
    ],
    description:
      "Comprehensive security fundamentals: threat management, identity & access management, network security, cryptography and cloud security.",
    verifyUrl: "https://alison.com/verify/cda80ab06a",
  },
  {
    name: "ITIL® 4 Foundation",
    org: "Alison · CPD Certified",
    date: "17 February 2026",
    image: certItil.url,
    skills: [
      "IT Service Management",
      "Incident Management",
      "Service Value System",
      "Continual Improvement",
      "IT Operations",
    ],
    description:
      "Foundations of ITIL 4 for Service Management — modern IT service management, the service value system and continual improvement.",
    verifyUrl: "https://alison.com/verify/ab39a3701e",
  },
  {
    name: "CompTIA A+ 1000",
    org: "Alison · CPD Certified",
    date: "13 February 2026",
    image: certAplus.url,
    skills: [
      "Computer Hardware",
      "Operating Systems",
      "Networking",
      "Troubleshooting",
      "Device Security",
    ],
    description:
      "Core IT fundamentals: computer hardware, operating systems, networking, troubleshooting methodology and device security.",
    verifyUrl: "https://alison.com/verify/2ff3a16332",
  },
];

export const STUDYING = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified Developer – Associate",
  "AWS Certified Solutions Architect – Associate",
  "CompTIA Network+",
];

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "Student Management System",
    description:
      "A full-stack Django application for managing students, courses, users, and administration — with role-based access, Docker deployment and Sphinx documentation.",
    tech: ["Python", "Django", "SQLite", "PostgreSQL", "Docker", "GitHub", "Sphinx"],
    repo: "https://github.com/SneG21/Student-Management-System",
  },
  {
    name: "Booking Management System",
    description:
      "A booking platform that manages appointments, customer bookings, authentication, scheduling, payments, and notifications.",
    tech: ["Django", "PostgreSQL", "Tailwind CSS", "REST APIs"],
  },
  {
    name: "Ascend Digital Website",
    description:
      "Corporate website for Ascend Digital showcasing AI-powered digital solutions, chatbot integration, onboarding automation, portfolio, and digital marketing services.",
    tech: ["Lovable", "AI", "HTML", "CSS", "JavaScript"],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  current?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Co-Founder & Lead Web Developer",
    company: "Ascend Digital",
    period: "2025 — Present",
    current: true,
    points: [
      "AI website development & web applications",
      "Hosting, maintenance & business automation",
      "Technical consulting for growing businesses",
    ],
  },
  {
    role: "IT Support Intern",
    company: "Hemingways Casino",
    period: "2024 — 2025",
    points: [
      "Hardware support & software installation",
      "Troubleshooting & network support",
      "User assistance & system maintenance",
    ],
  },
  {
    role: "Casino Supervisor",
    company: "Hemingways Casino",
    period: "Before 2024",
    points: [
      "Leadership & team management",
      "Operations & customer service",
      "Problem solving under pressure",
    ],
  },
];

export const ACHIEVEMENTS = [
  { label: "Certifications Earned", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "GitHub Repositories", value: 9, suffix: "" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Years of Experience", value: 3, suffix: "+" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
