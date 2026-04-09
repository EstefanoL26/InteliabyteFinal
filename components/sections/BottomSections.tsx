"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MessageCircle, Phone, Mail, MapPin,
  Send, ChevronDown, Zap, Linkedin, Twitter, Instagram, Github
} from "lucide-react";

// ── FINAL CTA ─────────────────────────────────────────────────────────
export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#020817]" />
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-to-r from-[rgba(0,153,204,0.12)] to-[rgba(124,58,237,0.10)] blur-3xl" />

      {/* Animated border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,153,204,0.38)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.3)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.26)] mb-8">
            <Zap className="w-3.5 h-3.5 text-[#0099cc]" />
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">Siguiente nivel</span>
          </div>

          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Lleva tu operación</span>
            <br />
            <span style={{color:"rgba(200,235,255,0.95)"}}>al siguiente nivel</span>
          </h2>

          <p className="text-[rgba(15,26,46,0.58)] text-xl font-body leading-relaxed mb-12 max-w-2xl mx-auto">
            Solicita una demo y descubre cómo Inteliabyte puede transformar tu negocio
            con tecnología, automatización e inteligencia artificial.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#contacto" className="btn-primary text-base px-10 py-4 flex items-center gap-3">
              Solicitar Demo Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/1234567890" className="btn-secondary text-base px-10 py-4 flex items-center gap-3" style={{background:"rgba(255,255,255,0.88)",color:"#0099cc",borderColor:"rgba(255,255,255,0.80)"}}>
              <MessageCircle className="w-5 h-5" />
              Hablar con un asesor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── CONTACT FORM ─────────────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.52)] border border-[rgba(0,153,204,0.16)] rounded-xl px-4 py-3.5 text-[13px] font-body text-[rgba(15,26,46,0.82)] placeholder-[rgba(15,26,46,0.28)] focus:outline-none focus:border-[rgba(0,153,204,0.38)] focus:bg-[rgba(0,153,204,0.04)] transition-all duration-200";

  return (
    <section id="contacto" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb bg-violet-200 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,153,204,0.22)] mb-6">
              <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">Contacto</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-[#0f1a2e]">Hablemos de </span>
              <span className="gradient-text">tu proyecto</span>
            </h2>
            <p className="text-[rgba(15,26,46,0.52)] font-body leading-relaxed mb-10">
              Cuéntanos tu desafío tecnológico. Un especialista te contactará
              en menos de 24 horas con un plan de acción concreto.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Teléfono", value: "+593 99 000 0000", href: "tel:+5930000000" },
                { icon: Mail, label: "Email", value: "hola@inteliabyte.com", href: "mailto:hola@inteliabyte.com" },
                { icon: MessageCircle, label: "WhatsApp", value: "Escríbenos ahora", href: "https://wa.me/593990000000" },
                { icon: MapPin, label: "Ubicación", value: "Ecuador · América Latina", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl glass border border-[rgba(0,153,204,0.16)] flex items-center justify-center group-hover:border-[rgba(0,153,204,0.32)] transition-colors">
                    <c.icon className="w-4.5 h-4.5 text-[#0099cc]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[rgba(15,26,46,0.32)] font-body uppercase tracking-wider">{c.label}</div>
                    <div className="text-[13px] text-[rgba(15,26,46,0.80)] font-body group-hover:text-[#0099cc] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-[rgba(0,153,204,0.16)]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-lg font-bold text-[#0f1a2e] mb-2">¡Mensaje enviado!</h3>
                  <p className="text-[rgba(15,26,46,0.52)] font-body">Te contactaremos en menos de 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">Nombre *</label>
                      <input className={inputClass} placeholder="Tu nombre" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">Email *</label>
                      <input type="email" className={inputClass} placeholder="tu@empresa.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">Empresa</label>
                      <input className={inputClass} placeholder="Nombre empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">Teléfono</label>
                      <input className={inputClass} placeholder="+593 99..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">¿Qué te interesa?</label>
                    <select className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="">Selecciona una opción</option>
                      <option>Taurus Next</option>
                      <option>Voice Bot IVR</option>
                      <option>Agente Negociador</option>
                      <option>Infraestructura Asistida</option>
                      <option>Ciberseguridad</option>
                      <option>Autoatención Digital</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-display tracking-wider text-[rgba(15,26,46,0.32)] uppercase mb-1.5 block">Mensaje</label>
                    <textarea
                      className={`${inputClass} resize-none h-28`}
                      placeholder="Cuéntanos sobre tu empresa y el desafío que quieres resolver..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </button>
                  <p className="text-[10px] text-[rgba(15,26,46,0.28)] font-body text-center">
                    Al enviar, aceptas nuestra política de privacidad. Sin spam, prometido.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
const faqs = [
  { q: "¿Cuánto tiempo toma implementar Taurus Next?", a: "La implementación base toma entre 2 y 4 semanas según la complejidad de las integraciones requeridas. Utilizamos metodologías ágiles que permiten empezar a generar valor desde la primera semana." },
  { q: "¿El Voice Bot funciona con cualquier sistema telefónico?", a: "Sí. Integramos con todas las plataformas de telefonía estándar (SIP, PBX, ISDN) y también con proveedores cloud como Twilio, Amazon Connect y plataformas locales." },
  { q: "¿Cómo garantizan la seguridad de los datos?", a: "Implementamos cifrado de extremo a extremo, controles de acceso granular, auditorías completas y cumplimos con estándares ISO 27001, SOC 2 y regulaciones financieras locales." },
  { q: "¿El Agente Negociador puede personalizarse para mi industria?", a: "Absolutamente. El agente se entrena con tu base de conocimiento, políticas de negociación, rangos de acuerdo y flujos específicos de tu sector antes del despliegue." },
  { q: "¿Ofrecen soporte post-implementación?", a: "Sí, todos los proyectos incluyen soporte especializado. Ofrecemos planes de soporte desde N1 hasta soporte dedicado 24/7 con ingenieros asignados a tu cuenta." },
  { q: "¿Se pueden integrar los productos con nuestros sistemas existentes?", a: "Todos nuestros productos tienen APIs REST robustas y conectores nativos para los principales ERPs, CRMs y sistemas core bancarios del mercado latinoamericano." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-25" />
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-9"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Preguntas </span>
            <span className="gradient-text">Frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-xl border border-[rgba(255,255,255,0.62)] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-sm font-semibold text-[#0f1a2e] pr-4">{faq.q}</span>
                <ChevronDown
                  className="w-4 h-4 text-[#0099cc] flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[13px] text-[rgba(15,26,46,0.52)] font-body leading-relaxed border-t border-[rgba(255,255,255,0.52)] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-[rgba(0,153,204,0.12)]">
      <div className="absolute inset-0 bg-tech-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-9">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0099cc] to-[#7c3aed] flex items-center justify-center">
                <Zap className="w-4.5 h-4.5 text-[#0f1a2e]" style={{ width: 18, height: 18 }} />
              </div>
              <span className="font-display text-base font-bold tracking-wider text-[#0f1a2e]">
                INTELIA<span className="text-[#0099cc]">BYTE</span>
              </span>
            </div>
            <p className="text-[13px] text-[rgba(15,26,46,0.42)] font-body leading-relaxed mb-5 max-w-xs">
              Tecnología, automatización e inteligencia artificial para empresas que quieren liderar su mercado.
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass border border-[rgba(255,255,255,0.62)] flex items-center justify-center text-[rgba(15,26,46,0.38)] hover:text-[#0099cc] hover:border-[rgba(0,153,204,0.26)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <div className="text-[10px] font-display tracking-[0.2em] text-[#0099cc] uppercase mb-4">Servicios</div>
            <ul className="space-y-2.5">
              {["Infraestructura Asistida", "Ciberseguridad", "Soporte N1", "Autoatención Digital"].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="text-[12px] text-[rgba(15,26,46,0.42)] font-body hover:text-[rgba(15,26,46,0.80)] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <div className="text-[10px] font-display tracking-[0.2em] text-[#0099cc] uppercase mb-4">Productos</div>
            <ul className="space-y-2.5">
              {["Taurus Next", "Voice Bot IVR", "Agente Negociador"].map((p) => (
                <li key={p}>
                  <a href="#productos" className="text-[12px] text-[rgba(15,26,46,0.42)] font-body hover:text-[rgba(15,26,46,0.80)] transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className="text-[10px] font-display tracking-[0.2em] text-[#0099cc] uppercase mb-4">Empresa</div>
            <ul className="space-y-2.5">
              {["Nosotros", "Soluciones", "Casos de uso", "Contacto", "Solicitar demo"].map((e) => (
                <li key={e}>
                  <a href="#" className="text-[12px] text-[rgba(15,26,46,0.42)] font-body hover:text-[rgba(15,26,46,0.80)] transition-colors">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.55)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[rgba(240,246,255,0.30)] font-body">
            © {new Date().getFullYear()} Inteliabyte. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Privacidad", "Términos", "Cookies"].map((t) => (
              <a key={t} href="#" className="text-[11px] text-[rgba(240,246,255,0.30)] font-body hover:text-[rgba(15,26,46,0.58)] transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
