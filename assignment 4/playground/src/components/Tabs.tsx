import React, { useState, useRef } from 'react'

type Tab = { id: string; title: string; content: React.ReactNode }

const TABS: Tab[] = [
  { id: 'tab-1', title: 'First', content: <p>First panel content</p> },
  { id: 'tab-2', title: 'Second', content: <p>Second panel content</p> },
  { id: 'tab-3', title: 'Third', content: <p>Third panel content</p> }
]

export default function Tabs(): JSX.Element {
  const [index, setIndex] = useState(0)
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  function onKey(e: React.KeyboardEvent) {
    const key = e.key
    if (key === 'ArrowRight') {
      e.preventDefault()
      const next = (index + 1) % TABS.length
      setIndex(next)
      refs.current[next]?.focus()
    } else if (key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (index - 1 + TABS.length) % TABS.length
      setIndex(prev)
      refs.current[prev]?.focus()
    } else if (key === 'Home') {
      e.preventDefault()
      setIndex(0)
      refs.current[0]?.focus()
    } else if (key === 'End') {
      e.preventDefault()
      setIndex(TABS.length - 1)
      refs.current[TABS.length - 1]?.focus()
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Sample Tabs">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            id={t.id}
            role="tab"
            aria-selected={index === i}
            aria-controls={`${t.id}-panel`}
            tabIndex={index === i ? 0 : -1}
            ref={(el) => (refs.current[i] = el)}
            onClick={() => setIndex(i)}
            onKeyDown={onKey}
          >
            {t.title}
          </button>
        ))}
      </div>

      {TABS.map((t, i) => (
        <div
          key={t.id + '-panel'}
          id={`${t.id}-panel`}
          role="tabpanel"
          aria-labelledby={t.id}
          hidden={i !== index}
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}
