@echo off
chcp 65001 >nul
echo ========================================
echo     Git 配置修复工具
echo ========================================
echo.

cd /d %~dp0

echo [步骤 1/3] 配置 Git 用户名和邮箱
echo.
echo 请输入你的信息（这些信息会显示在你的提交记录中）
echo.

set /p GIT_NAME="请输入你的名字（例如：张三）: "
if "%GIT_NAME%"=="" (
    echo ❌ 名字不能为空
    pause
    exit /b 1
)

set /p GIT_EMAIL="请输入你的邮箱（例如：zhangsan@example.com）: "
if "%GIT_EMAIL%"=="" (
    echo ❌ 邮箱不能为空
    pause
    exit /b 1
)

echo.
echo 正在配置 Git...
git config --global user.name "%GIT_NAME%"
git config --global user.email "%GIT_EMAIL%"

if errorlevel 1 (
    echo ❌ 配置失败
    pause
    exit /b 1
)

echo ✅ Git 配置成功！
echo.
echo 配置信息：
git config --global user.name
git config --global user.email
echo.

echo [步骤 2/3] 检查远程仓库配置
echo.
git remote -v
echo.

echo [步骤 3/3] 如果需要添加或修改远程仓库
echo.
set /p ADD_REMOTE="是否要添加/修改远程仓库？(Y/N): "
if /i "%ADD_REMOTE%"=="Y" (
    echo.
    echo 请输入你的 GitHub 仓库地址
    echo 格式：https://github.com/用户名/仓库名.git
    echo 例如：https://github.com/zhangsan/contract-demo.git
    echo.
    set /p REPO_URL="仓库地址: "
    
    if not "%REPO_URL%"=="" (
        echo.
        echo 检查是否已存在远程仓库...
        git remote get-url origin >nul 2>&1
        if errorlevel 1 (
            echo 添加新的远程仓库...
            git remote add origin "%REPO_URL%"
        ) else (
            echo 更新现有远程仓库...
            git remote set-url origin "%REPO_URL%"
        )
        
        if errorlevel 1 (
            echo ❌ 设置远程仓库失败
        ) else (
            echo ✅ 远程仓库配置成功！
            echo.
            echo 当前远程仓库：
            git remote -v
        )
    )
)

echo.
echo ========================================
echo     配置完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 运行 "一键上传.bat" 上传代码
echo 2. 或者按照教程手动执行 git 命令
echo.
pause

