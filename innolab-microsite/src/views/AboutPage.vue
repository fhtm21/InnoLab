<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'

const aboutLinks = [
  {
    title: 'Lab Profile',
    body: 'Overview and differentiators of INNOGEN Lab.',
    to: '/about/profile',
  },
  {
    title: 'Purpose',
    body: 'Teaching & learning, research & development, and collaboration & impact.',
    to: '/about/purpose',
  },
  {
    title: 'Technical Capabilities',
    body: 'Compute, tools, and environments that support AI and data science work.',
    to: '/about/capabilities',
  },
  {
    title: 'Leadership & Governance',
    body: 'Leadership roles and governance structure.',
    to: '/about/governance',
  },
  {
    title: 'History & Milestones',
    body: 'Timeline of key milestones.',
    to: '/about/milestones',
  },
  {
    title: 'Partners & Affiliations',
    body: 'Partner ecosystem and affiliations.',
    to: '/about/partners',
  },
  {
    title: 'FAQ',
    body: 'Common questions about access, usage, and collaboration.',
    to: '/about/faq',
  },
]
</script>

<template>
  <div class="section">
    <div class="container">
      <h1 class="h1">About INNOGEN Lab</h1>
      <p class="muted">
        INNOGEN Lab (Innovation Intelligent Knowledge Generation) is a new academic and research facility at BINUS @Bekasi,
        supported by the School of Information Systems. It supports AI, data science, smart systems, and Industry 4.0–related
        innovation through hands-on learning, research, and collaboration.
      </p>

      <SectionHeader title="Core purpose" />
      <div class="grid cols-3" style="margin-top: var(--space-4)">
        <BaseCard>
          <div class="card-title">Teaching & learning</div>
          <p class="card-meta">Practical lab sessions and hands-on student projects using AI tools and real-world datasets.</p>
        </BaseCard>
        <BaseCard>
          <div class="card-title">Research & development</div>
          <p class="card-meta">Research in data analytics, automation, and intelligent systems, supporting publications and prototypes.</p>
        </BaseCard>
        <BaseCard>
          <div class="card-title">Collaboration & impact</div>
          <p class="card-meta">Joint projects with partners and cross-program collaboration to build real-world AI solutions.</p>
        </BaseCard>
      </div>

      <div style="margin-top: var(--space-7)">
        <SectionHeader
          title="UN SDG alignment"
          intro="INNOGEN Lab aligns with selected United Nations Sustainable Development Goals (UN SDGs)."
        />
        <div class="grid cols-2" style="margin-top: var(--space-4)">
          <BaseCard>
            <div class="card-title">SDG 4 — Quality Education</div>
            <p class="card-meta">
              Hands-on learning and research in AI and data science to enhance education quality at BINUS @Bekasi.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 8 — Decent Work & Economic Growth</div>
            <p class="card-meta">
              Industry-relevant skills development to prepare students for the workforce and support economic growth.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 9 — Industry, Innovation & Infrastructure</div>
            <p class="card-meta">
              Prototyping and intelligent systems development to support innovation and practical infrastructure advancement.
            </p>
          </BaseCard>

          <BaseCard>
            <div class="card-title">SDG 17 — Partnerships for the Goals</div>
            <p class="card-meta">
              Collaboration with BINUS units, industry partners, and institutions to enable joint projects and knowledge exchange.
            </p>
          </BaseCard>
        </div>
      </div>

      <div style="margin-top: var(--space-7)">
        <SectionHeader title="Explore About" intro="Jump to the detailed pages for INNOGEN Lab." />
        <div class="grid cols-3" style="margin-top: var(--space-4)">
          <BaseCard v-for="item in aboutLinks" :key="item.to">
            <div class="card-title">{{ item.title }}</div>
            <p class="card-meta">{{ item.body }}</p>
            <div style="margin-top: var(--space-3)">
              <RouterLink class="btn btn-sm" :to="item.to">Open</RouterLink>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>

    <CtaBand
      title="Collaborate with INNOGEN Lab"
      body="Contact us to discuss student projects, research initiatives, or partnership opportunities."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>