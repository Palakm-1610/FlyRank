import React, { useId, useState } from 'react'

type DisclosureProps = {
  title: string
  children: React.ReactNode
}

export default function Disclosure({ title, children }: DisclosureProps): JSX.Element {
  const id = useId()
  const contentId = `disclosure-${id}`
  const [open, setOpen] = useState(false)

  return (
    <div className="disclosure">
      <button
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen((s) => !s)
          }
        }}
      >
        {title}
      </button>
      <div id={contentId} hidden={!open} role="region">
        {children}
      </div>
    </div>
  )
}
