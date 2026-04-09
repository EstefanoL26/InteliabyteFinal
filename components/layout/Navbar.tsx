"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Servicios",   href: "#servicios" },
  { label: "Productos",   href: "#productos" },
  { label: "Demo",        href: "#demo" },
  { label: "Soluciones",  href: "#soluciones" },
  { label: "Nosotros",    href: "#nosotros" },
  { label: "Casos de uso",href: "#casos" },
  { label: "Contacto",    href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl border-b shadow-lg"
            : "bg-transparent"
        }`}
        style={scrolled ? {
          background: "rgba(255,255,255,0.70)",
          borderColor: "rgba(0,153,204,0.15)",
          boxShadow: "0 4px 24px rgba(100,120,200,0.12)"
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a href="#inicio" className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0099cc] to-[#7c3aed] rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wider text-[#0f1a2e]">
                  INTELIA<span className="text-[#0099cc]">BYTE</span>
                </span>
                <div className="text-[9px] tracking-[0.2em] text-[rgba(0,153,204,0.7)] uppercase font-body">
                  Enterprise Technology
                </div>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="relative px-3 py-2 text-[13px] font-body font-medium text-[rgba(15,26,46,0.60)] hover:text-[#0099cc] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#0099cc] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a href="#contacto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="btn-secondary text-[11px] px-5 py-2.5">
                Hablar con asesor
              </motion.a>
              <motion.a href="#demo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="btn-primary text-[11px] px-5 py-2.5">
                Solicitar Demo
              </motion.a>
            </div>

            {/* Mobile */}
            <button className="lg:hidden p-2 text-[#0f1a2e]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 glass border-b p-6"
            style={{ borderColor: "rgba(0,153,204,0.15)" }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-[rgba(15,26,46,0.75)] hover:text-[#0099cc] hover:bg-[rgba(0,153,204,0.06)] rounded-lg transition-all duration-200 text-sm font-medium border border-transparent hover:border-[rgba(0,153,204,0.12)]">
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[rgba(0,153,204,0.12)]">
                <a href="#demo" className="btn-primary text-center text-[12px] justify-center">Solicitar Demo</a>
                <a href="#contacto" className="btn-secondary text-center text-[12px] justify-center">Hablar con asesor</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
