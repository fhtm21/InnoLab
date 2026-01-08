<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { getArticles } from '../content/index.js'

const articles = getArticles()
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Articles</h1>
        <p class="muted">News, events, and insights (v0.1 static content).</p>

        <SectionHeader title="Latest" />
        <div class="grid cols-3">
          <BaseCard v-for="a in articles" :key="a.slug">
            <div class="card-title">{{ a.title }}</div>
            <p class="card-meta">{{ a.date }} · {{ a.category }}</p>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ a.summary }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/articles/${a.slug}`">Read</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand title="Have news to share?" body="Send us an update to publish as an article (placeholder workflow)." />
  </div>
</template>