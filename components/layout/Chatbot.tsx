"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Zap, MessageCircle } from "lucide-react";

const QUICK_OPTIONS = [
  { label: "🚀 Quiero una demo", msg: "Me interesa solicitar una demo de sus productos." },
  { label: "⚙️ Información de servicios", msg: "¿Qué servicios ofrecen?" },
  { label: "💡 Información de productos", msg: "¿Cuáles son sus productos principales?" },
  { label: "💼 Hablar con ventas", msg: "Quiero hablar con el equipo de ventas." },
  { label: "🛟 Soporte técnico", msg: "Necesito soporte técnico." },
];

type Msg = { role: "bot" | "user"; text: string };

const BOT_RESPONSES: Record<string, string> = {
  default: "Entendido. Un especialista de Inteliabyte se pondrá en contacto contigo muy pronto. ¿Hay algo más en lo que pueda ayudarte?",
  demo: "¡Excelente! Podemos agendar una demo personalizada de nuestros productos — Taurus Next, Voice Bot IVR o el Agente Negociador. ¿Cuál te interesa más? Puedes también llenar el formulario en la sección de Contacto.",
  servicios: "Ofrecemos 4 servicios principales:\n\n• Administración de Infraestructura Asistida\n• Administración de Ciberseguridad\n• Soporte Técnico N1 en Sitio\n• Autoatención Digital (WhatsApp + Firma Digital)\n\n¿Cuál te interesa explorar?",
  productos: "Nuestros productos estrella son:\n\n🏆 Taurus Next — Plataforma de gestión operativa\n📞 Voice Bot IVR — Automatización de llamadas salientes\n🤖 Agente Negociador — IA para cierre de acuerdos\n\nPuedes ver demos interactivos en esta misma página.",
  ventas: "Te conectaré con nuestro equipo de ventas. Puedes contactarnos directamente por WhatsApp o completar el formulario de contacto. Respondemos en menos de 2 horas en horario laboral.",
  soporte: "Para soporte técnico, puedes comunicarte al +593 99 000 0000 o escribirnos a soporte@inteliabyte.com. Nuestro equipo está disponible 24/7 para clientes con plan de soporte activo.",
};

function getResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("demo")) return BOT_RESPONSES.demo;
  if (lower.includes("servicio")) return BOT_RESPONSES.servicios;
  if (lower.includes("producto")) return BOT_RESPONSES.productos;
  if (lower.includes("venta") || lower.includes("comercial")) return BOT_RESPONSES.ventas;
  if (lower.includes("soporte") || lower.includes("técnico") || lower.includes("ayuda")) return BOT_RESPONSES.soporte;
  return BOT_RESPONSES.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "¡Hola! 👋 Soy el asistente virtual de Inteliabyte. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [quickShown, setQuickShown] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMsg(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setQuickShown(false);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(text) }]);
    }, 1200 + Math.random() * 600);
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-7 right-7 z-50 w-16 h-16 rounded-full border border-[rgba(0,153,204,0.26)] flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(5,13,30,0.85)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,153,204,0.12), inset 0 1px 0 rgba(255,255,255,0.68)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0 12px 48px rgba(0,0,0,0.5), 0 0 40px rgba(0,153,204,0.22)" }}
        aria-label="Chat"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(124,58,237,0.1)]" />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-[rgba(15,26,46,0.80)]" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-[#0099cc]" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-[-4px] rounded-full border-2 border-[rgba(0,153,204,0.28)] animate-ping opacity-50" />
        )}
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed bottom-28 right-7 z-50 w-[360px] flex flex-col overflow-hidden rounded-2xl"
            style={{
              background: "rgba(5,13,30,0.88)",
              backdropFilter: "blur(24px) saturate(1.6)",
              border: "1px solid rgba(0,153,204,0.18)",
              boxShadow: "0 20px 60px rgba(100,120,200,0.20), 0 0 0 1px rgba(255,255,255,0.52), inset 0 1px 0 rgba(255,255,255,0.62)",
              height: 520,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(0,153,204,0.15)] flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0099cc] to-[#7c3aed] flex items-center justify-center shadow-[0_4px_16px_rgba(0,153,204,0.28)]">
                  <Zap className="w-5 h-5 text-[#0f1a2e]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-[#050d1e] shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-[#0f1a2e] tracking-wide">Asistente Inteliabyte</div>
                <div className="text-[10px] text-[#0099cc] font-body font-semibold uppercase tracking-[0.1em]">En línea · Respuesta inmediata</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 items-end ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {m.role === "bot" && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0099cc] to-[#7c3aed] flex items-center justify-center flex-shrink-0 mb-0.5">
                      <Zap className="w-3 h-3 text-[#0f1a2e]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[12.5px] font-body leading-relaxed whitespace-pre-wrap ${
                      m.role === "bot"
                        ? "bg-[rgba(255,255,255,0.75)] border border-[rgba(0,153,204,0.15)] text-[rgba(15,26,46,0.82)] rounded-bl-sm"
                        : "bg-gradient-to-br from-[rgba(0,153,204,0.26)] to-[rgba(124,58,237,0.25)] border border-[rgba(0,153,204,0.22)] text-[#0f1a2e] rounded-br-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing */}
              {typing && (
                <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0099cc] to-[#7c3aed] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-[#0f1a2e]" />
                  </div>
                  <div className="bg-[rgba(255,255,255,0.75)] border border-[rgba(0,153,204,0.15)] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                    {[0, 0.2, 0.4].map((d, i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[rgba(0,212,255,0.5)]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick options */}
              {quickShown && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  {QUICK_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => sendMsg(opt.msg)}
                      className="text-left px-3.5 py-2.5 rounded-xl border border-[rgba(0,153,204,0.18)] text-[11.5px] font-body text-[rgba(15,26,46,0.68)] hover:border-[rgba(0,153,204,0.38)] hover:text-[#0099cc] hover:bg-[rgba(0,153,204,0.06)] transition-all duration-200"
                    >
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3.5 border-t border-[rgba(0,153,204,0.12)] flex-shrink-0 flex items-center gap-3 bg-[rgba(255,255,255,0.45)]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg(input)}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-transparent text-[12.5px] font-body text-[rgba(15,26,46,0.80)] placeholder-[rgba(15,26,46,0.35)] outline-none"
              />
              <button
                onClick={() => sendMsg(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0099cc] to-[#7c3aed] flex items-center justify-center flex-shrink-0 disabled:opacity-30 transition-opacity hover:shadow-[0_4px_16px_rgba(0,153,204,0.28)]"
              >
                <Send className="w-3.5 h-3.5 text-[#0f1a2e]" />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center text-[9.5px] font-body text-[rgba(15,26,46,0.20)] py-2 bg-[rgba(255,255,255,0.40)] border-t border-[rgba(255,255,255,0.52)]">
              Desarrollado con <span className="text-[#0099cc]">IA</span> · Inteliabyte
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
