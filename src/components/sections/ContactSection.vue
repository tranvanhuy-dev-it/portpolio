<template>
  <section id="contact" class="relative py-24 px-4" style="background: rgba(124,58,237,0.02);">
    <div class="max-w-5xl mx-auto">
      <SectionTitle
        title="Liên Hệ"
        subtitle="Get In Touch"
        description="Bạn có dự án thú vị? Hãy nói chuyện với tôi!"
      />

      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- Left: Info -->
        <div class="fade-left space-y-6">
          <div class="glass-card p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-white mb-4">Hãy kết nối với tôi</h3>
            <p class="text-slate-400 leading-relaxed mb-6">
              Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội trở thành một phần trong tầm nhìn của bạn.
            </p>

            <!-- Contact items -->
            <div class="space-y-4">
              <div
                v-for="item in contactItems"
                :key="item.label"
                class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style="background: rgba(124,58,237,0.15);"
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
                <div>
                  <p class="text-xs text-slate-500 font-mono">{{ item.label }}</p>
                  <a
                    v-if="item.href"
                    :href="item.href"
                    class="text-sm text-white group-hover:text-purple-400 transition-colors"
                  >{{ item.value }}</a>
                  <p v-else class="text-sm text-white">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="glass-card p-6 rounded-2xl">
            <p class="text-sm text-slate-400 mb-4 font-mono">Theo dõi tôi trên</p>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-200 glass-card"
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
                <span class="hidden sm:block text-xs">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="fade-right">
          <div class="glass-card p-8 rounded-2xl">
            <h3 class="text-xl font-bold text-white mb-6">Gửi tin nhắn 📩</h3>

            <!-- Success message -->
            <Transition name="fade">
              <div v-if="submitStatus === 'success'"
                class="mb-6 p-4 rounded-xl text-sm text-green-400 flex items-center gap-3"
                style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25);">
                ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất.
              </div>
            </Transition>

            <!-- Error message -->
            <Transition name="fade">
              <div v-if="submitStatus === 'error'"
                class="mb-6 p-4 rounded-xl text-sm text-red-400 flex items-center gap-3"
                style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25);">
                ❌ Gửi thất bại. Vui lòng thử lại hoặc liên hệ qua email.
              </div>
            </Transition>

            <form @submit.prevent="submit" class="space-y-5" id="contact-form">
              <!-- Name & Email -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-slate-400 mb-1.5">Tên *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    class="form-input"
                    id="contact-name"
                  />
                  <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
                </div>
                <div>
                  <label class="block text-xs font-mono text-slate-400 mb-1.5">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="email@example.com"
                    class="form-input"
                    id="contact-email"
                  />
                  <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1.5">Chủ đề *</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Về dự án của tôi..."
                  class="form-input"
                  id="contact-subject"
                />
                <p v-if="errors.subject" class="text-red-400 text-xs mt-1">{{ errors.subject }}</p>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1.5">Nội dung *</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Mô tả dự án hoặc cơ hội hợp tác..."
                  class="form-input resize-none"
                  id="contact-message"
                ></textarea>
                <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                class="btn-primary w-full py-3.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
                id="contact-submit"
              >
                <svg v-if="isSubmitting" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                <span>{{ isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn 🚀' }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useContactForm } from '@/composables/useContactForm'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
const { form, errors, isSubmitting, submitStatus, submit } = useContactForm()

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
.fade-enter-active,
.fade-leave-active { transition: all 0.4s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
