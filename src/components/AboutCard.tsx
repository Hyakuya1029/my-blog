'use client';

import Card from './Card';

interface AboutCardProps {
  isHovered?: boolean;
}

export default function AboutCard({ isHovered = false }: AboutCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-purple-100 dark:from-sky-900/30 dark:to-purple-900/30" isHovered={isHovered}>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-2">
          博主
        </div>
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">关于我</h3>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
          Hyakuya<br />
          开发者 / 创作者
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          记录我的学习和生活
        </p>
      </div>
    </Card>
  );
}