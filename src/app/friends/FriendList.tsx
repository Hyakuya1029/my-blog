'use client';

import { useState } from 'react';
import FilterPill from '@/components/ui/FilterPill';

interface Friend {
  id: number;
  name: string;
  avatar: string;
  url: string;
  description: string;
  tags: string[];
}

interface FriendListProps {
  friends: Friend[];
  allTags: string[];
}

export default function FriendList({ friends, allTags }: FriendListProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const filtered = filterTag
    ? friends.filter(f => f.tags.includes(filterTag))
    : friends;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <FilterPill
          label="全部"
          isActive={filterTag === null}
          onClick={() => setFilterTag(null)}
        />
        {allTags.map(tag => (
          <FilterPill
            key={tag}
            label={tag}
            isActive={filterTag === tag}
            onClick={() => setFilterTag(tag)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((friend, i) => (
          <a
            key={friend.id}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group stagger-item"
            style={{ animationDelay: `${i * 0.08}s` }}
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
    </>
  );
}
