'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  published: boolean;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 'welcome-to-my-blog',
      title: '欢迎来到我的博客',
      excerpt: '这是我的第一篇博客文章...',
      publishedAt: '2024-01-01',
      published: true,
    },
    {
      id: 'getting-started-with-nextjs',
      title: 'Next.js 入门指南',
      excerpt: '学习如何使用 Next.js 14...',
      publishedAt: '2024-01-15',
      published: true,
    },
    {
      id: 'my-daily-routine',
      title: '我的每日作息安排',
      excerpt: '分享我是如何规划每一天...',
      publishedAt: '2024-02-01',
      published: true,
    },
  ]);

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">博客管理</h1>
          <p className="text-gray-600">管理你的文章</p>
        </div>
        <Link
          href="/admin/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          写新文章
        </Link>
      </header>

      <section className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">文章列表</h2>
        </div>
        <div className="divide-y">
          {posts.map((post) => (
            <div key={post.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-medium mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{post.publishedAt}</span>
                  <span className={`px-2 py-0.5 rounded ${post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {post.published ? '已发布' : '草稿'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/posts/${post.id}`}
                  className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded"
                >
                  查看
                </Link>
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                  编辑
                </button>
                <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded">
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}