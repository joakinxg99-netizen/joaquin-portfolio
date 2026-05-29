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

const content = {
  pt: {
    back: "← Voltar para Início",
    eyebrow: "Serviços Digitais Premium",
    title: "Websites premium para profissionais e marcas pessoais.",
    subtitle: "Experiências digitais claras, modernas e orientadas à confiança.",
    servicesTitle: "Serviços",
    services: [
      {
        title: "Presença Profissional",
        text: "Websites criados para transmitir confiança e credibilidade.",
      },
      {
        title: "Mais Oportunidades",
        text: "Experiências digitais claras que ajudam mais pessoas a conhecer seu trabalho e entrar em contato.",
      },
      {
        title: "Rápido e Adaptado para Celular",
        text: "Otimizado para funcionar perfeitamente em qualquer dispositivo.",
      },
    ],
    processTitle: "Processo",
    process: [
      {
        title: "Estratégia",
        text: "Definimos posicionamento, objetivos e a mensagem principal do projeto.",
      },
      {
        title: "Design",
        text: "Criamos uma direção visual clara, premium e alinhada à sua marca.",
      },
      {
        title: "Desenvolvimento",
        text: "Construímos uma experiência rápida, responsiva e pronta para publicar.",
      },
    ],
    ctaTitle: "Vamos construir sua presença online.",
    ctaText: "Um website premium para comunicar confiança, clareza e profissionalismo.",
    start: "Iniciar projeto",
    instagram: "Instagram",
  },
  en: {
    back: "← Back to Home",
    eyebrow: "Premium Digital Services",
    title: "Premium websites for professionals and personal brands.",
    subtitle: "Clear, modern and trust-driven digital experiences.",
    servicesTitle: "Services",
    services: [
      {
        title: "Professional Presence",
        text: "Websites designed to communicate trust and credibility.",
      },
      {
        title: "More Client Opportunities",
        text: "Clear digital experiences that help more people discover your work and get in touch.",
      },
      {
        title: "Fast & Mobile Friendly",
        text: "Optimized to perform beautifully across every device.",
      },
    ],
    processTitle: "Process",
    process: [
      {
        title: "Strategy",
        text: "We define positioning, goals and the core message of the project.",
      },
      {
        title: "Design",
        text: "We create a clear, premium visual direction aligned with your brand.",
      },
      {
        title: "Development",
        text: "We build a fast, responsive experience ready to publish.",
      },
    ],
    ctaTitle: "Let’s build your online presence.",
    ctaText: "A premium website designed to communicate trust, clarity and professionalism.",
    start: "Start a Project",
    instagram: "Instagram",
  },
  es: {
    back: "← Volver al Inicio",
    eyebrow: "Servicios Digitales Premium",
    title: "Sitios web premium para profesionales y marcas personales.",
    subtitle: "Experiencias digitales claras, modernas y orientadas a la confianza.",
    servicesTitle: "Servicios",
    services: [
      {
        title: "Presencia Profesional",
        text: "Sitios diseñados para transmitir confianza y credibilidad.",
      },
      {
        title: "Más Oportunidades",
        text: "Experiencias digitales claras que ayudan a que más personas conozcan tu trabajo y se contacten contigo.",
      },
      {
        title: "Rápido y Adaptado al Celular",
        text: "Optimizado para funcionar perfectamente en cualquier dispositivo.",
      },
    ],
    processTitle: "Proceso",
    process: [
      {
        title: "Estrategia",
        text: "Definimos posicionamiento, objetivos y el mensaje principal del proyecto.",
      },
      {
        title: "Diseño",
        text: "Creamos una dirección visual clara, premium y alineada con tu marca.",
      },
      {
        title: "Desarrollo",
        text: "Construimos una experiencia rápida, responsiva y lista para publicar.",
      },
    ],
    ctaTitle: "Construyamos tu presencia online.",
    ctaText: "Un sitio premium diseñado para comunicar confianza, claridad y profesionalismo.",
    start: "Iniciar proyecto",
    instagram: "Instagram",
  },
};

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = content[lang];
  const inquiryHref = `mailto:joakinxg100@gmail.com?subject=${encodeURIComponent(
    projectInquiryContent[lang].subject,
  )}&body=${encodeURIComponent(projectInquiryContent[lang].body)}`;

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#0B0B0C] text-stone-100 antialiased">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(109,94,247,0.2),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(107,226,255,0.13),transparent_28%),radial-gradient(circle_at_48%_90%,rgba(255,180,87,0.1),transparent_34%),linear-gradient(180deg,#0B0B0C_0%,#141416_48%,#0B0B0C_100%)]" />

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

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#FFB457]/30 hover:bg-white/10 hover:shadow-[#FFB457]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB457]/35 active:scale-[0.98]"
        >
          {t.back}
        </Link>
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
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-semibold text-white sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.022))] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_20px_58px_rgba(107,226,255,0.1)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-10 min-w-10 items-center justify-center whitespace-nowrap rounded-lg border border-white/10 bg-[#0B0B0C]/55 px-2 text-[0.8125rem] font-medium leading-none text-stone-300 shadow-inner shadow-white/5 transition duration-300 group-hover:border-cyan-200/30 group-hover:text-cyan-100">
                    0{index + 1}
                  </span>
                  <span className="h-px w-16 origin-right scale-x-50 bg-gradient-to-r from-transparent via-white/25 to-[#6BE2FF]/60 transition duration-500 group-hover:scale-x-100" />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-5 leading-7 text-stone-300">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
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
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 sm:py-20">
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
        </div>
      </section>
    </main>
  );
}
