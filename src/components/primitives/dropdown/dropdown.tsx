'use client'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'
import { ReactNode } from 'react'

import s from './dropdown.module.scss'

type Children = { children: ReactNode }

function DropdownRoot({ children }: Children) {
  return <RadixDropdown.Root>{children}</RadixDropdown.Root>
}

function DropdownTrigger({ children }: Children) {
  return <RadixDropdown.Trigger asChild>{children}</RadixDropdown.Trigger>
}

function DropdownContent(props: RadixDropdown.DropdownMenuContentProps) {
  const { children, className, align = 'end', sideOffset = 6, ...contentProps } = props

  const rootClassName = cn(s.content, className)

  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        align={align}
        sideOffset={sideOffset}
        className={rootClassName}
        {...contentProps}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  )
}
function DropdownItem(props: RadixDropdown.DropdownMenuItemProps) {
  const { children, className, ...itemProps } = props

  const rootClassName = cn(s.item, className)

  return (
    <RadixDropdown.Item className={rootClassName} {...itemProps}>
      {children}
    </RadixDropdown.Item>
  )
}

const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem
}

export { Dropdown }
