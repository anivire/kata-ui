import { Code } from '@anivire/kata-ui'

export default function CodeInline() {
  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      The port is set by <Code>SERVER_PORT</Code> and defaults to <Code>25565</Code>.
    </p>
  )
}
