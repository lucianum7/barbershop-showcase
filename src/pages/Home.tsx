import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Layers3, MonitorSmartphone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScissorsMark } from '@/components/brand/Logo'
import { Section } from '@/components/common/Section'
import { Reveal } from '@/components/common/Reveal'

const STATS = [
  { value: '100%', label: 'Dados fictícios' },
  { value: '0', label: 'Chamadas externas' },
  { value: 'SPA', label: 'Interface responsiva' },
]

function HeroLogo() {
  return <ScissorsMark className="h-40 w-40 rounded-[2.5rem]" />
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-web absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 pt-14 md:grid-cols-[1.1fr_0.9fr] md:pb-20 md:pt-24 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="gold" className="mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Projeto demonstrativo de UI/UX
            </Badge>
            <h1 className="display text-foreground" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
              Uma vitrine para
              <br />
              <span className="text-gold">inspirar.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Uma experiência visual para explorar navegação, responsividade e componentes de
              um produto digital, sem backend, cadastros ou coleta de dados.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/galeria">
                <Button size="lg">
                  Explorar galeria <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/horarios">
                <Button size="lg" variant="outline">
                  <Clock className="h-4 w-4" /> Ver horários
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="flex items-center gap-1.5 font-display text-4xl text-foreground">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="ring-gold relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,hsl(var(--accent)/0.18),transparent_55%)]" />
            <div className="absolute inset-0 grid place-items-center p-10">
              <HeroLogo />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FEATURES = [
  { icon: MonitorSmartphone, title: 'Design responsivo', desc: 'Layouts preparados para telas pequenas e grandes.' },
  { icon: Layers3, title: 'Componentes reutilizáveis', desc: 'Uma biblioteca visual consistente e fácil de evoluir.' },
  { icon: Sparkles, title: 'Interações cuidadosas', desc: 'Movimento, hierarquia e feedback visual sem serviços externos.' },
]

function Features() {
  return (
    <Section eyebrow="O que esta vitrine demonstra" title="Produto com presença" description="Uma interface fictícia criada para apresentar decisões de design e frontend.">
      <div className="grid gap-4 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface/50 p-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{f.title}</p>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function FinalCTA() {
  return (
    <Section className="pb-24">
      <Reveal>
        <div className="ring-gold relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center md:py-20">
          <div className="bg-web absolute inset-0 opacity-40" />
          <div className="relative">
            <p className="eyebrow mb-3">Continue explorando</p>
            <h2 className="display text-5xl text-foreground md:text-7xl">Veja os detalhes</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Conheça as composições visuais e a prévia de agenda com conteúdo totalmente fictício.
            </p>
            <Link to="/galeria" className="mt-8 inline-block">
              <Button size="lg">
                Abrir galeria <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FinalCTA />
    </>
  )
}
