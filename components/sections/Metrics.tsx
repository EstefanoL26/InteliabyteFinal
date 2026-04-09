"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 99.9, suffix: "%", label: "Disponibilidad SLA", sub: "Uptime garantizado" },
  { value: 40, suffix: "%", label: "Reducción de costos", sub: "Promedio por cliente" },
  { value: 60, suffix: "%", label: "Automatización", sub: "De procesos operativos" },
  { value: 35, suffix: "%", label: "Mejora en atención", sub: "Satisfacción del cliente" },
  { value: 200, suffix: "+", label: "Proyectos", sub: "Implementaciones exitosas" },
  { value: 24, suffix: "/7", label: "Soporte activo", sub: "Sin interrupciones" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl lg:text-5xl font-bold gradient-text">
      {value % 1 !== 0 ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-14 relative overflow-hidden">
      {/* Gradient strip background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,153,204,0.05)] via-[rgba(124,58,237,0.06)] to-[rgba(0,212,255,0.04)]" />
      <div className="absolute inset-0 border-y border-[rgba(0,153,204,0.12)]" />
      <div className="absolute inset-0 bg-tech-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-9"
        >
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-[#0f1a2e]">
            Resultados que <span className="gradient-text">hablan solos</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.48)] mt-3 font-body">
            Métricas reales de nuestras implementaciones enterprise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="glass rounded-2xl p-6 border border-[rgba(0,153,204,0.15)] hover:border-[rgba(0,153,204,0.26)] transition-all duration-300 hover:-translate-y-1">
                <Counter value={m.value} suffix={m.suffix} />
                <div className="font-display text-xs font-semibold text-[#0f1a2e] mt-2 tracking-wide">{m.label}</div>
                <div className="text-[10px] text-[rgba(15,26,46,0.38)] font-body mt-1">{m.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
