import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'ghost' | 'default'
  size?: 'icon-sm' | 'default'
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={['px-3 py-1 rounded', className].filter(Boolean).join(' ')}>
      {children}
    </button>
  )
}

export default Button
