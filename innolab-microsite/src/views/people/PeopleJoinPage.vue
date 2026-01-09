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
        <h1 class="h1">Join Us</h1>
        <p class="muted">
          Opportunities to get involved with INNOGEN Lab. This page will be expanded with current openings and application steps.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Research assistantships</div>
            <p class="card-meta">Work with lecturers on lab projects (subject to openings and fit).</p>
          </div>
          <div class="card">
            <div class="card-title">Thesis / capstone projects</div>
            <p class="card-meta">Supervision and co-supervision opportunities (topic and capacity dependent).</p>
          </div>
          <div class="card">
            <div class="card-title">Internships</div>
            <p class="card-meta">Applied projects with partners (availability varies by cycle).</p>
          </div>
          <div class="card">
            <div class="card-title">Visiting collaboration</div>
            <p class="card-meta">Short-term collaboration with external researchers (by arrangement).</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Apply or ask about opportunities"
      body="Send us your background and interests, and we’ll follow up."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="People"
      secondaryTo="/people"
    />
  </div>
</template>