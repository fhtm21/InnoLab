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
.faq {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-5);
}
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">FAQ</h1>
        <p class="muted">
          Frequently asked questions about INNOGEN Lab. This page will be expanded with an accessible accordion (planned via Reka UI).
        </p>

        <div class="faq">
          <div class="card">
            <div class="card-title">How can students join INNOGEN Lab projects?</div>
            <p class="card-meta">Placeholder: joining process, eligibility, and contact point.</p>
          </div>
          <div class="card">
            <div class="card-title">Do you accept industry-sponsored projects?</div>
            <p class="card-meta">Placeholder: collaboration models and scoping process.</p>
          </div>
          <div class="card">
            <div class="card-title">Where is INNOGEN Lab located?</div>
            <p class="card-meta">Placeholder: BINUS @Bekasi location details and map link.</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Still have questions?"
      body="Send us a message and we’ll get back to you."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>