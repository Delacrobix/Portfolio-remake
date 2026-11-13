# Features obligatorias

Este documento lista lo que cualquier rediseño futuro del portafolio debe conservar. El aspecto visual puede cambiar; estas funciones y reglas de contenido no. Si un rediseño necesita quitar alguna, se decide con Jeffrey antes y se actualiza este archivo.

Documentos relacionados: `PRODUCT.md` (qué es el sitio y para quién) y `DESIGN.md` (el sistema visual actual).

## 1. Cabecera

- **Buscador global** justo debajo de los botones de la cabecera. Ver la sección 3.
- **Tres botones: hoja de vida, LinkedIn y GitHub.** Siempre visibles en la primera pantalla.
- **La hoja de vida es un PDF de una sola página**, en español y en inglés; el botón abre la del idioma activo. Cada una tiene una dirección simple y estable (`jeffrm.com/jeffrey-rengifo-cv-es.pdf` y `jeffrm.com/jeffrey-rengifo-cv-en.pdf`), sin códigos en el nombre. Sigue las convenciones para sistemas de filtrado de candidatos (ATS): una sola columna, encabezados estándar, texto real, sin foto, tablas ni barras laterales, con el correo destacado y los enlaces como hipervínculos. Se genera con `yarn build-resume` a partir del mismo contenido del sitio, así que no se edita a mano: se cambia el contenido y se vuelve a generar.
- **Introducción sin cifras exactas.** Menciona que escribe artículos, graba videotutoriales y trabaja en proyectos para clientes (sin limitarlo a migraciones), y cada mención enlaza a su sección. Los números van en la sección de artículos.
- Nombre, rol y ciudad, con la foto de perfil.

## 2. Enlaces

- **Todo enlace que sale del sitio abre en una pestaña nueva** (`target="_blank"` con `rel="noopener noreferrer"`). Incluye la hoja de vida en PDF, LinkedIn, GitHub, artículos, videos, credenciales, certificados y enlaces de premios. El visitante nunca pierde el portafolio.
- Los enlaces internos (menú, enlaces de la introducción, resultados de búsqueda) desplazan la página a la sección; no recargan.
- En el código, los enlaces externos pasan por `ExternalLink` o `ButtonLink external`, que aplican esto siempre.

## 3. Buscador global

- **Busca en todo el contenido:** secciones, áreas de trabajo, experiencia, premios, certificaciones y cursos, proyectos, productos, artículos y videos.
- **Tolera erratas y acentos.** "hackaton", "hakathon" y "certificasion" encuentran lo correcto.
- **Entiende términos relacionados por sección.** "experiencia" o "trabajo" llevan a Experiencia; "concurso" o "hackatón" a Premios; "cursos" a Certificaciones; "correo" a Contacto. Las listas están en `src/config/site.js`.
- **No transforma la página.** Los resultados salen en un panel bajo el campo, agrupados por sección, con la coincidencia resaltada.
- **Elegir un resultado interno** desplaza hasta ese elemento y lo resalta unos segundos. Los artículos y videos abren en pestaña nueva.
- **Conecta con el buscador de artículos.** Cuando coinciden muchos artículos ofrece "Ver los N artículos que coinciden", que lleva a la sección ya filtrada.
- **Teclado:** `/` enfoca el buscador desde cualquier parte; flechas, Enter y Esc funcionan dentro.
- **Ejemplos visibles** bajo el campo para que se entienda qué se puede buscar.
- Funciona sin servidor: el índice se arma en el navegador.

### Comandos

Escribir `/` en el buscador muestra la lista de comandos. Cada comando responde a su nombre en español y en inglés.

| Comando | Qué hace |
|---|---|
| `/cv` | Abre la hoja de vida en una pestaña nueva |
| `/linkedin`, `/github` | Abren cada perfil en una pestaña nueva |
| `/correo` (`/email`) | Copia el correo al portapapeles |
| `/perfil` (`/profile`) | Copia el perfil completo en Markdown |
| `/ultimo` (`/latest`) | Abre el artículo más reciente |
| `/azar` (`/random`) | Abre un artículo al azar |
| `/articulos <término>` | Busca solo en los artículos |
| `/videos <término>` | Busca solo en los videos |
| `/es`, `/en` | Cambian el idioma |
| `/oscuro`, `/claro` (`/dark`, `/light`) | Cambian entre modo oscuro y claro |

## 4. Artículos

- **Cifras destacadas** al inicio de la sección: número de artículos, vistas agregadas y puesto entre los autores de Search Labs.
- **Las vistas siempre van agregadas**, nunca por artículo, redondeadas hacia abajo ("+52.000"). No se muestra la fuente ni la fecha del dato; la nota bajo cada cifra debe aportar algo, como el promedio por artículo. La métrica son vistas de página de Google Analytics en elastic.co; se llama "vistas", no "lecturas".
- **Podio** con los tres autores con más artículos en Elastic Search Labs, con Jeffrey resaltado.
- **Cada artículo muestra su imagen de portada**, el blog, la fecha y el título.
- **Buscador propio de artículos** con filtros por blog y por año, y la coincidencia resaltada.
- Los artículos de Search Labs y de Observability Labs se muestran juntos, distinguidos por un punto de color y su etiqueta.

## 5. Secciones que deben existir

Pueden reordenarse de más a menos relevante, pero cada una conserva su sección propia y un peso visual acorde.

- **Áreas de trabajo.** Orden fijo: primero agentes de IA y aplicaciones con LLM, luego búsqueda y observabilidad con Elastic, al final desarrollo. React se menciona como apoyo, no como habilidad principal.
- **Experiencia**, en formato de hoja de vida con las fechas alineadas.
- **Artículos.** Ver la sección 4.
- **Premios**, con el puesto obtenido en grande, el evento, el proyecto y sus enlaces. No pueden quedar como una línea de texto.
- **Certificaciones**, en dos niveles: certificaciones profesionales arriba, con imagen y enlace a la credencial; cursos y formación debajo, con menos peso.
- **Proyectos.** Los clientes de consultoría van anonimizados ("correduría de seguros de EE. UU.", "centro de investigación en salud de EE. UU."). Elastic sí se nombra, porque la relación ya es pública en sus blogs. Incluye la reescritura de la documentación de Painless y los artículos de referencia y SEO.
- **Productos propios**, dentro de Proyectos. Cada uno muestra su imagen si existe, un enlace a la app en vivo y otro al repositorio de GitHub cuando es público. La API de artículos no figura aquí.
- **Videos**, cada uno con su miniatura.
- **Contacto**, al final, con copiar correo, LinkedIn y GitHub.

## 6. Respaldo de datos

- **El sitio debe funcionar aunque la API de artículos falle.** `src/data/labs-cache.json` guarda una copia de los artículos, el total de vistas y el podio. La página arranca con esa copia y la reemplaza cuando la API responde.
- **Los videos viven en el repositorio** (`src/data/videos.json`), no dependen de la API.
- `yarn refresh-cache` actualiza el respaldo desde la API. Conviene ejecutarlo antes de cada despliegue.

## 7. Navegación e idioma

- Menú superior fijo con un enlace a cada sección principal (Áreas de trabajo queda justo bajo la cabecera y no necesita enlace); cada enlace funciona y se marca la sección visible.
- En pantallas pequeñas el menú se abre con un botón.
- **Modo claro como principal y modo oscuro secundario.** El oscuro se activa con un botón en la barra superior y se recuerda entre visitas. Los colores salen de los mismos tokens del tema, con otros valores; ningún componente define colores propios.
- Sitio bilingüe, español e inglés, con el idioma elegido recordado entre visitas. Todo texto nuevo se añade en `src/languages/es.json` y `src/languages/en.json`.

## 8. Tono y estilo

- Portafolio y hoja de vida neutral: expone el perfil, no vende.
- **Idiomas:** la presentación lleva una línea aparte, «Idiomas: español nativo e inglés fluido», sin nivel del marco europeo. El nivel (B2, C1…) solo aparece en la hoja de vida.
- **Sin ubicación en el sitio:** el perfil apunta a trabajo remoto, así que la presentación no menciona ciudad ni país.
- Sobrio y profesional. Sin metáforas visuales ni temas (se probaron un plano de transporte, un fichero de biblioteca y unas instrucciones de armado, y se descartaron).
- Nada que el perfil no respalde: sin cifras infladas ni adjetivos de autopromoción. Cada cifra lleva su fuente o su enlace.
- Solo se publica contenido profesional verificable; las notas personales del autor quedan fuera del sitio.

## 9. Impresión y tipografía

- **La página se imprime como una hoja de vida limpia:** siempre en claro, sin menú, buscadores, botones ni imágenes de artículos y videos, y con los datos de contacto como texto.
- **La tipografía se sirve desde el propio sitio** (`src/assets/fonts`), sin depender de servicios externos.

## 10. Accesibilidad

- Todo se puede usar con teclado, con el foco visible.
- El contenido se lee bien en móvil y en escritorio.
- Los controles tienen nombre accesible y los mensajes (correo copiado, comando ejecutado) se anuncian.

## Pendiente

- **Acreditaciones de Claude (Anthropic).** Deben aparecer en Certificaciones cuando Jeffrey indique nombres, fechas, enlaces y nivel.
