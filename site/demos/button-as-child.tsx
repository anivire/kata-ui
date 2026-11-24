import { Button } from '@anivire/kata-ui'
import { RiArrowRightUpLine } from '@remixicon/react'

export default function ButtonAsChild() {
  return (
    <Button asChild variant="outline">
      <a href="https://github.com/anivire" target="_blank" rel="noreferrer">
        GitHub
        <RiArrowRightUpLine />
      </a>
    </Button>
  )
}
