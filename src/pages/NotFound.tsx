import { Link } from "react-router-dom";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function NotFound() {
  return (
    <AuroraBackground>
      <div className="relative z-50 w-full h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-[10rem] font-bold text-[#39FF14] drop-shadow-[0_0_30px_#39FF14] leading-none">
          404
        </h1>
        <p className="text-2xl text-white font-light">
          Página no encontrada
        </p>
        <p className="text-slate-400 text-sm max-w-sm">
          La ruta que buscas no existe. Regresa al inicio para continuar.
        </p>
        <Link
          to="/"
          className="mt-4 px-8 py-3 border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold drop-shadow-[0_0_8px_#39FF14]"
        >
          Volver al inicio
        </Link>
      </div>
    </AuroraBackground>
  );
}
