// ============================================================
//  LABORATORIO DE EPIDEMIOLOGÍA ESPACIAL — DATOS DEL SITIO
//  Edita este archivo para actualizar TODO el contenido del sitio
//  sin necesidad de tocar el HTML o el CSS.
// ============================================================

const SITE_DATA = {

  meta: {
    title: "Lab. Epidemiología Espacial",
    description: "Laboratorio de Epidemiología Espacial — Análisis espacial para la salud pública.",
    favicon: "logo.png"
  },

  // ── LOGOS ─────────────────────────────────────────────────
  //  nav    = logo del navbar (logo1)
  //  hero   = logo grande del inicio orbitando (logo2)
  //  footer = logo del footer, idealmente PNG con fondo transparente (logo3)
  // ──────────────────────────────────────────────────────────
  logos: {
    nav:    "logo.png",
    hero:   "logo2.png",
    footer: "logo3.png"
  },

  nav: {
    links: [
      { label: "Inicio",        href: "#inicio" },
      { label: "Integrantes",   href: "#integrantes" },
      { label: "Proyectos",     href: "#proyectos" },
      { label: "Publicaciones", href: "#publicaciones" },
      { label: "Visualizadores",href: "#visualizadores" }
    ]
  },

  hero: {
    tag: "Laboratorio de",
    title: "Epidemiología \nEspacial",
    subtitle: "El Laboratorio de Epidemiología Espacial busca integrar herramientas de análisis espacial y datos de salud pública para identificar patrones territoriales en la distribución de enfermedades, inequidad territorial y exposición a contaminantes ambientales. Buscamos aplicar y explorar técnicas de análisis avanzado para la resolución de problemas en salud, colaborando con centros de investigación nacionales e internacionales.",
    cta_primary:   { label: "Contáctanos",   href: "#contacto" },
    cta_secondary: { label: "Ver proyectos", href: "#proyectos" },
    stats: [
      { value: "3+", label: "Proyectos activos" },
      { value: "1",  label: "Publicaciones" },
      { value: "8+",  label: "Integrantes" }
    ]
  },

  research_lines: {
    title: "Líneas de Investigación",
    subtitle: "Abordamos la salud desde una perspectiva territorial, combinando métodos cuantitativos avanzados con evidencia para la toma de decisiones.",
    items: [
      {
        icon: "map-pin",
        title: "Epidemiología Espacial",
        desc: "Modelamiento espacial de enfermedades transmisibles y no transmisibles. Análisis de clústeres, autocorrelación espacial y mapas de riesgo para la vigilancia epidemiológica."
      },
      {
        icon: "satellite",
        title: "Epidemiología Ambiental",
        desc: "Evaluación y cuantificación en la exposición a contaminantes ambientales y sus efectos en la morbimortalidad poblacional."
      },
      {
        icon: "activity",
        title: "Clima & Salud",
        desc: "Estimación del riesgo en salud asociado al clima, cambio climático y fenómenos socio-naturales."
      }
    ]
  },

  team: {
    title: "Integrantes",
    subtitle: "El laboratorio se compone de un equipo interdisciplinario de investigadores que combina la Geografía, la Epidemiología, la Salud Pública y la Estadística, integrando estudiantes de Pregrado, Magíster y Doctorado. Para desarrollar trabajos de tesis de pregrado, posgrado o propuestas de investigación al interior del laboratorio, puedes contactarnos en la sección de contacto.",
    members: [
      {
        name: "Dr. Salvador Ayala Pizarro",
        role: "Investigador Principal",
        area: "MPH., PhD. Salud Pública",
        photo: "https://medicina.udd.cl/centro-epidemiologia-politicas-salud/files/2024/10/salvador-ayala-rb_.png",
        researchgate: "https://www.researchgate.net/profile/Salvador_Ayala",
        scholar: "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
        linkedin: "https://www.linkedin.com/in/salvador-ayala-pizarro-70a83b7a/"
      },
      {
        name: "Mg. Ismael Bravo",
        role: "Investigador asistente",
        area: "Magíster en Estadística",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/ismael_bravo.png?raw=true",
        researchgate: "#",
        scholar: "#",
        linkedin: "https://www.linkedin.com/in/ismael-bravo-rodríguez-7769b2206/"
      },
      {
        name: "Mg. Jesús Guerrero-Muñoz",
        role: "Tesista Doctoral",
        area: "Doctorado en Ciencias e Innovación en Medicina",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/jesus_guerrero.png?raw=true",
        researchgate: "https://www.researchgate.net/profile/Jesus-Guerrero-Munoz?ev=hdr_xprf",
        scholar: "https://scholar.google.com/citations?view_op=list_works&hl=es&user=xMi_ZzwAAAAJ",
        linkedin: "https://www.linkedin.com/in/bq-jgmunoz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Mg. Jorge Cárdenas Pizarro",
        role: "Tesista Magíster",
        area: "Magíster Gobernanza de Riesgos y Recursos",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/jorge_cardenas.png?raw=true",
        researchgate: "https://www.researchgate.net/profile/Jorge-Cardenas-Pizarro?ev=hdr_xprf",
        scholar: "https://scholar.google.com/citations?user=dKz40iMAAAAJ&hl=es",
        linkedin: "linkedin.com/in/jorge-eduardo-cárdenas-pizarro-b9b048146"
      },
      {
        name: "Lic. Héctor Spring Pedreros",
        role: "Tesista Pregrado",
        area: "Ingeniería Civil en Geografía",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/hector_spring.png?raw=true",
        researchgate: "#",
        scholar: "#",
        linkedin: "https://www.linkedin.com/in/h%C3%A9ctor-spring-pedreros-70197822b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Lic. Noemí Concha",
        role: "Tesista Pregrado",
        area: "Ingeniería Civil en Geografía",
        photo: "imagen.png",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      }
    ]
  },

  projects: {
    title: "Proyectos",
    subtitle: "Revisa nuestros proyectos de investigación financiada por fondos nacionales e internacionales orientados a generar evidencia de impacto en política sanitaria.",
    items: [
      {
        status: "En curso",
        year: "2025–2028",
        funder: "ANID FONDECYT Regular",
        role: "Investigador Principal",
        title: "Evaluation of neighborhoods as a social determinant of health in Chile: the case of pulmonary tuberculosis",
        desc: "El objetivo del presente proyecto es evaluar la relación espacio-temporal entre los barrios (en cuanto a su composición socioeconómica, demográfica, ambiental, de infraestructuras y cultural) y el riesgo individual de padecer tuberculosis pulmonar en el Área Metropolitana de Santiago, la principal zona urbana de Chile.",
        tags: ["Tuberculosis", "Mortalidad", "Neighborhoods", "Epidemiología"]
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "ANID FONIS",
        role: "Investigador Principal",
        title: "Estimación espacial del riesgo de Tuberculosis pulmonar por áreas pequeñas en Chile.",
        desc: "Evaluar el riesgo de Tuberculosis pulmonar por distritos censales y las características sociodemográficas asociadas para todas las regiones del país entre los años 2016 y 2023.",
        tags: ["Tuberculosis", "Atlas", "Áreas pequeñas", "Geografía"]
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "Proyecto Interuniversitario. UDD - UAI - U.Mayor",
        role: "Investigador Principal (UDD)",
        title: "REDES+: Efectos de la exposición a la contaminación atmosférica en la inasistencia escolar",
        desc: "Evaluar el potencial efecto mediador de la asistencia escolar entre la exposición a factores ambientales de establecimientos educacionales (i.e., material particulado, temperatura, vegetación) sobre el rendimiento académico de escolares en la Región Metropolitana. Coordinado entre investigadores de la Universidad del Desarrollo, Universidad Adolfo Ibáñez y la Universidad Mayor.",
        tags: ["PM2.5", "PurpleAir", "Educación", "Geoestadística"]
      }
    ]
  },

  publications: {
    title: "Publicaciones",
    subtitle: "Selección de publicaciones recientes en revistas indexadas. Para revisar el listado completo de publicaciones asociadas al laboratorio, consultar el perfil de Google Scholar.",
    scholar_url: "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
    items: [
      {
        number: 1,
        year: 2026,
        authors: "<strong style='color:#111827;font-weight:700;'>S Ayala</strong>, N Escobar, L Vizeu Barrozo, F Chiaravalloti-Neto, M Canals",
        title: "Spatial neighborhood patterns of pulmonary tuberculosis in a large urban area: the case of Santiago, Chile",
        journal: "Scientific Reports",
        link: "https://www.nature.com/articles/s41598-026-36462-w",
        tags: ["Q1", "Factor de impacto 3.9"]
      }
    ]
  },

  visualizer: {
    title: "Visualizador de Datos",
    subtitle: "Explora nuestros datos geoespaciales de manera interactiva. Selecciona una aplicación para visualizar en el visor.",
    layers: [
      {
        id: "tuberculosis",
        label: "Atlas de Tuberculosis",
        color: "#dc2626",
        shiny_url: "",
        description: "Distribución espacial de casos de tuberculosis pulmonar por áreas pequeñas en Chile. Fuente: MINSAL · 2015–2023."
      },
      {
        id: "aire",
        label: "Contaminación del Aire",
        color: "#7c3aed",
        shiny_url: "",
        description: "Concentraciones de PM2.5 medidas por sensores PurpleAir en escuelas del Gran Santiago. Proyecto REDES+."
      },
      {
        id: "vecindarios",
        label: "Vecindarios & Salud",
        color: "#0891b2",
        shiny_url: "",
        description: "Efectos de los vecindarios como determinante social de salud en el Área Metropolitana del Gran Santiago."
      }
    ],
    note: "Aplicaciones en desarrollo"
  },

  contact: {
    email: "salvadorayala@udd.cl",
    address: "Facultad de Medicina-Clínica Alemana, Universidad del Desarrollo\nAv. La Plaza 680, Santiago, Chile",
    linkedin:     "https://www.linkedin.com/in/salvador-ayala-pizarro-70a83b7a/",
    scholar:      "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
    researchgate: "https://www.researchgate.net/profile/Salvador_Ayala",
    github:       "https://github.com/sayala-spepi"
  }

};
