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
          @show-details="selectedProject = $event"
          @zoom-image="zoomImageUrl = $event"
        />
      </TransitionGroup>

      <!-- Empty state -->
      <div v-if="store.filteredProjects.length === 0" class="text-center py-20 text-slate-500">
        <div class="text-5xl mb-4">📭</div>
        <p>Không có dự án nào cho danh mục này.</p>
      </div>
    </div>

    <!-- Project Details Modal -->
    <Transition name="modal">
      <div v-if="selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/75 backdrop-blur-md" @click="selectedProject = null"></div>
        
        <!-- Modal Card -->
        <div class="relative w-full max-w-2xl bg-[#0b0b10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
          <!-- Close Button -->
          <button 
            @click="selectedProject = null" 
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors border border-white/10 z-20 text-sm"
            aria-label="Close modal"
          >
            ✕
          </button>

          <!-- Image header -->
          <div class="h-44 sm:h-64 relative overflow-hidden shrink-0 bg-slate-950 border-b border-white/5">
            <img
              v-if="selectedProject.image"
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-7xl" :style="modalGradientBg">
              🚀
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6 md:p-8 overflow-y-auto flex-grow text-left">
            <div class="flex items-center justify-between gap-4 flex-wrap mb-4">
              <h3 class="text-2xl font-bold text-white">{{ selectedProject.title }}</h3>
              <span class="px-3 py-1 text-xs font-mono font-bold rounded-lg uppercase tracking-wider"
                :style="selectedProject.category === 'fullstack' ? 'background: rgba(124,58,237,0.15); color: #a855f7; border: 1px solid rgba(124,58,237,0.25);' : 'background: rgba(6,182,212,0.15); color: #06b6d4; border: 1px solid rgba(6,182,212,0.25);'"
              >
                {{ selectedProject.category }}
              </span>
            </div>

            <!-- Project Period / Duration -->
            <div v-if="selectedProject.time" class="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 font-mono bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-fit">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Thời gian thực hiện: <strong class="text-white">{{ selectedProject.time }}</strong></span>
            </div>

            <!-- Long Description -->
            <p class="text-slate-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
              {{ selectedProject.longDesc || selectedProject.description }}
            </p>

            <!-- Tech tags -->
            <div class="mb-6">
              <h4 class="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5">Công nghệ sử dụng</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedProject.tags"
                  :key="tag"
                  class="px-2.5 py-1 text-xs font-mono rounded-lg"
                  style="background: rgba(6,182,212,0.08); color: #06b6d4; border: 1px solid rgba(6,182,212,0.15);"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Action Links -->
            <div class="flex gap-4 pt-4 border-t border-white/5">
              <a
                :href="selectedProject.github"
                target="_blank"
                rel="noopener"
                class="flex-grow btn-outline flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18(0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Xem mã nguồn
              </a>
              <a
                v-if="selectedProject.demo && selectedProject.demo !== '#'"
                :href="selectedProject.demo"
                target="_blank"
                rel="noopener"
                class="flex-grow btn-primary flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold cursor-pointer"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Trải nghiệm Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Fullscreen Image Lightbox -->
    <Transition name="lightbox">
      <div 
        v-if="zoomImageUrl" 
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        @click="zoomImageUrl = null"
      >
        <!-- Close button -->
        <button 
          @click="zoomImageUrl = null" 
          class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 text-lg cursor-pointer"
          aria-label="Close lightbox"
        >
          ✕
        </button>
        
        <!-- Large Image -->
        <img 
          :src="zoomImageUrl" 
          class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
          alt="Zoomed project preview"
        />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
const selectedProject = ref(null)
const zoomImageUrl = ref(null)

const modalGradientBg = computed(() => {
  if (!selectedProject.value) return ''
  const gradients = {
    frontend: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2));',
    backend: 'background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.2));',
    fullstack: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.1));',
  }
  return gradients[selectedProject.value.category] || gradients.fullstack
})

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

/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

/* Lightbox Animation */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active img,
.lightbox-leave-active img {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.95);
}
</style>
