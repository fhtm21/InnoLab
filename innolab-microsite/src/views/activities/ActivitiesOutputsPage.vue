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
          Publications, prototypes, and other outputs from INNOGEN Lab. This page shows example entries to illustrate how outputs can
          be presented (titles and details may be updated).
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Prototype demo</div>
            <p class="card-meta">
              Example: “Smart attendance insights dashboard” — a demo used for teaching and internal evaluation.
            </p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/playground">View demos</RouterLink>
            </div>
          </div>

          <div class="card">
            <div class="card-title">Student project</div>
            <p class="card-meta">
              Example: “IoT energy monitoring proof-of-concept” — a supervised project exploring data collection and analytics.
            </p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities/student-projects">Browse student projects</RouterLink>
            </div>
          </div>

          <div class="card">
            <div class="card-title">Research output</div>
            <p class="card-meta">
              Example: “Applied analytics case study” — internal write-up and methodology notes (shareability depends on policy).
            </p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/articles">Read articles</RouterLink>
            </div>
          </div>

          <div class="card">
            <div class="card-title">Open-source / dataset</div>
            <p class="card-meta">
              Example: curated notebooks and sample datasets for coursework (availability depends on licensing and privacy review).
            </p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/contact">Request details</RouterLink>
            </div>
          </div>
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