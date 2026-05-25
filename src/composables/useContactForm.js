import { ref, reactive } from 'vue'

export function useContactForm() {
  const isSubmitting = ref(false)
  const submitStatus = ref(null) // 'success' | 'error' | null

  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function validate() {
    let valid = true
    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''

    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = 'Tên phải có ít nhất 2 ký tự'
      valid = false
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Email không hợp lệ'
      valid = false
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      errors.subject = 'Chủ đề phải có ít nhất 3 ký tự'
      valid = false
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errors.message = 'Nội dung phải có ít nhất 10 ký tự'
      valid = false
    }
    return valid
  }

  async function submit() {
    if (!validate()) return

    isSubmitting.value = true
    submitStatus.value = null

    try {
      // Using EmailJS - configure your service/template IDs
      // import emailjs from '@emailjs/browser'
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
      //   from_name: form.name,
      //   from_email: form.email,
      //   subject: form.subject,
      //   message: form.message,
      // }, 'PUBLIC_KEY')

      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 1500))

      submitStatus.value = 'success'
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } catch (err) {
      console.error('Email send error:', err)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    submitStatus,
    submit,
    validate,
  }
}
