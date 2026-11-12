import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MessageCircle, Grid3X3, Users, CheckCircle, AlertTriangle } from 'lucide-react'

const steps = [
  {
    icon: Grid3X3,
    label: 'Passo 1',
    text: 'O lojista acessa a categoria Atendimento.',
  },
  {
    icon: Users,
    label: 'Passo 2',
    text: "Seleciona o card 'Recuperar cliente que sumiu'.",
  },
  {
    icon: MessageCircle,
    label: 'Passo 3',
    text: 'A IA ajuda a criar uma mensagem para retomar o contato.',
  },
]

const MESSAGE =
  'Olá! Tudo bem? 😊 Passando para saber se você ainda tem interesse no produto que conversamos. Se precisar de mais alguma informação, estou à disposição!'

export default function Demo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [currentStep, setCurrentStep] = useState(-1)
  const [showMessage, setShowMessage] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      // Auto-play steps
      const timers: ReturnType<typeof setTimeout>[] = []
      timers.push(setTimeout(() => setCurrentStep(0), 400))
      timers.push(setTimeout(() => setCurrentStep(1), 1600))
      timers.push(setTimeout(() => setCurrentStep(2), 2800))
      timers.push(setTimeout(() => setShowMessage(true), 4200))
      return () => timers.forEach(clearTimeout)
    }
    return undefined
  }, [inView])

  const restart = () => {
    setCurrentStep(-1)
    setShowMessage(false)
    started.current = false
    setTimeout(() => {
      started.current = true
      setTimeout(() => setCurrentStep(0), 300)
      setTimeout(() => setCurrentStep(1), 1500)
      setTimeout(() => setCurrentStep(2), 2700)
      setTimeout(() => setShowMessage(true), 4100)
    }, 100)
  }

  return (
    <section id="demo" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,44,0.12), transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[#FFB62C] text-xs font-bold uppercase tracking-widest"
          >
            Demonstração
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
          >
            Um problema real. Uma solução em poucos passos.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#151A24] rounded-2xl border border-white/5 overflow-hidden shadow-xl shadow-black/30"
        >
          {/* Situation banner */}
          <div className="bg-[#0D1119] border-b border-white/5 px-6 py-4 flex items-start gap-3">
            <AlertTriangle size={18} className="text-[#FFB62C] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-[#AAB3C5] font-medium uppercase tracking-wide mb-0.5">Situação</p>
              <p className="text-white text-sm font-medium">
                Um cliente pediu orçamento e não respondeu mais. O que fazer?
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col gap-6">
            {/* Steps */}
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isActive = currentStep >= i
                return (
                  <AnimatePresence key={step.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors ${
                        isActive
                          ? 'bg-[#0D1119] border-[#FFB62C]/20'
                          : 'bg-transparent border-transparent'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive ? 'bg-[#FFB62C]/15' : 'bg-white/5'
                        }`}
                      >
                        {currentStep > i ? (
                          <CheckCircle size={18} className="text-[#FFB62C]" />
                        ) : (
                          <Icon size={18} className={isActive ? 'text-[#FFB62C]' : 'text-[#AAB3C5]'} />
                        )}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-[#FFB62C]/70' : 'text-[#AAB3C5]/40'}`}>
                          {step.label}
                        </span>
                        <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-[#AAB3C5]/50'}`}>
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )
              })}
            </div>

            {/* Animated message bubble */}
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex justify-end"
                >
                  <div className="max-w-sm">
                    <div className="bg-[#FFB62C]/15 border border-[#FFB62C]/25 rounded-2xl rounded-tr-sm px-4 py-3">
                      <p className="text-white text-sm leading-relaxed">{MESSAGE}</p>
                    </div>
                    <p className="text-[#AAB3C5]/50 text-[10px] text-right mt-1">Gerado pela IA • Agora</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Disclaimer + Restart */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
              <div className="flex items-start gap-2">
                <AlertTriangle size={14} className="text-[#AAB3C5]/50 flex-shrink-0 mt-0.5" />
                <p className="text-[#AAB3C5]/50 text-xs leading-relaxed">
                  Exemplo ilustrativo — não integra IA real nesta apresentação
                </p>
              </div>
              {showMessage && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={restart}
                  className="text-xs text-[#FFB62C] hover:text-[#FFD97A] font-medium underline underline-offset-2 transition-colors flex-shrink-0"
                >
                  Ver novamente
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
