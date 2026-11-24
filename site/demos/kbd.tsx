import { Kbd } from '@anivire/kata-ui'

export default function KbdShortcut() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
      Search
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </span>
  )
}
