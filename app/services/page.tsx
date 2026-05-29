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
    title: "Gere confiança desde o primeiro olhar.",
    subtitle: "Presença online clara, moderna e profissional para atrair mais clientes.",
    servicesTitle: "O que você recebe",
    includesLabel: "Inclui",
    services: [
      {
        title: "Presença Profissional",
        text: "Um site que transmite confiança e credibilidade.",
        includes: [],
      },
      {
        title: "Mais Contatos",
        text: "Um caminho claro para que novos clientes entrem em contato.",
        includes: [],
      },
      {
        title: "Experiência Moderna",
        text: "Seu site será rápido, moderno e profissional em qualquer dispositivo.",
        includes: [],
      },
    ],
    idealTitle: "Este serviço é ideal para:",
    idealText: "",
    idealItems: ["Profissionais da saúde", "Consultores", "Marcas pessoais", "Criadores", "Negócios"],
    includedTitle: "O que está incluído",
    includedItems: [
      "Design personalizado",
      "Adaptado para celular, tablet e computador",
      "Links para WhatsApp e redes sociais",
      "Estrutura preparada para Google",
      "Ajuda para publicação do site",
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
    title: "Build trust from the first impression.",
    subtitle: "Clear, modern and professional online presence designed to attract more clients.",
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
        text: "A clear path for new clients to get in touch.",
        includes: [],
      },
      {
        title: "Modern Experience",
        text: "Your website will feel modern, fast and professional on every device.",
        includes: [],
      },
    ],
    idealTitle: "This service is ideal for:",
    idealText: "",
    idealItems: ["Health Professionals", "Consultants", "Personal Brands", "Creators", "Businesses"],
    includedTitle: "What’s Included",
    includedItems: [
      "Custom design",
      "Mobile, tablet and desktop friendly",
      "WhatsApp and social media links",
      "Structure prepared for Google",
      "Website publishing support",
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
    title: "Genera confianza desde la primera impresión.",
    subtitle: "Presencia online clara, moderna y profesional para atraer más clientes.",
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
        text: "Un camino claro para que nuevos clientes se pongan en contacto contigo.",
        includes: [],
      },
      {
        title: "Experiencia Moderna",
        text: "Tu sitio se verá moderno, rápido y profesional en cualquier dispositivo.",
        includes: [],
      },
    ],
    idealTitle: "Este servicio es ideal para:",
    idealText: "",
    idealItems: ["Profesionales de la salud", "Consultores", "Marcas personales", "Creadores", "Negocios"],
    includedTitle: "Qué está incluido",
    includedItems: [
      "Diseño personalizado",
      "Adaptado para celular, tablet y computadora",
      "Links para WhatsApp y redes sociales",
      "Estructura preparada para Google",
      "Ayuda para publicar el sitio",
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
        className="fixed bottom-3 right-3 z-50 inline-flex items-center gap-1.5 rounded-full border border-[rgba(107,226,255,0.35)] bg-[rgba(107,226,255,0.12)] px-3 py-1.5 text-xs font-medium tracking-[-0.01em] text-[#EAFBFF] shadow-[0_0_20px_rgba(107,226,255,0.18)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(107,226,255,0.48)] hover:shadow-[0_0_35px_rgba(107,226,255,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200/35 active:scale-[0.98] sm:bottom-6 sm:right-6 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-sm"
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

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-16">
        <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-stone-300 shadow-lg shadow-black/20 backdrop-blur sm:text-xs sm:tracking-[0.22em]">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl bg-[linear-gradient(180deg,#ffffff_0%,#eee8df_58%,#a99f92_100%)] bg-clip-text text-[2.25rem] font-semibold leading-[1.02] text-transparent sm:mt-5 sm:text-6xl sm:leading-[1]">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300 sm:mt-5 sm:text-xl sm:leading-8">
          {t.subtitle}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
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
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12">
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

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="rounded-xl border border-white/10 bg-[#141416]/70 p-5 shadow-xl shadow-black/20 sm:p-6">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.idealTitle}
          </h2>
          {t.idealText ? (
            <p className="mt-4 max-w-2xl leading-7 text-stone-300">
              {t.idealText}
            </p>
          ) : null}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {t.idealItems.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-stone-300 shadow-inner shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:text-white"
              >
                <span className="mr-2 text-[#6BE2FF]">✔</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="rounded-xl border border-white/10 bg-[#141416]/70 p-5 shadow-xl shadow-black/20 sm:p-6">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.includedTitle}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.includedItems.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-stone-300 shadow-inner shadow-white/5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/30 hover:text-white"
              >
                <span className="text-[#6BE2FF]">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
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
