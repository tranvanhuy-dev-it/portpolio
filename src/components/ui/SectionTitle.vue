<template>
  <div class="text-center mb-16">
    <p class="text-sm font-mono font-medium tracking-widest uppercase mb-3" style="color: #06b6d4;">
      {{ subtitle }}
    </p>
    <h2 class="text-4xl md:text-5xl font-bold mb-4">
      <span class="gradient-text">{{ title }}</span>
    </h2>
    <div class="neon-line w-24 mx-auto mt-4"></div>
    <p v-if="description" class="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>
