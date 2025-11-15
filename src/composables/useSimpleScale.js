import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useSimpleScale() {
  const screenHeight = ref(window.innerHeight)
  const scaleLevel = ref('normal')

  const updateScale = () => {
    screenHeight.value = window.innerHeight
    
    if (screenHeight.value <= 600) {
      scaleLevel.value = 'compact'
    } else if (screenHeight.value <= 720) {
      scaleLevel.value = 'small'
    } else if (screenHeight.value <= 800) {
      scaleLevel.value = 'medium'
    } else {
      scaleLevel.value = 'normal'
    }
  }

  const scaleClasses = computed(() => {
    return {
      'scale-compact': scaleLevel.value === 'compact',
      'scale-small': scaleLevel.value === 'small',
      'scale-medium': scaleLevel.value === 'medium',
      'scale-normal': scaleLevel.value === 'normal'
    }
  })

  onMounted(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScale)
  })

  return {
    scaleClasses,
    scaleLevel
  }
}