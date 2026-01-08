<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Research</h1>
        <p class="muted">
          Research themes and projects (placeholder). v0.1 themes: NLP, Computer Vision, AI for Education, Responsible AI.
        </p>

        <SectionHeader title="Themes" viewMoreLabel="VIEW MORE" viewMoreTo="/research" />
        <div class="grid cols-4">
          <BaseCard><div class="card-title">NLP</div><p class="card-meta">Indonesian language, RAG, document intelligence</p></BaseCard>
          <BaseCard><div class="card-title">Computer Vision</div><p class="card-meta">Recognition, detection, multimodal</p></BaseCard>
          <BaseCard><div class="card-title">AI for Education</div><p class="card-meta">Learning analytics, tutoring, feedback</p></BaseCard>
          <BaseCard><div class="card-title">Responsible AI</div><p class="card-meta">Fairness, privacy, governance</p></BaseCard>
        </div>
      </div>
    </section>

    <CtaBand title="Propose a collaboration" body="Tell us about your research question, data constraints, and timeline." />
  </div>
</template>