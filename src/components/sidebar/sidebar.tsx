import { FaFantasyFlightGames } from 'react-icons/fa'

import { NavList } from '@/components/nav-list'

import s from './sidebar.module.scss'
import ThemeSwitcher from './theme-switcher'

export default function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <div>
        <div className={s.topSection}>
          <FaFantasyFlightGames />
          Fantasy
        </div>
        <NavList />
      </div>
      <ThemeSwitcher />
    </aside>
  )
}
