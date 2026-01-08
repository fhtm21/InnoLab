<script setup>
import CtaBand from '../components/ui/CtaBand.vue'
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
  <div class="section">
    <div class="container">
      <h1 class="h1">About INNOGEN Lab</h1>
      <p class="muted">
        INNOGEN Lab (Innovation Intelligent Knowledge Generation) is a new academic and research facility at BINUS @Bekasi,
        supported by the School of Information Systems. It supports AI, data science, smart systems, and Industry 4.0–related
        innovation through hands-on learning, research, and collaboration.
      </p>

      <div class="grid cols-3" style="margin-top: var(--space-5)">
        <div class="card">
          <div class="card-title">Teaching & learning</div>
          <p class="card-meta">
            Practical lab sessions and hands-on student projects using AI tools and real-world datasets.
          </p>
        </div>
        <div class="card">
          <div class="card-title">Research & development</div>
          <p class="card-meta">
            Research in data analytics, automation, and intelligent systems, supporting publications and prototypes.
          </p>
        </div>
        <div class="card">
          <div class="card-title">Collaboration & impact</div>
          <p class="card-meta">
            Joint projects with partners and cross-program collaboration to build real-world AI solutions.
          </p>
        </div>
      </div>
    </div>

    <CtaBand
      title="Collaborate with INNOGEN Lab"
      body="Contact us to discuss student projects, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>