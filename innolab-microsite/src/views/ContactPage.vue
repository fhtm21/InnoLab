<script setup>
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import CtaBand from '../components/ui/CtaBand.vue'

const CONTACT_EMAIL = 'innolab@binus.ac.id'

const route = useRoute()

const INQUIRY_TYPES = [
  { value: 'general', label: 'General' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'permit', label: 'Permit inquiry' },
  { value: 'playground', label: 'Playground / demo' },
]

const form = reactive({
  inquiryType: 'general',
  name: '',
  email: '',
  message: '',
})

const touched = reactive({
  inquiryType: false,
  name: false,
  email: false,
  message: false,
})

const errors = reactive({
  inquiryType: '',
  name: '',
  email: '',
  message: '',
})

const submitErrorSummaryRef = ref(null)

function validateField(field) {
  const value = String(form[field] ?? '').trim()

  if (field === 'inquiryType') {
    const ok = INQUIRY_TYPES.some((t) => t.value === value)
    if (!ok) return 'Select an inquiry type.'
    return ''
  }

  if (field === 'name') {
    if (!value) return 'Name is required.'
    return ''
  }

  if (field === 'email') {
    if (!value) return 'Email is required.'
    // Simple, permissive email check (avoid over-rejecting valid emails)
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    if (!ok) return 'Enter a valid email address.'
    return ''
  }

  if (field === 'message') {
    if (!value) return 'Message is required.'
    return ''
  }

  return ''
}

function validateAll() {
  errors.inquiryType = validateField('inquiryType')
  errors.name = validateField('name')
  errors.email = validateField('email')
  errors.message = validateField('message')

  return !errors.inquiryType && !errors.name && !errors.email && !errors.message
}

const hasErrors = computed(() =>
  Boolean(errors.inquiryType || errors.name || errors.email || errors.message),
)

const errorSummaryItems = computed(() => {
  const items = []
  if (errors.inquiryType) items.push({ field: 'inquiryType', label: errors.inquiryType })
  if (errors.name) items.push({ field: 'name', label: errors.name })
  if (errors.email) items.push({ field: 'email', label: errors.email })
  if (errors.message) items.push({ field: 'message', label: errors.message })
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
  const el = document.getElementById(`contact-${field}`)
  if (el && typeof el.focus === 'function') el.focus()
}

async function onSubmit() {
  // mark all as touched so errors show
  touched.inquiryType = true
  touched.name = true
  touched.email = true
  touched.message = true

  const ok = validateAll()
  if (!ok) {
    await nextTick()
    submitErrorSummaryRef.value?.focus?.()
    return
  }

  const inquiryLabel =
    INQUIRY_TYPES.find((t) => t.value === form.inquiryType)?.label ?? form.inquiryType

  const subject = `INNOGEN Lab contact (${inquiryLabel}) — ${form.name}`
  const bodyLines = [
    `Inquiry type: ${inquiryLabel}`,
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    '',
    'Message:',
    form.message,
  ]
  const body = bodyLines.join('\n')

  const mailto = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  window.location.href = mailto
}
function normalizeInquiryType(value) {
  const v = String(value ?? '').trim().toLowerCase()
  if (!v) return null
  const ok = INQUIRY_TYPES.some((t) => t.value === v)
  return ok ? v : null
}

onMounted(() => {
  const preset = normalizeInquiryType(route.query.type)
  if (preset) form.inquiryType = preset
})
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="h1">Contact</h1>
        <p class="muted">
          Use this form to draft an email to the INNOGEN Lab team. Submitting will open your email
          client (mailto).
        </p>

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
                  :href="`#contact-${item.field}`"
                  @click.prevent="focusField(item.field)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <label class="field" for="contact-inquiryType">
            <span class="label">Inquiry type <span class="req" aria-hidden="true">*</span></span>
            <select
              id="contact-inquiryType"
              class="input"
              name="inquiryType"
              v-model="form.inquiryType"
              :aria-invalid="Boolean(errors.inquiryType)"
              :aria-describedby="errors.inquiryType ? 'contact-inquiryType-error' : undefined"
              @blur="onBlur('inquiryType')"
              @input="onInput('inquiryType')"
            >
              <option v-for="t in INQUIRY_TYPES" :key="t.value" :value="t.value">
                {{ t.label }}
              </option>
            </select>
            <p
              v-if="errors.inquiryType"
              id="contact-inquiryType-error"
              class="fieldError"
              role="alert"
            >
              {{ errors.inquiryType }}
            </p>
          </label>

          <label class="field" for="contact-name">
            <span class="label">Name <span class="req" aria-hidden="true">*</span></span>
            <input
              id="contact-name"
              class="input"
              type="text"
              name="name"
              v-model="form.name"
              autocomplete="name"
              :aria-invalid="Boolean(errors.name)"
              :aria-describedby="errors.name ? 'contact-name-error' : undefined"
              @blur="onBlur('name')"
              @input="onInput('name')"
            />
            <p v-if="errors.name" id="contact-name-error" class="fieldError" role="alert">
              {{ errors.name }}
            </p>
          </label>

          <label class="field" for="contact-email">
            <span class="label">Email <span class="req" aria-hidden="true">*</span></span>
            <input
              id="contact-email"
              class="input"
              type="email"
              name="email"
              v-model="form.email"
              autocomplete="email"
              inputmode="email"
              :aria-invalid="Boolean(errors.email)"
              :aria-describedby="errors.email ? 'contact-email-error' : undefined"
              @blur="onBlur('email')"
              @input="onInput('email')"
            />
            <p v-if="errors.email" id="contact-email-error" class="fieldError" role="alert">
              {{ errors.email }}
            </p>
          </label>

          <label class="field" for="contact-message">
            <span class="label">Message <span class="req" aria-hidden="true">*</span></span>
            <textarea
              id="contact-message"
              class="input"
              name="message"
              rows="5"
              v-model="form.message"
              :aria-invalid="Boolean(errors.message)"
              :aria-describedby="errors.message ? 'contact-message-error' : undefined"
              @blur="onBlur('message')"
              @input="onInput('message')"
            />
            <p v-if="errors.message" id="contact-message-error" class="fieldError" role="alert">
              {{ errors.message }}
            </p>
          </label>

          <button class="btn btn-primary" type="submit">Send email</button>
          <p class="muted small">
            Required fields are marked with <span class="req" aria-hidden="true">*</span>.
          </p>
        </form>

        <div class="section" style="padding-bottom: 0">
          <h2 class="h2">Contact details</h2>
          <p class="muted">
            Email:
            <a class="link" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          </p>
          <p class="muted">Location: BINUS University (details to be confirmed)</p>
          <p class="muted">
            Map:
            <span class="muted">Link to be added once the location details are confirmed.</span>
          </p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Prefer email?"
      body="Use the contact details above (mailto)."
      primaryLabel="Back to Home"
      primaryTo="/"
      secondaryLabel="Collaborate"
      secondaryTo="/collaborate"
    />
  </div>
</template>

<style scoped>
.form {
  margin-top: var(--space-5);
  display: grid;
  gap: var(--space-4);
  max-width: 560px;
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
</style>