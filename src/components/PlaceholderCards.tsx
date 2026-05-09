import Card from './Card';
import { CardTitle, CardDescription } from './Card';

interface PlaceholderCardProps {
  isHovered?: boolean;
}

export function PlaceholderCard1({ isHovered = false }: PlaceholderCardProps) {
  return (
    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700" isHovered={isHovered}>
      <div className="flex flex-col items-center text-gray-400 dark:text-gray-300">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <CardTitle>待添加</CardTitle>
        <CardDescription>功能开发中...</CardDescription>
      </div>
    </Card>
  );
}

export function PlaceholderCard2({ isHovered = false }: PlaceholderCardProps) {
  return (
    <Card className="bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/30 dark:to-sky-900/30" isHovered={isHovered}>
      <div className="flex flex-col items-center text-sky-400">
        <div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V7a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <CardTitle>作品集</CardTitle>
        <CardDescription>展示我的项目作品</CardDescription>
      </div>
    </Card>
  );
}

export function PlaceholderCard3({ isHovered = false }: PlaceholderCardProps) {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30" isHovered={isHovered}>
      <div className="flex flex-col items-center text-emerald-400">
        <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.54.6a2 2 0 01-1.6.8h-2.4a2 2 0 01-1.6-.8l-.54-.6z" />
          </svg>
        </div>
        <CardTitle>灵感墙</CardTitle>
        <CardDescription>收集创意想法</CardDescription>
      </div>
    </Card>
  );
}

export function PlaceholderCard4({ isHovered = false }: PlaceholderCardProps) {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30" isHovered={isHovered}>
      <div className="flex flex-col items-center text-pink-400">
        <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <CardTitle>收藏夹</CardTitle>
        <CardDescription>收藏喜欢的内容</CardDescription>
      </div>
    </Card>
  );
}