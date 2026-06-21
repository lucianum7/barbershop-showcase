import { Link } from 'react-router-dom'
import { Construction } from 'lucide-react'
import { Button } from '@/components/ui/button'

/** Stub temporário para rotas ainda não construídas (será substituído fase a fase). */
export function Placeholder({ title, phase }: { title: string; phase?: string }) {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-2xl place-items-center px-5 text-center">
      <div>
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-accent/10">
          <Construction className="h-7 w-7 text-accent" />
        </div>
        <h1 className="display text-5xl text-foreground">{title}</h1>
        <p className="mt-3 text-muted">
          Esta tela faz parte da reconstrução {phase ? `(${phase})` : ''} e está a caminho.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button variant="outline">Voltar ao início</Button>
        </Link>
      </div>
    </div>
  )
}
