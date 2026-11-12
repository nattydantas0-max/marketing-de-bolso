import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Brain, LayoutGrid, type LucideIcon } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'Praticidade',
    description: 'Soluções rápidas para desafios do dia a dia.',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Apoio inteligente para criar conteúdos e mensagens.',
  },
  {
    icon: LayoutGrid,
    title: 'Tudo em um só lugar',
    description: 'Diversas ferramentas organizadas em uma única plataforma.',
  },
]

function Card({ icon: Icon, title, description, index }: {
  icon: LucideIcon
  title: string
  description: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transition: 'transform 0.3s ease', transformStyle: 'preserve-3d' }}
      className="bg-[#151A24] rounded-2xl p-6 border border-white/5 hover:border-[#FFB62C]/30 cursor-default group flex flex-col gap-4 shadow-lg shadow-black/20"
    >
      <div className="w-12 h-12 rounded-xl bg-[#FFB62C]/10 flex items-center justify-center group-hover:bg-[#FFB62C]/15 transition-colors">
        <Icon size={22} className="text-[#FFB62C]" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-[#AAB3C5] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhatIs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-is" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[#FFB62C] text-xs font-bold uppercase tracking-widest"
          >
            O que é?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight"
          >
            Uma solução inteligente para quem empreende.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#AAB3C5] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            O Marketing de Bolso foi criado para simplificar a rotina de lojistas e pequenos empreendedores. Em uma única plataforma, o usuário encontra soluções para situações reais do negócio, com o apoio da inteligência artificial. Tudo de forma simples, prática e sem precisar dominar ferramentas complexas de marketing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
