<script setup>
import BaseCard from '../../components/ui/BaseCard.vue'
import CtaBand from '../../components/ui/CtaBand.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import { getPeople } from '../../content/index.js'

const people = getPeople()
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Lecturers & Researchers</h1>
        <p class="muted">
          Directory of lecturers and researchers involved with INNOGEN Lab. Filters will be added in v0.1 (expertise, affiliation).
        </p>

        <SectionHeader title="Directory (placeholder)" />
        <div class="grid cols-3">
          <BaseCard v-for="p in people" :key="p.slug">
            <div class="card-title">{{ p.name }}</div>
            <p class="card-meta">{{ p.title }} · {{ p.affiliation }}</p>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ p.bio }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/people/${p.slug}`">View profile</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to collaborate?"
      body="Contact us to discuss supervision, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>