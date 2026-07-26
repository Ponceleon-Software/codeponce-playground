export default function LoadingSpinner({ text = 'Cargando...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{text}</p>
    </div>
  )
}
