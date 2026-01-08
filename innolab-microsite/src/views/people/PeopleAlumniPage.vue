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
        <h1 class="h1">Alumni</h1>
        <p class="muted">Alumni listing for INNOGEN Lab (optional). This page can be enabled once alumni data is ready.</p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: alumni names, roles, and selected outputs (where publishable).</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to stay connected?"
      body="Follow updates and reach out for collaboration opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="People"
      secondaryTo="/people"
    />
  </div>
</template>