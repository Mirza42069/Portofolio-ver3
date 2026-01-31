# AGENTS.md
Concise repository guidance for agentic coding. Use MUST/SHOULD/NEVER to guide decisions.

## Project Snapshot
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, motion, next-themes.
- Entry points: `app/layout.tsx`, `app/page.tsx`, global styles in `app/globals.css`.
- Path alias: `@/*` maps to repo root (see `tsconfig.json`).
- CSS: Tailwind utilities; `cn()` helper in `lib/utils.ts` for class merging.
- Fonts: `JetBrains_Mono` via `next/font` with `--font-sans` variable.

## Commands
- Dev: `npm run dev` (or `bun run dev`).
- Build: `npm run build`.
- Start (prod): `npm run start`.
- Lint: `npm run lint`.
- Tests: NONE configured (no `test` script / runner).
- Single test: N/A until a test runner is added; update this file when introducing tests.

## Code Style
- MUST: Use TypeScript; `.tsx` for React components, `.ts` for utilities.
- MUST: Prefer server components by default; add `"use client"` only when hooks or client APIs are required.
- MUST: Use default exports only for Next.js route files (`page.tsx`, `layout.tsx`); otherwise prefer named exports.
- MUST: Keep strict typing (`tsconfig.json` has `strict: true`); avoid `any` and unsafe casts.
- SHOULD: Use `type` for props/unions; use `interface` only when extending or for public shapes.
- MUST: Use type-only imports (`import type`) when importing only types.
- SHOULD: Import order: external packages, then `@/` aliases, then relative paths; keep side-effect imports (CSS) last.
- MUST: Use double quotes in TS/TSX imports and strings, consistent with existing files.
- SHOULD: Match the existing file's formatting (indentation and semicolons); do not reformat unrelated code.
- MUST: Use `cn()` from `lib/utils.ts` for conditional/merged Tailwind classes.
- SHOULD: Keep Tailwind class lists readable (layout → spacing → color → state); avoid inline styles unless necessary.
- MUST: Use accessible semantics (`button`, `a`, `label`) before ARIA; icon-only buttons need `aria-label`.
- MUST: External links use `target="_blank"` with `rel="noopener noreferrer"`.
- SHOULD: Keep content tone consistent with current lowercase style in `app/page.tsx`.
- MUST: Handle async errors with `try/catch` and user-friendly UI; for new routes, add `error.tsx`/`not-found.tsx` when appropriate.
- SHOULD: Keep data arrays (projects/work) in `app/page.tsx` simple and serializable.

## External Agent Rules
- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` found as of last update.

## UI Guidelines (MUST/SHOULD/NEVER)

### Interactions
- MUST: Full keyboard support per WAI-ARIA APG; visible focus rings (`:focus-visible` and `:focus-within`); manage focus (trap/move/return).
- NEVER: `outline: none` without a visible focus replacement.

### Targets & Input
- MUST: Hit target ≥24px (mobile ≥44px) or expand hit area; mobile `<input>` font-size ≥16px; `touch-action: manipulation`.
- NEVER: Disable zoom (`user-scalable=no`, `maximum-scale=1`).
- SHOULD: Set `-webkit-tap-highlight-color` to match design.

### Forms
- MUST: Hydration-safe inputs; do not block paste; loading buttons keep label + show spinner.
- MUST: Enter submits focused input; in `<textarea>`, ⌘/Ctrl+Enter submits.
- MUST: Keep submit enabled until request starts; then disable with spinner.
- MUST: Accept free text, validate after; allow incomplete submit to surface validation.
- MUST: Errors inline next to fields; on submit, focus first error.
- MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`; trim values for trailing spaces.
- MUST: Warn on unsaved changes before navigation; compatible with password managers & 2FA; allow pasting codes.
- MUST: No dead zones on checkboxes/radios; label + control share one hit target.
- SHOULD: Disable spellcheck for emails/codes/usernames; placeholders end with `…` and show examples.

### State & Navigation
- MUST: URL reflects state (filters/tabs/pagination/expanded panels); Back/Forward restores scroll.
- MUST: Links use `<a>`/`<Link>` for navigation; NEVER use `<div onClick>` for navigation.

### Feedback
- SHOULD: Optimistic UI; reconcile on response; on failure rollback or offer Undo.
- MUST: Confirm destructive actions or provide Undo window.
- MUST: Use polite `aria-live` for toasts/inline validation.
- SHOULD: Use ellipsis `…` for follow-ups ("Rename…") and loading states ("Loading…").

### Touch & Drag
- MUST: Generous targets, clear affordances; avoid finicky interactions.
- MUST: Delay first tooltip; subsequent peers instant.
- MUST: `overscroll-behavior: contain` in modals/drawers.
- MUST: During drag, disable text selection and set `inert` on dragged elements.
- MUST: If it looks clickable, it must be clickable.

### Autofocus
- SHOULD: Autofocus on desktop with a single primary input; rarely on mobile.

## Animation
- MUST: Honor `prefers-reduced-motion`.
- SHOULD: Prefer CSS > Web Animations API > JS libraries.
- MUST: Animate compositor-friendly props only (`transform`, `opacity`); NEVER animate layout props.
- NEVER: `transition: all`; list properties explicitly.
- SHOULD: Animate only to clarify cause/effect or add deliberate delight; choose easing to match change.
- MUST: Animations interruptible and input-driven (no autoplay); correct `transform-origin`.
- MUST: SVG transforms on `<g>` wrapper with `transform-box: fill-box`.

## Layout
- SHOULD: Optical alignment; adjust ±1px when perception beats geometry.
- MUST: Deliberate alignment to grid/baseline/edges.
- SHOULD: Balance icon/text lockups (weight/size/spacing/color).
- MUST: Verify mobile, laptop, ultra-wide (simulate ultra-wide at 50% zoom).
- MUST: Respect safe areas (`env(safe-area-inset-*)`); avoid unwanted scrollbars.
- SHOULD: Flex/grid over JS measurement for layout.

## Content & Accessibility
- SHOULD: Inline help first; tooltips last resort.
- MUST: Skeletons mirror final content to avoid layout shift; `<title>` matches current context.
- MUST: No dead ends; always offer next step/recovery; design empty/sparse/dense/error states.
- SHOULD: Curly quotes (" "); avoid widows/orphans (`text-wrap: balance`).
- MUST: `font-variant-numeric: tabular-nums` for comparisons; redundant status cues (not color-only).
- MUST: Accessible names exist even when visuals omit labels; icon-only buttons have descriptive `aria-label`.
- MUST: Use `…` character (not `...`); "Skip to content" link; hierarchical `<h1>`–`<h6>` with `scroll-margin-top`.
- MUST: Resilient to user-generated content; locale-aware dates/times/numbers (`Intl.*`).
- MUST: Accurate `aria-label`; decorative elements `aria-hidden`; prefer native semantics before ARIA.
- MUST: Non-breaking spaces: `10 MB`, `⌘ K`, brand names.

## Content Handling
- MUST: Text containers handle long content (`truncate`, `line-clamp-*`, `break-words`).
- MUST: Flex children use `min-w-0` to allow truncation.
- MUST: Handle empty states—no broken UI for empty strings/arrays.

## Performance
- SHOULD: Test iOS Low Power Mode and macOS Safari.
- MUST: Measure reliably (disable extensions that skew runtime); track re-renders (React DevTools/React Scan).
- MUST: Profile with CPU/network throttling; batch layout reads/writes; avoid reflows/repaints.
- MUST: Mutations (`POST`/`PATCH`/`DELETE`) target <500ms.
- SHOULD: Prefer uncontrolled inputs; controlled inputs cheap per keystroke.
- MUST: Virtualize large lists (>50 items); preload above-fold images; lazy-load the rest; prevent CLS with explicit dimensions.
- SHOULD: `<link rel="preconnect">` for CDN domains; preload critical fonts with `font-display: swap`.

## Dark Mode & Theming
- MUST: `color-scheme: dark` on `<html>` for dark themes.
- SHOULD: `<meta name="theme-color">` matches page background.
- MUST: Native `<select>` explicit `background-color` and `color` (Windows fix).

## Hydration
- MUST: Inputs with `value` need `onChange` (or use `defaultValue`).
- SHOULD: Guard date/time rendering against hydration mismatch.

## Design
- SHOULD: Layered shadows (ambient + direct); crisp edges via semi-transparent borders + shadows.
- SHOULD: Nested radii (child ≤ parent); concentric.
- SHOULD: Hue consistency: tint borders/shadows/text toward bg hue.
- MUST: Accessible charts (color-blind-friendly palettes); meet contrast—prefer APCA over WCAG 2.
- MUST: Increase contrast on `:hover`/`:active`/`:focus`.
- SHOULD: Match browser UI to bg; avoid dark gradient banding (use background images when needed).
