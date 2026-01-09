<script setup>
import { computed, ref } from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import { getPrototypes } from '../content/index.js'

const prototypes = getPrototypes()

const selected = ref(null)

const selectedPrototype = computed(() => {
  if (!selected.value) return null
  return prototypes.find((p) => p.slug === selected.value) || null
})

function openEmbed(p) {
  selected.value = p.slug
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Playground</h1>
        <p class="muted">
          Try selected prototypes and demos. Availability depends on the current hosting status of each demo.
        </p>

        <BaseCard style="margin-top: var(--space-5)">
          <div class="card-title">Safety & privacy</div>
          <ul class="list" style="margin-top: var(--space-3)">
            <li>Do not submit sensitive or personal data into demos.</li>
            <li>Demo behavior may change; results are for exploration and learning.</li>
            <li>
              If a demo is embedded, it is hosted externally and may have its own terms and logging behavior.
            </li>
          </ul>
        </BaseCard>

        <SectionHeader
          title="Prototypes"
          intro="Static content-driven list. Links and embeds may change as demos are updated."
        />
        <div class="grid cols-3" style="margin-top: var(--space-4)">
          <BaseCard v-for="p in prototypes" :key="p.slug">
            <div class="card-title">{{ p.title }}</div>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ p.description }}</p>

            <p class="card-meta" style="margin-top: var(--space-3)">
              Status: <strong>{{ p.status }}</strong>
            </p>

            <div class="chips" style="margin-top: var(--space-3)">
              <span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span>
            </div>

            <div style="margin-top: var(--space-4); display: flex; gap: var(--space-2); flex-wrap: wrap">
              <button
                v-if="p.try && p.try.type === 'embed'"
                class="btn btn-sm"
                type="button"
                @click="openEmbed(p)"
              >
                Try demo (embed)
              </button>

              <a
                v-else-if="p.try && p.try.type === 'external'"
                class="btn btn-sm"
                :href="p.try.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try demo (new tab)
              </a>

              <span v-else class="muted">Not available yet</span>

              <RouterLink
                v-if="p.about && p.about.type === 'internal'"
                class="btn btn-sm"
                :to="p.about.to"
              >
                About
              </RouterLink>
            </div>
          </BaseCard>
        </div>

        <div v-if="selectedPrototype && selectedPrototype.try && selectedPrototype.try.type === 'embed'" style="margin-top: var(--space-6)">
          <SectionHeader :title="`Embedded demo: ${selectedPrototype.title}`" />
          <BaseCard>
            <p class="card-meta">
              Embedded content is hosted externally. If it fails to load, use the external link (if provided) or try again later.
            </p>

            <div class="embedWrap" style="margin-top: var(--space-4)">
              <iframe
                class="embedFrame"
                :title="selectedPrototype.title"
                :src="selectedPrototype.try.embedUrl"
                :style="{ height: `${selectedPrototype.try.height || 520}px` }"
                loading="lazy"
                referrerpolicy="no-referrer"
              />
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to collaborate on a prototype?"
      body="Reach out to discuss demos, student projects, or applied research pilots."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Activities"
      secondaryTo="/activities"
    />
  </div>
</template>

<style scoped>
.list {
  margin: var(--space-3) 0 0;
  padding-left: 1.1rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(222, 239, 251, 0.25);
  font-size: 12px;
  color: var(--text-650);
}

.embedWrap {
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
}

.embedFrame {
  width: 100%;
  border: 0;
  display: block;
}
</style>