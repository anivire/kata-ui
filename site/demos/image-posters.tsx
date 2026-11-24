import { Image, StarIcon } from '@anivire/kata-ui'
import { RiImageLine } from '@remixicon/react'

const POSTERS = [
  { title: 'Night Express', score: 8.7, src: 'images/poster-1.svg' },
  { title: 'Stone Garden', score: 8.1, src: 'images/poster-2.svg' },
  { title: 'Amber', score: 7.9, src: 'images/poster-3.svg' },
  { title: 'Broken link', score: 7.4, src: 'images/missing.png' },
]

export default function ImagePosters() {
  return (
    <div className="grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
      {POSTERS.map((poster) => (
        <a key={poster.title} href="#image" className="group min-w-0">
          <Image
            src={poster.src}
            alt=""
            loading="lazy"
            fallback={<RiImageLine className="size-6 text-subtle-foreground" />}
            className="aspect-[2/3] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="mt-2 truncate text-[0.8125rem] font-medium">{poster.title}</div>
          <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <StarIcon className="size-3 text-warning" />
            {poster.score}
          </div>
        </a>
      ))}
    </div>
  )
}
