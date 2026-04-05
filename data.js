// ============================================================
//  LABORATORIO DE EPIDEMIOLOGÍA ESPACIAL — DATOS DEL SITIO
//  Edita este archivo para actualizar TODO el contenido del sitio
//  sin necesidad de tocar el HTML o el CSS.
// ============================================================

const SITE_DATA = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title: "Lab. Epidemiología Espacial",
    description: "Laboratorio de Epidemiología Espacial — Análisis espacial para la salud pública.",
    favicon: "logo.png"
  },

  // ── LOGOS ─────────────────────────────────────────────────
  logos: {
    nav:    "logo.png",    // logo1 — aparece en el navbar (header)
    hero:   "logo2.png",            // logo2 — aparece en el hero/inicio (el grande orbitando). Si está vacío usa logo1
    footer: "logo3.png"             // logo3 — aparece en el footer (sin fondo). Si está vacío usa logo1
  },

  // ── NAVEGACIÓN ────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio",        href: "#inicio" },
      { label: "Integrantes",   href: "#integrantes" },
      { label: "Proyectos",     href: "#proyectos" },
      { label: "Publicaciones", href: "#publicaciones" },
      { label: "Recursos",      href: "#Recursos" }
    ]
  },

  // ── HERO (INICIO) ─────────────────────────────────────────
  hero: {
    tag: "Laboratorio de",
    title: "Epidemiología \nEspacial",
    subtitle: "Integramos el análisis espacial y datos de salud pública para identificar patrones territoriales de enfermedad, desigualdad y exposición ambiental.",
    cta_primary:   { label: "Contáctanos",   href: "#contacto" },
    cta_secondary: { label: "Ver proyectos", href: "#proyectos" },
    stats: [
      { value: "3+", label: "Proyectos activos" },
      { value: "1",  label: "Publicaciones" },
      { value: "3",  label: "Países" }
    ]
  },

  // ── LÍNEAS DE INVESTIGACIÓN ───────────────────────────────
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

  // ── INTEGRANTES ───────────────────────────────────────────
  team: {
    title: "Integrantes",
    subtitle: "Un equipo interdisciplinario que combina epidemiología, geografía, estadística y ciencias de la computación.",
    members: [
      {
        name: "Dr. Salvador Ayala Pizarro",
        role: "Investigador Principal",
        area: "Epidemiología Espacial · Epidemiología Ambiental · Clima & Salud",
        photo: "https://medicina.udd.cl/centro-epidemiologia-politicas-salud/files/2024/10/salvador-ayala-rb_.png",
        researchgate: "https://www.researchgate.net/profile/Salvador_Ayala",
        scholar: "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
        linkedin: "https://www.linkedin.com/in/salvador-ayala-pizarro-70a83b7a/"
      },
      {
        name: "Dr. xx",
        role: "Investigador",
        area: "Estadística Espacial · SIG",
        photo: "https://i.pravatar.cc/200?img=12",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      },
      {
        name: "Mg. xx",
        role: "Investigadora",
        area: "Salud Ambiental · Calor Urbano",
        photo: "https://i.pravatar.cc/200?img=32",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      },
      {
        name: "Mg. xx",
        role: "Investigador",
        area: "Ciencia de Datos · Machine Learning",
        photo: "https://i.pravatar.cc/200?img=15",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      },
      {
        name: "Lic. xx",
        role: "Tesista Doctoral",
        area: "Desigualdades en Salud · APS",
        photo: "https://i.pravatar.cc/200?img=44",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      },
      {
        name: "Lic. xx",
        role: "Tesista Magíster",
        area: "Enfermedades Vectoriales · SIG",
        photo: "https://i.pravatar.cc/200?img=22",
        researchgate: "#",
        scholar: "#",
        linkedin: "#"
      }
    ]
  },

  // ── PROYECTOS ─────────────────────────────────────────────
  projects: {
    title: "Proyectos",
    subtitle: "Investigación financiada por fondos nacionales e internacionales orientada a generar evidencia de impacto en política sanitaria.",
    items: [
      {
        status: "En curso",
        year: "2025–2028",
        funder: "ANID FONDECYT Regular",
        role: "Investigador Principal",
        title: "Evaluation of neighborhoods as a social determinant of health in Chile: the case of pulmonary tuberculosis",
        desc: "Evaluación del efecto de los vecindarios en la transmisión de tuberculosis pulmonar al interior del Área Metropolitana del Gran Santiago, Chile.",
        tags: ["Tuberculosis", "Mortalidad", "Neighborhoods", "Epidemiología"]
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "ANID FONIS",
        role: "Investigador Principal",
        title: "Estimación espacial del riesgo de Tuberculosis pulmonar por áreas pequeñas en Chile.",
        desc: "Elaboración de un listado de priorización y atlas de distribución de casos de tuberculosis pulmonar para todo Chile.",
        tags: ["Tuberculosis", "Atlas", "Áreas pequeñas", "Geografía"]
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "Proyecto Interuniversitario",
        role: "Investigador co-Principal",
        title: "REDES+: Efectos de la exposición a la contaminación atmosférica en la inasistencia escolar",
        desc: "Proyecto interdisciplinar para evaluar la exposición a contaminantes atmosférica en escuelas públicas del Gran Santiago. Coordinado entre investigadores de la Universidad del Desarrollo, Universidad Adolfo Ibáñez y la Universidad Mayor.",
        tags: ["PM2.5", "PurpleAir", "Educación", "Geoestadística"]
      }
    ]
  },

  // ── PUBLICACIONES ─────────────────────────────────────────
  //  Agrega "number" para el correlativo que aparece a la izquierda.
  //  Puedes usar 1, 2, 3... o cualquier string como "1." o "P1".
  // ──────────────────────────────────────────────────────────
  publications: {
    title: "Publicaciones",
    subtitle: "Selección de publicaciones recientes en revistas indexadas. Para la lista completa, consulta el perfil en Google Scholar.",
    scholar_url: "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
    items: [
      {
        number: 1,
        year: 2026,
        authors: "Ayala S, et al.",
        title: "Spatial neighborhood patterns of pulmonary tuberculosis in a large urban area: the case of Santiago, Chile",
        journal: "Scientific Reports",
        link: "https://www.nature.com/articles/s41598-026-36462-w",
        tags: ["Q1", "Factor de impacto 3.9"]
      }
      // Para agregar más publicaciones, copia el bloque anterior y cambia los campos.
      // El campo "number" es el correlativo que aparece a la izquierda de cada publicación.
    ]
  },

  // ── VISUALIZADOR / RECURSOS (apps Shiny) ──────────────────
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
    note: "Las aplicaciones se cargan desde shinyapps.io. Si aparece el mensaje 'próximamente', agrega la URL en data.js → shiny_url."
  },

  // ── CONTACTO / FOOTER ─────────────────────────────────────
  contact: {
    email: "salvadorayala@udd.cl",
    address: "Facultad de Medicina-Clínica Alemana, Universidad del Desarrollo\nAv. La Plaza 680, Santiago, Chile",
    linkedin:    "https://www.linkedin.com/in/salvador-ayala-pizarro-70a83b7a/",
    scholar:     "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
    researchgate:"https://www.researchgate.net/profile/Salvador_Ayala",
    github: "https://github.com/sayala-spepi",
  }

};
