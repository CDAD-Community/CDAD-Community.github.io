# Internationalization (i18n) Guide

This guide explains how to manage multilingual content on the CDAD website and how to add new languages.

## Current Setup

### Supported Languages

| Language | Code | Locale | Status |
|----------|------|--------|--------|
| English | `en` | en_US | ✅ Primary |
| Spanish | `es` | es_ES | ✅ Official Translation |

### Language as Source of Truth

**English is the canonical/source language.**

All other languages are official translations of the English content. This means:

- English pages are created first
- Spanish pages are translated from English
- Future languages follow the same pattern

### Content Location

Content is stored as version-controlled HTML files:

```
/en/index.html       → English homepage
/es/index.html       → Spanish homepage
/en/problem.html     → English: The Problem
/es/problema.html    → Spanish: El Problema
```

## Translation Workflow

### Step-by-Step Process

#### 1. Create English Content

Create the page in English first:

```
/en/[page-name].html
```

Example: `/en/methodology.html`

Requirements:
- Complete HTML structure
- All metadata (title, description, OG tags, hreflang)
- Canonical URL pointing to English version
- Language attribute: `<html lang="en">`

#### 2. Register in Configuration

Add the page to `assets/js/config.js`:

```javascript
navigation: {
    en: [
        // ... existing links
        { label: 'Methodology', href: '/en/methodology' }
    ]
},

pages: {
    en: {
        methodology: {
            title: 'CDAD Methodology',
            description: 'Deep dive into CDAD concepts...',
            canonical: '/en/methodology',
            ogImage: '/assets/images/cdad.png'
        }
    }
}
```

#### 3. Translate to Spanish

Create the Spanish version:

```
/es/[page-name-es].html
```

Example: `/es/metodologia.html`

Requirements:
- Translate all content to Spanish
- Keep CDAD terminology in English (with Spanish explanation if needed)
- Use natural Spanish URL slug (methodology → metodologia)
- Update all metadata
- Translate navigation labels and UI text

#### 4. Add Spanish Metadata

Add to `assets/js/config.js`:

```javascript
navigation: {
    es: [
        // ... existing links
        { label: 'Metodología', href: '/es/metodologia' }
    ]
},

pages: {
    es: {
        metodologia: {
            title: 'Metodología CDAD',
            description: 'Profundiza en los conceptos de CDAD...',
            canonical: '/es/metodologia',
            ogImage: '/assets/images/cdad.png'
        }
    }
}
```

#### 5. Update Sitemap

Add URLs to `sitemap.xml`:

```xml
<url>
    <loc>https://cdad-community.github.io/en/methodology</loc>
    <lastmod>2026-09-13</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="https://cdad-community.github.io/es/metodologia"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://cdad-community.github.io/en/methodology"/>
</url>

<url>
    <loc>https://cdad-community.github.io/es/metodologia</loc>
    <lastmod>2026-09-13</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="https://cdad-community.github.io/en/methodology"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://cdad-community.github.io/en/methodology"/>
</url>
```

#### 6. Test

Verify:
- [ ] Page loads at correct URL
- [ ] Metadata is correct
- [ ] hreflang tags link to correct alternate
- [ ] Canonical URL is set properly
- [ ] Language attribute is correct
- [ ] Navigation works
- [ ] Language switcher navigates to page

### Checklist for Each New Page

Before publishing a new page:

**English page:**
- [ ] HTML structure complete
- [ ] All content written
- [ ] Meta tags present and accurate
- [ ] Canonical URL set
- [ ] hreflang tags present
- [ ] Navigation updated (config.js)
- [ ] Page metadata added to config.js
- [ ] Links to other pages work
- [ ] Logo/images use correct paths

**Spanish translation:**
- [ ] Content fully translated
- [ ] CDAD terminology consistent with glossary
- [ ] Meta tags translated
- [ ] Navigation labels translated
- [ ] Canonical URL updated
- [ ] hreflang tags point to English equivalent
- [ ] All links use Spanish URLs
- [ ] Page metadata added to config.js
- [ ] sitemap.xml updated with both URLs

## Adding a New Language

### Example: Adding Portuguese

#### 1. Create Directory

```bash
mkdir pt
```

#### 2. Update Configuration

`assets/js/config.js`:

```javascript
languages: {
    en: { ... },
    es: { ... },
    pt: {
        name: 'Português',
        code: 'pt',
        direction: 'ltr',
        locale: 'pt_BR'
    }
},

navigation: {
    en: [ ... ],
    es: [ ... ],
    pt: [
        { label: 'Início', href: '/pt/' },
        { label: 'Sobre', href: '/pt/sobre' },
        // ... complete navigation
    ]
},

pages: {
    en: { ... },
    es: { ... },
    pt: {
        home: {
            title: 'CDAD — Context-Driven AI Development',
            description: 'Descrição em português...',
            canonical: '/pt/',
            ogImage: '/assets/images/cdad.png'
        },
        sobre: {
            title: 'Sobre CDAD',
            description: '...',
            canonical: '/pt/sobre',
            ogImage: '/assets/images/cdad.png'
        }
        // ... rest of pages
    }
}
```

#### 3. Create HTML Pages

Create `/pt/index.html` and other pages, translating from English versions.

#### 4. Update Language Switcher

`assets/js/language-switcher.js` automatically supports new languages added to config.

#### 5. Update Sitemap

Add Portuguese URLs with hreflang tags:

```xml
<url>
    <loc>https://cdad-community.github.io/pt/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="..."/>
    <xhtml:link rel="alternate" hreflang="es" href="..."/>
    <xhtml:link rel="alternate" hreflang="x-default" href="..."/>
</url>
```

#### 6. Update llms.txt

Add Portuguese section to `llms.txt` for AI discoverability.

#### 7. Test

- [ ] All Portuguese pages load
- [ ] Language switcher includes Portuguese
- [ ] Navigation works
- [ ] hreflang tags are correct
- [ ] Sitemap includes Portuguese URLs
- [ ] GitHub Pages build succeeds

## Terminology Glossary

### CDAD Terms (Preserved in English)

These terms should appear the same in all languages:

| Term | Definition |
|------|-----------|
| Context-Driven AI Development | The methodology name |
| Context Protection Pattern (CPP) | Core CDAD pattern |
| Spec-Driven Development (SDD) | Related methodology |
| Context Engineering | Related discipline |
| Governed Context | Key concept |
| Architectural Intent | Key concept |
| Architectural Drift | Problem being solved |
| AI Coding Agent | Tool type |
| CDAD Bootstrap | Reference implementation |
| CDAD 2.1 | Current version |
| CDAD v3 | Proposed version |

### Spanish Translations

| English | Spanish |
|---------|---------|
| What is CDAD? | ¿Qué es CDAD? |
| The Problem | El Problema |
| The Approach | El Enfoque |
| Ecosystem | Ecosistema |
| Methodology | Metodología |
| FAQ | Preguntas Frecuentes |
| Contact | Contacto |
| Community | Comunidad |

### Portuguese Translations (Example)

| English | Portuguese |
|---------|-----------|
| What is CDAD? | O que é CDAD? |
| The Problem | O Problema |
| The Approach | A Abordagem |
| Ecosystem | Ecossistema |
| FAQ | Perguntas Frequentes |

## SEO Considerations

### Language-Specific SEO

Each language version should:

1. **Have unique meta descriptions** - Not machine translations
2. **Use native keywords** - Research keywords for each market
3. **Include language in metadata** - `og:locale`, `lang` attribute
4. **Declare hreflang relationships** - Help search engines understand relationships
5. **Use correct locale** - Use en_US/es_ES/pt_BR, not just language code

### Avoiding Duplicate Content

- Never serve the same HTML for multiple languages
- Use hreflang to indicate language relationships
- Each language gets separate canonical URL
- Don't use JavaScript to replace content (search engines may not execute)

### Crawlability

- All language versions should be in sitemap.xml
- All versions should be allowed in robots.txt
- Hreflang in HTML and sitemap.xml for consistency

## Common Issues

### Problem: Language Switcher Not Working

**Cause:** Language configuration not updated in `config.js`

**Solution:**
1. Check that new language is in `languages` object
2. Verify `navigation` has entry for the language
3. Verify `pages` has entry for the language
4. Clear browser localStorage and reload

### Problem: Translated Page Not Showing

**Cause:** URL path not matching config

**Solution:**
1. Verify page file exists at correct path
2. Check URL slug matches config (e.g., `metodologia` not `methodology`)
3. Verify hreflang tags point to correct URLs
4. Check sitemap includes the URL

### Problem: hreflang Tags Missing

**Cause:** Page not registered in config or manually edited

**Solution:**
1. Add page to `SITE_CONFIG.pages` in config.js
2. Include canonical and alternate URLs
3. Regenerate from template if manually edited

## Maintenance

### Regular Tasks

- **Monthly:** Check for broken links across all languages
- **Quarterly:** Update content if CDAD methodology changes
- **Yearly:** Review metadata for SEO improvements
- **As needed:** Add translations when new pages are created

### Version Control

All translations are tracked in Git:

```bash
git log --oneline es/

# Shows history of Spanish page changes
```

Use commit messages that indicate language:

```bash
git commit -m "es: Update methodology content"
git commit -m "en: Add new FAQ entries"
```

## Resources

- [MDN: i18n](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Google: Multilingual Sites](https://support.google.com/webmasters/answer/189077)
- [hreflang Guide](https://moz.com/learn/seo/hreflang)
- [Open Graph i18n](https://ogp.me/#optional)

## Questions?

For issues or questions about internationalization:

1. Check this guide
2. Review existing page structure
3. Open an issue on GitHub
4. Contact the CDAD Community

---

**Last updated:** 2026-09-13
