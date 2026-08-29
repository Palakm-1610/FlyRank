import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'FlyRank - Student Career & Productivity Dashboard',
  description: 'Manage your projects, tasks, skills, and job applications in one place.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="container-responsive">
          {children}
        </main>
      </body>
    </html>
  )
}
