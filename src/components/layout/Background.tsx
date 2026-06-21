/** Camada de fundo: grade/teia técnica + brilho dourado. Fixa, atrás de tudo. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-web opacity-[0.5]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/[0.06] blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_40%,hsl(var(--bg))_100%)]" />
    </div>
  )
}
