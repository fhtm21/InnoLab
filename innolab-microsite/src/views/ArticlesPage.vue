<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { getArticles } from '../content/index.js'

const route = useRoute()
const router = useRouter()

const articles = getArticles()

const allCategories = computed(() => {
  const set = new Set()
  for (const a of articles) {
    if (a.category) set.add(a.category)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const allYears = computed(() => {
  const set = new Set()
  for (const a of articles) {
    const year = typeof a.date === 'string' ? a.date.slice(0, 4) : ''
    if (year) set.add(year)
  }
  return Array.from(set).sort((a, b) => b.localeCompare(a))
})

const selectedCategory = computed(() => {
  const v = route.query.category
  return typeof v === 'string' && v.trim() ? v : ''
})

const selectedYear = computed(() => {
  const v = route.query.year
  return typeof v === 'string' && v.trim() ? v : ''
})

const filteredArticles = computed(() => {
  return articles.filter((a) => {
    const year = typeof a.date === 'string' ? a.date.slice(0, 4) : ''
    const catOk = !selectedCategory.value || a.category === selectedCategory.value
    const yearOk = !selectedYear.value || year === selectedYear.value
    return catOk && yearOk
  })
})

function updateQuery(next) {
  const query = { ...route.query, ...next }
  for (const k of Object.keys(query)) {
    if (query[k] === '' || query[k] == null) delete query[k]
  }
  router.replace({ query })
}

function onCategoryChange(e) {
  updateQuery({ category: e.target.value })
}

function onYearChange(e) {
  updateQuery({ year: e.target.value })
}

function clearFilters() {
  updateQuery({ category: '', year: '' })
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Articles</h1>
        <p class="muted">News, events, and insights (v0.1 static content).</p>

        <SectionHeader title="Filters" intro="Filter by category and year. Filters are reflected in the URL." />
        <div class="grid cols-3" style="align-items: end; margin-bottom: var(--space-6)">
          <div>
            <label class="card-meta" for="category-filter">Category</label>
            <select
              id="category-filter"
              class="btn"
              style="width: 100%; justify-content: space-between"
              :value="selectedCategory"
              @change="onCategoryChange"
            >
              <option value="">All</option>
              <option v-for="c in allCategories" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>

          <div>
            <label class="card-meta" for="year-filter">Year</label>
            <select id="year-filter" class="btn" style="width: 100%; justify-content: space-between" :value="selectedYear" @change="onYearChange">
              <option value="">All</option>
              <option v-for="y in allYears" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>

          <div>
            <button class="btn" type="button" style="width: 100%" @click="clearFilters">Clear filters</button>
          </div>
        </div>

        <SectionHeader :title="`Latest (${filteredArticles.length})`" />
        <div v-if="filteredArticles.length" class="grid cols-3">
          <BaseCard v-for="a in filteredArticles" :key="a.slug">
            <div class="card-title">{{ a.title }}</div>
            <p class="card-meta">{{ a.date }} · {{ a.category }}</p>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ a.summary }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/articles/${a.slug}`">Read</RouterLink>
            </div>
          </BaseCard>
        </div>
        <div v-else class="muted">No articles match the selected filters.</div>
      </div>
    </section>

    <CtaBand title="Have news to share?" body="Send us an update to publish as an article (placeholder workflow)." />
  </div>
</template>