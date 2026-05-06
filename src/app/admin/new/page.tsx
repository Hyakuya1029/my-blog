'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('文章创建功能需要后端支持，当前版本仅展示前端界面。\n\n你可以直接编辑 data/posts.json 文件来添加文章。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <nav className="mb-8">
        <Link href="/admin" className="text-blue-600 hover:underline">
          ← 返回管理页面
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold">写新文章</h1>
        <p className="text-gray-600 mt-2">创建一篇新的博客文章</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            标题
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="输入文章标题"
            required
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
            摘要
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            rows={2}
            placeholder="输入文章摘要"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            内容 (支持 Markdown)
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-mono"
            rows={15}
            placeholder="输入文章内容，支持 Markdown 格式"
            required
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium mb-2">
            标签
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="输入标签，用逗号分隔"
          />
          <p className="text-sm text-gray-500 mt-1">多个标签用逗号分隔，例如：技术, React, Next.js</p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            保存文章
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
        </div>
      </form>
    </main>
  );
}