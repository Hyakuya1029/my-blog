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

const friends: Friend[] = [];

export default function FriendsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(friends.flatMap(f => f.tags)));

  const filteredFriends = filterTag 
    ? friends.filter(f => f.tags.includes(filterTag))
    : friends;

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">友情链接</h1>
        <p className="text-gray-600 dark:text-gray-400">分享一些有趣或有用的网站和好友页面</p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setFilterTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filterTag === null
              ? 'bg-sky-500 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
                ? 'bg-sky-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFriends.map((friend, i) => (
          <a
            key={friend.id}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group stagger-item"
            style={{ animationDelay: `${i * 0.06}s` }}
            onMouseEnter={() => setHoveredId(friend.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`
              bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md
              border border-gray-100 dark:border-gray-700
              card-lift
              ${hoveredId === friend.id
                ? 'shadow-xl -translate-y-1 border-sky-200'
                : ''}
            `}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  w-14 h-14 rounded-full overflow-hidden
                  border-2 border-gray-200
                  transition-all duration-300
                  ${hoveredId === friend.id ? 'border-sky-400 scale-110' : ''}
                `}>
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`
                    font-semibold text-gray-800 dark:text-gray-200
                    transition-colors duration-300
                    ${hoveredId === friend.id ? 'text-sky-600' : ''}
                  `}>
                    {friend.name}
                  </h3>
                  <div className="flex gap-1">
                    {friend.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded"
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
                      ? 'text-sky-500 translate-x-1' 
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
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {friend.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          想要交换友链？欢迎通过评论或邮件联系我！
        </p>
      </div>
    </main>
  );
}