<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import {
  getArticleBySlug,
  getArticles,
  getThemeBySlug,
  getProjectBySlug,
  getPersonBySlug,
} from '../content/index.js'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const article = computed(() => getArticleBySlug(slug.value))
const allArticles = getArticles()

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

const relatedArticles = computed(() => {
  if (!article.value) return []
  const current = article.value

  const currentTags = new Set(current.tags || [])
  const currentCategory = current.category || ''
  const currentRelatedProjects = new Set(current.relatedProjects || [])
  const currentRelatedThemes = new Set(current.relatedThemes || [])

  const scored = allArticles
    .filter((a) => a.slug !== current.slug)
    .map((a) => {
      let score = 0
      if (currentCategory && a.category === currentCategory) score += 2

      for (const t of a.tags || []) {
        if (currentTags.has(t)) score += 1
      }

      for (const p of a.relatedProjects || []) {
        if (currentRelatedProjects.has(p)) score += 2
      }

      for (const th of a.relatedThemes || []) {
        if (currentRelatedThemes.has(th)) score += 2
      }

      return { a, score }
    })
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score)

  return scored.slice(0, 3).map((x) => x.a)
})

const bodyHtml = computed(() => {
  if (!article.value) return ''
  const md = String(article.value.body || '')
  // Marked escapes raw HTML by default unless "sanitize" is configured; we keep it simple for v0.1.
  return marked.parse(md)
})

const shareUrl = computed(() => {
  if (typeof window === 'undefined') return ''
  return window.location.href
})

const shareText = computed(() => {
  if (!article.value) return ''
  return `${article.value.title} — INNOGEN Lab`
})

const shareLinks = computed(() => {
  const url = encodeURIComponent(shareUrl.value)
  const text = encodeURIComponent(shareText.value)

  return {
    copy: shareUrl.value,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    email: `mailto:?subject=${text}&body=${url}`,
  }
})

async function copyLink() {
  if (!shareLinks.value.copy) return
  try {
    await navigator.clipboard.writeText(shareLinks.value.copy)
  } catch {
    // Fallback: do nothing (user can still copy from address bar)
  }
}
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

          <BaseCard style="margin-top: var(--space-5)">
            <div class="card-title">Share</div>
            <div class="share-row" style="margin-top: var(--space-3)">
              <button class="btn btn-sm" type="button" @click="copyLink">Copy link</button>
              <a class="btn btn-sm" :href="shareLinks.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a class="btn btn-sm" :href="shareLinks.x" target="_blank" rel="noopener noreferrer">X</a>
              <a class="btn btn-sm" :href="shareLinks.email">Email</a>
            </div>
            <p class="card-meta" style="margin-top: var(--space-3)">
              If sharing links are blocked, copy the URL from your browser address bar.
            </p>
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

            <div v-if="relatedArticles.length" style="margin-top: var(--space-6)">
              <SectionHeader title="Related articles" />
              <div class="grid cols-3">
                <BaseCard v-for="a in relatedArticles" :key="a.slug">
                  <div class="card-title">{{ a.title }}</div>
                  <p class="card-meta">{{ a.date }} · {{ a.category }}</p>
                  <p class="card-meta" style="margin-top: var(--space-2)">{{ a.summary }}</p>
                  <div style="margin-top: var(--space-3)">
                    <RouterLink class="btn btn-sm" :to="`/articles/${a.slug}`">Read</RouterLink>
                  </div>
                </BaseCard>
              </div>
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

.article-body :deep(h2) {
  margin-top: var(--space-6);
  color: var(--accent);
  font-weight: 600;
}

.article-body :deep(ul) {
  margin: var(--space-3) 0;
  padding-left: 1.1rem;
}

.article-body :deep(li) {
  margin: var(--space-2) 0;
}

.article-body :deep(a) {
  color: var(--accent);
  text-decoration: underline;
}

.share-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.list {
  margin: var(--space-3) 0 0;
  padding-left: 1.1rem;
  color: var(--text);
}
</style>