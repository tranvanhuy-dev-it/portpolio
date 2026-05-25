<template>
  <section id="about" class="relative py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        title="Về Tôi"
        subtitle="About Me"
        description="Một chút thông tin về tôi và hành trình phát triển"
      />

      <div class="grid md:grid-cols-2 gap-12 items-center mt-4">
        <!-- Left: Avatar & decorative -->
        <div class="flex flex-col items-center fade-left">
          <!-- Avatar container -->
          <div class="relative mb-8">
            <div
              class="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden relative"
              style="background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2)); border: 2px solid rgba(124,58,237,0.3);"
            >
              <img
                v-if="store.personal.avatar"
                :src="store.personal.avatar"
                :alt="store.personal.name"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex flex-col items-center justify-center bg-slate-900/60 relative select-none">
                <!-- Initials avatar -->
                <span class="text-6xl font-bold font-mono tracking-widest text-slate-500/80">
                  {{ store.personal.name.split(' ').map(n => n[0]).join('') }}
                </span>
                <span class="text-[10px] font-mono text-purple-400/60 mt-3.5 tracking-[0.25em] uppercase">Developer</span>
              </div>
            </div>
            <!-- Glowing orb decorations -->
            <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-30 blur-2xl animate-pulse"
              style="background: #7c3aed;"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-25 blur-xl animate-pulse animate-delay-300"
              style="background: #06b6d4;"></div>
            <!-- Status badge -->
            <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-mono font-medium glass-card border border-green-500/20 flex items-center gap-1.5"
              style="color: #4ade80;">
              <span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              {{ store.personal.availability }}
            </div>
          </div>
 
          <!-- Location -->
          <p class="text-slate-400 text-sm flex items-center gap-2">
            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ store.personal.location }}
          </p>
        </div>

        <!-- Right: Bio & Stats -->
        <div class="fade-right">
          <h3 class="text-2xl font-bold text-white mb-2">
            {{ store.personal.name }}
          </h3>
          <p class="text-purple-400 font-mono mb-6">{{ store.personal.title }}</p>

          <p class="text-slate-300 leading-relaxed mb-4">
            {{ store.personal.bio }}
          </p>
          <p class="text-slate-400 leading-relaxed mb-8">
            {{ store.personal.bio2 }}
          </p>

          <!-- Info list -->
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-3 text-sm">
              <span class="text-purple-400 font-mono w-24">Email:</span>
              <a :href="`mailto:${store.personal.email}`" class="text-slate-300 hover:text-purple-400 transition-colors">
                {{ store.personal.email }}
              </a>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <span class="text-purple-400 font-mono w-24">Vị trí:</span>
              <span class="text-slate-300">{{ store.personal.location }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <span class="text-purple-400 font-mono w-24">Trạng thái:</span>
              <span class="text-green-400">{{ store.personal.availability }}</span>
            </div>
          </div>

          <a :href="store.personal.cv" download class="btn-primary inline-block" id="about-download-cv">
            Tải CV của tôi ↓
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        <div
          v-for="(stat, i) in store.stats"
          :key="stat.label"
          class="glass-card-hover p-6 text-center fade-up"
          :class="`animate-delay-${(i + 1) * 100}`"
          data-stagger
        >
          <div class="text-4xl font-bold gradient-text mb-2">{{ stat.value }}</div>
          <div class="text-slate-400 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
</script>
