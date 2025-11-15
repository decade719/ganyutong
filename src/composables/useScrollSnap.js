import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollSnap() {
  let isScrolling = false
  let currentSection = 0
  let sections = []
  const currentSectionIndex = ref(0)
  
  const getSections = () => {
    return [
      'home',
      'about', 
      'education',
      'projects',
      'internship',
      'honors',
      'contact'
    ]
  }
  
  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return
    
    const sectionId = sections[index]
    const element = document.getElementById(sectionId)
    
    if (element) {
      isScrolling = true
      currentSection = index
      currentSectionIndex.value = index
      
      // 更新导航指示器
      updateNavigationDots()
      
      // 计算目标位置，考虑导航栏高度
      const navHeight = 70 // 导航栏高度
      const targetPosition = element.offsetTop - navHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      
      // 防止滚动期间重复触发
      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }
  }
  
  const handleWheel = (e) => {
    if (isScrolling) {
      e.preventDefault()
      return
    }
    
    e.preventDefault()
    
    const delta = e.deltaY
    
    if (delta > 0) {
      // 向下滚动
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1)
      }
    } else {
      // 向上滚动
      if (currentSection > 0) {
        scrollToSection(currentSection - 1)
      }
    }
  }
  
  const handleKeyDown = (e) => {
    if (isScrolling) return
    
    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault()
        if (currentSection < sections.length - 1) {
          scrollToSection(currentSection + 1)
        }
        break
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault()
        if (currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
        break
      case 'Home':
        e.preventDefault()
        scrollToSection(0)
        break
      case 'End':
        e.preventDefault()
        scrollToSection(sections.length - 1)
        break
    }
  }
  
  const updateCurrentSection = () => {
    // 根据当前滚动位置更新当前section索引
    const scrollPosition = window.scrollY + window.innerHeight / 2
    
    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentSection = index
          currentSectionIndex.value = index
          updateNavigationDots()
        }
      }
    })
  }
  
  const updateNavigationDots = () => {
    const dots = document.querySelectorAll('.scroll-nav-item')
    dots.forEach((dot, index) => {
      if (index === currentSection) {
        dot.classList.add('active')
      } else {
        dot.classList.remove('active')
      }
    })
  }
  
  const createNavigationDots = () => {
    const nav = document.createElement('div')
    nav.className = 'scroll-nav'
    
    sections.forEach((_, index) => {
      const dot = document.createElement('div')
      dot.className = 'scroll-nav-item'
      if (index === 0) dot.classList.add('active')
      
      dot.addEventListener('click', () => scrollToSection(index))
      nav.appendChild(dot)
    })
    
    document.body.appendChild(nav)
  }
  
  onMounted(() => {
    sections = getSections()
    
    // 创建导航指示器
    createNavigationDots()
    
    // 初始化当前section
    updateCurrentSection()
    
    // 监听滚动事件
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', updateCurrentSection, { passive: true })
    
    // 监听触摸事件（移动端）
    let touchStartY = 0
    let touchEndY = 0
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e) => {
      if (isScrolling) return
      
      touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY - touchEndY
      
      if (Math.abs(deltaY) > 50) { // 最小滑动距离
        if (deltaY > 0 && currentSection < sections.length - 1) {
          // 向上滑动，向下滚动
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          // 向下滑动，向上滚动
          scrollToSection(currentSection - 1)
        }
      }
    }
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    // 保存事件处理函数以便清理
    window._touchStartHandler = handleTouchStart
    window._touchEndHandler = handleTouchEnd
  })
  
  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('scroll', updateCurrentSection)
    
    if (window._touchStartHandler) {
      window.removeEventListener('touchstart', window._touchStartHandler)
    }
    if (window._touchEndHandler) {
      window.removeEventListener('touchend', window._touchEndHandler)
    }
  })
  
  return {
    scrollToSection,
    currentSection: currentSectionIndex
  }
}