<template>
  <section class="internship-section section" id="internship">
    <div class="container">
      <h2 class="section-title text-content" ref="titleRef">
        <span class="title-text">实训经历</span>
        <span class="title-line"></span>
      </h2>
      <div class="internship-content" ref="contentRef">
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
.internship-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1f3a 0%, #0a0e27 100%);
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

.internship-content {
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.internship-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.internship-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.internship-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4);
}

.internship-header {
  display: flex;
  align-items: flex-start;
  gap: 25px;
  padding: 40px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.internship-icon {
  font-size: 3em;
  opacity: 0.9;
}

.internship-title-section {
  flex: 1;
}

.internship-title-section h3 {
  font-size: 1.8em;
  margin-bottom: 20px;
  line-height: 1.4;
}

.internship-meta {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.internship-role,
.internship-date {
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0.9;
  font-size: 0.95em;
}

.internship-body {
  padding: 40px;
}

.internship-content-section,
.internship-achievements {
  margin-bottom: 35px;
}

.internship-content-section h4,
.internship-achievements h4 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  gap: 12px;
}

.internship-content-section h4 i,
.internship-achievements h4 i {
  font-size: 0.9em;
}

.internship-content-section p {
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05em;
  margin-bottom: 25px;
}

.ml-models {
  margin-top: 30px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 15px;
}

.ml-models h5 {
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 12px;
}

.ml-models h5 i {
  color: #667eea;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.models-grid::-webkit-scrollbar {
  width: 6px;
}

.models-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.models-grid::-webkit-scrollbar-thumb {
  background: rgba(102, 126, 234, 0.5);
  border-radius: 3px;
}

.model-category {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.model-category:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
}

.model-category h6 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.model-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.model-tag {
  padding: 6px 12px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.5);
  color: #fff;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 500;
  transition: all 0.3s ease;
}

.model-tag:hover {
  background: rgba(102, 126, 234, 0.4);
  transform: scale(1.05);
}

.internship-achievements ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 25px;
}

.internship-achievements li {
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.9;
  transition: all 0.3s ease;
}

.internship-achievements li:hover {
  color: #fff;
  transform: translateX(5px);
}

.internship-achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #50c878;
  font-weight: bold;
  font-size: 1.2em;
}

.achievement-stats {
  display: flex;
  gap: 30px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 15px;
  flex: 1;
  min-width: 220px;
  transition: all 0.3s ease;
}

.achievement-item:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.6);
  transform: translateY(-5px);
}

.achievement-item i {
  font-size: 2.5em;
  color: #667eea;
}

.achievement-value {
  display: block;
  font-size: 1.8em;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.achievement-label {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85em;
  margin-top: 3px;
}

.internship-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tag {
  padding: 6px 12px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.5);
  color: #fff;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(102, 126, 234, 0.4);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }

  .internship-header {
    flex-direction: column;
  }

  .models-grid {
    grid-template-columns: 1fr;
  }

  .achievement-stats {
    flex-direction: column;
  }
}
</style>

