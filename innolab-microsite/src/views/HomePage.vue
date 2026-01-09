<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import KpiCard from '../components/ui/KpiCard.vue'
import BarList from '../components/ui/BarList.vue'
import DonutChart from '../components/ui/DonutChart.vue'
import { getThemes, getPeople, getArticles, getMetrics } from '../content/index.js'

const themes = getThemes()
const people = getPeople()
const articles = getArticles()
const metrics = getMetrics()

const facilityTotal = metrics.facilityUsers.items.reduce((acc, i) => acc + Number(i.value || 0), 0)
const publicationsTotal = metrics.publications.items.reduce((acc, i) => acc + Number(i.value || 0), 0)
const partnershipsTotal = metrics.partnerships.items.reduce((acc, i) => acc + Number(i.value || 0), 0)
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-inner">
        <h1 class="h1">INNOGEN Lab — AI and Data Innovation Facility</h1>
        <p class="muted hero-sub">
          A multi-purpose academic and research space supporting AI, data science, smart systems, and Industry 4.0 innovation.
        </p>

        <div class="hero-actions">
          <RouterLink class="btn btn-primary" to="/facilities">Explore Facilities</RouterLink>
          <RouterLink class="btn" to="/collaborate">Collaborate</RouterLink>
          <RouterLink class="btn" to="/permit">Permit inquiry</RouterLink>
          <RouterLink class="btn" to="/playground">Playground</RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="Highlights" intro="Quick entry points to understand what INNOGEN Lab is and how to engage." />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Core purpose</div>
            <p class="card-meta">Teaching & learning, research & development, and collaboration & impact.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/about">Learn more</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Activities</div>
            <p class="card-meta">Student projects, research initiatives, and partnerships.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/activities">Browse activities</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Facilities</div>
            <p class="card-meta">GPU-capable workstations, AI tools, and collaboration space.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities">View facilities</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="Core purpose" intro="INNOGEN Lab was created to support learning, research, and collaboration." />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Teaching & learning</div>
            <ul class="list">
              <li>Practical lab sessions for AI-related subjects</li>
              <li>Hands-on student projects using AI tools and real-world datasets</li>
              <li>Support for innovative coursework</li>
            </ul>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Research & development</div>
            <ul class="list">
              <li>Research in data analytics, automation, and intelligent systems</li>
              <li>Support for publications and AI prototypes</li>
              <li>Cross-campus collaboration and integration with AI initiatives</li>
            </ul>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Collaboration & impact</div>
            <ul class="list">
              <li>Joint projects with industry partners and institutions</li>
              <li>Cross-program collaboration to build real-world AI solutions</li>
              <li>Support for an AI-driven learning ecosystem</li>
            </ul>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="INNOGEN Lab at a glance" intro="Key metrics (data pending confirmation)." />
        <p class="muted" style="margin-top: calc(var(--space-4) * -1)">
          Note: {{ metrics.note }}
        </p>

        <div class="glance-grid" style="margin-top: var(--space-4)">
          <div class="glance-kpis">
            <KpiCard
              title="Total facility users"
              :value="facilityTotal"
              note="Sum of students, lecturers/professors, and professionals."
              :isPlaceholder="true"
            />
            <KpiCard
              title="Total publications"
              :value="publicationsTotal"
              note="Sum of journal articles, conference papers, patents, and whitepapers."
              :isPlaceholder="true"
            />
            <KpiCard
              title="Total partnerships"
              :value="partnershipsTotal"
              note="Current total partnerships."
              :isPlaceholder="true"
            />
          </div>

          <BaseCard>
            <DonutChart :title="metrics.facilityUsers.title" :items="metrics.facilityUsers.items" />
          </BaseCard>

          <BaseCard>
            <BarList :title="metrics.publications.title" :items="metrics.publications.items" />
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader
          title="Facilities snapshot"
          intro="A quick look at the lab’s compute, tools, and collaboration space."
          viewMoreLabel="View all facilities"
          viewMoreTo="/facilities"
        />
        <div class="grid cols-3">
          <BaseCard>
            <div class="card-title">Compute</div>
            <p class="card-meta">GPU-capable workstations for deep learning training and experimentation.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/compute">Explore compute</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Tools & Software</div>
            <p class="card-meta">Python, TensorFlow, PyTorch, Keras, and supporting tools for AI development.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/tools">Explore tools</RouterLink>
            </div>
          </BaseCard>
          <BaseCard>
            <div class="card-title">Collaboration space</div>
            <p class="card-meta">Space for mentoring, supervision, and team sessions.</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" to="/facilities/space">Explore space</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader
          title="UN SDG alignment"
          intro="How INNOGEN Lab supports selected United Nations Sustainable Development Goals (UN SDGs)."
        />
        <div class="grid cols-2">
          <BaseCard>
            <div class="card-title">SDG 4 — Quality Education</div>
            <p class="card-meta">
              Hands-on learning and research in AI and data science to strengthen education outcomes at BINUS @Bekasi.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 8 — Decent Work & Economic Growth</div>
            <p class="card-meta">
              Industry-relevant skills development through projects and applied learning to support workforce readiness.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 9 — Industry, Innovation & Infrastructure</div>
            <p class="card-meta">
              Prototyping and experimentation in intelligent systems to support innovation and practical infrastructure development.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 17 — Partnerships for the Goals</div>
            <p class="card-meta">
              Collaboration with internal and external partners to enable joint projects and knowledge exchange.
            </p>
          </BaseCard>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <SectionHeader title="Latest articles" viewMoreLabel="View all articles" viewMoreTo="/articles" />
        <div class="grid cols-3">
          <BaseCard v-for="a in articles" :key="a.slug">
            <div class="card-title">{{ a.title }}</div>
            <p class="card-meta">{{ a.date }} · {{ a.category }}</p>
            <p class="card-meta" style="margin-top: var(--space-2)">{{ a.summary }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/articles/${a.slug}`">Read</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader title="People spotlight" intro="Lecturers and researchers supporting learning, research, and collaboration." />
        <div class="grid cols-3">
          <BaseCard v-for="p in people" :key="p.slug">
            <div class="card-title">{{ p.name }}</div>
            <p class="card-meta">{{ p.title }} · {{ p.affiliation }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="`/people/${p.slug}`">View profile</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <CtaBand
          title="Contact & location"
          body="BINUS @Bekasi — School of Information Systems. Reach out to discuss student projects, research, or partnerships."
          primaryLabel="Contact"
          primaryTo="/contact"
          secondaryLabel="Collaborate"
          secondaryTo="/collaborate"
        />

        <div class="location-embed" aria-label="INNOGEN Lab location map">
          <iframe
            class="location-embed-frame"
            title="INNOGEN Lab location (Google Maps)"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.333629713668!2d106.9998184!3d-6.2196615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c04f71df9d9%3A0xfa27825c263c0125!2sBINUS%20%40Bekasi!5e0!3m2!1sen!2sid!4v1767951896757!5m2!1sen!2sid"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: var(--space-7) 0;
  background: linear-gradient(180deg, rgba(222, 239, 251, 0.55), rgba(255, 255, 255, 0));
  border-bottom: 1px solid var(--border);
}

.hero-inner {
  display: grid;
  gap: var(--space-4);
}

.hero-sub {
  margin: 0;
  max-width: 80ch;
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.list {
  margin: var(--space-3) 0 0;
  padding-left: 1.1rem;
  color: var(--text);
}

.glance-grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: 1.1fr 1fr 1fr;
  align-items: start;
}

.glance-kpis {
  display: grid;
  gap: var(--space-4);
}

@media (max-width: 900px) {
  .glance-grid {
    grid-template-columns: 1fr;
  }
}

.location-embed {
  margin-top: var(--space-5);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
}

.location-embed-frame {
  display: block;
  width: 100%;
  height: 360px;
  border: 0;
}

@media (max-width: 640px) {
  .location-embed-frame {
    height: 300px;
  }
}
</style>