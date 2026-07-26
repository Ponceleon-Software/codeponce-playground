import { useState, useEffect } from 'react'

const PER_PAGE = 6
const REPO = 'Ponceleon-Software/codeponce-playground'

export default function ContributorsSearch() {
  const [query, setQuery] = useState('')
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1)
      fetchContributors(1, query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    if (page > 1) fetchContributors(page, query)
  }, [page])

  async function fetchContributors(p, q) {
    try {
      setLoading(true)
      const url = `https://api.github.com/repos/${REPO}/contributors?per_page=${PER_PAGE}&page=${p}`
      const res = await fetch(url)
      const data = await res.json()
      if (p === 1) {
        setContributors(data)
      } else {
        setContributors(prev => [...prev, ...data])
      }
      setHasMore(data.length === PER_PAGE)
    } catch (err) {
      console.error('Error fetching contributors:', err)
    } finally {
      setLoading(false)
    }
  }

  const filtered = query
    ? contributors.filter(c => c.login.toLowerCase().includes(query.toLowerCase()))
    : contributors

  return (
    <section className="py-16 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Contribuidores</h2>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar contribuidor..."
          className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white dark:bg-gray-800 dark:text-white transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(c => (
          <a
            key={c.id}
            href={c.html_url}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
          >
            <img src={c.avatar_url} alt={c.login} className="w-12 h-12 rounded-full" />
            <div>
              <strong className="block text-sm dark:text-white">{c.login}</strong>
              <span className="text-xs text-gray-500 dark:text-gray-400">{c.contributions} contribuciones</span>
            </div>
          </a>
        ))}
      </div>

      {!filtered.length && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No se encontraron contribuidores.</p>
      )}

      {hasMore && !query && (
        <div className="text-center mt-8">
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={loading}
            className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Cargando...' : 'Ver más'}
          </button>
        </div>
      )}
    </section>
  )
}
