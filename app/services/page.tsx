"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "pt" | "en" | "es";

const languageStorageKey = "joabrav-lang";
const supportedLanguages: Lang[] = ["pt", "en", "es"];

const isLang = (value: string | null): value is Lang =>
  value === "pt" || value === "en" || value === "es";

const instagramUrl = "https://instagram.com/joa.brv";

const projectInquiryContent = {
  pt: {
    subject: "Novo Projeto",
    body: `Olá Joaquín,

Tenho interesse em criar um website premium para meu negócio/marca.

Nome:
Negócio:
Objetivos do projeto:
Prazo:`,
  },
  en: {
    subject: "Project Inquiry",
    body: `Hi Joaquín,

I’m interested in building a premium website for my business/brand.

Name:
Business:
Project goals:
Timeline:`,
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

const whatsappMessages = {
  pt: `Olá Joaquín,

Gostaria de conversar sobre um website para meu negócio.`,
  en: `Hi Joaquín,

I would like to discuss a website for my business.`,
  es: `Hola Joaquín,

Me gustaría conversar sobre un sitio web para mi negocio.`,
};

const content = {
  pt: {
    back: "Início",
    eyebrow: "Serviços Digitais Premium",
    title: "Seu website deve transmitir confiança antes mesmo da primeira conversa.",
    subtitle: "Crio websites modernos para profissionais e marcas pessoais que desejam uma presença online clara, elegante e profissional.",
    servicesTitle: "O que você recebe",
    includesLabel: "Inclui",
    services: [
      {
        title: "Presença Profissional",
        text: "Um website que transmite confiança e credibilidade.",
        includes: [],
      },
      {
        title: "Mais Contatos",
        text: "Estrutura pensada para facilitar o contato de novos clientes.",
        includes: [],
      },
      {
        title: "Funciona em Qualquer Dispositivo",
        text: "Experiência otimizada para celular, tablet e computador.",
        includes: [],
      },
    ],
    idealTitle: "Ideal para:",
    idealItems: ["Profissionais da saúde", "Consultores", "Marcas pessoais", "Criadores", "Pequenos negócios"],
    processTitle: "Como funciona",
    process: [
      {
        title: "Descoberta",
        text: "Entendemos objetivo, público e mensagem.",
      },
      {
        title: "Design",
        text: "Transformo isso em uma presença visual clara.",
      },
      {
        title: "Lançamento",
        text: "Publico o site pronto para compartilhar.",
      },
    ],
    ctaTitle: "Vamos conversar sobre seu projeto.",
    ctaText: "",
    start: "Iniciar projeto",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  en: {
    back: "Home",
    eyebrow: "Premium Digital Services",
    title: "Your website should build trust before the first conversation.",
    subtitle: "I create modern websites for professionals and personal brands who want a clear, elegant and professional online presence.",
    servicesTitle: "What You Receive",
    includesLabel: "Includes",
    services: [
      {
        title: "Professional Presence",
        text: "A website that communicates trust and credibility.",
        includes: [],
      },
      {
        title: "More Contacts",
        text: "A structure designed to make it easier for new clients to reach you.",
        includes: [],
      },
      {
        title: "Works Everywhere",
        text: "An experience optimized for mobile, tablet and desktop.",
        includes: [],
      },
    ],
    idealTitle: "Ideal for:",
    idealItems: ["Health Professionals", "Consultants", "Personal Brands", "Creators", "Small Businesses"],
    processTitle: "How it works",
    process: [
      {
        title: "Discovery",
        text: "We define the goal, audience and message.",
      },
      {
        title: "Design",
        text: "I shape that into a clear visual presence.",
      },
      {
        title: "Launch",
        text: "The website goes live, ready to share.",
      },
    ],
    ctaTitle: "Let’s talk about your project.",
    ctaText: "",
    start: "Start a Project",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  es: {
    back: "Inicio",
    eyebrow: "Servicios Digitales Premium",
    title: "Tu sitio web debe transmitir confianza incluso antes de la primera conversación.",
    subtitle: "Creo sitios modernos para profesionales y marcas personales que buscan una presencia online clara, elegante y profesional.",
    servicesTitle: "Lo que recibes",
    includesLabel: "Incluye",
    services: [
      {
        title: "Presencia Profesional",
        text: "Un sitio que transmite confianza y credibilidad.",
        includes: [],
      },
      {
        title: "Más Contactos",
        text: "Una estructura diseñada para facilitar el contacto de nuevos clientes.",
        includes: [],
      },
      {
        title: "Funciona en Cualquier Dispositivo",
        text: "Experiencia optimizada para celular, tablet y computadora.",
        includes: [],
      },
    ],
    idealTitle: "Ideal para:",
    idealItems: ["Profesionales de la salud", "Consultores", "Marcas personales", "Creadores", "Pequeños negocios"],
    processTitle: "Cómo funciona",
    process: [
      {
        title: "Descubrimiento",
        text: "Definimos objetivo, audiencia y mensaje.",
      },
      {
        title: "Diseño",
        text: "Lo transformo en una presencia visual clara.",
      },
      {
        title: "Lanzamiento",
        text: "El sitio queda publicado y listo para compartir.",
      },
    ],
    ctaTitle: "Hablemos sobre tu proyecto.",
    ctaText: "",
    start: "Iniciar proyecto",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
};

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = content[lang];
  const inquiryHref = `mailto:joakinxg100@gmail.com?subject=${encodeURIComponent(
    projectInquiryContent[lang].subject,
  )}&body=${encodeURIComponent(projectInquiryContent[lang].body)}`;
  const whatsappHref = `https://wa.me/5561991673293?text=${encodeURIComponent(
    whatsappMessages[lang],
  )}`;
  const homeHref = `/?lang=${lang}`;

  const updateLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    window.localStorage.setItem(languageStorageKey, nextLang);
  };

  useEffect(() => {
    const queryLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = window.localStorage.getItem(languageStorageKey);
    const nextLang = isLang(queryLang)
      ? queryLang
      : isLang(savedLang)
        ? savedLang
        : "pt";

    setLang(nextLang);
    window.localStorage.setItem(languageStorageKey, nextLang);
  }, []);

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#0B0B0C] text-stone-100 antialiased">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(109,94,247,0.2),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(107,226,255,0.13),transparent_28%),radial-gradient(circle_at_48%_90%,rgba(255,180,87,0.1),transparent_34%),linear-gradient(180deg,#0B0B0C_0%,#141416_48%,#0B0B0C_100%)]" />
      <Link
        href={homeHref}
        aria-label={t.back}
        className="fixed bottom-[18px] right-4 z-50 inline-flex items-center gap-2 rounded-full border border-[rgba(107,226,255,0.35)] bg-[rgba(107,226,255,0.12)] px-3.5 py-2 text-sm font-medium tracking-[-0.01em] text-[#EAFBFF] shadow-[0_0_20px_rgba(107,226,255,0.18)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(107,226,255,0.48)] hover:shadow-[0_0_35px_rgba(107,226,255,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200/35 active:scale-[0.98] sm:bottom-6 sm:right-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#6BE2FF] shadow-[0_0_12px_rgba(107,226,255,0.8)]" />
        <span>← {t.back}</span>
      </Link>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0C]/78 shadow-[0_1px_44px_rgba(11,11,12,0.42)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link href={homeHref} className="flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
            <Image
              src="/logo.png"
              alt="Joaquín G. Bravo"
              width={162}
              height={108}
              priority
              className="h-[3.4rem] w-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.14)] sm:h-[3.85rem]"
            />
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex w-fit items-center rounded-lg border border-white/10 bg-white/5 p-1 shadow-inner shadow-white/5 backdrop-blur">
              {supportedLanguages.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateLanguage(item)}
                  className={`rounded-md px-2.5 py-1.5 text-[0.68rem] font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 active:scale-95 sm:px-3 sm:text-xs ${
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
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-11 sm:px-6 sm:pb-16 sm:pt-16">
        <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-300 shadow-lg shadow-black/20 backdrop-blur sm:text-xs sm:tracking-[0.22em]">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl bg-[linear-gradient(180deg,#ffffff_0%,#eee8df_58%,#a99f92_100%)] bg-clip-text text-[2.75rem] font-semibold leading-[1] text-transparent sm:text-6xl">
          {t.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={inquiryHref}
            className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97]"
          >
            {t.start}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#6BE2FF]/25 bg-[#6BE2FF]/10 px-5 py-3 text-center text-sm font-medium text-[#EAFBFF] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#6BE2FF]/45 hover:bg-[#6BE2FF]/15 hover:shadow-[0_14px_34px_rgba(107,226,255,0.12)] focus:outline-none focus:ring-2 focus:ring-cyan-200/40 active:scale-[0.98]"
          >
            {t.whatsapp}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#FFB457]/30 hover:bg-white/10 hover:shadow-[#FFB457]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB457]/35 active:scale-[0.98]"
          >
            {t.instagram}
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.022))] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_20px_58px_rgba(107,226,255,0.1)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 min-w-10 items-center justify-center whitespace-nowrap rounded-lg border border-white/10 bg-[#0B0B0C]/55 px-2 text-[0.8125rem] font-medium leading-none text-stone-300 shadow-inner shadow-white/5 transition duration-300 group-hover:border-cyan-200/30 group-hover:text-cyan-100">
                    0{index + 1}
                  </span>
                  <span className="h-px w-16 origin-right scale-x-50 bg-gradient-to-r from-transparent via-white/25 to-[#6BE2FF]/60 transition duration-500 group-hover:scale-x-100" />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-stone-300">{service.text}</p>
                {service.includes.length > 0 ? (
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                      {t.includesLabel}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-stone-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB457]/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="rounded-xl border border-white/10 bg-[#141416]/70 p-5 shadow-xl shadow-black/20 sm:p-6">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.idealTitle}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.idealItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-stone-300 shadow-inner shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <h2 className="text-2xl font-semibold text-white sm:text-4xl">
          {t.processTitle}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-xl border border-white/10 bg-[#141416]/70 p-5 shadow-xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-[#FFB457]/25 sm:p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-400">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-stone-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.018]">
        <div className="relative mx-auto max-w-6xl px-5 py-14 text-center sm:px-6 sm:py-16">
          <div className="pointer-events-none absolute inset-x-6 bottom-16 -z-10 h-48 bg-[radial-gradient(circle_at_50%_50%,rgba(255,180,87,0.09),transparent_62%)] blur-2xl" />
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>
          {t.ctaText ? (
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">
              {t.ctaText}
            </p>
          ) : null}
          <a
            href={inquiryHref}
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1 hover:bg-stone-200 hover:shadow-[0_14px_34px_rgba(255,255,255,0.18)] focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.97]"
          >
            {t.start}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-lg border border-[#6BE2FF]/25 bg-[#6BE2FF]/10 px-5 py-3 text-sm font-medium text-[#EAFBFF] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#6BE2FF]/45 hover:bg-[#6BE2FF]/15 hover:shadow-[0_14px_34px_rgba(107,226,255,0.12)] focus:outline-none focus:ring-2 focus:ring-cyan-200/40 active:scale-[0.98] sm:ml-3 sm:mt-8"
          >
            {t.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
