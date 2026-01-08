<script setup>
import CtaBand from '../../components/ui/CtaBand.vue'
</script>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #fff;
  padding: var(--space-4);
}
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">History & Milestones</h1>
        <p class="muted">
          Key milestones for INNOGEN Lab. This page will be expanded with a timeline rendered from static content.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: timeline component + milestone entries (year, title, description).</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Stay connected"
      body="Follow updates and announcements through the Articles section."
      primaryLabel="Articles"
      primaryTo="/articles"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>