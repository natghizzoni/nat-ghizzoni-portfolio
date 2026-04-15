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

export interface Translation {
  nav: {
    home: string;
    projects: string;
    cv: string;
    contact: string;
    blog: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    cta: string;
    scroll: string;
  };
  strategic: {
    title: string;
    subtitle: string;
    stat: string;
    statLabel: string;
    points: string[];
  };
  featured: {
    label: string;
    cta: string;
  };
  projects: {
    title: string;
    cta: string;
  };
  logos: {
    label: string;
  };
  blog: {
    title: string;
    subtitle: string;
    cta: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  footer: {
    rights: string;
    privacy: string;
  };
  cv: {
    title: string;
    role: string;
    bio: string;
    current: string;
    previous: string;
    skills: string;
    softSkills: string;
    hardSkills: string;
    education: string;
    academic: string;
    courses: string;
    volunteering: string;
    languages: string;
  };
  caseStudy: {
    breadcrumbHome: string;
    challenge: string;
    problem: string;
    hypothesis: string;
    validation: string;
    approach: string;
    solution: string;
    impact: string;
    learnings: string;
    others: string;
    viewCase: string;
  };
}
