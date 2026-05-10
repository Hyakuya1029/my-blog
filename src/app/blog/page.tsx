import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: '博客',
  description: '记录生活，分享技术思考与学习心得',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">博客</h1>
        <p className="text-gray-600 dark:text-gray-400">记录生活，分享思考</p>
      </header>
      <BlogList posts={posts} allTags={allTags} />
    </main>
  );
}
