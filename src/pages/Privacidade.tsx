import { Section } from '@/components/common/Section'

const SECTIONS: { title: string; body: string }[] = [
  { title: '1. Natureza do projeto', body: 'Esta aplicação é uma demonstração estática de interface. Ela não representa uma empresa ou serviço em operação.' },
  { title: '2. Dados pessoais', body: 'A vitrine não possui formulários de cadastro, autenticação, contato, agendamento ou pagamento e não solicita dados pessoais.' },
  { title: '3. Rede e integrações', body: 'O código publicado não contém cliente de API, analytics, pixels, embeds, webhooks ou integrações com serviços externos.' },
  { title: '4. Armazenamento', body: 'A demonstração não grava informações em localStorage, sessionStorage, cookies ou bancos de dados.' },
  { title: '5. Conteúdo fictício', body: 'Nomes, horários, métricas e composições apresentados são genéricos e servem apenas para ilustrar a experiência visual.' },
]

export default function Privacidade() {
  return (
    <Section eyebrow="Privacidade" title="Demonstração sem coleta" description="O que esta vitrine faz e, principalmente, o que ela não faz.">
      <div className="mx-auto max-w-3xl space-y-5">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border border-line bg-surface/50 p-6">
            <h2 className="font-display text-2xl tracking-wide text-foreground">{s.title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
        <p className="pt-2 text-center text-xs text-muted-2">Barbershop Pro Showcase · conteúdo fictício</p>
      </div>
    </Section>
  )
}
