<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import CtaBand from '../../components/ui/CtaBand.vue'
import AppIcon from '../../components/ui/AppIcon.vue'

const faqs = [
  {
    id: 'join-projects',
    q: 'How can students join INNOGEN Lab projects?',
    a: 'Students can start by contacting the lab via the Contact page. We will share current project openings, eligibility, and the onboarding steps (e.g., required skills, schedule, and supervision).',
  },
  {
    id: 'industry-projects',
    q: 'Do you accept industry-sponsored projects?',
    a: 'Yes. We can collaborate on scoped research, prototypes, and student projects. Use the Collaborate page to review engagement models, then reach out via Contact to discuss goals, timeline, and data constraints.',
  },
  {
    id: 'location',
    q: 'Where is INNOGEN Lab located?',
    a: 'INNOGEN Lab is based at BINUS @Bekasi (School of Information Systems). See the Contact page for the latest location details and directions.',
  },
]
</script>

<style scoped>
.faq {
  margin-top: var(--space-5);
}

.item {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
}

.trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: var(--space-4);
  background: transparent;
  border: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
}

.question {
  font-weight: var(--font-weight-semibold);
  color: var(--text-600);
}

.chev {
  flex: 0 0 auto;
  transition: transform 160ms ease;
}

.trigger[data-state='open'] .chev {
  transform: rotate(180deg);
}

.content {
  overflow: hidden;
}

.content[data-state='open'] {
  animation: reka-accordion-down 180ms ease-out;
}

.content[data-state='closed'] {
  animation: reka-accordion-up 160ms ease-in;
}

.answer {
  padding: 0 var(--space-4) var(--space-4);
  color: var(--text-650);
  font-size: 14px;
  margin: 0;
}
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">FAQ</h1>
        <p class="muted">Frequently asked questions about INNOGEN Lab.</p>

        <AccordionRoot class="faq" type="single" :collapsible="true" default-value="join-projects">
          <AccordionItem v-for="item in faqs" :key="item.id" class="item" :value="item.id">
            <AccordionHeader>
              <AccordionTrigger class="trigger">
                <span class="question">{{ item.q }}</span>
                <span class="chev" aria-hidden="true">
                  <AppIcon name="ph:caret-down" :size="18" />
                </span>
              </AccordionTrigger>
            </AccordionHeader>

            <AccordionContent class="content">
              <p class="answer">{{ item.a }}</p>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </section>

    <CtaBand
      title="Still have questions?"
      body="Send us a message and we’ll get back to you."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>