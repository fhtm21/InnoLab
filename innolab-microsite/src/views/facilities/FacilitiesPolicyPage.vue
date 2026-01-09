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
        <h1 class="h1">Access & Usage Policy</h1>
        <p class="muted">
          Summary of access and usage policy for INNOGEN Lab facilities. This page will be expanded once the official policy is
          confirmed.
        </p>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Policy summary (subject to confirmation)</div>
          <ul class="list" style="margin-top: var(--space-3)">
            <li>Access requires request and approval (project-based)</li>
            <li>Users must follow data privacy and security guidelines</li>
            <li>Publication and IP follow BINUS policy and partner agreements</li>
          </ul>
        </div>
      </div>
    </section>

    <CtaBand
      title="Request access or clarification"
      body="Contact us to request access or ask about usage requirements."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>