'use client'

import { HiDotsHorizontal } from 'react-icons/hi'

import { Dropdown } from '@/components/primitives'

import s from './analytics-item.module.scss'

export default function SettingButton() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button type='button' className={s.settingsButton} aria-label='Settings'>
          <HiDotsHorizontal aria-hidden />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item style={{ height: 25 }}>Move</Dropdown.Item>
        <Dropdown.Item style={{ height: 25 }}>Clear</Dropdown.Item>
        <Dropdown.Item style={{ height: 25 }}>Save as...</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
