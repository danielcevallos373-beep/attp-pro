import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { motion } from "motion/react";
import { Tabs } from "../../components/ui/tabs";

export default function Asesorias() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Animation variants for staggered lists
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  const tabsContent = [
    {
      title: "Diagnóstico Integral",
      value: "diagnostico",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100 hover:shadow-2xl transition-all">
          <h2 className="text-3xl font-bold mb-8 text-brand-dark">Diagnóstico Integral</h2>
          
          {/* Flowchart Visual */}
          <div className="relative mb-10 bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-200 overflow-hidden">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center md:justify-start items-center gap-y-8 gap-x-2 md:gap-x-4 relative z-10"
            >
              
              {/* Top row */}
              <motion.div variants={itemVariants} className="px-6 py-3 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                Larvicultura
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <span className="text-xs text-brand-primary font-semibold mb-1 -mt-4">Transporte</span>
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </motion.div>

              <motion.div variants={itemVariants} className="px-6 py-3 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                PC
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <span className="text-xs text-brand-primary font-semibold mb-1 -mt-4">Transferencia</span>
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </motion.div>

              <motion.div variants={itemVariants} className="px-6 py-3 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                Engorde
              </motion.div>

              <motion.div variants={itemVariants} className="hidden md:flex flex-col items-center">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </motion.div>

              {/* Bottom row wrapping */}
              <motion.div variants={itemVariants} className="px-6 py-3 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                Cosecha
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col items-center relative">
                <span className="text-xs text-brand-primary font-semibold absolute -bottom-5 whitespace-nowrap">Cadena Frío</span>
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </motion.div>

              <motion.div variants={itemVariants} className="px-6 py-3 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                Procesamiento
              </motion.div>
            </motion.div>

            {/* Feedback Arrow Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-12 text-center text-brand-accent font-bold flex items-center justify-center gap-2 border-t-2 border-dashed border-brand-accent/50 pt-4"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Feedback Resultados
            </motion.div>
          </div>

          {/* Tools List */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-brand-dark mb-4 border-b border-neutral-200 pb-2 inline-block">
              Criterios y Herramientas Utilizados:
            </h3>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-neutral-700 font-medium mt-4"
            >
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(20,184,166,0.5)]" /> HACCP
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(20,184,166,0.5)]" /> Flujos de Proceso
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(20,184,166,0.5)]" /> Matrices EFE - EFI
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(20,184,166,0.5)]" /> Twinn Witness (Software)
              </motion.li>
            </motion.ul>
          </div>
        </div>
      ),
    },
    {
      title: "Optimización de Procesos",
      value: "optimizacion",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100 hover:shadow-2xl transition-all">
          <h2 className="text-3xl font-bold mb-10 text-brand-dark">Optimización de Procesos</h2>
          
          {/* Process Flow */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4"
          >
            {['LV', 'PC', 'Eng', 'Cos', 'Pro'].map((step, i, arr) => (
              <motion.div variants={itemVariants} key={step} className="flex items-center gap-2 md:gap-4">
                <div className="px-5 py-3 md:px-6 md:py-4 bg-white border-2 border-brand-dark rounded-xl font-bold text-brand-dark shadow-sm text-lg md:text-xl hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-primary stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Transferencia Warning */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 mb-16 relative"
          >
            <motion.div 
              animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-brand-accent font-bold text-lg md:text-xl flex items-center justify-center gap-4 bg-brand-accent/5 p-4 rounded-2xl border-2 border-brand-accent/20"
            >
              <span className="leading-tight">Transferencia<br/>juveniles</span>
              <svg className="w-8 h-8 md:w-10 md:h-10 shrink-0 text-brand-accent stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
            </motion.div>
            
            <div className="max-w-sm text-center md:text-left text-brand-dark font-medium italic text-lg md:text-xl bg-brand-light p-6 rounded-2xl border-2 border-neutral-200 shadow-sm relative">
              Ejemplo de tasas de Mortalidad causadas por problemas del proceso de Transferencia
              {/* Line pointing up left */}
              <div className="hidden md:block absolute -top-10 -left-10 w-16 h-16 border-l-2 border-t-2 border-dashed border-neutral-300 rounded-tl-3xl"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch border-t-2 border-dashed border-neutral-200 pt-12">
            {/* Soluciones Propuestas */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative border-2 border-brand-accent rounded-[3rem] p-8 md:p-12 w-full max-w-sm flex flex-col items-center text-center hover:bg-brand-accent/5 transition-colors">
                <div className="absolute -top-6 -left-6 transform rotate-45">
                  <svg className="w-16 h-16 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
                <h3 className="font-bold text-3xl text-brand-accent mb-8">Soluciones<br/>Propuestas</h3>
                <ul className="text-2xl font-bold text-brand-primary/80 text-left w-full pl-8 space-y-4 font-mono">
                  <motion.li whileHover={{ x: 10 }} className="cursor-pointer transition-transform">- A</motion.li>
                  <motion.li whileHover={{ x: 10 }} className="cursor-pointer transition-transform">- B</motion.li>
                  <motion.li whileHover={{ x: 10 }} className="cursor-pointer transition-transform">- C</motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center md:items-start md:justify-end gap-6 pl-4"
            >
              <h3 className="font-bold text-3xl text-brand-accent w-full text-center md:text-left">Resultados</h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-4 border-brand-primary/30 text-brand-primary px-8 py-5 rounded-xl font-bold text-2xl shadow-sm text-center flex-1 cursor-default"
                >
                  + X% Sob
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border-4 border-brand-primary/30 text-brand-primary px-8 py-5 rounded-xl font-bold text-2xl shadow-sm text-center flex-1 cursor-default"
                >
                  - X% Tasa M.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full min-h-screen font-sans flex-col bg-brand-light text-brand-dark relative">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 pb-20">
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
               Field Consulting & Auditing
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none">
              Asesorías <br className="hidden md:block"/>
              <span className="text-brand-primary">de Campo</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-xl leading-relaxed opacity-80">
              Auditoría, diagnóstico y optimización in situ de los procesos de cultivo para asegurar la máxima eficiencia y bioseguridad.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto mb-20">
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
    </div>
  );
}
