import useGitHubStats from '../hooks/useGitHubStats'
import LoadingSpinner from './LoadingSpinner'
import Skeleton from './Skeleton'
import ErrorBoundary from './ErrorBoundary'

function StatsContent() {
  const { stats, loading, error } = useGitHubStats()

  if (loading) return <Skeleton count={5} />
  if (error) return <p className="text-center text-red-500 dark:text-red-400">Error: {error}</p>
  if (!stats) return null

  const items = [
    { label: '⭐ Estrellas', value: stats.stars },
    { label: '🍴 Forks', value: stats.forks },
    { label: '📦 Issues abiertos', value: stats.openIssues },
    { label: '👀 Watchers', value: stats.watchers },
    { label: '👥 Contribuidores', value: stats.contributors },
  ]

  return (
    <div className="flex justify-center gap-8 flex-wrap max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all min-w-[120px]">
          <strong className="text-4xl text-indigo-500">{item.value}</strong>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function GitHubStats() {
  return (
    <section id="stats" className="py-16 px-8 bg-gray-50 dark:bg-gray-850">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Estadísticas del repositorio</h2>
      <ErrorBoundary>
        <StatsContent />
      </ErrorBoundary>
    </section>
  )
}
