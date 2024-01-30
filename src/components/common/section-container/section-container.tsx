import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'

import s from './section-container.module.scss'

interface SectionContainerProps extends ComponentPropsWithoutRef<'div'> {}

export default function SectionContainer(props: SectionContainerProps) {
  const { children, className, ...sectionContainerProps } = props
  return (
    <div className={cn(s.root, className)} {...sectionContainerProps}>
      {children}
    </div>
  )
}
