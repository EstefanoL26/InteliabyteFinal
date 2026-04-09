"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  LayoutDashboard, Phone, Bot, Play, ArrowRight,
  MessageSquare, TrendingUp, Users, CheckCircle,
  PhoneCall, BarChart3, Mic, Send, User, Clock
} from "lucide-react";

// ── Taurus Next Dashboard Demo ─────────────────────────────────────────
function TaurusDashboard() {
  const rows = [
    { name: "García López, Juan", doc: "12345678", monto: "$4,500", dias: 45, estado: "Prometió pago", color: "#22c55e" },
    { name: "Martínez, Ana S.", doc: "98765432", monto: "$12,300", dias: 120, estado: "Negociando", color: "#f59e0b" },
    { name: "Corp. Delta S.A.", doc: "RUC-001234", monto: "$87,000", dias: 30, estado: "Nuevo", color: "#0099cc" },
    { name: "Pérez, Carlos M.", doc: "55667788", monto: "$2,100", dias: 200, estado: "Alto riesgo", color: "#ef4444" },
    { name: "Tech Soluciones", doc: "RUC-005678", monto: "$23,700", dias: 60, estado: "Prometió pago", color: "#22c55e" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Cartera Total", value: "$2.4M", sub: "+8.3% este mes", color: "#0099cc" },
          { label: "Acuerdos Hoy", value: "318", sub: "Meta: 280 ✓", color: "#22c55e" },
          { label: "Efectividad", value: "94.2%", sub: "+3.1% vs ayer", color: "#a78bfa" },
          { label: "Pendientes", value: "1,204", sub: "En gestión", color: "#f59e0b" },
        ].map((k) => (
          <div key={k.label} className="glass-light rounded-xl p-3 border border-[rgba(255,255,255,0.62)]">
            <div className="text-[9px] text-[rgba(15,26,46,0.38)] font-body uppercase tracking-wider">{k.label}</div>
            <div className="font-display text-xl font-bold mt-1" style={{ color: k.color }}>{k.value}</div>
            <div className="text-[9px] text-[#22c55e] font-body mt-0.5">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="glass-light rounded-xl border border-[rgba(255,255,255,0.62)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.62)] flex items-center justify-between">
          <span className="text-[11px] font-display text-[rgba(15,26,46,0.68)] tracking-wide">Gestiones recientes</span>
          <span className="text-[9px] font-body text-[#0099cc] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse" />
            En vivo
          </span>
        </div>
        <div className="divide-y divide-[rgba(255,255,255,0.52)]">
          {rows.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="grid grid-cols-5 gap-2 px-4 py-2.5 text-[11px] font-body hover:bg-[rgba(0,153,204,0.04)] transition-colors"
            >
              <span className="text-[rgba(15,26,46,0.80)] truncate">{r.name}</span>
              <span className="text-[rgba(15,26,46,0.38)]">{r.doc}</span>
              <span className="text-[rgba(15,26,46,0.68)] font-display font-bold">{r.monto}</span>
              <span className="text-[rgba(15,26,46,0.38)]">{r.dias}d</span>
              <span className="text-right">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-display" style={{ color: r.color, background: `${r.color}18` }}>
                  {r.estado}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="glass-light rounded-xl p-4 border border-[rgba(255,255,255,0.62)]">
        <div className="text-[10px] font-display text-[rgba(15,26,46,0.38)] uppercase tracking-wider mb-3">Recaudo diario — últimas 2 semanas</div>
        <div className="flex items-end gap-1.5 h-16">
          {[40,65,45,80,70,90,60,85,75,95,55,88,92,100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{
              height: `${h}%`,
              background: i === 13 ? "linear-gradient(to top,#0099cc,#7c3aed)" : `rgba(0,212,255,${0.1 + (i/25)})`
            }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── VoiceBot IVR Demo ─────────────────────────────────────────────────
function VoiceBotDemo() {
  const calls = [
    { id: "C-001", phone: "+593 99 123 4567", status: "En curso", duration: "1:34", result: "Negociando", color: "#0099cc" },
    { id: "C-002", phone: "+593 98 765 4321", status: "Completada", duration: "0:52", result: "Prometió", color: "#22c55e" },
    { id: "C-003", phone: "+593 87 456 7890", status: "No contesta", duration: "0:30", result: "Reintento", color: "#f59e0b" },
    { id: "C-004", phone: "+593 99 234 5678", status: "En curso", duration: "2:10", result: "Negociando", color: "#0099cc" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      {/* Campaign stats */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Llamadas activas", value: "142", color: "#0099cc", icon: PhoneCall },
          { label: "Completadas", value: "1,893", color: "#22c55e", icon: CheckCircle },
          { label: "Efectividad", value: "67.4%", color: "#a78bfa", icon: TrendingUp },
          { label: "Acuerdos", value: "189", color: "#f59e0b", icon: BarChart3 },
        ].map((s) => (
          <div key={s.label} className="glass-light rounded-xl p-3 border border-[rgba(255,255,255,0.62)] flex flex-col items-center text-center">
            <s.icon className="w-4 h-4 mb-1" style={{ color: s.color }} />
            <div className="font-display text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-[rgba(15,26,46,0.38)] font-body mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* IVR flow visual */}
      <div className="glass-light rounded-xl p-4 border border-[rgba(255,255,255,0.62)]">
        <div className="text-[10px] font-display text-[rgba(15,26,46,0.38)] uppercase tracking-wider mb-4">Flujo IVR activo — Campaña Cobranza Q2</div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {["Marcado", "Contestó", "Identificación", "Mensaje IA", "Negociación", "Acuerdo / Callback"].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <div className={`flex flex-col items-center gap-1`}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-display font-bold border"
                  style={{
                    background: i <= 3 ? "rgba(0,153,204,0.22)" : "rgba(255,255,255,0.55)",
                    borderColor: i <= 3 ? "rgba(0,153,204,0.38)" : "rgba(255,255,255,0.72)",
                    color: i <= 3 ? "#0099cc" : "rgba(240,246,255,0.3)",
                  }}
                >
                  {i + 1}
                </div>
                <span className="text-[8px] text-[rgba(15,26,46,0.42)] font-body text-center w-14">{step}</span>
              </div>
              {i < 5 && <div className="w-6 h-px bg-[rgba(0,153,204,0.28)] flex-shrink-0 mt-[-14px]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Active calls table */}
      <div className="glass-light rounded-xl border border-[rgba(255,255,255,0.62)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.62)]">
          <span className="text-[11px] font-display text-[rgba(15,26,46,0.68)]">Llamadas recientes</span>
        </div>
        {calls.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className="grid grid-cols-5 gap-2 px-4 py-2.5 text-[11px] font-body border-b border-[rgba(255,255,255,0.03)] last:border-0 hover:bg-[rgba(0,153,204,0.04)]"
          >
            <span className="text-[#0099cc] font-display">{c.id}</span>
            <span className="text-[rgba(15,26,46,0.58)]">{c.phone}</span>
            <span style={{ color: c.color }}>{c.status}</span>
            <span className="text-[rgba(15,26,46,0.38)] flex items-center gap-1"><Clock className="w-3 h-3" />{c.duration}</span>
            <span className="text-right">
              <span className="px-2 py-0.5 rounded-full text-[9px]" style={{ color: c.color, background: `${c.color}18` }}>
                {c.result}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Agente Negociador Chat Demo ───────────────────────────────────────
function AgenteChatDemo() {
  const [messages] = useState([
    { role: "bot", text: "Hola, le llamo de parte de Financiera XYZ. Tengo disponible una opción especial para regularizar su cuenta. ¿Tiene un momento?" },
    { role: "user", text: "Sí, adelante. ¿De cuánto es la deuda?" },
    { role: "bot", text: "Su saldo actual es de $4,500. Hemos preparado 3 opciones especiales para usted:\n\n• Pago único hoy: $3,600 (20% dto.)\n• 3 cuotas de $1,200 sin interés\n• 6 cuotas de $700 con mínimo de entrada" },
    { role: "user", text: "¿Puedo pagar en 6 cuotas?" },
    { role: "bot", text: "¡Excelente elección! Con la opción de 6 cuotas, la primera de $700 se pagaría hoy. Generaré su acuerdo ahora mismo. ¿Confirma su correo para enviar el documento?" },
    { role: "system", text: "🤝 Acuerdo generado automáticamente — Enviando por email y WhatsApp" },
  ]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Negociaciones hoy", value: "67", color: "#a78bfa" },
          { label: "Acuerdos cerrados", value: "48", color: "#22c55e" },
          { label: "Tasa de cierre", value: "71.6%", color: "#0099cc" },
        ].map((s) => (
          <div key={s.label} className="glass-light rounded-xl p-3 border border-[rgba(255,255,255,0.62)] text-center">
            <div className="font-display text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-[rgba(15,26,46,0.38)] font-body mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="glass-light rounded-xl border border-[rgba(167,139,250,0.2)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.62)] flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#a78bfa]" />
          <span className="text-[11px] font-display text-[rgba(15,26,46,0.68)]">Agente Negociador IA — Sesión activa</span>
          <span className="ml-auto text-[9px] font-body text-[#22c55e] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            En vivo
          </span>
        </div>
        <div className="p-4 space-y-3 max-h-52 overflow-y-auto">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""} ${m.role === "system" ? "justify-center" : ""}`}
            >
              {m.role === "system" ? (
                <div className="text-[10px] font-body text-[#22c55e] glass px-3 py-1.5 rounded-full border border-[rgba(34,197,94,0.2)]">
                  {m.text}
                </div>
              ) : (
                <>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    m.role === "bot"
                      ? "bg-gradient-to-br from-[#7c3aed] to-[#a78bfa]"
                      : "bg-gradient-to-br from-[#0f1f38] to-[#152847] border border-[rgba(255,255,255,0.72)]"
                  }`}>
                    {m.role === "bot" ? <Bot className="w-3 h-3 text-[#0f1a2e]" /> : <User className="w-3 h-3 text-[rgba(15,26,46,0.68)]" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-xl px-3 py-2 text-[11px] font-body leading-relaxed whitespace-pre-wrap ${
                      m.role === "bot"
                        ? "bg-[rgba(124,58,237,0.15)] border border-[rgba(167,139,250,0.2)] text-[rgba(15,26,46,0.80)]"
                        : "bg-[rgba(0,153,204,0.10)] border border-[rgba(0,153,204,0.18)] text-[rgba(240,246,255,0.9)]"
                    }`}
                  >
                    {m.text}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        {/* Input mock */}
        <div className="px-4 py-3 border-t border-[rgba(255,255,255,0.62)] flex items-center gap-2">
          <input
            className="flex-1 bg-transparent text-[11px] font-body text-[rgba(15,26,46,0.48)] outline-none placeholder-[rgba(15,26,46,0.22)]"
            placeholder="El cliente está escribiendo..."
            disabled
          />
          <Send className="w-4 h-4 text-[rgba(167,139,250,0.4)]" />
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Demo Section ─────────────────────────────────────────────────
const tabs = [
  { id: "taurus", label: "Taurus Next", icon: LayoutDashboard, color: "#0099cc" },
  { id: "voicebot", label: "Voice Bot IVR", icon: Phone, color: "#a78bfa" },
  { id: "agente", label: "Agente Negociador", icon: Bot, color: "#22c55e" },
];

export default function Demo() {
  const [active, setActive] = useState("taurus");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb bg-[#0099cc] opacity-45" />

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
            <Play className="w-3 h-3 text-[#0099cc]" />
            <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">
              Demo interactivo
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-[#0f1a2e]">Experimente </span>
            <span className="gradient-text">Nuestros Productos</span>
          </h2>
          <p className="text-[rgba(15,26,46,0.52)] text-lg max-w-xl mx-auto font-body">
            Explore las interfaces reales de nuestras plataformas y descubra
            cómo transforman la operación empresarial.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl p-1.5 border border-[rgba(255,255,255,0.68)] flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-[12px] font-display font-semibold tracking-wide uppercase transition-all duration-300"
                style={
                  active === tab.id
                    ? { background: `${tab.color}20`, color: tab.color, border: `1px solid ${tab.color}30` }
                    : { color: "rgba(240,246,255,0.4)", border: "1px solid transparent" }
                }
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl border border-[rgba(0,153,204,0.18)] overflow-hidden shadow-[0_20px_60px_rgba(100,120,200,0.20)]"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.62)] bg-[rgba(255,255,255,0.48)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444] opacity-70" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-70" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e] opacity-70" />
            </div>
            <div className="font-display text-[11px] text-[rgba(15,26,46,0.38)] tracking-wider">
              {tabs.find((t) => t.id === active)?.label} — Inteliabyte Platform
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[9px] font-body text-[#22c55e]">Live Demo</span>
            </div>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {active === "taurus" && <TaurusDashboard key="taurus" />}
              {active === "voicebot" && <VoiceBotDemo key="voicebot" />}
              {active === "agente" && <AgenteChatDemo key="agente" />}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a href="#contacto" className="btn-primary flex items-center gap-2">
            <Play className="w-4 h-4" />
            Solicitar Demo Real
          </a>
          <a href="#productos" className="btn-secondary flex items-center gap-2">
            Ver Funcionalidades
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contacto" className="btn-secondary flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Hablar con Ventas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
