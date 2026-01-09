<script setup>
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Collaborate</h1>
        <p class="muted">
          Collaboration models and a simple engagement process for academic and industry/government partners.
        </p>

        <div class="grid cols-2">
          <div class="card">
            <div class="card-title">Academic collaboration</div>
            <p class="card-meta">Joint research, supervision, visiting collaboration, and shared benchmarks (as agreed).</p>
          </div>
          <div class="card">
            <div class="card-title">Industry & government</div>
            <p class="card-meta">Applied research, pilots, evaluation, and training (scope and availability dependent).</p>
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

    <CtaBand
      title="Start a conversation"
      body="Send us your problem statement and goals. We will respond with next steps based on feasibility and availability."
      primaryLabel="Contact"
      primaryTo="/contact?type=collaboration"
      secondaryLabel="Playground"
      secondaryTo="/playground"
    />
  </div>
</template>