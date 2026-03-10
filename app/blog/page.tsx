import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import { formatDate } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export const metadata = {
  title: '博客文章 | 陈玉奇的博客',
  description: '所有技术文章和生活分享',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  // 按年份分组
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<number, typeof posts>)

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">所有文章</h1>
          <p className="text-gray-600">
            共 {posts.length} 篇文章
          </p>
        </div>

        {/* 分类筛选 */}
        {posts.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                全部
              </Link>
              {Array.from(new Set(posts.flatMap(p => p.categories || []))).map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${category}`}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 文章列表 */}
        <div className="space-y-12">
          {Object.entries(postsByYear).map(([year, yearPosts]) => (
            <section key={year}>
              <h2 className="text-2xl font-bold mb-6 text-gray-400">
                {year}
              </h2>
              <div className="grid gap-6">
                {yearPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          {post.categories && (
                            <div className="flex gap-2 mb-3 flex-wrap">
                              {post.categories.map((category) => (
                                <span
                                  key={category}
                                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                            {post.title}
                          </h3>
                        </div>
                        <time className="text-sm text-gray-500 whitespace-nowrap ml-4">
                          {formatDate(post.date, 'MM 月 dd 日', {
                            locale: zhCN,
                          })}
                        </time>
                      </div>
                      <p className="text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2 mt-4 flex-wrap">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              还没有文章，开始写作吧！✍️
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
