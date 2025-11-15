# 甘语桐个人网站 - Vue 3版本

一个使用Vue 3构建的现代化、酷炫的个人简历展示网站。

## ✨ 特性

- 🎨 **现代化设计** - 深色主题，渐变效果，玻璃态风格
- 🌟 **酷炫动画** - 粒子背景、滚动动画、悬浮效果
- 📱 **完全响应式** - 完美适配各种设备
- ⚡ **Vue 3** - 使用最新的Vue 3 Composition API
- 🚀 **Vite构建** - 快速的开发体验和构建速度
- 🎯 **单页应用** - 流畅的滚动导航体验

## 🛠️ 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vue Router** - 路由管理
- **Vite** - 下一代前端构建工具
- **Particles.js** - 粒子背景效果
- **Font Awesome** - 图标库
- **CSS3** - 现代CSS特性（Grid、Flexbox、动画）

## 📦 安装

```bash
# 安装依赖
npm install
```

## 🚀 开发

```bash
# 启动开发服务器
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动

## 🏗️ 构建

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🌐 部署到互联网

### 快速部署（推荐：Vercel）

1. **推送代码到GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. **在Vercel部署**
   - 访问 https://vercel.com
   - 使用GitHub登录
   - 导入你的仓库
   - 点击部署即可！

3. **自动更新**
   - 修改代码后执行 `git push`
   - Vercel会自动重新部署（1-2分钟）

📖 **详细部署指南**：查看 `部署指南.md` 文件

### 其他部署平台

- **Netlify**: 同样简单，支持自动部署
- **GitHub Pages**: 免费但需要配置
- **其他**: 查看 `DEPLOY.md` 了解详情

## 📁 项目结构

```
个人网站/
├── index.html              # HTML入口文件
├── package.json            # 项目配置和依赖
├── vite.config.js          # Vite配置
├── src/
│   ├── main.js            # 应用入口
│   ├── App.vue            # 根组件
│   ├── style.css          # 全局样式
│   ├── router/
│   │   └── index.js       # 路由配置
│   ├── views/
│   │   └── Home.vue       # 主页视图
│   ├── components/
│   │   ├── NavBar.vue     # 导航栏组件
│   │   ├── Footer.vue     # 页脚组件
│   │   ├── sections/      # 各个区块组件
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── EducationSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   ├── InternshipSection.vue
│   │   │   ├── HonorsSection.vue
│   │   │   └── ContactSection.vue
│   │   └── composables/
│   │       └── useIntersectionObserver.js
└── README.md              # 项目说明
```

## 🎨 主要功能

### 1. 首页（Hero Section）
- 粒子背景动画
- 打字机效果
- 浮动图标动画
- 滚动指示器

### 2. 关于我（About Section）
- 个人信息展示
- 自我评价标签
- 卡片悬浮效果

### 3. 教育背景（Education Section）
- 教育信息展示
- GPA和排名统计
- 核心课程网格布局

### 4. 项目经历（Projects Section）
- 项目卡片展示
- 技术标签
- 成就数据可视化

### 5. 实训经历（Internship Section）
- 实训内容详情
- 机器学习模型展示
- 项目成果统计

### 6. 荣誉获奖（Honors Section）
- 奖杯图标动画
- 卡片发光效果

### 7. 联系方式（Contact Section）
- 联系信息卡片
- 点击交互效果

## 🎯 自定义

### 修改主题颜色

在组件的 `<style>` 部分修改CSS变量：

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

### 修改内容

在各个组件文件中直接修改数据：

- `HeroSection.vue` - 修改首页内容
- `AboutSection.vue` - 修改个人信息
- `ProjectsSection.vue` - 修改项目信息
- 等等...

## 🌐 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📝 注意事项

- 粒子背景效果需要加载 `particles.js` 库
- 确保网络连接以加载Font Awesome图标
- 建议使用现代浏览器以获得最佳体验

## 📄 许可证

个人项目，保留所有权利。

## 👨‍💻 作者

甘语桐

---

Made with ❤️ using Vue 3
