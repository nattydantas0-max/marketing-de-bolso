import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ImageIcon,
  MessageCircle,
  Instagram,
  Video,
  Megaphone,
  Palette,
  Scissors,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'

const tools = [
  {
    icon: ImageIcon,
    title: 'Imagens',
    description: 'Criação de imagens e materiais visuais para divulgar produtos.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento',
    description: 'Mensagens para WhatsApp, recuperação de clientes e divulgação de promoções.',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Legendas, hashtags, biografias e ideias de conteúdo.',
  },
  {
    icon: Video,
    title: 'TikTok',
    description: 'Roteiros, ganchos e ideias para vídeos curtos.',
  },
  {
    icon: Megaphone,
    title: 'Anúncios',
    description: 'Textos e ideias para campanhas publicitárias.',
  },
  {
    icon: Palette,
    title: 'Canva',
    description: 'Orientações para criar artes e materiais de divulgação.',
  },
  {
    icon: Scissors,
    title: 'CapCut',
    description: 'Dicas e orientações para edição de vídeos.',
  },
  {
    icon: ShoppingBag,
    title: 'Dia a dia da loja',
    description: 'Mensagens, avisos e soluções para situações comuns do comércio.',
  },
]

function ToolCard({
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
    const rotateX = ((y - cy) / cy) * -10
    const rotateY = ((x - cx) / cx) * 10
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{
        transition: 'transform 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className="
        bg-[#151A24] rounded-2xl p-5 border border-white/5
        hover:border-[#FFB62C]/30
        cursor-default group
        flex flex-col gap-4
        shadow-md shadow-black/20
        hover:shadow-[0_0_30px_rgba(255,182,44,0.1)]
      "
    >
      <div className="w-11 h-11 rounded-xl bg-[#FFB62C]/10 flex items-center justify-center group-hover:bg-[#FFB62C]/15 transition-colors flex-shrink-0">
        <Icon size={20} className="text-[#FFB62C]" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
        <p className="text-[#AAB3C5] text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Tools() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tools" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            Ferramentas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white"
          >
            Tudo o que seu negócio precisa,{' '}
            <span className="gradient-text">em um só lugar.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} {...tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
