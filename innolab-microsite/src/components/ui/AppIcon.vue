<script setup>
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 18 },
  decorative: { type: Boolean, default: true },
  label: { type: String, default: '' },
})

const attrs = useAttrs()

const ariaAttrs = computed(() => {
  // If decorative, hide from screen readers.
  if (props.decorative) return { 'aria-hidden': 'true' }

  // If meaningful, require a label (or allow consumer to pass aria-label via attrs).
  const ariaLabel = props.label || attrs['aria-label']
  if (ariaLabel) return { 'aria-label': ariaLabel, role: 'img' }

  // Fallback: still expose as image role, but without label (not ideal).
  return { role: 'img' }
})

const normalizedSize = computed(() => {
  if (typeof props.size === 'number') return `${props.size}px`
  return props.size
})
</script>

<template>
  <Icon
    :icon="name"
    :width="normalizedSize"
    :height="normalizedSize"
    v-bind="ariaAttrs"
    class="app-icon"
  />
</template>

<style scoped>
.app-icon {
  display: inline-block;
  vertical-align: -0.125em;
  color: currentColor;
}
</style>