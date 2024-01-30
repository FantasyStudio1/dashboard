'use client'

import * as RadixSelect from '@radix-ui/react-select'
import { ReactNode, forwardRef } from 'react'
import { IoCheckmark, IoChevronDownOutline } from 'react-icons/io5'

import { Button } from '@/components/primitives'

import s from './select.module.scss'

interface SelectProps {
  children: ReactNode
  value: string
  onValueChange: (value?: string) => void
  triggerValue: string
}

export default function Select(props: SelectProps) {
  const { children, triggerValue, value, onValueChange } = props

  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger asChild>
        <Button variant='select' Suffix={<IoChevronDownOutline />}>
          {triggerValue}
        </Button>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={s.selectContent}
          position='popper'
          align='end'
          sideOffset={6}
        >
          <RadixSelect.Viewport className={s.viewport}>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/

interface SelectItemProps {
  children: ReactNode
  value: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, forwardRef) => {
  return (
    <RadixSelect.Item className={s.selectItem} value={props.value} ref={forwardRef}>
      <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className={s.itemIndicator}>
        <IoCheckmark />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
})

SelectItem.displayName = 'SelectItem'
