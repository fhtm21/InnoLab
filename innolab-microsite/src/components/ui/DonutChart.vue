<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  items: {
    type: Array,
    required: true,
    // [{ label: string, value: number, isPlaceholder?: boolean }]
  },
  size: { type: Number, default: 160 },
  strokeWidth: { type: Number, default: 18 },
  // Optional: override colors; otherwise uses a safe default palette.
  colors: { type: Array, default: () => [] },
})

const safeItems = computed(() =>
  props.items
    .map((i) => ({
      label: String(i.label),
      value: typeof i.value === 'number' ? i.value : Number(i.value),
      isPlaceholder: Boolean(i.isPlaceholder),
    }))
    .filter((i) => Number.isFinite(i.value) && i.value >= 0),
)

const total = computed(() => safeItems.value.reduce((acc, i) => acc + i.value, 0))

const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

const palette = computed(() => {
  const fallback = [
    'rgb(59, 125, 192)', // --accent-blue
    'rgb(243, 147, 27)', // --cta-orange
    'rgb(102, 102, 102)', // --text-650
    'rgba(0, 0, 0, 0.35)',
  ]
  return props.colors.length ? props.colors : fallback
})

const segments = computed(() => {
  const t = total.value
  if (t <= 0) return []

  let offset = 0
  return safeItems.value.map((item, idx) => {
    const fraction = item.value / t
    const length = fraction * circumference.value
    const seg = {
      ...item,
      color: palette.value[idx % palette.value.length],
      dasharray: `${length} ${circumference.value - length}`,
      dashoffset: -offset,
      percent: fraction * 100,
    }
    offset += length
    return seg
  })
})

const chartId = computed(() => `donut-${Math.random().toString(36).slice(2)}`)
const ariaLabel = computed(() => {
  const parts = safeItems.value.map((i) => `${i.label}: ${i.value}`).join(', ')
  return `${props.title}. ${parts}`
})
</script>

<template>
  <div class="donut">
    <div class="donut-title">{{ title }}</div>

    <div class="donut-body">
      <svg
        class="donut-svg"
        :width="size"
        :height="size"
        viewBox="0 0 100 100"
        role="img"
        :aria-label="ariaLabel"
        :aria-labelledby="`${chartId}-title ${chartId}-desc`"
      >
        <title :id="`${chartId}-title`">{{ title }}</title>
        <desc :id="`${chartId}-desc`">
          {{ safeItems.map((i) => `${i.label}: ${i.value}`).join(', ') }}
        </desc>

        <!-- background ring -->
        <circle class="donut-bg" cx="50" cy="50" r="40" />

        <!-- segments -->
        <g v-if="segments.length" class="donut-segs">
          <circle
            v-for="seg in segments"
            :key="seg.label"
            class="donut-seg"
            cx="50"
            cy="50"
            r="40"
            :stroke="seg.color"
            :stroke-dasharray="seg.dasharray"
            :stroke-dashoffset="seg.dashoffset"
          />
        </g>

        <!-- empty state -->
        <g v-else>
          <circle class="donut-empty" cx="50" cy="50" r="40" />
          <text x="50" y="54" text-anchor="middle" class="donut-empty-text">No data</text>
        </g>
      </svg>

      <!-- Visible legend = text equivalent (not color-only) -->
      <ul class="donut-legend" role="list">
        <li v-for="(item, idx) in safeItems" :key="item.label" class="donut-legend-row">
          <span class="swatch" :style="{ background: palette[idx % palette.length] }" aria-hidden="true" />
          <span class="legend-label">
            {{ item.label }}
            <span v-if="item.isPlaceholder" class="muted"> (data pending confirmation)</span>
          </span>

          <span class="legend-value muted">
            <span class="legend-number">{{ item.value }}</span>
            <span v-if="total > 0" class="legend-percent">({{ ((Number(item.value) / total) * 100).toFixed(1) }}%)</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.donut {
  display: grid;
  gap: var(--space-3);
}

.donut-title {
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
}

.donut-body {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-4);
  align-items: center;
}

@media (max-width: 640px) {
  .donut-body {
    grid-template-columns: 1fr;
  }
}

.donut-svg {
  display: block;
}

.donut-bg {
  fill: none;
  stroke: rgba(0, 0, 0, 0.06);
  stroke-width: 12;
}

.donut-seg {
  fill: none;
  stroke-width: 12;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.donut-empty {
  fill: none;
  stroke: rgba(0, 0, 0, 0.12);
  stroke-width: 12;
}

.donut-empty-text {
  font-size: 8px;
  fill: rgba(0, 0, 0, 0.55);
}

.donut-legend {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-2);
}

.donut-legend-row {
  display: grid;
  grid-template-columns: 12px 1fr auto;
  gap: var(--space-2);
  align-items: start;
}

.swatch {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid var(--border);
  margin-top: 2px;
}

.legend-label {
  color: var(--text-600);
}

.legend-value {
  font-size: 14px;
  white-space: nowrap;
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  justify-content: flex-end;
}

.legend-percent {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
}
</style>