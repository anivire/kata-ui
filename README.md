# kata-ui

[![npm](https://img.shields.io/npm/v/@anivire/kata-ui)](https://www.npmjs.com/package/@anivire/kata-ui)
[![Pages](https://github.com/anivire/kata-ui/actions/workflows/pages.yml/badge.svg)](https://github.com/anivire/kata-ui/actions/workflows/pages.yml)

`@anivire/kata-ui` - a UI kit built on React 19, Tailwind CSS v4 and Radix.

**Showcase:** https://anivire.github.io/kata-ui/

The package ships as source (`.ts` and `.css`) with no build step; the app's Vite and Tailwind compile it.

## Install

```sh
npm install @anivire/kata-ui
```

```css
@import 'tailwindcss';
@import '@anivire/kata-ui/styles.css';
```

`styles.css` registers its own sources via `@source`, so the app doesn't need to point Tailwind at the package.

```tsx
import { Button, Toaster, applyTheme } from '@anivire/kata-ui'
```

## Theming

The kit ships no branding. Colors are driven by `--hue`, `--tint` and `--accent-c`. Add your own theme on top of the package:

```css
@import '@anivire/kata-ui/styles.css';

:root:not([data-theme]),
[data-theme='brand'] {
  --hue: 62;
  --tint: 0.018;
  --accent-c: 0.09;
}
```

`EmptyState` takes an `icon` and `Image` takes a `fallback` (both `ReactNode`), so an app can plug in its own illustration.

## Showcase

```sh
npm run dev         # http://localhost:5173
npm run build:site  # static build in dist-site/, e.g. for GitHub Pages
```

The showcase lives in `site/` and imports the kit straight from `src/`, so changes show up immediately. It is not published to npm.

To add an example, put a file in `site/demos/` and register it in `site/registry.ts`. The page renders the file and shows its source underneath.

## Local development

```sh
npm pack
# in the app:
npm install ../kata-ui/anivire-kata-ui-0.1.0.tgz
```

## Publishing

```sh
npm version patch
npm publish
```
