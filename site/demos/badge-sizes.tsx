import { Badge } from '@anivire/kata-ui'

export default function BadgeSizes() {
  return (
    <>
      <Badge variant="accent" size="sm">
        Small
      </Badge>
      <Badge variant="accent">Medium</Badge>
      <Badge variant="accent" size="lg">
        Large
      </Badge>
    </>
  )
}
