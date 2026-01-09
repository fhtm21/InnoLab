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
        <h1 class="h1">Technical Capabilities</h1>
        <p class="muted">
          A summary of the technical capabilities available in INNOGEN Lab. This page will be expanded with the official
          capabilities list and access notes.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Compute</div>
            <p class="card-meta">GPU-capable workstations for deep learning training and experimentation.</p>
          </div>
          <div class="card">
            <div class="card-title">AI development stack</div>
            <p class="card-meta">Python environments with TensorFlow, PyTorch, and Keras (as available).</p>
          </div>
          <div class="card">
            <div class="card-title">Engineering tools</div>
            <p class="card-meta">Tools for data engineering, IoT simulation, and cloud computing (as available).</p>
          </div>
          <div class="card">
            <div class="card-title">Collaboration space</div>
            <p class="card-meta">Space for collaborative sessions, mentoring, and student supervision.</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Request access"
      body="Contact us to request access to compute or collaboration space. Requests are reviewed based on availability and policy."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>