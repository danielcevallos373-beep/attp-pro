import { AppSidebar } from "../../components/AppSidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { motion } from "motion/react";
import { Tabs } from "../../components/ui/tabs";
import { PdfCarousel } from "../../components/ui/pdf-carousel";

const BenchmarkingPDF = "/benchmarking-planes.pdf";

/* ─── TYPES ─────────────────────────────────────────── */
interface Feature {
  label: string;
  highlight?: boolean;
}
interface PlanData {
  name: string;
  tagline: string;
  price: number;
  annualPrice: number;
  discount: string;
  color: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ReactNode;
  nivel: string;
  features: Feature[];
  insights: string[];
  kpis: { label: string; value: string }[];
}

/* ─── PLANS DATA (extracted from PDF) ───────────────────────────── */
const plans: PlanData[] = [
  {
    name: "Básico",
    tagline: "Comparativa regional de tendencias de producción",
    price: 300,
    annualPrice: 270,
    discount: "10% dto.",
    color: "brand-primary",
    accentColor: "text-brand-primary",
    badgeBg: "bg-brand-primary/10",
    badgeText: "text-brand-primary",
    nivel: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    features: [
      { label: "Reportes mensuales de costo de producción por talla" },
      { label: "Tendencias generales: Crecimiento, FCRe, Supervivencia, Biomasa" },
      { label: "Comparativa de producción a nivel nacional" },
      { label: "Acceso a dashboard básico de indicadores" },
    ],
    insights: [
      "Evolución mensual de métricas clave de producción",
      "Comparativa con estándares del mercado ecuatoriano",
    ],
    kpis: [
      { label: "Frecuencia de Reporte", value: "Mensual" },
      { label: "Indicadores", value: "4 KPIs" },
      { label: "Alcance", value: "Nacional" },
    ],
  },
  {
    name: "Estándar",
    tagline: "Segmentación por tamaño y componente climatológico",
    price: 700,
    annualPrice: 633,
    discount: "11% dto.",
    color: "brand-accent",
    accentColor: "text-brand-accent",
    badgeBg: "bg-brand-accent/10",
    badgeText: "text-brand-accent",
    nivel: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
    features: [
      { label: "Todo lo del plan Básico", highlight: true },
      { label: "Reportes por segmento y tamaño de empresa" },
      { label: "Componente climatológico por sector (Guayas, El Oro)" },
      { label: "Análisis de riesgo productivo por temporada" },
      { label: "Reportes quincenales con mayor granularidad" },
    ],
    insights: [
      "Desempeño por tamaño de productor",
      "Detección de peligros y ventanas de riesgo climatológico",
    ],
    kpis: [
      { label: "Frecuencia de Reporte", value: "Quincenal" },
      { label: "Sectores", value: "Guayas + El Oro" },
      { label: "Segmentación", value: "Por empresa" },
    ],
  },
  {
    name: "Premium",
    tagline: "Informes personalizados y soporte técnico prioritario",
    price: 1500,
    annualPrice: 1330,
    discount: "13% dto.",
    color: "indigo-500",
    accentColor: "text-indigo-500",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-600",
    nivel: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    features: [
      { label: "Todo lo del plan Estándar", highlight: true },
      { label: "Informes personalizados por Sistema de Producción" },
      { label: "Análisis por Sector y Marca de Alimento" },
      { label: "Soporte técnico prioritario para crisis sanitarias" },
      { label: "Dashboard en tiempo real con acceso multi-usuario" },
      { label: "Correlaciones clima-producción y segmentación de mercado" },
    ],
    insights: [
      "Segmentación de mercado por sistema productivo",
      "Correlaciones entre clima y desempeño de producción",
    ],
    kpis: [
      { label: "Frecuencia de Reporte", value: "Semanal" },
      { label: "Personalización", value: "Alta" },
      { label: "Soporte", value: "Prioritario" },
    ],
  },
  {
    name: "Enterprise",
    tagline: "Modelos predictivos, exportación y análisis de fases",
    price: 5000,
    annualPrice: 4000,
    discount: "25% dto.",
    color: "brand-dark",
    accentColor: "text-white",
    badgeBg: "bg-white/10",
    badgeText: "text-white",
    nivel: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    features: [
      { label: "Todo lo del plan Premium", highlight: true },
      { label: "Reportes por fase: Larva, Nursery y Engorde" },
      { label: "Predicciones mensuales de exportación para Ecuador" },
      { label: "Informes climatológicos multi-geografía" },
      { label: "Integración API completa con ERP / sistemas internos" },
      { label: "Biplot Canónico por Sector (análisis multivariante)" },
      { label: "Consultor dedicado y reuniones estratégicas mensuales" },
    ],
    insights: [
      "Modelos predictivos de exportación y demanda de alimento",
      "Análisis multivariante con Biplot Canónico por Sector",
    ],
    kpis: [
      { label: "Frecuencia de Reporte", value: "Tiempo Real" },
      { label: "API", value: "Integración Total" },
      { label: "Consultor", value: "Dedicado" },
    ],
  },
];

/* ─── ICON HELPERS ───────────────────────────── */
const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
  </svg>
);

/* ─── PLAN TAB CONTENT ──────────────────────────────────── */
function PlanContent({ plan, isDark = false }: { plan: PlanData; isDark?: boolean }) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div className={`w-full rounded-[2.5rem] shadow-2xl border overflow-hidden ${isDark ? "bg-brand-dark border-white/10" : "bg-slate-50 border-white/40"}`}>
      <div className={`p-6 md:p-10 ${isDark ? "" : ""}`}>
        <div className="max-w-7xl mx-auto space-y-14">

          {/* ── HERO PRICING BLOCK ── */}
          <section className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"} rounded-[2rem] border shadow-sm p-8 md:p-12 relative overflow-hidden group`}>
            <div className={`absolute top-0 right-0 w-72 h-72 ${isDark ? "bg-white/5" : "bg-brand-primary/5"} rounded-full -mr-36 -mt-36 blur-3xl group-hover:bg-brand-primary/10 transition-colors`}/>
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 relative z-10">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 ${plan.badgeBg} rounded-2xl flex items-center justify-center ${plan.accentColor}`}>
                  {plan.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${isDark ? "text-white/40" : "text-neutral-400"}`}>Plan {plan.nivel}</span>
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-black tracking-tighter ${isDark ? "text-white" : "text-brand-dark"}`}>{plan.name}</h2>
                  <p className={`text-sm font-medium mt-1 ${isDark ? "text-white/50" : "text-neutral-500"}`}>{plan.tagline}</p>
                </div>
              </div>

              {/* Billing toggle */}
              <div className="flex flex-col items-end gap-4">
                <div className={`flex items-center gap-2 ${isDark ? "bg-white/5 border-white/10" : "bg-neutral-100 border-neutral-200"} border rounded-full p-1`}>
                  <button
                    onClick={() => setBilling("monthly")}
                    className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${billing === "monthly" ? "bg-brand-primary text-white shadow-md" : isDark ? "text-white/50" : "text-neutral-500"}`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setBilling("annual")}
                    className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${billing === "annual" ? "bg-brand-primary text-white shadow-md" : isDark ? "text-white/50" : "text-neutral-500"}`}
                  >
                    Anual
                  </button>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-1.5 justify-end">
                    <span className={`text-5xl font-black tracking-tighter ${isDark ? "text-white" : "text-brand-dark"}`}>
                      ${billing === "annual" ? plan.annualPrice.toLocaleString() : plan.price.toLocaleString()}
                    </span>
                    <span className={`text-sm font-bold ${isDark ? "text-white/40" : "text-neutral-400"}`}>/mes</span>
                  </div>
                  {billing === "annual" && (
                    <span className="text-xs font-black text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                      {plan.discount} pagando anual
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* KPI chips */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {plan.kpis.map((kpi, i) => (
                <div key={i} className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl ${isDark ? "bg-white/5 border-white/10" : "bg-neutral-50 border-neutral-100"} border`}>
                  <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-neutral-400"}`}>{kpi.label}</span>
                  <span className={`text-sm font-black ${isDark ? "text-white" : "text-brand-dark"}`}>{kpi.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURES ── */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 ${plan.badgeBg} rounded-2xl flex items-center justify-center ${plan.accentColor} font-bold text-xl`}>
                {plan.nivel}
              </div>
              <h2 className={`text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-brand-dark"}`}>Servicios Incluidos</h2>
            </div>

            <div className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"} rounded-[2rem] border shadow-sm p-8 md:p-10`}>
              <ul className="space-y-4">
                {plan.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-3 ${f.highlight ? (isDark ? "text-brand-primary font-black" : "text-brand-primary font-black") : (isDark ? "text-white/80" : "text-neutral-700")} font-medium`}>
                    <span className={f.highlight ? "text-brand-primary" : plan.accentColor}>
                      <CheckIcon />
                    </span>
                    {f.label}
                    {f.highlight && (
                      <span className="ml-auto text-[9px] font-black uppercase tracking-[0.2em] bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded-full shrink-0">
                        Incluido
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── INSIGHTS ── */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 ${isDark ? "bg-brand-accent/20" : "bg-brand-accent/10"} rounded-2xl flex items-center justify-center text-brand-accent font-bold text-xl`}>✦</div>
              <h2 className={`text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-brand-dark"}`}>Insights Estratégicos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {plan.insights.map((ins, i) => (
                <div key={i} className={`${isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-200"} rounded-2xl border p-6 flex items-start gap-4 hover:shadow-md transition-all group`}>
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent font-bold text-sm shrink-0 group-hover:bg-brand-accent/20 transition-colors">→</div>
                  <p className={`text-sm font-semibold leading-relaxed ${isDark ? "text-white/70" : "text-neutral-600"}`}>{ins}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA FOOTER ── */}
          <div className={`${isDark ? "bg-white/5 border-white/10" : "bg-brand-dark border-white/10"} p-10 md:p-12 rounded-[3rem] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 border relative overflow-hidden group`}>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/10 rounded-full -ml-40 -mb-40 blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700 pointer-events-none"/>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-white mb-2 tracking-tight">¿Listo para comenzar?</h4>
              <p className="text-white/50 font-medium">Consulta el documento completo con todos los detalles del plan.</p>
            </div>
            <div className="flex gap-4 relative z-10 shrink-0">
              <a
                href={BenchmarkingPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all flex items-center gap-3 text-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                VER PDF
              </a>
              <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-black shadow-[0_10px_30px_rgba(20,184,166,0.4)] hover:shadow-[0_15px_40px_rgba(20,184,166,0.6)] hover:scale-105 active:scale-95 transition-all text-sm">
                CONTRATAR PLAN
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────── */
export default function Benchmarking() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabsContent = [
    {
      title: "Básico",
      value: "basico",
      content: <PlanContent plan={plans[0]} />,
    },
    {
      title: "Estándar",
      value: "estandar",
      content: <PlanContent plan={plans[1]} />,
    },
    {
      title: "Premium",
      value: "premium",
      content: <PlanContent plan={plans[2]} />,
    },
    {
      title: "Enterprise",
      value: "enterprise",
      content: <PlanContent plan={plans[3]} isDark />,
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
              Market Intelligence &amp; Subscriptions
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-none">
              Benchmarking <br className="hidden md:block" />
              <span className="text-brand-primary">Sectorial</span>
            </h1>
            <p className="max-w-3xl mx-auto text-neutral-500 font-bold text-xl leading-relaxed opacity-80">
              Accede a planes de suscripción para comparar tus métricas de éxito con los principales estándares de la industria acuícola ecuatoriana.
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

          {/* PDF CAROUSEL SECTION */}
          <div className="mt-32 max-w-7xl mx-auto">
             <div className="bg-brand-dark p-10 md:p-14 rounded-[3rem] shadow-2xl flex flex-col items-center gap-6 border border-white/10 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full -ml-48 -mb-48 blur-3xl group-hover:bg-brand-primary/20 transition-all duration-700 pointer-events-none" />
                
                <div className="text-center relative z-10 w-full mb-4">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shrink-0 shadow-inner mx-auto mb-6">
                    <svg className="w-10 h-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <h4 className="text-3xl font-black text-white mb-3 tracking-tight">Catálogo de Suscripciones</h4>
                  <p className="text-white/50 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                    Explora visualmente los detalles técnicos de cada plan. Navega en el carrusel o haz clic para expandir cualquier página informativa.
                  </p>
                </div>

                <div className="w-full relative z-10 flex justify-center py-4">
                  <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-[500px]">
                    <PdfCarousel 
                      pdfFile={BenchmarkingPDF} 
                      titlePrefix="Plan Detalle"
                    />
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a 
                    href={BenchmarkingPDF} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-brand-primary text-white border border-transparent rounded-2xl font-black shadow-[0_15px_40px_rgba(20,184,166,0.5)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.7)] hover:scale-105 active:scale-95 transition-all relative z-10 flex items-center gap-4 whitespace-nowrap group/btn leading-none"
                  >
                    DESCARGAR PDF
                    <svg className="w-6 h-6 transition-transform group-hover/btn:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </a>
                </div>
              </div>
          </div>
        </main>
      </div>

    </div>
  );
}
