// Language Switcher v2
class LanguageSwitcher {
    supportedLangs = ['en', 'es'];

    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Get language from URL path
        const pathLang = this.getLanguageFromPath();
        if (pathLang) return pathLang;

        // Get from localStorage
        const saved = localStorage.getItem('cdad-lang');
        if (saved && this.supportedLangs.includes(saved)) return saved;

        // Get from browser
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLangs.includes(browserLang)) return browserLang;

        // Default to English
        return 'en';
    }

    getLanguageFromPath() {
        const path = window.location.pathname;
        for (const lang of this.supportedLangs) {
            if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
                return lang;
            }
        }
        return null;
    }

    init() {
        this.createButton();
        this.attachListeners();
    }

    createButton() {
        const nav = document.querySelector('.nav-links');
        if (!nav) return;

        const langButton = document.createElement('div');
        langButton.className = 'language-switcher';
        langButton.innerHTML = `
            <button class="language-switcher-button" aria-label="Select language">
                ${this.currentLang.toUpperCase()}
                <span>▾</span>
            </button>
            <div class="language-switcher-dropdown">
                <div class="language-switcher-option ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
                    English
                </div>
                <div class="language-switcher-option ${this.currentLang === 'es' ? 'active' : ''}" data-lang="es">
                    Español
                </div>
            </div>
        `;

        nav.insertBefore(langButton, nav.querySelector('.nav-github'));
    }

    attachListeners() {
        const button = document.querySelector('.language-switcher-button');
        const dropdown = document.querySelector('.language-switcher-dropdown');
        const options = document.querySelectorAll('.language-switcher-option');

        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }

        options.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.switchLanguage(lang);
            });
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    }

    switchLanguage(lang) {
        localStorage.setItem('cdad-lang', lang);
        const newPath = this.getTranslatedPath(lang);
        window.location.href = newPath;
    }

    getTranslatedPath(lang) {
        const currentLang = this.getLanguageFromPath();
        const path = window.location.pathname;
        const cleanPath = path.replace(/^\/(en|es)(?:\/)?/, '');
        const translations = {
            'about.html': { en: 'about.html', es: 'acerca.html' },
            'problem.html': { en: 'problem.html', es: 'problema.html' },
            'approach.html': { en: 'approach.html', es: 'enfoque.html' },
            'ecosystem.html': { en: 'ecosistema.html', es: 'ecosistema.html' },
            'methodology.html': { en: 'methodology.html', es: 'metodologia.html' },
            'cdad-2-1.html': { en: 'cdad-2-1.html', es: 'cdad-2-1.html' },
            'cdad-v3.html': { en: 'cdad-v3.html', es: 'cdad-v3.html' },
            'faq.html': { en: 'faq.html', es: 'preguntas-frecuentes.html' },
            'quick-user-manual.html': { en: 'quick-user-manual.html', es: 'manual-usuario-rapido.html' },
            'manual-usuario-rapido.html': { en: 'quick-user-manual.html', es: 'manual-usuario-rapido.html' }
        };
        const translatedPath = translations[cleanPath]?.[lang] || '';
        return translatedPath ? `/${lang}/${translatedPath}` : `/${lang}/`;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}
