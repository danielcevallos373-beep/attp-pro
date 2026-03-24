import { createContext, useContext } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarContextProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

import { AnimatePresence, motion } from "motion/react";

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate = true,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-[100] h-full flex flex-col w-[280px] bg-brand-light dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 shadow-2xl"
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SidebarContext.Provider>
  );
};

export const SidebarBody = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full flex flex-col p-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
}: {
  link: { label: string; href: string; icon: ReactNode; onClick?: () => void };
  className?: string;
}) => {
  return (
    <Link
      to={link.href}
      onClick={link.onClick}
      className={cn(
        "flex items-center gap-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors",
        className
      )}
    >
      {link.icon}
      <span className="text-neutral-700 dark:text-neutral-200 text-lg md:text-xl font-medium whitespace-pre">
        {link.label}
      </span>
    </Link>
  );
};
