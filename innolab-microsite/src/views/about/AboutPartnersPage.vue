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
        <h1 class="h1">Partners & Affiliations</h1>
        <p class="muted">
          Partner and affiliation information for INNOGEN Lab. This page will be expanded with internal and external partner lists.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Internal (BINUS)</div>
            <p class="card-meta">Faculties, research centers, and cross-campus initiatives (list in progress).</p>
          </div>
          <div class="card">
            <div class="card-title">External</div>
            <p class="card-meta">Industry partners, institutions, and international collaborations (list in progress).</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Propose a collaboration"
      body="Tell us about your goals, timeline, and constraints. We’ll follow up to scope next steps."
      primaryLabel="Collaborate"
      primaryTo="/collaborate"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>