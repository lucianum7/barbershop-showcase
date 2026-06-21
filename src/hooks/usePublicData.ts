import type { GalleryImage, Professional } from '@/types'

const PROFESSIONALS: Professional[] = [
  { id: 'demo-a', name: 'Profissional A', specialty: 'Estilo clássico', active: true },
  { id: 'demo-b', name: 'Profissional B', specialty: 'Estilo contemporâneo', active: true },
]

const GALLERY: GalleryImage[] = [
  { id: 'demo-1', title: 'Composição clássica', desc: 'Estudo visual fictício', active: true },
  { id: 'demo-2', title: 'Contraste e textura', desc: 'Estudo visual fictício', active: true },
  { id: 'demo-3', title: 'Geometria moderna', desc: 'Estudo visual fictício', active: true },
  { id: 'demo-4', title: 'Luz e profundidade', desc: 'Estudo visual fictício', active: true },
  { id: 'demo-5', title: 'Detalhes premium', desc: 'Estudo visual fictício', active: true },
  { id: 'demo-6', title: 'Ritmo visual', desc: 'Estudo visual fictício', active: true },
]

export function useProfessionals() {
  return { data: PROFESSIONALS }
}
export function useGallery() {
  return { data: GALLERY }
}
