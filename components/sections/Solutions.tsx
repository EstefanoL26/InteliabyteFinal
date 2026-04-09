"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RefreshCw, MessageCircle, ShieldAlert, BarChart2,
  Settings, Globe2, BrainCircuit, Cloud, ArrowRight
} from "lucide-react";

const solutions = [
  {
    icon: RefreshCw,
    title: "Transformación Digital",
    description: "Modernizamos procesos heredados con tecnología cloud, automatización e IA. Migramos sin disrupciones y con resultados medibles desde el primer mes.",
    tags: ["Cloud Migration", "Legacy Modernization", "Process Redesign"],
    color: "#0099cc",
  },
  {
    icon: MessageCircle,
    title: "Atención Automatizada",
    description: "Bots conversacionales e IVR inteligente que resuelven el 70% de consultas sin agente humano. Disponibles 24/7 con NLP de última generación.",
    tags: ["Chatbot IA", "Voice Bot", "WhatsApp Business"],
    color: "#a78bfa",
  },
  {
    icon: ShieldAlert,
    title: "Ciberseguridad Empresarial",
    description: "SOC gestionado, análisis de amenazas y respuesta a incidentes para organizaciones que no pueden comprometer su seguridad.",
    tags: ["SOC as a Service", "SIEM", "Threat Intelligence"],
    color: "#f59e0b",
  },
  {
    icon: BarChart2,
    title: "Gestión Operativa Inteligente",
    description: "Plataformas de gestión con IA que unifican datos, automatizan decisiones y ofrecen visibilidad total de la operación en tiempo real.",
    tags: ["Dashboard Ejecutivo", "KPI Management", "Analytics"],
    color: "#22c55e",
  },
  {
    icon: Settings,
    title: "Automatización de Procesos",
    description: "RPA, BPM y orquestación de workflows para eliminar tareas manuales, reducir errores y liberar a tu equipo para trabajo de mayor valor.",
    tags: ["RPA", "BPM", "Workflow Automation"],
    color: "#0099cc",
  },
  {
    icon: Globe2,
    title: "Omnicanalidad",
    description: "Unificamos todos los canales de contacto —voz, chat, email, WhatsApp, web— en una sola plataforma con historial unificado del cliente.",
    tags: ["Omnicanal", "CRM Unificado", "Contact Center"],
    color: "#7c3aed",
  },
  {
    icon: BrainCircuit,
    title: "Asistentes Virtuales con IA",
    description: "Agentes inteligentes personalizados con LLMs que aprenden de tu negocio, atienden clientes, negocian y cierran operaciones de forma autónoma.",
    tags: ["LLM Enterprise", "AI Agents", "Auto-negociación"],
    color: "#a78bfa",
  },
  {
    icon: Cloud,
    title: "Infraestructura y Soporte",
    description: "Gestión integral de infraestructura cloud y on-premise con soporte especializado, monitoreo proactivo y continuidad de negocio garantizada.",
    tags: ["Cloud Management", "24/7 Support", "Business Continuity"],
    color: "#22c55e",
  },
];

function SolutionCard({ item, index }: { item: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group card-hover glass rounded-2xl p-6 border border-[rgba(255,255,255,0.62)] hover:border-opacity-100 relative overflow-hidden cursor-pointer"
      style={{ "--hover-color": item.color } as React.CSSProperties}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
      >
        <item.icon className="w-5.5 h-5.5" style={{ color: item.color, width: 22, height: 22 }} />
      </div>

      <h3 className="font-display text-sm font-bold text-[#0f1a2e] mb-2 leading-snug">{item.title}</h3>
      <p className="text-[12.5px] text-[rgba(15,26,46,0.48)] font-body leading-relaxed mb-4">{item.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((t) => (
          <span
            key={t}
            className="text-[9px] px-2 py-0.5 rounded-md font-body"
            style={{ color: `${item.color}cc`, background: `${item.color}0f`, border: `1px solid ${item.color}20` }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4" style={{ color: item.color }} />
      </div>

      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
        style={{ background: item.color }}
      />
    </motion.div>
  );
}

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="soluciones" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] orb bg-[#0099cc] opacity-50" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] orb bg-violet-200 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">
              Soluciones empresariales
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Resolvemos </span>
            <span className="gradient-text">Cada Desafío</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.52)] text-lg max-w-2xl mx-auto font-body">
            Desde la estrategia hasta la implementación, ofrecemos soluciones completas
            para cada necesidad de la empresa moderna.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((item, i) => (
            <SolutionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
