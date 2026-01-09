<script setup>
import { RouterLink } from 'vue-router'
import AppIcon from './AppIcon.vue'

defineProps({
  title: { type: String, default: 'Ready to collaborate?' },
  body: { type: String, default: 'Reach out to discuss research collaboration, student opportunities, or partnerships.' },
  primaryLabel: { type: String, default: 'Contact' },
  primaryTo: { type: String, default: '/contact' },
  secondaryLabel: { type: String, default: 'Collaborate' },
  secondaryTo: { type: String, default: '/collaborate' },
})
</script>

<template>
  <div class="band">
    <div class="container band-inner">
      <div class="copy">
        <div class="title">{{ title }}</div>
        <div class="muted">{{ body }}</div>
      </div>

      <div class="actions">
        <RouterLink class="btn btn-primary btn-with-icon" :to="primaryTo">
          <AppIcon name="ph:envelope-simple" :size="18" />
          <span>{{ primaryLabel }}</span>
        </RouterLink>
        <RouterLink class="btn btn-with-icon" :to="secondaryTo">
          <AppIcon name="ph:handshake" :size="18" />
          <span>{{ secondaryLabel }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.band {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: rgba(222, 239, 251, 0.35);
}

.band-inner {
  padding-top: var(--space-6);
  padding-bottom: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  flex-wrap: wrap;
}

.title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>