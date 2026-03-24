"use client";
import React, { useState, useRef, useEffect } from "react";
import { IconLoader2, IconMaximize, IconMinimize, IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

const CarouselControl = ({ type, title, handleClick, disabled }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-dark/90 backdrop-blur-xl border border-brand-primary/50 text-brand-primary rounded-full hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 relative z-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-30 disabled:cursor-not-allowed`}
      title={title}
      onClick={handleClick}
      disabled={disabled}
    >
      {type === "previous" ? <IconChevronLeft className="w-6 h-6" stroke={3} /> : <IconChevronRight className="w-6 h-6" stroke={3} />}
    </button>
  );
};

export interface PdfCarouselProps {
  pdfFile: string;
  titlePrefix?: string;
  onPageClick?: (pageNumber: number) => void;
}

export function PdfCarousel({ pdfFile, titlePrefix = "Página", onPageClick }: PdfCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pageDimensions, setPageDimensions] = useState({ width: 0, height: 0 });
  
  const carouselWidthRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(450);

  useEffect(() => {
    if (!carouselWidthRef.current) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      if (width > 0) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setCarouselWidth(width);
        }, 30);
      }
    });
    observer.observe(carouselWidthRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const handlePreviousClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 < 0 ? numPages - 1 : prev - 1));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1 === numPages ? 0 : prev + 1));
  };

  const handlePageLoadSuccess = (page: any) => {
    const w = page.originalWidth || (page.view ? page.view[2] : 0) || page.width || 0;
    const h = page.originalHeight || (page.view ? page.view[3] : 0) || page.height || 0;
    if (page.pageNumber === 1 && w > 0 && h > 0) {
      setPageDimensions({ width: w, height: h });
      setIsLoaded(true);
    }
  };

  const openExpandedView = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsExpanded(true);
  };

  const closeExpandedView = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsExpanded(false);
    setZoomLevel(1);
  };

  const aspectRatio = pageDimensions.width > 0 ? pageDimensions.width / pageDimensions.height : 1;
  const isLandscape = aspectRatio > 1;

  const renderPdfSlide = (index: number) => {
    return (
      <div 
        className="relative w-full flex flex-col justify-center items-center p-4 md:p-8 cursor-pointer select-none"
        onClick={() => {
          if (onPageClick) onPageClick(index + 1);
          openExpandedView();
        }}
      >
        <div 
          className="relative w-full bg-white rounded-xl shadow-xl border border-white/10 group/page overflow-hidden flex items-center justify-center transition-all duration-300"
          style={{ maxWidth: isLandscape ? '800px' : '450px', minHeight: '20vh' }}
        >
          <Page
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={carouselWidth}
            className="flex justify-center items-center pointer-events-none"
            onLoadSuccess={index === 0 ? handlePageLoadSuccess : undefined}
            loading={
              <div className="w-full h-40 bg-neutral-900 flex items-center justify-center">
                <IconLoader2 className="w-8 h-8 animate-spin text-brand-primary/50" />
              </div>
            }
          />
          <div 
             className="absolute inset-0 bg-brand-dark/0 group-hover/page:bg-brand-dark/30 transition-all flex items-center justify-center opacity-0 group-hover/page:opacity-100 duration-300 z-10"
             onClick={(e) => {
               e.stopPropagation();
               if (onPageClick) onPageClick(index + 1);
               openExpandedView();
             }}
          >
             <div className="bg-white/95 text-brand-dark px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover/page:translate-y-0 transition-transform">
               <IconMaximize className="w-4 h-4" />
               Ampliar Documento
             </div>
          </div>
        </div>

         <div className="mt-6 flex flex-col w-full px-2" style={{ maxWidth: isLandscape ? '800px' : '450px' }}>
             <span className="text-[10px] text-brand-primary font-black uppercase tracking-[0.4em] mb-1 opacity-80">Vista Previa</span>
             <h2 className="text-xl font-bold text-white tracking-tighter italic uppercase leading-tight">
               {titlePrefix} {index + 1}
             </h2>
         </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Document
        file={pdfFile}
        className="w-full flex flex-col items-center"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex flex-col items-center justify-center w-full max-w-[500px] aspect-[1/1.2] bg-neutral-900/50 rounded-[2rem] border border-white/5 animate-pulse">
             <IconLoader2 className="w-10 h-10 animate-spin text-brand-primary opacity-50 mb-4" />
             <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px]">Cargando Documento...</p>
          </div>
        }
      >
        {numPages > 0 && (
          <div className="flex flex-col items-center w-full">
            <div className="relative w-full flex items-center justify-center py-6">
              <div className="absolute left-0 md:-left-4 lg:-left-12 z-40">
                <CarouselControl type="previous" title="Anterior" handleClick={handlePreviousClick} />
              </div>

              <div 
                ref={carouselWidthRef}
                className={`relative w-full overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 shadow-3xl transition-all duration-700 ease-out ${!isLoaded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                style={{ maxWidth: isLandscape ? '900px' : '480px', margin: '0 auto' }}
              >
                <ul
                  className="flex w-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] items-center"
                  style={{
                    width: `${numPages * 100}%`,
                    transform: `translateX(-${current * (100 / numPages)}%)`,
                  }}
                >
                  {Array.from({ length: numPages }).map((_, index) => (
                    <li
                      key={index}
                      className={`flex-shrink-0 transition-all duration-700 ${current !== index ? 'opacity-20 scale-90 blur-[2px] pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}
                      style={{ width: `${100 / numPages}%` }}
                    >
                      {renderPdfSlide(index)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute right-0 md:-right-4 lg:-right-12 z-40">
                <CarouselControl type="next" title="Siguiente" handleClick={handleNextClick} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-4 pb-6 w-full max-w-[240px]">
              <div className="font-bold text-white/30 text-[10px] tracking-[0.5em] uppercase tabular-nums">
                {current + 1} / {numPages}
              </div>
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-primary" 
                  initial={false}
                  animate={{ width: `${((current + 1) / numPages) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        )}

        {typeof document !== 'undefined' && createPortal(
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] bg-brand-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center p-4 md:p-10"
                onClick={closeExpandedView}
              >
                <div
                  className="relative w-full max-w-[95vw] h-full flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="flex flex-col hidden sm:flex">
                    <span className="text-brand-primary font-black text-[10px] uppercase tracking-[0.4em] mb-1">{titlePrefix}</span>
                    <h3 className="text-white text-3xl font-black tracking-tighter uppercase">{titlePrefix} {current + 1} <span className="text-white/20 ml-2 italic">/ {numPages}</span></h3>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <button 
                      onClick={closeExpandedView}
                      className="w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-90 hover:bg-red-500 transition-all shadow-xl"
                    >
                      <IconX size={24} stroke={3} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-0 relative flex items-center justify-center bg-black/20 rounded-3xl border border-white/5 overflow-hidden">
                   <div className="absolute left-0 md:left-4 z-50">
                     <CarouselControl type="previous" title="Anterior" handleClick={handlePreviousClick} disabled={current === 0} />
                   </div>
                   
                   <div 
                     className={`w-full h-full p-2 sm:p-6 overflow-auto ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                     onClick={() => setZoomLevel(prev => prev === 1 ? 1.8 : 1)}
                   >
                     <div className="flex justify-center items-start min-h-full transition-all duration-300">
                         <Page 
                           pageNumber={current + 1}
                           renderTextLayer={false}
                           renderAnnotationLayer={false}
                           scale={zoomLevel}
                           width={typeof window !== 'undefined' ? (isLandscape ? Math.min(window.innerWidth * 0.85, 1600) : Math.min(window.innerWidth * 0.9, 1200)) : undefined}
                           className={`shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden bg-white ${zoomLevel === 1 ? '[&>.react-pdf__Page__canvas]:!w-full [&>.react-pdf__Page__canvas]:!h-auto' : ''}`}
                           loading={<IconLoader2 className="animate-spin text-brand-primary" size={40} />}
                         />
                     </div>
                   </div>

                   <div className="absolute right-0 md:right-4 z-50">
                     <CarouselControl type="next" title="Siguiente" handleClick={handleNextClick} disabled={current === numPages - 1} />
                   </div>
                </div>

                <div className="mt-8 hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                   <IconMinimize className="text-brand-primary w-4 h-4" />
                   <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Haz clic en la página para acercar. Haz clic en la X para cerrar</p>
                </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </Document>
    </div>
  );
}
