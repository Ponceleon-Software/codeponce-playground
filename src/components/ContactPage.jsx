export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">Contacto</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        ¿Tenés preguntas, sugerencias o querés contribuir de otra forma? Escribinos.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Por ahora, podés contactarnos a través de los <a href="https://github.com/Ponceleon-Software/codeponce-playground/discussions" target="_blank" rel="noopener" className="text-indigo-500 hover:underline">GitHub Discussions</a> del repositorio.
      </p>
    </div>
  )
}
