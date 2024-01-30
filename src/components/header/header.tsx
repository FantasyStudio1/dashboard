'use client'

import Link from 'next/link'
import { FaFantasyFlightGames } from 'react-icons/fa'
import { IoCloseSharp, IoMenuSharp, IoNotificationsOutline, IoSettingsSharp } from 'react-icons/io5'
import { Drawer } from 'vaul'

import { useMobileMenuContext } from '@/components/mobile-menu'

import s from './header.module.scss'

export default function Header() {
  const { open, setOpen } = useMobileMenuContext()

  return (
    <div className={s.headerWrap}>
      <header>
        <Link className={s.logo} href='/' aria-label='Home'>
          <FaFantasyFlightGames aria-hidden />
          Fantasy
        </Link>
        <div className={s.actions}>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <button type='button' className={s.headerButton} aria-label='Settings'>
                <IoSettingsSharp aria-hidden />
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Content className={s.drawerContent}>
                <Drawer.Title>Settings</Drawer.Title>
                <div>
                  <ul className={s.list} data-buttons>
                    <li>
                      <button className={s.drawerButton} type='button'>
                        Help Center
                      </button>
                    </li>
                    <li>
                      <button className={s.drawerButton} type='button'>
                        Delete Profile
                      </button>
                    </li>
                    <li>
                      <button className={s.drawerButton} type='button'>
                        Show Problems
                      </button>
                    </li>
                    <li>
                      <button className={s.drawerButton} type='button'>
                        New Tab
                      </button>
                    </li>
                    <li>
                      <button className={s.drawerButton} type='button'>
                        Move to new version
                      </button>
                    </li>
                  </ul>
                </div>
              </Drawer.Content>
              <Drawer.Overlay className={s.drawerOverlay} />
            </Drawer.Portal>
          </Drawer.Root>
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <button type='button' className={s.headerButton} aria-label='Notifications'>
                <IoNotificationsOutline aria-hidden />
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Content className={s.drawerContent}>
                <Drawer.Title>Notifications</Drawer.Title>
                <div>
                  <ul className={s.list}>
                    <li>
                      <Link href='/' className={s.notification} onClick={e => e.preventDefault()}>
                        <div data-title>Notification Title</div>
                        <p data-info>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
                          asperiores commodi consequatur.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href='/' className={s.notification} onClick={e => e.preventDefault()}>
                        <div data-title>Notification Title</div>
                        <p data-info>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
                          asperiores commodi consequatur.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href='/' className={s.notification} onClick={e => e.preventDefault()}>
                        <div data-title>Notification Title</div>
                        <p data-info>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
                          asperiores commodi consequatur.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Drawer.Content>
              <Drawer.Overlay className={s.drawerOverlay} />
            </Drawer.Portal>
          </Drawer.Root>
          <button
            type='button'
            className={s.headerButton}
            aria-label={!open ? 'Open Menu' : 'Close Menu'}
            onClick={() => setOpen(!open)}
          >
            {!open ? <IoMenuSharp aria-hidden /> : <IoCloseSharp aria-hidden />}
          </button>
        </div>
      </header>
    </div>
  )
}
