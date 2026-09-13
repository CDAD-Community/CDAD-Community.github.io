// HTML Generation Helpers

function getLanguageFromPath() {
    const path = window.location.pathname;
    if (path.includes('/en/') || path === '/en') return 'en';
    if (path.includes('/es/') || path === '/es') return 'es';
    return 'en';
}

function getCurrentPageKey() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p && p !== 'cdad-site');
    return parts.length > 1 ? parts[1] : 'home';
}

function generateMetaTags(lang) {
    const pageKey = getCurrentPageKey();
    const pageConfig = SITE_CONFIG.pages[lang]?.[pageKey];

    if (!pageConfig) return '';

    const langConfig = SITE_CONFIG.languages[lang];
    const ogLocale = langConfig.locale;

    return `
    <meta name="description" content="${pageConfig.description}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="${SITE_CONFIG.author}">
    <link rel="canonical" href="${SITE_CONFIG.domain}${pageConfig.canonical}">

    <meta property="og:title" content="${pageConfig.title}">
    <meta property="og:description" content="${pageConfig.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${SITE_CONFIG.domain}${pageConfig.canonical}">
    <meta property="og:image" content="${SITE_CONFIG.domain}${pageConfig.ogImage}">
    <meta property="og:locale" content="${ogLocale}">
    ${lang === 'en' ? '<meta property="og:locale:alternate" content="es_ES">' : ''}
    ${lang === 'es' ? '<meta property="og:locale:alternate" content="en_US">' : ''}

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageConfig.title}">
    <meta name="twitter:description" content="${pageConfig.description}">
    <meta name="twitter:image" content="${SITE_CONFIG.domain}${pageConfig.ogImage}">

    <link rel="alternate" hreflang="en" href="${SITE_CONFIG.domain}${getAlternateUrl('en')}">
    <link rel="alternate" hreflang="es" href="${SITE_CONFIG.domain}${getAlternateUrl('es')}">
    <link rel="alternate" hreflang="x-default" href="${SITE_CONFIG.domain}${getAlternateUrl('en')}">
    `;
}

function getAlternateUrl(lang) {
    const pageKey = getCurrentPageKey();
    const pageConfig = SITE_CONFIG.pages[lang]?.[pageKey];
    return pageConfig?.canonical || '/cdad-site/en/';
}

function generateNavigation(lang) {
    const navItems = SITE_CONFIG.navigation[lang];
    return navItems.map(item => `<a href="${item.href}">${item.label}</a>`).join('\n            ');
}

function generateHeader(lang) {
    const otherLang = lang === 'en' ? 'es' : 'en';
    const otherLangName = SITE_CONFIG.languages[otherLang].name;

    return `<nav>
    <div class="nav-container">
        <a href="/${lang}/" class="nav-logo">
            <span>CDAD</span>
        </a>

        <div class="nav-links">
            ${generateNavigation(lang)}
            <a href="https://github.com/CDAD-Community/cdad-bootstrap"
               class="nav-github" target="_blank" rel="noopener">
                GitHub
            </a>
        </div>
    </div>
</nav>`;
}

function generateFooter() {
    return `<footer>
    <p>CDAD — Context-Driven AI Development</p>
    <p>Open Source • AI-Assisted Software Development • SDD • Context Engineering • AI Coding Agents</p>
</footer>`;
}

function generateLanguageScript(lang) {
    return `<script src="/cdad-site/assets/js/config.js"></script>
<script src="/cdad-site/assets/js/language-switcher.js"></script>`;
}

// Export for use in pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getLanguageFromPath,
        getCurrentPageKey,
        generateMetaTags,
        getAlternateUrl,
        generateNavigation,
        generateHeader,
        generateFooter,
        generateLanguageScript
    };
}
