<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Radial glow background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
        style="background: radial-gradient(circle, #7c3aed, transparent);"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse-slow animate-delay-300"
        style="background: radial-gradient(circle, #06b6d4, transparent);"
      ></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <!-- Greeting badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-up"
        style="background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.3);">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span class="text-sm font-mono text-slate-300">{{ store.personal.availability }}</span>
      </div>

      <!-- Name -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 fade-up animate-delay-100">
        <span class="text-white">Xin chào, tôi là</span><br />
        <span class="gradient-text">{{ store.personal.name }}</span>
      </h1>

      <!-- Typewriter tagline -->
      <div class="flex items-center justify-center gap-3 text-2xl md:text-3xl font-semibold mb-8 fade-up animate-delay-200" style="min-height: 48px;">
        <span class="text-slate-400">Tôi là</span>
        <span class="gradient-text">{{ displayText }}</span>
        <span class="w-0.5 h-8 bg-purple-400 animate-pulse ml-0.5"></span>
      </div>

      <!-- Bio snippet -->
      <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-10 fade-up animate-delay-300 leading-relaxed">
        Đam mê xây dựng các sản phẩm web hiện đại, hiệu suất cao với trải nghiệm người dùng xuất sắc.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-up animate-delay-400">
        <a href="#projects" @click.prevent="scrollTo('#projects')" class="btn-primary text-base px-8 py-3" id="hero-view-projects">
          Xem dự án 🚀
        </a>
        <a :href="store.personal.cv" download class="btn-outline text-base px-8 py-3" id="hero-download-cv">
          Tải CV ↓
        </a>
      </div>

      <!-- Social links -->
      <div class="flex items-center justify-center gap-5 fade-up animate-delay-500">
        <a
          v-for="(url, platform) in store.personal.socials"
          :key="platform"
          :href="url"
          target="_blank"
          rel="noopener"
          class="social-link"
          :aria-label="platform"
        >
          <!-- GitHub SVG -->
          <svg v-if="platform === 'github'" class="w-5 h-5 text-slate-400 hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <!-- LinkedIn SVG -->
          <svg v-else-if="platform === 'linkedin'" class="w-5 h-5 text-slate-400 hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <!-- Facebook SVG -->
          <svg v-else-if="platform === 'facebook'" class="w-5 h-5 text-slate-400 hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <!-- Twitter SVG -->
          <svg v-else-if="platform === 'twitter'" class="w-5 h-5 text-slate-400 hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-slate-500 font-mono">scroll</span>
      <div class="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-purple-400 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useTypewriter } from '@/composables/useTypewriter'

const store = usePortfolioStore()
const { displayText } = useTypewriter(store.personal.taglines)

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.social-link {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease;
}
.social-link:hover {
  background: rgba(124, 58, 237, 0.15);
  border-color: rgba(124, 58, 237, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.3);
}
</style>
