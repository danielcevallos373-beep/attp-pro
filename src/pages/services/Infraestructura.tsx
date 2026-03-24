import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Infraestructura() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen font-sans flex-col bg-brand-light text-brand-dark overflow-hidden relative">
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 pb-20">
        <div className="bg-brand-dark rounded-b-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(20,184,166,1)_0%,transparent_50%)]" />
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>
        
        <main className="flex-1 p-6 md:p-14 lg:p-24">
          <div className="mb-24 text-center">
            <span className="inline-block px-5 py-2.5 bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-[0.3em] uppercase rounded-full mb-8 animate-fade-in">
               Tech Solutions & Infrastructure
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none animate-fade-in-up">
              Infraestructura <br className="hidden md:block"/>
              <span className="text-brand-primary">Digital</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-xl leading-relaxed opacity-80 animate-fade-in-up">
              Instalación y despliegue de redes sensorizadas, conectividad IoT de última generación y telemetría en tiempo real para tu granja.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:-translate-y-1 transition-transform cursor-pointer text-center">
              <div className="w-16 h-16 mx-auto bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Integración IoT</h2>
              <p className="text-neutral-600 text-sm">Conexión y monitoreo de sensores inteligentes en piscinas.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:-translate-y-1 transition-transform cursor-pointer text-center">
              <div className="w-16 h-16 mx-auto bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Gestión de Bases de Datos</h2>
              <p className="text-neutral-600 text-sm">Estructuración y almacenamiento seguro de datos históricos.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:-translate-y-1 transition-transform cursor-pointer text-center">
              <div className="w-16 h-16 mx-auto bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h2 className="text-xl font-bold mb-2">App's y API's</h2>
              <p className="text-neutral-600 text-sm">Desarrollo de interfaces personalizadas y conexión entre sistemas.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
