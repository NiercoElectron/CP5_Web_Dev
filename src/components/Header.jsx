import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }) =>
  `text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors ${
    isActive
      ? 'text-[var(--accent)] bg-[var(--accent-bg)]'
      : 'text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--accent-bg)]'
  }`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] flex items-center justify-between px-7 gap-4 backdrop-blur-sm">
      <Link
        to="/"
        className="flex items-center gap-2.5 py-3.5 no-underline hover:opacity-100"
      >
        <span className="text-xl leading-none">🛍️</span>
        <span className="text-[17px] font-bold tracking-tight text-[var(--text-h)]">Minha Loja</span>
      </Link>
      <nav className="flex gap-1">
        <NavLink to="/" end className={navClass}>Home</NavLink>
        <NavLink to="/produtos" className={navClass}>Produtos</NavLink>
      </nav>
    </header>
  )
}
