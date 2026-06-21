import { Component, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'

interface Props { children: ReactNode }
interface State { hasError: boolean; message?: string }

/** Evita "tela escura": isola erros de render e mostra uma mensagem com opção de recarregar. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, message: error instanceof Error ? error.message : String(error) }
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary]', error)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div className="grid min-h-[60vh] place-items-center px-5 text-center">
        <div>
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-danger/30 bg-danger/10">
            <AlertTriangle className="h-7 w-7 text-danger" />
          </div>
          <h1 className="font-display text-4xl text-foreground">Algo deu errado</h1>
          <p className="mt-2 max-w-md text-sm text-muted">{this.state.message || 'Ocorreu um erro inesperado nesta tela.'}</p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.reload() }}
            className="mt-6 rounded-xl border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Recarregar
          </button>
        </div>
      </div>
    )
  }
}
