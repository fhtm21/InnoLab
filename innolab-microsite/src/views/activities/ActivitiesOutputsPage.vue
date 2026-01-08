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
        <h1 class="h1">Outputs</h1>
        <p class="muted">
          Publications, prototypes, and other outputs from INNOGEN Lab. This page will be expanded with a browsable list (grouped by
          year/type).
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: publications, demos, datasets, and open-source links (where shareable).</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Looking for a specific output?"
      body="Contact us and we’ll point you to the right resource."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Activities"
      secondaryTo="/activities"
    />
  </div>
</template>