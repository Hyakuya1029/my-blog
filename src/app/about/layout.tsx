import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于',
  description: '了解 Hyakuya — 软件工程学生，热爱编程与分享',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
