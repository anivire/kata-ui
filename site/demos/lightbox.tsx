import { Lightbox } from '@anivire/kata-ui'

export default function LightboxScreenshot() {
  return (
    <Lightbox src="images/cover.svg" title="Screenshot" closeLabel="Close">
      <button type="button" className="cursor-zoom-in overflow-hidden rounded-lg">
        <img src="images/cover.svg" alt="Open screenshot" className="h-24 w-40 object-cover" />
      </button>
    </Lightbox>
  )
}
