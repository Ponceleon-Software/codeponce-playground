const plans = [
  { name: 'Principiante', levels: 'Niveles 1-3', reviews: 'Automáticos', price: 'Gratis' },
  { name: 'Intermedio', levels: 'Niveles 1-5', reviews: 'Con maintainers', price: '$9/mes' },
  { name: 'Avanzado', levels: 'Todos los niveles', reviews: 'Prioritarios + 1:1', price: '$19/mes' },
]

export default function PricingTable() {
  return (
    <section id="pricing" className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Planes</h2>
      <div className="overflow-hidden rounded-lg shadow dark:shadow-gray-800">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="p-4 text-left font-semibold">Plan</th>
              <th className="p-4 text-left font-semibold">Acceso a niveles</th>
              <th className="p-4 text-left font-semibold">Code Reviews</th>
              <th className="p-4 text-left font-semibold">Precio</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p, i) => (
              <tr key={i} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 even:bg-indigo-50 dark:even:bg-gray-750 even:hover:bg-gray-50 dark:even:hover:bg-gray-800 transition-colors">
                <td className="p-4 dark:text-gray-300">{p.name}</td>
                <td className="p-4 dark:text-gray-300">{p.levels}</td>
                <td className="p-4 dark:text-gray-300">{p.reviews}</td>
                <td className="p-4 dark:text-gray-300">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
