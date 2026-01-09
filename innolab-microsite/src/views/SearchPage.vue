<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { buildSearchIndex, formatResultTypeLabel, searchIndex, sortSearchResults } from '../search/index.js'

const route = useRoute()
const router = useRouter()

const index = buildSearchIndex()

const q = computed(() => {
  const v = route.query.q
  return typeof v === 'string' ? v : ''
})

const sort = computed(() => {
  const v = route.query.sort
  return v === 'date' ? 'date' : 'relevance'
})

const input = ref(q.value)

watch(
  () => q.value,
  (next) => {
    input.value = next
  },
)

function updateQuery(next) {
  const query = { ...route.query, ...next }
  for (const k of Object.keys(query)) {
    if (query[k] === '' || query[k] == null) delete query[k]
  }
  router.replace({ query })
}

function onSubmit() {
  updateQuery({ q: input.value.trim() })
}

function onSortChange(e) {
  updateQuery({ sort: e.target.value })
}

const rawResults = computed(() => {
  const query = q.value.trim()
  if (!query) return []
  return searchIndex(index, query)
})

const results = computed(() => sortSearchResults(rawResults.value, sort.value))

const resultCountLabel = computed(() => {
  const n = results.value.length
  if (!q.value.trim()) return 'Enter a keyword to search the microsite.'
  if (n === 0) return 'No results found.'
  if (n === 1) return '1 result'
  return `${n} results`
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="h1">Search</h1>
        <p class="muted hero-sub">Search across articles, people, themes, projects, and key pages.</p>

        <form class="searchbar" role="search" @submit.prevent="onSubmit">
          <label class="sr-only" for="site-search-input">Search query</label>

          <div class="searchbar-field">
            <input
              id="site-search-input"
              v-model="input"
              class="searchbar-input"
              type="search"
              name="q"
              placeholder="Search… (e.g., Responsible AI, NLP, collaboration)"
              autocomplete="off"
            />
            <button class="btn btn-primary searchbar-btn" type="submit">Search</button>
          </div>

          <div class="searchbar-meta">
            <div class="muted small">{{ resultCountLabel }}</div>

            <div class="sort">
              <label class="card-meta" for="search-sort">Sort</label>
              <select
                id="search-sort"
                class="btn sort-select"
                :value="sort"
                @change="onSortChange"
              >
                <option value="relevance">Relevance</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader v-if="q.trim()" :title="`Results for “${q.trim()}”`" />

        <div v-if="results.length" class="grid cols-3">
          <BaseCard v-for="r in results" :key="`${r.type}:${r.id}`">
            <div class="result-kicker">{{ formatResultTypeLabel(r.type) }}</div>
            <div class="card-title">{{ r.title }}</div>
            <p class="card-meta">
              <span v-if="r.date">{{ r.date }}</span>
              <span v-else class="muted">—</span>
            </p>
            <p v-if="r.summary" class="card-meta" style="margin-top: var(--space-2)">
              {{ r.summary }}
            </p>
            <div class="cta-row">
              <RouterLink class="btn btn-sm" :to="r.to">Open</RouterLink>
            </div>
          </BaseCard>
        </div>

        <div v-else-if="q.trim()" class="muted">Try a different keyword.</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-7) 0;
  background: linear-gradient(180deg, rgba(222, 239, 251, 0.55), rgba(255, 255, 255, 0));
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  display: grid;
  gap: var(--space-4);
}

.hero-sub {
  margin: 0;
  max-width: 80ch;
}

.searchbar {
  margin-top: var(--space-4);
  max-width: 860px;
}

.searchbar-field {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.searchbar-input {
  flex: 1 1 auto;
  width: 100%;
  border: 0;
  background: transparent;
  font: inherit;
  color: var(--text-600);
  padding: 8px 10px;
  outline: none;
}

.searchbar-input::placeholder {
  color: rgba(102, 102, 102, 0.8);
}

.searchbar-field:focus-within {
  box-shadow: var(--focus-ring), 0 10px 30px rgba(0, 0, 0, 0.06);
  border-color: rgba(59, 125, 192, 0.35);
}

.searchbar-btn {
  white-space: nowrap;
}

.searchbar-meta {
  margin-top: var(--space-3);
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.sort {
  display: grid;
  gap: 6px;
}

.sort-select {
  justify-content: space-between;
  border: 1px solid var(--border);
  background: #fff;
}

.result-kicker {
  font-size: 12px;
  line-height: 12px;
  font-weight: var(--font-weight-light);
  color: var(--text-650);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.small {
  font-size: 14px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>