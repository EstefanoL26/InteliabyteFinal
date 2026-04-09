"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, ShieldCheck, Headphones, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Server,
    category: "Servicio",
    name: "Administración de Infraestructura Asistida",
    tagline: "Operaciones sin interrupciones, 24/7",
    description:
      "Gestión proactiva de tu infraestructura tecnológica con monitoreo continuo, automatización de tareas críticas y respuesta inmediata ante incidentes. Garantizamos disponibilidad máxima y rendimiento óptimo.",
    benefits: [
      "Monitoreo 24/7 con alertas inteligentes",
      "Automatización de mantenimiento preventivo",
      "SLA garantizado +99.9% uptime",
      "Escalamiento bajo demanda",
      "Reportería ejecutiva mensual",
    ],
    color: "#0099cc",
    accentColor: "rgba(0,153,204,0.16)",
    borderColor: "rgba(0,212,255,0.18)",
  },
  {
    icon: ShieldCheck,
    category: "Servicio",
    name: "Administración Ciberseguridad Asistida",
    tagline: "Protección enterprise en tiempo real",
    description:
      "Ciberseguridad gestionada con análisis de amenazas avanzadas, respuesta a incidentes y cumplimiento normativo. Protección integral para datos, redes y sistemas críticos de tu organización.",
    benefits: [
      "SOC as a Service — detección en tiempo real",
      "Análisis de vulnerabilidades continuo",
      "Respuesta y contención de incidentes",
      "Cumplimiento ISO 27001 / NIST",
      "Pentesting periódico incluido",
    ],
    color: "#f59e0b",
    accentColor: "rgba(245,158,11,0.10)",
    borderColor: "rgba(245,158,11,0.18)",
  },
  {
    icon: Headphones,
    category: "Servicio",
    name: "Soporte Técnico N1 en Sitio",
    tagline: "Presencia física, respuesta inmediata",
    description:
      "Personal técnico certificado en tus instalaciones para resolución inmediata de incidentes, soporte a usuarios finales y gestión del parque tecnológico con trazabilidad completa.",
    benefits: [
      "Técnicos certificados en sitio",
      "Gestión de tickets con SLA definidos",
      "Soporte a usuarios y endpoint",
      "Inventario tecnológico actualizado",
      "Informes de gestión periódicos",
    ],
    color: "#22c55e",
    accentColor: "rgba(34,197,94,0.10)",
    borderColor: "rgba(34,197,94,0.18)",
  },
  {
    icon: MessageSquare,
    category: "Servicio",
    name: "Autoatención Digital",
    tagline: "Agentes WhatsApp · Firma Digital",
    description:
      "Transformamos tu atención al cliente con agentes conversacionales inteligentes en WhatsApp y soluciones de firma digital que eliminan fricciones, aceleran procesos y mejoran la experiencia.",
    benefits: [
      "Agentes IA en WhatsApp Business",
      "Firma digital con validez legal",
      "Flujos de autogestión automatizados",
      "Integración con sistemas legados",
      "Dashboards de atención en tiempo real",
    ],
    color: "#a78bfa",
    accentColor: "rgba(167,139,250,0.12)",
    borderColor: "rgba(167,139,250,0.18)",
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="group relative glass rounded-2xl overflow-hidden card-hover"
      style={{ border: `1px solid ${svc.borderColor}` }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
      />

      <div className="p-8">
        {/* Category badge + icon */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: svc.accentColor, border: `1px solid ${svc.borderColor}` }}
          >
            <svc.icon className="w-7 h-7" style={{ color: svc.color }} />
          </div>
          <span
            className="text-[9px] font-display tracking-[0.15em] uppercase px-3 py-1 rounded-full"
            style={{ color: svc.color, background: svc.accentColor, border: `1px solid ${svc.borderColor}` }}
          >
            {svc.category}
          </span>
        </div>

        {/* Name & tagline */}
        <h3 className="font-display text-base font-bold text-[#0f1a2e] mb-1 leading-snug">
          {svc.name}
        </h3>
        <p className="text-[11px] font-body mb-4" style={{ color: svc.color }}>
          {svc.tagline}
        </p>

        {/* Description */}
        <p className="text-[13px] text-[rgba(15,26,46,0.52)] font-body leading-relaxed mb-6">
          {svc.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-8">
          {svc.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
              <span className="text-[12px] text-[rgba(15,26,46,0.58)] font-body">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-[12px] font-display font-semibold tracking-wider uppercase transition-all duration-300"
          style={{
            background: `${svc.accentColor}`,
            border: `1px solid ${svc.borderColor}`,
            color: svc.color,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = `${svc.color}22`;
            el.style.boxShadow = `0 0 20px ${svc.color}30`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = svc.accentColor;
            el.style.boxShadow = "none";
          }}
        >
          Más información
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-50" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] orb bg-[#0099cc] opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] orb bg-violet-200 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">
              Lo que hacemos
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Nuestros </span>
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.52)] text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Servicios gestionados de alto valor diseñados para empresas que no
            pueden permitirse la mediocridad tecnológica.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
