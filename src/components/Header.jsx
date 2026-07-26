import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/#features', label: 'Características' },
    { to: '/about', label: 'Nosotros' },
    { to: '/contact', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-8 py-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-800 dark:text-white">
          <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-10 h-10" />
          <span>CodePonce</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white rounded"></span>
        </button>

        <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={toggle} className="bg-transparent border border-gray-200 dark:border-gray-600 rounded px-2 py-1 text-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Cambiar modo oscuro">
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
