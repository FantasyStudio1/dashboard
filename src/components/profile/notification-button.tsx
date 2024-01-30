'use client'

import { CiBellOn } from 'react-icons/ci'

import { Dropdown } from '@/components/primitives'

import s from './profile.module.scss'

export default function NotificationButton() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button type='button' aria-label='Your Notifications' className={s.notificationButton}>
          <CiBellOn aria-hidden />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content className={s.dropdownContent}>
        <Dropdown.Item className={s.notification}>
          <div data-title>Notification Title</div>
          <p data-info>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores commodi
            consequatur.
          </p>
        </Dropdown.Item>
        <Dropdown.Item className={s.notification}>
          <div data-title>Notification Title</div>
          <p data-info>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores commodi
            consequatur.
          </p>
        </Dropdown.Item>
        <Dropdown.Item className={s.notification}>
          <div data-title>Notification Title</div>
          <p data-info>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores commodi
            consequatur.
          </p>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
