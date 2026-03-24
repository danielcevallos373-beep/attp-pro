import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconLeaf,
  IconChartBar,
  IconServer,
  IconSchool,
  IconTrendingUp,
  IconBox,
  IconHome,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import shrimplicityLogo from "../assets/images/LogoShrimplicitySinFondo.png";
import logoImg from "../assets/images/Logo1.jpg";

interface AppSidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AppSidebar({ open, setOpen }: AppSidebarProps) {
  const links = [
    {
      label: "Asesorías de Campo",
      href: "/asesorias",
      icon: <IconLeaf className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Análisis de Datos",
      href: "/analisis-datos",
      icon: <IconChartBar className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Infraestructura Digital",
      href: "/infraestructura",
      icon: <IconServer className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Capacitaciones Especializadas",
      href: "/capacitaciones",
      icon: <IconSchool className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Benchmarking",
      href: "/benchmarking",
      icon: <IconTrendingUp className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Productos",
      href: "/productos",
      icon: <IconBox className="h-5 w-5 shrink-0 text-brand-primary" />,
    },
    {
      label: "Shrimplicity",
      href: "/shrimplicity",
      icon: <img src={shrimplicityLogo} alt="Shrimplicity" className="h-5 w-5 shrink-0 object-contain" />,
      onClick: () => sessionStorage.setItem("shrimplicity_audio", "1"),
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Logo />
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            className="text-sm"
            link={{
              label: "AT&TP",
              href: "#",
              icon: (
                <img
                  src={logoImg}
                  className="h-7 w-7 shrink-0 rounded-full object-cover shadow-sm border border-neutral-200"
                  width={50}
                  height={50}
                  alt="AT&TP Logo"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 font-normal text-black"
    >
      <IconHome className="h-5 w-5 shrink-0 text-brand-primary" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-brand-dark dark:text-white text-sm"
      >
        Home
      </motion.span>
    </a>
  );
};
