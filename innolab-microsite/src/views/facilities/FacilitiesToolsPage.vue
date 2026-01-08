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
        <h1 class="h1">Tools & Software</h1>
        <p class="muted">
          Tools and software available in INNOGEN Lab. This page will be expanded with an official list grouped by category.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">ML frameworks</div>
            <p class="card-meta">Python, TensorFlow, PyTorch, Keras (as available).</p>
          </div>
          <div class="card">
            <div class="card-title">Engineering & simulation</div>
            <p class="card-meta">Data engineering tools, IoT simulation, and cloud computing tools (as available).</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Need a specific tool?"
      body="Contact us to discuss requirements for your course, project, or research."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>