import { useState } from "react";
import Navbar from "../components/Navbar";
import { AppSidebar } from "../components/AppSidebar";
import bgImage from "../assets/images/Panora\u0301micaAvioneta.jpg";
import landingImg from "../assets/images/LandingPage.jpg";
import inspiracionalVideo from "../assets/videos/video-inspiracional.mp4";
import { Spotlight } from "../components/ui/spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Highlight } from "../components/ui/hero-highlight";
import { motion } from "motion/react";
import { Mail, Phone, Clock, Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";

// Scroll-reveal wrapper used for all sections below the hero
const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen font-inter flex-col bg-brand-light text-brand-dark overflow-hidden relative">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* ═══════════════════════════════════════════
          HERO — Full-screen with Spotlight
      ═══════════════════════════════════════════ */}
      <header
        className="relative w-full h-screen min-h-[800px] flex flex-col bg-cover bg-center shrink-0 overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-brand-dark/55" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="relative z-30">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl text-white font-extralight text-center leading-none tracking-tight"
          >
            REVOLUCIONA<br />
            <span className="font-bold drop-shadow-md">LA ACUICULTURA</span>
          </motion.h1>

          {/* TextGenerateEffect — subtitle in hero */}
          <TextGenerateEffect
            words="Ciencia, tecnología y comunidad para la producción de camarón en América Latina."
            className="text-brand-light/90 text-center text-lg md:text-xl max-w-2xl leading-relaxed font-normal"
            duration={0.35}
            filter={false}
          />
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Landing image + HeroHighlight
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[800px] shrink-0">
        <div className="absolute inset-0 w-full h-full">
          <img src={landingImg} alt="AT&TP Plataforma" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
                Revoluciona la producción de camarón en América Latina,
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight">
                <Highlight>
                  integrando ciencia, tecnología y comunidad
                </Highlight>
              </h2>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Video Inspiracional
      ═══════════════════════════════════════════ */}
      <section className="w-full py-24 md:py-32 bg-neutral-950 shrink-0">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 md:gap-20 items-center">
            <FadeUp>
              <div className="flex flex-col gap-3">
                <span className="text-xs tracking-[0.3em] uppercase text-brand-primary font-semibold">Contenido</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Video<br />Inspiracional
                </h2>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/5">
                <video playsInline controls className="w-full aspect-video object-cover">
                  <source src={inspiracionalVideo} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER — Dark, centered, editorial
      ═══════════════════════════════════════════ */}
      <footer className="w-full bg-[#0e0e0e] text-white shrink-0">
        <div className="max-w-5xl mx-auto px-6 md:px-16 pt-16 pb-12 flex flex-col items-center gap-10">

          {/* Brand */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-2xl font-bold tracking-tight">AT&TP</p>
            <p className="text-neutral-500 text-sm">Innovación en Acuicultura para América Latina.</p>
          </div>

          {/* Contact Info — 3 cols centered */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">attp.asesoria@gmail.com</p>
                <p className="text-neutral-500 text-xs">Max 48h response</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">+593 999 539 529</p>
                <p className="text-neutral-500 text-xs">Mon-Fri</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-neutral-500 shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">09:00 - 19:00</p>
                <p className="text-neutral-500 text-xs">Guayaquil, EC</p>
              </div>
            </div>
          </div>

          {/* Nav links centered */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Inicio", href: "/" },
              { label: "Asesorías", href: "/asesorias" },
              { label: "Análisis de Datos", href: "/analisis-datos" },
              { label: "Infraestructura", href: "/infraestructura" },
              { label: "Capacitaciones", href: "/capacitaciones" },
              { label: "Benchmarking", href: "/benchmarking" },
              { label: "Productos", href: "/productos" },
              { label: "Shrimplicity", href: "/shrimplicity" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/8" />
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">&copy; {new Date().getFullYear()} AT&TP. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            {[Twitter, Linkedin, Github, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-neutral-500 hover:text-white transition-colors duration-200">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
