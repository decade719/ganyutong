# 网站部署指南

## 🚀 推荐部署方案

### 方案一：Vercel（推荐，最简单）

**优点：**
- 完全免费
- 自动部署（GitHub推送即自动更新）
- 全球CDN加速
- 支持自定义域名

**步骤：**

1. **将代码推送到GitHub**
   ```bash
   # 初始化Git仓库
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit"
   
   # 在GitHub创建新仓库，然后连接
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. **部署到Vercel**
   - 访问 https://vercel.com
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 导入你的GitHub仓库
   - 框架预设选择 "Vue"
   - 点击 "Deploy"
   - 完成！网站会自动部署并获得一个免费域名（如：your-site.vercel.app）

3. **后续更新**
   - 修改代码后，推送到GitHub：
     ```bash
     git add .
     git commit -m "更新内容"
     git push
     ```
   - Vercel会自动检测到更新并重新部署（通常1-2分钟完成）

---

### 方案二：Netlify（同样简单）

**步骤：**

1. **推送到GitHub**（同方案一）

2. **部署到Netlify**
   - 访问 https://www.netlify.com
   - 使用GitHub账号登录
   - 点击 "Add new site" -> "Import an existing project"
   - 选择你的GitHub仓库
   - 构建设置：
     - Build command: `npm run build`
     - Publish directory: `dist`
   - 点击 "Deploy site"
   - 完成！

3. **后续更新**
   - 同Vercel，推送代码到GitHub即可自动部署

---

### 方案三：GitHub Pages（免费但需要配置）

**步骤：**

1. **修改vite.config.js**，添加base路径：
   ```js
   export default defineConfig({
     plugins: [vue()],
     base: '/仓库名/',
     // ...其他配置
   })
   ```

2. **创建GitHub Actions工作流**
   - 在项目中创建 `.github/workflows/deploy.yml`
   - 使用下面提供的配置

3. **推送到GitHub**

4. **启用GitHub Pages**
   - 仓库 Settings -> Pages
   - Source选择 "GitHub Actions"

---

## 📝 部署配置文件

### GitHub Actions自动部署（GitHub Pages）

创建文件：`.github/workflows/deploy.yml`


