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
        <h1 class="h1">Leadership & Governance</h1>
        <p class="muted">
          Leadership and governance structure for INNOGEN Lab. This page will be expanded to render leadership cards from the
          People content layer and describe governance roles.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">
            Planned content: director/deputy cards, steering committee description, and governance notes (optional advisory board).
          </p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Contact INNOGEN Lab"
      body="Reach out for supervision, collaboration, or partnership discussions."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="People"
      secondaryTo="/people"
    />
  </div>
</template>