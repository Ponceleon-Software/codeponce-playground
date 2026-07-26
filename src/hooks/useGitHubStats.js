import { useState, useEffect } from 'react'

const REPO = 'Ponceleon-Software/codeponce-playground'

export default function useGitHubStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        setLoading(true)
        setError(null)

        const repoRes = await fetch(`https://api.github.com/repos/${REPO}`)
        if (!repoRes.ok) throw new Error(`Error ${repoRes.status}: ${repoRes.statusText}`)
        const repoData = await repoRes.json()

        const contribRes = await fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=1`)
        const contributorCount = contribRes.ok
          ? contribRes.headers.get('Link')?.match(/page=(\d+)>; rel="last"/)?.[1] || '1'
          : '?'

        if (!cancelled) {
          setStats({
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            openIssues: repoData.open_issues_count,
            watchers: repoData.subscribers_count,
            contributors: contributorCount,
          })
        }
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchStats()
    return () => { cancelled = true }
  }, [])

  return { stats, loading, error }
}
