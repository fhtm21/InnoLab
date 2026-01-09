<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseCard from '../../components/ui/BaseCard.vue'
import CtaBand from '../../components/ui/CtaBand.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import { getProjects } from '../../content/index.js'
import themes from '../../content/themes.json'
import people from '../../content/people.json'

const route = useRoute()
const router = useRouter()

const projects = getProjects()

const allStatuses = computed(() => {
  const set = new Set()
  for (const p of projects) {
    if (p.status) set.add(p.status)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

// We don't have a dedicated "type/category" field yet.
// For v0.1, infer a lightweight "type" from theme slugs (best-effort) so we can still filter.
const TYPE_LABELS_BY_THEME = {
  'ai-for-education': 'Course / Learning',
  'responsible-ai': 'Governance / Responsible AI',
  nlp: 'NLP',
  'computer-vision': 'Computer Vision',
}

function inferType(project) {
  const slugs = Array.isArray(project?.themes) ? project.themes : []
  for (const s of slugs) {
    if (TYPE_LABELS_BY_THEME[s]) return TYPE_LABELS_BY_THEME[s]
  }
  return 'Other'
}

const allTypes = computed(() => {
  const set = new Set()
  for (const p of projects) set.add(inferType(p))
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const selectedStatus = computed(() => {
  const v = route.query.status
  return typeof v === 'string' && v.trim() ? v : ''
})

const selectedType = computed(() => {
  const v = route.query.type
  return typeof v === 'string' && v.trim() ? v : ''
})

function updateQuery(next) {
  const query = { ...route.query, ...next }
  for (const k of Object.keys(query)) {
    if (query[k] === '' || query[k] == null) delete query[k]
  }
  router.replace({ query })
}

function onStatusChange(e) {
  updateQuery({ status: e.target.value })
}

function onTypeChange(e) {
  updateQuery({ type: e.target.value })
}

function clearFilters() {
  updateQuery({ status: '', type: '' })
}

function getThemeTitle(slug) {
  return themes.find((t) => t.slug === slug)?.title || slug
}

function getPersonName(slug) {
  return people.find((p) => p.slug === slug)?.name || slug
}

function getOutputTypes(project) {
  const outputs = Array.isArray(project?.outputs) ? project.outputs : []
  const set = new Set()
  for (const o of outputs) {
    if (o?.type) set.add(String(o.type).toLowerCase())
  }
  return Array.from(set)
}

function outputLabel(type) {
  const t = String(type || '').toLowerCase()
  if (t === 'paper') return 'Paper'
  if (t === 'code') return 'Code'
  if (t === 'demo') return 'Demo'
  if (t === 'dataset') return 'Dataset'
  return t ? t.toUpperCase() : 'Output'
}

function outputClass(type) {
  const t = String(type || '').toLowerCase()
  if (t === 'paper') return 'output-chip output-paper'
  if (t === 'code') return 'output-chip output-code'
  if (t === 'demo') return 'output-chip output-demo'
  if (t === 'dataset') return 'output-chip output-dataset'
  return 'output-chip'
}

const filteredProjects = computed(() => {
  return projects.filter((p) => {
    const statusOk = !selectedStatus.value || p.status === selectedStatus.value
    const typeOk = !selectedType.value || inferType(p) === selectedType.value
    return statusOk && typeOk
  })
})
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Student Projects</h1>
        <p class="muted">
          Student-led projects and coursework supported by INNOGEN Lab (Teaching & Learning pillar). Browse projects and filter by status and type.
        </p>

        <SectionHeader title="Filters" intro="Filters are reflected in the URL for sharing." />
        <div class="grid cols-3" style="align-items: end; margin-bottom: var(--space-6)">
          <div>
            <label class="card-meta" for="status-filter">Status</label>
            <select
              id="status-filter"
              class="btn"
              style="width: 100%; justify-content: space-between"
              :value="selectedStatus"
              @change="onStatusChange"
            >
              <option value="">All</option>
              <option v-for="s in allStatuses" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <div>
            <label class="card-meta" for="type-filter">Type</label>
            <select id="type-filter" class="btn" style="width: 100%; justify-content: space-between" :value="selectedType" @change="onTypeChange">
              <option value="">All</option>
              <option v-for="t in allTypes" :key="t" :value="t">{{ t }}</option>
            </select>
            <p class="card-meta" style="margin-top: var(--space-2)">
              Type is inferred from themes (v0.1) until a dedicated project type field is added.
            </p>
          </div>

          <div>
            <button class="btn" type="button" style="width: 100%" @click="clearFilters">Clear filters</button>
          </div>
        </div>

        <SectionHeader :title="`Projects (${filteredProjects.length})`" />
        <div v-if="filteredProjects.length" class="grid cols-3">
          <BaseCard v-for="p in filteredProjects" :key="p.slug">
            <div class="card-title">{{ p.title }}</div>
            <p class="card-meta">{{ p.status }} · {{ inferType(p) }}</p>

            <div class="chips" v-if="p.themes && p.themes.length" style="margin-top: var(--space-3)">
              <span v-for="t in p.themes" :key="t" class="chip">{{ getThemeTitle(t) }}</span>
            </div>

            <p class="card-meta" style="margin-top: var(--space-3)">{{ p.summary }}</p>

            <div v-if="getOutputTypes(p).length" class="outputs" style="margin-top: var(--space-3)">
              <span class="card-meta" style="margin-right: var(--space-2)">Outputs:</span>
              <span v-for="ot in getOutputTypes(p)" :key="ot" :class="outputClass(ot)">{{ outputLabel(ot) }}</span>
            </div>

            <p v-if="p.team && p.team.length" class="card-meta" style="margin-top: var(--space-3)">
              Team: {{ p.team.map(getPersonName).join(', ') }}
            </p>

            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/activities/projects/${p.slug}`">View project</RouterLink>
            </div>
          </BaseCard>
        </div>
        <p v-else class="muted">No projects match the selected filters.</p>
      </div>
    </section>

    <CtaBand
      title="Want to propose a student project?"
      body="Contact us with your topic and goals."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Activities"
      secondaryTo="/activities"
    />
  </div>
</template>

<style scoped>
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
}

.outputs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.output-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(59, 125, 192, 0.25);
  background: rgba(222, 239, 251, 0.7);
  color: var(--text);
  font-size: 12px;
}

.output-paper {
  border-color: rgba(59, 125, 192, 0.35);
  background: rgba(222, 239, 251, 0.9);
}

.output-code {
  border-color: rgba(243, 147, 27, 0.45);
  background: rgba(243, 147, 27, 0.12);
}

.output-demo {
  border-color: rgba(46, 125, 50, 0.35);
  background: rgba(46, 125, 50, 0.10);
}

.output-dataset {
  border-color: rgba(123, 31, 162, 0.35);
  background: rgba(123, 31, 162, 0.10);
}
</style>