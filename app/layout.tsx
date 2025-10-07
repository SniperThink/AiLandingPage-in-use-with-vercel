import type { Metadata } from 'next'
import '@/app/css/globals.css'

export const metadata: Metadata = {
  title: 'SniperThink - AI-Driven Automation for Teams',
  description: 'Created with Next.js and Tailwind CSS',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}
