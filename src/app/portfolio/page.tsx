import type { Metadata } from 'next';
import ProjectList from './ProjectList';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [];

export const metadata: Metadata = {
  title: '作品集',
  description: '展示我的项目作品和技术成果',
};

export default function PortfolioPage() {
  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">作品集</h1>
        <p className="text-gray-600 dark:text-gray-400">展示我的项目作品和技术成果</p>
      </header>
      <ProjectList projects={projects} categories={categories} />
      <div className="mt-12 text-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">更多项目正在开发中...</p>
      </div>
    </main>
  );
}
