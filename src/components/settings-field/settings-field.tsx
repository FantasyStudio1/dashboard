'use client'

import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'sonner'

import { submitSetting } from '@/lib/api/actions'

import s from './settings-field.module.scss'

interface SettingsFieldProps {
  label: string
  isChecked?: boolean
}

export default function SettingsField({ isChecked = true, label }: SettingsFieldProps) {
  const [checked, setChecked] = useState(isChecked)
  const [state, formAction] = useFormState(submitSetting, null)

  useEffect(() => {
    if (state) {
      if (state.error) {
        toast.error(state.error)
        return
      }

      setChecked(state.isChecked)
      toast.success('Change saved')
    }
  }, [state])

  return (
    <form action={formAction}>
      <label className={s.row}>
        <Checkbox checked={checked} />
        <div className={s.label}>{label}</div>
      </label>
    </form>
  )
}

function Checkbox({ checked }: { checked: boolean }) {
  const { pending } = useFormStatus()

  return (
    <>
      <div data-pending={pending} className={s.switchContainer}>
        <input
          type='checkbox'
          onChange={e => {
            if (pending) return

            const closestForm = e.target.closest('form')!
            closestForm.requestSubmit()
          }}
          aria-disabled={pending}
          checked={checked}
          className='sr-only'
          name='checkbox'
        />
        <div className={s.switch} aria-hidden>
          <span />
        </div>
      </div>
    </>
  )
}
