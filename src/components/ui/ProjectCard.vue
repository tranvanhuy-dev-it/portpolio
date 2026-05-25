<template>
  <div class="glass-card project-card overflow-hidden group" :class="featured ? 'border border-purple-500/20' : ''">
    <!-- Image / Placeholder -->
    <div class="project-img-wrapper h-48 relative overflow-hidden cursor-pointer group/img" @click="project.image ? $emit('zoom-image', project.image) : $emit('show-details', project)">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-6xl"
        :style="gradientBg"
      >
        {{ categoryEmoji }}
      </div>

      <!-- Premium Hover overlay with details hint -->
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium tracking-wide flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
          🔍 Phóng to hình ảnh
        </span>
      </div>

      <!-- Featured badge -->
      <div
        v-if="project.featured"
        class="absolute top-3 right-3 px-2 py-1 text-xs font-mono font-semibold rounded-lg z-10"
        style="background: rgba(124,58,237,0.8); color: white;"
      >
        ⭐ Featured
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors cursor-pointer" @click="$emit('show-details', project)">
        {{ project.title }}
      </h3>
      <p class="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tag in project.tags.slice(0, 4)"
          :key="tag"
          class="px-2 py-0.5 text-xs font-mono rounded-md"
          style="background: rgba(6,182,212,0.1); color: #06b6d4; border: 1px solid rgba(6,182,212,0.2);"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center justify-between pt-3 border-t border-white/5">
        <div class="flex gap-3">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/5"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            v-if="project.demo && project.demo !== '#'"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm transition-colors py-1 px-2 rounded-lg"
            style="color: #06b6d4;"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Live Demo
          </a>
        </div>
        <!-- Dedicated Chi tiết link -->
        <button 
          @click="$emit('show-details', project)"
          class="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 py-1 px-2 rounded hover:bg-purple-500/10 cursor-pointer"
        >
          Chi tiết ➜
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

defineEmits(['show-details', 'zoom-image'])

const categoryEmoji = computed(() => {
  const map = { frontend: '🎨', backend: '⚙️', fullstack: '🚀' }
  return map[props.project.category] || '💻'
})

const gradientBg = computed(() => {
  const gradients = {
    frontend: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2));',
    backend: 'background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.2));',
    fullstack: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.1));',
  }
  return gradients[props.project.category] || gradients.fullstack
})
</script>
