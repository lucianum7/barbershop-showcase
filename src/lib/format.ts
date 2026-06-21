export const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatBRL(value: number | string | null | undefined): string {
  const n = typeof value === 'string' ? Number(value) : value
  if (n == null || Number.isNaN(n)) return BRL.format(0)
  return BRL.format(n)
}

export function formatDate(input: string | Date, opts?: Intl.DateTimeFormatOptions): string {
  const d = typeof input === 'string' ? new Date(input) : input
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat('pt-BR', opts ?? { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d)
}

export function weekdayShort(input: string | Date): string {
  const d = typeof input === 'string' ? new Date(input) : input
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(d).replace('.', '').toUpperCase()
}

export function formatPhone(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

/** Normaliza os "benefícios" de um plano: aceita array, string (linhas/;/•) ou nulo. */
export function featuresToList(features: unknown): string[] {
  if (Array.isArray(features)) return features.map((f) => String(f).trim()).filter(Boolean)
  if (typeof features === 'string') return features.split(/\r?\n|;|•/).map((f) => f.trim()).filter(Boolean)
  return []
}
export function featuresToText(features: unknown): string {
  return featuresToList(features).join('\n')
}

/** Indica se um agendamento é coberto por assinatura/plano (para destaque na agenda). */
export function isSubscriberAppt(a: { planCoverage?: boolean; subscriptionId?: string | null; planName?: string | null }): boolean {
  return Boolean(a.planCoverage || a.subscriptionId || (a.planName && a.planName.trim()))
}

export function initials(name: string): string {
  return (name || '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}
