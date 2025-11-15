<template>
  <section class="hero section" id="home">
    <div class="particles-bg" id="particles-js"></div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="greeting text-content" :class="{ animate: isVisible }">
          <span class="wave">👋</span> 你好，我是
        </div>
        <h1 class="hero-name text-content" :class="{ animate: isVisible }">
          <span class="name-text">YT. Gan</span>
          <span class="cursor-blink">|</span>
        </h1>
        <p class="hero-subtitle text-content" :class="{ animate: isVisible }">
          <span class="typing-text">{{ displayText }}</span>
        </p>
        <p class="hero-description text-content" :class="{ animate: isVisible }">
          热爱编程与科研，致力于用技术解决实际问题 ⚡ 阿森纳铁杆球迷 💎 漫威电影爱好者
        </p>
        <div class="hero-buttons" :class="{ animate: isVisible }">
          <button class="btn btn-primary button" @click="scrollToSection('#projects')">
            <i class="fas fa-rocket"></i>
            <span class="small-text">查看项目</span>
          </button>
          <button class="btn btn-secondary button" @click="scrollToSection('#contact')">
            <i class="fas fa-envelope"></i>
            <span class="small-text">联系我</span>
          </button>
        </div>
        <div class="social-links text-content" :class="{ animate: isVisible }">
          <a href="mailto:15233530603@163.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div class="hero-image" :class="{ animate: isVisible }">
        <div class="image-container">
          <div class="image-wrapper">
            <div class="profile-image">
              <i class="fas fa-user"></i>
            </div>
            <div class="floating-elements">
              <div class="floating-element el1">
                <i class="fab fa-vue"></i>
              </div>
              <div class="floating-element el2">
                <i class="fab fa-python"></i>
              </div>
              <div class="floating-element el3">
                <i class="fas fa-code"></i>
              </div>
              <div class="floating-element el4">
                <i class="fas fa-brain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrow">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const displayText = ref('')
const typingTexts = [
  '软件工程师',
  '机器学习爱好者',
  '全栈开发者',
  '科研探索者',
  '阿森纳铁杆球迷',
  '漫威电影爱好者',
  '技术创新追求者'
]
let currentTextIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout = null

const typeText = () => {
  const currentText = typingTexts[currentTextIndex]
  
  if (isDeleting) {
    displayText.value = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayText.value = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length
    typeSpeed = 500
  }

  typingTimeout = setTimeout(typeText, typeSpeed)
}

const scrollToSection = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    const offset = 70
    const targetPosition = element.offsetTop - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

const initParticles = () => {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#667eea' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#667eea',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    })
  }
}

onMounted(() => {
  isVisible.value = true
  setTimeout(() => {
    typeText()
    initParticles()
  }, 500)
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b4e 100%);
  padding: 0 30px;
}

.particles-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.hero-content {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.hero-text.animate {
  opacity: 1;
  transform: translateY(0);
}

.greeting {
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  animation-delay: 0.2s;
}

.wave {
  display: inline-block;
  animation: wave 1s ease-in-out infinite;
  margin-right: 10px;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-20deg); }
}

.hero-name {
  font-size: 4.5em;
  font-weight: 800;
  margin: 20px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation-delay: 0.4s;
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #667eea;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-subtitle {
  font-size: 2em;
  color: #667eea;
  margin: 20px 0;
  min-height: 60px;
  animation-delay: 0.6s;
}

.typing-text {
  font-weight: 600;
}

.hero-description {
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.7);
  margin: 30px 0;
  line-height: 1.8;
  animation-delay: 0.8s;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  animation-delay: 1s;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  border: none;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.social-links {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  animation-delay: 1.2s;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3em;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-5px) rotate(360deg);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease 0.3s;
}

.hero-image.animate {
  opacity: 1;
  transform: translateX(0);
}

.image-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid rgba(102, 126, 234, 0.5);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50% { transform: translate(-50%, -50%) translateY(-20px); }
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.floating-element {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.3);
  animation: orbit 20s linear infinite;
}

.el1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.el2 {
  top: 10%;
  right: 10%;
  animation-delay: -5s;
}

.el3 {
  bottom: 10%;
  left: 10%;
  animation-delay: -10s;
}

.el4 {
  bottom: 10%;
  right: 10%;
  animation-delay: -15s;
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
  color: rgba(255, 255, 255, 0.6);
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
}

.arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-name {
    font-size: 3em;
  }

  .hero-subtitle {
    font-size: 1.5em;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }

  .profile-image {
    width: 250px;
    height: 250px;
    font-size: 80px;
  }
}

/* 响应式缩放适配 */
:global(.scale-90) .hero-name {
  font-size: 4em;
}

:global(.scale-80) .hero-name {
  font-size: 3.5em;
}

:global(.scale-75) .hero-name {
  font-size: 3em;
}

:global(.compact-mode) .hero-name {
  font-size: 3em;
}

:global(.ultra-compact) .hero-name {
  font-size: 2.5em;
}

:global(.scale-90) .hero-subtitle {
  font-size: 1.8em;
}

:global(.scale-80) .hero-subtitle {
  font-size: 1.6em;
}

:global(.scale-75) .hero-subtitle {
  font-size: 1.4em;
}

:global(.compact-mode) .hero-subtitle {
  font-size: 1.4em;
}

:global(.ultra-compact) .hero-subtitle {
  font-size: 1.2em;
}

:global(.scale-90) .image-container {
  width: 350px;
  height: 350px;
}

:global(.scale-80) .image-container {
  width: 300px;
  height: 300px;
}

:global(.scale-75) .image-container {
  width: 250px;
  height: 250px;
}

:global(.compact-mode) .image-container {
  width: 250px;
  height: 250px;
}

:global(.ultra-compact) .image-container {
  width: 200px;
  height: 200px;
}

:global(.compact-mode) .hero-buttons {
  gap: 15px;
  margin: 30px 0;
}

:global(.ultra-compact) .hero-buttons {
  gap: 10px;
  margin: 20px 0;
}

:global(.compact-mode) .btn {
  padding: 12px 25px;
  font-size: 1em;
}

:global(.ultra-compact) .btn {
  padding: 10px 20px;
  font-size: 0.9em;
}
</style>

