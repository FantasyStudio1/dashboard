import { ReactNode } from 'react'

import s from './section-title.module.scss'

export default function SectionTitle({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className={s.row}>
      <div className={s.title}>{title}</div>
      <div>{children}</div>
    </div>
  )
}
