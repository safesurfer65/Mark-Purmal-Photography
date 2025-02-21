import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Mark Purmal Photography | 360° Virtual Tours & Drone Photography',
  description: 'Professional photographer specializing in 360° virtual tours, drone photography/videography, and FPV flythrough videos.',
  icons: {
    icon: '/images/mp-icon.png',
    shortcut: '/images/mp-icon.png',
    apple: '/images/mp-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} scroll-smooth`}>
      <body className="bg-dark text-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
} 