import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '作品集',
  description: '展示我的项目作品和技术成果',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
