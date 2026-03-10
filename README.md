# 陈玉奇的博客 - chenyuqi.me

一个现代简洁的个人博客，基于 Next.js 14 和 Tailwind CSS 构建。

## 🚀 快速开始

### 1. 安装依赖

```bash
cd blog-chenyuqi
npm install
```

### 2. 本地开发

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📝 发布文章

在 `content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: '文章标题'
date: '2026-03-10'
excerpt: '文章摘要'
categories: ['技术']
tags: ['Next.js', '博客']
coverImage: '/images/cover.jpg'
---

文章正文内容...
```

## 🖼️ 图片/视频上传

### 方案一：阿里云 OSS（推荐）

1. 登录阿里云 OSS 控制台
2. 创建 Bucket（建议设置为公共读）
3. 上传图片/视频文件
4. 获取文件 URL
5. 在文章中使用：

```markdown
![图片描述](https://your-bucket.oss-cn-shanghai.aliyuncs.com/image.jpg)

<video controls>
  <source src="https://your-bucket.oss-cn-shanghai.aliyuncs.com/video.mp4" type="video/mp4">
</video>
```

### 方案二：本地上传

将文件放入 `public/images/` 或 `public/videos/` 目录，然后在文章中使用相对路径。

## 🌐 部署到 Vercel

### 1. 推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/blog-chenyuqi.git
git push -u origin main
```

### 2. 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 导入你的 GitHub 仓库
4. 点击 "Deploy"

### 3. 绑定域名

1. 在 Vercel 项目设置中，进入 "Domains"
2. 添加 `chenyuqi.me`
3. 按照提示配置 DNS：
   - 添加 CNAME 记录：`www` → `cname.vercel-dns.com`
   - 添加 A 记录：`@` → `76.76.21.21`

### 4. 配置 HTTPS

Vercel 会自动为你的域名配置 SSL 证书，无需额外操作。

## 📁 项目结构

```
blog-chenyuqi/
├── app/
│   ├── blog/           # 博客页面
│   ├── components/     # 可复用组件
│   ├── lib/           # 工具函数
│   ├── globals.css    # 全局样式
│   ├── layout.tsx     # 根布局
│   └── page.tsx       # 首页
├── content/posts/     # 博客文章（Markdown）
├── public/            # 静态资源
│   ├── images/        # 图片
│   └── videos/        # 视频
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 自定义

### 修改个人信息

编辑 `app/page.tsx` 中的"关于我"部分。

### 修改配色

编辑 `tailwind.config.js` 中的 `theme.extend.colors`。

### 添加更多页面

在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件。

## 📊 功能特性

- ✅ 响应式设计（手机/平板/电脑完美适配）
- ✅ SEO 优化（Meta 标签、Open Graph）
- ✅ 深色模式支持（可扩展）
- ✅ Markdown 渲染
- ✅ 代码高亮
- ✅ 文章分类和标签
- ✅ 日期格式化（中文）
- ✅ 社交媒体链接

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS 3
- **语言**: TypeScript
- **Markdown**: gray-matter + remark
- **日期**: date-fns
- **部署**: Vercel

## 📄 许可证

MIT License

---

**作者**: 陈玉奇  
**网站**: [chenyuqi.me](https://chenyuqi.me)  
**邮箱**: contact@chenyuqi.me
