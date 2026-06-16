export const posts = [
  {
    slug: "como-mejorar-seo",
    title: "Cómo mejorar tu SEO en 2026",
    excerpt: "Tácticas clave para optimizar tu sitio web y subir posiciones en Google.",
    content: "Descubre los principales pasos para mejorar SEO técnico, contenido y velocidad de carga.",
  },
  {
    slug: "herramientas-seo-imprescindibles",
    title: "Herramientas SEO imprescindibles",
    excerpt: "Las mejores herramientas para auditar, monitorear y escalar tu SEO.",
    content: "Usa análisis de palabras clave, auditorías técnicas y monitoreo de enlaces para impulsar tu web.",
  },
  {
    slug: "contacto-para-consultoria-seo",
    title: "Consultoría SEO profesional",
    excerpt: "Contacta para recibir asesoría personalizada y mejorar tu visibilidad online.",
    content: "Ofrecemos soporte estratégico para proyectos de SEO, rendimiento y contenido digital.",
  },
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}
