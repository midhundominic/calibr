import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techpool Landing',
  description: 'Modern landing page built with Next.js + Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="flex flex-col min-h-screen bg-white ">
          {children}
         </div>
      </body>
    </html>
  )
}
