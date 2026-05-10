import type { Metadata } from 'next';
import FriendList from './FriendList';

interface Friend {
  id: number;
  name: string;
  avatar: string;
  url: string;
  description: string;
  tags: string[];
}

const friends: Friend[] = [];

export const metadata: Metadata = {
  title: '友链',
  description: '分享有趣网站和好友页面',
};

export default function FriendsPage() {
  const allTags = Array.from(new Set(friends.flatMap(f => f.tags)));

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">友情链接</h1>
        <p className="text-gray-600 dark:text-gray-400">分享有趣网站和好友页面</p>
      </header>
      <FriendList friends={friends} allTags={allTags} />
      <div className="mt-12 text-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          想要交换友链？欢迎通过留言或邮件联系我！
        </p>
      </div>
    </main>
  );
}
