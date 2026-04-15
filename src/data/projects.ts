import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "solenium",
    slug: "solenium",
    title: "Gamificación para hábitos energéticos responsables",
    description:
      "App que combina mecánicas de juego con datos de consumo energético para motivar hábitos más sostenibles en el hogar.",
    tags: ["UX Research", "Product Design", "Gamification", "Mobile"],
    category: "Energía solar",
    imagePlaceholder: "solenium",
    accent: "#5B3FFF",
    featured: true,
    stats: [
      { value: "89%", label: "Retención" },
      { value: "-32%", label: "Consumo" },
      { value: "3 comunidades", label: "Probado en" },
      { value: "6 meses", label: "Desarrollo" },
    ],
    link: "/casos/solenium",
  },
  {
    id: "aeropuertos-argentina",
    slug: "aeropuertos-argentina",
    title: "De 35 sitios dispersos a una experiencia unificada",
    description:
      "Rediseño de la arquitectura de información y experiencia digital de Aeropuertos Argentina 2000 unificando 35 sitios regionales.",
    tags: ["UX Lead", "Information Architecture", "Accessibility", "Web"],
    category: "Aeropuertos",
    imagePlaceholder: "aeropuertos",
    accent: "#22D3EE",
    link: "/casos/aeropuertos-argentina",
  },
  {
    id: "alarm",
    slug: "alarm",
    title: "Ecosistema completo de alarmas IoT para niños del hogar",
    description:
      "Diseño de producto end-to-end para un sistema de alarma doméstica conectado, con foco en familias con niños.",
    tags: ["Product Design", "IoT", "Mobile", "UX Research"],
    category: "Smart Home",
    imagePlaceholder: "alarm",
    accent: "#FB923C",
    link: "/casos/alarm",
  },
  {
    id: "billetera-fintech",
    slug: "billetera-fintech",
    title: "Billetera Fintech accesible a 3 países",
    description:
      "Diseño de una billetera digital multi-país con foco en accesibilidad e inclusión financiera para usuarios no bancarizados.",
    tags: ["Fintech", "Accessibility", "Mobile", "WCAG AA"],
    category: "Fintech",
    imagePlaceholder: "wallet",
    accent: "#22C55E",
    link: "/casos/billetera-fintech",
  },
];

export const getFeaturedProject = () => projects.find((p) => p.featured) ?? projects[0];
export const getRelatedProjects = (currentSlug: string, count = 3) =>
  projects.filter((p) => p.slug !== currentSlug).slice(0, count);
