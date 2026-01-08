<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, required: true },
  intro: { type: String, default: '' },
  viewMoreLabel: { type: String, default: '' },
  viewMoreTo: { type: String, default: '' },
})
</script>

<template>
  <div class="section-header">
    <div class="left">
      <h2 class="h2">{{ title }}</h2>
      <p v-if="intro" class="muted intro">{{ intro }}</p>
    </div>

    <RouterLink
      v-if="viewMoreLabel && viewMoreTo"
      class="view-more"
      :to="viewMoreTo"
    >
      {{ viewMoreLabel }}
    </RouterLink>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.intro {
  margin: 0;
  max-width: 70ch;
}

.view-more {
  font-size: 14px;
  color: var(--text-650);
  text-decoration: none;
  padding-top: 6px;
}

.view-more:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .section-header {
    flex-direction: column;
  }
}
</style>