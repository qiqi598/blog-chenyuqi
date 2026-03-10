# 🚀 部署指南 - chenyuqi.me

## 第一步：推送到 GitHub

```bash
cd /home/admin/.openclaw/workspace/blog-chenyuqi

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 陈玉奇的博客"

# 关联远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/blog-chenyuqi.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

---

## 第二步：部署到 Vercel

### 2.1 访问 Vercel

1. 打开 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 点击 **"Add New Project"**

### 2.2 导入项目

1. 选择 **"Import Git Repository"**
2. 找到 `blog-chenyuqi` 仓库
3. 点击 **"Import"**

### 2.3 配置项目

- **Framework Preset**: Next.js（自动识别）
- **Root Directory**: `./`（默认）
- **Build Command**: `npm run build`（默认）
- **Output Directory**: `.next`（默认）

点击 **"Deploy"**

### 2.4 等待部署完成

大约 1-2 分钟后，你会看到 ✅ 部署成功的提示。

---

## 第三步：绑定域名 chenyuqi.me

### 3.1 在 Vercel 添加域名

1. 进入项目设置
2. 点击左侧 **"Domains"**
3. 输入 `chenyuqi.me`
4. 点击 **"Add"**

### 3.2 在阿里云配置 DNS

1. 登录 [阿里云控制台](https://console.aliyun.com)
2. 进入 **"域名与网站" → "域名"**
3. 找到 `chenyuqi.me`，点击 **"管理"**
4. 进入 **"DNS 修改"** 或 **"解析设置"**

### 3.3 添加 DNS 记录

添加以下两条记录：

| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| CNAME | www | cname.vercel-dns.com | 10 分钟 |
| A | @ | 76.76.21.21 | 10 分钟 |

**操作步骤：**

1. 点击 **"添加记录"**
2. 添加第一条（CNAME）：
   - 记录类型：`CNAME`
   - 主机记录：`www`
   - 记录值：`cname.vercel-dns.com`
   - TTL：`10 分钟`
3. 点击 **"确认"**
4. 添加第二条（A 记录）：
   - 记录类型：`A`
   - 主机记录：`@`
   - 记录值：`76.76.21.21`
   - TTL：`10 分钟`
5. 点击 **"确认"**

### 3.4 等待 DNS 生效

DNS 生效通常需要：
- 国内：5-30 分钟
- 国际：最多 48 小时（通常 1 小时内）

可以使用以下命令检查：

```bash
ping chenyuqi.me
ping www.chenyuqi.me
```

---

## 第四步：启用 HTTPS

Vercel 会**自动**为你的域名配置 SSL 证书，无需手动操作。

等待 DNS 生效后，访问：
- https://chenyuqi.me
- https://www.chenyuqi.me

你会看到 🔒 安全锁标志！

---

## 第五步：发布文章

### 5.1 创建新文章

在 `content/posts/` 目录下创建 `.md` 文件：

```bash
cd content/posts
touch my-first-post.md
```

### 5.2 编写文章

```markdown
---
title: '我的第一篇文章'
date: '2026-03-10'
excerpt: '这是文章摘要...'
categories: ['技术']
tags: ['Next.js', '博客']
---

## 正文开始

这里是文章内容...

### 插入图片

![图片描述](https://your-bucket.oss-cn-shanghai.aliyuncs.com/image.jpg)

### 插入视频

<video controls width="100%">
  <source src="https://your-bucket.oss-cn-shanghai.aliyuncs.com/video.mp4" type="video/mp4">
</video>
```

### 5.3 提交并推送

```bash
git add .
git commit -m "Add: 我的第一篇文章"
git push
```

Vercel 会**自动重新部署**，大约 1 分钟后新文章就会上线！

---

## 🖼️ 图片/视频上传方案

### 推荐：阿里云 OSS

#### 1. 创建 OSS Bucket

1. 登录 [阿里云 OSS 控制台](https://oss.console.aliyun.com)
2. 点击 **"创建 Bucket"**
3. 配置：
   - **Bucket 名称**: `chenyuqi-blog`（全局唯一）
   - **地域**: 选择离你最近的（如：华东 1-杭州）
   - **读写权限**: **公共读**（重要！）
4. 点击 **"确定"**

#### 2. 上传图片/视频

1. 进入刚创建的 Bucket
2. 点击 **"上传文件"**
3. 选择本地图片/视频
4. 上传完成后，点击文件获取 URL

#### 3. 在文章中使用

```markdown
![图片](https://chenyuqi-blog.oss-cn-hangzhou.aliyuncs.com/image.jpg)

<video controls>
  <source src="https://chenyuqi-blog.oss-cn-hangzhou.aliyuncs.com/video.mp4">
</video>
```

---

## 📊 查看访问统计

### Vercel Analytics

1. 进入 Vercel 项目
2. 点击左侧 **"Analytics"**
3. 点击 **"Enable"**（免费版够用）

可以看到：
- 访问量
- 访客来源
- 热门页面

---

## 🎉 完成！

现在你的博客已经：

✅ 部署到 Vercel  
✅ 绑定域名 chenyuqi.me  
✅ 启用 HTTPS  
✅ 可以发布文章  
✅ 支持图片/视频上传  

开始写作吧！✍️

---

## 🔧 常用命令

```bash
# 本地开发
npm run dev

# 构建
npm run build

# 查看 Git 状态
git status

# 推送更新
git add .
git commit -m "更新内容"
git push

# 查看部署日志
# 在 Vercel 控制台查看
```

---

## 📞 遇到问题？

- Vercel 文档：[vercel.com/docs](https://vercel.com/docs)
- Next.js 文档：[nextjs.org/docs](https://nextjs.org/docs)
- 阿里云 OSS：[help.aliyun.com/product/31815.html](https://help.aliyun.com/product/31815.html)

祝你写作愉快！🚀
