import { getArticles, getPeople, getProjects, getThemes } from '../content/index.js'

function normalizeText(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/[\u2019']/g, "'")
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(value) {
  const t = normalizeText(value)
  if (!t) return []
  return t.split(' ').filter(Boolean)
}

function unique(arr) {
  return Array.from(new Set(arr))
}

function parseDate(value) {
  // Expect YYYY-MM-DD; return ms timestamp or null
  if (typeof value !== 'string') return null
  const s = value.trim()
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null
  const ms = Date.parse(s)
  return Number.isFinite(ms) ? ms : null
}

function scoreTokens({ queryTokens, haystackTokens, fieldWeight }) {
  if (!queryTokens.length || !haystackTokens.length) return 0
  const set = new Set(haystackTokens)
  let hits = 0
  for (const qt of queryTokens) {
    if (set.has(qt)) hits += 1
  }
  return hits * fieldWeight
}

function scoreTextIncludes({ query, text, weight }) {
  const q = normalizeText(query)
  const t = normalizeText(text)
  if (!q || !t) return 0
  if (t === q) return 6 * weight
  if (t.includes(q)) return 3 * weight
  return 0
}

function buildStaticPages() {
  // Keep this list small and curated; it’s a microsite.
  // We can expand later if needed.
  return [
    {
      type: 'page',
      id: 'home',
      title: 'Home',
      summary: 'Overview of INNOGEN Lab, highlights, metrics, and quick entry points.',
      to: '/',
      date: null,
    },
    {
      type: 'page',
      id: 'about',
      title: 'About',
      summary: 'Profile, purpose, capabilities, governance, milestones, partners, and FAQ.',
      to: '/about',
      date: null,
    },
    {
      type: 'page',
      id: 'activities',
      title: 'Activities',
      summary: 'Research, student projects, partnerships, outputs, themes, and projects.',
      to: '/activities',
      date: null,
    },
    {
      type: 'page',
      id: 'facilities',
      title: 'Facilities',
      summary: 'Compute, tools, collaboration space, and access policy.',
      to: '/facilities',
      date: null,
    },
    {
      type: 'page',
      id: 'people',
      title: 'People',
      summary: 'Lecturers, researchers, students, alumni, and opportunities to join.',
      to: '/people',
      date: null,
    },
    {
      type: 'page',
      id: 'articles',
      title: 'Articles',
      summary: 'News, events, and insights from INNOGEN Lab.',
      to: '/articles',
      date: null,
    },
    {
      type: 'page',
      id: 'collaborate',
      title: 'Collaborate',
      summary: 'Collaboration models and engagement process for partners.',
      to: '/collaborate',
      date: null,
    },
    {
      type: 'page',
      id: 'permit',
      title: 'Permit inquiry',
      summary: 'Request access to facilities and resources (subject to policy).',
      to: '/permit',
      date: null,
    },
    {
      type: 'page',
      id: 'playground',
      title: 'Playground',
      summary: 'Explore prototypes and demos that can be tested online.',
      to: '/playground',
      date: null,
    },
    {
      type: 'page',
      id: 'contact',
      title: 'Contact',
      summary: 'Contact the INNOGEN Lab team.',
      to: '/contact',
      date: null,
    },
  ]
}

export function buildSearchIndex() {
  const items = []

  for (const a of getArticles()) {
    items.push({
      type: 'article',
      id: a.slug,
      title: a.title,
      summary: a.summary,
      to: `/articles/${a.slug}`,
      date: a.date ?? null,
      _raw: a,
    })
  }

  for (const p of getPeople()) {
    items.push({
      type: 'person',
      id: p.slug,
      title: p.name,
      summary: p.bio,
      to: `/people/${p.slug}`,
      date: null,
      _raw: p,
    })
  }

  for (const t of getThemes()) {
    items.push({
      type: 'theme',
      id: t.slug,
      title: t.title,
      summary: t.overview,
      to: `/activities/themes/${t.slug}`,
      date: null,
      _raw: t,
    })
  }

  for (const pr of getProjects()) {
    items.push({
      type: 'project',
      id: pr.slug,
      title: pr.title,
      summary: pr.summary,
      to: `/activities/projects/${pr.slug}`,
      date: null,
      _raw: pr,
    })
  }

  for (const pg of buildStaticPages()) {
    items.push(pg)
  }

  // Precompute tokens for scoring
  return items.map((it) => {
    const titleTokens = tokenize(it.title)
    const summaryTokens = tokenize(it.summary)
    const typeTokens = tokenize(it.type)
    return {
      ...it,
      _tokens: {
        title: titleTokens,
        summary: summaryTokens,
        type: typeTokens,
        all: unique([...titleTokens, ...summaryTokens, ...typeTokens]),
      },
      _dateMs: parseDate(it.date),
    }
  })
}

export function searchIndex(index, query) {
  const q = String(query ?? '').trim()
  const queryTokens = tokenize(q)

  if (!q) return []

  const results = []
  for (const it of index) {
    // Weighted scoring:
    // - exact/substring match in title is strong
    // - token hits in title are strong
    // - token hits in summary are medium
    // - type match is weak
    const score =
      scoreTextIncludes({ query: q, text: it.title, weight: 4 }) +
      scoreTextIncludes({ query: q, text: it.summary, weight: 2 }) +
      scoreTokens({ queryTokens, haystackTokens: it._tokens.title, fieldWeight: 3 }) +
      scoreTokens({ queryTokens, haystackTokens: it._tokens.summary, fieldWeight: 1.5 }) +
      scoreTokens({ queryTokens, haystackTokens: it._tokens.type, fieldWeight: 0.5 })

    if (score <= 0) continue

    results.push({
      ...it,
      score,
    })
  }

  return results
}

export function sortSearchResults(results, sortKey) {
  const key = String(sortKey ?? 'relevance')
  const arr = [...results]

  if (key === 'date') {
    // Newest first; items without date go last; tie-breaker by relevance then title
    arr.sort((a, b) => {
      const ad = a._dateMs ?? -Infinity
      const bd = b._dateMs ?? -Infinity
      if (ad !== bd) return bd - ad
      if (a.score !== b.score) return b.score - a.score
      return String(a.title).localeCompare(String(b.title))
    })
    return arr
  }

  // Default: relevance; tie-breaker by date desc then title
  arr.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score
    const ad = a._dateMs ?? -Infinity
    const bd = b._dateMs ?? -Infinity
    if (ad !== bd) return bd - ad
    return String(a.title).localeCompare(String(b.title))
  })
  return arr
}

export function formatResultTypeLabel(type) {
  if (type === 'article') return 'Article'
  if (type === 'person') return 'Person'
  if (type === 'theme') return 'Theme'
  if (type === 'project') return 'Project'
  if (type === 'page') return 'Page'
  return String(type ?? 'Item')
}