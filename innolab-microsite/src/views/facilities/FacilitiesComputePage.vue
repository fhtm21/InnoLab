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
        <h1 class="h1">Compute</h1>
        <p class="muted">
          Compute resources available in INNOGEN Lab (GPU-capable workstations). This page will be expanded with detailed specs and
          usage principles once confirmed.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Capabilities (placeholder)</div>
          <ul class="list" style="margin-top: var(--space-3)">
            <li>GPU-capable workstations for deep learning training and experimentation</li>
            <li>Python environments for AI development (as available)</li>
          </ul>
        </div>
      </div>
    </section>

    <CtaBand
      title="Request access to compute"
      body="Contact us to request access for teaching, research, or approved projects."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>