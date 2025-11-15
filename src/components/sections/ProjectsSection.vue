<template>
  <section class="projects-section section" id="projects">
    <div class="container">
      <h2 class="section-title text-content" ref="titleRef">
        <span class="title-text">项目经历</span>
        <span class="title-line"></span>
      </h2>
      
      <!-- 简化的分页控制 -->
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const titleRef = ref(null)
const projectRefs = ref([])
const currentPage = ref(1)
const itemsPerPage = computed(() => {
  // 根据屏幕高度动态调整每页显示的项目数
  const screenHeight = window.innerHeight
  return screenHeight <= 720 ? 1 : 2 // 小屏幕显示1个，大屏幕显示2个
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

// 分页计算
const totalPages = computed(() => Math.ceil(projects.length / itemsPerPage))
const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return projects.slice(start, end)
})

onMounted(() => {
  useIntersectionObserver(titleRef, () => {
    if (titleRef.value) {
      titleRef.value.classList.add('animate')
    }
  })
  
  projectRefs.value.forEach(card => {
    if (card) {
      useIntersectionObserver(card, () => {
        card.classList.add('animate')
      })
    }
  })
})
</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%);
  min-height: calc(100vh - 70px);
  overflow-y: auto;
  max-height: calc(100vh - 70px);
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

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(102, 126, 234, 0.2);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover:not(:disabled) {
  background: rgba(102, 126, 234, 0.4);
  transform: scale(1.1);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-info {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(50px);
}

.project-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 30px 80px rgba(102, 126, 234, 0.4);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  color: white;
}

.project-icon {
  font-size: 3em;
  opacity: 0.9;
}

.project-title-section {
  flex: 1;
}

.project-title-section h3 {
  font-size: 1.6em;
  margin-bottom: 15px;
  line-height: 1.4;
}

.project-meta {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.project-role,
.project-date {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.9;
  font-size: 0.95em;
}

.project-body {
  padding: 30px;
}

.project-content h4 {
  color: #667eea;
  margin-bottom: 15px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-content p {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
}

.project-responsibilities {
  list-style: none;
  padding-left: 0;
  margin-bottom: 25px;
}

.project-responsibilities li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.project-responsibilities li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.achievement-stats {
  display: flex;
  gap: 30px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  flex: 1;
  min-width: 200px;
}

.stat-icon {
  font-size: 2em;
  color: #667eea;
}

.stat-value {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.stat-label {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
}

.achievement-description {
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 15px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}

.tag {
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.5);
  color: #fff;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }
  
  .project-header {
    flex-direction: column;
    text-align: center;
  }
  
  .project-meta {
    justify-content: center;
  }
  
  .achievement-stats {
    flex-direction: column;
  }
  
  .stat-item {
    min-width: auto;
  }
}
</style>

