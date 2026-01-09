<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Facilities</h1>
        <p class="muted">Overview of compute, collaboration space, tools, and access policy.</p>

        <div class="grid cols-2">
          <BaseCard>
            <div class="card-title">Compute (GPU workstations)</div>
            <p class="card-meta">GPU-capable workstations for deep learning training and experimentation.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/compute">View details</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Collaboration Space</div>
            <p class="card-meta">Space for collaborative sessions, mentoring, and supervision.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/space">View details</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Tools & Software</div>
            <p class="card-meta">Python, TensorFlow, PyTorch, Keras, and supporting tools (as available).</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/tools">View details</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Access & Usage Policy</div>
            <p class="card-meta">Usage principles and request/approval process.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/policy">View policy</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand
      title="Request facility access"
      body="Submit a request for compute or space usage. For now, requests are handled via the Contact page."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Permit inquiry"
      secondaryTo="/permit"
    />
  </div>
</template>