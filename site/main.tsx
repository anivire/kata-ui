import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Code, Toaster } from '../src'
import { Header } from './appearance'
import { EntrySection, MobileNav, Sidebar, TokenPalette } from './docs'
import { ENTRIES, GROUPS } from './registry'
import './styles.css'

const PRINCIPLES = [
  {
    title: 'Soft by default',
    text: 'No hard lines. Surfaces are separated by tone, not borders; corners are rounded and shadows are reserved for things that float. A border is a last resort.',
  },
  {
    title: 'Color from three numbers',
    text: 'Every color is computed in OKLCH from --hue, --tint and --accent-c. A whole theme is three values, and contrast stays even across all of them in light and dark.',
  },
  {
    title: 'Calm motion',
    text: 'Short ease-out transitions, 140–220 ms. Things settle into place instead of bouncing, and all of it switches off under prefers-reduced-motion.',
  },
  {
    title: 'Few, honest options',
    text: 'A handful of variants with sensible defaults, accessible primitives from Radix, and no branding baked in - apps add their own on top.',
  },
]

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        <Sidebar groups={GROUPS} />
        <main className="flex min-w-0 flex-col gap-20 pb-40 pt-5">
          <div id="overview" className="flex scroll-mt-20 flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                kata-ui
                <span lang="ja" className="text-2xl font-normal text-subtle-foreground sm:text-3xl">
                  型
                </span>
              </h1>
              <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                <em className="not-italic text-foreground">Kata</em> is Japanese for “form” - a pattern practised until it becomes second nature. This kit is that set of
                forms: {ENTRIES.filter((e) => e.demos.length > 0).length} components on React 19, Tailwind CSS v4 and Radix that look and behave the same everywhere, so you stop redrawing buttons and
                think about the product instead.
              </p>
              <div className="flex flex-wrap gap-2">
                <Code>npm i @anivire/kata-ui</Code>
                <Code>@import '@anivire/kata-ui/styles.css';</Code>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="rounded-2xl bg-surface p-5">
                  <div className="text-[0.9375rem] font-medium">{p.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
            <MobileNav groups={GROUPS} />
          </div>
          {ENTRIES.filter((entry) => entry.id !== 'overview').map((entry) => (
            <EntrySection key={entry.id} entry={entry}>
              {entry.id === 'tokens' ? <TokenPalette /> : null}
            </EntrySection>
          ))}
        </main>
      </div>
      <Toaster />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
