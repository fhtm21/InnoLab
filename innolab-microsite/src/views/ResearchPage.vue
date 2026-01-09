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
        <h1 class="h1">Activities</h1>
        <p class="muted">
          Student projects, research and development initiatives, and partnerships supported by INNOGEN Lab.
        </p>

        <SectionHeader title="Explore activities" intro="Browse the main activity areas for INNOGEN Lab." />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Student projects</div>
            <p class="card-meta">Hands-on projects using AI tools and real-world datasets.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities/student-projects">Explore</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Research & development</div>
            <p class="card-meta">Research in data analytics, automation, and intelligent systems.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities/research-development">Explore</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Partnerships & collaboration</div>
            <p class="card-meta">Joint projects with industry partners and institutions.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities/partnerships">Explore</RouterLink>
            </div>
          </BaseCard>
        </div>

        <div style="margin-top: var(--space-6)">
          <SectionHeader title="Featured projects" intro="Examples of projects (from the current static content layer)." />
          <div class="grid cols-2">
            <BaseCard v-for="p in projects.slice(0, 2)" :key="p.slug">
              <div class="card-title">{{ p.title }}</div>
              <p class="card-meta">{{ p.status }} · {{ p.summary }}</p>
              <div style="margin-top: var(--space-3)">
                <RouterLink class="btn btn-sm" :to="`/activities/projects/${p.slug}`">View project</RouterLink>
              </div>
            </BaseCard>
          </div>
        </div>

        <div style="margin-top: var(--space-6)">
          <SectionHeader title="Legacy themes (temporary)" intro="These theme pages will be repurposed or removed as Activities content is finalized." />
          <div class="grid cols-4">
            <BaseCard v-for="t in themes" :key="t.slug">
              <div class="card-title">{{ t.title }}</div>
              <p class="card-meta">{{ t.overview }}</p>
              <div style="margin-top: var(--space-3)">
                <RouterLink class="btn btn-sm" :to="`/activities/themes/${t.slug}`">View</RouterLink>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Collaborate with INNOGEN Lab"
      body="Tell us about your project idea, data constraints, and timeline."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>