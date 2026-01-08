<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import {
  getPersonBySlug,
  getProjectBySlug,
  getRelatedArticlesForPerson,
} from '../content/index.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const person = computed(() => getPersonBySlug(slug.value))
const projects = computed(() => {
  if (!person.value) return []
  return (person.value.selectedProjects || []).map((s) => getProjectBySlug(s)).filter(Boolean)
})
const relatedArticles = computed(() => getRelatedArticlesForPerson(slug.value))
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <template v-if="person">
          <h1 class="h1">{{ person.name }}</h1>
          <p class="muted">{{ person.title }} · {{ person.affiliation }}</p>

          <div class="grid cols-2" style="margin-top: var(--space-5)">
            <BaseCard>
              <div class="card-title">Bio</div>
              <p class="card-meta" style="margin-top: var(--space-3)">{{ person.bio }}</p>
            </BaseCard>

            <BaseCard>
              <div class="card-title">Expertise</div>
              <div class="chips">
                <span v-for="tag in person.expertiseTags" :key="tag" class="chip">{{ tag }}</span>
              </div>

              <div v-if="person.links" style="margin-top: var(--space-4)">
                <div class="card-title">Links</div>
                <ul class="list">
                  <li v-if="person.links.email">
                    <a :href="`mailto:${person.links.email}`">{{ person.links.email }}</a>
                  </li>
                  <li v-if="person.links.scholar">
                    <a :href="person.links.scholar" target="_blank" rel="noreferrer">Google Scholar</a>
                  </li>
                  <li v-if="person.links.orcid">
                    <a :href="person.links.orcid" target="_blank" rel="noreferrer">ORCID</a>
                  </li>
                  <li v-if="person.links.linkedin">
                    <a :href="person.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </BaseCard>
          </div>

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="Selected projects" />
            <div v-if="projects.length" class="grid cols-2">
              <BaseCard v-for="p in projects" :key="p.slug">
                <div class="card-title">{{ p.title }}</div>
                <p class="card-meta">{{ p.status }} · {{ p.summary }}</p>
                <div style="margin-top: var(--space-3)">
                  <RouterLink class="btn btn-sm" :to="`/research/projects/${p.slug}`">View project</RouterLink>
                </div>
              </BaseCard>
            </div>
            <p v-else class="muted">No projects listed yet.</p>
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
          <h1 class="h1">Person not found</h1>
          <p class="muted">The profile “{{ slug }}” does not exist.</p>
          <RouterLink class="btn btn-primary" to="/people">Back to People</RouterLink>
        </template>
      </div>
    </section>

    <CtaBand
      title="Get in touch"
      body="Contact us to discuss supervision, collaboration, or research opportunities."
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
  font-size: 13px;
}
</style>