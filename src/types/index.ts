export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  imagePlaceholder: string;
  accent: string;
  featured?: boolean;
  stats?: { value: string; label: string }[];
  link: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  role: string;
  technologies: string[];
  process: string[];
  heroStats: { value: string; label: string }[];
  challenge: {
    problem: string[];
    hypothesis: string[];
    validation: string[];
  };
  approach: {
    icon: string;
    title: string;
    description: string;
  }[];
  solution: {
    icon: string;
    title: string;
    description: string;
  }[];
  impact: { value: string; label: string }[];
  learnings: string[];
  relatedProjects: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Skill {
  label: string;
  color: string;
}

export type { Translation } from "@/i18n/es";
