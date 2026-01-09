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
    <section class="section">
      <div class="container">
        <h1 class="h1">Search</h1>
        <p class="muted">
          Search across articles, people, themes, projects, and key pages.
        </p>

        <form class="searchbar" role="search" @submit.prevent="onSubmit">
          <label class="sr-only" for="site-search-input">Search query</label>
          <input
            id="site-search-input"
            v-model="input"
            class="input"
            type="search"
            name="q"
            placeholder="Search… (e.g., Responsible AI, NLP, collaboration)"
            autocomplete="off"
          />
          <button class="btn btn-primary" type="submit">Search</button>
        </form>

        <div class="search-controls">
          <div class="muted small">{{ resultCountLabel }}</div>

          <div class="sort">
            <label class="card-meta" for="search-sort">Sort</label>
            <select
              id="search-sort"
              class="btn"
              style="justify-content: space-between"
              :value="sort"
              @change="onSortChange"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <SectionHeader v-if="q.trim()" :title="`Results for “${q.trim()}”`" />

        <div v-if="results.length" class="grid cols-3">
          <BaseCard v-for="r in results" :key="`${r.type}:${r.id}`">
            <div class="card-title">{{ r.title }}</div>
            <p class="card-meta">
              {{ formatResultTypeLabel(r.type) }}
              <span v-if="r.date"> · {{ r.date }}</span>
            </p>
            <p v-if="r.summary" class="card-meta" style="margin-top: var(--space-2)">
              {{ r.summary }}
            </p>
            <div style="margin-top: var(--space-3)">
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
.searchbar {
  margin-top: var(--space-5);
  display: flex;
  gap: var(--space-3);
  align-items: center;
  max-width: 760px;
}

.searchbar .input {
  flex: 1 1 auto;
}

.search-controls {
  margin-top: var(--space-4);
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