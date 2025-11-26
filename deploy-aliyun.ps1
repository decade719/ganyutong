# 阿里云OSS自动部署脚本 (PowerShell)
# 使用方法：在 PowerShell 中运行 .\deploy-aliyun.ps1
# 首次使用前，请先配置 ossutil：ossutil config

param(
    [string]$BucketName = "",
    [string]$Endpoint = "oss-cn-hangzhou.aliyuncs.com"
)

Write-Host "🚀 开始部署到阿里云OSS..." -ForegroundColor Green
Write-Host ""

# 检查配置
if ([string]::IsNullOrWhiteSpace($BucketName)) {
    Write-Host "⚠️  未指定Bucket名称" -ForegroundColor Yellow
    $BucketName = Read-Host "请输入你的Bucket名称"
}

if ([string]::IsNullOrWhiteSpace($BucketName)) {
    Write-Host "❌ Bucket名称不能为空" -ForegroundColor Red
    exit 1
}

# 检查是否在正确的目录
if (-not (Test-Path "package.json")) {
    Write-Host "❌ 错误：未找到 package.json，请确保在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查 ossutil 是否安装
$ossutilCmd = "ossutil"
try {
    $null = Get-Command $ossutilCmd -ErrorAction Stop
} catch {
    Write-Host "❌ 未找到 ossutil 命令" -ForegroundColor Red
    Write-Host "请先安装 ossutil：" -ForegroundColor Yellow
    Write-Host "  Windows: 下载 https://help.aliyun.com/document_detail/120075.html" -ForegroundColor Gray
    Write-Host "  配置: ossutil config" -ForegroundColor Gray
    exit 1
}

# 检查 Git 状态（可选）
Write-Host "📋 检查项目状态..." -ForegroundColor Cyan
$gitStatus = git status --porcelain 2>$null
if ($gitStatus) {
    Write-Host "⚠️  检测到未提交的更改" -ForegroundColor Yellow
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

# 上传到OSS
Write-Host "📤 上传文件到OSS..." -ForegroundColor Cyan
Write-Host "  Bucket: $BucketName" -ForegroundColor Gray
Write-Host "  Endpoint: $Endpoint" -ForegroundColor Gray
Write-Host ""

$ossPath = "oss://$BucketName/"
ossutil cp -r dist/ $ossPath --update

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=" * 60 -ForegroundColor Green
    Write-Host "✅ 部署成功！" -ForegroundColor Green
    Write-Host "=" * 60 -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 访问地址：" -ForegroundColor Cyan
    $websiteUrl = "https://$BucketName.$Endpoint"
    Write-Host "   $websiteUrl" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "💡 提示：" -ForegroundColor Yellow
    Write-Host "   - 如果这是首次部署，请确保已在OSS控制台开启'静态网站托管'" -ForegroundColor Gray
    Write-Host "   - 确保404页设置为 index.html（SPA应用必需）" -ForegroundColor Gray
    Write-Host "   - 如果使用自定义域名，请在OSS控制台绑定域名" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ 上传失败！" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "  1. ossutil 未正确配置，请运行: ossutil config" -ForegroundColor Gray
    Write-Host "  2. Bucket名称错误或不存在" -ForegroundColor Gray
    Write-Host "  3. 没有访问权限" -ForegroundColor Gray
    Write-Host "  4. 网络连接问题" -ForegroundColor Gray
    Write-Host ""
    exit 1
}

