'use client'

import { CiFileOn } from 'react-icons/ci'

import { Button, Dropdown } from '@/components/primitives'

export default function ImportButton() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Button Prefix={<CiFileOn />}>Import</Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Import from account</Dropdown.Item>
        <Dropdown.Item>Import from Cloud</Dropdown.Item>
        <Dropdown.Item>Import as pdf</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
