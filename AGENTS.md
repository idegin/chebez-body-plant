<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Engineering Guide — Bodyplant Nature Resources

A premium, agency-grade marketing + B2B-lead site. Craft bar is high: every screen should look designed by a senior designer-engineer, not templated. Read `DESIGN.md` (esp. **Part II — Implementation-Ready Design System**), `PLAN.md` (IA/sitemap), and `INFO.md` (brand voice/copy) before building.

## Stack

- **Next.js 16** App Router · React 19 · Turbopack · TypeScript
- **Tailwind CSS v4** — tokens live in `app/globals.css` under `@theme` (there is **no** `tailwind.config.js`)
- **Framer Motion** (`motion` package) for animation · inline SVG icons · `next/font/google` (Manrope + DM Serif Display)

## Commands

```bash
pnpm dev      # local dev (Turbopack)
pnpm build    # production build + typecheck (must stay clean)
pnpm start    # serve production build
```

## Conventions

- **Tokens, not hex.** Use design tokens (`bg-deep-green`, `rounded-[var(--radius-card)]`, `text-[length:var(--text-hero)]`). Never hard-code colors/radii that a token already covers.
- **Server-first.** Components are Server Components by default; add `"use client"` only to interactive/motion leaves. Keep pages server components and extract animated blocks (see `app/components/features.tsx`).
- **Motion.** Reuse the primitives in `app/components/ui/reveal.tsx` (`Reveal`, `Stagger`, `staggerItem`). Always provide a reduced-motion path (`useReducedMotion`).
- **Fonts.** Headings use the serif token (`.font-serif` / `--font-dm-serif`); body/UI use Manrope (default `--font-sans`).
- **Accessibility is non-negotiable** — meet the Definition of Done in `DESIGN.md §26` (WCAG 2.2 AA, keyboard, focus-visible, targets ≥44px).
- **Assets.** Brand logo: `app/brand/body-plant-logo.png` (static-imported for blur + intrinsic sizing).

## Structure

```
app/
  layout.tsx            # fonts, metadata, <html>/<body> shell
  page.tsx              # homepage composition (server)
  globals.css           # Tailwind v4 @theme tokens + base + utilities
  components/
    site-header.tsx     # sticky header + mobile slide-over
    hero.tsx            # animated hero + certification marquee
    features.tsx        # "Why Bodyplant" grid
    site-footer.tsx     # newsletter + nav + contact + certs
    ui/                 # button.tsx, reveal.tsx (shared primitives)
  brand/                # source brand assets (logo)
```
