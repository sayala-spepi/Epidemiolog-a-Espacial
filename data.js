// ============================================================
//  LABORATORIO DE EPIDEMIOLOGÍA ESPACIAL — DATOS DEL SITIO
//  Edita este archivo para actualizar TODO el contenido del sitio
//  sin necesidad de tocar el HTML o el CSS.
// ============================================================

const SITE_DATA = {

  // ── META ──────────────────────────────────────────────────
  meta: {
    title: "Lab. Epidemiología Espacial",
    description: "Laboratorio de Epidemiología Espacial — Análisis geoespacial de salud pública.",
    favicon: "logo.png"
  },

  // ── NAVEGACIÓN ────────────────────────────────────────────
  nav: {
    logo: "logo.png",
    links: [
      { label: "Inicio",        href: "#inicio" },
      { label: "Integrantes",   href: "#integrantes" },
      { label: "Proyectos",     href: "#proyectos" },
      { label: "Publicaciones", href: "#publicaciones" },
      { label: "Visualizador",  href: "#visualizador" }
    ]
  },

  // ── HERO (INICIO) ─────────────────────────────────────────
  hero: {
    tag: "Laboratorio de Epidemiología Espacial",
    title: "Comprendemos la geografía\nde la enfermedad.",
    subtitle: "Integramos análisis geoespacial, sensores remotos y datos de salud pública para identificar patrones territoriales de enfermedad, desigualdad sanitaria y exposición ambiental en América Latina.",
    cta_primary:   { label: "Contáctanos",      href: "#contacto" },
    cta_secondary: { label: "Ver proyectos",    href: "#proyectos" },
    stats: [
      { value: "12+", label: "Proyectos activos" },
      { value: "38",  label: "Publicaciones" },
      { value: "6",   label: "Países" }
    ]
  },

  // ── LÍNEAS DE INVESTIGACIÓN ───────────────────────────────
  research_lines: {
    title: "Líneas de Investigación",
    subtitle: "Abordamos la salud desde una perspectiva territorial, combinando métodos cuantitativos avanzados con evidencia para la toma de decisiones.",
    items: [
      {
        icon: "map-pin",
        title: "Geoespacial & SIG",
        desc: "Modelamiento espacial de enfermedades transmisibles y no transmisibles. Análisis de clústeres, autocorrelación espacial y mapas de riesgo para la vigilancia epidemiológica."
      },
      {
        icon: "satellite",
        title: "Teledetección & Ambiente",
        desc: "Uso de imágenes satelitales para cuantificar exposición a calor urbano, contaminación atmosférica, cobertura vegetal y sus efectos en la morbimortalidad poblacional."
      },
      {
        icon: "activity",
        title: "Vigilancia Epidemiológica",
        desc: "Diseño de sistemas de alerta temprana basados en datos de rutina, registros clínicos y fuentes no convencionales para la detección oportuna de brotes."
      },
      {
        icon: "users",
        title: "Determinantes Sociales",
        desc: "Análisis de inequidades en salud a nivel territorial. Medición de privación social, acceso a servicios de salud y vulnerabilidad socioambiental."
      },
      {
        icon: "bar-chart-2",
        title: "Estadística Espacial",
        desc: "Regresión geográficamente ponderada, modelos bayesianos espacio-temporales y métodos de machine learning para datos de salud georeferenciados."
      },
      {
        icon: "cpu",
        title: "Ciencia de Datos en Salud",
        desc: "Desarrollo de pipelines de datos abiertos, dashboards interactivos y herramientas reproducibles para análisis de grandes volúmenes de datos sanitarios."
      }
    ]
  },

  // ── INTEGRANTES ───────────────────────────────────────────
  team: {
    title: "Integrantes",
    subtitle: "Un equipo interdisciplinario que combina epidemiología, geografía, estadística y ciencias de la computación.",
    members: [
      {
        name: "Dra. Valentina Rojas",
        role: "Directora del Laboratorio",
        area: "Epidemiología Espacial · Teledetección",
        photo: "https://i.pravatar.cc/200?img=47",
        orcid: "#",
        scholar: "#"
      },
      {
        name: "Dr. Matías Fernández",
        role: "Investigador Asociado",
        area: "Estadística Espacial · SIG",
        photo: "https://i.pravatar.cc/200?img=12",
        orcid: "#",
        scholar: "#"
      },
      {
        name: "Mg. Catalina Vega",
        role: "Investigadora",
        area: "Salud Ambiental · Calor Urbano",
        photo: "https://i.pravatar.cc/200?img=32",
        orcid: "#",
        scholar: "#"
      },
      {
        name: "Mg. Sebastián Torres",
        role: "Investigador",
        area: "Ciencia de Datos · Machine Learning",
        photo: "https://i.pravatar.cc/200?img=15",
        orcid: "#",
        scholar: "#"
      },
      {
        name: "Lic. Isidora Muñoz",
        role: "Tesista Doctoral",
        area: "Desigualdades en Salud · APS",
        photo: "https://i.pravatar.cc/200?img=44",
        orcid: "#",
        scholar: "#"
      },
      {
        name: "Lic. Felipe Araya",
        role: "Tesista Magíster",
        area: "Enfermedades Vectoriales · SIG",
        photo: "https://i.pravatar.cc/200?img=22",
        orcid: "#",
        scholar: "#"
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
        year: "2023–2026",
        funder: "ANID FONDECYT Regular",
        title: "Impacto del calor urbano en la mortalidad cardiovascular en ciudades chilenas",
        desc: "Evaluación del efecto de la isla de calor urbano (UHI) en la mortalidad por causas cardiovasculares en las 15 ciudades más pobladas de Chile, usando datos satelitales MODIS/Landsat y registros de defunción del MINSAL.",
        tags: ["Calor urbano", "Mortalidad", "Teledetección", "Chile"]
      },
      {
        status: "En curso",
        year: "2024–2027",
        funder: "OPS/OMS",
        title: "Atlas de inequidades sanitarias en América del Sur",
        desc: "Construcción de un atlas interactivo de indicadores de salud desagregados a nivel municipal para 6 países de América del Sur, integrando fuentes de datos heterogéneas bajo estándares FAIR.",
        tags: ["Inequidades", "Atlas", "América Latina", "Datos abiertos"]
      },
      {
        status: "En curso",
        year: "2024–2025",
        funder: "MINSAL",
        title: "Sistema de vigilancia geoespacial para arbovirosis emergentes en el norte de Chile",
        desc: "Diseño e implementación de un sistema de alerta temprana geoespacial para dengue, Zika y chikungunya en las regiones de Arica, Tarapacá y Antofagasta, integrando datos climáticos y entomológicos.",
        tags: ["Arbovirosis", "Vigilancia", "Norte de Chile", "Alerta temprana"]
      },
      {
        status: "Completado",
        year: "2020–2023",
        funder: "ANID FONDECYT Iniciación",
        title: "Factores geoespaciales asociados a la distribución de diabetes tipo 2 en Chile",
        desc: "Análisis espacial de los determinantes socioeconómicos, ambientales y de acceso a salud asociados a la prevalencia de diabetes tipo 2 a nivel comunal en Chile continental.",
        tags: ["Diabetes", "Determinantes sociales", "Análisis espacial"]
      }
    ]
  },

  // ── PUBLICACIONES ─────────────────────────────────────────
  publications: {
    title: "Publicaciones",
    subtitle: "Selección de publicaciones recientes en revistas indexadas. Para la lista completa, consulta nuestro perfil en Google Scholar.",
    scholar_url: "#",
    items: [
      {
        year: 2024,
        authors: "Rojas V, Fernández M, Vega C.",
        title: "Urban heat island effect and cardiovascular mortality in Chilean cities: a spatiotemporal analysis, 2010–2022.",
        journal: "Environmental Health Perspectives",
        volume: "132(4):047002",
        doi: "#",
        tags: ["Q1", "Factor de impacto 10.1"]
      },
      {
        year: 2024,
        authors: "Torres S, Rojas V, Muñoz I.",
        title: "A machine learning framework for spatial prediction of dengue incidence in arid regions.",
        journal: "PLOS Neglected Tropical Diseases",
        volume: "18(2):e0011923",
        doi: "#",
        tags: ["Q1", "Open Access"]
      },
      {
        year: 2023,
        authors: "Fernández M, Araya F, Rojas V.",
        title: "Socioeconomic deprivation and spatial clustering of type 2 diabetes in Chile: a Bayesian multilevel approach.",
        journal: "Spatial and Spatio-temporal Epidemiology",
        volume: "47:100607",
        doi: "#",
        tags: ["Q2"]
      },
      {
        year: 2023,
        authors: "Vega C, Rojas V.",
        title: "Green space exposure and all-cause mortality in Latin American metropolitan areas: a multi-city analysis.",
        journal: "Landscape and Urban Planning",
        volume: "239:104856",
        doi: "#",
        tags: ["Q1", "Factor de impacto 8.6"]
      },
      {
        year: 2022,
        authors: "Rojas V, Muñoz I, Fernández M, Torres S.",
        title: "Mapping healthcare accessibility gaps in Chile using network analysis and composite deprivation indices.",
        journal: "Health & Place",
        volume: "78:102934",
        doi: "#",
        tags: ["Q1"]
      }
    ]
  },

  // ── VISUALIZADOR ──────────────────────────────────────────
  visualizer: {
    title: "Visualizador de Datos",
    subtitle: "Explora nuestros datos geoespaciales de manera interactiva. Selecciona una capa temática para visualizar en el mapa.",
    layers: [
      { id: "heat",   label: "Isla de Calor Urbano",     color: "#dc2626", description: "Diferencial de temperatura superficial (°C) respecto a áreas rurales circundantes. Fuente: Landsat 8/9 · 2020–2023." },
      { id: "depri",  label: "Índice de Privación Social", color: "#7c3aed", description: "Índice compuesto de privación socioeconómica a nivel censal. Variables: hacinamiento, escolaridad, ingreso, desempleo." },
      { id: "access", label: "Acceso a Salud",            color: "#0891b2", description: "Tiempo de desplazamiento al establecimiento de salud más cercano (minutos). Análisis de red vial." },
      { id: "dengue", label: "Riesgo de Dengue",           color: "#d97706", description: "Índice de riesgo de transmisión de dengue basado en factores climáticos, entomológicos y socioambientales." }
    ],
    note: "Los datos presentados corresponden a capas de demostración. Los conjuntos de datos completos están disponibles previa solicitud."
  },

  // ── CONTACTO / FOOTER ─────────────────────────────────────
  contact: {
    title: "Contacto",
    email: "epi.espacial@universidad.cl",
    address: "Facultad de Medicina, Universidad de Chile\nAv. Independencia 1027, Santiago, Chile",
    github: "https://github.com/lab-epi-espacial",
    twitter: "#",
    researchgate: "#"
  }

};
