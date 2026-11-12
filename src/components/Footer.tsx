export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#FFB62C] font-semibold text-sm">Marketing de Bolso</span>
        <p className="text-[#AAB3C5]/60 text-xs text-center">
          © 2024 Marketing de Bolso. Todos os direitos reservados.
        </p>
        <a
          href="https://projeto-acil.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AAB3C5]/60 hover:text-[#FFB62C] text-xs transition-colors"
        >
          Acessar plataforma →
        </a>
      </div>
    </footer>
  )
}
