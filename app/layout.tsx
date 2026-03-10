import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '陈玉奇的博客 | chenyuqi.me',
  description: '个人博客 - 分享技术、生活与思考',
  keywords: ['博客', '技术', '生活', '陈玉奇', 'chenyuqi'],
  authors: [{ name: '陈玉奇', url: 'https://chenyuqi.me' }],
  openGraph: {
    title: '陈玉奇的博客',
    description: '分享技术、生活与思考',
    url: 'https://chenyuqi.me',
    siteName: '陈玉奇的博客',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
