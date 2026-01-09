<script setup>
import { computed, nextTick, reactive, ref } from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'
import CtaBand from '../components/ui/CtaBand.vue'

const CONTACT_EMAIL = 'innolab@binus.ac.id'

const form = reactive({
  name: '',
  affiliation: 'student',
  email: '',
  resourceType: 'compute',
  purpose: 'research',
  projectTitle: '',
  projectDescription: '',
  timeframe: '',
  supervisor: '',
  dataSensitivity: 'no-sensitive-data',
})

const touched = reactive({
  name: false,
  email: false,
  projectTitle: false,
  projectDescription: false,
})

const errors = reactive({
  name: '',
  email: '',
  projectTitle: '',
  projectDescription: '',
})

const submitErrorSummaryRef = ref(null)

function validateField(field) {
  const value = String(form[field] ?? '').trim()

  if (field === 'name') {
    if (!value) return 'Name is required.'
    return ''
  }

  if (field === 'email') {
    if (!value) return 'Email is required.'
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    if (!ok) return 'Enter a valid email address.'
    return ''
  }

  if (field === 'projectTitle') {
    if (!value) return 'Project title is required.'
    return ''
  }

  if (field === 'projectDescription') {
    if (!value) return 'Project description is required.'
    return ''
  }

  return ''
}

function validateAll() {
  errors.name = validateField('name')
  errors.email = validateField('email')
  errors.projectTitle = validateField('projectTitle')
  errors.projectDescription = validateField('projectDescription')

  return !errors.name && !errors.email && !errors.projectTitle && !errors.projectDescription
}

const hasErrors = computed(() =>
  Boolean(errors.name || errors.email || errors.projectTitle || errors.projectDescription),
)

const errorSummaryItems = computed(() => {
  const items = []
  if (errors.name) items.push({ field: 'name', label: errors.name })
  if (errors.email) items.push({ field: 'email', label: errors.email })
  if (errors.projectTitle) items.push({ field: 'projectTitle', label: errors.projectTitle })
  if (errors.projectDescription)
    items.push({ field: 'projectDescription', label: errors.projectDescription })
  return items
})

function onBlur(field) {
  touched[field] = true
  errors[field] = validateField(field)
}

function onInput(field) {
  if (!touched[field]) return
  errors[field] = validateField(field)
}

function focusField(field) {
  const el = document.getElementById(`permit-${field}`)
  if (el && typeof el.focus === 'function') el.focus()
}

async function onSubmit() {
  touched.name = true
  touched.email = true
  touched.projectTitle = true
  touched.projectDescription = true

  const ok = validateAll()
  if (!ok) {
    await nextTick()
    submitErrorSummaryRef.value?.focus?.()
    return
  }

  const subject = `INNOGEN Lab permit inquiry — ${form.projectTitle}`
  const bodyLines = [
    'Permit inquiry (static form → email draft)',
    '',
    `Requester name: ${form.name}`,
    `Affiliation: ${form.affiliation}`,
    `Email: ${form.email}`,
    '',
    `Resource type: ${form.resourceType}`,
    `Purpose: ${form.purpose}`,
    '',
    `Project title: ${form.projectTitle}`,
    'Project description:',
    form.projectDescription,
    '',
    `Requested timeframe: ${form.timeframe || '(not specified)'}`,
    `Supervisor/PI: ${form.supervisor || '(not specified)'}`,
    `Data sensitivity: ${form.dataSensitivity}`,
    '',
    'Notes:',
    '- This is an inquiry. Approval is subject to availability and policy.',
  ]
  const body = bodyLines.join('\n')

  const mailto = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  window.location.href = mailto
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Resource usage permit inquiry</h1>
        <p class="muted">
          Use this page to draft a permit inquiry for using INNOGEN Lab resources (compute, tools, or
          space). Submitting will open your email client (mailto).
        </p>

        <div class="grid cols-2" style="margin-top: var(--space-5); align-items: start">
          <BaseCard>
            <div class="card-title">What this is</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>A structured inquiry to help the lab team understand your request.</li>
              <li>Project-based and subject to availability and policy.</li>
              <li>For general questions, use the Contact page.</li>
            </ul>
          </BaseCard>

          <BaseCard>
            <div class="card-title">What to prepare</div>
            <ul class="list" style="margin-top: var(--space-3)">
              <li>Project title and a short description.</li>
              <li>Which resource you need and for how long.</li>
              <li>Supervisor/PI contact (if you are a student).</li>
              <li>Whether your data includes sensitive information.</li>
            </ul>
          </BaseCard>
        </div>

        <form class="form" novalidate @submit.prevent="onSubmit">
          <div
            v-if="hasErrors"
            ref="submitErrorSummaryRef"
            class="errorSummary"
            role="alert"
            aria-live="assertive"
            tabindex="-1"
          >
            <p class="errorSummaryTitle">Please fix the following:</p>
            <ul class="errorSummaryList">
              <li v-for="item in errorSummaryItems" :key="item.field">
                <a
                  class="errorSummaryLink"
                  :href="`#permit-${item.field}`"
                  @click.prevent="focusField(item.field)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <div class="grid cols-2" style="gap: var(--space-4)">
            <label class="field" for="permit-name">
              <span class="label">Requester name <span class="req" aria-hidden="true">*</span></span>
              <input
                id="permit-name"
                class="input"
                type="text"
                name="name"
                v-model="form.name"
                autocomplete="name"
                :aria-invalid="Boolean(errors.name)"
                :aria-describedby="errors.name ? 'permit-name-error' : undefined"
                @blur="onBlur('name')"
                @input="onInput('name')"
              />
              <p v-if="errors.name" id="permit-name-error" class="fieldError" role="alert">
                {{ errors.name }}
              </p>
            </label>

            <label class="field" for="permit-affiliation">
              <span class="label">Affiliation</span>
              <select id="permit-affiliation" class="input" v-model="form.affiliation">
                <option value="student">Student</option>
                <option value="lecturer">Lecturer / Professor</option>
                <option value="staff">BINUS staff</option>
                <option value="external">External partner</option>
              </select>
            </label>

            <label class="field" for="permit-email">
              <span class="label">Email <span class="req" aria-hidden="true">*</span></span>
              <input
                id="permit-email"
                class="input"
                type="email"
                name="email"
                v-model="form.email"
                autocomplete="email"
                inputmode="email"
                :aria-invalid="Boolean(errors.email)"
                :aria-describedby="errors.email ? 'permit-email-error' : undefined"
                @blur="onBlur('email')"
                @input="onInput('email')"
              />
              <p v-if="errors.email" id="permit-email-error" class="fieldError" role="alert">
                {{ errors.email }}
              </p>
            </label>

            <label class="field" for="permit-resourceType">
              <span class="label">Resource type</span>
              <select id="permit-resourceType" class="input" v-model="form.resourceType">
                <option value="compute">Compute</option>
                <option value="tools">Tools & Software</option>
                <option value="space">Collaboration Space</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label class="field" for="permit-purpose">
              <span class="label">Purpose</span>
              <select id="permit-purpose" class="input" v-model="form.purpose">
                <option value="teaching">Teaching</option>
                <option value="research">Research</option>
                <option value="student-project">Student project</option>
                <option value="partnership">Partnership</option>
              </select>
            </label>

            <label class="field" for="permit-timeframe">
              <span class="label">Requested timeframe</span>
              <input
                id="permit-timeframe"
                class="input"
                type="text"
                v-model="form.timeframe"
                placeholder="e.g., Feb–Mar 2026, 2 weeks, weekends only"
              />
            </label>
          </div>

          <label class="field" for="permit-projectTitle">
            <span class="label">Project title <span class="req" aria-hidden="true">*</span></span>
            <input
              id="permit-projectTitle"
              class="input"
              type="text"
              v-model="form.projectTitle"
              :aria-invalid="Boolean(errors.projectTitle)"
              :aria-describedby="errors.projectTitle ? 'permit-projectTitle-error' : undefined"
              @blur="onBlur('projectTitle')"
              @input="onInput('projectTitle')"
            />
            <p
              v-if="errors.projectTitle"
              id="permit-projectTitle-error"
              class="fieldError"
              role="alert"
            >
              {{ errors.projectTitle }}
            </p>
          </label>

          <label class="field" for="permit-projectDescription">
            <span class="label">Project description <span class="req" aria-hidden="true">*</span></span>
            <textarea
              id="permit-projectDescription"
              class="input"
              rows="5"
              v-model="form.projectDescription"
              :aria-invalid="Boolean(errors.projectDescription)"
              :aria-describedby="errors.projectDescription ? 'permit-projectDescription-error' : undefined"
              @blur="onBlur('projectDescription')"
              @input="onInput('projectDescription')"
            />
            <p
              v-if="errors.projectDescription"
              id="permit-projectDescription-error"
              class="fieldError"
              role="alert"
            >
              {{ errors.projectDescription }}
            </p>
          </label>

          <label class="field" for="permit-supervisor">
            <span class="label">Supervisor / PI (if applicable)</span>
            <input
              id="permit-supervisor"
              class="input"
              type="text"
              v-model="form.supervisor"
              placeholder="Name + email (if student)"
            />
          </label>

          <fieldset class="fieldset">
            <legend class="label">Data sensitivity</legend>
            <label class="radio">
              <input type="radio" name="dataSensitivity" value="no-sensitive-data" v-model="form.dataSensitivity" />
              <span>No sensitive data</span>
            </label>
            <label class="radio">
              <input type="radio" name="dataSensitivity" value="contains-sensitive-data" v-model="form.dataSensitivity" />
              <span>Contains sensitive data (will require additional review)</span>
            </label>
          </fieldset>

          <button class="btn btn-primary" type="submit">Draft email inquiry</button>
          <p class="muted small">
            Required fields are marked with <span class="req" aria-hidden="true">*</span>.
          </p>
        </form>
      </div>
    </section>

    <CtaBand
      title="General inquiry?"
      body="For non-permit questions, use the Contact page."
      primaryLabel="Contact"
      primaryTo="/contact"
      secondaryLabel="Back to Facilities"
      secondaryTo="/facilities"
    />
  </div>
</template>

<style scoped>
.form {
  margin-top: var(--space-6);
  display: grid;
  gap: var(--space-4);
  max-width: 860px;
}

.field {
  display: grid;
  gap: 8px;
}

.label {
  font-size: 14px;
  color: var(--text-650);
}

.req {
  color: #b42318;
  font-weight: 700;
}

.input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 12px;
  font: inherit;
  color: var(--text-600);
  background: #fff;
}

.input[aria-invalid='true'] {
  border-color: #f04438;
  box-shadow: 0 0 0 3px rgba(240, 68, 56, 0.15);
}

.input:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.fieldError {
  margin: 0;
  font-size: 14px;
  color: #b42318;
}

.errorSummary {
  border: 1px solid #f04438;
  background: rgba(240, 68, 56, 0.06);
  border-radius: 12px;
  padding: 12px 14px;
}

.errorSummaryTitle {
  margin: 0 0 6px;
  font-weight: 600;
  color: #7a271a;
}

.errorSummaryList {
  margin: 0;
  padding-left: 18px;
}

.errorSummaryLink {
  color: inherit;
  text-decoration: underline;
}

.small {
  font-size: 14px;
}

.fieldset {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
}

.radio {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 8px;
}
</style>