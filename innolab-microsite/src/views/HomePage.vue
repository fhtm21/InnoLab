<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import { getThemes, getPeople, getArticles } from '../content/index.js'

const themes = getThemes()
const people = getPeople()
const articles = getArticles()
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="h1">InnoLab — BINUS University AI Research Laboratory</h1>
        <p class="muted hero-sub">
          Advancing AI research and responsible innovation across the university, from foundational methods to real-world impact.
        </p>

        <div class="hero-actions">
          <RouterLink class="btn btn-primary" to="/research">Explore Research</RouterLink>
          <RouterLink class="btn" to="/collaborate">Collaborate with InnoLab</RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="Highlights" intro="Quick entry points to understand what we do and how to engage." />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Research Themes</div>
            <p class="card-meta">Explore our v0.1 themes and related projects.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/research">Browse research</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Facilities</div>
            <p class="card-meta">GPU compute + collaboration space (placeholders)</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities">View facilities</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">People</div>
            <p class="card-meta">Meet our lecturers and researchers.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/people">View people</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="Themes" />
        <div class="grid cols-4">
          <BaseCard v-for="t in themes" :key="t.slug">
            <div class="card-title">{{ t.title }}</div>
            <p class="card-meta">{{ t.overview }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/research/themes/${t.slug}`">View theme</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="Latest articles" />
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

    <section class="section">
      <div class="container">
        <SectionHeader title="People spotlight" />
        <div class="grid cols-3">
          <BaseCard v-for="p in people" :key="p.slug">
            <div class="card-title">{{ p.name }}</div>
            <p class="card-meta">{{ p.title }} · {{ p.affiliation }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/people/${p.slug}`">View profile</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-7) 0;
  background: linear-gradient(180deg, rgba(222, 239, 251, 0.55), rgba(255, 255, 255, 0));
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  display: grid;
  gap: var(--space-4);
}

.hero-sub {
  margin: 0;
  max-width: 80ch;
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}
</style>