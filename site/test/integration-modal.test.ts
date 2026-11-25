import { describe, expect, it } from 'vitest'

import {
  backdropQuery,
  catalogCloseAction,
  docsCloseAction,
  fragmentId,
  isIntegrationModalId,
  isIntegrationModalPath,
  readModalState,
} from '../src/util/integration-modal'
import { cardFilterData } from '../src/util/catalog-filter'

const origin = 'https://strandsagents.com'
const catalogPath = '/integrations/'
const pushed = { integrationModal: true, catalogUrl: '/integrations/?q=utc', pushed: true }
const replaced = { integrationModal: true, catalogUrl: '/integrations/?q=utc', pushed: false }

describe('isIntegrationModalId', () => {
  it('matches integration pages, with or without slashes', () => {
    expect(isIntegrationModalId('docs/integrations/tools/utcp')).toBe(true)
    expect(isIntegrationModalId('/docs/integrations/tools/utcp/')).toBe(true)
    expect(isIntegrationModalId('docs/integrations/memory-stores/overview')).toBe(true)
  })

  it('leaves out the get-featured guide, the bare section and other docs', () => {
    expect(isIntegrationModalId('docs/integrations/get-featured')).toBe(false)
    expect(isIntegrationModalId('/docs/integrations/get-featured/')).toBe(false)
    expect(isIntegrationModalId('docs/integrations')).toBe(false)
    expect(isIntegrationModalId('docs/user-guide/sdk/model-providers/amazon-bedrock')).toBe(false)
    expect(isIntegrationModalId('integrations')).toBe(false)
  })
})

describe('isIntegrationModalPath', () => {
  it('handles a root base', () => {
    expect(isIntegrationModalPath('/docs/integrations/tools/utcp/', '')).toBe(true)
    expect(isIntegrationModalPath('/integrations/', '')).toBe(false)
  })

  it('handles a sub-path base', () => {
    expect(isIntegrationModalPath('/preview/docs/integrations/tools/utcp/', '/preview')).toBe(true)
    expect(isIntegrationModalPath('/preview/docs/integrations/tools/utcp/', '/preview/')).toBe(true)
    expect(isIntegrationModalPath('/docs/integrations/tools/utcp/', '/preview')).toBe(false)
  })
})

describe('readModalState', () => {
  it('reads the state the catalog writes', () => {
    expect(readModalState(pushed)).toEqual(pushed)
    expect(readModalState({ integrationModal: true, catalogUrl: '/integrations/' })).toEqual({
      integrationModal: true,
      catalogUrl: '/integrations/',
      pushed: false,
    })
  })

  it('ignores other history state', () => {
    expect(readModalState(null)).toBeUndefined()
    expect(readModalState('x')).toBeUndefined()
    expect(readModalState({ catEntry: 'utcp' })).toBeUndefined()
    expect(readModalState({ integrationModal: true })).toBeUndefined()
  })
})

describe('catalogCloseAction', () => {
  it('pops the entry the open pushed', () => {
    expect(catalogCloseAction(pushed, catalogPath)).toEqual({ kind: 'back' })
  })

  it('replaces the URL for a modal opened from a legacy ?entry= link', () => {
    expect(catalogCloseAction(replaced, catalogPath)).toEqual({ kind: 'replace', url: '/integrations/?q=utc' })
  })

  it('falls back to the catalog path without state', () => {
    expect(catalogCloseAction(null, catalogPath)).toEqual({ kind: 'replace', url: '/integrations/' })
  })
})

describe('docsCloseAction', () => {
  const input = (state: unknown, referrer = '') => ({ state, referrer, origin, catalogPath })

  it('goes back when the catalog pushed this entry (a reload keeps the state)', () => {
    expect(docsCloseAction(input(pushed))).toEqual({ kind: 'back' })
  })

  it('replaces back to the catalog URL after a legacy ?entry= open (no history entry to add)', () => {
    expect(docsCloseAction(input(replaced))).toEqual({ kind: 'replace', url: '/integrations/?q=utc' })
  })

  it('returns to a catalog referrer with its query', () => {
    expect(docsCloseAction(input(null, `${origin}/integrations/?type=tool`))).toEqual({
      kind: 'assign',
      url: '/integrations/?type=tool',
    })
  })

  it('opens the catalog for other, foreign or invalid referrers', () => {
    expect(docsCloseAction(input(null, `${origin}/docs/`))).toEqual({ kind: 'assign', url: '/integrations/' })
    expect(docsCloseAction(input(null, 'https://example.com/integrations/'))).toEqual({
      kind: 'assign',
      url: '/integrations/',
    })
    expect(docsCloseAction(input(null, ''))).toEqual({ kind: 'assign', url: '/integrations/' })
    expect(docsCloseAction(input(null, 'not a url'))).toEqual({ kind: 'assign', url: '/integrations/' })
  })
})

describe('backdropQuery', () => {
  const input = (state: unknown, referrer = '') => ({ state, referrer, origin, catalogPath })

  it('takes the query from history state, then from a catalog referrer', () => {
    expect(backdropQuery(input(pushed))).toBe('?q=utc')
    expect(backdropQuery(input({ ...pushed, catalogUrl: '/integrations/' }))).toBe('')
    expect(backdropQuery(input(null, `${origin}/integrations/?q=mcp`))).toBe('?q=mcp')
  })

  it('is empty when unknown', () => {
    expect(backdropQuery(input(null, `${origin}/docs/?q=mcp`))).toBe('')
    expect(backdropQuery(input(null, ''))).toBe('')
  })
})

describe('cardFilterData', () => {
  it('reads the card data attributes', () => {
    expect(
      cardFilterData({
        search: 'utcp',
        type: 'tool',
        langs: 'python typescript',
        badges: '',
        maintained: 'community',
      })
    ).toEqual({
      search: 'utcp',
      type: 'tool',
      languages: ['python', 'typescript'],
      badges: [],
      maintainedBy: 'community',
      sdk: 'agents',
    })
  })
})

describe('fragmentId', () => {
  it('decodes a fragment', () => {
    expect(fragmentId('#installation')).toBe('installation')
    expect(fragmentId('#caf%C3%A9')).toBe('café')
    expect(fragmentId('')).toBe('')
  })

  it('treats a malformed escape as no target instead of throwing', () => {
    expect(fragmentId('#%E0%A4%A')).toBe('')
  })
})
