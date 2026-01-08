<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Articles</h1>
        <p class="muted">News, events, and insights (placeholder). Static content layer will power this later.</p>

        <div class="grid cols-3">
          <BaseCard><div class="card-title">Seminar recap (placeholder)</div><p class="card-meta">2026-01-01 · Events</p></BaseCard>
          <BaseCard><div class="card-title">New publication announcement (placeholder)</div><p class="card-meta">2025-12-15 · News</p></BaseCard>
          <BaseCard><div class="card-title">Responsible AI note (placeholder)</div><p class="card-meta">2025-11-20 · Insights</p></BaseCard>
        </div>
      </div>
    </section>

    <CtaBand title="Have news to share?" body="Send us an update to publish as an article (placeholder workflow)." />
  </div>
</template>