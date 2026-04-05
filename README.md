# Laboratorio de Epidemiología Espacial — Sitio Web

Landing page estática del Laboratorio de Epidemiología Espacial, desplegable en **GitHub Pages** sin ninguna dependencia de servidor.

---

## 📁 Estructura de archivos

```
/
├── index.html        ← Estructura y estilos (NO editar para actualizar contenido)
├── data.js           ← ✅ TODO el contenido del sitio vive aquí
├── logo.png          ← Logo del laboratorio
└── README.md
```

---

## ✏️ Cómo actualizar el contenido

**Solo necesitas editar `data.js`** — es un archivo JavaScript con un objeto JSON que controla cada sección del sitio.

### Ejemplos rápidos

**Agregar un integrante:**
```js
// En SITE_DATA.team.members, agrega un objeto:
{
  name: "Dr. Nuevo Integrante",
  role: "Investigador Asociado",
  area: "Epidemiología · SIG",
  photo: "https://url-de-tu-foto.jpg",  // o ruta local: "fotos/nombre.jpg"
  orcid: "https://orcid.org/0000-...",
  scholar: "https://scholar.google.com/..."
}
```

**Agregar una publicación:**
```js
// En SITE_DATA.publications.items, agrega:
{
  year: 2025,
  authors: "Apellido N, Apellido N.",
  title: "Título del artículo aquí.",
  journal: "Nombre de la Revista",
  volume: "Vol(N):páginas",
  doi: "https://doi.org/...",
  tags: ["Q1", "Open Access"]
}
```

**Agregar un proyecto:**
```js
// En SITE_DATA.projects.items, agrega:
{
  status: "En curso",          // "En curso" | "Completado"
  year: "2025–2028",
  funder: "ANID FONDECYT",
  title: "Título del proyecto",
  desc: "Descripción breve del proyecto...",
  tags: ["Tema1", "Tema2"]
}
```

---

## 🚀 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o privado con Pages habilitado).
2. Sube los tres archivos: `index.html`, `data.js`, `logo.png`.
3. Ve a **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. En ~1 minuto el sitio estará disponible en `https://[usuario].github.io/[repositorio]/`.

### Actualizar el sitio

Cada vez que edites `data.js` y hagas `git push`, GitHub Pages actualizará el sitio automáticamente en ~1 minuto.

```bash
# Flujo típico de actualización
git add data.js
git commit -m "Agrego publicación 2025"
git push
```

---

## 🖼️ Usar fotos locales para integrantes

En lugar de URLs externas, puedes subir fotos al repositorio:

```
/
├── fotos/
│   ├── valentina-rojas.jpg
│   └── matias-fernandez.jpg
```

Y en `data.js` usar rutas relativas:
```js
photo: "fotos/valentina-rojas.jpg"
```

---

## 🗺️ Visualizador de datos

El mapa usa **Leaflet.js** con tiles de CartoDB (no requiere API key).

Para agregar una nueva capa temática, agrega un objeto a `SITE_DATA.visualizer.layers`:
```js
{
  id: "nueva-capa",
  label: "Nombre de la capa",
  color: "#color-hex",
  description: "Descripción metodológica de la capa."
}
```

---

## 🛠️ Tecnologías (todas vía CDN, sin instalación)

| Librería | Uso |
|---|---|
| Tailwind CSS | Estilos utilitarios |
| Lucide Icons | Iconografía |
| Leaflet.js | Mapa interactivo |
| Google Fonts (Fraunces + DM Sans) | Tipografía |
