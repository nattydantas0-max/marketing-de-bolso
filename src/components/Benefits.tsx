import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, CheckCircle2, MessageSquare, Cpu, type LucideIcon } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Economize tempo',
    description: 'Menos tempo pensando em como criar conteúdos.',
  },
  {
    icon: CheckCircle2,
    title: 'Facilite sua rotina',
    description: 'Encontre soluções para situações comuns do negócio.',
  },
  {
    icon: MessageSquare,
    title: 'Melhore sua comunicação',
    description: 'Tenha apoio para criar mensagens e conteúdos para seus clientes.',
  },
  {
    icon: Cpu,
    title: 'Use a tecnologia a seu favor',
    description: 'Aproveite a inteligência artificial sem precisar entender de comandos complexos.',
  },
]

function BenefitCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon
  title: string
  description: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
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
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transition: 'transform 0.3s ease', transformStyle: 'preserve-3d' }}
      className="bg-[#151A24] rounded-2xl p-6 border border-white/5 hover:border-[#FFB62C]/25 cursor-default group flex flex-col gap-4 shadow-md shadow-black/20 hover:shadow-[0_0_30px_rgba(255,182,44,0.08)]"
    >
      <div className="w-12 h-12 rounded-xl bg-[#FFB62C]/10 flex items-center justify-center group-hover:bg-[#FFB62C]/15 transition-colors">
        <Icon size={22} className="text-[#FFB62C]" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-[#AAB3C5] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="benefits" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,44,0.12), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[#FFB62C] text-xs font-bold uppercase tracking-widest"
          >
            Benefícios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
          >
            Mais praticidade para quem faz tudo acontecer.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
