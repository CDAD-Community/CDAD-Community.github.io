# CDAD Community — Implementación profesional de sitio multidioma

Quiero que implementes una arquitectura multidioma profesional, moderna y preparada para crecimiento internacional en el sitio web de **CDAD Community**.

## 1. Objetivo

El sitio debe soportar oficialmente:

- English (`en`) — idioma fuente/original de CDAD.
- Español (`es`) — traducción oficial.

La arquitectura debe quedar preparada para agregar posteriormente otros idiomas (`pt`, `fr`, `de`, etc.) sin tener que rediseñar el sitio.

La solución debe priorizar:

- SEO internacional.
- URLs limpias y permanentes.
- Accesibilidad.
- Performance.
- Mantenibilidad.
- Versionamiento mediante Git.
- Consistencia terminológica.
- Compatibilidad con GitHub Pages si ese es el hosting actual.
- Escalabilidad futura.
- Evitar traducción automática en runtime como mecanismo principal.

---

# 2. PRIMERA REGLA: inspeccionar antes de modificar

Antes de escribir o modificar código:

1. Inspecciona completamente el repositorio actual.
2. Identifica:
   - framework utilizado;
   - sistema de routing;
   - estructura de páginas;
   - sistema de componentes;
   - configuración de build;
   - configuración de deployment;
   - GitHub Pages;
   - dominio, si existe;
   - sistema actual de documentación;
   - archivos Markdown;
   - assets;
   - navegación;
   - metadata SEO.
3. Determina cuál es la arquitectura multidioma más apropiada para el stack existente.
4. NO reemplaces el framework actual solamente para implementar i18n.
5. NO hagas una migración innecesaria.
6. Conserva todo lo que ya funciona.
7. Antes de realizar cambios estructurales importantes, explica brevemente qué encontraste y qué arquitectura propones.

---

# 3. Arquitectura objetivo

La arquitectura pública debe utilizar rutas por idioma:

```text
/en/
/es/
```

Ejemplos:

```text
/en/methodology
/es/metodologia

/en/documentation
/es/documentacion

/en/community
/es/comunidad
```

Si el framework actual recomienda mantener el mismo slug entre idiomas, puede utilizarse:

```text
/en/methodology
/es/methodology
```

pero prioriza URLs naturales para cada idioma cuando sea compatible con el framework y el SEO.

La decisión debe basarse en el stack existente.

---

# 4. Idioma fuente

English debe ser el idioma fuente/canónico del proyecto.

Conceptualmente:

```text
CDAD Content
     │
     ├── English
     │      └── Source of Truth
     │
     └── Español
            └── Official Translation
```

No quiero dos contenidos independientes que puedan evolucionar de manera inconsistente.

Cuando sea posible, la estructura debe permitir identificar claramente:

```text
source: en
translation: es
```

---

# 5. Selector de idioma

Implementa un selector de idioma profesional en la navegación principal:

```text
EN ▾
```

con:

```text
English
Español
```

Características requeridas:

- accesible mediante teclado;
- compatible con lectores de pantalla;
- indicador visual del idioma actual;
- no utilizar banderas como único identificador de idioma;
- conservar la página actual al cambiar de idioma;
- si existe:

```text
/en/methodology
```

y existe su equivalente:

```text
/es/metodologia
```

el selector debe llevar directamente allí.

NO debe enviar al usuario siempre al homepage.

---

# 6. SEO internacional

Implementa correctamente SEO multidioma.

Cada página debe tener:

- `<html lang="en">` o `<html lang="es">`;
- canonical URL;
- `hreflang="en"`;
- `hreflang="es"`;
- `hreflang="x-default"` cuando corresponda.

Ejemplo conceptual:

```html
<link rel="alternate"
      hreflang="en"
      href="https://DOMAIN/en/methodology">

<link rel="alternate"
      hreflang="es"
      href="https://DOMAIN/es/metodologia">

<link rel="alternate"
      hreflang="x-default"
      href="https://DOMAIN/en/methodology">
```

IMPORTANTE:

No inventes el dominio.

Detecta el dominio real utilizado por el proyecto y utiliza la configuración existente.

Si el proyecto actualmente no tiene dominio definitivo, deja la configuración preparada mediante una variable/configuración centralizada.

---

# 7. Canonical URLs

Cada versión lingüística debe tener su propia canonical URL.

Por ejemplo:

English:

```text
/en/methodology
canonical = https://DOMAIN/en/methodology
```

Spanish:

```text
/es/metodologia
canonical = https://DOMAIN/es/metodologia
```

No hagas que ambas páginas tengan el mismo canonical.

---

# 8. Sitemap

El sistema debe generar correctamente el sitemap.

Debe incluir las URLs de ambos idiomas:

```text
/en/
/es/

/en/methodology
/es/metodologia

/en/documentation
/es/documentacion
```

Si el framework permite generar `hreflang` mediante sitemap, evalúa esa alternativa.

No dupliques mecanismos innecesariamente si el framework ya ofrece una solución estándar.

---

# 9. Robots

Revisa:

```text
robots.txt
```

y asegúrate de que:

- las páginas públicas sean indexables;
- no se bloqueen accidentalmente `/en/` o `/es/`;
- el sitemap esté correctamente referenciado.

---

# 10. Detección del idioma

La raíz:

```text
/
```

puede detectar preferencia de idioma del navegador mediante:

```text
Accept-Language
```

pero NO quiero una redirección agresiva que haga imposible acceder manualmente a otro idioma.

Comportamiento recomendado:

```text
/
 │
 ├── navegador español → sugerir /es/
 │
 └── resto → /en/
```

Si la detección automática genera problemas de SEO, caché o UX, prioriza SEO y URLs explícitas.

Las URLs:

```text
/en/
```

y:

```text
/es/
```

deben funcionar siempre directamente.

---

# 11. Traducciones

No utilices Google Translate, navegador translation, JavaScript runtime translation ni APIs de traducción como fuente principal del contenido.

Las traducciones deben existir como contenido versionado dentro del repositorio.

La estructura puede ser, dependiendo del framework:

```text
content/
  en/
    methodology.md
    documentation.md
    community.md

  es/
    metodologia.md
    documentacion.md
    comunidad.md
```

o la estructura idiomática recomendada por el framework actual.

No fuerces esta estructura si el framework ya tiene un patrón oficial mejor.

---

# 12. Terminología CDAD

Es MUY importante mantener consistencia terminológica.

Los conceptos oficiales de CDAD deben conservar su nombre cuando corresponda:

```text
Context-Driven AI Development
Context Protection Pattern
Context Governance
Context Layers
Guardrails
Reasoner
AI Development Environment
CDAD CLI
CDAD Bootstrap
```

No traduzcas nombres propios o conceptos oficiales automáticamente.

Por ejemplo:

```text
Context Protection Pattern (CPP)
```

debe seguir identificándose como:

```text
Context Protection Pattern (CPP)
```

aunque la explicación posterior esté en español.

Si existe un glosario actual en el repositorio, reutilízalo.

Si no existe, crea una propuesta de:

```text
docs/glossary.md
```

o equivalente apropiado al proyecto.

---

# 13. Arquitectura preparada para nuevos idiomas

No implementes:

```text
if language == "en"
if language == "es"
```

por toda la aplicación.

El sistema debe ser extensible.

Idealmente:

```text
SUPPORTED_LOCALES = [
    "en",
    "es"
]
```

y los componentes deben consumir esa configuración.

Agregar posteriormente:

```text
pt
```

debería requerir principalmente:

```text
content/pt/
```

y configuración mínima.

---

# 14. Componentes

Si el framework utiliza componentes, centraliza:

- LanguageSwitcher
- locale configuration
- SEO metadata
- alternate links
- navigation labels
- language metadata.

Evita duplicación.

Ejemplo conceptual:

```text
components/
  LanguageSwitcher
  SEO
  Header
  Footer

config/
  locales
```

Adapta esto al framework existente.

---

# 15. Metadata

Cada idioma debe tener metadata localizada.

Por ejemplo:

English:

```text
title
description
Open Graph
Twitter/X metadata
```

Spanish:

```text
title
description
Open Graph
Twitter/X metadata
```

No copies simplemente el metadata inglés en español.

Los textos deben estar correctamente traducidos.

---

# 16. Open Graph

Implementa correctamente:

```text
og:locale
og:url
og:title
og:description
```

y, cuando corresponda:

```text
og:locale:alternate
```

Por ejemplo:

```text
en_US
es_ES
```

o la variante adecuada al público objetivo.

No asumas `es_CL` solamente porque el proyecto fue creado desde Chile; CDAD es una comunidad internacional.

---

# 17. Navegación

La navegación debe estar completamente localizada.

Por ejemplo:

English:

```text
Home
Methodology
Documentation
Community
GitHub
```

Spanish:

```text
Inicio
Metodología
Documentación
Comunidad
GitHub
```

No debe quedar una mezcla accidental de idiomas.

---

# 18. Links internos

Todos los links internos deben respetar el idioma actual.

Ejemplo:

Desde:

```text
/es/
```

un link a metodología debe llevar a:

```text
/es/metodologia
```

no:

```text
/en/methodology
```

excepto cuando el usuario explícitamente cambie de idioma.

---

# 19. Contenido faltante

Debe existir una estrategia para contenido traducido aún no disponible.

NO quiero:

```text
/es/page
```

mostrando silenciosamente contenido inglés.

Preferiblemente:

- indicar que la traducción está pendiente; o
- no publicar la ruta hasta que exista contenido; o
- utilizar un mecanismo explícito del framework.

Prioriza evitar contenido duplicado o engañoso para SEO.

---

# 20. 404 y navegación

Crear/ajustar páginas 404 para ambos idiomas cuando el framework lo permita:

```text
/en/404
/es/404
```

o el mecanismo equivalente.

Los mensajes deben estar localizados.

---

# 21. Performance

La solución debe evitar:

- traducción runtime;
- JS innecesario;
- requests adicionales para obtener traducciones;
- dependencias innecesarias.

Prioriza contenido estático/pre-renderizado cuando sea compatible con el proyecto.

---

# 22. GitHub Pages

Revisa cuidadosamente el deployment actual.

La solución debe continuar funcionando correctamente con:

```text
GitHub Pages
```

si ese es el mecanismo actual.

Verifica:

- base path;
- rutas;
- assets;
- trailing slashes;
- links;
- sitemap;
- robots;
- páginas 404;
- navegación entre idiomas.

No rompas el pipeline actual.

---

# 23. Tests

Después de implementar:

1. ejecuta el build;
2. ejecuta lint;
3. ejecuta tests existentes;
4. agrega tests para el selector de idioma si corresponde;
5. verifica todas las rutas `/en`;
6. verifica todas las rutas `/es`;
7. verifica links internos;
8. verifica metadata;
9. verifica canonical;
10. verifica hreflang;
11. verifica sitemap;
12. verifica robots.

Si existe una herramienta para validar HTML/SEO, utilízala.

---

# 24. Validación manual

Genera una tabla final como:

| Check | Resultado |
|---|---|
| English homepage | PASS |
| Spanish homepage | PASS |
| English methodology | PASS |
| Spanish methodology | PASS |
| Language switcher | PASS |
| `<html lang>` | PASS |
| Canonical | PASS |
| hreflang EN | PASS |
| hreflang ES | PASS |
| x-default | PASS |
| Sitemap | PASS |
| Robots | PASS |
| Internal links | PASS |
| GitHub Pages build | PASS |

---

# 25. No hacer

NO:

- reemplazar el framework sin necesidad;
- crear dos sitios completamente independientes;
- duplicar componentes;
- utilizar traducción automática runtime;
- utilizar parámetros `?lang=en`;
- utilizar subdominios salvo que exista una razón técnica fuerte;
- duplicar lógica de idioma por toda la aplicación;
- romper las URLs existentes sin evaluar redirects;
- eliminar contenido existente;
- cambiar branding de CDAD sin autorización;
- inventar contenido conceptual de CDAD;
- modificar la metodología de CDAD durante esta tarea.

---

# 26. Compatibilidad con URLs existentes

Antes de cambiar cualquier URL existente:

1. identifica las URLs actuales;
2. determina cuáles están publicadas/indexadas;
3. conserva las URLs cuando sea razonable;
4. si es necesario cambiar una URL, implementa redirect permanente apropiado;
5. documenta cada cambio.

No quiero pérdida innecesaria de SEO.

---

# 27. Documentación técnica

Al finalizar, actualiza la documentación del proyecto con una sección que explique:

```text
Internationalization (i18n)
```

Debe explicar:

- idiomas soportados;
- idioma fuente;
- estructura de contenido;
- cómo agregar un nuevo idioma;
- cómo funciona el Language Switcher;
- estrategia SEO;
- hreflang;
- sitemap;
- reglas de traducción;
- glosario;
- workflow recomendado para traducciones.

Incluye un ejemplo:

```text
How to add Portuguese:

1. Add locale `pt`
2. Create Portuguese content
3. Add translated navigation
4. Add metadata
5. Add hreflang
6. Validate build
```

---

# 28. Resultado esperado

Quiero una implementación de calidad de producción.

No quiero una solución experimental ni un parche rápido.

La arquitectura final debe transmitir:

> CDAD Community is an international open methodology project.

Debe sentirse como un proyecto open-source serio y profesional.

---

# 29. Entrega final

Al terminar, responde con:

## A. Architecture

Explica brevemente la arquitectura implementada.

## B. Files changed

Lista todos los archivos creados/modificados.

## C. Routes

Lista las principales rutas:

```text
/en/
/es/
/en/methodology
/es/metodologia
...
```

## D. SEO

Explica cómo quedaron:

- canonical;
- hreflang;
- sitemap;
- robots;
- metadata.

## E. i18n

Explica cómo agregar un tercer idioma.

## F. Validation

Muestra los comandos ejecutados y resultados.

## G. Risks / follow-up

Indica cualquier problema que no hayas podido resolver y cualquier recomendación futura.

## H. Important

Antes de finalizar, verifica que:

```text
npm run build
```

o el comando equivalente del proyecto termine correctamente.

No declares la tarea terminada si el build está fallando.