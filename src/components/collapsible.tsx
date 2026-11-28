import { RiArrowDownSLine } from '@remixicon/react'
import { Collapsible as C } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '../lib/cn'

export const Collapsible = C.Root
export const CollapsibleContent = C.Content

export function CollapsibleTrigger({ className, children, ...props }: ComponentProps<typeof C.Trigger>) {
  return (
    <C.Trigger
      className={cn(
        'group flex w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2.5 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-default disabled:hover:bg-transparent',
        className,
      )}
      {...props}
    >
      {children}
      <RiArrowDownSLine aria-hidden className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
    </C.Trigger>
  )
}
