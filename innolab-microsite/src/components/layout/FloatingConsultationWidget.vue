<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { siteConfig } from '../../config/site'
import AppIcon from '../ui/AppIcon.vue'

const router = useRouter()

const enabled = computed(() => siteConfig.floatingWidget.enabled)
const open = ref(false)

const actions = [
  { label: 'Collaborate', to: '/collaborate', icon: 'ph:handshake' },
  { label: 'Permit inquiry', to: '/permit', icon: 'ph:clipboard-text' },
  { label: 'Playground', to: '/playground', icon: 'ph:rocket-launch' },
  { label: 'Contact', to: '/contact', icon: 'ph:envelope-simple' },
]

function toggle() {
  open.value = !open.value
}

function go(to) {
  open.value = false
  router.push(to)
}
</script>

<template>
  <div v-if="enabled" class="widget" role="complementary" aria-label="Quick actions">
    <div class="panel" :data-open="open ? 'true' : 'false'">
      <button class="widget-btn" type="button" @click="toggle" :aria-expanded="open ? 'true' : 'false'">
        <span class="badge" aria-hidden="true">
          <AppIcon name="ph:lightning" :size="16" />
        </span>
        <span class="label">{{ siteConfig.floatingWidget.label }}</span>
        <span class="chev" aria-hidden="true">
          <AppIcon :name="open ? 'ph:caret-down' : 'ph:caret-left'" :size="16" />
        </span>
      </button>

      <div v-if="open" class="menu" role="menu" aria-label="Quick actions menu">
        <button
          v-for="a in actions"
          :key="a.to"
          class="menu-item"
          type="button"
          role="menuitem"
          @click="go(a.to)"
        >
          <span class="mi-ic" aria-hidden="true"><AppIcon :name="a.icon" :size="16" /></span>
          <span class="mi-label">{{ a.label }}</span>
        </button>
      </div>
    </div>
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

.panel {
  display: grid;
  gap: 10px;
  align-items: start;
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

.chev {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.label {
  font-size: 14px;
  font-weight: var(--font-weight-regular);
  white-space: nowrap;
}

.menu {
  margin-right: 0;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
  border-radius: 14px 0 0 14px;
  box-shadow: var(--shadow-widget);
  display: grid;
  gap: 8px;
}

.menu-item {
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(222, 239, 251, 0.25);
  cursor: pointer;
  font: inherit;
  color: var(--text-600);
  text-align: left;
}

.menu-item:hover {
  background: rgba(222, 239, 251, 0.45);
}

.menu-item:focus-visible {
  box-shadow: var(--focus-ring);
}

.mi-ic {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #fff;
  display: grid;
  place-items: center;
  color: var(--accent-blue);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.mi-label {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
}
</style>