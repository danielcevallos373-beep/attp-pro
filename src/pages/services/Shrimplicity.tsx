import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

// Assets
import logoShrimp from "../../assets/images/LogoShrimplicitySinFondo.png";
import videoAtentoPepe from "../../assets/7. SHRIMPLICITY/Video Atento Pepe.mp4";
import imgAtentoPepe from "../../assets/7. SHRIMPLICITY/ImágenAtentoPepe.jpg";
import imgDatosCrudos from "../../assets/7. SHRIMPLICITY/De datos crudos a Decisiones.png";
import videoLanzamiento from "../../assets/7. SHRIMPLICITY/Lanzamiento Shrimplicity.mp4";
import videoNuevaFuncionalidad from "../../assets/7. SHRIMPLICITY/Nueva Funcionalidad.mp4";
import videoSuperado from "../../assets/7. SHRIMPLICITY/Superado las 1,000 ha.mp4";

// ------- Animated Counter Hook -------
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ------- Stat Card -------
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  delay?: number;
  animate: boolean;
}
function StatCard({ value, suffix = "", label, sublabel, delay = 0, animate }: StatCardProps) {
  const count = useCountUp(value, 1800, animate);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
    >
      <span className="text-5xl md:text-7xl font-black text-brand-primary tracking-tight leading-none group-hover:scale-105 transition-transform">
        {count.toLocaleString()}<span className="text-brand-accent">{suffix}</span>
      </span>
      <span className="mt-4 text-brand-dark font-bold text-lg md:text-xl text-center leading-tight">
        {label}
      </span>
      {sublabel && (
        <span className="mt-2 text-neutral-400 text-xs md:text-sm text-center leading-snug font-medium">
          {sublabel}
        </span>
      )}
    </motion.div>
  );
}

// ------- Video Card -------
interface VideoCardProps {
  src: string;
  title: string;
  description?: string;
}
function VideoCard({ src, title, description }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
    >
      <video
        src={src}
        controls
        className="w-full aspect-video object-cover bg-black"
        preload="metadata"
      />
      <div className="p-5">
        <h3 className="font-bold text-brand-dark text-lg mb-1">{title}</h3>
        {description && (
          <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

// ------- Main Component -------
export default function Shrimplicity() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsMuted(heroVideoRef.current.muted);
    }
  };

  // Attempt to autoplay on mount to ensure it plays (browsers require it to be muted for autoplay to work without interaction)
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(console.error);
    }
  }, []);

  // Trigger counter animation when stats section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 1500, suffix: " ha", label: "Hectáreas bajo gestión", sublabel: undefined, delay: 0 },
    { value: 3, suffix: "", label: "Grupos Camaroneros", sublabel: undefined, delay: 0.1 },
    { value: 299, suffix: "", label: "Piscinas totales", sublabel: "233 Engorde · 66 PC y Pre Eng", delay: 0.2 },
    { value: 169, suffix: "", label: "Piscinas con Ciclo Activo", sublabel: undefined, delay: 0.3 },
  ];

  const videos = [
    { src: videoLanzamiento, title: "Lanzamiento Shrimplicity", description: "El momento en que presentamos oficialmente la plataforma al sector acuícola." },
    { src: videoNuevaFuncionalidad, title: "Nueva Funcionalidad", description: "Descubre las últimas herramientas añadidas para optimizar tu operación." },
    { src: videoSuperado, title: "Superando las 1,000 ha", description: "Un hito histórico: más de 1,000 hectáreas siendo gestionadas con Shrimplicity." },
  ];

  return (
    <div className="flex w-full min-h-screen font-sans flex-col bg-brand-light text-brand-dark overflow-x-hidden relative">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">

        {/* ── NAVBAR ── */}
        <div className="bg-brand-dark rounded-b-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(20,184,166,1)_0%,transparent_50%)]" />
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <main className="flex-1">

          {/* ── SECTION 1: HERO VIDEO — ATENTO PEPE ── */}
          <section className="relative w-full overflow-hidden bg-black" style={{ minHeight: "60vh" }}>
            <video
              ref={heroVideoRef}
              src={videoAtentoPepe}
              loop
              playsInline
              autoPlay
              muted
              className="w-full h-full object-cover"
              style={{ minHeight: "60vh", maxHeight: "85vh" }}
            />
            {/* Dark overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none transition-opacity duration-1000 opacity-50`} />

            {/* Mute / Unmute Button (Always shows to allow manual audio control) */}
            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-white/20 transition-all"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>Activar sonido</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>Silenciar</span>
                </>
              )}
            </motion.button>



            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center pt-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              </motion.div>
            </motion.div>
          </section>

          {/* Hero Text Relocated Below Video */}
          <section className="bg-brand-dark pb-8 pt-10 px-6 text-center shadow-inner relative z-10 border-b border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2 bg-brand-accent/20 text-brand-accent font-black text-[10px] tracking-[0.35em] uppercase rounded-full mb-5 border border-brand-accent/30 backdrop-blur-sm">
                IA · Asistente Acuícola
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4 drop-shadow-2xl">
                Conoce a<br />
                <span className="text-brand-accent">Atento Pepe</span>
              </h1>
              <p className="text-white/70 font-semibold text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                El asistente de inteligencia artificial que transforma la gestión camaronera.
              </p>
            </motion.div>
          </section>

          {/* ── SECTION 2: ATENTO PEPE — PRESENTACIÓN ── */}
          <section className="bg-brand-dark py-20 md:py-28 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-3xl bg-brand-accent/20 blur-xl" />
                  <img
                    src={imgAtentoPepe}
                    alt="Atento Pepe"
                    className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-brand-accent/30"
                  />
                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-brand-accent text-brand-dark font-black text-xs px-4 py-2 rounded-full shadow-lg tracking-widest uppercase">
                    IA Integrada
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-white"
              >
                <span className="inline-block px-4 py-2 bg-brand-primary/20 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-6 border border-brand-primary/30">
                  Asistente Inteligente
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                  Atento Pepe<br />
                  <span className="text-brand-accent">Te acompaña siempre</span>
                </h2>
                <p className="text-white/70 font-medium text-lg leading-relaxed mb-8">
                  Atento Pepe es el asistente de inteligencia artificial integrado en Shrimplicity. 
                  Analiza tus datos en tiempo real, responde preguntas, sugiere acciones y anticipa 
                  problemas — todo desde la palma de tu mano.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análisis predictivo de producción",
                    "Alertas inteligentes personalizadas",
                    "Resúmenes automáticos diarios",
                    "Consultas en lenguaje natural",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80 font-semibold">
                      <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0 shadow-[0_0_10px_rgba(170,189,78,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ── SECTION 3: ESTADÍSTICAS ANIMADAS ── */}
          <section className="py-20 md:py-28 px-6 bg-brand-light" ref={statsRef}>
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-5 py-2.5 bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-6">
                  Presencia Operacional
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-none">
                  Shrimplicity en<br />
                  <span className="text-brand-primary">Números Reales</span>
                </h2>
                <p className="mt-6 text-neutral-500 font-bold text-lg max-w-2xl mx-auto">
                  Datos que respaldan la confianza de los grupos camaroneros más importantes del Ecuador.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stats.map((s, i) => (
                  <StatCard
                    key={s.label}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    sublabel={s.sublabel}
                    delay={i * 0.1}
                    animate={statsVisible}
                  />
                ))}
              </div>

              {/* Accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-16 h-1 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-transparent origin-left"
              />
            </div>
          </section>

          {/* ── SECTION 4: DE DATOS CRUDOS A DECISIONES ── */}
          <section className="py-20 md:py-28 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="inline-block px-5 py-2.5 bg-brand-accent/10 text-brand-accent font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-6 border border-brand-accent/20">
                  Inteligencia de Datos
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                  De Datos Crudos<br />
                  <span className="text-brand-accent">a Decisiones</span>
                </h2>
                <p className="mt-5 text-white/60 font-medium text-lg max-w-2xl mx-auto">
                  Shrimplicity convierte la información de cada piscina en insights accionables para tu operación.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src={imgDatosCrudos}
                  alt="De datos crudos a decisiones"
                  className="w-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Logo below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 flex justify-center"
              >
                <img src={logoShrimp} alt="Shrimplicity" className="h-16 md:h-24 opacity-80 drop-shadow-2xl" />
              </motion.div>
            </div>
          </section>

          {/* ── SECTION 5: GALERÍA DE VIDEOS ── */}
          <section className="py-20 md:py-28 px-6 bg-brand-light">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-5 py-2.5 bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-6">
                  En Acción
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-none">
                  Shrimplicity<br />
                  <span className="text-brand-primary">en Movimiento</span>
                </h2>
                <p className="mt-5 text-neutral-500 font-bold text-lg max-w-2xl mx-auto">
                  Lanzamientos, nuevas funcionalidades e hitos que marcan el crecimiento de nuestra plataforma.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {videos.map((v) => (
                  <VideoCard key={v.title} src={v.src} title={v.title} description={v.description} />
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 6: CTA FINAL ── */}
          <section className="py-20 md:py-24 px-6 bg-brand-dark relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(170,189,78,0.6)_0%,transparent_60%)]" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto text-center"
            >
              <img src={logoShrimp} alt="Shrimplicity" className="h-20 md:h-28 mx-auto mb-8 drop-shadow-2xl" />
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
                Únete a la<br />
                <span className="text-brand-accent">Revolución Acuícola</span>
              </h2>
              <p className="text-white/60 font-medium text-lg mb-10 leading-relaxed">
                Más de 1,500 ha gestionadas. Únete a los grupos camaroneros que ya confían en Shrimplicity para tomar mejores decisiones.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(57,119,87,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-brand-primary text-white text-lg font-bold rounded-full shadow-lg transition-all"
              >
                Descargar la App
              </motion.button>
            </motion.div>
          </section>

        </main>
      </div>
    </div>
  );
}
