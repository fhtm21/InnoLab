<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseCard from '../../components/ui/BaseCard.vue'
import CtaBand from '../../components/ui/CtaBand.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import { getPeople } from '../../content/index.js'

const route = useRoute()
const router = useRouter()

const people = getPeople()

const allTags = computed(() => {
  const set = new Set()
  for (const p of people) {
    const tags = Array.isArray(p.expertiseTags) ? p.expertiseTags : []
    for (const t of tags) set.add(t)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const allAffiliations = computed(() => {
  const set = new Set()
  for (const p of people) {
    if (p.affiliation) set.add(p.affiliation)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const selectedTag = computed(() => {
  const v = route.query.tag
  return typeof v === 'string' && v.trim() ? v : ''
})

const selectedAff = computed(() => {
  const v = route.query.aff
  return typeof v === 'string' && v.trim() ? v : ''
})

const filteredPeople = computed(() => {
  return people.filter((p) => {
    const tags = Array.isArray(p.expertiseTags) ? p.expertiseTags : []
    const tagOk = !selectedTag.value || tags.includes(selectedTag.value)
    const affOk = !selectedAff.value || p.affiliation === selectedAff.value
    return tagOk && affOk
  })
})

function updateQuery(next) {
  const query = { ...route.query, ...next }
  // remove empty keys
  for (const k of Object.keys(query)) {
    if (query[k] === '' || query[k] == null) delete query[k]
  }
  router.replace({ query })
}

function onTagChange(e) {
  updateQuery({ tag: e.target.value })
}

function onAffChange(e) {
  updateQuery({ aff: e.target.value })
}

function clearFilters() {
  updateQuery({ tag: '', aff: '' })
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Lecturers & Researchers</h1>
        <p class="muted">Directory of lecturers and researchers involved with INNOGEN Lab.</p>

        <SectionHeader title="Filters" intro="Filter by expertise tag and affiliation. Filters are reflected in the URL." />
        <div class="grid cols-3" style="align-items: end; margin-bottom: var(--space-6)">
          <div>
            <label class="card-meta" for="tag-filter">Expertise tag</label>
            <select id="tag-filter" class="btn" style="width: 100%; justify-content: space-between" :value="selectedTag" @change="onTagChange">
              <option value="">All</option>
              <option v-for="t in allTags" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>

          <div>
            <label class="card-meta" for="aff-filter">Affiliation</label>
            <select id="aff-filter" class="btn" style="width: 100%; justify-content: space-between" :value="selectedAff" @change="onAffChange">
              <option value="">All</option>
              <option v-for="a in allAffiliations" :key="a" :value="a">{{ a }}</option>
            </select>
          </div>

          <div>
            <button class="btn" type="button" style="width: 100%" @click="clearFilters">Clear filters</button>
          </div>
        </div>

        <SectionHeader :title="`Directory (${filteredPeople.length})`" />
        <div v-if="filteredPeople.length" class="grid cols-3">
          <BaseCard v-for="p in filteredPeople" :key="p.slug">
            <div class="card-title">{{ p.name }}</div>
            <p class="card-meta">{{ p.title }} · {{ p.affiliation }}</p>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ p.bio }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/people/${p.slug}`">View profile</RouterLink>
            </div>
          </BaseCard>
        </div>
        <div v-else class="muted">No people match the selected filters.</div>
      </div>
    </section>

    <CtaBand
      title="Want to collaborate?"
      body="Contact us to discuss supervision, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>