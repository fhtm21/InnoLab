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
        <h1 class="h1">Collaboration Space</h1>
        <p class="muted">
          Collaboration space for mentoring, supervision, and team sessions in INNOGEN Lab. Use this page as a guide for typical
          usage and how to request access.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Typical use cases</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Supervision and mentoring sessions</li>
              <li>Project stand-ups and team reviews</li>
              <li>Small workshops and demo rehearsals</li>
            </ul>
          </div>

          <div class="card">
            <div class="card-title">Usage notes</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Availability depends on the lab schedule and ongoing activities.</li>
              <li>Keep sessions aligned with teaching, research, or approved projects.</li>
              <li>For external guests, include context and purpose in your request.</li>
            </ul>
          </div>
        </div>

        <div class="card" style="margin-top: var(--space-5)">
          <div class="card-title">How to request the space</div>
          <p class="card-meta" style="margin-top: var(--space-2)">
            For project-based usage, submit a permit inquiry with your timeframe and purpose. For general questions, contact the lab.
          </p>
          <div style="margin-top: var(--space-3); display: flex; gap: var(--space-2); flex-wrap: wrap">
            <RouterLink class="btn btn-sm" to="/permit">Permit inquiry</RouterLink>
            <RouterLink class="btn btn-sm" to="/contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Book or request the space"
      body="Contact us to discuss availability and usage requirements."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>