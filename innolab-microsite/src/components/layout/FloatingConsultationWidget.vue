<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { siteConfig } from '../../config/site'

const router = useRouter()

const enabled = computed(() => siteConfig.floatingWidget.enabled)

function onClick() {
  const action = siteConfig.floatingWidget.action
  if (!action) return

  if (action.type === 'route' && action.to) {
    router.push(action.to)
    return
  }

  if (action.type === 'external' && action.href) {
    window.open(action.href, '_blank', 'noreferrer')
  }
}
</script>

<template>
  <div v-if="enabled" class="widget" role="complementary" aria-label="Consultation widget">
    <button class="widget-btn" type="button" @click="onClick">
      <span class="badge" aria-hidden="true">?</span>
      <span class="label">{{ siteConfig.floatingWidget.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.widget {
  position: fixed;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  z-index: 30;
}

.widget-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 10px;
  background: var(--surface-light-blue);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-widget);
  box-shadow: var(--shadow-widget);
  cursor: pointer;
  font: inherit;
  color: var(--text-600);
}

.widget-btn:hover {
  filter: brightness(0.99);
}

.widget-btn:focus-visible {
  box-shadow: var(--shadow-widget), var(--focus-ring);
}

.badge {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #fff;
  display: grid;
  place-items: center;
  font-weight: var(--font-weight-semibold);
  color: var(--accent-blue);
}

.label {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  white-space: nowrap;
}
</style>