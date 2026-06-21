import { Link } from 'react-router-dom'
import { Clock, Info } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'

const HOURS = [
  { d: 'Segunda', h: '09:00 – 18:00' },
  { d: 'Terça a Sexta', h: '09:00 – 20:00' },
  { d: 'Sábado', h: '09:00 – 18:00' },
  { d: 'Domingo', h: 'Fechado' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size="md" withMark subtitle="Barba, Cabelo e Bigode" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Projeto fictício criado exclusivamente para demonstrar interface, navegação e design responsivo.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { l: 'Início', to: '/' },
              { l: 'Horários disponíveis', to: '/horarios' },
              { l: 'Galeria', to: '/galeria' },
              { l: 'Política de Privacidade', to: '/privacidade' },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-muted transition-colors hover:text-accent">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" /> Horário de funcionamento
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {HOURS.map((h) => (
              <li key={h.d} className="flex items-center justify-between gap-4">
                <span className="text-muted">{h.d}</span>
                <span className="text-foreground/90">{h.h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <Info className="h-4 w-4 text-accent" /> Horários e nomes são apenas ilustrativos.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-2 md:flex-row lg:px-8">
          <span>© 2026 Barbershop Pro Showcase.</span>
          <span>Sem backend, cadastros ou integrações externas.</span>
        </div>
      </div>
    </footer>
  )
}
