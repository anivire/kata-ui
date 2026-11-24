import { StarIcon } from '@anivire/kata-ui'
import { useState } from 'react'

export default function StarRating() {
  const [rating, setRating] = useState(4)

  return (
    <div className="flex gap-0.5 text-warning" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={rating === n}
          aria-label={`${n} of 5`}
          onClick={() => setRating(n)}
          className="cursor-pointer p-0.5 transition-transform hover:scale-110"
        >
          <StarIcon outline={n > rating} className="size-6" />
        </button>
      ))}
    </div>
  )
}
