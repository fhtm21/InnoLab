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
        <h1 class="h1">Leadership & Governance</h1>
        <p class="muted">
          Leadership and governance structure for INNOGEN Lab. Roles and assignments may be updated as the lab’s operating model is
          finalized.
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5)">
          <div class="card">
            <div class="card-title">Project leadership</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li><strong>Project lead:</strong> Anindhita Dewabharata, Ph.D.</li>
              <li><strong>IT & lab renovation:</strong> Dr. Sulistyo Heripracoyo</li>
              <li><strong>IT & procurement:</strong> Yehezkiel Novianto</li>
              <li><strong>Renovation & supporting activities:</strong> Willy Kristian, S.Kom, M.Kom.</li>
            </ul>
          </div>

          <div class="card">
            <div class="card-title">How decisions are made</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Requests are reviewed based on availability, safety, and policy.</li>
              <li>Priority is given to teaching support, supervised student work, and approved research activities.</li>
              <li>Partnership activities are scoped with clear goals, timelines, and responsibilities.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Contact INNOGEN Lab"
      body="Reach out for supervision, collaboration, or partnership discussions."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="People"
      secondaryTo="/people"
    />
  </div>
</template>