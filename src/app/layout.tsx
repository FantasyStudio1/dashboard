import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

import Providers from '@/app/providers'

import { Header } from '@/components/header'
import { MobileMenu } from '@/components/mobile-menu'
import { Profile } from '@/components/profile'
import { Sidebar } from '@/components/sidebar'

import '@/styles/globals.scss'

import s from './layout.module.scss'

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['300', '400', '700'],
//   display: 'swap',
//   variable: '--roboto-font'
// })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--poppins-font'
})

export const metadata: Metadata = {
  title: 'Fantasy Dashboard',
  description: 'Dashboard built on Next.js'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={poppins.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <div className={s.root}>
            <Header />
            <div className={s.content}>
              <Sidebar />
              <main className={s.main}>
                <div className={s.container}>
                  <div className={s.topSection}>
                    <Profile />
                  </div>
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Toaster richColors />
          <MobileMenu />
        </Providers>
      </body>
    </html>
  )
}
