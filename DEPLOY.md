# GitHub Pages 部署指南

## 快速部署步骤

### 1. 准备 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（如果还没有）
2. 仓库名称可以是：`contract-demo` 或 `dongzheng-contract-system`

### 2. 初始化 Git 仓库（如果还没有）

```bash
cd "C:\Users\Administrator\Desktop\合约应用程序"
git init
git add .
git commit -m "Initial commit: 东证融汇合同系统"
```

### 3. 连接到 GitHub 仓库

```bash
# 替换 YOUR_USERNAME 和 YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. 启用 GitHub Pages

#### 方法 A：使用 GitHub Actions（推荐）

1. 代码推送到 GitHub 后，GitHub Actions 会自动运行
2. 进入仓库的 **Settings** > **Pages**
3. 在 **Source** 下拉菜单中选择 **GitHub Actions**
4. 等待 Actions 完成构建（通常需要 1-2 分钟）
5. 部署完成后，访问地址：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

#### 方法 B：手动部署到 gh-pages 分支

1. 构建项目：
```bash
npm run build
```

2. 部署到 gh-pages 分支：
```bash
# 安装 gh-pages（如果还没有）
npm install --save-dev gh-pages

# 在 package.json 中添加部署脚本
# "deploy": "npm run build && gh-pages -d dist"

# 运行部署
npm run deploy
```

3. 在仓库设置中选择 `gh-pages` 分支作为 Pages 源

### 5. 访问你的网站

部署成功后，你的网站将在以下地址可用：
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 常见问题

### 问题 1：页面显示空白

**解决方案：**
- 检查浏览器控制台是否有错误
- 确保 `vite.config.ts` 中的 `base: './'` 已设置
- 检查所有资源路径是否使用相对路径

### 问题 2：GitHub Actions 构建失败

**解决方案：**
- 检查 `.github/workflows/deploy.yml` 文件是否存在
- 确保 `package.json` 中的构建脚本正确
- 查看 Actions 标签页中的错误日志

### 问题 3：路由不工作

**解决方案：**
- 确保已创建 `404.html` 文件
- 在 GitHub Pages 设置中启用自定义 404 页面

### 问题 4：资源加载失败（404）

**解决方案：**
- 确保 `vite.config.ts` 中设置了 `base: './'`
- 重新构建项目：`npm run build`
- 检查 `dist` 文件夹中的文件路径

## 更新网站

每次更新代码后：

```bash
git add .
git commit -m "更新内容描述"
git push
```

GitHub Actions 会自动重新构建和部署。

## 自定义域名（可选）

1. 在仓库的 **Settings** > **Pages** 中设置自定义域名
2. 添加 CNAME 文件到 `public` 文件夹（如果使用 Vite）或根目录

## 技术支持

如果遇到问题，请：
1. 检查 GitHub Actions 日志
2. 查看浏览器控制台错误
3. 提交 Issue 到仓库


