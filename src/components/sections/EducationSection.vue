<template>
  <section class="education-section section" id="education">
    <div class="container">
      <h2 class="section-title text-content" ref="titleRef">
        <span class="title-text">教育背景</span>
        <span class="title-line"></span>
      </h2>
      <div class="education-content" ref="contentRef">
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const titleRef = ref(null)
const contentRef = ref(null)

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
})
</script>

<style scoped>
.education-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%);
  position: relative;
  min-height: calc(100vh - 70px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.section-title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 60px;
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

.education-content {
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.education-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.education-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.education-header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.education-icon {
  font-size: 4em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.education-info h3 {
  font-size: 2.2em;
  margin-bottom: 10px;
  color: #fff;
}

.education-detail {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
  font-size: 1.1em;
}

.education-major {
  font-weight: 600;
  color: #667eea;
  font-size: 1.2em;
}

.education-body {
  padding: 40px;
}

.education-time {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1em;
}

.education-time i {
  color: #667eea;
}

.education-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 25px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2.5em;
  color: #667eea;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95em;
}

.stat-value {
  font-size: 2.2em;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.core-courses h4 {
  margin-bottom: 25px;
  color: #fff;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 15px;
}

.core-courses h4 i {
  color: #667eea;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 10px;
}

.courses-grid::-webkit-scrollbar {
  width: 6px;
}

.courses-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.courses-grid::-webkit-scrollbar-thumb {
  background: rgba(102, 126, 234, 0.5);
  border-radius: 3px;
}

.course-item {
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.3s ease;
}

.course-item:hover {
  transform: translateX(5px);
  border-color: rgba(102, 126, 234, 0.5);
  background: rgba(102, 126, 234, 0.1);
}

.course-name {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95em;
}

.course-grade {
  padding: 4px 10px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.85em;
  min-width: 24px;
  text-align: center;
}

.grade-a .course-grade {
  background: linear-gradient(135deg, #50c878 0%, #4CAF50 100%);
  color: white;
}

.grade-b .course-grade {
  background: linear-gradient(135deg, #4a90e2 0%, #2196F3 100%);
  color: white;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }

  .education-header {
    flex-direction: column;
    text-align: center;
  }

  .education-stats {
    flex-direction: column;
    gap: 20px;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>

