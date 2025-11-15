<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo" @click="scrollToTop">
        <span class="logo-text">YT. Gan</span>
        <span class="logo-dot">.</span>
      </div>
      <ul class="nav-menu" :class="{ active: menuActive }">
        <li v-for="item in menuItems" :key="item.id">
          <a 
            :href="item.href" 
            @click.prevent="scrollTo(item.href)"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
      <div class="hamburger" :class="{ active: menuActive }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { id: 'home', label: '首页', href: '#home' },
  { id: 'about', label: '关于我', href: '#about' },
  { id: 'education', label: '教育背景', href: '#education' },
  { id: 'projects', label: '项目经历', href: '#projects' },
  { id: 'internship', label: '实训经历', href: '#internship' },
  { id: 'honors', label: '荣誉获奖', href: '#honors' },
  { id: 'contact', label: '联系方式', href: '#contact' }
]

const isScrolled = ref(false)
const menuActive = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  updateActiveSection()
}

const updateActiveSection = () => {
  const sections = menuItems.map(item => item.id)
  const scrollPos = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.querySelector(`#${sections[i]}`)
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = sections[i]
      break
    }
  }
}

const scrollTo = (href) => {
  const target = document.querySelector(href)
  if (target) {
    const offset = 70
    const targetPosition = target.offsetTop - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
  menuActive.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMenu = () => {
  menuActive.value = !menuActive.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(20px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar.scrolled {
  background: rgba(10, 14, 39, 0.95);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  cursor: pointer;
  font-size: 1.8em;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-dot {
  color: #764ba2;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding: 5px 0;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: #fff;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: rgba(10, 14, 39, 0.98);
    width: 100%;
    padding: 30px;
    transition: 0.3s;
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-menu.active {
    left: 0;
  }

  .hamburger {
    display: flex;
  }
}
</style>

