import type { ComponentType } from 'react'

const modules = import.meta.glob<{ default: ComponentType }>('./demos/*.tsx', { eager: true })
const sources = import.meta.glob<string>('./demos/*.tsx', { eager: true, query: '?raw', import: 'default' })

export interface DemoEntry {
  file: string
  title: string
  description?: string
  preview?: string
  render?: boolean
}

export interface Entry {
  id: string
  title: string
  description: string
  demos: DemoEntry[]
}

export interface Group {
  title: string
  items: Entry[]
}

export function loadDemo(file: string) {
  const key = `./demos/${file}.tsx`
  const Component = modules[key]?.default
  const source = sources[key]
  if (!Component || source === undefined) throw new Error(`Demo not found: ${file}`)
  return { Component, source: source.trimEnd() }
}

export const GROUPS: Group[] = [
  {
    title: 'Foundations',
    items: [
      { id: 'overview', title: 'Overview', description: '', demos: [] },
      {
        id: 'tokens',
        title: 'Tokens',
        description: 'Every color is derived from three variables: --hue, --tint and --accent-c. Switch the theme from the palette button in the header to see them change.',
        demos: [],
      },
    ],
  },
  {
    title: 'Actions',
    items: [
      {
        id: 'button',
        title: 'Button',
        description: 'Use accent or primary for the main action and secondary or ghost for the rest. Pass loading while a request is in flight: the button disables itself and shows a spinner.',
        demos: [
          { file: 'button-variants', title: 'Variants' },
          { file: 'button-sizes', title: 'Sizes and icons' },
          { file: 'button-loading', title: 'Loading', description: 'Click it to see the spinner for 1.5 seconds.' },
          { file: 'button-as-child', title: 'Link as a button', description: 'asChild passes the styles to the child element, such as <a> or a router Link.' },
        ],
      },
      {
        id: 'badge',
        title: 'Badge',
        description: 'Short labels for status and categories. StatusDot is a state indicator that can pulse.',
        demos: [
          { file: 'badge-variants', title: 'Variants' },
          { file: 'badge-sizes', title: 'Sizes' },
          { file: 'badge-status', title: 'Status with StatusDot' },
        ],
      },
    ],
  },
  {
    title: 'Forms',
    items: [
      {
        id: 'field',
        title: 'Input',
        description: 'Input and Textarea are text fields. Wrap any control in Field to add a label, a hint and an error; the red outline is driven by aria-invalid.',
        demos: [
          { file: 'field-basic', title: 'Form', preview: 'items-stretch' },
          { file: 'field-validation', title: 'Validation', description: 'Fix the address and the error goes away.', preview: 'items-stretch' },
          { file: 'field-textarea', title: 'Textarea', preview: 'items-stretch' },
        ],
      },
      {
        id: 'select',
        title: 'Select',
        description: 'A Radix-based dropdown. Supports an empty value, per-option hints and a prefix in the trigger.',
        demos: [
          { file: 'select-basic', title: 'With hints' },
          { file: 'select-prefix', title: 'Compact filter' },
        ],
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'A toggle for settings that apply immediately.',
        demos: [{ file: 'switch-settings', title: 'Settings list', preview: 'items-stretch' }],
      },
      {
        id: 'segmented',
        title: 'Segmented',
        description: 'Tabs and mode switcher with a sliding indicator. An option with a title shows it as a tooltip.',
        demos: [
          { file: 'segmented-tabs', title: 'Tabs with counts' },
          { file: 'segmented-icons', title: 'View mode' },
        ],
      },
      {
        id: 'step-slider',
        title: 'StepSlider',
        description: 'A slider that snaps to fixed steps. Keyboard support: ← → Home End.',
        demos: [{ file: 'step-slider', title: 'Video quality' }],
      },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { id: 'tooltip', title: 'Tooltip', description: 'A hint for icon-only controls. It opens on keyboard focus, not on mouse focus.', demos: [{ file: 'tooltip', title: 'Action bar' }] },
      { id: 'popover', title: 'Popover', description: 'A click-triggered panel for small forms and settings. Fields inside it adapt to the raised surface automatically.', demos: [{ file: 'popover', title: 'Quick rename' }] },
      { id: 'dropdown-menu', title: 'DropdownMenu', description: 'An actions menu. It does not block the page by default (modal=false).', demos: [{ file: 'dropdown-menu', title: 'Item actions' }] },
      { id: 'hover-card', title: 'HoverCard', description: 'A preview on hover, for mentions and links.', demos: [{ file: 'hover-card', title: 'User profile' }] },
      { id: 'dialog', title: 'Dialog', description: 'A modal with a title and a description. Closes on Esc and on outside click.', demos: [{ file: 'dialog', title: 'Delete confirmation' }] },
      { id: 'lightbox', title: 'Lightbox', description: 'A fullscreen image viewer. Click anywhere to close.', demos: [{ file: 'lightbox', title: 'Screenshot' }] },
    ],
  },
  {
    title: 'Feedback',
    items: [
      {
        id: 'toast',
        title: 'Toast',
        description: 'Notifications powered by Sonner. Render Toaster once at the app root, then call toast() from anywhere.',
        demos: [
          { file: 'toaster', title: 'Setup', render: false },
          { file: 'toast-kinds', title: 'Kinds' },
          { file: 'toast-advanced', title: 'Promise and action' },
        ],
      },
      { id: 'alert', title: 'Alert', description: 'An inline message in four tones: info, success, warning and danger. Add a title for a two-line message and action for a button on the right.', demos: [{ file: 'alert-variants', title: 'Variants', preview: 'items-stretch' }, { file: 'alert-action', title: 'With an action', preview: 'items-stretch' }] },
      { id: 'save-bar', title: 'SaveBar', description: 'A floating unsaved-changes bar at the bottom of the screen.', demos: [{ file: 'save-bar', title: 'Form with a draft', preview: 'items-stretch' }] },
      { id: 'progress', title: 'Progress', description: 'A thin progress bar; value goes from 0 to 1.', demos: [{ file: 'progress', title: 'Server resources', preview: 'items-stretch' }] },
      { id: 'spinner', title: 'Spinner', description: 'A loading indicator that inherits the text color.', demos: [{ file: 'spinner', title: 'Variants' }] },
      { id: 'skeleton', title: 'Skeleton', description: 'A shimmering placeholder while data is loading.', demos: [{ file: 'skeleton', title: 'List', preview: 'items-stretch' }] },
      { id: 'empty-state', title: 'EmptyState', description: 'An empty screen with an icon, text and an action.', demos: [{ file: 'empty-state', title: 'No data', preview: 'p-4' }] },
    ],
  },
  {
    title: 'Display',
    items: [
      {
        id: 'card',
        title: 'Card',
        description: 'A surface with CardHeader, CardContent and CardFooter slots.',
        demos: [
          { file: 'card-form', title: 'Settings form', preview: 'bg-background' },
          { file: 'card-server', title: 'Status', preview: 'bg-background' },
        ],
      },
      { id: 'collapsible', title: 'Collapsible', description: 'A section that expands in place. The chevron in CollapsibleTrigger turns when it is open.', demos: [{ file: 'collapsible', title: 'Advanced settings', preview: 'bg-background' }] },
      { id: 'image', title: 'Image', description: 'An image that fades in once loaded and shows a fallback on error.', demos: [{ file: 'image-posters', title: 'Posters with a fallback' }] },
      { id: 'star-icon', title: 'StarIcon', description: 'A rating icon, filled or outlined.', demos: [{ file: 'star-rating', title: 'Rating' }] },
      { id: 'kbd', title: 'Kbd', description: 'A key or a key combination.', demos: [{ file: 'kbd', title: 'Shortcut' }] },
      { id: 'code', title: 'Code', description: 'Inline code within text.', demos: [{ file: 'code', title: 'In a paragraph' }] },
    ],
  },
]

export const ENTRIES = GROUPS.flatMap((g) => g.items)
