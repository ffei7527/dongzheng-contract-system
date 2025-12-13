@echo off
chcp 65001 >nul
echo ========================================
echo     立即修复当前问题
echo ========================================
echo.

cd /d %~dp0

echo [修复 1] 配置 Git 用户信息
echo.
set /p GIT_NAME="请输入你的名字: "
set /p GIT_EMAIL="请输入你的邮箱: "

if not "%GIT_NAME%"=="" if not "%GIT_EMAIL%"=="" (
    git config --global user.name "%GIT_NAME%"
    git config --global user.email "%GIT_EMAIL%"
    echo ✅ Git 用户信息已配置
) else (
    echo ❌ 信息不完整
    pause
    exit /b 1
)

echo.
echo [修复 2] 清理错误的远程仓库配置
echo.
git remote remove origin >nul 2>&1
echo ✅ 已清理旧的远程仓库配置

echo.
echo [修复 3] 添加正确的远程仓库
echo.
echo 请输入你的 GitHub 仓库地址
echo 格式：https://github.com/用户名/仓库名.git
echo.
echo ⚠️  重要：
echo - 只输入一个地址
echo - 地址末尾是 .git
echo - 不要有空格
echo.
set /p REPO_URL="仓库地址: "

if not "%REPO_URL%"=="" (
    REM 清理空格
    set REPO_URL=%REPO_URL: =%
    git remote add origin "%REPO_URL%"
    if errorlevel 1 (
        echo ❌ 添加失败，可能地址格式不正确
    ) else (
        echo ✅ 远程仓库已添加
        echo.
        echo 当前配置：
        git remote -v
    )
) else (
    echo ❌ 未输入地址
)

echo.
echo ========================================
echo     修复完成！
echo ========================================
echo.
echo 下一步：运行 "一键上传.bat" 上传代码
echo.
pause

