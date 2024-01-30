'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

import { MobileMenuProvider } from '@/components/mobile-menu'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme='dark'>
      <MobileMenuProvider>{children}</MobileMenuProvider>
    </ThemeProvider>
  )
}
