import { ref, onMounted, onUnmounted } from 'vue'

export function useSmartScale() {
  const scaleClasses = ref('')
  
  const updateScale = () => {
    const windowHeight = window.innerHeight
    
    // 简化缩放逻辑 - 只处理真正需要的情况
    if (windowHeight <= 768) {
      // 小屏幕 - 应用紧凑模式
      scaleClasses.value = 'compact-layout'
    } else if (windowHeight <= 900) {
      // 中等屏幕 - 轻微调整
      scaleClasses.value = 'adjusted-layout'
    } else {
      // 大屏幕 - 正常显示
      scaleClasses.value = ''
    }
  }
  
  onMounted(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    
    onUnmounted(() => {
      window.removeEventListener('resize', updateScale)
    })
  })
  
  return {
    scaleClasses
  }
}