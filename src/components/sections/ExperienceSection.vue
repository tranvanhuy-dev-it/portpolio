<template>
  <section id="experience" class="relative py-24 px-4" style="background: rgba(6,182,212,0.02);">
    <div class="max-w-4xl mx-auto">
      <SectionTitle
        title="Kinh Nghiệm"
        subtitle="Work Experience"
        description="Hành trình làm việc của tôi"
      />

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
          style="background: linear-gradient(to bottom, #7c3aed, #06b6d4, transparent);"
        ></div>

        <div
          v-for="(exp, i) in store.experiences"
          :key="exp.id"
          class="relative mb-12 fade-up"
          :class="[i % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto']"
          :style="`animation-delay: ${i * 100}ms`"
        >
          <!-- Dot -->
          <div
            class="timeline-dot"
            :class="i % 2 === 0 ? 'md:right-[-8px] md:left-auto left-[18px]' : 'md:left-[-8px] left-[18px]'"
            style="top: 24px; position: absolute;"
          ></div>

          <!-- Card -->
          <div
            class="ml-14 md:ml-0 glass-card-hover p-6 rounded-2xl"
            :class="i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'"
          >
            <!-- Header -->
            <div class="flex items-start justify-between flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-white">{{ exp.position }}</h3>
                <p class="text-purple-400 font-semibold">{{ exp.company }}</p>
              </div>
              <div class="text-right">
                <span
                  class="px-3 py-1 text-xs font-mono rounded-full"
                  style="background: rgba(124,58,237,0.15); color: #a855f7; border: 1px solid rgba(124,58,237,0.25);"
                >
                  {{ exp.period }}
                </span>
                <p class="text-slate-500 text-xs mt-1">{{ exp.duration }}</p>
              </div>
            </div>

            <!-- Description -->
            <ul class="space-y-1.5 mb-4 text-sm text-slate-400 text-left">
              <li
                v-for="desc in exp.description"
                :key="desc"
                class="flex items-start gap-2"
              >
                <span class="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                {{ desc }}
              </li>
            </ul>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 justify-start">
              <span
                v-for="tech in exp.tech"
                :key="tech"
                class="px-2.5 py-0.5 text-xs font-mono rounded-lg"
                style="background: rgba(6,182,212,0.1); color: #06b6d4; border: 1px solid rgba(6,182,212,0.2);"
              >
                {{ tech }}
              </span>
            </div>
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
