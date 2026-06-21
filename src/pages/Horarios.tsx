import { useMemo } from 'react'
import { CalendarClock, Clock, LayoutTemplate, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/common/Reveal'
import { useProfessionals } from '@/hooks/usePublicData'
import { weekdayShort } from '@/lib/format'

const FEATURES = [
  { icon: Clock, title: 'Grade visual', desc: 'horários apenas ilustrativos' },
  { icon: LayoutTemplate, title: 'Layout adaptável', desc: 'desktop e mobile' },
  { icon: Sparkles, title: 'Conteúdo local', desc: 'sem consulta externa' },
]

function buildSlots(date: Date, proIndex: number): string[] {
  const dow = date.getDay()
  if (dow === 0) return [] // domingo fechado
  const start = proIndex === 1 ? 10 : 9
  const out: string[] = []
  for (let h = start; h <= start + 2; h++) {
    out.push(`${String(h).padStart(2, '0')}:00`, `${String(h).padStart(2, '0')}:30`)
  }
  return out.slice(0, 4)
}

function nextDays(n: number): Date[] {
  const days: Date[] = []
  const base = new Date()
  for (let i = 0; i < n; i++) {
    const d = new Date(base)
    d.setDate(base.getDate() + i)
    days.push(d)
  }
  return days
}

export default function Horarios() {
  const { data: pros } = useProfessionals()
  const days = useMemo(() => nextDays(7), [])
  const activePros = pros.filter((p) => p.active).slice(0, 2)

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Coluna esquerda */}
        <Reveal>
          <Badge variant="gold" className="mb-5">
            <CalendarClock className="h-3.5 w-3.5" /> Prévia visual fictícia
          </Badge>
          <h1 className="display text-foreground" style={{ fontSize: 'clamp(3rem,8vw,6rem)' }}>
            Horários
            <br />
            <span className="text-gold">disponíveis</span>
          </h1>
          <p className="mt-5 max-w-md text-muted">
            Esta tela demonstra uma composição de agenda com profissionais e horários gerados
            localmente. Nenhuma reserva é criada e nenhum dado é enviado.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-surface/60 p-4">
                <f.icon className="mb-3 h-5 w-5 text-accent" />
                <p className="text-sm font-semibold text-foreground">{f.title}</p>
                <p className="text-xs text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Coluna direita — painel */}
        <Reveal delay={0.1}>
          <div className="ring-gold overflow-hidden rounded-2xl border border-line bg-surface/70">
            <div className="border-b border-line p-5">
              <div>
                <p className="eyebrow">Próximos 7 dias</p>
                <h2 className="font-display text-2xl tracking-wide text-foreground">
                  Escolha seu melhor horário
                </h2>
              </div>
            </div>

            <div className="divide-y divide-line">
              {days.map((day) => {
                const closed = day.getDay() === 0
                return (
                  <div key={day.toISOString()} className="flex gap-5 p-5">
                    <div className="grid h-20 w-16 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-center">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted">{weekdayShort(day)}</p>
                        <p className="font-display text-2xl text-foreground">{day.getDate()}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted">
                          {new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(day).replace('.', '')}
                        </p>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      {closed ? (
                        <p className="py-6 text-sm text-muted-2">Agenda cheia ou sem expediente neste dia.</p>
                      ) : (
                        <div className="space-y-3">
                          {activePros.map((pro, idx) => {
                            const slots = buildSlots(day, idx)
                            return (
                              <div key={pro.id} className="flex flex-wrap items-center gap-2">
                                <span className="w-16 shrink-0 text-sm font-semibold text-foreground">{pro.name}</span>
                                {slots.length ? (
                                  slots.map((s) => <span key={s} className="chip text-accent">{s}</span>)
                                ) : (
                                  <span className="text-xs text-muted-2">sem horários</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
