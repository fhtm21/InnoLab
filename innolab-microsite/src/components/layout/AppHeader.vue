<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'
import { siteConfig } from '../../config/site'
import AppIcon from '../ui/AppIcon.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Activities', to: '/activities' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'People', to: '/people' },
  { label: 'Articles', to: '/articles' },
  { label: 'Collaborate', to: '/collaborate' },
]

const isActive = computed(() => {
  const p = route.path
  return (to) => p === to || p.startsWith(`${to}/`)
})

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <!-- Utility row -->
    <div class="utility">
      <div class="container utility-inner">
        <nav class="utility-links" aria-label="Utility navigation">
          <RouterLink
            v-for="item in siteConfig.header.utilityLinks"
            :key="item.label"
            class="utility-link"
            :to="item.to"
            >{{ item.label }}</RouterLink
          >
        </nav>

        <div class="utility-right"></div>
      </div>
    </div>

    <!-- Main row -->
    <div class="mainbar">
      <div class="container mainbar-inner">
        <div class="brand">
          <RouterLink class="brand-link" to="/" @click="closeMenu">
            <img class="brand-logo" src="../../assets/LOGO.png" alt="INNOGEN Lab logo" />
            <div class="brand-text">
              <div class="brand-title">INNOGEN Lab</div>
              <div class="brand-subtitle">School of Information Systems · BINUS @Bekasi</div>
            </div>
          </RouterLink>
        </div>

        <!-- Desktop nav -->
        <nav class="nav nav-desktop" aria-label="Primary navigation">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            class="nav-link"
            :class="{ active: isActive(item.to) }"
            :to="item.to"
          >
            {{ item.label }}
          </RouterLink>
          <RouterLink class="btn btn-primary cta" :to="siteConfig.header.primaryCta.to">
            {{ siteConfig.header.primaryCta.label }}
          </RouterLink>
        </nav>

        <!-- Mobile nav (Reka UI Dialog as Drawer) -->
        <DialogRoot v-model:open="isMenuOpen">
          <DialogTrigger as-child>
            <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen ? 'true' : 'false'">
              <AppIcon name="ph:list" :size="18" />
              <span>Menu</span>
            </button>
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay class="drawer-overlay" />

            <DialogContent class="drawer-content" @escape-key-down="closeMenu" @pointer-down-outside="closeMenu">
              <DialogDescription class="sr-only">Primary navigation links</DialogDescription>
              <div class="drawer-header">
                <DialogTitle class="drawer-title">Menu</DialogTitle>
                <DialogClose as-child>
                  <button class="icon-btn" type="button" aria-label="Close menu">
                    <AppIcon name="ph:x" :size="18" />
                  </button>
                </DialogClose>
              </div>

              <nav class="drawer-nav" aria-label="Primary navigation (mobile)">
                <RouterLink
                  v-for="item in navItems"
                  :key="item.to"
                  class="drawer-link"
                  :class="{ active: isActive(item.to) }"
                  :to="item.to"
                  @click="closeMenu"
                >
                  {{ item.label }}
                </RouterLink>

                <RouterLink class="btn btn-primary drawer-cta" :to="siteConfig.header.primaryCta.to" @click="closeMenu">
                  {{ siteConfig.header.primaryCta.label }}
                </RouterLink>
              </nav>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>

        <div v-if="siteConfig.header.showSearch" class="search">
          <button class="icon-btn" type="button" aria-label="Open search">
            <AppIcon name="ph:magnifying-glass" :size="18" />
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.utility {
  border-bottom: 1px solid var(--border);
  background: #fff;
}

.utility-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
}

.utility-links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.utility-link {
  font-size: 12px;
  line-height: 12px;
  font-weight: var(--font-weight-light);
  color: var(--text-600);
}

.utility-link:hover {
  text-decoration: underline;
}

.mainbar-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  display: block;
}

.brand-title {
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 12px;
  color: var(--text-650);
}

.menu-toggle {
  margin-left: auto;
  display: none;
  border: 1px solid var(--border);
  background: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  align-items: center;
  gap: 8px;
}

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-desktop {
  display: flex;
}

/* Drawer (mobile nav) */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 50;
}

.drawer-content {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(360px, 92vw);
  background: #fff;
  border-left: 1px solid var(--border);
  z-index: 60;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.drawer-title {
  margin: 0;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.drawer-link {
  padding: 10px 10px;
  border-radius: 10px;
  color: var(--text-600);
  text-decoration: none;
}

.drawer-link:hover {
  background: rgba(0, 0, 0, 0.03);
  text-decoration: none;
}

.drawer-link.active {
  color: var(--accent-blue);
  font-weight: var(--font-weight-semibold);
}

.drawer-cta {
  margin-top: 6px;
  width: fit-content;
}

/* Animations (respect reduced motion via global CSS) */
.drawer-overlay[data-state='open'] {
  animation: reka-fade-in 160ms ease-out;
}
.drawer-overlay[data-state='closed'] {
  animation: reka-fade-out 140ms ease-in;
}

.drawer-content[data-state='open'] {
  animation: reka-fade-in 160ms ease-out, reka-slide-up 160ms ease-out;
}
.drawer-content[data-state='closed'] {
  animation: reka-fade-out 140ms ease-in, reka-slide-down 140ms ease-in;
}

.nav-link {
  font-size: 14px;
  color: var(--text-600);
  text-decoration: none;
}

.nav-link.active {
  color: var(--accent-blue);
  font-weight: var(--font-weight-semibold);
}

.cta {
  text-decoration: none;
}

.search {
  margin-left: 8px;
}

.icon-btn {
  border: 1px solid var(--border);
  background: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  font: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-desktop {
    display: none;
  }
}
</style>