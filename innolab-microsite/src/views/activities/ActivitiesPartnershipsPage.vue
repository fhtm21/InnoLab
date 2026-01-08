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
        <h1 class="h1">Partnerships</h1>
        <p class="muted">
          Collaboration & Impact activities for INNOGEN Lab. This page will be expanded with partnership models, examples, and
          engagement pathways.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: industry/government engagement, academic collaboration, and joint project examples.</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Let’s collaborate"
      body="Tell us your problem statement and goals, and we’ll propose a collaboration path."
      primaryLabel="Collaborate"
      primaryTo="/collaborate"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>