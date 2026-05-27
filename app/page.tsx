"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent, ReactNode } from "react";

type Lang = "pt" | "es" | "en";

const spotifyUrl =
  "https://open.spotify.com/intl-es/artist/25JUXI8MfGUhSKUdAatSzt";
const spotifyTrackUrl =
  "https://open.spotify.com/intl-es/track/134WSBaVh7ePxkY4j3c83B?si=05ba775bb97d4068";
const instagramUrl = "https://instagram.com/joa.brv";
const projectUrl = "https://dravictoriagomez.com";

const content = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Música", "Contato"],
    heroEyebrow: "Creative Developer • Techno",
    heroSubtitle: "Desenvolvedor Web • Produtor de Techno",
    heroDescription:
      "Crio experiências digitais modernas, rápidas e premium para marcas, profissionais e negócios. Também crio música eletrônica com uma identidade cinematográfica, hipnótica e orientada à pista.",
    projectsButton: "Ver projetos",
    spotifyButton: "Ouvir no Spotify",
    instagramButton: "Instagram",
    aboutTitle: "Sobre mim",
    aboutText: [
      "Olá, sou Joaquín G. Bravo, desenvolvedor web e produtor musical argentino vivendo no Brasil.",
      "Crio websites modernos, rápidos e profissionais para psicólogos, profissionais autônomos, marcas pessoais e negócios.",
      "Também crio música eletrônica com uma identidade cinematográfica, hipnótica e orientada à pista.",
    ],
    servicesTitle: "O que eu faço",
    services: [
      {
        title: "Websites profissionais",
        text: "Sites modernos, responsivos e otimizados para transmitir confiança e gerar presença digital.",
      },
      {
        title: "Portfólios e marcas pessoais",
        text: "Páginas elegantes para profissionais que querem apresentar seu trabalho com clareza e estilo.",
      },
      {
        title: "Música eletrônica",
        text: "Produção de techno com identidade cinematográfica, atmosfera profunda e energia hipnótica.",
      },
    ],
    projectsTitle: "Projetos",
    projectTitle: "Site para Psicologia Clínica",
    projectDescription:
      "Website profissional desenvolvido para atendimento psicológico, com design elegante, navegação moderna e experiência otimizada.",
    projectPreviewTitle: "Site para Psicologia Clínica",
    projectPreviewDescription:
      "Website profissional desenvolvido para atendimento psicológico, com design elegante, navegação moderna e experiência otimizada.",
    projectButton: "Ver projeto",
    featuredProject: "Projeto em destaque",
    comingSoon: "Em breve",
    moreProjectsComingSoon: "Mais trabalhos selecionados em breve.",
    musicTitle: "Música",
    musicText:
      "Além do desenvolvimento web, crio música eletrônica com uma identidade cinematográfica e hipnótica — unindo tensão melódica, atmosferas escuras e energia de pista.",
    featuredTrack: "Faixa em destaque",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artista",
    trackArtist: "JØA BRAV",
    musicTags: ["Produtor de Techno", "Identidade cinematográfica", "Energia hipnótica"],
    listenOnSpotify: "Ouvir no Spotify",
    fullSpotifyProfile: "Ver perfil completo no Spotify",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    contactTitle: "Contato",
    contactText:
      "Quer criar uma presença digital profissional ou conhecer meu trabalho musical? Entre em contato.",
    footer: "© 2026 Joaquín G. Bravo. Todos os direitos reservados.",
  },
  es: {
    nav: ["Inicio", "Sobre mí", "Proyectos", "Música", "Contacto"],
    heroEyebrow: "Creative Developer • Techno",
    heroSubtitle: "Desarrollador Web • Productor de Techno",
    heroDescription:
      "Creo experiencias digitales modernas, rápidas y premium para marcas, profesionales y negocios. También creo música electrónica con una identidad cinematográfica, hipnótica y orientada a la pista.",
    projectsButton: "Ver proyectos",
    spotifyButton: "Escuchar en Spotify",
    instagramButton: "Instagram",
    aboutTitle: "Sobre mí",
    aboutText: [
      "Hola, soy Joaquín G. Bravo, desarrollador web y productor musical argentino viviendo en Brasil.",
      "Creo sitios web modernos, rápidos y profesionales para psicólogos, profesionales independientes, marcas personales y negocios.",
      "También creo música electrónica con una identidad cinematográfica, hipnótica y orientada a la pista.",
    ],
    servicesTitle: "Qué hago",
    services: [
      {
        title: "Sitios web profesionales",
        text: "Sitios modernos, responsivos y optimizados para transmitir confianza y generar presencia digital.",
      },
      {
        title: "Portfolios y marcas personales",
        text: "Páginas elegantes para profesionales que quieren presentar su trabajo con claridad y estilo.",
      },
      {
        title: "Música electrónica",
        text: "Producción de techno con identidad cinematográfica, atmósfera profunda y energía hipnótica.",
      },
    ],
    projectsTitle: "Proyectos",
    projectTitle: "Sitio para Psicología Clínica",
    projectDescription:
      "Sitio web profesional desarrollado para atención psicológica, con diseño elegante, navegación moderna y experiencia optimizada.",
    projectPreviewTitle: "Sitio para Psicología Clínica",
    projectPreviewDescription:
      "Sitio web profesional desarrollado para atención psicológica, con diseño elegante, navegación moderna y experiencia optimizada.",
    projectButton: "Ver proyecto",
    featuredProject: "Proyecto destacado",
    comingSoon: "Próximamente",
    moreProjectsComingSoon: "Más trabajos seleccionados próximamente.",
    musicTitle: "Música",
    musicText:
      "Además del desarrollo web, creo música electrónica con una identidad cinematográfica e hipnótica — combinando tensión melódica, atmósferas oscuras y energía de pista.",
    featuredTrack: "Canción destacada",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artista",
    trackArtist: "JØA BRAV",
    musicTags: ["Productor de Techno", "Identidad cinematográfica", "Energía hipnótica"],
    listenOnSpotify: "Escuchar en Spotify",
    fullSpotifyProfile: "Ver perfil completo en Spotify",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    contactTitle: "Contacto",
    contactText:
      "¿Querés crear una presencia digital profesional o conocer mi trabajo musical? Entrá en contacto.",
    footer: "© 2026 Joaquín G. Bravo. Todos los derechos reservados.",
  },
  en: {
    nav: ["Home", "About", "Projects", "Music", "Contact"],
    heroEyebrow: "Creative Developer • Techno",
    heroSubtitle: "Web Developer • Techno Producer",
    heroDescription:
      "I create modern, fast and premium digital experiences for brands, professionals and businesses. I also create electronic music with a cinematic, hypnotic and club-driven identity.",
    projectsButton: "View projects",
    spotifyButton: "Listen on Spotify",
    instagramButton: "Instagram",
    aboutTitle: "About me",
    aboutText: [
      "Hi, I’m Joaquín G. Bravo, a web developer and music producer from Argentina living in Brazil.",
      "I create modern, fast and professional websites for psychologists, independent professionals, personal brands and businesses.",
      "I also create electronic music with a cinematic, hypnotic and club-driven identity.",
    ],
    servicesTitle: "What I do",
    services: [
      {
        title: "Professional websites",
        text: "Modern, responsive and optimized websites built to communicate trust and create digital presence.",
      },
      {
        title: "Portfolios and personal brands",
        text: "Elegant pages for professionals who want to present their work with clarity and style.",
      },
      {
        title: "Electronic music",
        text: "Techno production with cinematic identity, deep atmosphere and hypnotic energy.",
      },
    ],
    projectsTitle: "Projects",
    projectTitle: "Clinical Psychology Website",
    projectDescription:
      "Professional website developed for psychological care, with elegant design, modern navigation and optimized user experience.",
    projectPreviewTitle: "Clinical Psychology Website",
    projectPreviewDescription:
      "Professional website developed for psychological care, with elegant design, modern navigation and optimized user experience.",
    projectButton: "View project",
    featuredProject: "Featured Project",
    comingSoon: "Coming soon",
    moreProjectsComingSoon: "More selected work coming soon.",
    musicTitle: "Music",
    musicText:
      "Beyond web development, I create electronic music with a cinematic and hypnotic identity — blending melodic tension, dark atmospheres and dancefloor energy.",
    featuredTrack: "Featured Track",
    featuredTrackTitle: "Into Space",
    trackArtistLabel: "Artist",
    trackArtist: "JØA BRAV",
    musicTags: ["Techno Producer", "Cinematic Identity", "Hypnotic Energy"],
    listenOnSpotify: "Listen on Spotify",
    fullSpotifyProfile: "View full Spotify profile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactTitle: "Contact",
    contactText:
      "Want to create a professional digital presence or explore my music work? Get in touch.",
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
  const [lang, setLang] = useState<Lang>("en");
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
    <main className="min-h-screen overflow-x-hidden scroll-smooth bg-[#07080b] text-zinc-100 antialiased">
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
            rgba(255, 255, 255, 0.12),
            rgba(45, 212, 191, 0.055) 34%,
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
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(79,70,229,0.24),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(20,184,166,0.14),transparent_28%),radial-gradient(circle_at_48%_92%,rgba(244,114,182,0.1),transparent_34%),linear-gradient(180deg,#07080b_0%,#101116_46%,#07080b_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.04)_38%,transparent_58%)] opacity-70 [animation:pulse_8s_ease-in-out_infinite]" />
      <div
        className="pointer-events-none fixed inset-0 z-0 hidden opacity-45 mix-blend-screen transition-opacity duration-500 lg:block"
        style={{
          background: `radial-gradient(560px circle at ${mouse.x}% ${mouse.y}%, rgba(45, 212, 191, 0.105), rgba(99, 102, 241, 0.045) 34%, transparent 70%)`,
        }}
      />
      <div className="fixed inset-x-0 top-0 z-[60] h-px bg-white/10">
        <div
          className="h-full origin-left bg-gradient-to-r from-white via-teal-200 to-pink-200 shadow-[0_0_18px_rgba(94,234,212,0.55)] transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ${
          hasScrolled
            ? "border-white/15 bg-[#07080b]/82 shadow-[0_1px_44px_rgba(0,0,0,0.42)]"
            : "border-white/10 bg-[#07080b]/62 shadow-[0_1px_40px_rgba(0,0,0,0.28)]"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-5 transition-all duration-500 sm:px-6 ${
            hasScrolled ? "py-3" : "py-4"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-sm font-semibold text-white transition hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200/50">
              Joaquín G. Bravo
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <nav className="flex gap-x-5 text-sm text-zinc-400">
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
                      className={`absolute -bottom-1 left-1/2 h-px rounded-full bg-gradient-to-r from-teal-200 via-white to-pink-200 transition-all duration-500 ${
                        activeSection === item.href.slice(1)
                          ? "w-full -translate-x-1/2 opacity-100"
                          : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-60"
                      }`}
                    />
                  </a>
                ))}
              </nav>

              <div className="flex w-fit items-center rounded-lg border border-white/10 bg-white/5 p-1 shadow-inner shadow-white/5 backdrop-blur">
                {(["en", "pt", "es"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLang(item)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-200/50 active:scale-95 ${
                      lang === item
                        ? "bg-white text-zinc-950 shadow-lg shadow-white/10"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex w-fit items-center rounded-lg border border-white/10 bg-white/5 p-1 shadow-inner shadow-white/5 backdrop-blur">
                {(["en", "pt", "es"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLang(item);
                      setIsMenuOpen(false);
                    }}
                    className={`rounded-md px-2.5 py-1.5 text-[0.68rem] font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-200/50 active:scale-95 ${
                      lang === item
                        ? "bg-white text-zinc-950 shadow-lg shadow-white/10"
                        : "text-zinc-400 hover:bg-white/10 hover:text-white"
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
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-200/40 active:scale-95"
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
              <nav className="mt-4 rounded-2xl border border-white/10 bg-[#08090d]/92 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm transition duration-300 hover:bg-white/[0.055] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25 ${
                    activeSection === item.href.slice(1)
                      ? "text-white shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
                        : "text-zinc-400"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                      className={`h-px rounded-full bg-gradient-to-r from-teal-200 via-white to-pink-200 transition-all duration-500 ${
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

      <section id="home" className="relative z-10 mx-auto grid max-w-6xl gap-9 px-5 pb-14 pt-11 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
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
                <path d="M85 120L130 365L256 278" stroke="rgba(45,212,191,0.12)" strokeWidth="1" />
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
                    <stop stopColor="rgba(45,212,191,0.05)" />
                    <stop offset="0.52" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="1" stopColor="rgba(236,72,153,0.08)" />
                  </linearGradient>
                  <linearGradient id="networkLineB" x1="130" x2="602" y1="365" y2="250">
                    <stop stopColor="rgba(99,102,241,0.08)" />
                    <stop offset="0.5" stopColor="rgba(45,212,191,0.2)" />
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
            <div className="absolute bottom-24 right-12 space-y-3 font-mono text-[0.68rem] leading-none text-teal-100/18 [animation:codeFloat_11s_ease-in-out_infinite]">
              <p>{"interface Presence { web: true; music: true }"}</p>
              <p>{"mix.visuals(signal, atmosphere);"}</p>
            </div>
          </div>
        </div>
        <Reveal>
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-zinc-400 shadow-lg shadow-black/20 backdrop-blur sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
            {t.heroEyebrow}
          </p>
          <h1
            className="cinematic-line max-w-4xl bg-[linear-gradient(180deg,#ffffff_0%,#d8dee9_58%,#8b93a7_100%)] bg-clip-text text-[3rem] font-semibold leading-[0.98] text-transparent sm:text-7xl"
            style={{ "--line-delay": "160ms" } as CSSProperties}
          >
            Joaquín G. Bravo
          </h1>
          <p
            className="cinematic-line mt-3 text-lg font-medium text-zinc-200 sm:mt-4 sm:text-2xl"
            style={{ "--line-delay": "280ms" } as CSSProperties}
          >
            {t.heroSubtitle}
          </p>
          <p
            className="cinematic-line mt-4 max-w-2xl text-[0.98rem] leading-7 text-zinc-400 sm:mt-5 sm:text-lg sm:leading-8"
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
              className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.98]"
            >
              {t.projectsButton}
            </a>
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-white/10 hover:shadow-teal-500/10 focus:outline-none focus:ring-2 focus:ring-teal-200/40 active:scale-[0.98]"
            >
              {t.spotifyButton}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-pink-200/30 hover:bg-white/[0.03] hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-200/35 active:scale-[0.98]"
            >
              {t.instagramButton}
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120} className="group relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md">
          <div
            className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_35%_15%,rgba(255,255,255,0.2),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(20,184,166,0.24),transparent_36%),radial-gradient(circle_at_18%_88%,rgba(99,102,241,0.24),transparent_34%)] opacity-70 blur-2xl transition duration-700 group-hover:opacity-100"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${parallax.x * -0.45}px, ${parallax.y * -0.45}px, 0)`,
            }}
          />
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.055] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-2 group-hover:border-white/25"
            style={{
              transform: prefersReducedMotion
                ? undefined
                : `translate3d(${parallax.x * 0.35}px, ${parallax.y * 0.35}px, 0)`,
            }}
          >
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0b0d12]">
              <div className="relative aspect-[4/5] min-h-[330px] overflow-hidden sm:min-h-[480px]">
                <Image
                  src="/joaquin.jpg"
                  alt="Joaquín G. Bravo"
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 480px"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                  preload
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_52%,rgba(0,0,0,0.14)_100%)]" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="about" className="relative z-10 border-y border-white/10 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-teal-100/50">
                Editorial
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {t.aboutTitle}
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_12%_15%,rgba(45,212,191,0.12),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(236,72,153,0.08),transparent_36%)] blur-2xl" />
            <Reveal className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8 lg:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="space-y-6 text-lg leading-9 text-zinc-300 sm:text-xl sm:leading-10">
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

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {t.servicesTitle}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {t.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 110}>
              <article
                onMouseMove={handleSpotlightMove}
                className="spotlight-card group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.024))] p-7 shadow-xl shadow-black/25 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-teal-200/40 hover:bg-white/[0.085] hover:shadow-[0_24px_70px_rgba(20,184,166,0.13)]"
              >
                <div className="absolute inset-x-7 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-teal-200 via-white to-pink-200 transition duration-500 group-hover:scale-x-100" />
                <div className="mb-10 flex items-center justify-between text-sm font-medium text-zinc-500 transition duration-300 group-hover:text-teal-200">
                  <span className="transition duration-300 group-hover:translate-x-1">
                  0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition duration-300 group-hover:bg-teal-200 group-hover:shadow-[0_0_18px_rgba(94,234,212,0.75)]" />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-5 leading-7 text-zinc-400">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t.projectsTitle}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <article
              onMouseMove={handleSpotlightMove}
                className="spotlight-card group relative mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] shadow-2xl shadow-black/30 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-teal-200/30 hover:shadow-[0_24px_80px_rgba(20,184,166,0.13)] sm:mt-10 lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/70 to-transparent" />
                <div className="absolute -left-20 top-12 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl" />
              </div>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[250px] bg-gradient-to-br from-teal-300/35 via-indigo-400/20 to-pink-300/20 p-3 focus:outline-none focus:ring-2 focus:ring-teal-200/40 sm:min-h-80 sm:p-6"
                aria-label={t.projectPreviewTitle}
              >
                <div className="flex h-full items-center justify-center rounded-lg border border-white/10 bg-black/25 p-2.5 shadow-inner shadow-white/5 backdrop-blur sm:p-4">
                  <div className="group/browser w-full max-w-2xl overflow-hidden rounded-xl border border-white/14 bg-[#0d0f14]/95 shadow-2xl shadow-black/40 ring-1 ring-transparent transition duration-500 group-hover:-translate-y-1 group-hover:border-teal-100/30 group-hover:ring-teal-200/20">
                    <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.045] px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-300/75" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-200/75" />
                        <span className="h-2.5 w-2.5 rounded-full bg-teal-200/75" />
                      </div>
                      <div className="min-w-0 flex-1 rounded-md border border-white/10 bg-black/25 px-3 py-1.5 text-center text-xs text-zinc-400 shadow-inner shadow-black/20">
                        dravictoriagomez.com
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_24%_16%,rgba(45,212,191,0.22),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(244,114,182,0.16),transparent_32%),linear-gradient(135deg,#171a20,#08090d)] p-4 sm:p-6">
                      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-teal-200/12 blur-2xl transition duration-700 group-hover/browser:bg-teal-200/18" />
                      <div className="absolute bottom-6 right-8 h-28 w-28 rounded-full bg-pink-200/10 blur-2xl transition duration-700 group-hover/browser:bg-pink-200/16" />
                      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.055)_46%,transparent_68%)] opacity-70 transition duration-700 group-hover/browser:translate-x-6" />

                      <div className="relative flex h-full items-center justify-center">
                        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/14 bg-white/[0.075] shadow-2xl shadow-black/35 backdrop-blur-2xl transition duration-700 group-hover/browser:-translate-y-1 group-hover/browser:border-teal-100/30 group-hover/browser:bg-white/[0.095] group-hover/browser:shadow-[0_24px_70px_rgba(20,184,166,0.16)]">
                          <div className="relative h-24 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_80%_52%,rgba(45,212,191,0.24),transparent_34%),linear-gradient(135deg,rgba(19,78,74,0.72),rgba(24,24,27,0.82)_48%,rgba(88,28,135,0.5))] sm:h-28">
                            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                            <div className="absolute bottom-5 left-5 flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-teal-100 shadow-[0_0_18px_rgba(153,246,228,0.7)]" />
                              <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/70">
                                dravictoriagomez.com
                              </span>
                            </div>
                          </div>

                          <div className="p-4 sm:p-5">
                            <p className="text-xs text-zinc-400">
                              dravictoriagomez.com
                            </p>
                            <h4 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
                              {t.projectPreviewTitle}
                            </h4>
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-300/85">
                              {t.projectPreviewDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <div className="flex min-h-0 flex-col justify-center p-5 sm:min-h-[340px] sm:p-8 lg:p-10">
                <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                  {t.featuredProject}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">
                  {t.projectTitle}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-zinc-400 sm:mt-5 sm:leading-8">
                  {t.projectDescription}
                </p>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97]"
                >
                  {t.projectButton}
                </a>
              </div>
            </article>

            <p className="mt-5 text-center text-sm text-zinc-500">
              {t.moreProjectsComingSoon}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="music" className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-x-5 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
          <div className="relative">
            <div className="mb-5 flex items-center gap-3" aria-hidden="true">
              {[20, 34, 24, 42, 28, 52, 36, 24].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-1 rounded-full bg-gradient-to-t from-teal-300/25 via-white/45 to-pink-200/25"
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t.musicTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              {t.musicText}
            </p>

            <div
              onMouseMove={handleSpotlightMove}
              className="spotlight-card relative mt-8 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-5 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-100/60">
                    {t.featuredTrack}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {t.featuredTrackTitle}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-zinc-500">
                    {t.trackArtistLabel}:{" "}
                    <span className="text-zinc-300">{t.trackArtist}</span>
                  </p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:mb-3" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.musicTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-inner shadow-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.2),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.14),transparent_38%)] opacity-75 blur-2xl transition duration-700 hover:opacity-100" />
            <div className="absolute -right-4 top-10 hidden h-48 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
            <div className="mb-4 hidden items-center justify-end gap-1.5 pr-2 opacity-75 md:flex" aria-hidden="true">
              {[18, 30, 46, 26, 56, 34, 42, 24, 50, 32, 22, 38].map(
                (height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1 rounded-full bg-gradient-to-t from-teal-300/35 via-white/55 to-pink-200/35 shadow-[0_0_14px_rgba(45,212,191,0.18)]"
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
              className="spotlight-card group relative hidden overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-3 shadow-2xl shadow-black/35 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-teal-200/25 hover:shadow-[0_24px_80px_rgba(20,184,166,0.14)] md:block"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-100/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
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
            <a
              href={spotifyTrackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97] md:hidden"
            >
              {t.listenOnSpotify} ↗
            </a>
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-white/10 hover:shadow-[0_14px_34px_rgba(45,212,191,0.12)] focus:outline-none focus:ring-2 focus:ring-teal-200/40 active:scale-[0.98] sm:w-fit"
            >
              {t.fullSpotifyProfile} ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-white/[0.035]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
              {t.contactText}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-pink-200/30 hover:bg-white/10 hover:shadow-pink-500/10 focus:outline-none focus:ring-2 focus:ring-pink-200/35 active:scale-[0.98]"
            >
              Instagram: @joa.brv
            </a>
            <a
              href="mailto:joakinxg100@gmail.com"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-white/[0.03] hover:text-white hover:shadow-lg hover:shadow-teal-500/10 focus:outline-none focus:ring-2 focus:ring-teal-200/35 active:scale-[0.98]"
            >
              Email: joakinxg100@gmail.com
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        {t.footer}
      </footer>
    </main>
  );
}
