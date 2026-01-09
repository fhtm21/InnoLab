<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { getPeople } from '../content/index.js'

const people = getPeople()
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">People</h1>
        <p class="muted">Meet the people involved with INNOGEN Lab and explore directory pages.</p>

        <SectionHeader title="Explore" />
        <div class="grid cols-3" style="margin-bottom: var(--space-6)">
          <BaseCard>
            <div class="card-title">Lecturers & Researchers</div>
            <p class="card-meta">Browse the directory of lecturers and researchers involved with the lab.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/people/lecturers">Open directory</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Students & Research Assistants</div>
            <p class="card-meta">Student contributors and research assistants (placeholder).</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/people/students">View</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Join Us</div>
            <p class="card-meta">Opportunities for research assistantships, thesis/capstone, internships, and visiting collaboration.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/people/join">See opportunities</RouterLink>
            </div>
          </BaseCard>
        </div>

        <SectionHeader title="Featured people" intro="A quick snapshot from the current people content." />
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
      title="Get involved with INNOGEN Lab"
      body="Contact us to discuss student projects, supervision, and collaboration opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>