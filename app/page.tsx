import Link from 'next/link'
import { getAllPosts } from './lib/posts'
import { formatDate } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            陈玉奇的博客
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            记录技术成长 · 分享生活点滴 · 探索无限可能
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              开始阅读
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">最新文章</h2>
          <div className="grid gap-8">
            {posts.slice(0, 5).map((post) => (
              <article
                key={post.slug}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {post.categories && (
                        <div className="flex gap-2 mb-3">
                          {post.categories.map((category: string) => (
                            <span
                              key={category}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    <time className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {formatDate(post.date, 'yyyy 年 MM 月 dd 日', {
                        locale: zhCN,
                      })}
                    </time>
                  </div>
                  <p className="text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
          {posts.length > 5 && (
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                查看更多文章
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 关于我 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">关于我</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            你好！我是陈玉奇，一名热爱技术的开发者。在这里，我分享我的学习心得、技术探索和生活感悟。
            希望能通过文字，记录成长的每一步。
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="mailto:contact@chenyuqi.me"
              className="hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 陈玉奇的博客 · chenyuqi.me</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
