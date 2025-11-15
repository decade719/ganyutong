#!/bin/bash

# 快速部署脚本
echo "🚀 开始部署个人网站..."

# 检查是否已初始化Git
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
fi

# 添加所有文件
echo "📝 添加文件到Git..."
git add .

# 提交
echo "💾 提交更改..."
read -p "请输入提交信息: " commit_message
git commit -m "${commit_message:-更新网站}"

# 检查是否已有远程仓库
if ! git remote | grep -q origin; then
    echo "🔗 设置GitHub远程仓库..."
    read -p "请输入GitHub仓库地址: " repo_url
    git remote add origin "$repo_url"
fi

# 推送
echo "🚀 推送到GitHub..."
git branch -M main
git push -u origin main

echo "✅ 完成！代码已推送到GitHub"
echo "📌 现在去 https://vercel.com 导入项目即可自动部署！"


