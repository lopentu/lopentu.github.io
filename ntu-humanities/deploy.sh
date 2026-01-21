#!/bin/bash

# 部署 ntu-humanities 到 gh-pages 分支的脚本

set -e  # 遇到错误时退出

echo "🚀 开始部署到 gh-pages..."

# 确保在正确的目录
cd "$(dirname "$0")"

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  检测到未提交的更改，正在提交到 main 分支..."
    git add .
    git commit -m "Update before deploy $(date +%Y-%m-%d\ %H:%M:%S)"
fi

# 切换到 gh-pages 分支
echo "📦 切换到 gh-pages 分支..."
git checkout gh-pages

# 从 main 分支获取最新文件
echo "📥 从 main 分支获取文件..."
git checkout main -- .

# 添加所有更改
git add .

# 检查是否有更改需要提交
if git diff-index --quiet HEAD --; then
    echo "ℹ️  没有需要部署的更改"
else
    # 提交更改
    echo "💾 提交更改..."
    git commit -m "Deploy ntu-humanities $(date +%Y-%m-%d\ %H:%M:%S)" || true
    
    # 推送到远程
    echo "⬆️  推送到远程 gh-pages 分支..."
    git push origin gh-pages
fi

# 切换回 main 分支
echo "🔄 切换回 main 分支..."
git checkout main

echo "✅ 部署完成！"
echo "🌐 网站将在几分钟后更新：https://lopentu.github.io/ntu-humanities/"
