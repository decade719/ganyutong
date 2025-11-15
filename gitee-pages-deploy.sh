#!/bin/bash
# Gitee Pages 手动部署脚本
# 使用方法：bash gitee-pages-deploy.sh

echo "🚀 开始部署到 Gitee Pages..."

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 构建项目
echo "🏗️  构建项目..."
npm run build

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "❌ 构建失败！dist 目录不存在"
    exit 1
fi

echo "✅ 构建成功！"
echo ""
echo "📝 接下来的步骤："
echo "1. 访问你的 Gitee 仓库页面"
echo "2. 点击 '服务' -> 'Gitee Pages'"
echo "3. 设置部署目录为 'dist'"
echo "4. 点击 '启动' 或 '更新'"
echo ""
echo "或者使用以下命令推送代码到 Gitee："
echo "  git add ."
echo "  git commit -m '更新网站'"
echo "  git push"
echo ""

