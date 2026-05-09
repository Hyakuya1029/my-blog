'use client';

import Card from './Card';
import { CardDescription } from './Card';

interface CalendarCardProps {
  isHovered?: boolean;
}

export default function CalendarCard({ isHovered = false }: CalendarCardProps) {
  const today = new Date();
  const month = today.toLocaleDateString('zh-CN', { month: 'long' });
  const year = today.getFullYear();

  const dayOfWeek = today.getDay();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40" isHovered={isHovered}>
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">{today.getDate()}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">{month} {year}</div>

        <div className="grid grid-cols-7 gap-1 text-[10px] mb-3">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className={`w-5 h-5 flex items-center justify-center rounded-full transition-all duration-200 ${
                index === dayOfWeek
                  ? 'bg-sky-500 text-white font-semibold scale-110'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        <CardDescription>公历</CardDescription>
      </div>
    </Card>
  );
}