'use client'

import { Portal } from '@radix-ui/react-portal'
import { Slot } from '@radix-ui/react-slot'
import { usePathname } from 'next/navigation'
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import { Header } from '@/components/header'
import { NavList } from '@/components/nav-list'
import { Profile } from '@/components/profile'
import ThemeSwitcher from '@/components/sidebar/theme-switcher'

import { createContext } from '@/lib/create-context'

import s from './mobile-menu.module.scss'

type MenuContext = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const [MenuProvider, useMenuContext] = createContext<MenuContext>('MenuContext')

export const useMobileMenuContext = () => useMenuContext('MenuContext')

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (document.activeElement instanceof HTMLInputElement) {
      document.activeElement.blur()
    }

    setIsOpen(false)
  }, [pathname])

  return (
    <MenuProvider open={isOpen} setOpen={setIsOpen}>
      {children}
    </MenuProvider>
  )
}

export function MobileMenu() {
  const menuContext = useMobileMenuContext()

  if (!menuContext.open) return null

  return (
    <Portal>
      <RemoveScroll as={Slot} allowPinchZoom>
        <div className={s.root}>
          <Header />
          <div className={s.content}>
            <NavList />
            <div>
              <Profile />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </RemoveScroll>
    </Portal>
  )
}
