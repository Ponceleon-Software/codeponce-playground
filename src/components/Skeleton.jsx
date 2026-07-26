export default function Skeleton({ count = 4 }) {
  return (
    <div className="flex justify-center gap-8 flex-wrap max-w-3xl mx-auto">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-40 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      ))}
    </div>
  )
}
