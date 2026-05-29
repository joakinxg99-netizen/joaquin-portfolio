"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from "react";

type Lang = "pt" | "es" | "en";

const spotifyUrl =
  "https://open.spotify.com/intl-es/artist/25JUXI8MfGUhSKUdAatSzt";
const instagramUrl = "https://instagram.com/joa.brv";
const projectUrl = "https://dravictoriagomez.com.br";
const eduardoProjectUrl = "https://www.eduardolealpsicologia.com.br/";
const projectInquiryContent = {
  en: {
    subject: "Project Inquiry",
    body: `Hi Joaquín,

I’m interested in building a premium website for my business/brand.

Name:
Business:
Project goals:
Timeline:`,
  },
  pt: {
    subject: "Novo Projeto",
    body: `Olá Joaquín,

Tenho interesse em criar um website premium para meu negócio/marca.

Nome:
Negócio:
Objetivos do projeto:
Prazo:`,
  },
  es: {
    subject: "Nuevo Proyecto",
    body: `Hola Joaquín,

Estoy interesado en crear un sitio web premium para mi negocio/marca.

Nombre:
Negocio:
Objetivos del proyecto:
Plazo:`,
  },
};

const content = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Música", "Contato"],
    heroEyebrow: "Desenvolvedor Criativo • Experiências Digitais Premium",
    heroSubtitle: "Websites premium para profissionais e marcas pessoais",
    heroDescription:
      "Experiências digitais criadas para elevar sua presença online e atrair mais clientes.",
    projectsButton: "Ver projetos",
    instagramButton: "Instagram",
    aboutTitle: "Sobre mim",
    aboutText: [
      "Oi, eu sou Joaquín.",
      "Crio experiências digitais premium para profissionais, marcas pessoais e negócios que precisam de uma presença online clara, elegante e orientada a resultados.",
    ],
    servicesTitle: "O que eu faço",
    whyTitle: "Por que trabalhar comigo",
    whyCards: [
      {
        title: "Design estratégico",
        text: "Websites criados para comunicar confiança e profissionalismo.",
      },
      {
        title: "Experiência premium",
        text: "Experiências modernas, adaptadas para celulares e com identidade visual forte.",
      },
      {
        title: "Direção criativa",
        text: "Experiências digitais com precisão artística e técnica.",
      },
    ],
    services: [
      {
        title: "Websites premium",
        text: "Websites modernos criados para construir confiança e atrair clientes.",
      },
      {
        title: "Presença de marca pessoal",
        text: "Experiências digitais claras e elegantes para profissionais e criadores.",
      },
      {
        title: "Experiência responsiva",
        text: "Websites rápidos e polidos, otimizados para todos os dispositivos.",
      },
    ],
    projectsTitle: "Projetos",
    projectTitle: "Sites para Psicologia Clínica",
    projectDescription:
      "Presença digital premium para psicologia clínica, com marca elegante, navegação intuitiva e experiência clara.",
    projectPreviewTitle: "Victoria Gómez",
    projectPreviewDescription:
      "Website profissional com marca elegante, experiência clara e navegação orientada à confiança.",
    projectTags: ["Adaptado para celulares", "SEO", "Navegação intuitiva", "Marca profissional"],
    eduardoProjectTitle: "Sites para Psicologia Clínica",
    eduardoProjectDescription:
      "Website profissional para psicologia, focado em clareza, confiança, presença premium e experiência fácil.",
    eduardoProjectPreviewTitle: "Eduardo Leal Psicologia",
    eduardoProjectPreviewDescription:
      "Presença digital profissional para psicologia, com navegação clara, visual premium e foco em credibilidade.",
    eduardoProjectTags: ["Adaptado para celulares", "Experiência clara", "SEO", "Marca profissional"],
    caseGoalLabel: "Objetivo",
    caseFocusLabel: "Foco",
    projectGoal:
      "Criar uma presença online moderna e confiável para uma clínica de psicologia.",
    projectFocus: "Clareza, experiência adaptada para celulares e marca premium.",
    eduardoProjectGoal:
      "Construir uma presença online profissional focada em confiança e acessibilidade.",
    eduardoProjectFocus:
      "Design elegante, clareza e experiência adaptada para celulares.",
    projectButton: "Ver projeto",
    featuredProject: "Projeto em destaque",
    comingSoon: "Em breve",
    moreProjectsComingSoon: "Mais trabalhos selecionados em breve.",
    musicTitle: "Identidade sonora",
    musicText:
      "Projeto artístico paralelo, explorando identidade sonora, atmosfera e direção criativa.",
    featuredTrack: "Identidade artística",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artista",
    trackArtist: "JØA BRAV",
    musicTags: ["Identidade sonora", "Atmosfera cinematográfica", "Projeto artístico"],
    trackMood:
      "Uma peça sonora que conecta atmosfera, ritmo e identidade editorial.",
    listenOnSpotify: "Ouvir no Spotify",
    fullSpotifyProfile: "Ver perfil completo no Spotify",
    testimonialsTitle: "Feedback selecionado",
    testimonials: [
      {
        quote:
          "Trabalhar com Joaquín elevou completamente minha presença online. O website ficou moderno, claro e altamente profissional.",
        author: "Victoria Gómez",
      },
      {
        quote:
          "Toda a experiência foi cuidadosa e premium do início ao fim. O resultado final comunica confiança e profissionalismo perfeitamente.",
        author: "Eduardo Leal",
      },
    ],
    finalCtaTitle: "Vamos construir sua presença online.",
    finalCtaText:
      "Experiências digitais claras, modernas e premium criadas para comunicar profissionalismo e confiança.",
    startProject: "Iniciar projeto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    contactTitle: "Contato",
    contactText:
      "Quer criar uma presença digital premium para sua marca ou serviço profissional? Entre em contato.",
    footer: "© 2026 Joaquín G. Bravo. Todos os direitos reservados.",
  },
  es: {
    nav: ["Inicio", "Sobre mí", "Proyectos", "Música", "Contacto"],
    heroEyebrow: "Desarrollador Creativo • Experiencias Digitales Premium",
    heroSubtitle: "Sitios web premium para profesionales y marcas personales",
    heroDescription:
      "Experiencias digitales creadas para elevar tu presencia online y atraer más clientes.",
    projectsButton: "Ver proyectos",
    instagramButton: "Instagram",
    aboutTitle: "Sobre mí",
    aboutText: [
      "Hola, soy Joaquín.",
      "Creo experiencias digitales premium para profesionales, marcas personales y negocios que necesitan una presencia online clara, elegante y orientada a resultados.",
    ],
    servicesTitle: "Qué hago",
    whyTitle: "Por qué trabajar conmigo",
    whyCards: [
      {
        title: "Diseño estratégico",
        text: "Sitios creados para comunicar confianza y profesionalismo.",
      },
      {
        title: "Experiencia premium",
        text: "Experiencias modernas, adaptadas para celulares y con fuerte identidad visual.",
      },
      {
        title: "Dirección creativa",
        text: "Experiencias digitales con precisión artística y técnica.",
      },
    ],
    services: [
      {
        title: "Sitios web premium",
        text: "Sitios modernos diseñados para construir confianza y atraer clientes.",
      },
      {
        title: "Presencia de marca personal",
        text: "Experiencias digitales claras y elegantes para profesionales y creadores.",
      },
      {
        title: "Experiencia responsiva",
        text: "Sitios rápidos y pulidos, optimizados para todos los dispositivos.",
      },
    ],
    projectsTitle: "Proyectos",
    projectTitle: "Sitios para Psicología Clínica",
    projectDescription:
      "Presencia digital premium para psicología clínica, con marca elegante, navegación intuitiva y experiencia clara.",
    projectPreviewTitle: "Victoria Gómez",
    projectPreviewDescription:
      "Sitio profesional con marca elegante, experiencia clara y navegación orientada a la confianza.",
    projectTags: ["Adaptado a celulares", "SEO", "Navegación intuitiva", "Marca profesional"],
    eduardoProjectTitle: "Sitios para Psicología Clínica",
    eduardoProjectDescription:
      "Sitio profesional para psicología, enfocado en claridad, confianza, presencia premium y experiencia fácil.",
    eduardoProjectPreviewTitle: "Eduardo Leal Psicologia",
    eduardoProjectPreviewDescription:
      "Presencia digital profesional para psicología, con navegación clara, visual premium y foco en credibilidad.",
    eduardoProjectTags: ["Adaptado a celulares", "Experiencia clara", "SEO", "Marca profesional"],
    caseGoalLabel: "Objetivo",
    caseFocusLabel: "Enfoque",
    projectGoal:
      "Crear una presencia online moderna y confiable para una clínica de psicología.",
    projectFocus: "Claridad, experiencia adaptada a celulares y marca premium.",
    eduardoProjectGoal:
      "Construir una presencia online profesional enfocada en confianza y accesibilidad.",
    eduardoProjectFocus:
      "Diseño elegante, claridad y experiencia adaptada a celulares.",
    projectButton: "Ver proyecto",
    featuredProject: "Proyecto destacado",
    comingSoon: "Próximamente",
    moreProjectsComingSoon: "Más trabajos seleccionados próximamente.",
    musicTitle: "Identidad sonora",
    musicText:
      "Proyecto artístico paralelo, explorando identidad sonora, atmósfera y dirección creativa.",
    featuredTrack: "Identidad artística",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artista",
    trackArtist: "JØA BRAV",
    musicTags: ["Identidad sonora", "Atmósfera cinematográfica", "Proyecto artístico"],
    trackMood:
      "Una pieza sonora que conecta atmósfera, ritmo e identidad editorial.",
    listenOnSpotify: "Escuchar en Spotify",
    fullSpotifyProfile: "Ver perfil completo en Spotify",
    testimonialsTitle: "Comentarios seleccionados",
    testimonials: [
      {
        quote:
          "Trabajar con Joaquín elevó completamente mi presencia online. El sitio se siente moderno, claro y altamente profesional.",
        author: "Victoria Gómez",
      },
      {
        quote:
          "Toda la experiencia se sintió cuidada y premium de principio a fin. El resultado final comunica confianza y profesionalismo perfectamente.",
        author: "Eduardo Leal",
      },
    ],
    finalCtaTitle: "Construyamos tu presencia online.",
    finalCtaText:
      "Experiencias digitales claras, modernas y premium diseñadas para comunicar profesionalismo y confianza.",
    startProject: "Iniciar proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    contactTitle: "Contacto",
    contactText:
      "¿Querés crear una presencia digital premium para tu marca o servicio profesional? Entrá en contacto.",
    footer: "© 2026 Joaquín G. Bravo. Todos los derechos reservados.",
  },
  en: {
    nav: ["Home", "About", "Projects", "Music", "Contact"],
    heroEyebrow: "Creative Developer • Premium Digital Experiences",
    heroSubtitle: "Premium websites for professionals and personal brands",
    heroDescription:
      "Digital experiences designed to elevate your online presence and attract more clients.",
    projectsButton: "View projects",
    instagramButton: "Instagram",
    aboutTitle: "About me",
    aboutText: [
      "Hi, I’m Joaquín.",
      "I build premium digital experiences for professionals, personal brands and businesses that need a clear, elegant and results-driven online presence.",
    ],
    servicesTitle: "What I do",
    whyTitle: "Why work with me",
    whyCards: [
      {
        title: "Strategic Design",
        text: "Websites built to communicate trust and professionalism.",
      },
      {
        title: "Premium Experience",
        text: "Modern mobile-friendly experiences with strong visual identity.",
      },
      {
        title: "Creative Direction",
        text: "Digital experiences with artistic and technical precision.",
      },
    ],
    services: [
      {
        title: "Premium Websites",
        text: "Modern websites designed to build trust and attract clients.",
      },
      {
        title: "Personal Brand Presence",
        text: "Clear and elegant digital experiences for professionals and creators.",
      },
      {
        title: "Responsive Experience",
        text: "Fast and polished websites optimized for every device.",
      },
    ],
    projectsTitle: "Projects",
    projectTitle: "Clinical Psychology Websites",
    projectDescription:
      "Premium digital presence for clinical psychology, with elegant branding, intuitive navigation and a clear experience.",
    projectPreviewTitle: "Victoria Gómez",
    projectPreviewDescription:
      "Professional website with elegant branding, clear experience and trust-focused navigation.",
    projectTags: ["Mobile-friendly", "SEO", "Intuitive navigation", "Professional brand"],
    eduardoProjectTitle: "Clinical Psychology Websites",
    eduardoProjectDescription:
      "Professional psychology website focused on clarity, trust, premium presence and an easy experience.",
    eduardoProjectPreviewTitle: "Eduardo Leal Psicologia",
    eduardoProjectPreviewDescription:
      "Professional digital presence for psychology, with clear navigation, premium visuals and credibility-focused structure.",
    eduardoProjectTags: ["Mobile-friendly", "Clear experience", "SEO", "Professional brand"],
    caseGoalLabel: "Goal",
    caseFocusLabel: "Focus",
    projectGoal:
      "Create a modern and trustworthy online presence for a clinical psychology practice.",
    projectFocus: "Clarity, responsive experience and premium branding.",
    eduardoProjectGoal:
      "Build a professional online presence focused on trust and accessibility.",
    eduardoProjectFocus: "Elegant design, clarity and responsive experience.",
    projectButton: "View project",
    featuredProject: "Featured Project",
    comingSoon: "Coming soon",
    moreProjectsComingSoon: "More selected work coming soon.",
    musicTitle: "Sound Identity",
    musicText:
      "A secondary artistic project, exploring sound identity, atmosphere and creative direction.",
    featuredTrack: "Artistic Identity",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artist",
    trackArtist: "JØA BRAV",
    musicTags: ["Sound Identity", "Cinematic Atmosphere", "Artistic Project"],
    trackMood:
      "A sonic piece connecting atmosphere, rhythm and editorial identity.",
    listenOnSpotify: "Listen on Spotify",
    fullSpotifyProfile: "View full Spotify profile",
    testimonialsTitle: "Selected feedback",
    testimonials: [
      {
        quote:
          "Working with Joaquín completely elevated my online presence. The website feels modern, clear and highly professional.",
        author: "Victoria Gómez",
      },
      {
        quote:
          "The entire experience felt thoughtful and premium from start to finish. The final result communicates trust and professionalism perfectly.",
        author: "Eduardo Leal",
      },
    ],
    finalCtaTitle: "Let’s build your online presence.",
    finalCtaText:
      "Clear, modern and premium digital experiences designed to communicate professionalism and trust.",
    startProject: "Start a Project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactTitle: "Contact",
    contactText:
      "Want to create a premium digital presence for your brand or professional service? Get in touch.",
    footer: "© 2026 Joaquín G. Bravo. All rights reserved.",
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const navItems = [
    { label: t.nav[0], href: "#home" },
    { label: t.nav[1], href: "#about" },
    { label: t.nav[2], href: "#projects" },
    { label: t.nav[3], href: "#music" },
    { label: t.nav[4], href: "#contact" },
  ];

  const projectCards = [
    {
      url: projectUrl,
      domain: "dravictoriagomez.com.br",
      title: t.projectTitle,
      description: t.projectDescription,
      previewTitle: t.projectPreviewTitle,
      previewDescription: t.projectPreviewDescription,
      imageSrc: "/victoria-preview.jpg",
      tags: t.projectTags,
      caseStudy: {
        goal: t.projectGoal,
        focus: t.projectFocus,
      },
    },
    {
      url: eduardoProjectUrl,
      domain: "eduardolealpsicologia.com.br",
      title: t.eduardoProjectTitle,
      description: t.eduardoProjectDescription,
      previewTitle: t.eduardoProjectPreviewTitle,
      previewDescription: t.eduardoProjectPreviewDescription,
      imageSrc: "/eduardo-preview.jpg",
      tags: t.eduardoProjectTags,
      caseStudy: {
        goal: t.eduardoProjectGoal,
        focus: t.eduardoProjectFocus,
      },
    },
  ];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () =>
      motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const sectionIds = ["home", "about", "projects", "music", "contact"];
      const current =
        [...sectionIds].reverse().find((id) => {
          const section = document.getElementById(id);

          return section
            ? section.getBoundingClientRect().top <= window.innerHeight * 0.35
            : false;
        }) ?? "home";

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      setHasScrolled(window.scrollY > 24);
      setActiveSection(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        setMouse({ x: x * 100, y: y * 100 });
        setParallax({ x: (x - 0.5) * 18, y: (y - 0.5) * 18 });
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [prefersReducedMotion]);

  const handleSpotlightMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || window.innerWidth < 1024) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <main className="min-h-dvh overflow-x-clip scroll-smooth bg-[#0B0B0C] text-stone-100 antialiased">
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.985);
          transition:
            opacity 760ms ease,
            transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--reveal-delay);
          will-change: opacity, transform;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .cinematic-line {
          opacity: 0;
          transform: translateY(18px);
          animation: cinematicLineIn 820ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--line-delay);
        }

        .spotlight-card::before {
          content: "";
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          background: radial-gradient(
            420px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
            rgba(255, 255, 255, 0.105),
            rgba(107, 226, 255, 0.055) 34%,
            transparent 68%
          );
          transition: opacity 420ms ease;
        }

        .spotlight-card:hover::before {
          opacity: 1;
        }

        .spotlight-card > * {
          position: relative;
          z-index: 1;
        }

        @keyframes cinematicLineIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes networkDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(14px, -10px, 0);
          }
        }

        @keyframes codeFloat {
          0%, 100% {
            opacity: 0.22;
            transform: translateY(0);
          }

          50% {
            opacity: 0.38;
            transform: translateY(-8px);
          }
        }

        @keyframes glowDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(22px, -16px, 0) scale(1.04);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -10px, 0);
          }
        }

        @keyframes waveformPulse {
          0%, 100% {
            transform: scaleY(0.36);
            opacity: 0.45;
          }

          50% {
            transform: scaleY(1);
            opacity: 0.95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible,
          .cinematic-line,
          * {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 1ms !important;
          }
        }
      `}</style>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(109,94,247,0.22),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(107,226,255,0.16),transparent_28%),radial-gradient(circle_at_48%_92%,rgba(255,180,87,0.09),transparent_34%),linear-gradient(180deg,#0B0B0C_0%,#141416_46%,#0B0B0C_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.04)_38%,transparent_58%)] opacity-70 [animation:glowDrift_14s_ease-in-out_infinite]" />
      <div
        className="pointer-events-none fixed inset-0 z-0 hidden opacity-45 mix-blend-screen transition-opacity duration-500 lg:block"
        style={{
          background: `radial-gradient(560px circle at ${mouse.x}% ${mouse.y}%, rgba(107, 226, 255, 0.095), rgba(109, 94, 247, 0.045) 34%, transparent 70%)`,
        }}
      />
      <div className="fixed inset-x-0 top-0 z-[60] h-px bg-white/10">
        <div
          className="h-full origin-left bg-gradient-to-r from-white via-[#6BE2FF] to-[#FFB457] shadow-[0_0_18px_rgba(107,226,255,0.48)] transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ${
          hasScrolled
            ? "border-white/15 bg-[#0B0B0C]/82 shadow-[0_1px_44px_rgba(11,11,12,0.42)]"
            : "border-white/10 bg-[#0B0B0C]/62 shadow-[0_1px_40px_rgba(11,11,12,0.28)]"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-5 transition-all duration-500 sm:px-6 ${
            hasScrolled ? "py-3" : "py-4"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center text-sm font-semibold text-white transition hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
              <Image
                src="/logo.png"
                alt="Joaquín G. Bravo"
                width={162}
                height={108}
                priority
                className="h-[3.65rem] w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.16)] sm:h-[4.1rem] lg:h-[4.9rem]"
              />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <nav className="flex gap-x-5 text-sm text-stone-300">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-md px-1 py-1 transition duration-300 hover:-translate-y-0.5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25 ${
                      activeSection === item.href.slice(1)
                        ? "text-white shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                        : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                    className={`absolute -bottom-1 left-1/2 h-px rounded-full bg-gradient-to-r from-[#6BE2FF] via-white to-[#FFB457] transition-all duration-500 ${
                        activeSection === item.href.slice(1)
                          ? "w-full -translate-x-1/2 opacity-100"
                          : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-60"
                      }`}
                    />
                  </a>
                ))}
              </nav>

              <div className="flex w-fit items-center rounded-lg border border-white/10 bg-white/5 p-1 shadow-inner shadow-white/5 backdrop-blur">
                {(["pt", "en", "es"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLang(item)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 active:scale-95 ${
                      lang === item
                        ? "bg-white text-stone-950 shadow-lg shadow-white/10"
                        : "text-stone-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex w-fit items-center rounded-lg border border-white/10 bg-white/5 p-1 shadow-inner shadow-white/5 backdrop-blur">
                {(["pt", "en", "es"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLang(item);
                      setIsMenuOpen(false);
                    }}
                    className={`rounded-md px-2.5 py-1.5 text-[0.68rem] font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 active:scale-95 ${
                      lang === item
                        ? "bg-white text-stone-950 shadow-lg shadow-white/10"
                        : "text-stone-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
                aria-expanded={isMenuOpen}
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 active:scale-95"
              >
                <span className="sr-only">{isMenuOpen ? t.closeMenu : t.openMenu}</span>
                <span className="relative h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 h-px w-4 rounded-full bg-white transition duration-300 ${
                      isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[6px] h-px w-4 rounded-full bg-white transition duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-px w-4 rounded-full bg-white transition duration-300 ${
                      isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            className={`grid transition-all duration-500 lg:hidden ${
              isMenuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <nav className="mt-4 rounded-2xl border border-white/10 bg-[#141416]/92 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm transition duration-300 hover:bg-white/[0.04] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25 ${
                    activeSection === item.href.slice(1)
                      ? "text-white shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                        : "text-stone-300"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                      className={`h-px rounded-full bg-gradient-to-r from-[#6BE2FF] via-white to-[#FFB457] transition-all duration-500 ${
                      activeSection === item.href.slice(1)
                          ? "w-10 opacity-100"
                          : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-60"
                    }`}
                  />
                </a>
              ))}
            </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative z-10 mx-auto grid max-w-6xl scroll-mt-24 gap-9 px-5 pb-14 pt-11 sm:px-6 sm:pb-20 sm:pt-16 md:scroll-mt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-4 -z-10 h-[34rem] overflow-hidden rounded-[3rem] border border-white/[0.03] bg-[radial-gradient(circle_at_20%_18%,rgba(107,226,255,0.13),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(109,94,247,0.16),transparent_32%),radial-gradient(circle_at_52%_82%,rgba(255,180,87,0.07),transparent_30%)] opacity-80 blur-0 lg:top-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block"
        >
          <div
            className="absolute right-[-4rem] top-6 h-[34rem] w-[44rem] opacity-45"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${parallax.x * -0.25}px, ${parallax.y * -0.25}px, 0)`,
            }}
          >
            <div className="absolute inset-0 [animation:networkDrift_14s_ease-in-out_infinite]">
              <svg
                viewBox="0 0 720 520"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M85 120L210 78L346 168L506 98L642 152" stroke="url(#networkLineA)" strokeWidth="1" />
                <path d="M130 365L256 278L410 320L602 250" stroke="url(#networkLineB)" strokeWidth="1" />
                <path d="M210 78L256 278L346 168L410 320L506 98" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M85 120L130 365L256 278" stroke="rgba(107,226,255,0.12)" strokeWidth="1" />
                {[
                  [85, 120],
                  [210, 78],
                  [346, 168],
                  [506, 98],
                  [642, 152],
                  [130, 365],
                  [256, 278],
                  [410, 320],
                  [602, 250],
                ].map(([cx, cy], index) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r={index % 3 === 0 ? "4" : "3"}
                    fill="rgba(255,255,255,0.55)"
                  />
                ))}
                <defs>
                  <linearGradient id="networkLineA" x1="85" x2="642" y1="120" y2="152">
                    <stop stopColor="rgba(107,226,255,0.05)" />
                    <stop offset="0.52" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="1" stopColor="rgba(255,180,87,0.08)" />
                  </linearGradient>
                  <linearGradient id="networkLineB" x1="130" x2="602" y1="365" y2="250">
                    <stop stopColor="rgba(99,102,241,0.08)" />
                    <stop offset="0.5" stopColor="rgba(107,226,255,0.2)" />
                    <stop offset="1" stopColor="rgba(255,255,255,0.08)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute left-12 top-16 space-y-3 font-mono text-[0.68rem] leading-none text-white/20 [animation:codeFloat_9s_ease-in-out_infinite]">
              <p>{"const craft = design + code;"}</p>
              <p>{"render(<Portfolio rhythm=\"dark\" />);"}</p>
              <p>{"deploy({ speed: 'fast', feeling: 'premium' });"}</p>
            </div>
            <div className="absolute bottom-24 right-12 space-y-3 font-mono text-[0.68rem] leading-none text-cyan-100/18 [animation:codeFloat_11s_ease-in-out_infinite]">
              <p>{"interface Presence { web: true; music: true }"}</p>
              <p>{"mix.visuals(signal, atmosphere);"}</p>
            </div>
            <div className="absolute left-28 bottom-20 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[0.7rem] text-stone-300/70 shadow-2xl shadow-black/30 backdrop-blur-2xl [animation:floatSoft_7s_ease-in-out_infinite]">
              <p className="text-cyan-100/70">{"<Experience />"}</p>
              <p className="mt-2 text-white/35">{"latency: 0.2s"}</p>
            </div>
            <div className="absolute right-0 top-48 rounded-xl border border-white/10 bg-[#0B0B0C]/55 px-4 py-3 font-mono text-[0.7rem] text-stone-300/70 shadow-2xl shadow-black/30 backdrop-blur-2xl [animation:floatSoft_8s_ease-in-out_infinite]">
              <p className="text-[#FFB457]/70">{"sound.design()"}</p>
              <p className="mt-2 text-white/35">{"motion: subtle"}</p>
            </div>
          </div>
        </div>
        <Reveal>
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-300 shadow-lg shadow-black/20 backdrop-blur sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
            {t.heroEyebrow}
          </p>
          <h1
            className="cinematic-line max-w-4xl bg-[linear-gradient(180deg,#ffffff_0%,#eee8df_58%,#a99f92_100%)] bg-clip-text text-[3rem] font-semibold leading-[0.98] text-transparent sm:text-7xl"
            style={{ "--line-delay": "160ms" } as CSSProperties}
          >
            Joaquín G. Bravo
          </h1>
          <p
            className="cinematic-line mt-3 text-lg font-medium text-stone-200 sm:mt-4 sm:text-2xl"
            style={{ "--line-delay": "280ms" } as CSSProperties}
          >
            {t.heroSubtitle}
          </p>
          <p
            className="cinematic-line mt-4 max-w-2xl text-[0.98rem] leading-7 text-stone-300 sm:mt-5 sm:text-lg sm:leading-8"
            style={{ "--line-delay": "400ms" } as CSSProperties}
          >
            {t.heroDescription}
          </p>

          <div
            className="cinematic-line mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3"
            style={{ "--line-delay": "520ms" } as CSSProperties}
          >
            <a
              href="#projects"
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.98]"
            >
              {t.projectsButton}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-medium text-stone-300 transition duration-300 hover:-translate-y-1 hover:border-[#FFB457]/30 hover:bg-white/[0.03] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB457]/35 active:scale-[0.98]"
            >
              {t.instagramButton}
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120} className="group relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md">
          <div className="pointer-events-none absolute -left-8 top-10 z-20 hidden rounded-xl border border-white/10 bg-[#141416]/75 px-4 py-3 font-mono text-[0.68rem] text-cyan-100/75 shadow-2xl shadow-black/30 backdrop-blur-2xl [animation:floatSoft_7.5s_ease-in-out_infinite] lg:block">
            {"npm run build"}
          </div>
          <div className="pointer-events-none absolute -right-8 bottom-20 z-20 hidden rounded-xl border border-white/10 bg-[#141416]/75 px-4 py-3 text-xs text-stone-300/85 shadow-2xl shadow-black/30 backdrop-blur-2xl [animation:floatSoft_8.5s_ease-in-out_infinite] lg:block">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(94,234,212,0.8)]" />
            Premium UI
          </div>
          <div
            className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_35%_15%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(107,226,255,0.2),transparent_36%),radial-gradient(circle_at_18%_88%,rgba(109,94,247,0.22),transparent_34%)] opacity-70 blur-2xl transition duration-700 group-hover:opacity-100"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${parallax.x * -0.45}px, ${parallax.y * -0.45}px, 0)`,
            }}
          />
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-2 group-hover:border-white/25"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${parallax.x * 0.35}px, ${parallax.y * 0.35}px, 0)`,
            }}
          >
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#141416]">
              <div className="relative aspect-[4/5] min-h-[330px] overflow-hidden sm:min-h-[480px]">
                <Image
                  src="/joaquin.jpg"
                  alt="Joaquín G. Bravo"
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 480px"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                  preload
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0)_52%,rgba(11,11,12,0.16)_100%)]" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="about" className="relative z-10 scroll-mt-24 border-y border-white/10 bg-white/[0.018] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/50">
                Editorial
              </p>
              <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                {t.aboutTitle}
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_12%_15%,rgba(107,226,255,0.11),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(255,180,87,0.07),transparent_36%)] blur-2xl" />
            <Reveal className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="space-y-6 text-lg leading-9 text-stone-300 sm:text-xl sm:leading-10">
            {t.aboutText.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? "text-2xl font-medium leading-10 text-white sm:text-3xl sm:leading-[1.35]" : ""}
                >
                  {paragraph}
                </p>
            ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:scroll-mt-28">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.servicesTitle}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3 sm:mt-10">
          {t.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 110}>
              <article
                onMouseMove={handleSpotlightMove}
                className="spotlight-card group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025)_52%,rgba(107,226,255,0.03))] p-6 shadow-xl shadow-black/25 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-white/[0.065] hover:shadow-[0_28px_80px_rgba(107,226,255,0.12)] sm:p-7"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#6BE2FF] via-white to-[#FFB457] transition duration-500 group-hover:scale-x-100 sm:inset-x-7" />
                <div className="mb-8 flex items-center justify-between sm:mb-10">
                  <span className="flex h-10 min-w-10 items-center justify-center whitespace-nowrap rounded-lg border border-white/10 bg-[#0B0B0C]/55 px-2 text-[0.8125rem] font-medium leading-none text-stone-300 shadow-inner shadow-white/5 transition duration-300 group-hover:border-cyan-200/30 group-hover:text-cyan-100 group-hover:shadow-[0_0_26px_rgba(107,226,255,0.12)] sm:text-sm">
                    0{index + 1}
                  </span>
                  <span className="h-px w-16 origin-right scale-x-50 bg-gradient-to-r from-transparent via-white/25 to-[#6BE2FF]/60 transition duration-500 group-hover:scale-x-100" />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-5 leading-7 text-stone-300">{service.text}</p>
                <div className="mt-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-stone-400 transition duration-300 group-hover:text-cyan-100/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition duration-300 group-hover:bg-[#6BE2FF] group-hover:shadow-[0_0_18px_rgba(107,226,255,0.6)]" />
                  <span>Joaquín G. Bravo</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">
              {t.whyTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.whyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 90}>
                <article
                  onMouseMove={handleSpotlightMove}
                  className="spotlight-card group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.022))] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_20px_58px_rgba(107,226,255,0.1)]"
                >
                  <h3 className="text-lg font-medium text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-300">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 scroll-mt-24 border-y border-white/10 bg-white/[0.018] md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">
              {t.projectsTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:gap-10">
            {projectCards.map((project, index) => (
              <Reveal key={project.url} delay={120 + index * 100}>
                <article
                  onMouseMove={handleSpotlightMove}
                  className="spotlight-card group relative grid items-center gap-8 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-4 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 hover:border-cyan-200/30 hover:shadow-[0_20px_58px_rgba(107,226,255,0.11)] sm:p-6 lg:grid-cols-2 lg:gap-12"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/10 bg-[#0B0B0C]/45 p-2 shadow-inner shadow-white/5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 sm:p-3"
                    aria-label={project.previewTitle}
                  >
                    <div className="overflow-hidden rounded-xl border border-white/14 bg-[#141416]/95 shadow-2xl shadow-black/40">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.045] px-3 py-2 md:gap-3 md:px-4 md:py-3">
                        <div className="flex gap-1 md:gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-300/75 md:h-2.5 md:w-2.5" />
                          <span className="h-2 w-2 rounded-full bg-yellow-200/75 md:h-2.5 md:w-2.5" />
                          <span className="h-2 w-2 rounded-full bg-cyan-200/75 md:h-2.5 md:w-2.5" />
                        </div>
                        <div className="min-w-0 flex-1 truncate rounded-md border border-white/10 bg-[#0B0B0C]/55 px-2 py-1 text-center text-[0.65rem] text-stone-300 shadow-inner shadow-black/20 md:px-3 md:py-1.5 md:text-xs">
                          {project.domain}
                        </div>
                      </div>

                      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_24%_16%,rgba(107,226,255,0.18),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(255,180,87,0.1),transparent_32%),linear-gradient(135deg,#141416,#0B0B0C)] p-2.5 sm:p-3 md:p-4">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/14 bg-[#0B0B0C]/60 shadow-2xl shadow-black/35 sm:rounded-xl md:rounded-2xl">
                          <Image
                            src={project.imageSrc}
                            alt={project.previewTitle}
                            fill
                            sizes="(min-width: 1024px) 520px, (min-width: 640px) 90vw, 100vw"
                            className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%,rgba(11,11,12,0.08)_100%)]" />
                        </div>
                      </div>
                    </div>
                  </a>

                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-stone-400">
                      {t.featuredProject}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-7 text-stone-300 sm:mt-5 sm:leading-8">
                      {project.description}
                    </p>
                    <div className="mt-5 grid gap-3 border-l border-white/10 pl-4 text-sm sm:grid-cols-2 sm:border-l-0 sm:pl-0">
                      <div className="rounded-lg border border-white/10 bg-[#141416]/70 p-3">
                        <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                          {t.caseGoalLabel}
                        </p>
                        <p className="mt-2 leading-6 text-stone-300">
                          {project.caseStudy.goal}
                        </p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-[#141416]/70 p-3">
                        <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                          {t.caseFocusLabel}
                        </p>
                        <p className="mt-2 leading-6 text-stone-300">
                          {project.caseStudy.focus}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.018] px-3 py-1.5 text-xs font-medium text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex w-full justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:bg-stone-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97] sm:mt-8 sm:w-fit"
                    >
                      {t.projectButton}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                {t.testimonialsTitle}
              </h2>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-white/15 via-[#FFB457]/20 to-transparent sm:block" />
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 100}>
                <article
                  onMouseMove={handleSpotlightMove}
                  className="spotlight-card group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-xl shadow-black/20 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#FFB457]/25 hover:shadow-[0_22px_70px_rgba(255,180,87,0.08)] sm:p-6"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB457]/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <p className="text-lg leading-8 text-stone-200">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-5 text-sm font-medium text-stone-400">
                    — {testimonial.author}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="music" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:scroll-mt-28">
        <div className="pointer-events-none absolute inset-x-5 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
          <div className="relative">
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              {[20, 34, 24, 42, 28, 52, 36, 24].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-1 rounded-full bg-gradient-to-t from-[#6BE2FF]/25 via-white/45 to-[#FFB457]/25"
                  style={{
                    height,
                    animation: prefersReducedMotion
                      ? undefined
                      : `waveformPulse ${2.1 + (index % 3) * 0.28}s ease-in-out ${index * 120}ms infinite`,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">
              {t.musicTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              {t.musicText}
            </p>

            <div
              onMouseMove={handleSpotlightMove}
              className="spotlight-card relative mt-7 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.025))] p-4 shadow-2xl shadow-black/20 backdrop-blur sm:mt-8 sm:p-5"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-100/60">
                    {t.featuredTrack}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    {t.featuredTrackTitle}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-stone-400">
                    {t.trackArtistLabel}:{" "}
                    <span className="text-stone-300">{t.trackArtist}</span>
                  </p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:mb-3" />
              </div>
              <p className="mt-5 text-sm leading-7 text-stone-300">
                {t.trackMood}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.musicTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#0B0B0C]/45 px-3 py-1.5 text-xs font-medium text-stone-300 shadow-inner shadow-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(107,226,255,0.17),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(255,180,87,0.1),transparent_38%)] opacity-75 blur-2xl transition duration-700 hover:opacity-100" />
            <div className="absolute -right-4 top-10 hidden h-48 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
            <div className="mb-4 hidden items-center justify-end gap-1.5 pr-2 opacity-75 md:flex" aria-hidden="true">
              {[18, 30, 46, 26, 56, 34, 42, 24, 50, 32, 22, 38].map(
                (height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1 rounded-full bg-gradient-to-t from-[#6BE2FF]/35 via-white/55 to-[#FFB457]/35 shadow-[0_0_14px_rgba(107,226,255,0.16)]"
                    style={{
                      height,
                      animation: prefersReducedMotion
                        ? undefined
                        : `waveformPulse ${1.8 + (index % 4) * 0.22}s ease-in-out ${index * 90}ms infinite`,
                      transformOrigin: "bottom",
                    }}
                  />
                ),
              )}
            </div>
            <div
              onMouseMove={handleSpotlightMove}
              className="spotlight-card group relative hidden overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] p-3 shadow-2xl shadow-black/35 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-[0_24px_80px_rgba(107,226,255,0.11)] md:block"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <iframe
                title="Spotify track player - Into Space"
                src="https://open.spotify.com/embed/track/134WSBaVh7ePxkY4j3c83B?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] p-2 shadow-2xl shadow-black/30 backdrop-blur md:hidden">
              <iframe
                title="Compact Spotify track player - Into Space"
                src="https://open.spotify.com/embed/track/134WSBaVh7ePxkY4j3c83B?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block rounded-lg"
              />
            </div>
            <a
              href="https://open.spotify.com/intl-es/track/134WSBaVh7ePxkY4j3c83B?si=97afc819229c46ec"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97] md:hidden"
            >
              {t.listenOnSpotify} ↗
            </a>
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/10 hover:shadow-[0_14px_34px_rgba(107,226,255,0.11)] focus:outline-none focus:ring-2 focus:ring-cyan-200/40 active:scale-[0.98] sm:w-fit"
            >
              {t.fullSpotifyProfile} ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-24 border-t border-white/10 bg-white/[0.018] md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 sm:py-20">
          <div className="pointer-events-none absolute inset-x-6 bottom-24 -z-10 h-48 bg-[radial-gradient(circle_at_50%_50%,rgba(255,180,87,0.09),transparent_62%)] blur-2xl" />
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-4xl">
              {t.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">
              {t.finalCtaText}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:joakinxg100@gmail.com?subject=${encodeURIComponent(
                projectInquiryContent[lang].subject,
              )}&body=${encodeURIComponent(projectInquiryContent[lang].body)}`}
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97]"
            >
              {t.startProject}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#FFB457]/30 hover:bg-white/10 hover:shadow-[#FFB457]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB457]/35 active:scale-[0.98]"
            >
              Instagram
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-6 text-center text-sm text-stone-400 sm:py-8">
        {t.footer}
      </footer>
    </main>
  );
}
