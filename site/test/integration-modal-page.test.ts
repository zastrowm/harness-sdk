import { existsSync, readFileSync } from 'node:fs'

import { parse } from 'node-html-parser'
import { describe, expect, it } from 'vitest'

// Reads the built site (npm run build), like box-page.test.ts.
const base = (process.env.ASTRO_BASE_PATH ?? '/').replace(/\/$/, '')
const built = (path: string) => parse(readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8'))

describe('integration page as a modal', () => {
  const page = built('docs/integrations/tools/utcp/index.html')
  const dialog = page.querySelector('dialog[data-integ-modal]')

  it('server-renders the whole page inside an open dialog', () => {
    expect(dialog).not.toBeNull()
    expect(dialog?.hasAttribute('open')).toBe(true)
    expect(dialog?.getAttribute('aria-labelledby')).toBe('_top')
    expect(dialog?.querySelector('main h1#_top')?.text.trim()).toBe('Universal Tool Calling Protocol (UTCP)')
    expect(dialog?.querySelector('a[data-integ-close]')?.getAttribute('href')).toBe(`${base}/integrations/`)
  })

  it('keeps the page actions and drops the TOC and the old back link', () => {
    expect(dialog?.querySelector('[data-page-action="view-markdown"]')?.getAttribute('href')).toMatch(/index\.md$/)
    expect(dialog?.querySelector('[data-page-action="edit"]')).not.toBeNull()
    expect(page.querySelector('starlight-toc')).toBeNull()
    expect(page.querySelector('.integrations-back')).toBeNull()
  })

  it('draws the catalog rail and an inert backdrop behind the dialog', () => {
    const backdrop = page.querySelector('[data-integ-backdrop]')
    expect(backdrop?.hasAttribute('inert')).toBe(true)
    expect(backdrop?.getAttribute('aria-hidden')).toBe('true')
    const rail = page.querySelector('.sidebar-content')
    expect(rail?.querySelector('.product-switcher__slug')?.text.trim()).toBe('/integrations')
    expect(rail?.querySelector(`a[href="${base}/integrations/"]`)?.getAttribute('aria-current')).toBe('page')
  })

  it('keeps the canonical URL and the markdown twin', () => {
    expect(page.querySelector('link[rel="canonical"]')?.getAttribute('href')).toMatch(
      /\/docs\/integrations\/tools\/utcp\/$/
    )
    expect(existsSync(new URL('../dist/docs/integrations/tools/utcp/index.md', import.meta.url))).toBe(true)
  })

  it('applies to overview pages without a card, but not to the get-featured guide', () => {
    expect(
      built('docs/integrations/memory-stores/overview/index.html').querySelector('dialog[data-integ-modal]')
    ).not.toBeNull()
    expect(built('docs/integrations/get-featured/index.html').querySelector('dialog[data-integ-modal]')).toBeNull()
  })
})

describe('catalog cards open integration pages in the modal', () => {
  const page = built('integrations/index.html')

  it('marks only integration-page cards for the modal', () => {
    const marked = page.querySelectorAll('a[data-cat-entry]')
    expect(marked.length).toBeGreaterThan(0)
    for (const a of marked) expect(a.getAttribute('href')).toMatch(new RegExp(`^${base}/docs/integrations/`))
    expect(page.querySelector('a[data-cat-entry="utcp"]')?.getAttribute('href')).toBe(
      `${base}/docs/integrations/tools/utcp/`
    )
  })

  it('leaves built-in feature cards (SDK user-guide docs) as plain links', () => {
    const userGuide = page.querySelectorAll(`.cat-card a.cat-card-title[href^="${base}/docs/user-guide/"]`)
    expect(userGuide.length).toBeGreaterThan(0)
    for (const a of userGuide) expect(a.hasAttribute('data-cat-entry')).toBe(false)
  })

  it('renders the modal dialog instead of the old drawer', () => {
    expect(page.querySelector('dialog[data-cat-modal].integ-modal')).not.toBeNull()
    expect(page.querySelector('.cat-drawer')).toBeNull()
  })
})
