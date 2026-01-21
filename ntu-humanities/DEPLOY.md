# 推送到 gh-pages 分支的步骤

## 方式 1：将文件推送到 gh-pages 分支的根目录

```bash
# 1. 确保当前在 ntu-humanities 目录
cd /Users/shukai/Dropbox/LOPE/lopentu.github.io/ntu-humanities

# 2. 切换到 gh-pages 分支（如果本地没有，会从远程创建）
git checkout gh-pages

# 3. 将 main 分支的 ntu-humanities 目录内容复制到当前分支
# 方法 A：如果要将文件放在 gh-pages 根目录
git checkout main -- .

# 或者方法 B：如果要将文件放在 ntu-humanities 子目录
mkdir -p ntu-humanities
git checkout main -- .
mv index.html infographics.html proposal.html *.pdf *.docx ntu-humanities/ 2>/dev/null || true

# 4. 添加所有更改
git add .

# 5. 提交更改
git commit -m "Update ntu-humanities content"

# 6. 推送到远程 gh-pages 分支
git push origin gh-pages

# 7. 切换回 main 分支（可选）
git checkout main
```

## 方式 2：使用 subtree push（推荐用于子目录部署）

```bash
# 1. 确保当前在 ntu-humanities 目录
cd /Users/shukai/Dropbox/LOPE/lopentu.github.io/ntu-humanities

# 2. 先提交当前更改到 main 分支（如果有未提交的更改）
git add .
git commit -m "Update ntu-humanities files"

# 3. 使用 subtree push 将 ntu-humanities 目录推送到 gh-pages 分支
git subtree push --prefix=ntu-humanities origin gh-pages
```

## 方式 3：手动操作（最灵活）

```bash
# 1. 确保当前在 ntu-humanities 目录
cd /Users/shukai/Dropbox/LOPE/lopentu.github.io/ntu-humanities

# 2. 切换到 gh-pages 分支
git checkout gh-pages

# 3. 合并 main 分支的更改（如果需要）
git merge main

# 4. 或者只复制特定文件
git checkout main -- index.html infographics.html proposal.html

# 5. 添加并提交
git add .
git commit -m "Deploy ntu-humanities to gh-pages"

# 6. 推送
git push origin gh-pages

# 7. 切换回 main
git checkout main
```

## 注意事项

1. **GitHub Pages 配置**：确保在 GitHub 仓库设置中，Source 设置为 `gh-pages` 分支
2. **文件路径**：如果文件在 gh-pages 根目录，访问 URL 是 `https://lopentu.github.io/ntu-humanities/index.html`
3. **如果文件在子目录**：访问 URL 是 `https://lopentu.github.io/ntu-humanities/index.html`（相同）

## 快速部署脚本

创建一个简单的部署脚本：

```bash
#!/bin/bash
cd /Users/shukai/Dropbox/LOPE/lopentu.github.io/ntu-humanities
git checkout gh-pages
git checkout main -- .
git add .
git commit -m "Deploy ntu-humanities $(date +%Y-%m-%d)"
git push origin gh-pages
git checkout main
echo "部署完成！"
```
