'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { CiDark, CiLight, CiMonitor } from 'react-icons/ci'

import s from './sidebar.module.scss'

export default function ThemeSwitcher() {
  const [isHydrated, setIsHydrated] = useState<boolean>(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    isHydrated && (
      <div role='radiogroup' className={s.radiogroup}>
        <button
          type='button'
          role='radio'
          aria-label='Dark mode'
          aria-checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          <CiDark aria-hidden />
        </button>
        <button
          type='button'
          role='radio'
          aria-label='Light Mode'
          aria-checked={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          <CiLight aria-hidden />
        </button>
        <button
          type='button'
          role='radio'
          aria-label='System mode'
          aria-checked={theme === 'system'}
          onClick={() => setTheme('system')}
        >
          <CiMonitor aria-hidden />
        </button>
      </div>
    )
  )
}
