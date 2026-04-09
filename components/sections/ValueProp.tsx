"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb, Building2, Rocket, Target, Brain,
  Lock, HeadphonesIcon, Layers
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación Aplicada",
    description: "Adoptamos tecnologías emergentes y las convertimos en soluciones concretas con impacto real en el negocio.",
    color: "#0099cc",
    gradient: "from-[#0099cc]/20 to-transparent",
  },
  {
    icon: Building2,
    title: "Soluciones Enterprise",
    description: "Arquitecturas diseñadas para bancos, financieras y corporativos con los más altos estándares de calidad.",
    color: "#7c3aed",
    gradient: "from-[#7c3aed]/20 to-transparent",
  },
  {
    icon: Rocket,
    title: "Implementación Ágil",
    description: "Desplegamos en días, no meses. Metodologías modernas que minimizan riesgos y maximizan el time-to-value.",
    color: "#0099cc",
    gradient: "from-[#0099cc]/15 to-transparent",
  },
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada implementación está orientada a KPIs tangibles: eficiencia, reducción de costos y crecimiento.",
    color: "#22c55e",
    gradient: "from-[#22c55e]/15 to-transparent",
  },
  {
    icon: Brain,
    title: "Integración de IA",
    description: "Modelos de inteligencia artificial integrados en cada capa de la operación para decisiones más inteligentes.",
    color: "#a78bfa",
    gradient: "from-[#a78bfa]/20 to-transparent",
  },
  {
    icon: Lock,
    title: "Seguridad Corporativa",
    description: "Protección de nivel bancario con cumplimiento de normativas internacionales y monitoreo continuo.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b]/15 to-transparent",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte Especializado",
    description: "Equipo dedicado de ingenieros certificados con SLA garantizados y escalamiento inmediato.",
    color: "#0099cc",
    gradient: "from-[#0099cc]/15 to-transparent",
  },
  {
    icon: Layers,
    title: "Arquitectura Escalable",
    description: "Infraestructura cloud-native que crece con tu empresa sin degradación de rendimiento ni límites artificiales.",
    color: "#7c3aed",
    gradient: "from-[#7c3aed]/15 to-transparent",
  },
];

function ValueCard({ item, index }: { item: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="card-hover glass rounded-2xl p-6 border border-[rgba(255,255,255,0.62)] relative overflow-hidden group"
    >
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${item.gradient.replace("from-", "from-").replace("/20", "/40").replace("/15", "/30")} via-transparent to-transparent`} />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
        style={{ background: `${item.color}18` }}
      >
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `${item.color}10`, boxShadow: `0 0 20px ${item.color}30` }}
        />
      </div>

      <h3 className="font-display text-sm font-bold text-[#0f1a2e] mb-2 tracking-wide">
        {item.title}
      </h3>
      <p className="text-[13px] text-[rgba(15,26,46,0.52)] font-body leading-relaxed">
        {item.description}
      </p>

      {/* Corner glow on hover */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: item.color }}
      />
    </motion.div>
  );
}

export default function ValueProp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative overflow-hidden bg-tech-grid">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] orb bg-[#0099cc] opacity-50" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] orb bg-violet-200 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">
              Por qué somos superiores
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">La ventaja </span>
            <span className="gradient-text">Inteliabyte</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.52)] text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Combinamos visión estratégica, tecnología de vanguardia y ejecución impecable
            para entregar resultados que otros prometen pero no alcanzan.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((item, i) => (
            <ValueCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
