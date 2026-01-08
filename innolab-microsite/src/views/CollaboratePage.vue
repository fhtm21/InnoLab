<script setup>
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Collaborate</h1>
        <p class="muted">
          Collaboration models and engagement process (placeholder).
        </p>

        <div class="grid cols-2">
          <div class="card">
            <div class="card-title">Academic collaboration</div>
            <p class="card-meta">Joint research, visiting scholars, shared benchmarks (placeholder)</p>
          </div>
          <div class="card">
            <div class="card-title">Industry & government</div>
            <p class="card-meta">Applied research, pilots, evaluation, training (placeholder)</p>
          </div>
        </div>

        <div class="section" style="padding-bottom: 0">
          <h2 class="h2">Engagement process</h2>
          <ol class="muted">
            <li>Initial inquiry (email/form)</li>
            <li>Scoping call (feasibility, data, ethics)</li>
            <li>Proposal (deliverables, team, governance)</li>
            <li>Execution (check-ins, documentation)</li>
            <li>Outputs (report, prototype, publication where appropriate)</li>
          </ol>
        </div>
      </div>
    </section>

    <CtaBand title="Start a conversation" body="Send us your problem statement and goals (placeholder)." />
  </div>
</template>