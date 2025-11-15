<template>
  <div class="home" :class="['scale-section', scaleClasses]">
    <HeroSection id="home" />
    <AboutSection id="about" />
    <EducationSection id="education" />
    <ProjectsSection id="projects" />
    <InternshipSection id="internship" />
    <HonorsSection id="honors" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import EducationSection from '../components/sections/EducationSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import InternshipSection from '../components/sections/InternshipSection.vue'
import HonorsSection from '../components/sections/HonorsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import { useScrollSnap } from '../composables/useScrollSnap.js'
import { useSimpleScale } from '../composables/useSimpleScale.js'

// 启用滚动切换功能
useScrollSnap()

// 启用简洁缩放
const { scaleClasses } = useSimpleScale()
</script>

<style scoped>
.home {
  padding-top: 70px;
}
</style>

