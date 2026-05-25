import { onMounted, onUnmounted } from 'vue'

/**
 * Intersection Observer based scroll animation
 * Adds 'visible' class when elements enter viewport
 */
export function useScrollAnimation() {
  let observer = null
  let mutationObserver = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Stagger children
            const children = entry.target.querySelectorAll('[data-stagger]')
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 120)
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Function to find and observe all animation elements
    const observeElements = () => {
      const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right')
      els.forEach((el) => {
        // If it does not have the visible class, make sure it is observed
        if (!el.classList.contains('visible')) {
          observer.observe(el)
        }
      })
    }

    // Initial observation
    observeElements()

    // Observe DOM changes to automatically monitor newly rendered tab items or list changes
    mutationObserver = new MutationObserver(() => {
      observeElements()
    })
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })

  return {}
}

/**
 * Track active section for nav highlighting
 */
export function useActiveSection(callback) {
  let observer = null

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
