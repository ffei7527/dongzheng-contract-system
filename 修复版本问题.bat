@echo off
chcp 65001 >nul
echo ========================================
echo     修复：使用完整功能版本
echo ========================================
echo.

cd /d %~dp0

echo [步骤 1] 备份简化版 index.html...
if exist index.html (
    if not exist index-demo.html (
        ren index.html index-demo.html
        echo ✅ 已重命名为 index-demo.html
    ) else (
        echo ⚠️  index-demo.html 已存在
        del index.html
        echo ✅ 已删除简化版 index.html
    )
) else (
    echo ✅ 简化版 index.html 不存在
)

echo.
echo [步骤 2] 检查 dist 文件夹...
if exist dist\index.html (
    echo ✅ dist/index.html 存在（这是完整版本）
) else (
    echo ⚠️  dist/index.html 不存在，需要先构建
    echo 运行：npm run build
)

echo.
echo [步骤 3] 准备提交更改...
git add .
git status

echo.
echo ========================================
echo     修复完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 提交更改：git commit -m "修复：移除简化版，使用完整功能版本"
echo 2. 推送到 GitHub：git push
echo 3. 等待 GitHub Actions 自动部署（1-2分钟）
echo 4. 清除浏览器缓存后访问网站
echo.
echo 或者直接运行：
echo   git commit -m "修复：移除简化版，使用完整功能版本"
echo   git push
echo.
pause

