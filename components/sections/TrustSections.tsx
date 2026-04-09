"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, Award, Users, TrendingUp, Shield } from "lucide-react";

// ── WHY US ────────────────────────────────────────────────────────────
const whyItems = [
  { title: "Enfoque Consultivo", desc: "No vendemos tecnología, resolvemos problemas de negocio con estrategia, diseño y ejecución.", icon: "🎯" },
  { title: "Tecnología de Vanguardia", desc: "Utilizamos las últimas generaciones de IA, cloud y seguridad en cada solución que entregamos.", icon: "⚡" },
  { title: "Soluciones Integrales", desc: "Cubrimos todo el ciclo: estrategia, implementación, soporte y evolución continua.", icon: "🔄" },
  { title: "Diseño para Crecimiento", desc: "Arquitecturas que escalan con tu empresa, sin deuda técnica ni cuellos de botella.", icon: "📈" },
  { title: "Seguridad y Continuidad", desc: "Protección enterprise con cumplimiento normativo y planes de continuidad de negocio.", icon: "🛡️" },
  { title: "Automatización Inteligente", desc: "IA que aprende, se adapta y mejora continuamente los procesos que gestiona.", icon: "🤖" },
  { title: "UX y Eficiencia Operativa", desc: "Interfaces intuitivas que reducen la curva de aprendizaje y maximizan la adopción.", icon: "✨" },
  { title: "Atención Personalizada", desc: "Un equipo dedicado que conoce tu negocio y actúa como extensión de tu equipo de tecnología.", icon: "🤝" },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Ricardo Andrade",
    title: "CTO — Financiera Andina",
    text: "Inteliabyte transformó completamente nuestra operación de cobranzas. Con Taurus Next y el Voice Bot automatizamos el 65% de nuestras gestiones. Los resultados superaron las expectativas en el primer trimestre.",
    rating: 5,
    logo: "FA",
    color: "#0099cc",
  },
  {
    name: "Camila Vásquez",
    title: "Gerente de Operaciones — Grupo Empresarial Orión",
    text: "El nivel de soporte y la velocidad de implementación son excepcionales. El Agente Negociador de IA cerró más acuerdos en el primer mes que nuestro equipo anterior en un trimestre completo.",
    rating: 5,
    logo: "GO",
    color: "#a78bfa",
  },
  {
    name: "Sebastián Torres",
    title: "CISO — Banco Regional Austral",
    text: "La solución de ciberseguridad gestionada nos dio visibilidad total que nunca habíamos tenido. Detectaron y neutralizaron una amenaza crítica en menos de 12 minutos. Invaluable.",
    rating: 5,
    logo: "BA",
    color: "#f59e0b",
  },
  {
    name: "Daniela Moreno",
    title: "Directora Digital — Telecomunicaciones Sur",
    text: "La implementación del chatbot de WhatsApp redujo el 72% de las llamadas a nuestro call center. Los clientes están más satisfechos y los costos operativos bajaron dramáticamente.",
    rating: 5,
    logo: "TS",
    color: "#22c55e",
  },
];

const logos = ["BANCORP", "FINANCIERA+", "GROUPTECH", "ORION.SA", "TELCOM", "DATASYS"];

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb bg-[#0099cc] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
            <Award className="w-3 h-3 text-[#0099cc]" />
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">La diferencia</span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Por qué </span>
            <span className="gradient-text">Elegirnos</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.48)] text-lg max-w-xl mx-auto font-body">
            Más que un proveedor de tecnología, somos el socio estratégico que acelera
            tu crecimiento y protege tu operación.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-[rgba(255,255,255,0.62)] hover:border-[rgba(0,153,204,0.22)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-sm font-bold text-[#0f1a2e] mb-2">{item.title}</h3>
              <p className="text-[12.5px] text-[rgba(15,26,46,0.48)] font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb bg-violet-200 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
            <Users className="w-3 h-3 text-[#0099cc]" />
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">Clientes</span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Lo que dicen </span>
            <span className="gradient-text">Nuestros Clientes</span>
          </h2>
        </motion.div>

        {/* Logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {logos.map((logo, i) => (
            <div
              key={logo}
              className="glass rounded-xl px-6 py-3 border border-[rgba(255,255,255,0.62)] text-[11px] font-display tracking-widest text-[rgba(15,26,46,0.28)] hover:text-[rgba(15,26,46,0.58)] hover:border-[rgba(0,153,204,0.18)] transition-all duration-300"
            >
              {logo}
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6 border border-[rgba(255,255,255,0.62)] hover:border-opacity-100 card-hover relative"
              style={{ "--color": t.color } as React.CSSProperties}
            >
              <Quote className="w-5 h-5 mb-4 opacity-40" style={{ color: t.color }} />

              <p className="text-[12.5px] text-[rgba(15,26,46,0.62)] font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-display font-bold flex-shrink-0"
                  style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.logo}
                </div>
                <div>
                  <div className="text-[12px] font-display font-bold text-[#0f1a2e]">{t.name}</div>
                  <div className="text-[10px] text-[rgba(15,26,46,0.38)] font-body">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="nosotros" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] orb bg-[#0099cc] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
              <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">Quiénes somos</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
              <span className="text-[#0f1a2e]">Líderes en </span>
              <span className="gradient-text">Tecnología<br />Empresarial</span>
            </h2>
            <p className="text-[rgba(15,26,46,0.58)] text-base font-body leading-relaxed mb-6">
              Inteliabyte nació de la convicción de que las empresas merecen tecnología de
              verdadero impacto, no proyectos interminables. Somos un equipo de ingenieros,
              estrategas y especialistas en IA que combinamos visión de negocio con excelencia técnica.
            </p>
            <p className="text-[rgba(15,26,46,0.58)] text-base font-body leading-relaxed mb-10">
              Trabajamos con bancos, financieras, corporativos y empresas en crecimiento que
              necesitan un socio tecnológico confiable, innovador y orientado a resultados medibles.
            </p>
            <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
              Conocer más sobre nosotros
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: TrendingUp, label: "Visión de Liderazgo", desc: "Aspiramos a ser el referente tecnológico de América Latina en soluciones enterprise de IA.", color: "#0099cc" },
              { icon: Shield, label: "Seguridad Primero", desc: "La seguridad no es una función —es el fundamento de cada decisión técnica que tomamos.", color: "#f59e0b" },
              { icon: Users, label: "Equipo de Clase Mundial", desc: "Ingenieros certificados, arquitectos de soluciones y especialistas en IA con experiencia real.", color: "#a78bfa" },
              { icon: Award, label: "Orientados a Valor", desc: "Medimos nuestro éxito por el impacto en tu negocio, no por el número de líneas de código.", color: "#22c55e" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.62)] hover:border-[rgba(0,153,204,0.18)] transition-all duration-300"
              >
                <item.icon className="w-6 h-6 mb-3" style={{ color: item.color }} />
                <h4 className="font-display text-xs font-bold text-[#0f1a2e] mb-2">{item.label}</h4>
                <p className="text-[11px] text-[rgba(15,26,46,0.48)] font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
