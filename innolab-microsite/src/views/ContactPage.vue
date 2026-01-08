<script setup>
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Contact</h1>
        <p class="muted">
          Static-friendly contact form placeholder. Replace with mailto or a third-party form endpoint.
        </p>

        <form class="form" @submit.prevent>
          <label class="field">
            <span class="label">Name</span>
            <input class="input" type="text" name="name" required />
          </label>

          <label class="field">
            <span class="label">Email</span>
            <input class="input" type="email" name="email" required />
          </label>

          <label class="field">
            <span class="label">Message</span>
            <textarea class="input" name="message" rows="5" required />
          </label>

          <button class="btn btn-primary" type="submit">Send (placeholder)</button>
        </form>

        <div class="section" style="padding-bottom: 0">
          <h2 class="h2">Contact details</h2>
          <p class="muted">Email: innolab@binus.ac.id (placeholder)</p>
          <p class="muted">Location: BINUS University, Campus/Building (placeholder)</p>
        </div>
      </div>
    </section>

    <CtaBand title="Prefer email?" body="Use the contact details above (placeholder)." primaryLabel="Back to Home" primaryTo="/" secondaryLabel="Collaborate" secondaryTo="/collaborate" />
  </div>
</template>

<style scoped>
.form {
  margin-top: var(--space-5);
  display: grid;
  gap: var(--space-4);
  max-width: 560px;
}

.field {
  display: grid;
  gap: 8px;
}

.label {
  font-size: 14px;
  color: var(--text-650);
}

.input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 12px;
  font: inherit;
  color: var(--text-600);
  background: #fff;
}

.input:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}
</style>