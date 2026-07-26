const testimonials = [
  { text: 'El playground me enseñó más que cualquier tutorial. Aprendí Git de verdad resolviendo conflictos con mis compañeros.', author: 'Juan, estudiante de CodePonce' },
  { text: 'Mi primer PR fue aterrador. Después de 10, ya me sentía seguro para contribuir a proyectos open source reales.', author: 'Lucía, estudiante de CodePonce' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-8 bg-gray-50 dark:bg-gray-850">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white dark:bg-gray-800 p-8 rounded-lg border-l-4 border-indigo-500 shadow-sm">
            <p className="italic mb-4 dark:text-gray-300">"{t.text}"</p>
            <cite className="not-italic font-semibold text-indigo-600 dark:text-indigo-400">— {t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
