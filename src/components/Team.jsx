const members = [
  { seed: 'person1', name: 'Ana García', role: 'Instructora Frontend' },
  { seed: 'person2', name: 'Carlos López', role: 'Instructor Backend' },
  { seed: 'person3', name: 'María Pérez', role: 'DevOps & CI/CD' },
]

export default function Team() {
  return (
    <section id="team" className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Nuestro equipo</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {members.map(m => (
          <figure key={m.seed} className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow bg-white dark:bg-gray-800">
            <img src={`https://picsum.photos/seed/${m.seed}/200/200`} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" loading="lazy" />
            <figcaption>
              <strong className="block text-lg dark:text-white">{m.name}</strong>
              <span className="text-sm text-gray-500 dark:text-gray-400">{m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
