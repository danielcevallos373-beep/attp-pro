import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Asesorias from "./pages/services/Asesorias";
import AnalisisDatos from "./pages/services/AnalisisDatos";
import Infraestructura from "./pages/services/Infraestructura";
import Capacitaciones from "./pages/services/Capacitaciones";
import Benchmarking from "./pages/services/Benchmarking";
import Productos from "./pages/services/Productos";
import Shrimplicity from "./pages/services/Shrimplicity";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asesorias" element={<Asesorias />} />
        <Route path="/analisis-datos" element={<AnalisisDatos />} />
        <Route path="/infraestructura" element={<Infraestructura />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
        <Route path="/benchmarking" element={<Benchmarking />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/shrimplicity" element={<Shrimplicity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
