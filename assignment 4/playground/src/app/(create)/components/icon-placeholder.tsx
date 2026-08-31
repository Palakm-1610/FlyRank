import React from 'react'

type IconPlaceholderProps = {
  [key: string]: any
}

export function IconPlaceholder(_props?: IconPlaceholderProps) {
  return <span aria-hidden style={{ display: 'inline-block', width: 12, height: 12, background: 'currentColor', borderRadius: 2 }} />
}

export default IconPlaceholder
