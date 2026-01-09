<script setup>
import BaseCard from './BaseCard.vue'

defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  unit: { type: String, default: '' },
  note: { type: String, default: '' },
  isPlaceholder: { type: Boolean, default: false },
  as: { type: String, default: 'div' },
})
</script>

<template>
  <BaseCard :as="as" class="kpi-card">
    <div class="kpi-title">{{ title }}</div>

    <div class="kpi-value" :aria-label="`${title}: ${value}${unit ? ` ${unit}` : ''}`">
      <span class="kpi-number">{{ value }}</span>
      <span v-if="unit" class="kpi-unit">{{ unit }}</span>
    </div>

    <p v-if="note || isPlaceholder" class="kpi-note muted">
      <span v-if="note">{{ note }}</span>
      <span v-else>Placeholder</span>
    </p>
  </BaseCard>
</template>

<style scoped>
.kpi-card :deep(.card) {
  display: grid;
  gap: var(--space-2);
}

.kpi-title {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
}

.kpi-value {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  line-height: 1.1;
}

.kpi-number {
  font-size: 28px;
  font-weight: var(--font-weight-semibold);
  color: var(--accent-blue);
}

.kpi-unit {
  font-size: 14px;
  color: var(--text-650);
}

.kpi-note {
  margin: 0;
  font-size: 14px;
}
</style>