<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import { getThemes, getProjects } from '../content/index.js'

const themes = getThemes()
const projects = getProjects()
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Research</h1>
        <p class="muted">
          Research themes and projects. Explore themes, then drill down into projects and related people.
        </p>

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

        <div style="margin-top: var(--space-6)">
          <SectionHeader title="Featured projects" />
          <div class="grid cols-2">
            <BaseCard v-for="p in projects.slice(0, 2)" :key="p.slug">
              <div class="card-title">{{ p.title }}</div>
              <p class="card-meta">{{ p.status }} · {{ p.summary }}</p>
              <div style="margin-top: var(--space-3)">
                <RouterLink class="btn btn-sm" :to="`/research/projects/${p.slug}`">View project</RouterLink>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <CtaBand title="Propose a collaboration" body="Tell us about your research question, data constraints, and timeline." />
  </div>
</template>