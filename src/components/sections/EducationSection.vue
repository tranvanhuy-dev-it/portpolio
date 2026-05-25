<template>
  <section id="education" class="relative py-24 px-4">
    <div class="max-w-5xl mx-auto">
      <SectionTitle
        title="Học Vấn"
        subtitle="Education"
        description="Nền tảng kiến thức và các chứng chỉ của tôi"
      />

      <div class="flex flex-col gap-6">
        <div
          v-for="(edu, i) in store.education"
          :key="edu.id"
          class="glass-card-hover p-6 md:p-8 rounded-2xl fade-up flex flex-col md:flex-row items-start gap-6 relative overflow-hidden"
          :class="`animate-delay-${(i + 1) * 100}`"
        >
          <!-- Left side: Type Icon & Date / GPA -->
          <div class="flex md:flex-col items-center md:items-start justify-between w-full md:w-auto md:min-w-[180px] gap-4 shrink-0">
            <span
              class="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl shrink-0"
              :style="edu.type === 'degree'
                ? 'background: rgba(124,58,237,0.15);'
                : 'background: rgba(6,182,212,0.15);'"
            >
              {{ edu.type === 'degree' ? '🎓' : '📜' }}
            </span>
            <div class="text-right md:text-left">
              <span class="text-xs font-mono text-slate-400 block">{{ edu.period }}</span>
              <span v-if="edu.gpa" class="inline-block text-xs px-2.5 py-1 rounded-lg font-mono mt-1.5"
                style="background: rgba(245,158,11,0.1); color: #f59e0b;">
                GPA {{ edu.gpa }}
              </span>
              <span v-else class="inline-block text-xs px-2.5 py-1 rounded-lg font-mono mt-1.5"
                style="background: rgba(16,185,129,0.1); color: #10b981;">
                ✓ Certified
              </span>
            </div>
          </div>

          <!-- Vertical Divider in desktop -->
          <div class="hidden md:block w-px self-stretch bg-white/5"></div>

          <!-- Right side: Content -->
          <div class="flex-grow w-full">
            <!-- School -->
            <p class="text-xs font-mono uppercase tracking-wider mb-1.5"
              :style="edu.type === 'degree' ? 'color: #a855f7;' : 'color: #06b6d4;'">
              {{ edu.school }}
            </p>

            <!-- Degree -->
            <h3 class="text-white font-bold text-lg md:text-xl mb-3 leading-snug">
              {{ edu.degree }}
            </h3>

            <!-- Description -->
            <p class="text-slate-400 text-sm leading-relaxed">
              {{ edu.description }}
            </p>
          </div>
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
