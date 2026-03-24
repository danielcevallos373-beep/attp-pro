import { Search, Menu } from "lucide-react";
import logoImg from "../assets/images/Logo1.jpg";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6 bg-brand-dark/40 backdrop-blur-md z-50 border-b border-white/20 text-brand-light">
      {/* Lado Izquierdo: Menu Mobile & Search */}
      <div className="flex items-center gap-6">
        <Menu 
          onClick={onMenuClick}
          className="w-8 h-8 cursor-pointer hover:text-brand-accent transition-colors duration-200" 
        />
        <Search className="w-8 h-8 cursor-pointer hidden md:block hover:text-brand-accent transition-colors duration-200" />
      </div>

      {/* Centro: Logo (AT&TP) */}
      <div className="flex items-center justify-center pointer-events-auto">
        <img 
          src={logoImg} 
          alt="AT&TP Logo" 
          className="h-14 md:h-20 aspect-square object-cover rounded-full shadow-xl border border-white/10" 
        />
      </div>

      {/* Lado Derecho: Placeholder to maintain flex-between balance since icons were removed */}
      <div className="flex items-center gap-6 w-8 md:w-16">
      </div>
    </nav>
  );
}