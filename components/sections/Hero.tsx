"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Globe, Lock, BarChart3, ArrowRight, Play } from "lucide-react";

const badges = [
  { icon: Cpu,      label: "IA Aplicada a Negocio" },
  { icon: Shield,   label: "Seguridad Enterprise" },
  { icon: Globe,    label: "Omnicanalidad" },
  { icon: Zap,      label: "Automatización" },
  { icon: BarChart3,label: "Escalabilidad" },
];

const stats = [
  { value: "99.9%", label: "Disponibilidad SLA" },
  { value: "+200",  label: "Empresas atendidas" },
  { value: "40%",   label: "Reducción de costos" },
  { value: "24/7",  label: "Soporte especializado" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x:number;y:number;vx:number;vy:number;size:number;opacity:number;color:string }[] = [];
    const colors = ["#0099cc","#7c3aed","#00b8e6","#8b5cf6"];
    for (let i = 0; i < 80; i++) {
      particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, size:Math.random()*2+.5, opacity:Math.random()*.5+.1, color:colors[Math.floor(Math.random()*colors.length)] });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach((p,i) => {
        particles.slice(i+1).forEach(p2 => {
          const d = Math.sqrt((p.x-p2.x)**2+(p.y-p2.y)**2);
          if (d < 120) { ctx.beginPath(); ctx.strokeStyle=`rgba(0,153,204,${0.08*(1-d/120)})`; ctx.lineWidth=0.6; ctx.moveTo(p.x,p.y); ctx.lineTo(p2.x,p2.y); ctx.stroke(); }
        });
      });
      particles.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
        ctx.globalAlpha=p.opacity; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fillStyle=p.color; ctx.fill(); ctx.globalAlpha=1;
      });
      animId = requestAnimationFrame(animate);
    }
    animate();
    const resize = () => { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize",resize); };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-tech-grid">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />

      {/* Ambient orbs — light colors */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] orb" style={{ background:"radial-gradient(circle, rgba(180,220,255,0.7), transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] orb" style={{ background:"radial-gradient(circle, rgba(215,200,255,0.65), transparent)", animationDelay:"3s" }} />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,153,204,0.20)] to-transparent animate-scan" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border mb-7"
              style={{ borderColor:"rgba(0,153,204,0.22)" }}>
              <span className="w-2 h-2 rounded-full bg-[#0099cc] animate-pulse-slow" />
              <span className="text-[11px] font-display tracking-[0.15em] text-[#0099cc] uppercase">Next-Gen Enterprise Technology</span>
            </motion.div>

            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
              className="font-display text-4xl lg:text-6xl font-bold leading-[1.1] mb-5">
              <span className="text-[#0f1a2e]">Transformamos</span><br />
              <span className="gradient-text">Operaciones</span><br />
              <span className="text-[#0f1a2e]">Empresariales</span>
            </motion.h1>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}
              className="text-[rgba(15,26,46,0.60)] text-lg leading-relaxed mb-7 max-w-xl font-body">
              Con tecnología avanzada, automatización inteligente, ciberseguridad enterprise e IA aplicada al negocio. La plataforma que las empresas líderes eligen para escalar sin límites.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}}
              className="flex flex-wrap gap-2 mb-9">
              {badges.map((b,i) => (
                <motion.div key={b.label} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.4+i*0.06}}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-light border hover:border-[rgba(0,153,204,0.22)] transition-colors"
                  style={{ borderColor:"rgba(255,255,255,0.55)" }}>
                  <b.icon className="w-3.5 h-3.5 text-[#0099cc]" />
                  <span className="text-[11px] font-body font-medium text-[rgba(15,26,46,0.70)]">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.45}}
              className="flex flex-wrap gap-4 mb-14">
              <a href="#demo" className="btn-primary flex items-center gap-2"><Play className="w-4 h-4" />Solicitar Demo</a>
              <a href="#servicios" className="btn-secondary flex items-center gap-2">Conocer Soluciones<ArrowRight className="w-4 h-4" /></a>
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.6}}
              className="grid grid-cols-4 gap-6 pt-7 border-t" style={{ borderColor:"rgba(0,153,204,0.14)" }}>
              {stats.map((s,i) => (
                <motion.div key={s.label} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.7+i*0.08}}>
                  <div className="font-display text-xl font-bold text-[#0099cc]">{s.value}</div>
                  <div className="text-[11px] text-[rgba(15,26,46,0.40)] font-body mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — dashboard */}
          <motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:0.9,delay:0.3,ease:[0.4,0,0.2,1]}}
            className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,153,204,0.18)] to-[rgba(124,58,237,0.16)] blur-3xl scale-110 rounded-full" />

              <motion.div animate={{y:[0,-10,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}}
                className="relative glass rounded-2xl p-6 shadow-[0_24px_72px_rgba(100,120,200,0.22)]"
                style={{ border:"1px solid rgba(255,255,255,0.80)" }}>
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-display text-sm font-bold text-[#0f1a2e]">Taurus Next</div>
                    <div className="text-[10px] text-[rgba(0,153,204,0.8)] font-body mt-0.5">Panel Operativo · Tiempo Real</div>
                  </div>
                  <div className="flex items-center gap-1.5 glass px-2.5 py-1 rounded-full" style={{ border:"1px solid rgba(34,197,94,0.25)" }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-[10px] text-green-600 font-body font-medium">En vivo</span>
                  </div>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label:"Gestiones Hoy", value:"2,847", change:"+12%", color:"#0099cc" },
                    { label:"Efectividad",   value:"94.2%", change:"+3.1%", color:"#22c55e" },
                    { label:"Acuerdos",      value:"318",   change:"+18%", color:"#8b5cf6" },
                  ].map(kpi => (
                    <div key={kpi.label} className="glass-light rounded-xl p-3" style={{ border:"1px solid rgba(255,255,255,0.65)" }}>
                      <div className="text-[9px] text-[rgba(15,26,46,0.40)] font-body uppercase tracking-wider mb-1">{kpi.label}</div>
                      <div className="font-display text-base font-bold" style={{color:kpi.color}}>{kpi.value}</div>
                      <div className="text-[9px] text-green-600 font-body mt-0.5 font-medium">{kpi.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="glass-light rounded-xl p-4 mb-4" style={{ border:"1px solid rgba(255,255,255,0.65)" }}>
                  <div className="text-[9px] text-[rgba(15,26,46,0.38)] font-body uppercase tracking-wider mb-3">Volumen de gestiones — últimas 7 horas</div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35,58,42,78,65,90,82,95,70,88,75,100].map((h,i) => (
                      <motion.div key={i} initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:0.8+i*0.05}}
                        className="flex-1 rounded-sm origin-bottom"
                        style={{ height:`${h}%`, background: i===11 ? "linear-gradient(to top, #0099cc, #7c3aed)" : `rgba(0,153,204,${0.15+(i/20)})` }} />
                    ))}
                  </div>
                </div>

                {/* Bot activity */}
                <div className="flex items-center gap-3">
                  {[
                    { label:"Voice Bot", value:"142 llamadas activas", color:"#0099cc" },
                    { label:"Agente IA",  value:"67 negociaciones",     color:"#8b5cf6" },
                  ].map(b => (
                    <div key={b.label} className="glass-light rounded-xl p-3 flex-1" style={{ border:"1px solid rgba(255,255,255,0.65)" }}>
                      <div className="text-[9px] text-[rgba(15,26,46,0.38)] font-body uppercase tracking-wider mb-1">{b.label}</div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:b.color}} />
                        <span className="font-display text-xs font-bold" style={{color:b.color}}>{b.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating badges */}
            {[
              { Icon:Shield, top:"top-1/3", left:"-left-12",  color:"#0099cc", label:"Ciberseguridad", value:"Protegido", vcolor:"#22c55e", delay:1 },
              { Icon:Cpu,    top:"bottom-1/4", left:"-right-8", color:"#7c3aed", label:"IA activa",      value:"98.7% prec.", vcolor:"#8b5cf6", delay:2 },
            ].map((b,i) => (
              <motion.div key={i} animate={{y:[0,-8,0]}} transition={{duration:4+i,repeat:Infinity,ease:"easeInOut",delay:b.delay}}
                className={`absolute ${b.top} ${b.left} glass rounded-xl p-3 shadow-lg`} style={{ border:"1px solid rgba(255,255,255,0.80)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:`linear-gradient(135deg,${b.color},${b.color}cc)` }}>
                    <b.Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] text-[rgba(15,26,46,0.45)] font-body">{b.label}</div>
                    <div className="text-[11px] font-display font-bold" style={{color:b.vcolor}}>{b.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background:"linear-gradient(to top, rgba(240,244,255,0.8), transparent)" }} />
    </section>
  );
}
