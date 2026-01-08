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
        <h1 class="h1">Purpose</h1>
        <p class="muted">
          INNOGEN Lab supports hands-on learning, research and development, and collaboration with partners. This page will be
          expanded with the official purpose bullets.
        </p>

        <div class="grid cols-3" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Teaching & learning</div>
            <p class="card-meta">Practical lab sessions, hands-on projects, and support for innovative coursework.</p>
          </div>
          <div class="card">
            <div class="card-title">Research & development</div>
            <p class="card-meta">AI-driven research, publications, prototypes, and cross-campus collaboration.</p>
          </div>
          <div class="card">
            <div class="card-title">Collaboration & impact</div>
            <p class="card-meta">Joint projects with industry and institutions; cross-program real-world AI solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Work with INNOGEN Lab"
      body="Contact us to discuss student projects, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>