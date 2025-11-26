<template>
  <div>
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

    <section class="about-section section" id="about">
      <div class="container">
        <h2 class="section-title text-content" ref="aboutTitleRef">
          <span class="title-text">关于我</span>
          <span class="title-line"></span>
        </h2>
        <div class="about-content">
          <div 
            class="about-card card" 
            v-for="(card, index) in cards" 
            :key="index"
            :style="{ animationDelay: `${index * 0.2}s` }"
            ref="aboutCardRefs"
          >
            <div class="card-icon">
              <i :class="card.icon"></i>
            </div>
            <h3 class="text-content">{{ card.title }}</h3>
            <div v-if="card.type === 'info'" class="info-grid">
              <div class="info-item" v-for="(info, i) in card.items" :key="i">
                <i :class="info.icon"></i>
                <span><strong>{{ info.label }}：</strong>{{ info.value }}</span>
              </div>
            </div>
            <div v-else class="evaluation">
              <div class="tag" v-for="(tag, i) in card.tags" :key="i">{{ tag }}</div>
            </div>
            <p v-if="card.description" class="about-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section section" id="education">
      <div class="container">
        <h2 class="section-title text-content" ref="educationTitleRef">
          <span class="title-text">教育背景</span>
          <span class="title-line"></span>
        </h2>
        <div class="education-content" ref="educationContentRef">
          <div class="education-card">
            <div class="education-header">
              <div class="education-icon">
                <i class="fas fa-university"></i>
              </div>
              <div class="education-info">
                <h3 class="text-content">燕山大学</h3>
                <p class="education-detail text-content">信息科学与工程学院（软件学院）</p>
                <p class="education-major text-content">软件工程专业</p>
              </div>
            </div>
            <div class="education-body">
              <div class="education-time text-content">
                <i class="fas fa-calendar"></i>
                <span class="text-content">2022.09 - 2026.07</span>
              </div>
              <div class="education-stats">
                <div class="stat-item">
                  <div class="stat-icon">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <div class="stat-content text-content">
                    <span class="stat-label small-text">GPA</span>
                    <span class="stat-value text-content">3.569</span>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">
                    <i class="fas fa-trophy"></i>
                  </div>
                  <div class="stat-content text-content">
                    <span class="stat-label small-text">专业排名</span>
                    <span class="stat-value text-content">18/176</span>
                  </div>
                </div>
              </div>
              <div class="core-courses">
                <h4 class="text-content">
                  <i class="fas fa-book"></i>
                  核心课程
                </h4>
                <div class="courses-grid">
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">计算机网络</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">操作系统</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">数据库原理</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">编译原理</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">汇编原理</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-a card">
                    <span class="course-name small-text">计算机应用基础与程序设计</span>
                    <span class="course-grade small-text">A</span>
                  </div>
                  <div class="course-item grade-b card">
                    <span class="course-name small-text">Python 机器学习</span>
                    <span class="course-grade small-text">B</span>
                  </div>
                  <div class="course-item grade-b card">
                    <span class="course-name small-text">自然语言处理</span>
                    <span class="course-grade small-text">B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section section" id="projects">
      <div class="container">
        <h2 class="section-title text-content" ref="projectsTitleRef">
          <span class="title-text">项目经历</span>
          <span class="title-line"></span>
        </h2>

        <div class="pagination-controls text-content" v-if="totalPages > 1">
          <button 
            class="page-btn button" 
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <span class="page-info small-text">{{ currentPage }} / {{ totalPages }}</span>
          <button 
            class="page-btn button" 
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div class="projects-grid">
          <div 
            class="project-card card" 
            v-for="(project, index) in paginatedProjects" 
            :key="index"
            ref="projectRefs"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="project-header" :style="{ background: project.gradient }">
              <div class="project-icon">
                <i :class="project.icon"></i>
              </div>
              <div class="project-title-section">
                <h3 class="text-content">{{ project.title }}</h3>
                <div class="project-meta text-content">
                  <span class="project-role small-text">
                    <i class="fas fa-user-tie"></i>
                    {{ project.role }}
                  </span>
                  <span class="project-date small-text">
                    <i class="fas fa-calendar"></i>
                    {{ project.date }}
                  </span>
                </div>
              </div>
            </div>
            <div class="project-body">
              <div class="project-content">
                <h4 class="text-content"><i class="fas fa-info-circle"></i> 项目内容</h4>
                <p class="text-content">{{ project.content }}</p>

                <h4 class="text-content"><i class="fas fa-tasks"></i> 主要职责</h4>
                <ul class="project-responsibilities text-content">
                  <li class="small-text" v-for="(resp, i) in project.responsibilities" :key="i">{{ resp }}</li>
                </ul>

                <div class="project-achievements" v-if="project.achievements">
                  <h4 class="text-content"><i class="fas fa-trophy"></i> 项目成果</h4>
                  <div v-if="project.achievements.stats" class="achievement-stats">
                    <div class="stat-item card" v-for="(stat, i) in project.achievements.stats" :key="i">
                      <div class="stat-icon">
                        <i :class="stat.icon"></i>
                      </div>
                      <div class="stat-content">
                        <span class="stat-value text-content">{{ stat.value }}</span>
                        <span class="stat-label small-text">{{ stat.label }}</span>
                      </div>
                    </div>
                  </div>
                  <p v-if="project.achievements.description" class="achievement-description text-content">
                    {{ project.achievements.description }}
                  </p>
                </div>

                <div class="project-tags">
                  <span class="tag small-text" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="internship-section section" id="internship">
      <div class="container">
        <h2 class="section-title text-content" ref="internshipTitleRef">
          <span class="title-text">实训经历</span>
          <span class="title-line"></span>
        </h2>
        <div class="internship-content" ref="internshipContentRef">
          <div class="internship-card card">
            <div class="internship-header">
              <div class="internship-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div class="internship-title-section">
                <h3 class="text-content">融销通——基于数字经济的农产品融销平台与智慧金融挖掘</h3>
                <div class="internship-meta text-content">
                  <span class="internship-role small-text">
                    <i class="fas fa-briefcase"></i>
                    Java 软件开发
                  </span>
                  <span class="internship-date small-text">
                    <i class="fas fa-calendar"></i>
                    2024.07 - 2024.09
                  </span>
                </div>
              </div>
            </div>
            <div class="internship-body">
              <div class="internship-content-section">
                <h4 class="text-content">
                  <i class="fas fa-info-circle"></i>
                  实训内容
                </h4>
                <p class="text-content">项目构建了面向数字经济的一站式农产品融销平台，并集成智慧金融数据分析功能。
                后端采用Spring Boot微服务框架，结合MyBatis-Plus进行数据持久化管理，MySQL作为核心数据库。
                前端基于HarmonyOS ArkTS开发。系统通过三大功能支持金融决策：
                信用卡审批预测、异常交易检测、客户流失预测。</p>

                <div class="ml-models">
                  <h5 class="text-content">
                    <i class="fas fa-brain"></i>
                    机器学习模型应用
                  </h5>
                  <div class="models-grid">
                    <div class="model-category card">
                      <h6 class="text-content">审批预测</h6>
                      <div class="model-tags">
                        <span class="model-tag small-text">XGBoost</span>
                        <span class="model-tag small-text">KNN</span>
                        <span class="model-tag small-text">决策树</span>
                      </div>
                    </div>
                    <div class="model-category card">
                      <h6 class="text-content">异常检测</h6>
                      <div class="model-tags">
                        <span class="model-tag small-text">逻辑回归</span>
                        <span class="model-tag small-text">KNN</span>
                        <span class="model-tag small-text">AdaBoost</span>
                      </div>
                    </div>
                    <div class="model-category card">
                      <h6 class="text-content">流失预测</h6>
                      <div class="model-tags">
                        <span class="model-tag small-text">随机森林</span>
                        <span class="model-tag small-text">SVM</span>
                        <span class="model-tag small-text">朴素贝叶斯</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="internship-achievements">
                <h4 class="text-content">
                  <i class="fas fa-trophy"></i>
                  项目成果
                </h4>
                <ul class="text-content">
                  <li class="small-text">成功开发农产品融销App，集销售、采购、融资功能于一体，有效提升农产品流通效率</li>
                  <li class="small-text">集成机器学习模型实现关键业务智能化操作</li>
                  <li class="small-text">信用卡审批预测模型和信用卡异常检测模型召回率均超过85%</li>
                  <li class="small-text">客户流失预测模型F1-Score超过95%，为精准客户挽留提供数据支撑</li>
                </ul>
                <div class="achievement-stats">
                  <div class="achievement-item card">
                    <i class="fas fa-chart-line"></i>
                    <div>
                      <span class="achievement-value text-content">85%+</span>
                      <span class="achievement-label small-text">召回率（审批&异常检测）</span>
                    </div>
                  </div>
                  <div class="achievement-item card">
                    <i class="fas fa-star"></i>
                    <div>
                      <span class="achievement-value text-content">95%+</span>
                      <span class="achievement-label small-text">F1-Score（流失预测）</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="internship-tags">
                <span class="tag small-text">Spring Boot</span>
                <span class="tag small-text">MyBatis-Plus</span>
                <span class="tag small-text">HarmonyOS</span>
                <span class="tag small-text">机器学习</span>
                <span class="tag small-text">XGBoost</span>
                <span class="tag small-text">微服务</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="honors-section" id="honors">
      <div class="container">
        <h2 class="section-title" ref="honorsTitleRef">
          <span class="title-text">荣誉获奖</span>
          <span class="title-line"></span>
        </h2>
        <div class="honors-grid">
          <div 
            class="honor-card" 
            v-for="(honor, index) in honors" 
            :key="index"
            ref="honorRefs"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="honor-icon">
              <i :class="honor.icon"></i>
            </div>
            <h3>{{ honor.title }}</h3>
            <p class="honor-level">{{ honor.level }}</p>
            <p class="honor-date">
              <i class="fas fa-calendar"></i>
              {{ honor.date }}
            </p>
            <p v-if="honor.note" class="honor-note">{{ honor.note }}</p>
            <div class="honor-shine"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="container">
        <h2 class="section-title" ref="contactTitleRef">
          <span class="title-text">联系方式</span>
          <span class="title-line"></span>
        </h2>
        <div class="contact-content" ref="contactContentRef">
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

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2024 甘语桐. All rights reserved.</p>
          <p class="footer-note">
            Made with <i class="fas fa-heart pulse"></i> for showcasing my work
          </p>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '../components/composables/useIntersectionObserver'

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
    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
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

// Hero typing and particles
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
    window.scrollTo({ top: targetPosition, behavior: 'smooth' })
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

// About
const aboutTitleRef = ref(null)
const aboutCardRefs = ref([])
const cards = [
  {
    type: 'info',
    icon: 'fas fa-user-circle',
    title: '个人信息',
    items: [
      { icon: 'fas fa-birthday-cake', label: '出生日期', value: '2005年4月29日' },
      { icon: 'fas fa-map-marker-alt', label: '籍贯', value: '河北省秦皇岛市' },
      { icon: 'fas fa-graduation-cap', label: '专业', value: '软件工程' },
      { icon: 'fas fa-language', label: '英语水平', value: 'CET-4' }
    ]
  },
  {
    type: 'evaluation',
    icon: 'fas fa-star',
    title: '自我评价',
    tags: ['基础扎实', '乐观向上', '项目经历丰富', '学习态度积极', '善于面对困难', '热爱科研事业'],
    description: '在校期间积极参与学生工作，先后在易班学生工作工作室、学生社团、图书馆协会任职，积极参与竞赛和科研活动。目前拥有一项已授权的实用新型专利。'
  }
]

onMounted(() => {
  useIntersectionObserver(aboutTitleRef, () => {
    if (aboutTitleRef.value) aboutTitleRef.value.classList.add('animate')
  })
  aboutCardRefs.value.forEach(card => {
    if (card) {
      useIntersectionObserver(card, () => { card.classList.add('animate') })
    }
  })
  setTimeout(() => { window.dispatchEvent(new CustomEvent('smartContentChanged')) }, 500)
})

// Education
const educationTitleRef = ref(null)
const educationContentRef = ref(null)
onMounted(() => {
  useIntersectionObserver(educationTitleRef, () => {
    if (educationTitleRef.value) educationTitleRef.value.classList.add('animate')
  })
  useIntersectionObserver(educationContentRef, () => {
    if (educationContentRef.value) educationContentRef.value.classList.add('animate')
  })
})

// Projects
const projectsTitleRef = ref(null)
const projectRefs = ref([])
const currentPage = ref(1)
const itemsPerPage = computed(() => {
  const screenHeight = window.innerHeight
  return screenHeight <= 720 ? 1 : 2
})
const projects = [
  {
    title: '基于RoBERTa的新闻文本主题分类系统',
    role: '核心开发者',
    date: '2025.06 - 2025.07',
    icon: 'fas fa-newspaper',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: '项目基于中文预训练语言模型RoBERTa，采用PaddleNLP框架，实现了对大规模中文新闻文本的精准主题分类。通过大规模中文新闻数据集进行微调，模型能够有效捕捉中文语义特征，实现高精度主题分类。',
    responsibilities: [
      '负责模型架构设计与优化',
      '使用PaddleNLP进行模型微调与部署',
      '构建数据处理管道',
      '实现模型评估与性能优化',
      '结合CrossEntropyLoss进行训练'
    ],
    achievements: {
      stats: [
        { icon: 'fas fa-chart-line', value: '0.00804', label: '模型损失（第3轮）' },
        { icon: 'fas fa-check-circle', value: '98.30%', label: '分类准确率' }
      ],
      description: '验证了中文预训练语言模型在大规模新闻文本主题分类任务中的有效性和鲁棒性。'
    },
    tags: ['RoBERTa', 'PaddleNLP', '自然语言处理', '文本分类', '深度学习']
  },
  {
    title: '基于RBAC与Flask的人口综合信息管理系统',
    role: '项目组长',
    date: '2025.05 - 2025.06',
    icon: 'fas fa-database',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: '为政府部门开发的人口综合信息管理系统，采用前后端分离与微服务架构。前端使用Vue3 + Element Plus + Vue Router进行组件化开发。后端依托Flask RESTful API和PyMySQL ORM提供服务。数据层使用MySQL 8.0，并通过分区表与索引优化性能。系统支持人口信息全生命周期管理，并集成ECharts构建人口结构、迁移趋势、重点人口统计等多维度可视化模块。项目全生命周期均有完整文档记录。',
    responsibilities: [
      '负责系统架构与核心功能实现，包括数据库架构设计与性能优化',
      'RESTful API开发',
      '前端状态管理与交互优化',
      '构建ECharts可视化组件',
      '主导CI/CD流水线搭建与技术文档（SRS、SDD等）编写与维护'
    ],
    achievements: {
      description: '最终系统实现了人口信息采集、存储、查询、统计分析、可视化的全流程。支持多条件复杂查询、批量操作、数据导入导出，具备高效率与安全性，并产生了标准的项目流水线相关文档。'
    },
    tags: ['Flask', 'Vue3', 'MySQL', 'ECharts', 'RBAC', 'RESTful API']
  }
]
const totalPages = computed(() => Math.ceil(projects.length / itemsPerPage))
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return projects.slice(start, end)
})
onMounted(() => {
  useIntersectionObserver(projectsTitleRef, () => {
    if (projectsTitleRef.value) projectsTitleRef.value.classList.add('animate')
  })
  projectRefs.value.forEach(card => {
    if (card) {
      useIntersectionObserver(card, () => { card.classList.add('animate') })
    }
  })
})

// Internship
const internshipTitleRef = ref(null)
const internshipContentRef = ref(null)
onMounted(() => {
  useIntersectionObserver(internshipTitleRef, () => {
    if (internshipTitleRef.value) internshipTitleRef.value.classList.add('animate')
  })
  useIntersectionObserver(internshipContentRef, () => {
    if (internshipContentRef.value) internshipContentRef.value.classList.add('animate')
  })
})

// Honors
const honorsTitleRef = ref(null)
const honorRefs = ref([])
const honors = [
  { icon: 'fas fa-trophy', title: '2023年全国大学生英语竞赛', level: '国家级三等奖', date: '2023.06' },
  { icon: 'fas fa-medal', title: '国家励志奖学金', level: '国家级奖学金', date: '2023.09; 2024.09', note: '（两次获得）' },
  { icon: 'fas fa-futbol', title: '阿森纳铁杆球迷认证', level: '终身荣誉球迷', date: '2015 - Present', note: '每周必看比赛，COYG!' },
  { icon: 'fas fa-film', title: '漫威电影宇宙观影大师', level: 'MCU Completionist', date: '2008 - Present', note: '看过所有MCU电影，钢铁侠铁粉' }
]
onMounted(() => {
  useIntersectionObserver(honorsTitleRef, () => {
    if (honorsTitleRef.value) honorsTitleRef.value.classList.add('animate')
  })
  honorRefs.value.forEach(card => {
    if (card) {
      useIntersectionObserver(card, () => { card.classList.add('animate') })
    }
  })
  setTimeout(() => { window.dispatchEvent(new CustomEvent('smartContentChanged')) }, 500)
})

// Contact
const contactTitleRef = ref(null)
const contactContentRef = ref(null)
const contactItems = [
  { icon: 'fas fa-envelope', label: '邮箱', value: '15233530603@163.com', type: 'email', url: 'mailto:15233530603@163.com' }
]
const handleContactClick = (item) => {
  if (item.type === 'email') {
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
  useIntersectionObserver(contactTitleRef, () => {
    if (contactTitleRef.value) contactTitleRef.value.classList.add('animate')
  })
  useIntersectionObserver(contactContentRef, () => {
    if (contactContentRef.value) contactContentRef.value.classList.add('animate')
  })
  setTimeout(() => { window.dispatchEvent(new CustomEvent('smartContentChanged')) }, 500)
})
</script>

<style scoped>
/* NavBar */
.navbar { position: fixed; top: 0; width: 100%; background: rgba(10, 14, 39, 0.8); backdrop-filter: blur(20px); z-index: 1000; transition: all 0.3s ease; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.navbar.scrolled { background: rgba(10, 14, 39, 0.95); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }
.nav-container { max-width: 1400px; margin: 0 auto; padding: 0 30px; display: flex; justify-content: space-between; align-items: center; height: 70px; }
.logo { cursor: pointer; font-size: 1.8em; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; transition: transform 0.3s ease; }
.logo:hover { transform: scale(1.05); }
.logo-dot { color: #764ba2; }
.nav-menu { display: flex; list-style: none; gap: 40px; margin: 0; padding: 0; }
.nav-menu a { color: rgba(255, 255, 255, 0.8); text-decoration: none; font-weight: 500; position: relative; transition: color 0.3s ease; padding: 5px 0; }
.nav-menu a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, #667eea, #764ba2); transition: width 0.3s ease; }
.nav-menu a:hover, .nav-menu a.active { color: #fff; }
.nav-menu a:hover::after, .nav-menu a.active::after { width: 100%; }
.hamburger { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
.hamburger span { width: 25px; height: 3px; background: #fff; transition: all 0.3s ease; border-radius: 3px; }
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
@media (max-width: 768px) { .nav-menu { position: fixed; left: -100%; top: 70px; flex-direction: column; background: rgba(10, 14, 39, 0.98); width: 100%; padding: 30px; transition: 0.3s; backdrop-filter: blur(20px); border-top: 1px solid rgba(255, 255, 255, 0.1); } .nav-menu.active { left: 0; } .hamburger { display: flex; } }

/* Hero */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b4e 100%); padding: 0 30px; }
.particles-bg { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 1; }
.hero-content { max-width: 1400px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; position: relative; z-index: 2; }
.hero-text { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
.hero-text.animate { opacity: 1; transform: translateY(0); }
.greeting { font-size: 1.3em; color: rgba(255, 255, 255, 0.8); margin-bottom: 20px; animation-delay: 0.2s; }
.wave { display: inline-block; animation: wave 1s ease-in-out infinite; margin-right: 10px; }
@keyframes wave { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(20deg); } 75% { transform: rotate(-20deg); } }
.hero-name { font-size: 4.5em; font-weight: 800; margin: 20px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation-delay: 0.4s; }
.cursor-blink { animation: blink 1s infinite; color: #667eea; }
@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
.hero-subtitle { font-size: 2em; color: #667eea; margin: 20px 0; min-height: 60px; animation-delay: 0.6s; }
.typing-text { font-weight: 600; }
.hero-description { font-size: 1.2em; color: rgba(255, 255, 255, 0.7); margin: 30px 0; line-height: 1.8; animation-delay: 0.8s; }
.hero-buttons { display: flex; gap: 20px; margin: 40px 0; animation-delay: 1s; }
.btn { padding: 15px 35px; border-radius: 50px; border: none; font-size: 1.1em; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease; position: relative; overflow: hidden; }
.btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6); }
.btn-secondary { background: transparent; color: white; border: 2px solid rgba(255, 255, 255, 0.3); }
.btn-secondary:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.5); transform: translateY(-3px); }
.social-links { display: flex; gap: 20px; margin-top: 30px; animation-delay: 1.2s; }
.social-link { width: 50px; height: 50px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.3em; transition: all 0.3s ease; text-decoration: none; }
.social-link:hover { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transform: translateY(-5px) rotate(360deg); }
.hero-image { display: flex; justify-content: center; align-items: center; opacity: 0; transform: translateX(50px); transition: all 0.8s ease 0.3s; }
.hero-image.animate { opacity: 1; transform: translateX(0); }
.image-container { position: relative; width: 400px; height: 400px; }
.image-wrapper { position: relative; width: 100%; height: 100%; }
.profile-image { width: 300px; height: 300px; border-radius: 50%; background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%); display: flex; align-items: center; justify-content: center; font-size: 100px; color: rgba(255, 255, 255, 0.3); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 3px solid rgba(102, 126, 234, 0.5); animation: float 6s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translate(-50%, -50%) translateY(0px); } 50% { transform: translate(-50%, -50%) translateY(-20px); } }
.floating-elements { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }
.floating-element { position: absolute; width: 60px; height: 60px; border-radius: 15px; background: rgba(102, 126, 234, 0.2); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; font-size: 30px; color: #667eea; border: 1px solid rgba(102, 126, 234, 0.3); animation: orbit 20s linear infinite; }
.el1 { top: 10%; left: 10%; animation-delay: 0s; }
.el2 { top: 10%; right: 10%; animation-delay: -5s; }
.el3 { bottom: 10%; left: 10%; animation-delay: -10s; }
.el4 { bottom: 10%; right: 10%; animation-delay: -15s; }
@keyframes orbit { 0% { transform: rotate(0deg) translateX(150px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); } }
.scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; z-index: 2; color: rgba(255, 255, 255, 0.6); }
.mouse { width: 30px; height: 50px; border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 20px; position: relative; }
.wheel { width: 4px; height: 10px; background: rgba(255, 255, 255, 0.6); border-radius: 2px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); animation: scroll 2s infinite; }
@keyframes scroll { 0% { opacity: 1; transform: translateX(-50%) translateY(0); } 100% { opacity: 0; transform: translateX(-50%) translateY(15px); } }
.arrow { animation: bounce 2s infinite; }
@keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }
@media (max-width: 968px) { .hero-content { grid-template-columns: 1fr; text-align: center; } .hero-name { font-size: 3em; } .hero-subtitle { font-size: 1.5em; } .image-container { width: 300px; height: 300px; } .profile-image { width: 250px; height: 250px; font-size: 80px; } }

/* About */
.about-section { padding: 120px 0; background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%); position: relative; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 30px; }
.section-title { text-align: center; font-size: 3em; margin-bottom: 80px; position: relative; opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
.section-title.animate { opacity: 1; transform: translateY(0); }
.title-text { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.title-line { display: block; width: 100px; height: 4px; background: linear-gradient(90deg, #667eea, #764ba2); margin: 20px auto 0; border-radius: 2px; }
.about-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px; }
.about-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 40px; transition: all 0.4s ease; opacity: 0; transform: translateY(50px); }
.about-card.animate { opacity: 1; transform: translateY(0); }
.about-card:hover { transform: translateY(-10px); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3); }
.card-icon { font-size: 3em; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 20px; }
.about-card h3 { font-size: 1.8em; margin-bottom: 30px; color: #fff; }
.info-grid { display: grid; gap: 20px; }
.info-item { display: flex; align-items: center; gap: 15px; padding: 15px; background: rgba(255, 255, 255, 0.03); border-radius: 10px; transition: all 0.3s ease; }
.info-item:hover { background: rgba(255, 255, 255, 0.08); transform: translateX(10px); }
.info-item i { color: #667eea; font-size: 1.3em; width: 30px; }
.evaluation { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; }
.tag { padding: 10px 20px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%); border: 1px solid rgba(102, 126, 234, 0.5); color: #fff; border-radius: 25px; font-size: 0.95em; font-weight: 500; transition: all 0.3s ease; }
.tag:hover { transform: scale(1.1); background: linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%); }
@media (max-width: 768px) { .about-content { grid-template-columns: 1fr; } .section-title { font-size: 2em; } .about-card { padding: 30px; } }

/* Education */
.education-section { padding: 100px 0; background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%); position: relative; min-height: calc(100vh - 70px); }
.education-content { max-width: 1000px; margin: 0 auto; opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
.education-content.animate { opacity: 1; transform: translateY(0); }
.education-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; transition: all 0.4s ease; }
.education-card:hover { transform: translateY(-5px); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3); }
.education-header { display: flex; align-items: center; gap: 30px; padding: 40px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.education-icon { font-size: 4em; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.education-info h3 { font-size: 2.2em; margin-bottom: 10px; color: #fff; }
.education-detail { color: rgba(255, 255, 255, 0.8); margin-bottom: 5px; font-size: 1.1em; }
.education-major { font-weight: 600; color: #667eea; font-size: 1.2em; }
.education-body { padding: 40px; }
.education-time { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; color: rgba(255, 255, 255, 0.7); font-size: 1.1em; }
.education-time i { color: #667eea; }
.education-stats { display: flex; gap: 40px; margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.stat-item { display: flex; align-items: center; gap: 20px; flex: 1; padding: 25px; background: rgba(255, 255, 255, 0.03); border-radius: 15px; transition: all 0.3s ease; }
.stat-item:hover { background: rgba(255, 255, 255, 0.08); transform: translateY(-5px); }
.stat-icon { font-size: 2.5em; color: #667eea; }
.stat-content { display: flex; flex-direction: column; gap: 5px; }
.stat-label { color: rgba(255, 255, 255, 0.7); font-size: 0.95em; }
.stat-value { font-size: 2.2em; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.core-courses h4 { margin-bottom: 25px; color: #fff; font-size: 1.5em; display: flex; align-items: center; gap: 15px; }
.courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; max-height: 250px; overflow-y: auto; padding-right: 10px; }
.courses-grid::-webkit-scrollbar { width: 6px; }
.courses-grid::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 3px; }
.courses-grid::-webkit-scrollbar-thumb { background: rgba(102, 126, 234, 0.5); border-radius: 3px; }
.course-item { padding: 12px 15px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: space-between; gap: 12px; transition: all 0.3s ease; }
.course-item:hover { transform: translateX(5px); border-color: rgba(102, 126, 234, 0.5); background: rgba(102, 126, 234, 0.1); }
.course-name { color: rgba(255, 255, 255, 0.9); font-weight: 500; font-size: 0.95em; }
.course-grade { padding: 4px 10px; border-radius: 15px; font-weight: 600; font-size: 0.85em; min-width: 24px; text-align: center; }
.grade-a .course-grade { background: linear-gradient(135deg, #50c878 0%, #4CAF50 100%); color: white; }
.grade-b .course-grade { background: linear-gradient(135deg, #4a90e2 0%, #2196F3 100%); color: white; }
@media (max-width: 768px) { .section-title { font-size: 2em; } .education-header { flex-direction: column; text-align: center; } .education-stats { flex-direction: column; gap: 20px; } .courses-grid { grid-template-columns: 1fr; } }

/* Projects */
.projects-section { padding: 100px 0; background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%); min-height: calc(100vh - 70px); overflow-y: auto; max-height: calc(100vh - 70px); }
.pagination-controls { display: flex; justify-content: center; align-items: center; gap: 20px; margin-bottom: 40px; }
.page-btn { width: 40px; height: 40px; border: none; background: rgba(102, 126, 234, 0.2); color: #fff; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; }
.page-btn:hover:not(:disabled) { background: rgba(102, 126, 234, 0.4); transform: scale(1.1); }
.page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.page-info { color: rgba(255, 255, 255, 0.8); font-weight: 500; }
.projects-grid { display: flex; flex-direction: column; gap: 30px; }
.project-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; transition: all 0.4s ease; opacity: 0; transform: translateY(50px); }
.project-card.animate { opacity: 1; transform: translateY(0); }
.project-card:hover { transform: translateY(-10px); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4); }
.project-header { display: flex; align-items: center; gap: 25px; padding: 30px; color: white; }
.project-icon { font-size: 3em; opacity: 0.9; }
.project-title-section { flex: 1; }
.project-title-section h3 { font-size: 1.6em; margin-bottom: 15px; line-height: 1.4; }
.project-meta { display: flex; gap: 25px; flex-wrap: wrap; }
.project-role, .project-date { display: flex; align-items: center; gap: 8px; opacity: 0.9; font-size: 0.95em; }
.project-body { padding: 30px; }
.project-content h4 { color: #667eea; margin-bottom: 15px; font-size: 1.2em; display: flex; align-items: center; gap: 10px; }
.project-content p { line-height: 1.8; color: rgba(255, 255, 255, 0.8); margin-bottom: 25px; }
.project-responsibilities { list-style: none; padding-left: 0; margin-bottom: 25px; }
.project-responsibilities li { padding: 8px 0; padding-left: 25px; position: relative; color: rgba(255, 255, 255, 0.8); line-height: 1.7; }
.project-responsibilities li::before { content: '▸'; position: absolute; left: 0; color: #667eea; font-weight: bold; }
.achievement-stats { display: flex; gap: 30px; margin: 20px 0; flex-wrap: wrap; }
.stat-item.card { display: flex; align-items: center; gap: 15px; padding: 20px; background: rgba(255, 255, 255, 0.03); border-radius: 15px; flex: 1; min-width: 200px; }
.stat-icon { font-size: 2em; color: #667eea; }
.stat-value { display: block; font-size: 1.5em; font-weight: bold; color: #fff; margin-bottom: 5px; }
.stat-label { display: block; color: rgba(255, 255, 255, 0.7); font-size: 0.9em; }
.achievement-description { font-style: italic; color: rgba(255, 255, 255, 0.9); margin-top: 15px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 25px; }
.tag { padding: 8px 16px; background: rgba(102, 126, 234, 0.2); border: 1px solid rgba(102, 126, 234, 0.5); color: #fff; border-radius: 20px; font-size: 0.9em; font-weight: 500; transition: all 0.3s ease; }
.tag:hover { background: rgba(102, 126, 234, 0.4); transform: translateY(-2px); }
@media (max-width: 768px) { .section-title { font-size: 2em; } .project-header { flex-direction: column; text-align: center; } .project-meta { justify-content: center; } .achievement-stats { flex-direction: column; } .stat-item { min-width: auto; } }

/* Internship */
.internship-section { padding: 100px 0; background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%); min-height: calc(100vh - 70px); }
.internship-content { max-width: 1200px; margin: 0 auto; opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
.internship-content.animate { opacity: 1; transform: translateY(0); }
.internship-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; transition: all 0.4s ease; }
.internship-card:hover { transform: translateY(-10px); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4); }
.internship-header { display: flex; align-items: flex-start; gap: 25px; padding: 40px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; }
.internship-icon { font-size: 3em; opacity: 0.9; }
.internship-title-section { flex: 1; }
.internship-title-section h3 { font-size: 1.8em; margin-bottom: 20px; line-height: 1.4; }
.internship-meta { display: flex; gap: 30px; flex-wrap: wrap; }
.internship-role, .internship-date { display: flex; align-items: center; gap: 10px; opacity: 0.9; font-size: 0.95em; }
.internship-body { padding: 40px; }
.internship-content-section, .internship-achievements { margin-bottom: 35px; }
.internship-content-section h4, .internship-achievements h4 { color: #667eea; margin-bottom: 20px; font-size: 1.3em; display: flex; align-items: center; gap: 12px; }
.internship-content-section p { line-height: 1.9; color: rgba(255, 255, 255, 0.8); font-size: 1.05em; margin-bottom: 25px; }
.ml-models { margin-top: 30px; padding: 30px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(102, 126, 234, 0.2); border-radius: 15px; }
.ml-models h5 { color: #fff; margin-bottom: 25px; font-size: 1.2em; display: flex; align-items: center; gap: 12px; }
.ml-models h5 i { color: #667eea; }
.models-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; max-height: 300px; overflow-y: auto; padding-right: 10px; }
.models-grid::-webkit-scrollbar { width: 6px; }
.models-grid::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 3px; }
.models-grid::-webkit-scrollbar-thumb { background: rgba(102, 126, 234, 0.5); border-radius: 3px; }
.model-category { padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 15px; transition: all 0.3s ease; }
.model-category:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-5px); }
.model-category h6 { color: #fff; margin-bottom: 15px; font-size: 1.1em; }
.model-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.model-tag { padding: 6px 12px; background: rgba(102, 126, 234, 0.2); border: 1px solid rgba(102, 126, 234, 0.5); color: #fff; border-radius: 20px; font-size: 0.85em; font-weight: 500; transition: all 0.3s ease; }
.model-tag:hover { background: rgba(102, 126, 234, 0.4); transform: scale(1.05); }
.internship-achievements ul { list-style: none; padding-left: 0; margin-bottom: 25px; }
.internship-achievements li { padding: 12px 0; padding-left: 30px; position: relative; color: rgba(255, 255, 255, 0.8); line-height: 1.9; transition: all 0.3s ease; }
.internship-achievements li:hover { color: #fff; transform: translateX(5px); }
.internship-achievements li::before { content: '✓'; position: absolute; left: 0; color: #50c878; font-weight: bold; font-size: 1.2em; }
.achievement-stats { display: flex; gap: 30px; margin-top: 25px; flex-wrap: wrap; }
.achievement-item { display: flex; align-items: center; gap: 20px; padding: 25px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 15px; flex: 1; min-width: 220px; transition: all 0.3s ease; }
.achievement-item:hover { background: rgba(102, 126, 234, 0.1); border-color: rgba(102, 126, 234, 0.6); transform: translateY(-5px); }
.achievement-item i { font-size: 2.5em; color: #667eea; }
.achievement-value { display: block; font-size: 1.8em; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.achievement-label { display: block; color: rgba(255, 255, 255, 0.7); font-size: 0.85em; margin-top: 3px; }
.internship-tags { display: flex; flex-wrap: wrap; gap: 8px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
.internship-tags .tag { padding: 6px 12px; background: rgba(102, 126, 234, 0.2); border: 1px solid rgba(102, 126, 234, 0.5); color: #fff; border-radius: 15px; font-size: 0.85em; font-weight: 500; transition: all 0.3s ease; }
.internship-tags .tag:hover { background: rgba(102, 126, 234, 0.4); transform: translateY(-3px); }
@media (max-width: 768px) { .section-title { font-size: 2em; } .internship-header { flex-direction: column; } .models-grid { grid-template-columns: 1fr; } .achievement-stats { flex-direction: column; } }

/* Honors */
.honors-section { padding: 120px 0; background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%); }
.honors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; max-width: 1000px; margin: 0 auto; }
.honor-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 50px 40px; text-align: center; transition: all 0.4s ease; position: relative; overflow: hidden; opacity: 0; transform: translateY(50px); }
.honor-card.animate { opacity: 1; transform: translateY(0); }
.honor-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, #667eea, #764ba2, #f093fb); background-size: 200% 100%; animation: shimmer 3s linear infinite; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.honor-card:hover { transform: translateY(-15px) scale(1.02); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 25px 70px rgba(102, 126, 234, 0.4); }
.honor-shine { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent); transform: rotate(45deg); transition: all 0.6s; opacity: 0; }
.honor-card:hover .honor-shine { animation: shine 1s ease-in-out; }
@keyframes shine { 0% { top: -50%; left: -50%; opacity: 0; } 50% { opacity: 1; } 100% { top: 150%; left: 150%; opacity: 0; } }
.honor-icon { font-size: 4em; color: #ffd700; margin-bottom: 25px; position: relative; z-index: 1; filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); animation: float-icon 3s ease-in-out infinite; }
@keyframes float-icon { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.honor-card h3 { font-size: 1.5em; margin-bottom: 15px; color: #fff; position: relative; z-index: 1; }
.honor-level { color: #667eea; font-weight: 600; margin-bottom: 15px; font-size: 1.2em; position: relative; z-index: 1; }
.honor-date { color: rgba(255, 255, 255, 0.7); margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; position: relative; z-index: 1; }
.honor-date i { color: #667eea; }
.honor-note { color: rgba(255, 255, 255, 0.6); font-size: 0.95em; font-style: italic; margin-top: 10px; position: relative; z-index: 1; }
@media (max-width: 768px) { .section-title { font-size: 2em; } .honors-grid { grid-template-columns: 1fr; gap: 30px; } .honor-card { padding: 40px 30px; } }

/* Contact */
.contact-section { padding: 120px 0; background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%); }
.contact-content { max-width: 700px; margin: 0 auto; opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
.contact-content.animate { opacity: 1; transform: translateY(0); }
.contact-card { display: flex; flex-direction: column; gap: 25px; }
.contact-item { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 35px; display: flex; align-items: center; gap: 25px; cursor: pointer; transition: all 0.4s ease; position: relative; overflow: hidden; }
.contact-item::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent); transition: left 0.5s; }
.contact-item:hover::before { left: 100%; }
.contact-item:hover { transform: translateX(10px); border-color: rgba(102, 126, 234, 0.5); box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3); }
.contact-icon { width: 70px; height: 70px; border-radius: 15px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); display: flex; align-items: center; justify-content: center; font-size: 2em; color: #667eea; flex-shrink: 0; transition: all 0.3s ease; }
.contact-item:hover .contact-icon { transform: scale(1.1) rotate(5deg); background: linear-gradient(135deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.4) 100%); }
.contact-info { flex: 1; }
.contact-info h4 { color: #fff; margin-bottom: 8px; font-size: 1.2em; }
.contact-info p { color: rgba(255, 255, 255, 0.8); font-size: 1.1em; transition: color 0.3s ease; }
.contact-item:hover .contact-info p { color: #667eea; }
.contact-action { color: rgba(255, 255, 255, 0.5); font-size: 1.2em; transition: all 0.3s ease; }
.contact-item:hover .contact-action { color: #667eea; transform: translateX(5px); }
.contact-footer { text-align: center; margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
.footer-text { color: rgba(255, 255, 255, 0.7); font-size: 1.1em; margin: 10px 0; font-weight: 500; }
.footer-text:first-child { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
@media (max-width: 768px) { .section-title { font-size: 2em; } .contact-item { padding: 25px; } .contact-icon { width: 60px; height: 60px; font-size: 1.5em; } }

/* Footer */
.footer { background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%); padding: 40px 0; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); }
.footer .container { max-width: 1400px; margin: 0 auto; padding: 0 30px; }
.footer-content p { margin: 10px 0; color: rgba(255, 255, 255, 0.7); }
.footer-note { font-size: 0.9em; }
.pulse { color: #e74c3c; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
</style>

