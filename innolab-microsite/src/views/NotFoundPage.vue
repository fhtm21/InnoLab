<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="section">
    <div class="container">
      <h1 class="h1">Page not found</h1>
      <p class="muted">The page you requested does not exist.</p>
      <RouterLink class="btn btn-primary" to="/">Go to Home</RouterLink>
    </div>
  </div>
</template>