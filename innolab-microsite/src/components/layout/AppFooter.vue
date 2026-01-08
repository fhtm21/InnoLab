<script setup>
import { siteConfig } from '../../config/site'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="cols">
        <div class="col">
          <div class="title">INNOGEN Lab</div>
          <p class="muted">
            Innovation Intelligent Knowledge Generation — an academic and research facility at BINUS @Bekasi (School of Information Systems).
          </p>
        </div>

        <div class="col">
          <div class="title">Quick links</div>
          <nav class="links" aria-label="Footer quick links">
            <RouterLink
              v-for="item in siteConfig.footer.quickLinks"
              :key="item.to"
              class="link"
              :to="item.to"
              >{{ item.label }}</RouterLink
            >
          </nav>
        </div>

        <div class="col">
          <div class="title">Policies</div>
          <nav class="links" aria-label="Footer policies">
            <a
              v-for="item in siteConfig.footer.policies"
              :key="item.label"
              class="link"
              :href="item.to"
              >{{ item.label }}</a
            >
          </nav>
        </div>

        <div class="col">
          <div class="title">Social</div>
          <nav class="links" aria-label="Footer social links">
            <a
              v-for="item in siteConfig.footer.social"
              :key="item.label"
              class="link"
              :href="item.href"
              target="_blank"
              rel="noreferrer"
              >{{ item.label }}</a
            >
          </nav>
        </div>
      </div>

      <div class="bottom">
        <div class="muted">
          {{ siteConfig.footer.address.line1 }} — {{ siteConfig.footer.address.line2 }}
          · <a class="link-inline" :href="siteConfig.footer.address.mapHref">Map</a>
        </div>
        <div class="muted">© {{ new Date().getFullYear() }} INNOGEN Lab</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: #fff;
}

.footer-inner {
  padding-top: var(--space-7);
  padding-bottom: var(--space-6);
}

.cols {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-6);
}

.title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-3);
}

.links {
  display: grid;
  gap: 10px;
}

.link {
  font-size: 14px;
  color: var(--text-650);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.link-inline {
  color: var(--accent-blue);
}

.bottom {
  margin-top: var(--space-6);
  padding-top: var(--space-5);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .cols {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>