'use client';

import { useState } from 'react';
import Link from 'next/link';

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

const projects: Project[] = [
  {
    id: 1,
    title: 'Todo 应用',
    description: '一个功能完整的待办事项管理应用，支持任务分类、优先级设置和数据持久化。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=todo%20app%20interface%20clean%20minimal%20design&image_size=landscape_16_9',
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: '前端',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 2,
    title: '博客系统',
    description: '基于 Next.js 的现代化博客平台，支持 Markdown 编辑和评论功能。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blog%20website%20modern%20design&image_size=landscape_16_9',
    tags: ['Next.js', 'Supabase', 'React Markdown'],
    category: '全栈',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'API 网关',
    description: '高性能的 API 网关服务，支持限流、认证和日志记录。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=api%20gateway%20server%20infrastructure&image_size=landscape_16_9',
    tags: ['Go', 'gRPC', 'Redis'],
    category: '后端',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: '在线商城',
    description: '完整的电商平台前端，包含商品展示、购物车和订单管理。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20shopping%20website&image_size=landscape_16_9',
    tags: ['Vue', 'Pinia', 'Element Plus'],
    category: '前端',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    id: 5,
    title: '数据分析平台',
    description: '数据可视化分析工具，支持多种图表展示和实时数据更新。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analytics%20dashboard%20charts&image_size=landscape_16_9',
    tags: ['React', 'D3.js', 'Socket.io'],
    category: '数据',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'ChatGPT 插件',
    description: '增强 ChatGPT 功能的浏览器插件，支持自定义指令和快捷操作。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=browser%20extension%20chatgpt%20ai&image_size=landscape_16_9',
    tags: ['TypeScript', 'Chrome Extension', 'OpenAI API'],
    category: '工具',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
];

const categories = ['全部', ...Array.from(new Set(projects.map(p => p.category)))];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">作品集</h1>
        <p className="text-gray-600">展示我的项目作品和技术成果</p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === project.id ? 'scale-110' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className={`
                absolute bottom-4 left-4 right-4
                flex gap-2
                transition-all duration-300
                ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/90 rounded-full text-sm font-medium text-gray-700 hover:bg-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    演示
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm mb-4">更多项目正在开发中...</p>
        {/* <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          查看我的技术博客
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link> */}
      </div>
    </main>
  );
}