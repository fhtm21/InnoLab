<script setup>
import { RouterView } from 'vue-router'
import { useSeo } from './seo.js'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import FloatingConsultationWidget from './components/layout/FloatingConsultationWidget.vue'

useSeo()
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <main class="app-main">
      <RouterView />
    </main>

    <AppFooter />
    <FloatingConsultationWidget />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
}
</style>
