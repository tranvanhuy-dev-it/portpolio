<template>
  <span class="tech-badge cursor-default">
    <span v-if="icon" class="text-base leading-none">{{ icon }}</span>
    {{ name }}
  </span>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, default: '' },
})
</script>
