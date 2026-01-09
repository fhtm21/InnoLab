import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug } from './content/index.js'

const DEFAULT_TITLE = 'INNOGEN Lab — BINUS @Bekasi'
const DEFAULT_DESCRIPTION =
  'INNOGEN Lab (Innovation Intelligent Knowledge Generation) is an academic and research facility at BINUS @Bekasi focused on AI, data, and applied innovation.'

function upsertMetaByName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  if (!url) return
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function getAbsoluteUrl(pathname) {
  try {
    const base = window.location.origin
    return new URL(pathname, base).toString()
  } catch {
    return ''
  }
}

function getRouteMeta(route) {
  const path = route.path || '/'

  // Home
  if (path === '/') {
    return {
      title: 'INNOGEN Lab — BINUS @Bekasi',
      description: DEFAULT_DESCRIPTION,
      og: {
        title: 'INNOGEN Lab — BINUS @Bekasi',
        description: DEFAULT_DESCRIPTION,
        type: 'website',
        url: getAbsoluteUrl('/'),
      },
    }
  }

  // Article detail
  if (route.name === 'article') {
    const slug = String(route.params?.slug || '')
    const a = getArticleBySlug(slug)
    if (a) {
      const title = `${a.title} — INNOGEN Lab`
      const description = a.summary || DEFAULT_DESCRIPTION
      const url = getAbsoluteUrl(`/articles/${a.slug}`)
      return {
        title,
        description,
        og: {
          title,
          description,
          type: 'article',
          url,
        },
      }
    }
  }

  // Generic fallbacks by top-level section
  if (path.startsWith('/about')) {
    return { title: 'About — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/activities')) {
    return { title: 'Activities — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/facilities')) {
    return { title: 'Facilities — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/people')) {
    return { title: 'People — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/articles')) {
    return { title: 'Articles — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/collaborate')) {
    return { title: 'Collaborate — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }
  if (path.startsWith('/contact')) {
    return { title: 'Contact — INNOGEN Lab', description: DEFAULT_DESCRIPTION }
  }

  return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
}

export function useSeo() {
  const route = useRoute()

  watchEffect(() => {
    const meta = getRouteMeta(route)

    document.title = meta.title || DEFAULT_TITLE
    upsertMetaByName('description', meta.description || DEFAULT_DESCRIPTION)

    // Canonical: best-effort (static hosting may not have a stable origin in dev)
    const canonical = getAbsoluteUrl(route.fullPath || route.path || '/')
    setCanonical(canonical)

    // OpenGraph baseline (Home + Article detail; safe defaults elsewhere)
    if (meta.og) {
      upsertMetaByProperty('og:title', meta.og.title)
      upsertMetaByProperty('og:description', meta.og.description)
      upsertMetaByProperty('og:type', meta.og.type)
      upsertMetaByProperty('og:url', meta.og.url)
    } else {
      // Keep OG tags minimal; do not aggressively delete tags to avoid flicker.
      upsertMetaByProperty('og:title', meta.title || DEFAULT_TITLE)
      upsertMetaByProperty('og:description', meta.description || DEFAULT_DESCRIPTION)
      upsertMetaByProperty('og:type', 'website')
      upsertMetaByProperty('og:url', canonical)
    }
  })
}