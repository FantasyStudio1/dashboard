'use client'

import { HiDotsHorizontal } from 'react-icons/hi'

import { Dropdown } from '@/components/primitives'

import s from './profile.module.scss'

export default function SettingsButton() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button type='button' aria-label='Setting' className={s.settingsButton}>
          <HiDotsHorizontal aria-hidden />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Help Center</Dropdown.Item>
        <Dropdown.Item>Delete Profile</Dropdown.Item>
        <Dropdown.Item>Show problems</Dropdown.Item>
        <Dropdown.Item>New Tab</Dropdown.Item>
        <Dropdown.Item>Moving to new version</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
