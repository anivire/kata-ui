import { RiArrowDownSLine, RiCheckLine, RiCloseLine, RiFileCopyLine, RiSearchLine } from '@remixicon/react'
import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { highlight } from 'sugar-high'
import { Button, cn, Tooltip } from '../src'
import { type DemoEntry, type Entry, type Group, loadDemo } from './registry'

export function Sidebar({ groups }: { groups: Group[] }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-15% 0px -75% 0px' },
    )
    for (const item of groups.flatMap((g) => g.items)) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [groups])

  const q = query.trim().toLowerCase()
  const filtered = groups.map((g) => ({ ...g, items: g.items.filter((i) => !q || i.title.toLowerCase().includes(q)) })).filter((g) => g.items.length > 0)

  return (
    <nav aria-label="Components" className="sticky top-16 hidden h-[calc(100dvh-4rem)] flex-col self-start pb-6 pt-8 lg:flex">
      <div className="relative mb-5">
        <RiSearchLine className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-subtle-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
          placeholder="Search components"
          aria-label="Search components"
          className="h-8 w-full rounded-lg bg-foreground/[0.05] pl-8 pr-7 text-[0.8125rem] text-foreground transition-colors placeholder:text-subtle-foreground hover:bg-foreground/[0.08] focus-visible:bg-foreground/[0.08] focus-visible:outline-none"
        />
        {query ? (
          <button type="button" aria-label="Clear" onClick={() => setQuery('')} className="absolute right-1.5 top-1/2 grid size-5 -translate-y-1/2 cursor-pointer place-items-center rounded text-subtle-foreground hover:text-foreground">
            <RiCloseLine className="size-3.5" />
          </button>
        ) : null}
      </div>
      <div className="-mr-3 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto pr-3 scrollbar-none">
        {filtered.map((group) => (
          <div key={group.title}>
            <div className="mb-1.5 flex items-center gap-2 px-3 text-xs font-medium text-subtle-foreground">
              <group.icon className="size-3.5 shrink-0" />
              {group.title}
            </div>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'location' : undefined}
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground aria-[current]:bg-muted aria-[current]:font-medium aria-[current]:text-foreground"
                  >
                    {item.title}
                    {item.demos.length > 1 ? <span className="font-mono text-[0.6875rem] text-subtle-foreground">{item.demos.length}</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {filtered.length === 0 ? <p className="px-1 text-sm text-subtle-foreground">Nothing found</p> : null}
      </div>
    </nav>
  )
}

export function MobileNav({ groups }: { groups: Group[] }) {
  return (
    <nav aria-label="Components" className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-none lg:hidden">
      {groups.flatMap((g) => g.items).map((item) => (
        <a key={item.id} href={`#${item.id}`} className="shrink-0 rounded-full bg-field px-3 py-1.5 text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground">
          {item.title}
        </a>
      ))}
    </nav>
  )
}

export function EntrySection({ entry, children }: { entry: Entry; children?: ReactNode }) {
  return (
    <section id={entry.id} className="scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight">
        <a href={`#${entry.id}`} className="group inline-flex items-center gap-2">
          {entry.title}
          <span className="text-subtle-foreground opacity-0 transition-opacity group-hover:opacity-100">#</span>
        </a>
      </h2>
      <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{entry.description}</p>
      <div className="mt-8 flex flex-col gap-10">
        {children}
        {entry.demos.map((demo) => (
          <Demo key={demo.file} demo={demo} />
        ))}
      </div>
    </section>
  )
}

function Demo({ demo }: { demo: DemoEntry }) {
  const { Component, source } = loadDemo(demo.file)
  const render = demo.render !== false
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-[0.9375rem] font-medium">{demo.title}</h3>
        {demo.description ? <p className="mt-0.5 text-sm text-muted-foreground">{demo.description}</p> : null}
      </div>
      <figure className="overflow-hidden rounded-2xl">
        {render ? (
          <div className={cn('flex min-h-40 flex-wrap items-center justify-center gap-3 bg-surface p-8 sm:p-10', demo.preview)}>
            <Component />
          </div>
        ) : null}
        <CodeBlock code={source} file={`${demo.file}.tsx`} />
      </figure>
    </div>
  )
}

const COLLAPSED_LINES = 14

function CodeBlock({ code, file }: { code: string; file: string }) {
  const html = useMemo(() => highlight(code), [code])
  const long = code.split('\n').length > COLLAPSED_LINES + 4
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="bg-inset">
      <div className="flex h-10 items-center justify-between gap-3 pl-4 pr-1.5">
        <span className="truncate font-mono text-xs text-subtle-foreground">{file}</span>
        <Tooltip content={copied ? 'Copied' : 'Copy'}>
          <Button size="icon-sm" variant="ghost" aria-label="Copy code" onClick={copy}>
            {copied ? <RiCheckLine className="text-success" /> : <RiFileCopyLine />}
          </Button>
        </Tooltip>
      </div>
      <div className="relative">
        <pre
          className={cn('code overflow-x-auto px-4 pb-4 font-mono text-[0.8125rem] leading-6', long && !expanded && 'overflow-y-hidden')}
          style={long && !expanded ? { maxHeight: `${COLLAPSED_LINES * 1.5 + 1}rem` } : undefined}
        >
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
        {long ? (
          <div className={cn('flex justify-center pb-3', !expanded && 'absolute inset-x-0 bottom-0 bg-gradient-to-t from-inset from-40% to-transparent pt-12')}>
            <Button size="sm" variant="secondary" className="rounded-full" onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Collapse' : 'Show full code'}
              <RiArrowDownSLine className={cn('transition-transform', expanded && 'rotate-180')} />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const TOKENS = [
  { title: 'Surfaces', names: ['background', 'surface', 'raised', 'inset', 'muted', 'field', 'border', 'border-strong'] },
  { title: 'Text and accent', names: ['foreground', 'muted-foreground', 'subtle-foreground', 'inverse', 'accent', 'accent-soft', 'ring'] },
  { title: 'Status', names: ['success', 'warning', 'danger', 'info', 'success-soft', 'warning-soft', 'danger-soft', 'info-soft'] },
]

export function TokenPalette() {
  return (
    <figure className="flex flex-col gap-8 rounded-2xl bg-surface p-6 sm:p-8">
      {TOKENS.map((row) => (
        <div key={row.title}>
          <div className="mb-3 text-sm font-medium">{row.title}</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
            {row.names.map((token) => (
              <div key={token} className="flex flex-col gap-2">
                <div className="h-14 rounded-xl" style={{ background: `var(--${token})` }} />
                <span className="truncate font-mono text-[0.6875rem] text-muted-foreground">{token}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm text-muted-foreground">
        Use them as Tailwind classes: <code className="font-mono text-foreground">bg-surface</code>, <code className="font-mono text-foreground">text-muted-foreground</code>,{' '}
        <code className="font-mono text-foreground">bg-accent-soft</code> and so on.
      </p>
    </figure>
  )
}
