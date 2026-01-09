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
        <h1 class="h1">Alumni</h1>
        <p class="muted">
          Alumni listing for INNOGEN Lab. The entries below are example categories to show how alumni contributions can be presented
          (details may be updated).
        </p>

        <div class="grid cols-3" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Student project alumni</div>
            <p class="card-meta">Contributors to supervised projects and demos during their study period.</p>
          </div>

          <div class="card">
            <div class="card-title">Research assistant alumni</div>
            <p class="card-meta">Former RAs supporting experiments, documentation, and prototype delivery.</p>
          </div>

          <div class="card">
            <div class="card-title">Community contributors</div>
            <p class="card-meta">Participants who supported workshops, showcases, or mentoring activities.</p>
          </div>
        </div>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">Share an update</div>
          <p class="card-meta" style="margin-top: var(--space-2)">
            If you are an alumnus and want to share an update or a publishable output, contact the lab team.
          </p>
          <div style="margin-top: var(--space-3)">
            <RouterLink class="btn btn-sm" to="/contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to stay connected?"
      body="Follow updates and reach out for collaboration opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="People"
      secondaryTo="/people"
    />
  </div>
</template>