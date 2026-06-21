import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicLayout } from '@/components/layout/PublicLayout'
import { Placeholder } from '@/components/common/Placeholder'
import { PageLoader } from '@/components/common/PageLoader'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const Galeria = lazy(() => import('@/pages/Galeria'))
const Horarios = lazy(() => import('@/pages/Horarios'))
const Privacidade = lazy(() => import('@/pages/Privacidade'))

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Route>

        <Route path="*" element={<Placeholder title="404" />} />
      </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
