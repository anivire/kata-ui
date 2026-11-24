import { HoverCard, HoverCardContent, HoverCardTrigger } from '@anivire/kata-ui'

export default function HoverCardProfile() {
  return (
    <p className="text-sm text-muted-foreground">
      Created by{' '}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#hover-card" className="dotted-underline text-foreground">
            @anivire
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="flex gap-3 p-4">
          <img src="images/avatar.svg" alt="" className="size-10 shrink-0 rounded-full" />
          <div className="min-w-0">
            <div className="text-sm font-medium">anivire</div>
            <p className="mt-0.5 text-sm text-muted-foreground">Frontend developer</p>
          </div>
        </HoverCardContent>
      </HoverCard>{' '}
      2 days ago
    </p>
  )
}
