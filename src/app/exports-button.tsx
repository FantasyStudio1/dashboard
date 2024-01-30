'use client'

import { IoChevronDownSharp, IoDocumentTextOutline } from 'react-icons/io5'

import { Button, Dropdown } from '@/components/primitives'

export default function ExportsButton() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Button Prefix={<IoDocumentTextOutline />} Suffix={<IoChevronDownSharp />}>
          Exports
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Export as JPG</Dropdown.Item>
        <Dropdown.Item>Export as PNG</Dropdown.Item>
        <Dropdown.Item>Export as PDF</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
