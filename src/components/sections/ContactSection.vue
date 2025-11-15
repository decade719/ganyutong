<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <h2 class="section-title" ref="titleRef">
        <span class="title-text">联系方式</span>
        <span class="title-line"></span>
      </h2>
      <div class="contact-content" ref="contentRef">
        <div class="contact-card">
          <div 
            class="contact-item" 
            v-for="(item, index) in contactItems" 
            :key="index"
            @click="handleContactClick(item)"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="contact-icon">
              <i :class="item.icon"></i>
            </div>
            <div class="contact-info">
              <h4>{{ item.label }}</h4>
              <p>{{ item.value }}</p>
            </div>
            <div class="contact-action">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="contact-footer">
          <p class="footer-text">💬 欢迎交流阿森纳比赛心得和漫威电影观后感！</p>
          <p class="footer-text">⚽ COYG! 🎬 Excelsior!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const titleRef = ref(null)
const contentRef = ref(null)

const contactItems = [
  {
    icon: 'fas fa-envelope',
    label: '邮箱',
    value: '15233530603@163.com',
    type: 'email',
    url: 'mailto:15233530603@163.com'
  }
]

const handleContactClick = (item) => {
  if (item.type === 'email') {
    // 复制邮箱到剪贴板
    navigator.clipboard.writeText(item.value).then(() => {
      alert('邮箱已复制到剪贴板！')
    }).catch(() => {
      window.location.href = item.url
    })
  } else {
    window.location.href = item.url
  }
}

onMounted(() => {
  useIntersectionObserver(titleRef, () => {
    if (titleRef.value) {
      titleRef.value.classList.add('animate')
    }
  })
  
  useIntersectionObserver(contentRef, () => {
    if (contentRef.value) {
      contentRef.value.classList.add('animate')
    }
  })
  
  // 触发智能缩放检测
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('smartContentChanged'))
  }, 500)
})
</script>

<style scoped>
.contact-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.section-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 80px;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-title.animate {
  opacity: 1;
  transform: translateY(0);
}

.title-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line {
  display: block;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 20px auto 0;
  border-radius: 2px;
}

.contact-content {
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.contact-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.contact-card {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 35px;
  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
  transition: left 0.5s;
}

.contact-item:hover::before {
  left: 100%;
}

.contact-item:hover {
  transform: translateX(10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.contact-icon {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #667eea;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%);
}

.contact-info {
  flex: 1;
}

.contact-info h4 {
  color: #fff;
  margin-bottom: 8px;
  font-size: 1.2em;
}

.contact-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.contact-item:hover .contact-info p {
  color: #667eea;
}

.contact-action {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2em;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-action {
  color: #667eea;
  transform: translateX(5px);
}

.contact-footer {
  text-align: center;
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1em;
  margin: 10px 0;
  font-weight: 500;
}

.footer-text:first-child {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }

  .contact-item {
    padding: 25px;
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5em;
  }
}
</style>

