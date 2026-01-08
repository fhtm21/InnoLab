<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">People</h1>
        <p class="muted">Leadership and lecturers directory entry points (placeholders).</p>

        <div class="grid cols-3">
          <BaseCard><div class="card-title">Leadership</div><p class="card-meta">Director, deputy, governance (placeholder)</p></BaseCard>
          <BaseCard><div class="card-title">Lecturers / Researchers</div><p class="card-meta">Filterable directory (placeholder)</p></BaseCard>
          <BaseCard><div class="card-title">Join Us</div><p class="card-meta">RA, thesis, internships (placeholder)</p></BaseCard>
        </div>
      </div>
    </section>

    <CtaBand title="Join InnoLab" body="Explore research assistantships, thesis supervision, and collaboration opportunities." primaryLabel="Contact" primaryTo="/contact" secondaryLabel="Collaborate" secondaryTo="/collaborate" />
  </div>
</template>