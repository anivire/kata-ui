import { RiMoonFill, RiPaletteFill, RiSunFill } from '@remixicon/react'
import { useEffect, useState } from 'react'
import {
  Button,
  type ColorScheme,
  cn,
  Popover,
  PopoverContent,
  PopoverTrigger,
  THEME_PRESETS as BASE_PRESETS,
  Tooltip,
  applyTheme,
} from '../src'

const THEME_PRESETS = [{ id: 'kata', name: 'Kata', light: ['#f9f3f8', '#dc95d5'], dark: ['#0d090c', '#a864a2'] }, ...BASE_PRESETS] as const

type ThemePreset = (typeof THEME_PRESETS)[number]['id']

const STORAGE_KEY = 'kata-ui:appearance'

function readAppearance(): { theme: ThemePreset; scheme: ColorScheme } {
  const fallback = { theme: 'kata' as ThemePreset, scheme: 'system' as ColorScheme }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    return {
      theme: THEME_PRESETS.some((p) => p.id === saved.theme) ? saved.theme : fallback.theme,
      scheme: ['system', 'light', 'dark'].includes(saved.scheme) ? saved.scheme : fallback.scheme,
    }
  } catch {
    return fallback
  }
}

export function Header() {
  const [initial] = useState(readAppearance)
  const [theme, setTheme] = useState<ThemePreset>(initial.theme)
  const [scheme, setScheme] = useState<ColorScheme>(initial.scheme)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, scheme }))
    } catch {}
    applyTheme(theme, scheme)
    if (scheme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme(theme, scheme)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [theme, scheme])

  const dark = scheme === 'dark' || (scheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-8">
        <a href="#top" className="text-[1.0625rem] font-semibold tracking-tight">
          kata<span className="text-subtle-foreground">-ui</span>
        </a>
        <Popover>
          <Tooltip content="Appearance" side="bottom">
            <PopoverTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="Appearance" className="ml-auto rounded-full">
                <RiPaletteFill />
              </Button>
            </PopoverTrigger>
          </Tooltip>
          <PopoverContent align="end" collisionPadding={12} className="flex max-h-[min(85vh,40rem)] w-[min(92vw,22rem)] flex-col overflow-hidden p-0">
            <div className="flex min-h-0 flex-col gap-5 overflow-y-auto p-4">
              <div>
                <div className="mb-2 text-xs font-medium text-muted-foreground">Scheme</div>
                <SchemePicker scheme={scheme} onChange={setScheme} />
              </div>
              <div>
                <div className="mb-2 text-xs font-medium text-muted-foreground">Theme</div>
                <ThemePicker theme={theme} onChange={setTheme} dark={dark} />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

function SchemePreview({ scheme }: { scheme: 'light' | 'dark' }) {
  return (
    <div className={cn(scheme, 'flex h-full w-full gap-[5%] bg-background p-[6%]')}>
      <div className="flex w-[22%] flex-col gap-[10%] pt-[2%]">
        <div className="aspect-square w-[45%] rounded-[30%] bg-accent" />
        <div className="h-[7%] rounded-full bg-accent-soft" />
        <div className="h-[7%] w-4/5 rounded-full bg-muted" />
        <div className="h-[7%] w-3/5 rounded-full bg-muted" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[6%]">
        <div className="flex h-[10%] items-center justify-end">
          <div className="h-full w-[22%] rounded-full bg-accent" />
        </div>
        <div className="grid h-[28%] grid-cols-2 gap-[6%]">
          <div className="rounded-[0.3rem] bg-surface" />
          <div className="rounded-[0.3rem] bg-surface" />
        </div>
        <div className="flex-1 rounded-[0.3rem] bg-surface" />
      </div>
    </div>
  )
}

const SCHEMES: { value: ColorScheme; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

function SchemePicker({ scheme, onChange }: { scheme: ColorScheme; onChange: (scheme: ColorScheme) => void }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {SCHEMES.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={scheme === o.value}
          onClick={() => onChange(o.value)}
          className={cn('cursor-pointer rounded-xl p-1.5 text-center transition-colors', scheme === o.value ? 'bg-accent-soft' : 'bg-surface hover:bg-field')}
        >
          <div className="h-24 overflow-hidden rounded-lg">
            {o.value === 'system' ? (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 [clip-path:inset(0_49.5%_0_0)]">
                  <SchemePreview scheme="light" />
                </div>
                <div className="absolute inset-0 [clip-path:inset(0_0_0_50%)]">
                  <SchemePreview scheme="dark" />
                </div>
              </div>
            ) : (
              <SchemePreview scheme={o.value} />
            )}
          </div>
          <div className={cn('pt-1.5 text-[0.8125rem]', scheme === o.value ? 'font-medium text-foreground' : 'text-muted-foreground')}>{o.label}</div>
        </button>
      ))}
    </div>
  )
}

function Orb({ colors, active, mode }: { colors: readonly [string, string]; active: boolean; mode: 'light' | 'dark' }) {
  return (
    <span
      className={cn('relative inline-block size-[22px] rounded-full shadow-md transition-[scale] duration-200 ease-out', active && 'scale-110')}
      style={{ background: `radial-gradient(circle at 30% 25%, ${colors[0]} 0%, ${colors[1]} 70%, ${mode === 'dark' ? '#000' : colors[1]} 130%)` }}
    >
      {active ? (
        <span className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-raised text-foreground shadow">
          {mode === 'light' ? <RiSunFill className="size-2.5" /> : <RiMoonFill className="size-2.5" />}
        </span>
      ) : null}
    </span>
  )
}

function ThemePicker({ theme, onChange, dark }: { theme: ThemePreset; onChange: (theme: ThemePreset) => void; dark: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {THEME_PRESETS.map((p) => {
        const active = p.id === theme
        return (
          <button
            key={p.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(p.id)}
            className={cn('flex cursor-pointer flex-col items-center gap-1.5 rounded-xl p-2 transition-colors', active ? 'bg-accent-soft' : 'bg-surface hover:bg-field')}
          >
            <div className="flex justify-center gap-1">
              <Orb colors={p.light} active={active && !dark} mode="light" />
              <Orb colors={p.dark} active={active && dark} mode="dark" />
            </div>
            <span className="text-xs">{p.name}</span>
          </button>
        )
      })}
    </div>
  )
}
