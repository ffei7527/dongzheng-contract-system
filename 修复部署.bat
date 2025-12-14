@echo off
chcp 65001 >nul
echo ========================================
echo     修复部署 - 使用完整功能版本
echo ========================================
echo.

cd /d %~dp0

echo [步骤 1] 备份简化版 index.html...
if exist index.html (
    if not exist index-demo.html (
        move index.html index-demo.html >nul
        echo ✅ 已备份为 index-demo.html
    ) else (
        echo ⚠️  index-demo.html 已存在，跳过备份
    )
)

echo.
echo [步骤 2] 检查构建配置...
if exist package.json (
    echo ✅ package.json 存在
) else (
    echo ❌ package.json 不存在！
    pause
    exit /b 1
)

echo.
echo [步骤 3] 检查 GitHub Actions 配置...
if exist .github\workflows\deploy.yml (
    echo ✅ GitHub Actions 配置存在
) else (
    echo ❌ GitHub Actions 配置不存在！
    pause
    exit /b 1
)

echo.
echo [步骤 4] 准备提交更改...
git add .
git status

echo.
echo ========================================
echo     修复完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 提交更改：git commit -m "修复：使用完整功能版本"
echo 2. 推送到 GitHub：git push
echo 3. 等待 GitHub Actions 自动构建和部署（1-2分钟）
echo 4. 检查 GitHub Actions 状态
echo.
echo 或者直接运行以下命令：
echo   git add .
echo   git commit -m "修复：使用完整功能版本"
echo   git push
echo.
pause

