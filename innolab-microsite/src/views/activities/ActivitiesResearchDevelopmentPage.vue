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
        <h1 class="h1">Research & Development</h1>
        <p class="muted">
          AI-driven research and development supported by INNOGEN Lab (Research & Development pillar). The items below are example
          focus areas and typical activities (details may be updated).
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Applied analytics</div>
            <p class="card-meta">
              Exploratory studies and case-based analysis using structured and semi-structured data for decision support.
            </p>
          </div>

          <div class="card">
            <div class="card-title">Intelligent systems & automation</div>
            <p class="card-meta">
              Prototyping workflows that combine sensing, data processing, and model-driven automation.
            </p>
          </div>

          <div class="card">
            <div class="card-title">Model experimentation</div>
            <p class="card-meta">
              Training and evaluation experiments for ML/DL models (subject to compute availability and supervision).
            </p>
          </div>

          <div class="card">
            <div class="card-title">Research-to-prototype pipeline</div>
            <p class="card-meta">
              Turning research ideas into demos and proofs-of-concept that can be tested in teaching or pilot settings.
            </p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/playground">See demos</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Interested in academic collaboration?"
      body="Reach out to discuss joint research, visiting collaboration, or shared supervision."
      primaryLabel="Collaborate"
      primaryTo="/collaborate"
      secondaryLabel="Contact"
      secondaryTo="/contact"
    />
  </div>
</template>