#!/bin/bash

# 个人网站部署脚本
# 作者：YT. Gan
# 功能：自动化构建和部署Vue项目到生产服务器

echo "🚀 开始部署个人网站..."

# 1. 安装依赖
echo "📦 安装项目依赖..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

# 2. 构建项目
echo "🔨 构建生产版本..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ 项目构建失败"
    exit 1
fi

# 3. 备份旧版本（如果存在）
if [ -d "/var/www/personal-website-backup" ]; then
    echo "🗄️ 删除旧备份..."
    rm -rf /var/www/personal-website-backup
fi

if [ -d "/var/www/personal-website" ]; then
    echo "💾 备份当前版本..."
    mv /var/www/personal-website /var/www/personal-website-backup
fi

# 4. 复制新构建的文件
echo "📂 部署新构建的文件..."
cp -r dist /var/www/personal-website

# 5. 设置正确的权限
echo "🔒 设置文件权限..."
chown -R www-data:www-data /var/www/personal-website
chmod -R 755 /var/www/personal-website

# 6. 重启Nginx服务
echo "🔄 重启Nginx服务..."
systemctl restart nginx
if [ $? -ne 0 ]; then
    echo "❌ Nginx重启失败"
    exit 1
fi

echo "✅ 部署完成！网站已成功上线！"
echo "🌐 请访问你的域名查看效果"

# 可选：清理旧备份（7天后）
echo "🧹 计划清理旧备份..."
(sleep 604800 && rm -rf /var/www/personal-website-backup) &