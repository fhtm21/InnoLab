<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Facilities</h1>
        <p class="muted">Overview of compute, collaboration space, tools, and access policy (placeholders).</p>

        <div class="grid cols-2">
          <BaseCard><div class="card-title">Compute (GPU servers)</div><p class="card-meta">Training/inference workloads (placeholder)</p></BaseCard>
          <BaseCard><div class="card-title">Collaboration Space</div><p class="card-meta">Meetings, seminars, workshops (placeholder)</p></BaseCard>
          <BaseCard><div class="card-title">Tools & Software</div><p class="card-meta">Frameworks, tracking, collaboration (placeholder)</p></BaseCard>
          <BaseCard><div class="card-title">Access & Usage Policy</div><p class="card-meta">Request + approval, privacy compliance (placeholder)</p></BaseCard>
        </div>
      </div>
    </section>

    <CtaBand title="Request facility access" body="Submit a request for compute or space usage (static-friendly placeholder)." />
  </div>
</template>