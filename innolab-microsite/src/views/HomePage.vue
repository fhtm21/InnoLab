<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="h1">InnoLab — BINUS University AI Research Laboratory</h1>
        <p class="muted hero-sub">
          Advancing AI research and responsible innovation across the university, from foundational methods to real-world impact.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="/research">Explore Research</a>
          <a class="btn" href="/collaborate">Collaborate with InnoLab</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader
          title="Highlights"
          intro="Quick entry points to understand what we do and how to engage."
        />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Research Themes</div>
            <p class="card-meta">NLP, Computer Vision, AI for Education, Responsible AI</p>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Facilities</div>
            <p class="card-meta">GPU compute + collaboration space (placeholders)</p>
          </BaseCard>
          <BaseCard>
            <div class="card-title">People</div>
            <p class="card-meta">Leadership and lecturers directory (placeholder)</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-7) 0;
  background: linear-gradient(180deg, rgba(222, 239, 251, 0.55), rgba(255, 255, 255, 0));
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  display: grid;
  gap: var(--space-4);
}

.hero-sub {
  margin: 0;
  max-width: 80ch;
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}
</style>