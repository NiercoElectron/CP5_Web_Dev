export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-7 py-4 text-center text-sm text-[var(--text)]">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <strong className="text-[var(--text-h)] font-semibold">Minha Loja</strong>.
        {' '}Todos os direitos reservados.
      </p>
    </footer>
  )
}
