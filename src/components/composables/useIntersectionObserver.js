export function useIntersectionObserver(element, callback, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  // 支持ref对象或DOM元素
  const targetElement = element?.value || element

  if (!targetElement) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback()
        observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  observer.observe(targetElement)

  return () => {
    if (targetElement) {
      observer.unobserve(targetElement)
    }
  }
}

