import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs } from "../../components/ui/tabs";
import { PdfCarousel } from "../../components/ui/pdf-carousel";

// Asset imports from imagesCapPDF
import AnalisisCosechas from "../../assets/imagesCapPDF/AnalisisCosechas.png";
import ComparacionModelosNoLineales from "../../assets/imagesCapPDF/ComparacionModelosNoLineales.png";
import DistanciaCook from "../../assets/imagesCapPDF/DistanciaDeCook.png";
import Filtrado1 from "../../assets/imagesCapPDF/Filtrado1.png";
import Filtrado2 from "../../assets/imagesCapPDF/Filtrado2.png";
import RegistrosDiarios from "../../assets/imagesCapPDF/RegistrosDiarios.png";
import SFRModelo from "../../assets/imagesCapPDF/SFRModeloObtenido.png";
import SGRModelo from "../../assets/imagesCapPDF/SGRModeloObtenido.png";
import TablaModelo from "../../assets/imagesCapPDF/TablaModeloObtenido.png";
import SfrIndex from "../../assets/imagesCapPDF/sfrIndexConsolidado.png";

// Asset imports from imagesCapacitaciones2
import ComparacionSFR_IC from "../../assets/imagesCapacitaciones2/Comparación Modelos SFR - IC 95.jpeg";
import ComparacionSFR from "../../assets/imagesCapacitaciones2/Comparación Modelos SFR.jpeg";
import ModeloSFR_PDF from "../../assets/imagesCapacitaciones2/Modelo SFR.SGR.FCRe HS.pdf";

export default function Capacitaciones() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const tabsContent = [
    {
      title: "Optimización de FCR",
      value: "fcr",
      content: (
        <div className="w-full bg-slate-50 p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* 1. SECCIÓN: CIMIENTOS TEÓRICOS */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl">01</div>
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Cimientos Teóricos</h2>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
                
                <h3 className="text-2xl font-bold text-brand-dark mb-10 text-center relative z-10">
                  Modelos de Alimentación y Crecimiento <span className="text-brand-primary">(SFR : SGR : FCRe)</span>
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                  {/* SFR Card */}
                  <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col items-center hover:shadow-md transition-all">
                    <p className="font-extrabold text-brand-primary mb-6 text-xl tracking-wide uppercase">SFR (Specific Feed Rate)</p>
                    <div className="flex items-center gap-4 font-serif text-lg md:text-xl text-neutral-800">
                      <span className="font-bold">SFR</span> = 
                      <div className="flex flex-col items-center">
                        <span className="border-b-2 border-brand-dark px-6 pb-2 text-center">Promedio Alimento <span className="italic">t</span></span>
                        <span className="pt-2 px-6 text-center">Biomasa Total Periodo</span>
                      </div>
                      <span className="text-3xl">×</span> <span className="font-bold">100</span>
                    </div>
                    <p className="mt-8 text-neutral-500 text-sm font-medium text-center">Define el promedio de alimento en un tiempo <span className="italic font-serif">t</span> dividido para la biomasa total.</p>
                  </div>

                  {/* SGR Card */}
                  <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col items-center hover:shadow-md transition-all">
                    <p className="font-extrabold text-brand-primary mb-6 text-xl tracking-wide uppercase">SGR (Specific Growth Rate)</p>
                    <div className="flex items-center gap-4 font-serif text-lg md:text-xl text-neutral-800">
                      <span className="font-bold">SGR</span> = 
                      <div className="flex flex-col items-center">
                        <span className="border-b-2 border-brand-dark px-6 pb-2 text-center">ln(Peso<sub>f</sub>) - ln(Peso<sub>i</sub>)</span>
                        <span className="pt-2 px-6 text-center">t<sub>f</sub> - t<sub>i</sub></span>
                      </div>
                      <span className="text-3xl">×</span> <span className="font-bold">100</span>
                    </div>
                    <p className="mt-8 text-neutral-500 text-sm font-medium text-center">Representa el crecimiento porcentual continuo del organismo.</p>
                  </div>
                </div>
                
              </div>
            </section>

            {/* 2. SECCIÓN: CALIDAD DE DATOS Y LIMPIEZA */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent font-bold text-xl">02</div>
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Depuración y Análisis de Muestra</h2>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Metodología Text */}
                <div className="xl:col-span-4 flex flex-col gap-6">
                  <div className="bg-brand-dark p-8 rounded-3xl text-white shadow-xl h-full flex flex-col justify-center border border-white/10">
                    <h4 className="text-xl font-bold text-brand-accent mb-6 uppercase tracking-wider">Metodología Rigurosa</h4>
                    <p className="opacity-80 leading-relaxed mb-8 font-medium">
                      Se analizaron <span className="text-brand-accent font-black tracking-tight">164 registros</span> de 8 sectores y 11 laboratorios bajo criterios estricto de control:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#f59e0b]" /> 
                        <span className="text-sm font-semibold">Peso siembra &lt; 3g</span>
                      </li>
                      <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#f59e0b]" /> 
                        <span className="text-sm font-semibold">Densidad dentro de 1 DS</span>
                      </li>
                      <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#f59e0b]" /> 
                        <span className="text-sm font-semibold">Época de calor activa</span>
                      </li>
                    </ul>
                    <div className="mt-10 pt-8 border-t border-white/10">
                      <p className="text-xs font-black text-brand-accent opacity-70 mb-2 uppercase tracking-[0.1em]">Herramientas Computacionales</p>
                      <p className="font-bold text-xl tracking-tight">R Studio & Cook's Distance</p>
                    </div>
                  </div>
                </div>

                {/* Gallery for Data Quality */}
                <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { src: RegistrosDiarios, title: "Registros Diarios Analizados", desc: "Base de datos cruda de 164 cosechas." },
                    { src: AnalisisCosechas, title: "Resumen Estadístico", desc: "Análisis mensual Abril 2024 - Sept 2025." },
                    { src: DistanciaCook, title: "Detección de Outliers", desc: "Uso de Distancia de Cook para limpieza de datos." },
                    { src: Filtrado1, title: "Proceso de Filtrado A", desc: "Criterios técnicos de limpieza de muestra (Paso 1)." },
                    { src: Filtrado2, title: "Proceso de Filtrado B", desc: "Criterios técnicos de limpieza de muestra (Paso 2)." },
                    { src: SfrIndex, title: "Consolidado SFR Index", desc: "Índice de alimentación consolidado por sector." }
                  ].map((img, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
                      onClick={() => setSelectedImg(img)}
                    >
                      <div className="relative aspect-video bg-neutral-100 rounded-xl overflow-hidden mb-4 border border-neutral-100">
                        <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors flex items-center justify-center">
                          <span className="bg-white/95 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all font-bold text-xs text-brand-dark shadow-lg translate-y-4 group-hover:translate-y-0">
                            VER DETALLE 🔍
                          </span>
                        </div>
                      </div>
                      <h5 className="font-bold text-brand-dark mb-1">{img.title}</h5>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">{img.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. SECCIÓN: AJUSTE DE MODELOS Y REGRESIÓN */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl">03</div>
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Modelado de Regresión</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { src: ComparacionModelosNoLineales, title: "Selección de Modelo", math: "R² comparativo", desc: "Potencial vs Exponencial" },
                  { src: ComparacionSFR, title: "Ajuste de Curvas SFR", math: "Ajuste SFR", desc: "Curva de tendencia obtenida" },
                  { src: ComparacionSFR_IC, title: "Intervalos de Confianza", math: "SFR (IC 95%)", desc: "Área de probabilidad" }
                ].map((img, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm hover:border-brand-primary/50 transition-all text-center"
                    onClick={() => setSelectedImg(img)}
                  >
                    <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-neutral-100">
                      <img src={img.src} alt={img.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" />
                    </div>
                    <h5 className="text-lg font-bold text-brand-dark mb-2 tracking-tight">{img.title}</h5>
                    <p className="text-xs text-neutral-400 font-medium mb-4">{img.desc}</p>
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                      {img.math}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 4. SECCIÓN: RESULTADOS FINALES Y MODELO MAESTRO */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl">04</div>
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Resultados Finales</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
                
                {/* Final Curves (Dominant) */}
                <div className="xl:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* SFR Results */}
                  <div 
                    className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm cursor-pointer group hover:border-brand-primary/40 transition-all flex flex-col"
                    onClick={() => setSelectedImg({ src: SFRModelo, title: "Curva de Regresión SFR Final" })}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="font-bold text-brand-dark uppercase text-[9px] tracking-widest">Regresión SFR</h5>
                      <span className="text-brand-primary font-mono text-[9px] font-black">R² = 0.77</span>
                    </div>
                    <div className="flex-1 aspect-video bg-brand-light/20 rounded-xl overflow-hidden mb-4 p-2">
                      <img src={SFRModelo} alt="Curva SFR" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-brand-dark text-white p-2 rounded-lg text-center font-mono text-xs font-bold">
                      y = 0.1688x<sup>-0.554</sup>
                    </div>
                  </div>

                  {/* SGR Results */}
                  <div 
                    className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm cursor-pointer group hover:border-brand-primary/40 transition-all flex flex-col"
                    onClick={() => setSelectedImg({ src: SGRModelo, title: "Curva de Regresión SGR Final" })}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="font-bold text-brand-dark uppercase text-[9px] tracking-widest">Regresión SGR</h5>
                      <span className="text-brand-primary font-mono text-[9px] font-black">R² = 0.57</span>
                    </div>
                    <div className="flex-1 aspect-video bg-brand-light/20 rounded-xl overflow-hidden mb-4 p-2">
                      <img src={SGRModelo} alt="Curva SGR" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-brand-dark text-white p-2 rounded-lg text-center font-mono text-xs font-bold">
                      y = 0.3839x<sup>-0.952</sup>
                    </div>
                  </div>
                </div>

                {/* COMPACT MASTER TABLE */}
                <div className="xl:col-span-3">
                  <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-lg h-full flex flex-col relative group overflow-hidden">
                    <h3 className="text-sm font-black text-brand-dark mb-4 leading-tight tracking-tight uppercase border-b border-neutral-100 pb-2">
                      Tabla Maestro <span className="text-brand-primary">SFR/SGR</span>
                    </h3>
                    
                    <div 
                      className="flex-1 bg-slate-100 rounded-xl overflow-hidden cursor-zoom-in relative group/table border border-neutral-100"
                      onClick={() => setSelectedImg({ src: TablaModelo, title: "Tabla Maestro SFR/SGR" })}
                    >
                      <img src={TablaModelo} alt="Tabla Maestra" className="w-full h-full object-cover group-hover/table:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white px-4 py-2 rounded-full shadow-lg text-[10px] font-black flex items-center gap-2">
                           ABRIR 🔍
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COMPACT INFO */}
                <div className="xl:col-span-2">
                  <div className="bg-brand-primary/5 p-5 rounded-3xl border border-brand-primary/10 h-full flex flex-col justify-center gap-6">
                    <div>
                      <p className="text-[9px] font-black text-brand-primary uppercase tracking-widest mb-1 font-mono">Aplicabilidad</p>
                      <p className="text-xs font-bold text-neutral-600">Pesos 1g a 40g</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-brand-primary uppercase tracking-widest mb-1 font-mono">Margen Field</p>
                      <p className="text-xs font-bold text-neutral-600">± 5% Semanal</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* ACTION FOOTER */}
            <div className="mt-8 bg-brand-dark p-10 md:p-14 rounded-[3rem] shadow-2xl flex flex-col items-center gap-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full -ml-48 -mb-48 blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700 pointer-events-none" />
              
              <div className="text-center relative z-10 w-full mb-4">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shrink-0 shadow-inner mx-auto mb-6">
                  <svg className="w-10 h-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-3xl font-black text-white mb-3 tracking-tight">Manual Completo Interactivo</h4>
                <p className="text-white/50 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                  Explora visualmente las páginas destacadas del manual académico. Navega en el carrusel o haz clic para expandir cualquier página.
                </p>
              </div>

              <div className="w-full relative z-10 flex justify-center py-4">
                <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-[500px]">
                  <PdfCarousel 
                    pdfFile={ModeloSFR_PDF} 
                    titlePrefix="Página Documento"
                  />
                </div>
              </div>

              <a 
                href={ModeloSFR_PDF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 px-12 py-6 bg-brand-primary text-white font-black rounded-2xl shadow-[0_15px_40px_rgba(20,184,166,0.5)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.7)] hover:scale-105 active:scale-95 transition-all relative z-10 flex items-center gap-4 whitespace-nowrap group/btn leading-none mx-auto"
              >
                DESCARGAR PDF ORIGINAL
                <svg className="w-6 h-6 transition-transform group-hover/btn:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>
            
          </div>
        </div>
      ),
    },
    {
      title: "Cumplimiento Regulatorio",
      value: "regulatorio",
      content: (
        <div className="w-full bg-white p-20 rounded-[3rem] shadow-xl border border-neutral-100 flex flex-col items-center justify-center min-h-[500px] text-center">
          <div className="w-28 h-28 bg-brand-primary/5 rounded-full flex items-center justify-center mb-10 border border-brand-primary/10">
            <svg className="w-14 h-14 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter uppercase">Cumplimiento Regulatorio</h2>
          <p className="text-neutral-400 text-xl max-w-lg italic font-medium leading-relaxed">
            Estamos integrando las normativas de seguridad alimentaria y certificaciones ambientales para optimizar su cumplimiento.
          </p>
        </div>
      ),
    },
    {
      title: "Optimización de Crecimiento",
      value: "crecimiento",
      content: (
        <div className="w-full bg-white p-20 rounded-[3rem] shadow-xl border border-neutral-100 flex flex-col items-center justify-center min-h-[500px] text-center">
          <div className="w-28 h-28 bg-brand-accent/5 rounded-full flex items-center justify-center mb-10 border border-brand-accent/10">
            <svg className="w-14 h-14 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter uppercase">Optimización de Crecimiento</h2>
          <p className="text-neutral-400 text-xl max-w-lg italic font-medium leading-relaxed">
            Módulo enfocado en la maximización de ganancia diaria individual basada en perfiles genéticos específicos.
          </p>
        </div>
      ),
    },
    {
      title: "Reducción Tasas Mortalidad",
      value: "mortalidad",
      content: (
        <div className="w-full bg-white p-20 rounded-[3rem] shadow-xl border border-neutral-100 flex flex-col items-center justify-center min-h-[500px] text-center">
          <div className="w-28 h-28 bg-red-50 rounded-full flex items-center justify-center mb-10 border border-red-100">
            <svg className="w-14 h-14 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
          </div>
          <h2 className="text-4xl font-black text-brand-dark mb-6 tracking-tighter uppercase">Gestión de Mortalidad</h2>
          <p className="text-neutral-400 text-xl max-w-lg italic font-medium leading-relaxed">
            Estrategias preventivas de salud y bioseguridad para mitigar riesgos patógenos en el ciclo de cultivo.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full min-h-screen font-sans flex-col bg-brand-light text-brand-dark relative selection:bg-brand-primary/20">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 pb-40">
        <div className="bg-brand-dark rounded-b-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(20,184,166,1)_0%,transparent_50%)]" />
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>
        
        <main className="flex-1 p-6 md:p-14 lg:p-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-24 text-center"
          >
            <span className="inline-block px-5 py-2.5 bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-8">
               Intelligence Center & Optimization
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none">
              Capacitaciones <br className="hidden md:block"/>
              <span className="text-brand-primary">Especializadas</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-xl leading-relaxed opacity-80">
              Transferimos conocimiento técnico avanzado para optimizar recursos y elevar la rentabilidad operativa del sector acuícola.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <Tabs 
              tabs={tabsContent} 
              containerClassName="bg-white/40 backdrop-blur-xl p-2 rounded-full border border-white/20 shadow-2xl overflow-x-auto no-visible-scrollbar"
              tabClassName="transition-all duration-500 hover:scale-105 active:scale-95"
              activeTabClassName="bg-brand-primary shadow-[0_10px_25px_rgba(20,184,166,0.3)]"
              contentClassName="mt-16"
            />
          </div>
        </main>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-14 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              className="relative w-full max-w-[95vw] sm:max-w-[90vw] h-[85vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full pointer-events-auto">
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-12 md:-top-16 right-0 md:-right-8 text-white hover:text-brand-accent transition-all p-3 hover:rotate-90 hover:scale-125 z-10"
                >
                  <svg className="w-10 h-10 md:w-16 md:h-16 drop-shadow-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <div className="flex-1 min-h-0 w-full flex justify-center items-center">
                  <img 
                    src={selectedImg.src} 
                    alt={selectedImg.title} 
                    className="max-w-full max-h-full object-contain rounded-2xl bg-white shadow-[0_0_120px_rgba(0,0,0,0.6)] border border-white/10 p-2"
                  />
                </div>
                
                <div className="mt-8 flex-shrink-0 text-center bg-brand-primary/10 px-10 py-4 rounded-full border border-brand-primary/20 backdrop-blur-md">
                  <h3 className="text-white text-3xl font-black tracking-tight">{selectedImg.title}</h3>
                  <p className="text-brand-accent font-black text-xs uppercase tracking-widest mt-1">Haz clic fuera para cerrar</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
