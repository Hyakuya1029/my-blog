'use client';

import { useState } from 'react';

interface Friend {
  id: number;
  name: string;
  avatar: string;
  url: string;
  description: string;
  tags: string[];
}

const friends: Friend[] = [
  {
    id: 1,
    name: '张三的博客',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhang',
    url: 'https://example.com',
    description: '前端开发爱好者，分享技术心得',
    tags: ['前端', 'React', 'Vue'],
  },
  {
    id: 2,
    name: '李四的技术栈',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li',
    url: 'https://example.com',
    description: '全栈开发者，热爱开源',
    tags: ['全栈', 'Node.js', 'Go'],
  },
  {
    id: 3,
    name: '王五的小站',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
    url: 'https://example.com',
    description: '生活记录者，分享日常点滴',
    tags: ['生活', '摄影', '旅行'],
  },
  {
    id: 4,
    name: '赵六的实验室',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhao',
    url: 'https://example.com',
    description: 'AI 研究员，探索前沿技术',
    tags: ['AI', '机器学习', 'Python'],
  },
  {
    id: 5,
    name: '钱七的笔记',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=qian',
    url: 'https://example.com',
    description: '学生博主，记录学习历程',
    tags: ['学习', '笔记', '大学生'],
  },
  {
    id: 6,
    name: '孙八的空间',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sun',
    url: 'https://example.com',
    description: '设计师，分享创意灵感',
    tags: ['设计', 'UI', '创意'],
  },
];

export default function FriendsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(friends.flatMap(f => f.tags)));

  const filteredFriends = filterTag 
    ? friends.filter(f => f.tags.includes(filterTag))
    : friends;

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">友情链接</h1>
        <p className="text-gray-600">分享一些有趣或有用的网站和好友页面</p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setFilterTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filterTag === null
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilterTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filterTag === tag
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFriends.map(friend => (
          <a
            key={friend.id}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            onMouseEnter={() => setHoveredId(friend.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`
              bg-white rounded-xl p-6 shadow-md
              border border-gray-100
              transition-all duration-300
              ${hoveredId === friend.id 
                ? 'shadow-xl -translate-y-1 border-blue-200' 
                : 'hover:shadow-lg'}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  w-14 h-14 rounded-full overflow-hidden
                  border-2 border-gray-200
                  transition-all duration-300
                  ${hoveredId === friend.id ? 'border-blue-400 scale-110' : ''}
                `}>
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`
                    font-semibold text-gray-800
                    transition-colors duration-300
                    ${hoveredId === friend.id ? 'text-blue-600' : ''}
                  `}>
                    {friend.name}
                  </h3>
                  <div className="flex gap-1">
                    {friend.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <svg
                  className={`
                    w-5 h-5 text-gray-400
                    transition-all duration-300
                    ${hoveredId === friend.id 
                      ? 'text-blue-500 translate-x-1' 
                      : 'group-hover:translate-x-0.5'}
                  `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {friend.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          想要交换友链？欢迎通过评论或邮件联系我！
        </p>
      </div>
    </main>
  );
}