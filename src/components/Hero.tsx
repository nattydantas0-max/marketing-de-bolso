import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,182,44,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB62C]/20 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#AAB3C5 1px, transparent 1px), linear-gradient(90deg, #AAB3C5 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          {/* Left: text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full border border-[#FFB62C]/30 bg-[#FFB62C]/5 text-[#FFB62C] text-xs font-semibold tracking-wide uppercase"
            >
              <Smartphone size={12} />
              Plataforma inteligente
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              O marketing do seu negócio,{' '}
              <span className="gradient-text">na palma da sua mão.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#AAB3C5] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Uma plataforma inteligente que reúne ferramentas práticas para ajudar lojistas e pequenos empreendedores a criar conteúdos, melhorar o atendimento e divulgar seus negócios com mais facilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://projeto-acil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB62C] text-[#0B0E14] font-bold text-base hover:bg-[#FFD97A] transition-all duration-200 shadow-lg shadow-[#FFB62C]/20 hover:shadow-[#FFB62C]/30 hover:scale-105 active:scale-100"
              >
                Conhecer a plataforma
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]" style={{ perspective: '1200px' }}>
              {/* Yellow glow behind mockup */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 60%, rgba(255,182,44,0.18) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                  transform: 'translateY(10%)',
                }}
              />

              {/* Mockup container */}
              <motion.div
                animate={{ rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                className="relative rounded-2xl border border-[#FFB62C]/20 bg-[#151A24] overflow-hidden yellow-glow"
              >
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0D1119]">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-4 h-5 rounded bg-[#1E2535] flex items-center px-3">
                    <span className="text-[10px] text-[#AAB3C5]/50 truncate">projeto-acil.vercel.app</span>
                  </div>
                </div>

                {/* Mockup body */}
                <div className="p-8 flex flex-col items-center justify-center gap-6 min-h-[320px]">
                  {/* Animated rings */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-32 h-32 rounded-full border border-[#FFB62C]/10 animate-pulse-slow" />
                    <div className="absolute w-20 h-20 rounded-full border border-[#FFB62C]/15" />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB62C] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-[#FFB62C]/30">
                      <Smartphone size={26} className="text-[#0B0E14]" />
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[#AAB3C5]/60 text-sm font-medium tracking-wide uppercase">
                      Mockup da plataforma
                    </p>
                    <p className="text-[#AAB3C5]/40 text-xs mt-1">
                      Visualização em breve
                    </p>
                  </div>

                  {/* Skeleton cards */}
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-16 rounded-xl bg-[#1E2535] border border-white/5 flex items-center justify-center gap-2 px-3"
                      >
                        <div className="w-6 h-6 rounded bg-[#FFB62C]/10 flex-shrink-0" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 rounded bg-white/10 w-3/4" />
                          <div className="h-1.5 rounded bg-white/5 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-1/3 bg-[#151A24] border border-[#FFB62C]/30 rounded-xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFB62C] animate-pulse" />
                  <span className="text-xs font-semibold text-white">IA integrada</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent pointer-events-none" />
    </section>
  )
}
