<template>
  <section id="projects" class="relative py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        title="Dự Án"
        subtitle="My Work"
        description="Một số dự án tiêu biểu tôi đã xây dựng"
      />

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 fade-up">
        <button
          v-for="f in filters"
          :key="f.value"
          class="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="store.projectFilter === f.value ? 'filter-active' : 'filter-inactive'"
          @click="store.setProjectFilter(f.value)"
          :id="`project-filter-${f.value}`"
        >
          {{ f.label }}
          <span class="ml-1.5 text-xs opacity-70">({{ getCount(f.value) }})</span>
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup
        name="project-grid"
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ProjectCard
          v-for="project in store.filteredProjects"
          :key="project.id"
          :project="project"
          :featured="project.featured"
          class="fade-up"
        />
      </TransitionGroup>

      <!-- Empty state -->
      <div v-if="store.filteredProjects.length === 0" class="text-center py-20 text-slate-500">
        <div class="text-5xl mb-4">📭</div>
        <p>Không có dự án nào cho danh mục này.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()

const filters = [
  { value: 'all', label: 'Tất cả' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
]

function getCount(filter) {
  if (filter === 'all') return store.projects.length
  return store.projects.filter(p => p.category === filter).length
}
</script>

<style scoped>
.filter-active {
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: white;
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
}
.filter-inactive {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}
.filter-inactive:hover {
  border-color: rgba(124, 58, 237, 0.3);
  color: white;
}

.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.4s ease;
}
.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.project-grid-move {
  transition: transform 0.4s ease;
}
</style>
