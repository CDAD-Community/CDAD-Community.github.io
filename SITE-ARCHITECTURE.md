# CDAD Website Architecture

This document describes the technical architecture of the CDAD Community website.

## Overview

The CDAD website is a **static HTML site** with **professional multilingual support** for English and Spanish. The architecture is designed for:

- Clean, semantic URLs
- Proper SEO (canonical URLs, hreflang tags, metadata)
- Easy addition of future languages
- GitHub Pages compatibility
- Accessibility and performance

## Directory Structure

```
/
├── index.html                         # Root: language detection & redirect
├── en/
│   ├── index.html                     # English homepage
│   ├── about.html                     # Additional pages
│   └── ...
├── es/
│   ├── index.html                     # Spanish homepage
│   ├── acerca.html                    # Additional pages
│   └── ...
├── assets/
│   ├── css/
│   │   └── main.css                   # Shared CSS
│   ├── js/
│   │   ├── config.js                  # Site configuration
│   │   ├── language-switcher.js       # Language switching
│   │   └── helpers.js                 # Helper functions
│   └── images/
│       └── cdad.png                   # CDAD logo
├── sitemap.xml                        # SEO sitemap
├── robots.txt                         # Search engine instructions
└── llms.txt                           # LLM-readable info (bilingual)
```

## URL Structure

### Root

- `/` - Detects browser language and redirects to `/en/` or `/es/`

### English

```
/en/                           # Homepage
/en/about                      # About CDAD
/en/problem                    # The Problem
/en/approach                   # The CDAD Approach
/en/ecosystem                  # Ecosystem
/en/methodology                # Methodology
/en/cdad-2-1                   # CDAD 2.1
/en/cdad-v3                    # CDAD v3 (proposed)
/en/faq                        # FAQ
```

### Spanish

```
/es/                           # Inicio
/es/acerca                     # Acerca de CDAD
/es/problema                   # El Problema
/es/enfoque                    # El Enfoque
/es/ecosistema                 # Ecosistema
/es/metodologia                # Metodología
/es/cdad-2-1                   # CDAD 2.1
/es/cdad-v3                    # CDAD v3 (propuesto)
/es/preguntas-frecuentes       # Preguntas Frecuentes
```

## SEO Configuration

### Canonical URLs

Each page declares its canonical URL in the `<head>`:

**English:**
```html
<link rel="canonical" href="https://mgriott.github.io/cdad-site/en/">
```

**Spanish:**
```html
<link rel="canonical" href="https://mgriott.github.io/cdad-site/es/">
```

### Language Attributes

Each page declares its language:

```html
<html lang="en">     <!-- English pages -->
<html lang="es">     <!-- Spanish pages -->
```

### hreflang Tags

Each page links to its alternate language version:

```html
<link rel="alternate" hreflang="en" href="https://mgriott.github.io/cdad-site/en/...">
<link rel="alternate" hreflang="es" href="https://mgriott.github.io/cdad-site/es/...">
<link rel="alternate" hreflang="x-default" href="https://mgriott.github.io/cdad-site/en/...">
```

### Open Graph & Twitter Metadata

Each page includes localized Open Graph and Twitter metadata with:

- `og:locale` (en_US / es_ES)
- `og:locale:alternate`
- `og:url` (canonical URL)
- `og:title`, `og:description`, `og:image`
- Twitter card metadata

### Sitemap

`sitemap.xml` includes URLs for all language versions with hreflang annotations:

```xml
<xhtml:link rel="alternate" hreflang="es" href="..."/>
<xhtml:link rel="alternate" hreflang="x-default" href="..."/>
```

## Language Switcher

### How It Works

The language switcher (`assets/js/language-switcher.js`):

1. Detects current language from URL path
2. Reads user preference from localStorage
3. Falls back to browser language preference
4. Defaults to English

### User Experience

- Dropdown menu in navigation bar
- Shows current language (EN / ES)
- Switching preserves the current page (navigates to equivalent URL)
- Selection saved to localStorage

### Implementation

```javascript
// Language detection order
1. URL path (/en/ or /es/)
2. localStorage (cdad-lang)
3. Browser Accept-Language header
4. Default to English
```

## Component Sharing

### CSS

All pages use a single shared CSS file:

```
assets/css/main.css
```

Includes:
- Navigation styles
- Hero section
- Cards and grids
- Language switcher styles
- Responsive design
- Dark theme variables

### JavaScript

**config.js**
- Site configuration (domain, pages, navigation)
- Localized metadata for each page
- Navigation labels for each language
- Page titles and descriptions

**language-switcher.js**
- Language detection
- User preference management
- URL navigation

**helpers.js**
- Helper functions for page generation
- HTML component generation

## Supported Locales

Currently supported:

| Code | Language | Locale | Direction |
|------|----------|--------|-----------|
| `en` | English | en_US | LTR |
| `es` | Español | es_ES | LTR |

### Adding a New Language

To add Portuguese (pt):

1. **Add to config:**
   ```javascript
   // assets/js/config.js
   languages: {
       pt: {
           name: 'Português',
           code: 'pt',
           direction: 'ltr',
           locale: 'pt_BR'
       }
   }
   ```

2. **Add navigation:**
   ```javascript
   navigation: {
       pt: [
           { label: 'Início', href: '/pt/' },
           // ... more links
       ]
   }
   ```

3. **Add pages:**
   ```
   /pt/index.html
   /pt/about.html
   /pt/...
   ```

4. **Create content:**
   - Translate all page content to Portuguese
   - Maintain terminology consistency

5. **Update metadata:**
   - Add Portuguese page config to `pages: { pt: {...} }`
   - Update sitemap.xml with Portuguese URLs

6. **Test:**
   - Verify all links work
   - Test language switcher
   - Check metadata and hreflang tags

## Content Strategy

### Terminology

CDAD terminology is kept in English for consistency:

- **Context-Driven AI Development** (not translated)
- **Context Protection Pattern (CPP)** (not translated)
- **Spec-Driven Development (SDD)** (not translated)

Explanatory text is translated, but official terms remain in English with translations in parentheses when needed.

### Translation Management

Translations are:
- **Versionable** - stored in Git as HTML files
- **Reviewable** - changes tracked in Git history
- **Not automated** - human translations only
- **Consistent** - terminology preserved across pages

### Content Sources

Page content is derived from:

1. **CDAD.md** - Official specification
2. **CDADCommunity.md** - Community guidelines
3. **README.md** - Conceptual material
4. **Existing website** - Preserved content

## Metadata Management

### Page Titles

Follow pattern:
- **English:** `[Page] — CDAD`
- **Spanish:** `[Página] — CDAD`

Example:
- `About CDAD — Context-Driven AI Development`
- `Acerca de CDAD`

### Meta Descriptions

- Concise (~160 chars)
- Language-specific
- SEO-optimized
- Not auto-translated

### JSON-LD Structured Data

Each page includes `schema.org` TechArticle markup with:
- headline
- description
- author
- url
- keywords
- language (for Spanish pages)

## Performance

### Assets

- **CSS:** Single shared file (main.css)
- **JavaScript:** Minimal, modular
- **Images:** Optimized PNG format
- **Caching:** Leverages GitHub Pages defaults

### Build Process

- No build step required
- HTML is served directly from GitHub Pages
- CSS/JS inlined in HTML when minimal

## Deployment

### GitHub Pages

The site is hosted on GitHub Pages:

```
Repository: github.com/mgriott/cdad-site
URL: https://mgriott.github.io/cdad-site/
Branch: main (or gh-pages)
```

### Future Migration

When moving to CDAD-Community:

```
Repository: github.com/CDAD-Community/cdad-site
```

Update in:
- Config files (if any)
- Navigation links
- GitHub links
- Repository references

## Testing Checklist

- [ ] Root redirects based on browser language
- [ ] English pages load at `/en/...`
- [ ] Spanish pages load at `/es/...`
- [ ] Language switcher toggles correctly
- [ ] Canonical URLs are correct
- [ ] hreflang tags are present and correct
- [ ] Open Graph metadata is localized
- [ ] Sitemap contains all URLs
- [ ] robots.txt allows indexing
- [ ] Internal links preserve language
- [ ] GitHub Pages build succeeds
- [ ] No 404 errors in pages

## Future Enhancements

Potential improvements:

1. **Additional languages:** Portuguese, French, German
2. **Documentation pages:** Installation, guides, tutorials
3. **API reference:** Structured format for tool integrations
4. **Search functionality:** Client-side or external search
5. **Blog/News:** Updates on CDAD evolution
6. **Community section:** Contributions, examples, testimonials

---

For issues or contributions, see: https://github.com/CDAD-Community/cdad-site
