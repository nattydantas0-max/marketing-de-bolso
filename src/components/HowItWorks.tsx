import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Store, Grid3X3, MousePointerClick, Sparkles, ArrowRight, ArrowDown } from 'lucide-react'

const steps = [
  {
    icon: Store,
    title: 'Cadastre sua loja',
    description: 'Informe os dados do negócio para personalizar sua experiência.',
    number: '01',
  },
  {
    icon: Grid3X3,
    title: 'Escolha uma categoria',
    description: 'Selecione a área em que precisa de ajuda.',
    number: '02',
  },
  {
    icon: MousePointerClick,
    title: 'Selecione uma solução',
    description: 'Clique no card correspondente ao problema ou à tarefa que deseja realizar.',
    number: '03',
  },
  {
    icon: Sparkles,
    title: 'Utilize a inteligência artificial',
    description: 'Informe os detalhes necessários e receba ajuda para criar o conteúdo.',
    number: '04',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,44,0.15), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[#FFB62C] text-xs font-bold uppercase tracking-widest"
          >
            Como funciona?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
          >
            Simples de usar. Fácil de entender.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-0 items-start">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center px-4 w-full"
                  >
                    {/* Step card */}
                    <div className="relative flex flex-col items-center w-full">
                      {/* Number */}
                      <span className="text-[#FFB62C]/30 text-xs font-bold tracking-widest mb-3">{step.number}</span>

                      {/* Icon circle */}
                      <div className="w-16 h-16 rounded-2xl bg-[#151A24] border border-[#FFB62C]/20 flex items-center justify-center mb-4 shadow-lg shadow-black/20 relative z-10">
                        <Icon size={28} className="text-[#FFB62C]" />
                      </div>

                      {/* Connecting line + arrow (between steps) */}
                      {i < steps.length - 1 && (
                        <div className="absolute top-[4.5rem] left-[calc(50%+2.5rem)] right-0 flex items-center z-0 pointer-events-none" style={{ width: 'calc(100% - 4rem)' }}>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#FFB62C]/30 to-[#FFB62C]/10" />
                          <ArrowRight size={14} className="text-[#FFB62C]/30 flex-shrink-0" />
                        </div>
                      )}

                      <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                      <p className="text-[#AAB3C5] text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  {/* Left: icon + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#151A24] border border-[#FFB62C]/20 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon size={22} className="text-[#FFB62C]" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex flex-col items-center flex-1 py-2">
                        <div className="w-px flex-1 bg-gradient-to-b from-[#FFB62C]/30 to-transparent" />
                        <ArrowDown size={12} className="text-[#FFB62C]/30 my-1" />
                      </div>
                    )}
                  </div>

                  {/* Right: text */}
                  <div className={`flex-1 pb-${i < steps.length - 1 ? '6' : '0'} pt-1`}>
                    <span className="text-[#FFB62C]/50 text-[10px] font-bold tracking-widest">{step.number}</span>
                    <h3 className="text-white font-semibold text-sm mt-0.5 mb-1">{step.title}</h3>
                    <p className="text-[#AAB3C5] text-xs leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
