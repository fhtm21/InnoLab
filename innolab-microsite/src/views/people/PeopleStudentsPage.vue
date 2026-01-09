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
        <h1 class="h1">Students & Research Assistants</h1>
        <p class="muted">
          Student and research assistant listings for INNOGEN Lab. The entries below are example profiles to illustrate how student
          involvement can be presented (names and details may be updated).
        </p>

        <div class="grid cols-3" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Research assistant (example)</div>
            <p class="card-meta">Focus: data preparation, experiment tracking, and documentation support.</p>
          </div>

          <div class="card">
            <div class="card-title">Thesis student (example)</div>
            <p class="card-meta">Focus: applied ML evaluation for a supervised case study (topic subject to approval).</p>
          </div>

          <div class="card">
            <div class="card-title">Project contributor (example)</div>
            <p class="card-meta">Focus: dashboard UI, data visualization, and demo packaging for presentations.</p>
          </div>
        </div>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">How students join</div>
          <p class="card-meta" style="margin-top: var(--space-2)">
            Opportunities depend on supervision capacity and project needs. See the Join page for the current process.
          </p>
          <div style="margin-top: var(--space-3)">
            <RouterLink class="btn btn-sm" to="/people/join">Join us</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Interested in joining?"
      body="See opportunities and contact us to apply."
      primaryLabel="Join us"
      primaryTo="/people/join"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>