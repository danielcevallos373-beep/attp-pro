import { useState } from "react";

export default function RegistroDemo() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // URL generada en Google Apps Script (Sistema de Moderación)
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRUC_2Rg-xng-LaccM_QtZ1YL7s0Jtibz4gucodPqpJ083y6kSh61vkySa-IBhofjE/exec";

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. Verificación de email legítimo
    if (!validateEmail(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setStatus("loading");

    try {
      // Enviamos la solicitud al script de moderación
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      // Al usar no-cors, no podemos leer la respuesta JSON, 
      // pero si no entra al catch, asumimos éxito.
      setStatus("success");
    } catch (error) {
      console.error("Error en el registro:", error);
      setStatus("error");
      setErrorMessage("Hubo un problema al enviar la solicitud. Inténtalo de nuevo.");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto text-center p-10 border border-[#39FF14]/30 bg-black/60 backdrop-blur-xl rounded-2xl shadow-[0_0_20px_rgba(57,255,20,0.1)]">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-[#39FF14] font-glacial font-bold text-2xl mb-3">Solicitud Recibida</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Hemos enviado tu perfil para revisión técnica. Recibirás un correo una vez que <strong>Daniel Cevallos</strong> apruebe tu acceso a la plataforma.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
      <div className="mb-8">
        <h2 className="text-3xl font-glacial font-bold text-white mb-2">Acceso a Demo</h2>
        <p className="text-slate-400 text-xs uppercase tracking-widest">Acuicultura de Precisión</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            disabled={status === "loading"}
            className={`w-full bg-white/5 border ${errorMessage ? 'border-red-500' : 'border-white/10'} p-4 rounded-xl text-white outline-none focus:border-[#39FF14] transition-all placeholder:text-slate-600`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorMessage && (
            <span className="text-red-500 text-[10px] mt-1 ml-1 absolute -bottom-5 left-0 italic">
              {errorMessage}
            </span>
          )}
        </div>

        <button 
          type="submit"
          disabled={status === "loading"}
          className={`mt-4 w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all transform active:scale-95 ${
            status === "loading" 
            ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
            : "bg-[#39FF14] text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
          }`}
        >
          {status === "loading" ? "Procesando..." : "Solicitar Aprobación"}
        </button>
      </form>
      
      <p className="mt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest leading-tight">
        Sujeto a validación del administrador
      </p>
    </div>
  );
}