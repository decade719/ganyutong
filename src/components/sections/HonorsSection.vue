<template>
  <section class="honors-section" id="honors">
    <div class="container">
      <h2 class="section-title" ref="titleRef">
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const titleRef = ref(null)
const honorRefs = ref([])

const honors = [
  {
    icon: 'fas fa-trophy',
    title: '2023年全国大学生英语竞赛',
    level: '国家级三等奖',
    date: '2023.06'
  },
  {
    icon: 'fas fa-medal',
    title: '国家励志奖学金',
    level: '国家级奖学金',
    date: '2023.09; 2024.09',
    note: '（两次获得）'
  },
  {
    icon: 'fas fa-futbol',
    title: '阿森纳铁杆球迷认证',
    level: '终身荣誉球迷',
    date: '2015 - Present',
    note: '每周必看比赛，COYG!'
  },
  {
    icon: 'fas fa-film',
    title: '漫威电影宇宙观影大师',
    level: 'MCU Completionist',
    date: '2008 - Present',
    note: '看过所有MCU电影，钢铁侠铁粉'
  }
]

onMounted(() => {
  useIntersectionObserver(titleRef, () => {
    if (titleRef.value) {
      titleRef.value.classList.add('animate')
    }
  })
  
  honorRefs.value.forEach(card => {
    if (card) {
      useIntersectionObserver(card, () => {
        card.classList.add('animate')
      })
    }
  })
  
  // 触发智能缩放检测
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('smartContentChanged'))
  }, 500)
})
</script>

<style scoped>
.honors-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%);
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

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.honor-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
}

.honor-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.honor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.honor-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.4);
}

.honor-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s;
  opacity: 0;
}

.honor-card:hover .honor-shine {
  animation: shine 1s ease-in-out;
}

@keyframes shine {
  0% {
    top: -50%;
    left: -50%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 150%;
    left: 150%;
    opacity: 0;
  }
}

.honor-icon {
  font-size: 4em;
  color: #ffd700;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
  animation: float-icon 3s ease-in-out infinite;
}

@keyframes float-icon {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.honor-card h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #fff;
  position: relative;
  z-index: 1;
}

.honor-level {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1.2em;
  position: relative;
  z-index: 1;
}

.honor-date {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.honor-date i {
  color: #667eea;
}

.honor-note {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95em;
  font-style: italic;
  margin-top: 10px;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }

  .honors-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .honor-card {
    padding: 40px 30px;
  }
}
</style>

