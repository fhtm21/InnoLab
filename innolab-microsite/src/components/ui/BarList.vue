<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  items: {
    type: Array,
    required: true,
    // [{ label: string, value: number|string, isPlaceholder?: boolean }]
  },
  valueFormatter: { type: Function, default: (v) => v },
  max: { type: Number, default: null },
  showValues: { type: Boolean, default: true },
})

const numericValues = computed(() =>
  props.items
    .map((i) => (typeof i.value === 'number' ? i.value : Number(i.value)))
    .filter((n) => Number.isFinite(n)),
)

const computedMax = computed(() => {
  if (Number.isFinite(props.max) && props.max > 0) return props.max
  const m = Math.max(0, ...numericValues.value)
  return m > 0 ? m : 1
})

function widthPct(item) {
  const n = typeof item.value === 'number' ? item.value : Number(item.value)
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.min(100, (n / computedMax.value) * 100))
}
</script>

<template>
  <div class="barlist">
    <div v-if="title" class="barlist-title">{{ title }}</div>

    <!-- Text equivalent: always visible labels + values -->
    <ul class="barlist-list" role="list">
      <li v-for="item in items" :key="item.label" class="barlist-row">
        <div class="barlist-row-head">
          <span class="barlist-label">
            {{ item.label }}
            <span v-if="item.isPlaceholder" class="muted"> (data pending confirmation)</span>
          </span>

          <span v-if="showValues" class="barlist-value">
            {{ valueFormatter(item.value) }}
          </span>
        </div>

        <div class="barlist-track" aria-hidden="true">
          <div class="barlist-bar" :style="{ width: `${widthPct(item)}%` }" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.barlist {
  display: grid;
  gap: var(--space-3);
}

.barlist-title {
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
}

.barlist-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-3);
}

.barlist-row {
  display: grid;
  gap: var(--space-2);
}

.barlist-row-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
}

.barlist-label {
  color: var(--text-600);
}

.barlist-value {
  color: var(--text-650);
  font-size: 14px;
  white-space: nowrap;
}

.barlist-track {
  height: 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid var(--border);
}

.barlist-bar {
  height: 100%;
  background: var(--accent-blue);
  border-radius: 999px;
}
</style>