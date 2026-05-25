import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Typewriter effect composable
 * @param {string[]} texts - Array of strings to cycle through
 * @param {number} typeSpeed - ms per character (default 80)
 * @param {number} deleteSpeed - ms per character when deleting (default 50)
 * @param {number} pauseMs - pause duration between texts (default 2000)
 */
export function useTypewriter(texts, typeSpeed = 80, deleteSpeed = 50, pauseMs = 2000) {
  const displayText = ref('')
  const isTyping = ref(true)
  let textIndex = 0
  let charIndex = 0
  let timer = null

  function type() {
    const currentText = texts[textIndex]

    if (isTyping.value) {
      if (charIndex < currentText.length) {
        displayText.value += currentText[charIndex]
        charIndex++
        timer = setTimeout(type, typeSpeed)
      } else {
        // pause before deleting
        isTyping.value = false
        timer = setTimeout(type, pauseMs)
      }
    } else {
      if (charIndex > 0) {
        displayText.value = currentText.substring(0, charIndex - 1)
        charIndex--
        timer = setTimeout(type, deleteSpeed)
      } else {
        isTyping.value = true
        textIndex = (textIndex + 1) % texts.length
        timer = setTimeout(type, 500)
      }
    }
  }

  onMounted(() => {
    timer = setTimeout(type, 800)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })

  return { displayText, isTyping }
}
