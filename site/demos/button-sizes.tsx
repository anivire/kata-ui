import { Button } from '@anivire/kata-ui'
import { RiAddLine, RiSettings3Line } from '@remixicon/react'

export default function ButtonSizes() {
  return (
    <>
      <Button variant="accent" size="sm">
        Small
      </Button>
      <Button variant="accent">Medium</Button>
      <Button variant="accent" size="lg">
        Large
      </Button>
      <Button size="icon" aria-label="Add">
        <RiAddLine />
      </Button>
      <Button size="icon-sm" variant="ghost" aria-label="Settings">
        <RiSettings3Line />
      </Button>
    </>
  )
}
