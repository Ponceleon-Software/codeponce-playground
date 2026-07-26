export default function FeatureCard({ image, title, description, seed }) {
  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
      <img src={`https://picsum.photos/seed/${seed}/400/300`} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </article>
  )
}
