/**
 * Integration modal: an integration's docs page (`/docs/integrations/<type>/<slug>/`)
 * renders as a centred dialog over the /integrations catalog. The same dialog
 * shows up two ways:
 *
 * - Loaded directly, the docs page draws the dialog itself (IntegrationModal.astro)
 *   and fills the area behind it with a copy of the catalog.
 * - From a catalog card click, the catalog pushes the docs URL and opens the page
 *   in an iframe (`?embed`) inside a dialog of the same size.
 *
 * These helpers hold the routing and history rules so both sides agree; they take
 * plain values (no DOM globals) so they can be unit-tested.
 */

/** postMessage types sent from the embedded docs page to the catalog. */
export const INTEGRATION_MODAL_CLOSE = 'strands:integration-modal-close'
export const INTEGRATION_MODAL_HASH = 'strands:integration-modal-hash'

/** The catalog page path, before the base path is added. */
export const CATALOG_PATH = '/integrations/'

/** History state the catalog writes when it opens the modal. */
export interface IntegrationModalHistoryState {
  integrationModal: true
  /** The catalog URL (path + query) the modal was opened from. */
  catalogUrl: string
  /** True when opening pushed a history entry that closing should pop. */
  pushed: boolean
}

const GET_FEATURED = 'docs/integrations/get-featured'

/**
 * True for content ids whose page renders as the integration modal: every page
 * under docs/integrations/ except the "Add your integration" guide, which keeps
 * the catalog rail layout.
 */
export function isIntegrationModalId(id: string): boolean {
  const normalized = id.replace(/^\/+|\/+$/g, '')
  return normalized.startsWith('docs/integrations/') && normalized !== GET_FEATURED
}

/** The same check for a URL pathname, with the site's base path (`''` or `/sub`). */
export function isIntegrationModalPath(pathname: string, base: string): boolean {
  const prefix = base.replace(/\/$/, '')
  if (prefix && !pathname.startsWith(prefix + '/')) return false
  return isIntegrationModalId(pathname.slice(prefix.length))
}

/** Reads the modal's history state, or undefined when the entry has none. */
export function readModalState(state: unknown): IntegrationModalHistoryState | undefined {
  if (!state || typeof state !== 'object') return undefined
  const s = state as Partial<IntegrationModalHistoryState>
  if (s.integrationModal !== true || typeof s.catalogUrl !== 'string') return undefined
  return { integrationModal: true, catalogUrl: s.catalogUrl, pushed: s.pushed === true }
}

export type CloseAction = { kind: 'back' } | { kind: 'replace'; url: string } | { kind: 'assign'; url: string }

/**
 * What closing the modal does on the catalog page: pop the entry the open pushed
 * (so Back and close agree), or, for a modal opened from a legacy `?entry=` link,
 * swap the URL back to the catalog in place.
 */
export function catalogCloseAction(state: unknown, catalogPath: string): CloseAction {
  const s = readModalState(state)
  if (s?.pushed) return { kind: 'back' }
  return { kind: 'replace', url: s?.catalogUrl ?? catalogPath }
}

/**
 * What closing does on a directly loaded docs page. If the catalog opened this
 * entry (history state survives a reload), go back to it so its search and scroll
 * come back; a legacy `?entry=` open replaced the catalog's entry, so replace it
 * back. If the user arrived from the catalog by a plain link, return to that
 * catalog URL. Otherwise open the catalog.
 */
export function docsCloseAction(input: {
  state: unknown
  referrer: string
  origin: string
  catalogPath: string
}): CloseAction {
  const s = readModalState(input.state)
  if (s?.pushed) return { kind: 'back' }
  if (s) return { kind: 'replace', url: s.catalogUrl }
  try {
    const ref = new URL(input.referrer)
    if (ref.origin === input.origin && ref.pathname === input.catalogPath) {
      return { kind: 'assign', url: ref.pathname + ref.search }
    }
  } catch {
    // Empty or invalid referrer: fall through to the catalog.
  }
  return { kind: 'assign', url: input.catalogPath }
}

/**
 * The catalog query string to show behind a directly loaded modal: the search the
 * user had (from history state or a catalog referrer), so a reload keeps the same
 * filtered grid behind the dialog. Empty when unknown.
 */
export function backdropQuery(input: {
  state: unknown
  referrer: string
  origin: string
  catalogPath: string
}): string {
  const s = readModalState(input.state)
  if (s) {
    const q = s.catalogUrl.indexOf('?')
    return q === -1 ? '' : s.catalogUrl.slice(q)
  }
  try {
    const ref = new URL(input.referrer)
    if (ref.origin === input.origin && ref.pathname === input.catalogPath) return ref.search
  } catch {
    // ignore
  }
  return ''
}

/** The element id a URL fragment names, or '' for none or a malformed escape. */
export function fragmentId(hash: string): string {
  try {
    return decodeURIComponent(hash.replace(/^#/, ''))
  } catch {
    return ''
  }
}
