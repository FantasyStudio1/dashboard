import cn from 'classnames'
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import s from './button.module.scss'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'select'
  Suffix?: ReactNode
  Prefix?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardRef) => {
  const {
    children,
    type = 'button',
    className,
    variant = 'default',
    Suffix,
    Prefix,
    ...buttonProps
  } = props

  const rootClassName = cn(
    s.button,
    {
      [s.defaultButton]: variant === 'default',
      [s.selectButton]: variant === 'select'
    },
    className
  )

  return (
    <button type={type} className={rootClassName} {...buttonProps} ref={forwardRef}>
      {Prefix && (
        <span className={s.prefix} aria-hidden>
          {Prefix}
        </span>
      )}
      {children}
      {Suffix && (
        <span className={s.suffix} aria-hidden>
          {Suffix}
        </span>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
