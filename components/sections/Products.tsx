"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Phone, Bot, ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    badge: "Producto Flagship",
    category: "Plataforma SaaS",
    name: "Taurus Next",
    tagline: "Gestión operativa inteligente de cobranzas",
    description:
      "Plataforma empresarial de última generación para la gestión integral de cobranzas, operaciones y cartera. Con módulos de CRM, automatización de flujos, reportería avanzada e integración IA nativa.",
    benefits: [
      "CRM de cobranzas con IA predictiva",
      "Automatización de workflows complejos",
      "Dashboard ejecutivo en tiempo real",
      "Módulo de promesas y acuerdos",
      "Integración omnicanal completa",
      "Reportería regulatoria automatizada",
    ],
    useCases: ["Financieras y bancos", "Empresas de cobranzas", "Utilities y telecomunicaciones", "Retail con crédito propio"],
    color: "#0099cc",
    gradient: "from-[#0099cc] to-[#0099cc]",
    glow: "rgba(0,153,204,0.28)",
    featured: true,
  },
  {
    icon: Phone,
    badge: "Automatización IA",
    category: "Voice AI",
    name: "Voice Bot IVR",
    tagline: "Automatización de llamadas salientes inteligente",
    description:
      "Agente de voz con inteligencia artificial para campañas de cobranza, encuestas y notificaciones salientes. Conversaciones naturales, comprensión del lenguaje y escalamiento automático.",
    benefits: [
      "Voz natural con NLP avanzado",
      "Campañas salientes masivas",
      "Detección de intención en tiempo real",
      "Escalamiento a agente humano",
      "Panel de resultados de campaña",
      "Integración con marcadores predictivos",
    ],
    useCases: ["Cobranza preventiva", "Confirmación de citas", "Encuestas NPS", "Notificaciones masivas"],
    color: "#a78bfa",
    gradient: "from-[#7c3aed] to-[#a78bfa]",
    glow: "rgba(124,58,237,0.3)",
    featured: false,
  },
  {
    icon: Bot,
    badge: "IA Conversacional",
    category: "AI Agent",
    name: "Agente Negociador",
    tagline: "Negociación inteligente y acuerdos automáticos",
    description:
      "Agente de IA que negocia acuerdos de pago en tiempo real, generando propuestas personalizadas según el perfil del deudor, historial y capacidad de pago. Cierra más acuerdos con menos recursos.",
    benefits: [
      "Propuestas de pago personalizadas por IA",
      "Negociación multicanal (WhatsApp, web, IVR)",
      "Análisis de perfil crediticio en tiempo real",
      "Generación automática de acuerdos",
      "Integración con sistemas de pago",
      "Auditoría completa de interacciones",
    ],
    useCases: ["Negociación de deudas", "Reestructuración de cartera", "Acuerdos de pago", "Recuperación temprana"],
    color: "#22c55e",
    gradient: "from-[#16a34a] to-[#22c55e]",
    glow: "rgba(34,197,94,0.3)",
    featured: false,
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative glass rounded-2xl overflow-hidden card-hover flex flex-col ${
        product.featured ? "ring-1 ring-[rgba(0,153,204,0.28)]" : "border border-[rgba(255,255,255,0.07)]"
      }`}
    >
      {/* Featured glow */}
      {product.featured && (
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,153,204,0.05)] to-transparent pointer-events-none" />
      )}

      {/* Header gradient */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${product.color}15`, border: `1px solid ${product.color}30` }}
          >
            <product.icon className="w-7 h-7" style={{ color: product.color }} />
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="text-[9px] font-display tracking-[0.12em] uppercase px-3 py-1 rounded-full flex items-center gap-1.5"
              style={{ color: product.color, background: `${product.color}15`, border: `1px solid ${product.color}25` }}
            >
              {product.featured && <Sparkles className="w-2.5 h-2.5" />}
              {product.badge}
            </span>
            <span className="text-[9px] text-[rgba(15,26,46,0.32)] font-body tracking-wide">
              {product.category}
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-[#0f1a2e] mb-1">{product.name}</h3>
        <p className="text-[12px] font-body mb-4" style={{ color: product.color }}>
          {product.tagline}
        </p>
        <p className="text-[13px] text-[rgba(15,26,46,0.52)] font-body leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
              <span className="text-[12px] text-[rgba(15,26,46,0.58)] font-body">{b}</span>
            </li>
          ))}
        </ul>

        {/* Use cases */}
        <div className="mb-8">
          <p className="text-[10px] font-display tracking-widest text-[rgba(15,26,46,0.28)] uppercase mb-3">
            Casos de uso
          </p>
          <div className="flex flex-wrap gap-2">
            {product.useCases.map((uc) => (
              <span
                key={uc}
                className="text-[10px] px-2.5 py-1 rounded-lg font-body"
                style={{ background: `${product.color}10`, color: `${product.color}cc`, border: `1px solid ${product.color}20` }}
              >
                {uc}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <button
            className="w-full py-3 px-6 rounded-xl text-[12px] font-display font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${product.color}20, ${product.color}10)`,
              border: `1px solid ${product.color}35`,
              color: product.color,
            }}
          >
            Ver Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom accent glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="productos" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] orb bg-violet-200 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] orb bg-[#0099cc] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(124,58,237,0.25)] mb-6">
            <Star className="w-3 h-3 text-[#a78bfa]" />
            <span className="text-[11px] font-display tracking-[0.15em] text-[#a78bfa] uppercase">
              Tecnología propia
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Nuestros </span>
            <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.52)] text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Plataformas tecnológicas desarrolladas para resolver los desafíos más complejos
            de la operación empresarial moderna.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
