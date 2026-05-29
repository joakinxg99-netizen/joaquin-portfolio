"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Lang = "pt" | "en" | "es";

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
    title: "Websites premium para profissionais e marcas pessoais.",
    subtitle: "Entregas claras para construir confiança, apresentar seu trabalho e facilitar novos contatos.",
    servicesTitle: "Serviços",
    includesLabel: "Inclui",
    services: [
      {
        title: "Website Premium",
        text: "Ideal para profissionais que precisam de uma presença online confiável.",
        includes: [
          "Visual moderno e profissional",
          "Funciona em celular, tablet e computador",
          "Botões para WhatsApp, Instagram e contato",
          "Preparado para aparecer no Google",
          "Ajuda para colocar o site no ar",
        ],
      },
      {
        title: "Presença de Marca Pessoal",
        text: "Ideal para profissionais que querem transmitir mais confiança online.",
        includes: [
          "Identidade visual consistente",
          "Mensagem clara para seus clientes",
          "Apresentação profissional",
          "Estrutura focada em credibilidade",
        ],
      },
      {
        title: "Manutenção Mensal",
        text: "Para quem quer manter o site atualizado após o lançamento.",
        includes: [
          "Atualizações de conteúdo",
          "Pequenas alterações",
          "Suporte técnico",
          "Monitoramento básico",
        ],
      },
    ],
    processTitle: "Como funciona",
    process: [
      {
        title: "Estratégia",
        text: "Definimos objetivo, público e direção visual.",
      },
      {
        title: "Design",
        text: "Crio uma experiência digital premium em torno da sua marca.",
      },
      {
        title: "Lançamento",
        text: "O website é publicado, otimizado e pronto para compartilhar.",
      },
    ],
    ctaTitle: "Pronto para construir uma presença online mais forte?",
    ctaText: "Vamos criar uma experiência digital clara, premium e orientada à confiança.",
    start: "Iniciar projeto",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  en: {
    back: "Home",
    eyebrow: "Premium Digital Services",
    title: "Premium websites for professionals and personal brands.",
    subtitle: "Clear deliverables to build trust, present your work and make contact easier.",
    servicesTitle: "Services",
    includesLabel: "Includes",
    services: [
      {
        title: "Premium Website",
        text: "Ideal for professionals who need a trustworthy online presence.",
        includes: [
          "Modern and professional visual style",
          "Works on mobile, tablet and desktop",
          "Buttons for WhatsApp, Instagram and contact",
          "Prepared to appear on Google",
          "Help putting the website online",
        ],
      },
      {
        title: "Personal Brand Presence",
        text: "Ideal for professionals who want to communicate more trust online.",
        includes: [
          "Consistent visual identity",
          "Clear message for your clients",
          "Professional presentation",
          "Structure focused on credibility",
        ],
      },
      {
        title: "Monthly Care",
        text: "For those who want to keep the website updated after launch.",
        includes: [
          "Content updates",
          "Small changes",
          "Technical support",
          "Basic monitoring",
        ],
      },
    ],
    processTitle: "How it works",
    process: [
      {
        title: "Strategy",
        text: "We define the goal, audience and visual direction.",
      },
      {
        title: "Design",
        text: "I create a premium digital experience around your brand.",
      },
      {
        title: "Launch",
        text: "The website is published, optimized and ready to share.",
      },
    ],
    ctaTitle: "Ready to build a stronger online presence?",
    ctaText: "Let’s create a clear, premium digital experience designed to build trust.",
    start: "Start a Project",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  es: {
    back: "Inicio",
    eyebrow: "Servicios Digitales Premium",
    title: "Sitios web premium para profesionales y marcas personales.",
    subtitle: "Entregas claras para construir confianza, presentar tu trabajo y facilitar nuevos contactos.",
    servicesTitle: "Servicios",
    includesLabel: "Incluye",
    services: [
      {
        title: "Sitio Web Premium",
        text: "Ideal para profesionales que necesitan una presencia online confiable.",
        includes: [
          "Visual moderno y profesional",
          "Funciona en celular, tablet y computadora",
          "Botones para WhatsApp, Instagram y contacto",
          "Preparado para aparecer en Google",
          "Ayuda para publicar el sitio",
        ],
      },
      {
        title: "Presencia de Marca Personal",
        text: "Ideal para profesionales que quieren transmitir más confianza online.",
        includes: [
          "Identidad visual consistente",
          "Mensaje claro para tus clientes",
          "Presentación profesional",
          "Estructura enfocada en credibilidad",
        ],
      },
      {
        title: "Mantenimiento Mensual",
        text: "Para quienes quieren mantener el sitio actualizado después del lanzamiento.",
        includes: [
          "Actualizaciones de contenido",
          "Pequeños cambios",
          "Soporte técnico",
          "Monitoreo básico",
        ],
      },
    ],
    processTitle: "Cómo funciona",
    process: [
      {
        title: "Estrategia",
        text: "Definimos el objetivo, la audiencia y la dirección visual.",
      },
      {
        title: "Diseño",
        text: "Creo una experiencia digital premium alrededor de tu marca.",
      },
      {
        title: "Lanzamiento",
        text: "El sitio se publica, se optimiza y queda listo para compartir.",
      },
    ],
    ctaTitle: "¿Listo para construir una presencia online más fuerte?",
    ctaText: "Creemos una experiencia digital clara, premium y orientada a la confianza.",
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

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#0B0B0C] text-stone-100 antialiased">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(109,94,247,0.2),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(107,226,255,0.13),transparent_28%),radial-gradient(circle_at_48%_90%,rgba(255,180,87,0.1),transparent_34%),linear-gradient(180deg,#0B0B0C_0%,#141416_48%,#0B0B0C_100%)]" />
      <Link
        href="/"
        aria-label={t.back}
        className="fixed bottom-[18px] right-4 z-50 inline-flex items-center gap-2 rounded-full border border-[rgba(107,226,255,0.35)] bg-[rgba(107,226,255,0.12)] px-3.5 py-2 text-sm font-medium tracking-[-0.01em] text-[#EAFBFF] shadow-[0_0_20px_rgba(107,226,255,0.18)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(107,226,255,0.48)] hover:shadow-[0_0_35px_rgba(107,226,255,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200/35 active:scale-[0.98] sm:bottom-6 sm:right-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#6BE2FF] shadow-[0_0_12px_rgba(107,226,255,0.8)]" />
        <span>← {t.back}</span>
      </Link>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0C]/78 shadow-[0_1px_44px_rgba(11,11,12,0.42)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-200/50">
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
              {(["pt", "en", "es"] as Lang[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLang(item)}
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
              </article>
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
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">
            {t.ctaText}
          </p>
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
