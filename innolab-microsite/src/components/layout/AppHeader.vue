<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { siteConfig } from '../../config/site'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'People', to: '/people' },
  { label: 'Articles', to: '/articles' },
  { label: 'Collaborate', to: '/collaborate' },
]

const activePath = computed(() => route.path)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

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

        <div class="utility-right">
          <RouterLink class="utility-link" to="/contact">Contact Us</RouterLink>
        </div>
      </div>
    </div>

    <!-- Main row -->
    <div class="mainbar">
      <div class="container mainbar-inner">
        <div class="brand">
          <RouterLink class="brand-link" to="/" @click="closeMenu">
            <div class="brand-mark" aria-hidden="true">IN</div>
            <div class="brand-text">
              <div class="brand-title">InnoLab</div>
              <div class="brand-subtitle">BINUS University</div>
            </div>
          </RouterLink>
        </div>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-controls="primary-nav"
          @click="toggleMenu"
        >
          Menu
        </button>

        <nav
          id="primary-nav"
          class="nav"
          :class="{ open: isMenuOpen }"
          aria-label="Primary navigation"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            class="nav-link"
            :class="{ active: activePath === item.to }"
            :to="item.to"
            @click="closeMenu"
            >{{ item.label }}</RouterLink
          >
          <RouterLink class="btn btn-primary cta" :to="siteConfig.header.primaryCta.to" @click="closeMenu">
            {{ siteConfig.header.primaryCta.label }}
          </RouterLink>
        </nav>

        <div v-if="siteConfig.header.showSearch" class="search">
          <button class="icon-btn" type="button" aria-label="Open search">
            Search
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

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-blue);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: var(--font-weight-semibold);
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
}

.nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
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
}

@media (max-width: 900px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: #fff;
    border-bottom: 1px solid var(--border);
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 12px var(--gutter);
    gap: 10px;
  }

  .nav.open {
    display: flex;
  }

  .nav-link {
    padding: 10px 8px;
    border-radius: 10px;
  }

  .nav-link:hover {
    background: rgba(0, 0, 0, 0.03);
    text-decoration: none;
  }

  .cta {
    width: fit-content;
  }
}
</style>