<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import {
  getArticleBySlug,
  getThemeBySlug,
  getProjectBySlug,
  getPersonBySlug,
} from '../content/index.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const article = computed(() => getArticleBySlug(slug.value))

const relatedThemes = computed(() => {
  if (!article.value) return []
  return (article.value.relatedThemes || []).map((s) => getThemeBySlug(s)).filter(Boolean)
})

const relatedProjects = computed(() => {
  if (!article.value) return []
  return (article.value.relatedProjects || []).map((s) => getProjectBySlug(s)).filter(Boolean)
})

const relatedPeople = computed(() => {
  if (!article.value) return []
  return (article.value.relatedPeople || []).map((s) => getPersonBySlug(s)).filter(Boolean)
})

const bodyHtml = computed(() => {
  // Minimal placeholder rendering: preserve line breaks.
  // (Later: replace with a Markdown renderer if desired.)
  if (!article.value) return ''
  return String(article.value.body || '').replaceAll('&', '&').replaceAll('<', '<').replaceAll('>', '>').replaceAll('\n', '<br />')
})
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <template v-if="article">
          <h1 class="h1">{{ article.title }}</h1>
          <p class="muted">{{ article.date }} · {{ article.category }} · {{ article.author }}</p>

          <BaseCard style="margin-top: var(--space-5)">
            <div class="card-title">Summary</div>
            <p class="card-meta" style="margin-top: var(--space-3)">{{ article.summary }}</p>
          </BaseCard>

          <div class="article-body" v-html="bodyHtml" />

          <div style="margin-top: var(--space-6)">
            <SectionHeader title="Related" />
            <div class="grid cols-3">
              <BaseCard v-if="relatedThemes.length">
                <div class="card-title">Themes</div>
                <ul class="list">
                  <li v-for="t in relatedThemes" :key="t.slug">
                    <RouterLink :to="`/activities/themes/${t.slug}`">{{ t.title }}</RouterLink>
                  </li>
                </ul>
              </BaseCard>

              <BaseCard v-if="relatedProjects.length">
                <div class="card-title">Projects</div>
                <ul class="list">
                  <li v-for="p in relatedProjects" :key="p.slug">
                    <RouterLink :to="`/activities/projects/${p.slug}`">{{ p.title }}</RouterLink>
                  </li>
                </ul>
              </BaseCard>

              <BaseCard v-if="relatedPeople.length">
                <div class="card-title">People</div>
                <ul class="list">
                  <li v-for="person in relatedPeople" :key="person.slug">
                    <RouterLink :to="`/people/${person.slug}`">{{ person.name }}</RouterLink>
                  </li>
                </ul>
              </BaseCard>
            </div>
          </div>
        </template>

        <template v-else>
          <h1 class="h1">Article not found</h1>
          <p class="muted">The article “{{ slug }}” does not exist.</p>
          <RouterLink class="btn btn-primary" to="/articles">Back to Articles</RouterLink>
        </template>
      </div>
    </section>

    <CtaBand
      title="Have news to share?"
      body="Send us an update to publish as an article (placeholder workflow)."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>

<style scoped>
.article-body {
  margin-top: var(--space-5);
  color: var(--text);
  line-height: 1.6;
}

.list {
  margin: var(--space-3) 0 0;
  padding-left: 1.1rem;
  color: var(--text);
}
</style>