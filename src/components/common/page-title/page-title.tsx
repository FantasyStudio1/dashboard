import cn from 'classnames'
import { ComponentProps } from 'react'

import s from './page-title.module.scss'

interface PageTitleProps extends ComponentProps<'div'> {
  title: string
  description?: string
}

export default function PageTitle(props: PageTitleProps) {
  const { children, title, description, className, ...pageTitleProps } = props

  const rootClassName = cn(s.root, className)

  return (
    <div className={rootClassName} {...pageTitleProps}>
      <div className={s.pageInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}
