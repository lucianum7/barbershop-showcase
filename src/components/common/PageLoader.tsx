export function PageLoader() {
  return (
    <div className="grid min-h-screen place-items-center bg-bg">
      <div className="text-center">
        <div className="mx-auto mb-4 h-14 w-14 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="font-display text-xl tracking-[0.3em] text-accent">CARREGANDO</p>
      </div>
    </div>
  )
}
