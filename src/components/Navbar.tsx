import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'O que é?', href: '#what-is' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Ferramentas', href: '#tools' },
  { label: 'Demonstração', href: '#demo' },
  { label: 'Benefícios', href: '#benefits' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-[#FFB62C] font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Marketing de Bolso
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-[#AAB3C5] hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://projeto-acil.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#FFB62C] text-[#0B0E14] font-semibold text-sm hover:bg-[#FFD97A] transition-colors duration-200"
        >
          Acessar plataforma
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-[#AAB3C5] hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0B0E14]/95 backdrop-blur-md border-b border-white/5"
          >
            <ul className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left text-[#AAB3C5] hover:text-white py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://projeto-acil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center px-4 py-2.5 rounded-lg bg-[#FFB62C] text-[#0B0E14] font-semibold text-sm hover:bg-[#FFD97A] transition-colors"
                >
                  Acessar plataforma
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
