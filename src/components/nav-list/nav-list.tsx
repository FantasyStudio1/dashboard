'use client'

import { Slot } from '@radix-ui/react-slot'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconType } from 'react-icons'

import { helpNavLinks, mainNavLinks } from './data'
import s from './nav-list.module.scss'

export default function NavList() {
  const pathname = usePathname()

  return (
    <nav className={s.nav} aria-label='Main Navigation'>
      <ul>
        {mainNavLinks.map(item => (
          <li key={item.content}>
            <NavLink item={item} isActive={pathname === item.link} />
          </li>
        ))}
      </ul>
      <div role='separator' aria-orientation='horizontal' data-separator />
      <ul>
        {helpNavLinks.map(item => (
          <li key={item.content}>
            <NavLink item={item} isActive={pathname === item.link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Nav Link
 * -----------------------------------------------------------------------------------------------*/

export type LinkItem = {
  icon: IconType
  content: string
  link: string
}

interface NavLinkProps {
  item: LinkItem
  isActive: boolean
}

function NavLink(props: NavLinkProps) {
  const { item, isActive } = props

  const isWorking = item.link === '/settings' || item.link === '/'

  return (
    <Link
      className={s.link}
      data-active={isActive}
      data-working={isWorking}
      onClick={e => {
        if (!isWorking) {
          alert('Доступны только Dashboard и Settings')
          e.preventDefault()
        }
      }}
      href={item.link}
    >
      <Slot aria-hidden>{<item.icon />}</Slot>
      {item.content}
    </Link>
  )
}
