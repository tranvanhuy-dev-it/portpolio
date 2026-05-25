<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'navbar-scrolled' : 'navbar-top'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="text-xl font-bold font-mono gradient-text hover:opacity-80 transition-opacity"
        @click.prevent="scrollTo('#hero')"
      >
        HuyTran.dev
      </a>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-400 hover:text-white hover:bg-white/5'"
            @click.prevent="scrollTo(`#${item.id}`)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- CTA Button (desktop) -->
      <a
        href="#contact"
        class="hidden md:block btn-primary text-sm px-5 py-2"
        @click.prevent="scrollTo('#contact')"
      >
        Liên hệ
      </a>

      <!-- Mobile Menu Toggle -->
      <button
        class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
        id="mobile-menu-toggle"
      >
        <span class="w-5 h-0.5 bg-white block transition-all" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="w-5 h-0.5 bg-white block transition-all" :class="mobileOpen ? 'opacity-0' : ''"></span>
        <span class="w-5 h-0.5 bg-white block transition-all" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden mx-4 mb-4 glass-card p-4 rounded-2xl">
        <ul class="flex flex-col gap-2">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-400 hover:text-white hover:bg-white/5'"
              @click.prevent="() => { scrollTo(`#${item.id}`); mobileOpen = false }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeSection: { type: String, default: 'hero' },
})

const scrolled = ref(false)
const mobileOpen = ref(false)
const scrollProgress = ref(0)

const navItems = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'about', label: 'Về tôi' },
  { id: 'skills', label: 'Kỹ năng' },
  { id: 'projects', label: 'Dự án' },
  { id: 'experience', label: 'Kinh nghiệm' },
  { id: 'education', label: 'Học vấn' },
  { id: 'contact', label: 'Liên hệ' },
]

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 50

  // Scroll progress
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
.navbar-top {
  background: transparent;
}
.nav-link-active {
  color: #a855f7;
  background: rgba(124, 58, 237, 0.1);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
