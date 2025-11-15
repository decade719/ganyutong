<template>
  <section class="about-section section" id="about">
    <div class="container">
      <h2 class="section-title text-content" ref="titleRef">
        <span class="title-text">关于我</span>
        <span class="title-line"></span>
      </h2>
      <div class="about-content">
        <div 
          class="about-card card" 
          v-for="(card, index) in cards" 
          :key="index"
          :style="{ animationDelay: `${index * 0.2}s` }"
          ref="cardRefs"
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const titleRef = ref(null)
const cardRefs = ref([])

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
  useIntersectionObserver(titleRef, () => {
    if (titleRef.value) {
      titleRef.value.classList.add('animate')
    }
  })
  
  cardRefs.value.forEach(card => {
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
.about-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%);
  position: relative;
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

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.about-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(50px);
}

.about-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.about-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.card-icon {
  font-size: 3em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
}

.about-card h3 {
  font-size: 1.8em;
  margin-bottom: 30px;
  color: #fff;
}

.info-grid {
  display: grid;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(10px);
}

.info-item i {
  color: #667eea;
  font-size: 1.3em;
  width: 30px;
}

.evaluation {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
}

.tag {
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border: 1px solid rgba(102, 126, 234, 0.5);
  color: #fff;
  border-radius: 25px;
  font-size: 0.95em;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%);
}

.interests .tag {
  background: linear-gradient(135deg, rgba(239, 1, 7, 0.3) 0%, rgba(255, 165, 0, 0.3) 100%) !important;
  border: 1px solid rgba(239, 1, 7, 0.6) !important;
  color: #fff !important;
  font-weight: 600 !important;
}

.interests .tag:hover {
  background: linear-gradient(135deg, rgba(239, 1, 7, 0.5) 0%, rgba(255, 165, 0, 0.5) 100%) !important;
  border-color: rgba(239, 1, 7, 0.8) !important;
}

/* 阿森纳主题的特殊标签 */
.interests .tag:nth-child(1) {
  background: linear-gradient(135deg, rgba(239, 1, 7, 0.4) 0%, rgba(255, 165, 0, 0.4) 100%) !important;
  border-color: #EF0107 !important;
  box-shadow: 0 0 15px rgba(239, 1, 7, 0.3) !important;
}

.interests .tag:nth-child(2) {
  background: linear-gradient(135deg, rgba(0, 114, 255, 0.4) 0%, rgba(255, 0, 0, 0.4) 100%) !important;
  border-color: #0072FF !important;
  box-shadow: 0 0 15px rgba(0, 114, 255, 0.3) !important;
}

.interests .tag:nth-child(3) {
  background: linear-gradient(135deg, rgba(0, 255, 65, 0.4) 0%, rgba(0, 128, 0, 0.4) 100%) !important;
  border-color: #00FF41 !important;
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3) !important;
}

.interests .tag:nth-child(4) {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.4) 0%, rgba(255, 140, 0, 0.4) 100%) !important;
  border-color: #FFD700 !important;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3) !important;
}

.about-text {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2em;
  }

  .about-card {
    padding: 30px;
  }
}
</style>

