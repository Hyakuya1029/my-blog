import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '留言墙',
  description: '留下你想说的话，让每一条留言都成为墙上的风景',
};

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
