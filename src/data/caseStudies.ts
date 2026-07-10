import type { CaseStudy } from "@/types";

export const caseStudies: Record<string, CaseStudy> = {
  solenium: {
    slug: "solenium",
    title: "Gamificación para hábitos energéticos responsables",
    subtitle: "Energía solar",
    context:
      "Una empresa vende minigranjas solares en Colombia. El problema: instalan los paneles, pero sin cambio de hábitos el ahorro prometido no se materializa. El proyecto llegó a través de Gamific. Empezó como consultoría de gamificación y evolucionó hacia trabajo de producto.",
    role: "UX / Product Designer",
    technologies: ["Figma", "Maze", "Hotjar", "Lottie"],
    process: ["Investigación", "Ideación", "Prototipo", "Testeo", "Iteración"],
    heroStats: [
      { value: "89%", label: "Retención" },
      { value: "-32%", label: "Consumo" },
      { value: "3", label: "Comunidades" },
      { value: "6 meses", label: "Duración" },
    ],
    challenge: {
      problem: [
        "Los usuarios instalaban paneles solares pero no cambiaban sus hábitos de consumo.",
        "Los dashboards de energía eran técnicos y poco motivadores.",
        "La app existente tenía una retención del 12% a los 30 días.",
      ],
      hypothesis: [
        "Si aplicamos mecánicas de gamificación, los usuarios revisarán sus datos diariamente.",
        "Desafíos semanales personalizados aumentarán la reducción de consumo.",
        "Un sistema de logros social motivará la competencia positiva entre vecinos.",
      ],
      validation: [
        "Entrevistas con 24 usuarios actuales de la app.",
        "Benchmark de apps de energía y fitness con gamificación.",
        "Test de usabilidad con 3 prototipos alternativos.",
      ],
    },
    approach: [
      {
        icon: "🏆",
        title: "Mecánicas de juego",
        description:
          "Diseñé un sistema de puntos, niveles y logros conectado directamente a los datos de consumo del hogar.",
      },
      {
        icon: "🤝",
        title: "Contexto social",
        description:
          "Implementé rankings por comunidad para fomentar competencia amigable entre vecinos con paneles.",
      },
      {
        icon: "📊",
        title: "Feedback en tiempo real",
        description:
          "Visualizaciones animadas que convierten datos técnicos en métricas comprensibles e inmediatas.",
      },
    ],
    solution: [
      {
        icon: "⚡",
        title: "Desafíos personalizados",
        description: "Retos semanales adaptados al perfil de consumo de cada hogar.",
      },
      {
        icon: "🔔",
        title: "Feedback en tiempo real",
        description: "Notificaciones inteligentes que celebran los logros en el momento exacto.",
      },
      {
        icon: "🏅",
        title: "Sistema de logros",
        description: "Insignias desbloqueables que documentan el progreso del usuario en el tiempo.",
      },
    ],
    impact: [
      { value: "-32%", label: "Reducción de consumo promedio" },
      { value: "89%", label: "Retención a 30 días" },
      { value: "3", label: "Comunidades piloto activas" },
      { value: "4.7/5", label: "Rating en stores" },
    ],
    learnings: [
      "El comportamiento gamificado solo funciona si los datos son confiables y en tiempo real.",
      "La gamificación sola no es suficiente: el contexto social fue el mayor driver de engagement.",
      "La simplificación visual de datos técnicos fue más difícil que la gamificación misma.",
      "Testear con usuarios reales en sus casas reveló fricciones que el laboratorio no mostraría.",
    ],
    relatedProjects: ["aeropuertos-argentina", "alarm", "billetera-fintech"],
  },

  "aeropuertos-argentina": {
    slug: "aeropuertos-argentina",
    title: "De 35 sitios dispersos a una experiencia unificada",
    subtitle: "Aeropuertos",
    context:
      "Aeropuertos Argentina 2000 administra 35 aeropuertos en el país, cada uno con su propio sitio web desconectado. Los pasajeros no encontraban información básica y el equipo no podía mantener tantos sitios.",
    role: "UX Lead Designer",
    technologies: ["Figma", "Maze", "Analytics", "Accessibility Tools"],
    process: ["Auditoría", "Research", "Arquitectura", "Diseño", "Validación"],
    heroStats: [
      { value: "+5M", label: "Usuarios anuales" },
      { value: "+42%", label: "Satisfacción" },
      { value: "WCAG AAA", label: "Accesibilidad" },
      { value: "35+1", label: "Sitios unificados" },
    ],
    challenge: {
      problem: [
        "35 sitios independientes con distintas tecnologías, estilos y arquitecturas de información.",
        "El 68% de los usuarios no encontraba el vuelo que buscaba en el primer intento.",
        "Experiencia completamente diferente en cada aeropuerto regional.",
      ],
      hypothesis: [
        "Un sistema de diseño unificado reducirá la carga cognitiva del usuario.",
        "Una arquitectura orientada a tareas mejorará la búsqueda de vuelos.",
        "La accesibilidad WCAG AAA ampliará el alcance a pasajeros con discapacidad.",
      ],
      validation: [
        "Auditoría completa de los 35 sitios con heurísticas de Nielsen.",
        "Entrevistas con pasajeros frecuentes y con necesidades especiales.",
        "Test de usabilidad comparativo antes y después del rediseño.",
      ],
    },
    approach: [
      {
        icon: "🏗️",
        title: "Arquitectura de información unificada",
        description:
          "Creé un mapa de contenido común para todos los aeropuertos que respeta las diferencias regionales.",
      },
      {
        icon: "♿",
        title: "Accesibilidad como prioridad",
        description:
          "WCAG AAA desde el inicio del proceso, no como agregado final. Auditorías con usuarios reales.",
      },
      {
        icon: "🤝",
        title: "Coordinación multidisciplinaria",
        description:
          "Lideré un equipo de 6 diseñadores y articulé con 3 equipos de desarrollo distribuidos.",
      },
    ],
    solution: [
      {
        icon: "🎨",
        title: "Design System",
        description:
          "Sistema de componentes escalable que mantiene la identidad de AA2000 en todos los puntos de contacto.",
      },
      {
        icon: "🔍",
        title: "Buscador centralizado",
        description:
          "Motor de búsqueda de vuelos unificado que funciona igual en los 35 sitios.",
      },
      {
        icon: "📱",
        title: "Mobile-first responsive",
        description:
          "El 73% del tráfico era móvil. Rediseñé desde el teléfono hacia arriba.",
      },
    ],
    impact: [
      { value: "+5M", label: "Usuarios únicos/año" },
      { value: "+42%", label: "Satisfacción NPS" },
      { value: "WCAG AAA", label: "Conformidad" },
      { value: "35+1", label: "Sitios en un sistema" },
    ],
    learnings: [
      "La accesibilidad es fundamental, no opcional: es ley y amplía el alcance a millones de personas.",
      "Los equipos multidisciplinarios requieren tanto diseño de sistema como diseño de colaboración.",
      "La arquitectura de información bien hecha reduce el costo de mantenimiento exponencialmente.",
    ],
    relatedProjects: ["solenium", "alarm", "billetera-fintech"],
  },

  alarm: {
    slug: "alarm",
    title: "Ecosistema completo de alarmas IoT para el hogar",
    subtitle: "Smart Home",
    context:
      "Una empresa de seguridad quería lanzar su primera app para controlar alarmas domésticas conectadas. El mercado existente era complejo y técnico. Su diferencial: facilidad de uso para familias con niños.",
    role: "Product Designer",
    technologies: ["Figma", "Principle", "UserTesting", "Zeplin"],
    process: ["Discovery", "Diseño", "Prototipo", "Test", "Handoff"],
    heroStats: [
      { value: "4.8/5", label: "Rating" },
      { value: "2min", label: "Setup inicial" },
      { value: "0", label: "Tickets de soporte semana 1" },
      { value: "92%", label: "Task completion" },
    ],
    challenge: {
      problem: [
        "Las apps de alarma existentes requerían conocimiento técnico para configurarlas.",
        "Las familias con niños querían control y tranquilidad sin complejidad.",
        "El tiempo de setup promedio en la competencia era de 45 minutos.",
      ],
      hypothesis: [
        "Un onboarding guiado por pasos reducirá el setup a menos de 5 minutos.",
        "Perfiles de usuario simplificados (ej: 'Modo niños') aumentarán la adopción familiar.",
        "Notificaciones contextuales inteligentes reemplazarán los manuales de usuario.",
      ],
      validation: [
        "Test de usabilidad con 15 familias en sus hogares.",
        "Benchmark de 8 apps de seguridad del mercado argentino y latinoamericano.",
        "Entrevistas con técnicos instaladores para entender puntos de dolor en el setup.",
      ],
    },
    approach: [
      {
        icon: "👨‍👩‍👧",
        title: "Diseño centrado en la familia",
        description:
          "Cada flujo fue pensado para ser completado por cualquier miembro del hogar, no solo por el 'técnico de la casa'.",
      },
      {
        icon: "⚡",
        title: "Setup express",
        description:
          "Reduje el flujo de configuración de 23 pasos a 6, con detección automática de dispositivos.",
      },
      {
        icon: "🔔",
        title: "Notificaciones inteligentes",
        description:
          "Sistema de alertas contextual que diferencia urgencia real de notificaciones informativas.",
      },
    ],
    solution: [
      {
        icon: "🏠",
        title: "Plano interactivo",
        description:
          "Mapa visual del hogar donde el usuario ve el estado de cada sensor en tiempo real.",
      },
      {
        icon: "👤",
        title: "Perfiles de usuario",
        description:
          "Acceso diferenciado para adultos, niños y visitas. Cada uno ve lo que necesita.",
      },
      {
        icon: "📱",
        title: "Widget de estado",
        description:
          "Estado de la alarma visible desde la pantalla de inicio del teléfono sin abrir la app.",
      },
    ],
    impact: [
      { value: "4.8/5", label: "Rating en stores" },
      { value: "2 min", label: "Tiempo de setup" },
      { value: "0", label: "Tickets semana 1" },
      { value: "92%", label: "Task completion" },
    ],
    learnings: [
      "El diseño para familias significa diseñar para el eslabón más inexperto de la cadena.",
      "La simplicidad en seguridad genera confianza: menos opciones, más claridad.",
      "Los técnicos instaladores son usuarios clave que suelen ignorarse en el proceso de diseño.",
    ],
    relatedProjects: ["solenium", "aeropuertos-argentina", "billetera-fintech"],
  },

  "billetera-fintech": {
    slug: "billetera-fintech",
    title: "Billetera Fintech accesible a 3 países",
    subtitle: "Fintech",
    context:
      "Una fintech regional quería expandir su billetera digital a Argentina, Chile y México. El desafío: cada mercado tiene regulaciones diferentes, usuarios con distintos niveles de educación financiera y monedas distintas.",
    role: "UX Lead / Product Designer",
    technologies: ["Figma", "Maze", "FullStory", "Lookback"],
    process: ["Research", "Estrategia", "Diseño", "Accesibilidad", "Launch"],
    heroStats: [
      { value: "3", label: "Países" },
      { value: "WCAG AA", label: "Accesibilidad" },
      { value: "+180%", label: "Conversión" },
      { value: "2 años", label: "Proyecto" },
    ],
    challenge: {
      problem: [
        "Los usuarios no bancarizados (40% del target) desconfiaban de las apps financieras.",
        "Cada país tenía regulaciones KYC distintas que afectaban el flujo de onboarding.",
        "La app original tenía una tasa de abandono del 68% en el registro.",
      ],
      hypothesis: [
        "Un onboarding progresivo que empieza con funcionalidad básica aumentará la conversión.",
        "Lenguaje financiero simplificado y visual reducirá la barrera de entrada.",
        "La accesibilidad WCAG AA es requisito no negociable para llegar a usuarios con discapacidad.",
      ],
      validation: [
        "Research con 40 usuarios en 3 países con distintos niveles de educación financiera.",
        "Auditoría legal con compliance officers de cada país.",
        "A/B testing de 3 versiones del flujo de onboarding.",
      ],
    },
    approach: [
      {
        icon: "🌎",
        title: "Diseño multi-país",
        description:
          "Un sistema de componentes con variantes por país que mantiene la consistencia visual con flexibilidad regulatoria.",
      },
      {
        icon: "♿",
        title: "Accesibilidad WCAG AA",
        description:
          "Contraste, tamaños de toque, lectores de pantalla y flujos alternativos para usuarios con discapacidad.",
      },
      {
        icon: "💡",
        title: "Educación financiera integrada",
        description:
          "Tooltips y microcopy que explican cada término financiero en el momento exacto en que el usuario lo necesita.",
      },
    ],
    solution: [
      {
        icon: "📋",
        title: "Onboarding progresivo",
        description:
          "El usuario puede usar funcionalidades básicas antes de completar la verificación de identidad.",
      },
      {
        icon: "💱",
        title: "Multi-moneda visual",
        description:
          "Interfaz que muestra claramente la moneda local y equivalencias sin confundir al usuario.",
      },
      {
        icon: "🔐",
        title: "KYC simplificado",
        description:
          "Flujo de verificación adaptado a las regulaciones de cada país con UX consistente.",
      },
    ],
    impact: [
      { value: "+180%", label: "Tasa de conversión onboarding" },
      { value: "WCAG AA", label: "Accesibilidad certificada" },
      { value: "3 países", label: "Argentina, Chile, México" },
      { value: "-68%", label: "Abandono en registro" },
    ],
    learnings: [
      "El diseño inclusivo no es opcional en fintech: millones de usuarios potenciales dependen de ello.",
      "Los sistemas de diseño multi-país requieren gobernar la varianza tanto como la consistencia.",
      "La educación financiera integrada en UX tiene más impacto que cualquier campaña de marketing.",
    ],
    relatedProjects: ["solenium", "aeropuertos-argentina", "alarm"],
  },
};
