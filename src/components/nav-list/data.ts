import { FaBox, FaChartBar, FaChartPie, FaHome } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { RiStackFill } from 'react-icons/ri'

import { LinkItem } from '@/components/nav-list/nav-list'

const mainNavLinks: LinkItem[] = [
  {
    link: '/',
    icon: FaHome,
    content: 'Dashboard'
  },
  {
    link: '/1',
    icon: FaBox,
    content: 'Products'
  },
  {
    link: '/3',
    icon: FaChartBar,
    content: 'Analytics'
  },
  {
    link: '/4',
    icon: RiStackFill,
    content: 'Campaigns'
  },
  {
    link: '/6',
    icon: FaChartPie,
    content: 'Statistics'
  }
]

const helpNavLinks: LinkItem[] = [
  {
    link: '/settings',
    icon: IoIosSettings,
    content: 'Settings'
  },
  {
    link: '/7',
    icon: IoHelpCircleOutline,
    content: 'Help Center'
  }
]

export { helpNavLinks, mainNavLinks }
