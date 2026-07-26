import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">CodePonce Playground</h4>
          <p className="text-sm opacity-80">Aprendé haciendo. Colaborá creciendo.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Recursos</h4>
          <ul className="space-y-2">
            <li><a href="https://codeponce.app" target="_blank" rel="noopener" className="text-sm text-gray-400 hover:text-white transition-colors">CodePonce App</a></li>
            <li><a href="./CONTRIBUTING.md" className="text-sm text-gray-400 hover:text-white transition-colors">Guía de contribución</a></li>
            <li><a href="./CODE_OF_CONDUCT.md" className="text-sm text-gray-400 hover:text-white transition-colors">Código de conducta</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm opacity-60 border-t border-gray-800 pt-8 max-w-6xl mx-auto">&copy; 2026 Ponceleon Software. Todos los derechos reservados.</p>
    </footer>
  )
}
