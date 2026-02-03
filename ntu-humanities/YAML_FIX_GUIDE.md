# YAML Front Matter 修复指南

## 错误信息
```
YAML parse exception at line 3, column 0,
while scanning a simple key:
could not find expected ':'
```

## 问题原因
YAML front matter 格式错误，通常是：
1. 缺少冒号 `:`
2. 缩进不正确
3. 特殊字符未转义

## 正确的 YAML Front Matter 格式

### 基本格式
```yaml
---
title: "文档标题"
author: "作者名称"
date: "2026-01-24"
lang: en
---

文档内容从这里开始...
```

### 带多个字段的格式
```yaml
---
title: "構詞學（Morphology）｜語言學奧賽備考單元"
subtitle: "Morphology for Linguistics Olympiad Preparation"
author: "Your Name"
date: "2026-01-24"
lang: zh-TW
format:
  html:
    toc: true
    theme: default
---

文档内容...
```

## 常见错误和修复

### ❌ 错误 1：缺少冒号
```yaml
---
title "My Document"  # 错误：缺少冒号
author: John Doe
---
```

✅ 修复：
```yaml
---
title: "My Document"  # 正确：有冒号
author: "John Doe"
---
```

### ❌ 错误 2：缩进不一致
```yaml
---
title: "My Document"
format:
html:  # 错误：缩进不正确
  toc: true
---
```

✅ 修复：
```yaml
---
title: "My Document"
format:
  html:  # 正确：使用空格缩进
    toc: true
---
```

### ❌ 错误 3：特殊字符未转义
```yaml
---
title: My Document: A Guide  # 错误：标题中有冒号
---
```

✅ 修复：
```yaml
---
title: "My Document: A Guide"  # 正确：用引号括起来
---
```

## 检查清单

在编译前，请检查：

- [ ] YAML front matter 以 `---` 开始
- [ ] 每个键值对都有冒号 `:`
- [ ] 字符串值用引号括起来（如果包含特殊字符）
- [ ] 缩进使用空格（不是 Tab）
- [ ] YAML front matter 以 `---` 结束
- [ ] `---` 后面有空行

## 快速修复步骤

1. **打开你的 Markdown 文件**
2. **检查前 10 行**，找到 YAML front matter（在 `---` 之间）
3. **确保格式正确**：
   - 每个键后面都有 `:`
   - 值如果是字符串，用引号括起来
   - 缩进正确
4. **保存文件**
5. **重新编译**

## 如果不需要 YAML Front Matter

如果你的文件不需要 YAML front matter，可以：

1. **删除开头的 `---` 块**
2. **或者添加一个最简单的 YAML front matter**：

```yaml
---
title: "Untitled"
---

你的文档内容...
```

## 测试 YAML 格式

你可以使用在线工具测试 YAML 格式：
- https://www.yamllint.com/
- 或者使用 Python: `python -c "import yaml; yaml.safe_load(open('your_file.md'))"`

## 针对你的文件

根据错误信息，问题在第 3 行。请检查：

1. 第 1 行应该是 `---`
2. 第 2 行应该是第一个键值对，例如 `title: "..."` 或 `key: value`
3. 第 3 行应该也有正确的格式

如果第 3 行是空行，可能需要删除它，或者确保 YAML 格式正确。
