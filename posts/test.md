---
title: 测试文章 - 验证博客渲染效果
excerpt: 这篇测试文章包含了标题、代码块、列表、引用、链接、图片、表格等元素，用于全面检查博客渲染效果
publishedAt: 2026-05-13
tags: [测试, Markdown, 博客, 技术]
published: true
---

## 代码块测试

JavaScript 代码：

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibonacci(10)); // 55
```

TypeScript 接口定义：

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}
```

## 列表测试

有序列表：

1. 安装依赖 `npm install`
2. 配置环境变量 `.env.local`
3. 启动开发服务器 `npm run dev`
4. 打开浏览器访问 `http://localhost:3000`

无序列表：

- Next.js App Router 提供页面路由
- Supabase 负责数据存储
- Tailwind CSS 处理样式
- Nodemailer 发送邮件通知

嵌套列表：

- 前端技术栈
  - React / Next.js
  - TypeScript
  - Tailwind CSS
- 后端服务
  - Supabase (PostgreSQL)
  - Nodemailer (SMTP)
- 部署
  - Vercel
  - GitHub

## 引用测试

> 代码如诗，结构如画。
> — 某位不知名开发者

多层引用：

> 这是第一层引用
>> 这是嵌套的第二层引用
>>> 第三层引用，用于测试深层嵌套的样式

## 链接测试

- [Next.js 文档](https://nextjs.org/docs)
- [Supabase 文档](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

自动链接：https://github.com/Hyakuya1029/personal-site

## 表格测试

| 功能 | 状态 | 说明 |
|------|------|------|
| 博客系统 | 已完成 | Markdown 渲染 + 代码高亮 |
| 评论系统 | 已完成 | 支持回复，QQ 邮箱通知 |
| 留言墙 | 已完成 | 便签纸风格 |
| 友链申请 | 已完成 | 自助申请 + 审批 |
| 音乐播放 | 已完成 | 全局浮动控制条 |
| RSS | 未开始 | - |

## 内联元素测试

**加粗文字**、*斜体文字*、~~删除线~~、`行内代码`、[链接文字](https://example.com)

## 分隔线测试

---

上面的分隔线应该显示为一条横线。

## 长文本测试

这段文字用于测试博客文章在较长段落下的排版效果。个人网站的开发过程就像搭建自己的小天地，每一行代码都承载着对技术的热爱和对分享的渴望。

从最初的静态页面，到如今的动态交互，网站的每一步演变都见证了技术栈的成长。Markdown 让写作回归纯粹，代码高亮让技术分享更加优雅，而评论系统和留言墙则让这里有了温度和人情味。
