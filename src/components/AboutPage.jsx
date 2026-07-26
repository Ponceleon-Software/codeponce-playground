export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Sobre CodePonce Playground</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          CodePonce Playground es un laboratorio open source donde estudiantes de desarrollo web
          aplican sus conocimientos en un entorno colaborativo real.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 dark:text-white">Nuestra misión</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Creemos que la mejor forma de aprender programación es construyendo proyectos reales
          con otras personas. Por eso creamos este espacio donde cada estudiante puede
          contribuir, recibir feedback y construir un portafolio público.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4 dark:text-white">¿Cómo funciona?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          El repositorio está organizado en 6 niveles. Cada nivel es una branch que agrega
          una tecnología nueva. Los estudiantes resuelven Issues, abren Pull Requests y
          reciben code reviews de maintainers.
        </p>
      </div>
    </div>
  )
}
