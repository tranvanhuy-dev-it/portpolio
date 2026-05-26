<template>
  <section id="skills" class="relative py-24 px-4" style="background: rgba(124,58,237,0.02);">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        title="Kỹ Năng"
        subtitle="Tech Stack"
        description="Các công nghệ tôi sử dụng để xây dựng sản phẩm"
      />

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 fade-up">
        <button
          v-for="cat in store.skillCategories"
          :key="cat.id"
          class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          :class="store.activeSkillCategory === cat.id ? 'tab-active' : 'tab-inactive'"
          @click="store.setActiveSkillCategory(cat.id)"
          :id="`skill-tab-${cat.id}`"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Grid -->
      <TransitionGroup name="skill-list" tag="div" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(skill, i) in store.activeSkills"
          :key="skill.name"
          class="glass-card-hover p-5 fade-up"
          :style="`animation-delay: ${i * 60}ms`"
        >
          <!-- Skill header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <img v-if="skill.logo" :src="skill.logo" alt="logo" class="w-5 h-5 object-contain shrink-0" />
              <span class="font-semibold text-white text-sm">{{ skill.name }}</span>
            </div>
            <span class="text-xs font-mono text-purple-400">{{ skill.level }}%</span>
          </div>

          <!-- Progress bar -->
          <div class="h-1.5 rounded-full overflow-hidden" style="background: rgba(255,255,255,0.08);">
            <div
              class="h-full rounded-full skill-bar"
              :style="{
                width: skill.level + '%',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                transition: 'width 1s ease ' + (i * 60) + 'ms',
              }"
            ></div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
const barsVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) barsVisible.value = true },
    { threshold: 0.2 }
  )
  const section = document.querySelector('#skills')
  if (section) observer.observe(section)
})
</script>

<style scoped>
.tab-active {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(6, 182, 212, 0.2));
  border: 1px solid rgba(124, 58, 237, 0.5);
  color: white;
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.2);
}
.tab-inactive {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}
.tab-inactive:hover {
  border-color: rgba(124, 58, 237, 0.3);
  color: white;
  background: rgba(124, 58, 237, 0.05);
}

.skill-list-enter-active,
.skill-list-leave-active {
  transition: all 0.4s ease;
}
.skill-list-enter-from,
.skill-list-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}
.skill-list-move {
  transition: transform 0.4s ease;
}
</style>
