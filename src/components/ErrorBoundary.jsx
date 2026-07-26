import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-16 px-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Algo salió mal</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {this.state.error?.message || 'Ocurrió un error inesperado.'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
