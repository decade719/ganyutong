#!/bin/bash
# 阿里云OSS自动部署脚本 (Bash)
# 使用方法：chmod +x deploy-aliyun.sh && ./deploy-aliyun.sh
# 首次使用前，请先配置 ossutil：ossutil config

# 配置变量（修改为你的配置）
BUCKET_NAME="${1:-}"  # 从命令行参数获取，或手动设置
ENDPOINT="${2:-oss-cn-hangzhou.aliyuncs.com}"  # 默认杭州

echo "🚀 开始部署到阿里云OSS..."
echo ""

# 检查配置
if [ -z "$BUCKET_NAME" ]; then
    echo "⚠️  未指定Bucket名称"
    read -p "请输入你的Bucket名称: " BUCKET_NAME
fi

if [ -z "$BUCKET_NAME" ]; then
    echo "❌ Bucket名称不能为空"
    exit 1
fi

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：未找到 package.json，请确保在项目根目录运行此脚本"
    exit 1
fi

# 检查 ossutil 是否安装
if ! command -v ossutil &> /dev/null; then
    echo "❌ 未找到 ossutil 命令"
    echo "请先安装 ossutil："
    echo "  下载: wget http://gosspublic.alicdn.com/ossutil/1.7.14/ossutil64"
    echo "  配置: ossutil config"
    exit 1
fi

# 检查 Git 状态（可选）
echo "📋 检查项目状态..."
if git status --porcelain 2>/dev/null | grep -q .; then
    echo "⚠️  检测到未提交的更改"
    read -p "是否先提交这些更改？(y/n): " response
    if [ "$response" = "y" ] || [ "$response" = "Y" ]; then
        read -p "请输入提交信息（直接回车使用默认信息）: " commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="更新网站内容"
        fi
        git add .
        git commit -m "$commit_msg"
        echo "✅ 代码已提交"
    fi
fi

# 检查依赖
echo ""
echo "📦 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "安装依赖中..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
fi

# 构建项目
echo ""
echo "🏗️  构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

if [ ! -d "dist" ]; then
    echo "❌ 构建失败：未找到 dist 目录"
    exit 1
fi

echo "✅ 构建成功！"
echo ""

# 上传到OSS
echo "📤 上传文件到OSS..."
echo "  Bucket: $BUCKET_NAME"
echo "  Endpoint: $ENDPOINT"
echo ""

OSS_PATH="oss://$BUCKET_NAME/"
ossutil cp -r dist/ $OSS_PATH --update

if [ $? -eq 0 ]; then
    echo ""
    echo "============================================================"
    echo "✅ 部署成功！"
    echo "============================================================"
    echo ""
    echo "🌐 访问地址："
    WEBSITE_URL="https://$BUCKET_NAME.$ENDPOINT"
    echo "   $WEBSITE_URL"
    echo ""
    echo "💡 提示："
    echo "   - 如果这是首次部署，请确保已在OSS控制台开启'静态网站托管'"
    echo "   - 确保404页设置为 index.html（SPA应用必需）"
    echo "   - 如果使用自定义域名，请在OSS控制台绑定域名"
    echo ""
else
    echo ""
    echo "❌ 上传失败！"
    echo ""
    echo "可能的原因："
    echo "  1. ossutil 未正确配置，请运行: ossutil config"
    echo "  2. Bucket名称错误或不存在"
    echo "  3. 没有访问权限"
    echo "  4. 网络连接问题"
    echo ""
    exit 1
fi

