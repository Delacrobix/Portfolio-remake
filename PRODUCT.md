# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cualquier persona que quiera conocer el perfil profesional de Jeffrey Rengifo: colegas de la comunidad Elastic, lectores de sus artículos, personas técnicas o no técnicas que llegan desde LinkedIn, GitHub o un artículo. No hay un público objetivo comercial: el sitio no busca clientes ni empleo. Quien quiera escribirle encuentra el contacto al final.

## Product Purpose

Portafolio y hoja de vida neutral, en una sola página, publicado en jeffrm.com. Expone con exactitud quién es Jeffrey, qué ha hecho y dónde está publicado su trabajo. El éxito es que un visitante entienda el perfil completo sin que nada suene a venta.

## Positioning

Ingeniero de software y de Elastic Stack (búsqueda, observabilidad e IA generativa) con un volumen de trabajo publicado verificable: es el autor con más artículos en Elastic Search Labs, y cada artículo enlaza a elastic.co.

## Operating Context

- Página única con navegación por secciones; bilingüe inglés y español (i18next).
- Los artículos, sus vistas y el podio de autores se cargan en vivo desde la API propia de artículos (`VITE_ARTICLES_API_URL`). `src/data/labs-cache.json` guarda un respaldo con el que el sitio arranca y funciona si la API falla; los videos viven en `src/data/videos.json`.
- Desplegado en GitHub Pages con dominio propio (jeffrm.com).
- Stack: Vite 6, React 19, Tailwind CSS 4 e i18next, sin librería de componentes.

## Capabilities and Constraints

- Secciones: introducción con buscador global, áreas de trabajo, experiencia, artículos, premios, certificaciones, proyectos, videos y contacto. Las features que todo rediseño debe conservar están en `REQUIRED_FEATURES.md`.
- La API expone por artículo: título, descripción, portada, enlace, slug, fecha, autores, cuerpo, `views` y `viewsRetrievedAt`.
- Las vistas se muestran agregadas ("más de X vistas"), nunca como cifra por artículo, y sin citar la fuente ni la fecha del dato en la página.
- La métrica es vistas de página de GA4 en www.elastic.co, incluidas las versiones traducidas. Se nombra como "vistas", no como "lecturas" ni "lectores".
- Los proyectos de consultoría aparecen anonimizados: "correduría de seguros de EE. UU." y "centro de investigación en salud de EE. UU.". Elastic sí se nombra como cliente, porque la relación ya es pública en sus blogs.
- El sitio solo publica lo que está en este documento y en `src/languages/`; las notas personales del autor quedan fuera.

## Brand Commitments

- Tono neutral y factual, de hoja de vida. Sin lenguaje de venta ni llamadas a la acción comerciales.
- Nada que el perfil no respalde: sin cifras infladas ni adjetivos de autopromoción.
- Sobrio y rápido de recorrer; sin exceso de animación ni secciones largas.
- No debe parecer la plantilla genérica de portafolio de desarrollador (hero oscuro, acento neón, cards con brillo y degradados).
- Registro sobrio y profesional. Las direcciones con metáfora (plano de transporte, fichero de biblioteca, instrucciones de armado) se descartaron por demasiado creativas. Referencias aceptadas: perfil corporativo, documentación técnica moderna y hoja de vida bien maquetada.
- La introducción no lleva cifras exactas de artículos ni de vistas: menciona la actividad y enlaza a las secciones.
- Las cifras (artículos, vistas, puesto en Search Labs) se destacan dentro de la sección de artículos, junto al podio de autores, que se conserva.
- Los artículos se muestran con su imagen de portada y con un buscador.
- Los premios tienen sección propia y peso visual; las certificaciones se distinguen por nivel (certificaciones principales y cursos).
- La API de artículos no figura entre los productos propios.

## Evidence on Hand

- Artículos: 40 en Elastic Search Labs (desde 2025-01) y 21 en Elastic Observability Labs (desde 2026-04), con portada, fecha y enlace vía API.
- Autor número 1 por cantidad de artículos en Search Labs (endpoint `/top-authors`: 40, el siguiente tiene 30).
- Vistas: más de 52.000 vistas de página sumando los artículos; la cifra llega por la API de artículos y el sitio solo muestra el total redondeado.
- 8 videotutoriales (lista en `src/languages/*.json`).
- Contribuciones: 43 PRs fusionados en elastic/elastic-labs y 6 en elastic/observability-labs (verificado en GitHub el 2026-11-12). El sitio dice "más de 45".
- Certificaciones: Elastic Certified Engineer (2025) y Elastic Certified Observability Engineer (2026), con credencial enlazable; cursos de Painless y observabilidad.
- Premios: 2.º puesto en el Enterprise AI Hackathon de NYSE y Cohere (2024) y 3.º en el Gemini AI Hackathon (2024), con enlaces.
- Título profesional que usa el sitio: "Elastic Stack engineer" ("Ingeniero de Elastic Stack"), no "consultor técnico de Elastic".
- Experiencia: ingeniero de Elastic Stack y escritor técnico en Kibernum, Elite Consulting Team (desde 2024-09); desarrollador web freelance (2022 a 2024).
- Proyectos con clientes: migración Swiftype a Elasticsearch (2024-11) y migración App Search a Elasticsearch 9 (2026-06 en adelante), con detalle técnico en el perfil.
- Proyectos para Elastic: participación en la reescritura de la documentación de Painless (2025) y artículos de referencia y SEO (2026-10 en adelante).
- Productos propios que muestra el sitio: Vatio (aplicación web de energía para hogares colombianos; por ahora sin enlaces ni imagen), Dark Score (darkscore.app, repositorio público) y FacturAI (extracción de datos de facturas con OCR y LangGraph; aún no publicada, sin enlaces ni imagen).
- Habilidades, en el orden en que deben presentarse: agentes de IA y aplicaciones con LLM (RAG, MCP, LangChain, LangGraph, evaluación de LLMs); Elasticsearch, ES|QL, Elastic Observability, OpenTelemetry y migraciones de búsqueda; Python, FastAPI y TypeScript. React se menciona como herramienta de apoyo, no como habilidad principal.
- Acreditaciones de Claude (Anthropic): Jeffrey indicó que las tiene y que deben aparecer. Pendiente: nombres exactos, fechas y enlaces de verificación. No inventarlas.
- Recursos: foto de perfil (`src/assets/images/profile/me.jpg`), CV en PDF, miniaturas de certificados.
- No existen testimonios, logos de clientes ni cifras de usuarios; no deben inventarse.

## Product Principles

1. Exponer, no vender: el sitio describe un perfil; no persigue una conversión.
2. Cada afirmación es verificable: una cifra lleva su fuente o su enlace.
3. El trabajo publicado va primero; la biografía lo acompaña.
4. Las cifras se muestran agregadas; lo que las acompaña debe aportar valor, no metadatos.
5. Respetar el tiempo del visitante: recorrido corto y escaneable.
