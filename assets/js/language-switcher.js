// Language Switcher
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
        const path = window.location.pathname;
        const currentLang = this.getLanguageFromPath();

        // Map of URL paths between languages
        const pathMap = {
            'en': {
                '/': '/en/',
                '/about': '/about',
                '/problem': '/problem',
                '/approach': '/approach',
                '/ecosystem': '/ecosystem',
                '/methodology': '/methodology',
                '/cdad-2-1': '/cdad-2-1',
                '/cdad-v3': '/cdad-v3',
                '/faq': '/faq'
            },
            'es': {
                '/': '/es/',
                '/acerca': '/acerca',
                '/problema': '/problema',
                '/enfoque': '/enfoque',
                '/ecosistema': '/ecosistema',
                '/metodologia': '/metodologia',
                '/cdad-2-1': '/cdad-2-1',
                '/cdad-v3': '/cdad-v3',
                '/preguntas-frecuentes': '/preguntas-frecuentes'
            }
        };

        // Remove current language prefix
        let cleanPath = path.replace(/^\/(en|es)/, '');
        if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

        // Build new path with new language
        if (lang === 'en') {
            return '/' + lang + cleanPath;
        } else {
            return '/' + lang + cleanPath;
        }
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
