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
        <h1 class="h1">Lab Profile</h1>
        <p class="muted">
          Overview of INNOGEN Lab (Innovation Intelligent Knowledge Generation) at BINUS @Bekasi. This page will be expanded with
          the official profile content and differentiators.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">
            Planned content: overview, what makes INNOGEN Lab different, and links to Facilities and Activities.
          </p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Collaborate with INNOGEN Lab"
      body="Contact us to discuss student projects, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>