<template>
  <footer class="relative py-12 px-4 border-t border-white/5">
    <div class="max-w-6xl mx-auto">
      <!-- Top -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <a href="#hero" class="text-2xl font-bold font-mono gradient-text">HuyTran</a>

        <!-- Social links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 glass-card"
            :aria-label="social.name"
            :title="social.name"
          >
            <!-- GitHub SVG -->
            <svg v-if="social.platform === 'github'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <!-- LinkedIn SVG -->
            <svg v-else-if="social.platform === 'linkedin'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <!-- Facebook SVG -->
            <svg v-else-if="social.platform === 'facebook'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <!-- Email SVG -->
            <svg v-else-if="social.platform === 'email'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <hr class="neon-line mb-8" />

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {{ new Date().getFullYear() }} | Designed by Tran Van Huy
        </p>
        <button
          @click="scrollToTop"
          class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          id="back-to-top"
        >
          <span>Lên đầu trang</span>
          <span class="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()

const socials = [
  { name: 'GitHub', platform: 'github', url: store.personal.socials.github },
  { name: 'LinkedIn', platform: 'linkedin', url: store.personal.socials.linkedin },
  { name: 'Facebook', platform: 'facebook', url: store.personal.socials.facebook },
  { name: 'Email', platform: 'email', url: `mailto:${store.personal.email}` },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
