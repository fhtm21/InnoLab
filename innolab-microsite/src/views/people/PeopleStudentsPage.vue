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
        <h1 class="h1">Students & Research Assistants</h1>
        <p class="muted">
          Student and research assistant listings for INNOGEN Lab (optional for v0.1). This page will be expanded once content is
          available.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: current RAs, thesis students, and project assignments (if publishable).</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Interested in joining?"
      body="See opportunities and contact us to apply."
      primaryLabel="Join us"
      primaryTo="/people/join"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>