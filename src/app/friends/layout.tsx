import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '友链',
  description: '分享一些有趣或有用的网站和好友页面',
};

export default function FriendsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
