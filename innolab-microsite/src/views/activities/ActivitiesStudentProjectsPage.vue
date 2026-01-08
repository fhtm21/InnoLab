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
        <h1 class="h1">Student Projects</h1>
        <p class="muted">
          Student-led projects and coursework supported by INNOGEN Lab (Teaching & Learning pillar). This page will be expanded
          with project listings and examples.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Coming soon</div>
          <p class="card-meta">Planned content: featured student projects, capstones, and lab-supported coursework artifacts.</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to propose a student project?"
      body="Contact us with your topic and goals."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Activities"
      secondaryTo="/activities"
    />
  </div>
</template>