import { Section } from '@/components/common/Section'
import { Reveal } from '@/components/common/Reveal'
import { GalleryTile } from '@/components/gallery/GalleryTile'
import { useGallery } from '@/hooks/usePublicData'

export default function Galeria() {
  const { data: gallery } = useGallery()
  const items = gallery.filter((g) => g.active)
  return (
    <Section
      eyebrow="Portfólio"
      title="Galeria"
      description="Composições fictícias para demonstrar ritmo, hierarquia e responsividade."
      center
    >
      <div className="columns-2 gap-4 [column-fill:_balance] md:columns-3">
        {items.map((img, i) => (
          <Reveal key={img.id} delay={(i % 6) * 0.04} className="mb-4 break-inside-avoid">
            <GalleryTile image={img} className={i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
