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
        <h1 class="h1">Collaboration Space</h1>
        <p class="muted">
          Collaboration space for mentoring, supervision, and team sessions in INNOGEN Lab. This page will be expanded with booking
          guidance and media placeholders.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: space description, usage guidelines, and booking/contact CTA.</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Book or request the space"
      body="Contact us to discuss availability and usage requirements."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>