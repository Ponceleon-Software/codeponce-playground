export default function About() {
  return (
    <section id="about" className="py-16 px-8 bg-gray-50 dark:bg-gray-850">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Sobre el proyecto</h2>
      <article className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 dark:text-white">¿Qué es CodePonce Playground?</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Es un repositorio abierto donde estudiantes de CodePonce aplican los conocimientos adquiridos en la plataforma. Acá no hay teoría — solo práctica colaborativa con tecnologías web reales.
        </p>
        <figure className="text-center">
          <img src="https://picsum.photos/seed/about/600/400" alt="Estudiantes colaborando" className="rounded-lg mx-auto" loading="lazy" />
          <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">Estudiantes colaborando en el playground durante un sprint.</figcaption>
        </figure>
      </article>
    </section>
  )
}
