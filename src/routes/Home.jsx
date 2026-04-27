import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section
      className="flex items-center justify-center min-h-[60svh] px-7 py-16 text-center"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, var(--accent-bg) 0%, transparent 70%)' }}
    >
      <div className="flex flex-col items-center gap-5 max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight text-[var(--text-h)] leading-tight m-0">
          A melhor loja<br />de jogos online
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--text)] m-0">
          Encontre jogos incríveis para toda a família. Entrega rápida e preços imbatíveis.
        </p>
        <Link
          to="/produtos"
          className="inline-flex items-center gap-1.5 bg-[var(--accent)] text-white! text-sm font-semibold px-7 py-3 rounded-xl no-underline transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-[0_4px_20px_var(--accent-border)]"
        >
          Ver produtos →
        </Link>
      </div>
    </section>
  )
}
