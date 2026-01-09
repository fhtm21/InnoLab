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
          Collaboration & Impact activities for INNOGEN Lab. The sections below describe common engagement pathways and example
          collaboration formats (details may be updated).
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Industry / applied projects</div>
            <p class="card-meta">
              Problem-driven collaboration with clear scope, timeline, and deliverables (e.g., prototype, evaluation report, demo).
            </p>
          </div>

          <div class="card">
            <div class="card-title">Academic collaboration</div>
            <p class="card-meta">
              Joint supervision, shared research activities, and co-authored outputs where appropriate and permitted.
            </p>
          </div>

          <div class="card">
            <div class="card-title">Student project partnerships</div>
            <p class="card-meta">
              Partner-provided problem statements for supervised student projects (data and access subject to review).
            </p>
          </div>

          <div class="card">
            <div class="card-title">How to start</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Share your goals and constraints (timeline, data sensitivity, expected outcomes).</li>
              <li>We propose a collaboration path and required approvals.</li>
              <li>For resource access, use the permit inquiry flow.</li>
            </ul>
            <div style="margin-top: var(--space-3); display: flex; gap: var(--space-2); flex-wrap: wrap">
              <RouterLink class="btn btn-sm" to="/collaborate">Collaborate</RouterLink>
              <RouterLink class="btn btn-sm" to="/permit">Permit inquiry</RouterLink>
            </div>
          </div>
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