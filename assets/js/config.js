// Site Configuration
const SITE_CONFIG = {
    domain: 'https://mgriott.github.io/cdad-site',
    baseUrl: '/cdad-site',
    author: 'Moisés Griott',

    languages: {
        en: {
            name: 'English',
            code: 'en',
            direction: 'ltr',
            locale: 'en_US'
        },
        es: {
            name: 'Español',
            code: 'es',
            direction: 'ltr',
            locale: 'es_ES'
        }
    },

    navigation: {
        en: [
            { label: 'Home', href: '/en/' },
            { label: 'About', href: '/en/about' },
            { label: 'Problem', href: '/en/problem' },
            { label: 'Approach', href: '/en/approach' },
            { label: 'Ecosystem', href: '/en/ecosystem' },
            { label: 'Methodology', href: '/en/methodology' },
            { label: 'CDAD 2.1', href: '/en/cdad-2-1' },
            { label: 'Quick User Manual', href: '/en/quick-user-manual.html' },
            { label: 'CDAD v3', href: '/en/cdad-v3' },
            { label: 'FAQ', href: '/en/faq' }
        ],
        es: [
            { label: 'Inicio', href: '/es/' },
            { label: 'Acerca', href: '/es/acerca' },
            { label: 'Problema', href: '/es/problema' },
            { label: 'Enfoque', href: '/es/enfoque' },
            { label: 'Ecosistema', href: '/es/ecosistema' },
            { label: 'Metodología', href: '/es/metodologia' },
            { label: 'CDAD 2.1', href: '/es/cdad-2-1' },
            { label: 'Manual de Usuario', href: '/es/manual-usuario-rapido.html' },
            { label: 'CDAD v3', href: '/es/cdad-v3' },
            { label: 'Preguntas Frecuentes', href: '/es/preguntas-frecuentes' }
        ]
    },

    pages: {
        en: {
            home: {
                title: 'CDAD — Context-Driven AI Development',
                description: 'A governance approach for AI-assisted software development that combines specifications, governed context, rules, architecture and protection patterns for AI coding agents.',
                canonical: '/cdad-site/en/',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            about: {
                title: 'About CDAD — Context-Driven AI Development',
                description: 'Learn what CDAD is, its core principles, and how it addresses the challenges of AI-assisted software development.',
                canonical: '/cdad-site/en/about',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            problem: {
                title: 'The Problem — CDAD',
                description: 'Understand the challenges AI agents face: context loss, architectural drift, uncontrolled changes, and inconsistent decisions.',
                canonical: '/cdad-site/en/problem',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            approach: {
                title: 'The CDAD Approach',
                description: 'Discover how CDAD addresses AI-assisted development through governed context, architecture, and protection patterns.',
                canonical: '/cdad-site/en/approach',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            ecosystem: {
                title: 'CDAD and the Development Ecosystem',
                description: 'Explore how CDAD relates to SDD, Context Engineering, AI agents, and modern software development practices.',
                canonical: '/cdad-site/en/ecosystem',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            methodology: {
                title: 'CDAD Methodology',
                description: 'Deep dive into CDAD concepts: governance layers, freeze, change requests, ADRs, and architectural intent.',
                canonical: '/cdad-site/en/methodology',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            'cdad-2-1': {
                title: 'CDAD 2.1 — Current Reference Implementation',
                description: 'Explore the current CDAD 2.1 implementation with workspace structure, governed context, and integration examples.',
                canonical: '/cdad-site/en/cdad-2-1',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            'cdad-v3': {
                title: 'CDAD v3 — Proposed Evolution',
                description: 'Discover the proposed CDAD v3 features: Evidence Boundary, Grounding, Provenance, and advanced governance.',
                canonical: '/cdad-site/en/cdad-v3',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            faq: {
                title: 'CDAD FAQ — Frequently Asked Questions',
                description: 'Common questions about CDAD, its relationship to SDD, RAG, agents, and how to get started.',
                canonical: '/cdad-site/en/faq',
                ogImage: '/cdad-site/assets/images/cdad.png'
            }
        },
        es: {
            home: {
                title: 'CDAD — Context-Driven AI Development',
                description: 'Un enfoque de gobernanza para desarrollo de software asistido por IA que combina especificaciones, contexto gobernado, reglas, arquitectura y patrones de protección.',
                canonical: '/cdad-site/es/',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            acerca: {
                title: 'Acerca de CDAD',
                description: 'Aprende qué es CDAD, sus principios fundamentales y cómo aborda los desafíos del desarrollo de software asistido por IA.',
                canonical: '/cdad-site/es/acerca',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            problema: {
                title: 'El Problema — CDAD',
                description: 'Comprende los desafíos que enfrentan los agentes de IA: pérdida de contexto, desviación arquitectónica, cambios incontrolados y decisiones inconsistentes.',
                canonical: '/cdad-site/es/problema',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            enfoque: {
                title: 'El Enfoque CDAD',
                description: 'Descubre cómo CDAD aborda el desarrollo asistido por IA a través de contexto gobernado, arquitectura y patrones de protección.',
                canonical: '/cdad-site/es/enfoque',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            ecosistema: {
                title: 'CDAD y el Ecosistema de Desarrollo',
                description: 'Explora cómo CDAD se relaciona con SDD, Context Engineering, agentes de IA y prácticas modernas de desarrollo de software.',
                canonical: '/cdad-site/es/ecosistema',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            metodologia: {
                title: 'Metodología CDAD',
                description: 'Profundiza en los conceptos de CDAD: capas de gobernanza, freeze, solicitudes de cambio, ADRs e intención arquitectónica.',
                canonical: '/cdad-site/es/metodologia',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            'cdad-2-1': {
                title: 'CDAD 2.1 — Implementación de Referencia Actual',
                description: 'Explora la implementación actual de CDAD 2.1 con estructura de workspace, contexto gobernado y ejemplos de integración.',
                canonical: '/cdad-site/es/cdad-2-1',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            'cdad-v3': {
                title: 'CDAD v3 — Evolución Propuesta',
                description: 'Descubre las características propuestas de CDAD v3: Evidence Boundary, Grounding, Provenance y gobernanza avanzada.',
                canonical: '/cdad-site/es/cdad-v3',
                ogImage: '/cdad-site/assets/images/cdad.png'
            },
            'preguntas-frecuentes': {
                title: 'CDAD Preguntas Frecuentes',
                description: 'Preguntas comunes sobre CDAD, su relación con SDD, RAG, agentes y cómo empezar.',
                canonical: '/cdad-site/es/preguntas-frecuentes',
                ogImage: '/cdad-site/assets/images/cdad.png'
            }
        }
    }
};
