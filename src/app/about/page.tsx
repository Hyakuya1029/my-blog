'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 75, category: '后端' },
  { name: 'C++', level: 25, category: '前端' },
  { name: 'Web', level: 50, category: '前端' },
  { name: 'HTML', level: 50, category: '前端' },
  { name: 'Vue', level: 25, category: '前端' },
  { name: 'Node.js', level: 50, category: '后端' },
  { name: 'MySQL', level: 75, category: '数据库' },
  { name: 'PostgreSQL', level: 50, category: '数据库' },
  { name: 'Oracle Database', level: 50, category: '数据库' },
];

const timeline: TimelineItem[] = [
  { year: '2024', title: '大学入学', description: '学习 Java 和基础编程' },
];

const categories = Array.from(new Set(skills.map(s => s.category)));

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === '全部'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            H
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">关于</h1>
        <p className="text-gray-600 text-lg">
          本网站通过Trae进行全自动开发
        </p>
      </header>

      <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          个人简介
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">基本信息</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-medium">昵称</span>
                <span>Hyakuya</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-medium">职业</span>
                <span>学生</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-medium">邮箱</span>
                <span>h6140285538@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-medium">本科</span>
                <span>软件工程</span>
              </li>
              {/* <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-medium">位置</span>
                <span>中国</span>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">自我介绍</h3>
            <p className="text-gray-600 leading-relaxed">
              随处可见的普通开发者，喜欢利用agent进行vibe coding，享受做项目时的过程与结果。
              在这个网站里，分享自己喜欢和感兴趣的东西。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          技能栈
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory('全部')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === '全部'
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            全部
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-medium transition-colors ${
                  hoveredSkill === skill.name ? 'text-green-600' : 'text-gray-700'
                }`}>
                  {skill.name}
                </span>
                <span className={`text-sm transition-colors ${
                  hoveredSkill === skill.name ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 ${
                    hoveredSkill === skill.name ? 'shadow-lg shadow-green-200' : ''
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          时间线
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="relative">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold
                    transition-all duration-300
                    ${index === timeline.length - 1 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600'}
                  `}>
                    {item.year.slice(-2)}
                  </div>
                  {index === timeline.length - 1 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}