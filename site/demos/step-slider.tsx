import { StepSlider } from '@anivire/kata-ui'
import { useState } from 'react'

const QUALITY = [
  { value: '360', label: '360p' },
  { value: '480', label: '480p' },
  { value: '720', label: '720p' },
  { value: '1080', label: '1080p' },
  { value: '4k', label: '4K' },
]

export default function StepSliderQuality() {
  const [quality, setQuality] = useState('720')

  return <StepSlider label="Quality" value={quality} onChange={setQuality} options={QUALITY} className="w-full max-w-sm" />
}
