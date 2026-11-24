import { RiCheckFill, RiCloseFill, RiErrorWarningFill, RiInformationFill } from '@remixicon/react'
import type { ComponentProps, ReactNode } from 'react'
import { Toaster as Sonner } from 'sonner'
import { cn } from '../lib/cn'
import { Button } from './button'
import { Spinner } from './spinner'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('animate-shimmer rounded-lg', className)} {...props} />
}

export function Progress({ value, className, tone = 'accent' }: { value: number; className?: string; tone?: 'accent' | 'foreground' }) {
  const pct = Math.max(0, Math.min(100, value * 100))
  return (
    <div className={cn('h-1 w-full overflow-hidden rounded-full bg-muted', className)}>
      <div className={cn('h-full rounded-full transition-[width]', tone === 'accent' ? 'bg-accent' : 'bg-foreground')} style={{ width: `${pct}%` }} />
    </div>
  )
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('empty-state flex w-full flex-col items-center justify-center gap-3 self-stretch rounded-xl bg-inset px-6 py-12 text-center', className)}>
      {icon}
      <div className="flex max-w-md flex-col items-center">
        <div className="text-[0.9375rem] font-medium">{title}</div>
        {description ? <div className="mt-1 text-sm text-muted-foreground">{description}</div> : null}
      </div>
      {action}
    </div>
  )
}

export function Kbd({ className, ...props }: ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn('inline-flex h-5 min-w-5 items-center justify-center rounded bg-field px-1 font-mono text-[0.6875rem] text-muted-foreground', className)}
      {...props}
    />
  )
}

const OVERLAY = 'bg-popover text-foreground shadow-[0_2px_6px_-2px_rgb(0_0_0/0.12),0_18px_48px_-12px_rgb(0_0_0/0.3)] ring-1 ring-foreground/[0.06] [--field:var(--raised-field)] [--field-hover:var(--raised-field-hover)] [--muted:var(--raised-muted)]'

function ToastIcon({ tone, children }: { tone: string; children: ReactNode }) {
  return <span className={cn('grid size-7 place-items-center rounded-lg [&_svg]:size-4', tone)}>{children}</span>
}

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      offset={{ bottom: 'var(--overlay-bottom, 24px)', right: 24 }}
      gap={8}
      icons={{
        success: <ToastIcon tone="bg-success-soft text-success"><RiCheckFill /></ToastIcon>,
        error: <ToastIcon tone="bg-danger-soft text-danger"><RiCloseFill /></ToastIcon>,
        warning: <ToastIcon tone="bg-warning-soft text-warning"><RiErrorWarningFill /></ToastIcon>,
        info: <ToastIcon tone="bg-accent-soft text-accent"><RiInformationFill /></ToastIcon>,
        loading: <ToastIcon tone="bg-foreground/[0.06] text-muted-foreground"><Spinner className="size-4" /></ToastIcon>,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cn('flex w-[var(--width)] items-center gap-3 rounded-xl py-2.5 pl-2.5 pr-4 font-sans', OVERLAY),
          icon: 'shrink-0 self-start',
          loader: 'static! transform-none! data-[visible=false]:hidden',
          content: 'flex min-w-0 flex-1 flex-col gap-0.5 py-1',
          title: 'text-sm font-medium leading-5',
          description: 'text-[0.8125rem] leading-[1.125rem] text-muted-foreground',
          actionButton: 'h-7 shrink-0 cursor-pointer rounded-lg bg-accent px-3 text-xs font-medium text-accent-foreground',
          cancelButton: 'h-7 shrink-0 cursor-pointer rounded-lg bg-field px-3 text-xs font-medium',
        },
      }}
    />
  )
}

export function SaveBar({ message, cancelLabel, saveLabel, saving, onCancel, onSave }: { message: ReactNode; cancelLabel: ReactNode; saveLabel: ReactNode; saving?: boolean; onCancel: () => void; onSave?: () => void }) {
  return (
    <>
      <div aria-hidden className="h-14 shrink-0" />
      <div role="status" className="pointer-events-none fixed inset-x-0 bottom-(--overlay-bottom,1rem) z-40 flex justify-center px-4">
      <div className={cn('pointer-events-auto flex max-w-full items-center gap-3 rounded-full py-1.5 pl-4 pr-1.5 animate-rise', OVERLAY)}>
        <span className="size-2 shrink-0 rounded-full bg-warning" aria-hidden />
        <span className="min-w-0 truncate text-sm">{message}</span>
        <div className="flex shrink-0 gap-1">
          <Button type="button" variant="ghost" size="sm" className="rounded-full" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button type={onSave ? 'button' : 'submit'} variant="accent" size="sm" className="rounded-full" loading={saving} onClick={onSave}>
            {saveLabel}
          </Button>
        </div>
      </div>
      </div>
    </>
  )
}

export function Code({ className, ...props }: ComponentProps<'code'>) {
  return <code className={cn('rounded-md bg-field px-1.5 py-0.5 font-mono text-[0.85em] text-foreground [overflow-wrap:anywhere]', className)} {...props} />
}
