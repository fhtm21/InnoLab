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
        <h1 class="h1">Research & Development</h1>
        <p class="muted">
          AI-driven research and development supported by INNOGEN Lab (Research & Development pillar). This page will be expanded
          with research initiatives, publications, and prototype highlights.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: research focus areas, active initiatives, and links to outputs.</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Interested in academic collaboration?"
      body="Reach out to discuss joint research, visiting collaboration, or shared supervision."
      primaryLabel="Collaborate"
      primaryTo="/collaborate"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>