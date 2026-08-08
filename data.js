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
      { label: "Presentaciones",href: "#presentaciones" },
      { label: "Visualizadores",href: "#visualizadores" }
    ]
  },

  hero: {
    tag: "Laboratorio de",
    title: "Epidemiología \nEspacial",
    subtitle: "El Laboratorio de Epidemiología Espacial busca integrar herramientas de análisis espacial y datos de salud pública para identificar patrones territoriales en la distribución de enfermedades, inequidad territorial y exposición a contaminantes ambientales. Buscamos aplicar y explorar técnicas de análisis avanzado para la resolución de problemas en salud, colaborando con centros de investigación nacionales e internacionales.",
    cta_primary:   { label: "Contáctanos",   href: "#contacto" },
    cta_secondary: { label: "Ver proyectos", href: "#proyectos" }
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
        role: "Investigador Principal - CEPS-UDD",
        area: "MPH., PhD. Salud Pública",
        photo: "https://github.com/sayala-spepi/espi-lab/blob/main/imagenes/foto%20bn.jpg?raw=true",
        researchgate: "https://www.researchgate.net/profile/Salvador_Ayala",
        scholar: "https://scholar.google.com/citations?user=0Fu4x2MAAAAJ&hl=es",
        linkedin: "https://www.linkedin.com/in/salvador-ayala-pizarro-70a83b7a/",
        github: "https://github.com/sayala-spepi"
      },
      {
        name: "Mg. Ismael Bravo",
        role: "Investigador asistente",
        area: "Magíster en Estadística, PUC",
        photo: "https://github.com/sayala-spepi/espi-lab/blob/main/imagenes/ismael_bravo.png?raw=true",
        researchgate: "#",
        scholar: "#",
        linkedin: "https://www.linkedin.com/in/ismael-bravo-rodríguez-7769b2206/",
        github: "#"
      },
      {
        name: "Mg. José Daniel Conejeros",
        role: "Investigador asistente",
        area: "Magíster en Estadística, PUC",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/imagenes/jose_conejeros.png?raw=true",
        researchgate: "#",
        scholar: "#",
        linkedin: "https://www.linkedin.com/in/joseconejerosp/",
        github: "#"
      },
      {
        name: "Mg. Bryan Castillo Mendoza",
        role: "Investigador asistente",
        area: "Magíster (c) en Econ. Agraria y Ambiental, PUC",
        photo: "https://avatars.githubusercontent.com/u/24574446?v=4",
        researchgate: "https://www.researchgate.net/profile/Bryan-Castillo-5?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoiaG9tZSIsInBvc2l0aW9uIjoiZ2xvYmFsSGVhZGVyIn19",
        scholar: "https://scholar.google.com/citations?user=bzlx44wAAAAJ&hl=es",
        linkedin: "https://www.linkedin.com/in/bwcastillomendoza/"
      },
      {
        name: "Mg. Jesús Guerrero-Muñoz",
        role: "Tesista Doctoral - UDD",
        area: "Doctorado en Ciencias e Innovación en Medicina",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/imagenes/jesus_guerrero.png?raw=true",
        researchgate: "https://www.researchgate.net/profile/Jesus-Guerrero-Munoz?ev=hdr_xprf",
        scholar: "https://scholar.google.com/citations?view_op=list_works&hl=es&user=xMi_ZzwAAAAJ",
        linkedin: "https://www.linkedin.com/in/bq-jgmunoz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "#"
      },
      {
        name: "Mg. Jorge Cárdenas Pizarro",
        role: "Tesista Magíster - PUC - Heidelberg",
        area: "Magíster Gobernanza de Riesgos y Recursos",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/imagenes/jorge_cardenas.png?raw=true",
        researchgate: "https://www.researchgate.net/profile/Jorge-Cardenas-Pizarro?ev=hdr_xprf",
        scholar: "https://scholar.google.com/citations?user=dKz40iMAAAAJ&hl=es",
        linkedin: "linkedin.com/in/jorge-eduardo-cárdenas-pizarro-b9b048146",
        github: "#"
      },
      {
        name: "Lic. Héctor Spring Pedreros",
        role: "Tesista Pregrado - USACH",
        area: "Ingeniería Civil en Geografía",
        photo: "https://github.com/sayala-spepi/lab-epi-espacial/blob/main/imagenes/hector_spring.png?raw=true",
        researchgate: "#",
        scholar: "#",
        linkedin: "https://www.linkedin.com/in/h%C3%A9ctor-spring-pedreros-70197822b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "#"
      },
      {
        name: "Lic. Noemí Concha",
        role: "Tesista Pregrado - USACH",
        area: "Ingeniería Civil en Geografía",
        photo: "imagen.png",
        researchgate: "#",
        scholar: "#",
        linkedin: "#",
        github: "#"
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
        desc: "El objetivo del presente proyecto es evaluar la relación espacio-temporal entre los barrios (en cuanto a su composición socioeconómica, demográfica, ambiental, de infraestructuras y cultural) y el riesgo individual de padecer tuberculosis pulmonar en el Área Metropolitana de Santiago, la principal zona urbana de Chile."
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "ANID FONIS",
        role: "Investigador Principal",
        title: "Estimación espacial del riesgo de Tuberculosis pulmonar por áreas pequeñas en Chile.",
        desc: "Evaluar el riesgo de Tuberculosis pulmonar por distritos censales y las características sociodemográficas asociadas para todas las regiones del país entre los años 2016 y 2023."
      },
      {
        status: "En curso",
        year: "2025–2026",
        funder: "Proyecto Interuniversitario. UDD - UAI - U.Mayor",
        role: "Co-Investigador (UDD)",
        title: "REDES+: Efectos de la exposición a la contaminación atmosférica en la inasistencia escolar",
        desc: "Evaluar el potencial efecto mediador de la asistencia escolar entre la exposición a factores ambientales de establecimientos educacionales (i.e., material particulado, temperatura, vegetación) sobre el rendimiento académico de escolares en la Región Metropolitana. Coordinado entre investigadores de la Universidad del Desarrollo, Universidad Adolfo Ibáñez y la Universidad Mayor."
      }
    ]
  },

  publications: {
    title: "Publicaciones",
    subtitle: "Selección de publicaciones recientes en revistas indexadas. Para revisar el listado completo de publicaciones asociadas al laboratorio, consultar el perfil de Google Scholar.",
    items: [
      {
        number: 1,
        year: 2026,
        authors: "<strong style='color:#111827;font-weight:700;'>S Ayala</strong>, N Escobar, L Vizeu Barrozo, F Chiaravalloti-Neto, M Canals",
        title: "Spatial neighborhood patterns of pulmonary tuberculosis in a large urban area: the case of Santiago, Chile",
        journal: "Scientific Reports",
        link: "https://www.nature.com/articles/s41598-026-36462-w"
      }
    ]
  },

  // ── PRESENTACIONES / CURSOS / SEMINARIOS ──────────────────
  //  Agrega cada entrada con: title, authors, event
  // ──────────────────────────────────────────────────────────
  presentations: {
    title: "Presentaciones",
    subtitle: "Participaciones en congresos, conferencias, cursos y seminarios de integrantes-colaboradores del Laboratorio.",
    items: [
      {
        title: "Multimorbidity shows a strong dose-response association with in-hospital mortality in pulmonary tuberculosis",
        authors: "Guerrero-Munoz, J. Ayala, S",
        event: "II Congreso de estudiantes de postgrado en ciencia y salud. Santiago, Chile · 2026"
      },
      {
        title: "Factores asociados con la distribución espacial de la Tuberculosis pulmonar en la Región Metropolitana de Santiago, Chile",
        authors: "Ayala, S, Escobar, N, Canals, M",
        event: "VIII Congreso Chileno de Salud Pública · X Congreso Chileno de Epidemiología. Valparaíso, Chile · 2025"
      }
    ]
  },

  // ── VISUALIZADORES ────────────────────────────────────────
  //  Cada app lleva: shiny_url (link a la app) y cover (imagen
  //  de portada). Al hacer clic en la portada se abre la app
  //  en una pestaña nueva. Sin shiny_url → "en desarrollo".
  // ──────────────────────────────────────────────────────────
  visualizer: {
    title: "Visualizador de Datos",
    subtitle: "Explora nuestros datos geoespaciales de manera interactiva. Selecciona una aplicación y presiona la portada para abrirla.",
    layers: [
      {
        id: "tuberculosis",
        label: "Atlas de Tuberculosis",
        color: "#dc2626",
        shiny_url: "https://salvadorayala.shinyapps.io/generador_mapas_shinny/",
        cover: "https://github.com/sayala-spepi/espi-lab/blob/main/imagenes/portada_generador_mapas.png?raw=true",
        description: "Distribución espacial de casos de tuberculosis pulmonar por áreas pequeñas en Chile. Fuente: MINSAL · 2015–2023."
      },
      {
        id: "aire",
        label: "Clima y Salud",
        color: "#7c3aed",
        shiny_url: "",
        cover: "",
        description: "Relación entre variables ambientales - climáticas y efectos en salud"
      },
      {
        id: "vecindarios",
        label: "Vecindarios & Salud",
        color: "#0891b2",
        shiny_url: "",
        cover: "",
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
