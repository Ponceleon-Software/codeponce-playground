import FeatureCard from './FeatureCard'

const features = [
  { seed: 'feature1', title: 'Colaboración real', description: 'Trabajá con otros estudiantes usando Pull Requests, code reviews y Git flow profesional.' },
  { seed: 'feature2', title: 'Niveles progresivos', description: 'Empezá con HTML y llegá hasta React y APIs. Cada nivel suma una tecnología nueva.' },
  { seed: 'feature3', title: 'Portafolio vivo', description: 'Cada PR mergeado es evidencia de tu trabajo. Tu historial de contribuciones habla por vos.' },
  { seed: 'feature4', title: 'Mentoría entre pares', description: 'Los alumnos avanzados se convierten en maintainers y guían a los nuevos.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Características</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(f => (
          <FeatureCard key={f.seed} {...f} />
        ))}
      </div>
    </section>
  )
}
