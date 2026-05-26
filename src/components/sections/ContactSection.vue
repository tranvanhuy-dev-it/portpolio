<template>
  <section id="contact" class="relative py-24 px-4" style="background: rgba(124,58,237,0.02);">
    <div class="max-w-3xl mx-auto">
      <SectionTitle
        title="Liên Hệ"
        subtitle="Get In Touch"
        description="Hãy kết nối với tôi để thảo luận công việc hoặc cơ hội hợp tác!"
      />

      <div class="fade-up">
        <div class="glass-card p-8 md:p-10 rounded-3xl max-w-2xl mx-auto border border-white/5 shadow-2xl relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div class="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <h3 class="text-2xl font-bold text-white mb-4 text-center">Hãy kết nối với tôi</h3>
          <p class="text-slate-400 leading-relaxed mb-8 text-center max-w-lg mx-auto text-sm md:text-base">
            Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội trở thành một phần trong tầm nhìn của bạn.
          </p>

          <!-- Contact items grid -->
          <div class="grid sm:grid-cols-3 gap-4 mb-8">
            <div
              v-for="item in contactItems"
              :key="item.label"
              class="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 group hover:bg-white/[0.04]"
            >
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                :style="item.type === 'email' ? 'background: rgba(124,58,237,0.15);' : item.type === 'location' ? 'background: rgba(6,182,212,0.15);' : 'background: rgba(16,185,129,0.15);'"
              >
                <!-- Email Icon SVG -->
                <svg v-if="item.type === 'email'" class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <!-- Location Icon SVG -->
                <svg v-else-if="item.type === 'location'" class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <!-- Status Icon SVG -->
                <svg v-else-if="item.type === 'status'" class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="min-w-0 w-full">
                <p class="text-xs text-slate-500 font-mono mb-1">{{ item.label }}</p>
                <a
                  v-if="item.href"
                  :href="item.href"
                  class="text-sm text-white font-medium group-hover:text-purple-400 transition-colors break-words block px-1"
                >{{ item.value }}</a>
                <p v-else class="text-sm text-white font-medium break-words block px-1">{{ item.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="border-t border-white/5 pt-6 text-center">
            <p class="text-xs text-slate-500 mb-4 font-mono">Theo dõi tôi trên các nền tảng</p>
            <div class="flex flex-wrap gap-3 max-w-md mx-auto">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="flex-1 flex items-center justify-center gap-2.5 p-3.5 rounded-xl text-sm font-medium transition-all duration-300 glass-card hover:scale-105"
                :style="`border-color: ${social.color}30; color: ${social.color};`"
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
                <span class="text-xs font-semibold">{{ social.name }}</span>
              </a>
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

const contactItems = [
  { label: 'Email', type: 'email', value: store.personal.email, href: `mailto:${store.personal.email}` },
  { label: 'Vị trí', type: 'location', value: store.personal.location, href: null },
  { label: 'Trạng thái', type: 'status', value: store.personal.availability, href: null },
]

const socials = [
  { name: 'GitHub', platform: 'github', url: store.personal.socials.github, color: '#a855f7' },
  { name: 'LinkedIn', platform: 'linkedin', url: store.personal.socials.linkedin, color: '#06b6d4' },
  { name: 'Facebook', platform: 'facebook', url: store.personal.socials.facebook, color: '#1877f2' },
]
</script>

<style scoped>
/* Keeping scoped animations minimal as GSAP is used in main, but standard hover and scale are vanilla CSS */
</style>
