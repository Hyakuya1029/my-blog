import type { Metadata } from 'next';

const websiteTechs = [
  { name: 'Next.js', desc: '网站的前后端框架', gradient: 'from-gray-700 to-black dark:from-gray-600 dark:to-gray-900' },
  { name: 'TypeScript', desc: '类型安全的开发语言', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Tailwind CSS', desc: '网站的样式方案', gradient: 'from-cyan-400 to-cyan-600' },
  { name: 'Supabase', desc: '数据库与后端服务', gradient: 'from-emerald-400 to-emerald-600' },
];

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case 'Next.js': return <span className="text-sm font-extrabold">N</span>;
    case 'TypeScript': return <span className="text-sm font-extrabold tracking-tight">TS</span>;
    case 'Tailwind CSS': return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 .67-1.33 1.78-1.83 3.33-1.5.72.16 1.24.69 1.82 1.28C13.1 10.73 14.18 12 16.5 12c2.67 0 4.33-1.33 5-4-.67 1.33-1.78 1.83-3.33 1.5-.72-.16-1.24-.69-1.82-1.28C15.4 7.27 14.32 6 12 6zM7.5 12c-2.67 0-4.33 1.33-5 4 .67-1.33 1.78-1.83 3.33-1.5.72.16 1.24.69 1.82 1.28C8.6 16.73 9.68 18 12 18c2.67 0 4.33-1.33 5-4-.67 1.33-1.78 1.83-3.33 1.5-.72-.16-1.24-.69-1.82-1.28C10.9 13.27 9.82 12 7.5 12z" />
      </svg>
    );
    case 'Supabase': return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.9 2.5L5 14h5.5l-1.4 7.5L19 10h-5.5l.4-7.5z" />
      </svg>
    );
    default: return <span className="text-sm font-bold">{name.charAt(0)}</span>;
  }
}

export const metadata: Metadata = {
  title: '关于',
  description: '关于本网站的技术栈与开发信息',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">关于</h1>
      </header>

      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-gray-100">
          <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          关于网站
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-loose mb-6">
          <strong className="text-gray-800 dark:text-gray-200">* 本网站通过 agent 代理进行全自动开发。</strong>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {websiteTechs.map((tech) => (
            <div key={tech.name}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-center hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors group"
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white shadow group-hover:shadow-md transition-shadow`}>
                <TechIcon name={tech.name} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 leading-loose">
          此外还使用了 react-markdown、gray-matter 等技术实现网站功能和视觉效果。
        </p>
      </section>
    </main>
  );
}
