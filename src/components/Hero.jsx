export default function Hero({ title = 'CodePonce Playground', subtitle = 'El laboratorio donde convertís teoría en experiencia real. Colaborá, contribuí y construí tu portafolio.' }) {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-8 py-16 bg-gradient-to-br from-indigo-500 to-pink-500 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">{title}</h1>
      <p className="text-lg max-w-xl mb-10 opacity-90">{subtitle}</p>
      <a href="#features" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
        Comenzá ahora
      </a>
    </section>
  )
}
