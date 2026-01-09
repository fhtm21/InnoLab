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
        <h1 class="h1">Lab Profile</h1>
        <p class="muted">
          Overview of INNOGEN Lab (Innovation Intelligent Knowledge Generation) at BINUS @Bekasi, supported by the School of
          Information Systems. The lab supports hands-on learning, research, and collaboration in AI, data science, smart systems,
          and Industry 4.0–related innovation.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">What INNOGEN Lab is</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>A multi-purpose academic and research space for experimentation and prototyping.</li>
              <li>A place for students, lecturers, and partners to collaborate on applied work.</li>
              <li>Designed to support course activities, research initiatives, and pilot projects.</li>
            </ul>
          </div>

          <div class="card">
            <div class="card-title">What makes it different</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Project-based access: requests are reviewed based on availability and policy.</li>
              <li>Prototype-first mindset: demos and proofs-of-concept are encouraged where appropriate.</li>
              <li>Cross-program collaboration: supports multidisciplinary teams and supervision.</li>
            </ul>
          </div>
        </div>

        <div class="grid cols-3" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Facilities</div>
            <p class="card-meta">Compute, tools, and collaboration space.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities">View facilities</RouterLink>
            </div>
          </div>

          <div class="card">
            <div class="card-title">Activities</div>
            <p class="card-meta">Research, student projects, and partnerships.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities">Browse activities</RouterLink>
            </div>
          </div>

          <div class="card">
            <div class="card-title">Playground</div>
            <p class="card-meta">Selected demos and prototypes (availability may vary).</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/playground">Open playground</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

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