# Gitee Pages 自动部署脚本 (PowerShell)
# 使用方法：在 PowerShell 中运行 .\deploy.ps1

Write-Host "🚀 开始部署到 Gitee Pages..." -ForegroundColor Green
Write-Host ""

# 检查是否在正确的目录
if (-not (Test-Path "package.json")) {
    Write-Host "❌ 错误：未找到 package.json，请确保在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查 Git 状态
Write-Host "📋 检查 Git 状态..." -ForegroundColor Cyan
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  检测到未提交的更改：" -ForegroundColor Yellow
    Write-Host $gitStatus
    $response = Read-Host "是否先提交这些更改？(y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        $commitMsg = Read-Host "请输入提交信息（直接回车使用默认信息）"
        if ([string]::IsNullOrWhiteSpace($commitMsg)) {
            $commitMsg = "更新网站内容"
        }
        git add .
        git commit -m $commitMsg
        Write-Host "✅ 代码已提交" -ForegroundColor Green
    }
}

# 检查依赖
Write-Host ""
Write-Host "📦 检查依赖..." -ForegroundColor Cyan
if (-not (Test-Path "node_modules")) {
    Write-Host "安装依赖中..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 依赖安装失败" -ForegroundColor Red
        exit 1
    }
}

# 构建项目
Write-Host ""
Write-Host "🏗️  构建项目..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist")) {
    Write-Host "❌ 构建失败：未找到 dist 目录" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host ""

# 检查 Gitee 远程仓库
Write-Host "🔍 检查远程仓库配置..." -ForegroundColor Cyan
$giteeRemote = git remote get-url gitee 2>$null
if (-not $giteeRemote) {
    Write-Host "❌ 未找到 gitee 远程仓库" -ForegroundColor Red
    Write-Host "请先添加 Gitee 远程仓库：" -ForegroundColor Yellow
    Write-Host "  git remote add gitee https://gitee.com/你的用户名/仓库名.git" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Gitee 远程仓库: $giteeRemote" -ForegroundColor Green
Write-Host ""

# 推送代码到 Gitee
Write-Host "📤 推送代码到 Gitee..." -ForegroundColor Cyan
git push gitee main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 代码推送失败" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 代码已推送到 Gitee" -ForegroundColor Green
Write-Host ""

# 显示后续步骤
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "✅ 本地部署准备完成！" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 接下来的步骤（需要在 Gitee 网页上操作）：" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. 访问你的 Gitee 仓库：" -ForegroundColor White
Write-Host "   https://gitee.com/yutong719/personal-website" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. 启用 Gitee Pages：" -ForegroundColor White
Write-Host "   - 点击仓库页面顶部的 '服务' 菜单" -ForegroundColor Gray
Write-Host "   - 选择 'Gitee Pages'" -ForegroundColor Gray
Write-Host "   - 如果没有看到，需要先进行实名认证" -ForegroundColor Gray
Write-Host ""
Write-Host "3. 配置部署设置：" -ForegroundColor White
Write-Host "   - 部署分支：选择 'main'" -ForegroundColor Gray
Write-Host "   - 部署目录：填写 'dist'" -ForegroundColor Gray
Write-Host "   - 点击 '启动' 或 '更新'" -ForegroundColor Gray
Write-Host ""
Write-Host "4. 等待部署完成（通常 1-2 分钟）" -ForegroundColor White
Write-Host ""
Write-Host "5. 部署成功后，访问地址格式为：" -ForegroundColor White
Write-Host "   https://yutong719.gitee.io/personal-website" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 提示：如果使用 Gitee Go 自动部署，可以配置 CI/CD 实现自动构建和部署" -ForegroundColor Yellow
Write-Host ""

