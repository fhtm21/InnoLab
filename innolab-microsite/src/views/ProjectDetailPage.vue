<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import {
  getProjectBySlug,
  getThemeBySlug,
  getPersonBySlug,
  getRelatedArticlesForProject,
} from '../content/index.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const project = computed(() => getProjectBySlug(slug.value))
const themes = computed(() => {
  if (!project.value) return []
  return (project.value.themes || []).map((s) => getThemeBySlug(s)).filter(Boolean)
})
const team = computed(() => {
  if (!project.value) return []
  return (project.value.team || []).map((s) => getPersonBySlug(s)).filter(Boolean)
})
const relatedArticles = computed(() => getRelatedArticlesForProject(slug.value))
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <template v-if="project">
          <h1 class="h1">{{ project.title }}</h1>
          <p class="muted">{{ project.status }} · {{ project.summary }}</p>

          <div class="grid cols-2" style="margin-top: var(--space-5)">
            <BaseCard>
              <div class="card-title">Themes</div>
              <div class="chips">
                <RouterLink
                  v-for="t in themes"
                  :key="t.slug"
                  class="chip"
                  :to="`/research/themes/${t.slug}`"
                >
                  {{ t.title }}
                </RouterLink>
              </div>
            </BaseCard>

            <BaseCard>
              <div class="card-title">Outputs</div>
              <ul class="list" v-if="project.outputs && project.outputs.length">
                <li v-for="o in project.outputs" :key="o.label">
                  <a :href="o.url" target="_blank" rel="noreferrer">{{ o.type.toUpperCase() }} — {{ o.label }}</a>
                </li>
              </ul>
              <p v-else class="muted">No outputs listed yet.</p>
            </BaseCard>
          </div>

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="Team" />
            <div v-if="team.length" class="grid cols-3">
              <BaseCard v-for="person in team" :key="person.slug">
                <div class="card-title">{{ person.name }}</div>
                <p class="card-meta">{{ person.title }} · {{ person.affiliation }}</p>
                <div style="margin-top: var(--space-3)">
                  <RouterLink class="btn btn-sm" :to="`/people/${person.slug}`">View profile</RouterLink>
                </div>
              </BaseCard>
            </div>
            <p v-else class="muted">No team members listed yet.</p>
          </div>

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="Related articles" />
            <div v-if="relatedArticles.length" class="grid cols-3">
              <BaseCard v-for="a in relatedArticles" :key="a.slug">
                <div class="card-title">{{ a.title }}</div>
                <p class="card-meta">{{ a.date }} · {{ a.category }}</p>
                <div style="margin-top: var(--space-3)">
                  <RouterLink class="btn btn-sm" :to="`/articles/${a.slug}`">Read</RouterLink>
                </div>
              </BaseCard>
            </div>
            <p v-else class="muted">No related articles yet.</p>
          </div>
        </template>

        <template v-else>
          <h1 class="h1">Project not found</h1>
          <p class="muted">The project “{{ slug }}” does not exist.</p>
          <RouterLink class="btn btn-primary" to="/research">Back to Research</RouterLink>
        </template>
      </div>
    </section>

    <CtaBand
      title="Propose a collaboration"
      body="Tell us about your research question, data constraints, and timeline."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>

<style scoped>
.list {
  margin: var(--space-3) 0 0;
  padding-left: 1.1rem;
  color: var(--text);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
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

.chip:hover {
  border-color: rgba(59, 125, 192, 0.35);
}
</style>