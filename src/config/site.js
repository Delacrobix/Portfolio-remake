// Identity and links used across the site.
export const SITE = {
  name: "Jeffrey Rengifo",
  url: "https://jeffrm.com",
  linkedin: import.meta.env.VITE_LINKEDIN || "https://www.linkedin.com/in/jeffrey-rerin/",
  github: import.meta.env.VITE_GITHUB || "https://github.com/Delacrobix",
  email: import.meta.env.VITE_EMAIL || "jeffrey.rengifom@gmail.com",
};

// Sections in page order. `inNav` lists the ones linked from the top bar.
export const SECTIONS = [
  { id: "areas", inNav: false },
  { id: "experience", inNav: true },
  { id: "articles", inNav: true },
  { id: "awards", inNav: true },
  { id: "certifications", inNav: true },
  { id: "projects", inNav: true },
  { id: "videos", inNav: true },
  { id: "contact", inNav: true },
];

// Extra words that should lead to each section in the site search, in both languages.
export const SECTION_KEYWORDS = {
  areas: "habilidades skills tecnologias technologies herramientas tools stack conocimientos",
  experience: "experiencia experience trabajo work empleo job trayectoria carrera career laboral cargo",
  articles: "articulos articles blog publicaciones posts escritos writing vistas views autor author",
  awards: "premios awards hackathon hackaton hackatones concurso competencia competition reconocimientos ganador winner",
  certifications: "certificaciones certifications certificados credenciales credentials acreditaciones cursos courses formacion training estudios",
  projects: "proyectos projects clientes clients migraciones migrations productos products apps aplicaciones",
  videos: "videos videotutoriales tutoriales tutorials youtube",
  contact: "contacto contact correo email mail linkedin github escribir mensaje message",
};
