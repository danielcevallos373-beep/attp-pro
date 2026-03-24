import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs } from "../../components/ui/tabs";
import { PdfCarousel } from "../../components/ui/pdf-carousel";

// Asset imports
import Fig44 from "../../assets/imagesComprender/Figura 4.4..png";
import Fig45 from "../../assets/imagesComprender/Figura 4.5.png";
import Fig46 from "../../assets/imagesComprender/Figura 4.6.png";
import Fig49 from "../../assets/imagesComprender/Figura 4.9.png";
import Fig411 from "../../assets/imagesComprender/Figura 4.11 - KS y Levene.png";

// Correlacion assets
import AnalisisGenAmb from "../../assets/imagesCorrelacion/Análisis GEN_AMB.jpeg";
import BiplotCanonico from "../../assets/imagesCorrelacion/Figura 4.16 - Biplot Canonico.png";
import PesoCrecimiento from "../../assets/imagesCorrelacion/Peso Siembra vs Crecimiento.jpeg";
import SistemaBifasico from "../../assets/imagesCorrelacion/Sistema Bifásico - KPIs sin Piscinas.png";
import FotoAireadores from "../../assets/imagesCorrelacion/foto aérea aireadores.jpg";
import FotoAlimentadores from "../../assets/imagesCorrelacion/foto aérea alimentadores.jpg";
import FotoCombinada2 from "../../assets/imagesCorrelacion/foto aerea combinada 2.jpg";
import FotoCombinadaAA from "../../assets/imagesCorrelacion/foto aérea combinada AA y Aireadores.jpg";

// Pronosticos assets
import ComparacionPrec from "../../assets/pronosticos/Comparación Anual Precipitación Mensual.jpeg";
import ComparacionTemp from "../../assets/pronosticos/Comparación Temp Prom Mensual.jpeg";
import TendenciaTemp from "../../assets/pronosticos/Tendencia Global Temp.jpeg";
import PdfVariables from "../../assets/pronosticos/Shrimp Exports Forecast - Variables of Interest.pdf";
import PdfForecast2025 from "../../assets/pronosticos/Shrimp Exports Forecast 2025.pdf";
import PdfForecast2026 from "../../assets/pronosticos/Shrimp Exports Forecast 2026.pdf";

export default function AnalisisDatos() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const images = [
    { src: Fig44, title: "Análisis de Variables por Sector" },
    { src: Fig45, title: "Distribución por Época de Cultivo" },
    { src: Fig46, title: "Dashboard de Producción Integrado" },
    { src: Fig49, title: "Prueba de ANOVA Tukey" },
    { src: Fig411, title: "Pruebas de KS y Levene" },
  ];

  const correlationImages = [
    { src: AnalisisGenAmb, title: "Análisis Genética vs Ambiente" },
    { src: BiplotCanonico, title: "Biplot Canónico de Correlaciones" },
    { src: PesoCrecimiento, title: "Relación Peso Siembra vs Crecimiento" },
    { src: SistemaBifasico, title: "Sistema Bifásico - KPIs Operativos" },
    { src: FotoAireadores, title: "Infraestructura: Aireadores" },
    { src: FotoAlimentadores, title: "Infraestructura: Alimentadores" },
    { src: FotoCombinada2, title: "Vista Aérea Combinada" },
    { src: FotoCombinadaAA, title: "Vista Aérea AA y Aireadores" },
  ];

  const forecastImages = [
    { src: ComparacionPrec, title: "Comparación Anual Precipitación" },
    { src: ComparacionTemp, title: "Comparación Temperatura Promedio" },
    { src: TendenciaTemp, title: "Tendencia Global de Temperatura" },
  ];

  const reports = [
    { file: PdfVariables, title: "Variables of Interest - Shrimp Forecast", year: "Tech" },
    { file: PdfForecast2025, title: "Shrimp Exports Forecast 2025", year: "2025" },
    { file: PdfForecast2026, title: "Shrimp Exports Forecast 2026", year: "2026" },
  ];

  const tabsContent = [
    {
      title: "Comprender Producción",
      value: "comprender",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <h2 className="text-4xl font-bold mb-10 text-brand-dark">Comprender Producción y KPI's</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {images.map((img, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImg(img)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-neutral-50 border border-neutral-100 shadow-sm transition-all group-hover:shadow-md group-hover:border-brand-primary/30">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xl font-bold text-neutral-800 text-center px-2">{img.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ),
    },
    {
      title: "Diseñar KPI's y OKR's",
      value: "disenar",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <h2 className="text-4xl font-bold mb-10 text-brand-dark">Diseñar KPI's y OKR's</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-primary/20">
                  <th className="py-4 px-4 text-2xl font-bold text-brand-dark">Etapa</th>
                  <th className="py-4 px-4 text-2xl font-bold text-brand-primary">KPI</th>
                  <th className="py-4 px-4 text-2xl font-bold text-brand-accent">OKR</th>
                </tr>
              </thead>
              <tbody className="text-xl">
                {[
                  { stage: "[Larva]", kpi: "Costo / Millar / PL", okr: "ROA" },
                  { stage: "[PC]", kpi: "Costo / Millar / Peso Transf.", okr: "# chequeos semanales" },
                  { stage: "[Eng]", kpi: "Costo / Lb / Talla Cosecha", okr: "Tasa mort semanal" },
                  { stage: "[Cos]", kpi: "Lb / Obrero / Comp / Hora", okr: "Tº prom proceso, [] Metabisulfito" },
                  { stage: "[Proc]", kpi: "Lb / Obrero / Turno / Hora Ent y PyP", okr: "% Eficiencia Finca origen y Talla" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-brand-light transition-colors group">
                    <td className="py-6 px-4 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{row.stage}</td>
                    <td className="py-6 px-4 font-medium text-neutral-700">{row.kpi}</td>
                    <td className="py-6 px-4 font-bold text-brand-accent/80 italic">{row.okr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-brand-dark/5 rounded-2xl p-8 flex items-center gap-6 border border-brand-dark/10">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-lg text-neutral-600 font-medium">
              Estos indicadores permiten un control exhaustivo desde la recepción de larva hasta el empaque final, asegurando la eficiencia operativa y rentabilidad del negocio.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Correlacionar y Modelar",
      value: "correlacionar",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <h2 className="text-4xl font-bold mb-10 text-brand-dark">Correlacionar y Modelar</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {correlationImages.map((img, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImg(img)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-neutral-50 border border-neutral-100 shadow-sm transition-all group-hover:shadow-md group-hover:border-brand-primary/30">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xl font-bold text-neutral-800 text-center px-2">{img.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ),
    },
    {
      title: "Pronósticos",
      value: "pronosticos",
      content: (
        <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <h2 className="text-4xl font-bold mb-10 text-brand-dark">Pronósticos</h2>
          
          <div className="space-y-16">
            {/* Gallery Section */}
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                Tendencias Ambientales
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {forecastImages.map((img, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImg(img)}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-50 border border-neutral-100 shadow-sm transition-all group-hover:shadow-md">
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-lg font-bold text-center text-neutral-700">{img.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Documents Section */}
            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Reportes de Exportación
              </h3>
              <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                {reports.map((doc, idx) => (
                  <div key={idx} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 hover:border-brand-primary/40 transition-all group">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-red-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543c0 1.104-.896 2-2 2h-13c-1.104 0-2-.896-2-2v-18c0-1.104.896-2 2-2h6.363zm.637-2h-7c-1.654 0-3 1.346-3 3v18c0 1.654 1.346 3 3 3h13c1.654 0 3-1.346 3-3v-12l-9-9z"/></svg>
                    </div>
                    <p className="text-sm font-bold text-brand-primary mb-1">{doc.year}</p>
                    <h4 className="text-xl font-bold text-brand-dark mb-4 text-center line-clamp-2 leading-tight">{doc.title}</h4>
                    
                    <div className="w-full mb-6">
                      <PdfCarousel 
                        pdfFile={doc.file} 
                        titlePrefix="Página"
                      />
                    </div>

                    <a 
                      href={doc.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 text-white bg-brand-primary font-bold hover:bg-brand-dark transition-colors px-4 py-3 rounded-xl mt-auto shadow-md"
                    >
                      Descargar Reporte PDF
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
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
               Data Analytics & Forecasting
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none">
              Análisis <br className="hidden md:block"/>
              <span className="text-brand-primary">de Datos</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-xl leading-relaxed opacity-80">
              Transformamos datos productivos en predicciones precisas para maximizar la toma de decisiones estratégicas y operativas.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto mb-20 relative">
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
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
                    className="max-w-full max-h-full object-contain rounded-2xl bg-white shadow-2xl p-2"
                  />
                </div>
                
                <div className="mt-8 flex-shrink-0 text-center bg-brand-primary/10 px-10 py-4 rounded-full border border-brand-primary/20 backdrop-blur-md">
                  <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">{selectedImg.title}</h3>
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
