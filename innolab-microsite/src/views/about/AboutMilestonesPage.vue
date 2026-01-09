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
        <h1 class="h1">History & Milestones</h1>
        <p class="muted">
          Key milestones for INNOGEN Lab. This timeline is a working summary and may be updated as official dates and details are
          confirmed.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">2025 — Project initiation</div>
            <p class="card-meta">
              Internal planning and scope definition for an AI and data innovation lab at BINUS @Bekasi.
            </p>
          </div>

          <div class="card">
            <div class="card-title">2025 — Space preparation</div>
            <p class="card-meta">
              Lab space setup and readiness work to support teaching sessions, supervision, and prototype development.
            </p>
          </div>

          <div class="card">
            <div class="card-title">2026 — Pilot activities</div>
            <p class="card-meta">
              Early-stage pilots for student projects and applied research workflows (availability depends on scheduling and resources).
            </p>
          </div>

          <div class="card">
            <div class="card-title">2026 — Partnerships & showcases</div>
            <p class="card-meta">
              Collaboration discussions and demo showcases as projects mature and become shareable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Stay connected"
      body="Follow updates and announcements through the Articles section."
      primaryLabel="Articles"
      primaryTo="/articles"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>