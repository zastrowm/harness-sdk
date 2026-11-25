import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

import {
  FILTER_KNOWN_VALUES,
  cardFilterData,
  matchesFilters,
  prefilterSelector,
  queryToState,
} from '../src/util/catalog-filter'

// Cards shaped like CatalogCard.astro's data-* attributes, covering each facet.
const CARDS = [
  {
    type: 'storage',
    langs: 'python typescript',
    badges: '',
    maintained: 'community',
    sdk: 'agents',
    search: 'github storage backend',
  },
  {
    type: 'tool',
    langs: 'python',
    badges: 'verified featured',
    maintained: 'aws',
    sdk: 'agents',
    search: 'utcp "quoted" tool',
  },
  {
    type: 'model-provider',
    langs: 'typescript',
    badges: 'new',
    maintained: 'partner',
    sdk: 'agents',
    search: 'openrouter models',
  },
  { type: 'tool', langs: 'python', badges: '', maintained: 'strands', sdk: 'evals', search: 'evals judge tool' },
  { type: 'storage', langs: 'python', badges: 'featured', maintained: 'strands', sdk: 'agents', search: 's3 storage' },
]

function grid() {
  const cards = CARDS.map(
    (c, i) =>
      `<article class="cat-card" id="c${i}" data-type="${c.type}" data-langs="${c.langs}" data-badges="${c.badges}" data-maintained="${c.maintained}" data-sdk="${c.sdk}" data-search="${c.search.replace(/"/g, '&quot;')}"></article>`
  )
  return new JSDOM(`<div data-cat-grid>${cards.join('')}<div class="cat-cta"></div></div>`).window.document
}

const QUERIES = [
  '',
  '?type=storage',
  '?type=storage,tool',
  '?type=bogus',
  '?q=storage',
  '?q=%20STORAGE%20',
  '?q=%22quoted%22',
  '?q=back%5Cslash',
  '?lang=typescript',
  '?badge=featured,new',
  '?by=strands',
  '?sdk=evals',
  '?sdk=nope&type=tool',
  '?type=storage&lang=python&badge=featured&by=strands&q=s3',
]

describe('prefilterSelector', () => {
  for (const query of QUERIES) {
    it(`hides exactly the cards matchesFilters rejects for "${query}"`, () => {
      const doc = grid()
      const selector = prefilterSelector(query, FILTER_KNOWN_VALUES).hide
      const hidden = new Set(Array.from(doc.querySelectorAll(selector), (el) => el.id))
      const state = queryToState(query)
      const expected = new Set(
        Array.from(doc.querySelectorAll<HTMLElement>('.cat-card'))
          .filter((el) => !matchesFilters(cardFilterData(el.dataset), state))
          .map((el) => el.id)
      )
      expect(hidden).toEqual(expected)
      // The "Add your integration" tile is never hidden.
      expect(doc.querySelector('.cat-cta')?.matches(selector)).toBe(false)
    })
  }

  it('reports whether the query filters beyond the default view', () => {
    expect(prefilterSelector('', FILTER_KNOWN_VALUES).filtered).toBe(false)
    expect(prefilterSelector('?type=bogus&utm=x', FILTER_KNOWN_VALUES).filtered).toBe(false)
    expect(prefilterSelector('?type=storage', FILTER_KNOWN_VALUES).filtered).toBe(true)
    expect(prefilterSelector('?sdk=evals', FILTER_KNOWN_VALUES).filtered).toBe(true)
  })

  it('runs from its own source, as integrations.astro inlines it', () => {
    // Fails if it ever reads an import or a module-level value.
    const inlined = new Function(`return (${prefilterSelector.toString()})`)() as typeof prefilterSelector
    expect(inlined('?type=storage', FILTER_KNOWN_VALUES)).toEqual(
      prefilterSelector('?type=storage', FILTER_KNOWN_VALUES)
    )
  })
})
