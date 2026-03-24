import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs } from "../../components/ui/tabs";

// Assets: 6.1 Recuperación de Suelos
import RecSuelos1 from "../../assets/6.1 Recuperación de Suelos/20250721_110916.jpg";
import RecSuelos2 from "../../assets/6.1 Recuperación de Suelos/20250721_125909.jpg";
import RecSuelos3 from "../../assets/6.1 Recuperación de Suelos/20250721_162726.jpg";
import RecSuelos4 from "../../assets/6.1 Recuperación de Suelos/20250721_163347.jpg";
import RecSuelos5Vid from "../../assets/6.1 Recuperación de Suelos/20250721_163709.mp4";
import RecSuelos6Vid from "../../assets/6.1 Recuperación de Suelos/20250722_091042.mp4";
import RecSuelos7 from "../../assets/6.1 Recuperación de Suelos/20250722_142617.jpg";
import RecSuelos8 from "../../assets/6.1 Recuperación de Suelos/20250723_115949.jpg";
import RecSuelos9Vid from "../../assets/6.1 Recuperación de Suelos/20250823_081938.mp4";
import RecSuelos10 from "../../assets/6.1 Recuperación de Suelos/20250823_083409.jpg";
import RecSuelos11Vid from "../../assets/6.1 Recuperación de Suelos/20250823_091203.mp4";
import RecSuelos12Vid from "../../assets/6.1 Recuperación de Suelos/20250823_091524.mp4";
import RecSuelos13 from "../../assets/6.1 Recuperación de Suelos/IMG-20250823-WA0014.jpg";
import RecSuelos14Vid from "../../assets/6.1 Recuperación de Suelos/P23 APLICACION CMD1 .mp4";

// Assets: 6.2 Tratamiento de Agua
import TratAgua1Vid from "../../assets/6.2 Tratamiento de Agua/20250807_130132.mp4";
import TratAgua2 from "../../assets/6.2 Tratamiento de Agua/20250807_131920.jpg";
import TratAgua3 from "../../assets/6.2 Tratamiento de Agua/20250807_141312.jpg";
import TratAgua4 from "../../assets/6.2 Tratamiento de Agua/20250807_142334.jpg";
import TratAgua5 from "../../assets/6.2 Tratamiento de Agua/20250807_142553.jpg";
import TratAgua6 from "../../assets/6.2 Tratamiento de Agua/20250808_150024.jpg";
import TratAgua7 from "../../assets/6.2 Tratamiento de Agua/IMG-20250808-WA0013.jpg";

type MediaItem = { src: string; type: "image" | "video"; title: string };

const suelosMedia: MediaItem[] = [
  { src: RecSuelos1, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos2, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos3, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos4, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos5Vid, type: "video", title: "Aplicación - Video Registro" },
  { src: RecSuelos6Vid, type: "video", title: "Aplicación - Video Registro" },
  { src: RecSuelos7, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos8, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos9Vid, type: "video", title: "Aplicación - Video Registro" },
  { src: RecSuelos10, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos11Vid, type: "video", title: "Aplicación - Video Registro" },
  { src: RecSuelos12Vid, type: "video", title: "Aplicación - Video Registro" },
  { src: RecSuelos13, type: "image", title: "Recuperación de Suelos" },
  { src: RecSuelos14Vid, type: "video", title: "Aplicación CMD1" },
];

const aguaMedia: MediaItem[] = [
  { src: TratAgua1Vid, type: "video", title: "Tratamiento de Agua - Video" },
  { src: TratAgua2, type: "image", title: "Tratamiento de Agua" },
  { src: TratAgua3, type: "image", title: "Tratamiento de Agua" },
  { src: TratAgua4, type: "image", title: "Tratamiento de Agua" },
  { src: TratAgua5, type: "image", title: "Tratamiento de Agua" },
  { src: TratAgua6, type: "image", title: "Tratamiento de Agua" },
  { src: TratAgua7, type: "image", title: "Tratamiento de Agua" },
];

export default function Productos() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const renderMediaGrid = (items: MediaItem[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {items.map((media, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="group cursor-pointer flex flex-col"
          onClick={() => setSelectedMedia(media)}
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100 border border-neutral-200 shadow-sm transition-all group-hover:shadow-md group-hover:border-brand-primary/30 flex items-center justify-center">
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={media.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center bg-black/5">
                <video
                  src={`${media.src}#t=0.001`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  preload="metadata"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-brand-dark/70 rounded-full p-4 backdrop-blur-sm shadow-xl text-white transform transition-transform group-hover:scale-110">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors" />
          </div>
          <p className="mt-4 text-center font-bold text-neutral-800 text-sm md:text-base px-2">
            {media.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );

  const tabsContent = [
    {
      title: "Recuperación de Suelos",
      value: "suelos",
      content: (
        <div className="w-full bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Recuperación de Suelos</h2>
            <p className="text-neutral-500 font-medium text-lg max-w-2xl">
              Tratamientos biológicos y químicos orientados a optimizar la calidad biológica y físico-química del fondo de las piscinas de cultivo.
            </p>
          </div>
          {renderMediaGrid(suelosMedia)}
        </div>
      ),
    },
    {
      title: "Tratamiento de Agua",
      value: "agua",
      content: (
        <div className="w-full bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-neutral-100">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Tratamiento de Agua</h2>
            <p className="text-neutral-500 font-medium text-lg max-w-2xl">
              Soluciones integrales para el control bacteriano, mejora de la oxigenación y establecimiento de un balance biológico óptimo en el agua.
            </p>
          </div>
          {renderMediaGrid(aguaMedia)}
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full min-h-screen font-sans flex-col bg-brand-light text-brand-dark relative overflow-hidden">
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
            className="mb-16 md:mb-24 text-center"
          >
            <span className="inline-block px-5 py-2.5 bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-8">
               Bioremediation & Treatments
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none">
              Productos <br className="hidden md:block"/>
              <span className="text-brand-primary">Biológicos</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-lg md:text-xl leading-relaxed opacity-80 px-4">
              Catálogo visual de nuestros tratamientos especializados de alto impacto para la recuperación de suelos y control biológico del agua en la acuacultura.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto mb-20 relative">
            <Tabs 
              tabs={tabsContent} 
              containerClassName="bg-white/40 backdrop-blur-xl p-2 rounded-full border border-white/20 shadow-2xl overflow-x-auto no-visible-scrollbar"
              tabClassName="transition-all duration-500 hover:scale-105 active:scale-95"
              activeTabClassName="bg-brand-primary shadow-[0_10px_25px_rgba(20,184,166,0.3)]"
              contentClassName="mt-12 md:mt-16"
            />
          </div>
        </main>
      </div>

      {/* Media Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[95vw] lg:max-w-[75vw] h-[85vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full pointer-events-auto">
                <button 
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 md:-top-16 right-0 md:-right-8 text-white/50 hover:text-brand-accent transition-all p-3 hover:rotate-90 hover:scale-125 z-10"
                >
                  <svg className="w-10 h-10 md:w-14 md:h-14 drop-shadow-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <div className="flex-1 min-h-0 w-full flex justify-center items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden bg-black/90">
                  {selectedMedia.type === "image" ? (
                    <img 
                      src={selectedMedia.src} 
                      alt={selectedMedia.title} 
                      className="w-full h-full object-contain rounded-2xl ring-1 ring-white/10 p-2 md:p-4"
                    />
                  ) : (
                    <video 
                      src={selectedMedia.src}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain rounded-2xl ring-1 ring-white/10 bg-black"
                    />
                  )}
                </div>
                
                <div className="mt-6 md:mt-8 flex-shrink-0 text-center bg-brand-primary/10 px-8 py-3 rounded-full border border-brand-primary/30 backdrop-blur-xl">
                  <h3 className="text-white text-xl md:text-2xl font-black tracking-tight">{selectedMedia.title}</h3>
                  <p className="text-brand-accent/80 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1.5">
                    {selectedMedia.type === "image" ? "Haz clic fuera para cerrar" : "Reproductor de Video"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
