import { Card, Collapsible, CollapsibleContent, CollapsibleTrigger, Switch } from '@anivire/kata-ui'
import { RiSettings3Fill } from '@remixicon/react'

const OPTIONS = ['Allow flight', 'Spawn monsters', 'Enable command blocks']

export default function CollapsibleAdvanced() {
  return (
    <Card className="w-full max-w-sm p-1.5">
      <Collapsible>
        <CollapsibleTrigger>
          <RiSettings3Fill className="size-5 shrink-0 text-muted-foreground" />
          <span className="min-w-0 flex-1">
            <span className="block text-[0.9375rem] font-semibold tracking-tight">Advanced</span>
            <span className="block text-[0.8125rem] text-muted-foreground">{OPTIONS.length} more settings</span>
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {OPTIONS.map((label) => (
            <label key={label} className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-sm">
              {label}
              <Switch />
            </label>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
