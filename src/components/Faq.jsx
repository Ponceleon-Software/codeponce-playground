import { useState } from 'react'

const faqs = [
  { q: '¿Necesito experiencia previa?', a: 'No. El nivel 1 empieza desde cero con HTML. Si ya sabés algo, podés saltar a niveles más avanzados.' },
  { q: '¿Cuánto tiempo toma completar un nivel?', a: 'Depende de tu ritmo. Cada nivel tiene entre 6 y 8 desafíos. Calculá 1-2 semanas por nivel si dedicás unas horas por semana.' },
  { q: '¿Puedo contribuir desde cualquier país?', a: 'Sí. Todo es online y asíncrono. Trabajás a tu ritmo desde cualquier parte del mundo.' },
  { q: '¿Cómo sé que mi PR está bien?', a: 'Un maintainer revisará tu PR y te dará feedback. Si todo está correcto, lo mergea y quedará registrado en tu historial.' },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 px-8 bg-gray-50 dark:bg-gray-850">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Preguntas frecuentes</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-4 text-left font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white flex justify-between items-center"
            >
              {faq.q}
              <span className={`transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openIndex === i && (
              <p className="p-4 pt-0 text-gray-500 dark:text-gray-400">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
