<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import {
  getThemeBySlug,
  getProjectsByThemeSlug,
  getPeopleByThemeSlug,
  getRelatedArticlesForTheme,
} from '../content/index.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const theme = computed(() => getThemeBySlug(slug.value))
const projects = computed(() => getProjectsByThemeSlug(slug.value))
const people = computed(() => getPeopleByThemeSlug(slug.value))
const relatedArticles = computed(() => getRelatedArticlesForTheme(slug.value))
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <template v-if="theme">
          <h1 class="h1">{{ theme.title }}</h1>
          <p class="muted">{{ theme.overview }}</p>

          <div class="grid cols-2" style="margin-top: var(--space-5)">
            <BaseCard>
              <div class="card-title">Key focus areas</div>
              <ul class="list">
                <li v-for="item in theme.focusAreas" :key="item">{{ item }}</li>
              </ul>
            </BaseCard>

            <BaseCard>
              <div class="card-title">Example outputs</div>
              <ul class="list">
                <li v-for="item in theme.exampleOutputs" :key="item">{{ item }}</li>
              </ul>
            </BaseCard>
          </div>

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="Projects" />
            <div v-if="projects.length" class="grid cols-2">
              <BaseCard v-for="p in projects" :key="p.slug">
                <div class="card-title">{{ p.title }}</div>
                <p class="card-meta">{{ p.status }} · {{ p.summary }}</p>
                <div style="margin-top: var(--space-3)">
                  <RouterLink class="btn btn-sm" :to="`/research/projects/${p.slug}`">View project</RouterLink>
                </div>
              </BaseCard>
            </div>
            <p v-else class="muted">No projects listed for this theme yet.</p>
          </div>

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="People involved" />
            <div v-if="people.length" class="grid cols-3">
              <BaseCard v-for="person in people" :key="person.slug">
                <div class="card-title">{{ person.name }}</div>
                <p class="card-meta">{{ person.title }} · {{ person.affiliation }}</p>
                <div style="margin-top: var(--space-3)">
                  <RouterLink class="btn btn-sm" :to="`/people/${person.slug}`">View profile</RouterLink>
                </div>
              </BaseCard>
            </div>
            <p v-else class="muted">No people listed for this theme yet.</p>
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
          <h1 class="h1">Theme not found</h1>
          <p class="muted">The theme “{{ slug }}” does not exist.</p>
          <RouterLink class="btn btn-primary" to="/research">Back to Research</RouterLink>
        </template>
      </div>
    </section>

    <CtaBand
      title="Collaborate on this theme"
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
</style>