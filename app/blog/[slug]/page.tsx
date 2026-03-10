import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import { formatDate } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const post = await getPostData(params.slug)
    return {
      title: `${post.title} | 陈玉奇的博客`,
      description: post.excerpt,
    }
  } catch {
    return {
      title: '文章未找到',
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  try {
    const post = await getPostData(params.slug)

    return (
      <article className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回文章列表
          </Link>

          {/* 文章头部 */}
          <header className="mb-12">
            {post.categories && (
              <div className="flex gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-500">
              <time dateTime={post.date}>
                {formatDate(post.date, 'yyyy 年 MM 月 dd 日', {
                  locale: zhCN,
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* 封面图片 */}
          {post.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* 文章内容 */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 文章底部 */}
          <footer className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← 返回文章列表
              </Link>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://chenyuqi.me/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  分享
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}
