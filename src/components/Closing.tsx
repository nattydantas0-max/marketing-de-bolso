import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="closing" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,182,44,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,44,0.2), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,44,0.1), transparent)' }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[#151A24]/60 backdrop-blur-sm border border-[#FFB62C]/15 rounded-3xl p-10 sm:p-14 shadow-2xl shadow-black/40"
          style={{
            boxShadow: '0 0 60px rgba(255,182,44,0.08), 0 24px 60px rgba(0,0,0,0.4)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFB62C]/30 bg-[#FFB62C]/5 text-[#FFB62C] text-xs font-semibold tracking-wide uppercase mb-6">
              Comece agora
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
          >
            Você cuida do seu negócio.{' '}
            <span className="gradient-text">O Marketing de Bolso</span> ajuda você a cuidar do seu marketing.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#AAB3C5] text-base sm:text-lg leading-relaxed mb-9"
          >
            Uma plataforma pensada para tornar o marketing mais simples, acessível e presente na rotina de quem empreende.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="https://projeto-acil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FFB62C] text-[#0B0E14] font-bold text-base hover:bg-[#FFD97A] transition-all duration-200 shadow-lg shadow-[#FFB62C]/25 hover:shadow-[#FFB62C]/40 hover:scale-105 active:scale-100"
            >
              Conhecer a plataforma
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
