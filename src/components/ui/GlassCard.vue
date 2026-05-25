<template>
  <div
    class="glass-card p-6 transition-all duration-300"
    :class="[hoverEffect ? 'glass-card-hover' : '', paddingClass]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverEffect: { type: Boolean, default: true },
  paddingClass: { type: String, default: '' },
})
</script>
