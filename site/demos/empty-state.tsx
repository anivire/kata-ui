import { Button, EmptyState } from '@anivire/kata-ui'
import { RiAddLine, RiInboxLine } from '@remixicon/react'

export default function EmptyStateServers() {
  return (
    <EmptyState
      icon={<RiInboxLine className="size-10 text-subtle-foreground" />}
      title="No servers yet"
      description="Create your first one - it takes a minute."
      action={
        <Button variant="accent" size="sm">
          <RiAddLine />
          Create server
        </Button>
      }
    />
  )
}
