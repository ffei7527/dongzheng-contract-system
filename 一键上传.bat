@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
echo ========================================
echo     GitHub 上传助手
echo ========================================
echo.

cd /d %~dp0

echo [1/6] 检查 Git 是否安装...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git 未安装！
    echo 请访问 https://git-scm.com/download/win 下载安装
    pause
    exit /b 1
)
echo ✅ Git 已安装
echo.

echo [2/6] 检查 Git 配置...
git config --global user.name >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Git 用户信息未配置
    echo.
    echo 请输入你的信息：
    set /p GIT_NAME="你的名字: "
    set /p GIT_EMAIL="你的邮箱: "
    if not "%GIT_NAME%"=="" if not "%GIT_EMAIL%"=="" (
        git config --global user.name "%GIT_NAME%"
        git config --global user.email "%GIT_EMAIL%"
        echo ✅ Git 配置完成
    ) else (
        echo ❌ 配置失败，请先运行"修复Git配置.bat"
        pause
        exit /b 1
    )
) else (
    echo ✅ Git 配置已存在
    echo   用户名: 
    git config --global user.name
    echo   邮箱: 
    git config --global user.email
)
echo.

echo [3/7] 初始化 Git 仓库...
if not exist .git (
    git init
    echo ✅ Git 仓库已初始化
) else (
    echo ✅ Git 仓库已存在
)
echo.

echo [4/7] 添加文件...
git add .
echo ✅ 文件已添加
echo.

echo [5/7] 提交更改...
git commit -m "更新：%date% %time%" >nul 2>&1
if errorlevel 1 (
    echo ⚠️  没有新更改需要提交
) else (
    echo ✅ 更改已提交
)
echo.

echo [6/7] 检查远程仓库...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo.
    echo ⚠️  未设置远程仓库
    echo.
    echo 请先执行以下步骤：
    echo 1. 在 GitHub 上创建仓库
    echo 2. 复制仓库地址
    echo 3. 运行以下命令：
    echo    git remote add origin 你的仓库地址
    echo.
    echo 或者手动输入仓库地址：
    echo.
    echo ⚠️  重要提示：
    echo - 地址格式：https://github.com/用户名/仓库名.git
    echo - 只能输入一个地址，不要复制多个地址
    echo - 地址末尾是 .git，不要有空格
    echo.
    set /p REPO_URL="请输入 GitHub 仓库地址: "
    if not "!REPO_URL!"=="" (
        REM 清理可能的空格和多余字符
        set REPO_URL=!REPO_URL: =!
        git remote add origin "!REPO_URL!"
        if errorlevel 1 (
            echo.
            echo ⚠️  远程仓库可能已存在，尝试更新...
            git remote set-url origin "!REPO_URL!"
        )
        echo ✅ 远程仓库已配置
    ) else (
        echo ❌ 未输入仓库地址，退出
        echo.
        echo 提示：你可以先运行"修复Git配置.bat"来配置远程仓库
        pause
        exit /b 1
    )
) else (
    echo ✅ 远程仓库已配置
)
echo.

echo [7/7] 上传到 GitHub...
echo.
echo ⚠️  即将上传代码到 GitHub
echo 如果提示输入用户名和密码：
echo - 用户名：你的 GitHub 用户名
echo - 密码：使用 Personal Access Token（不是 GitHub 密码）
echo.
pause
git push -u origin main
if errorlevel 1 (
    echo.
    echo ❌ 上传失败！
    echo.
    echo 可能的原因：
    echo 1. 网络连接问题
    echo 2. 需要输入用户名和密码
    echo 3. 需要创建 Personal Access Token
    echo.
    echo 请查看"新手教程-完整版.md"获取帮助
) else (
    echo.
    echo ✅ 上传成功！
    echo.
    echo 下一步：
    echo 1. 进入 GitHub 仓库页面
    echo 2. Settings → Pages
    echo 3. Source 选择 "GitHub Actions"
    echo 4. 等待 1-2 分钟部署完成
    echo 5. 访问你的网站
)
echo.
pause


