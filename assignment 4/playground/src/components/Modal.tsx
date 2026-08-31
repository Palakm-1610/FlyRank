import * as React from 'react'
import {
  Dialog as DialogPrimitive,
  Modal as ModalPrimitive,
  ModalOverlay as ModalOverlayPrimitive,
} from 'react-aria-components'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps): JSX.Element | null {
  if (!open) return null

  return (
    <ModalOverlayPrimitive
      isDismissable
      isOpen={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose()
      }}
      className="modal-overlay"
    >
      <ModalPrimitive className="modal" data-slot="modal-content">
        <DialogPrimitive role="dialog" aria-labelledby={title ? 'dialog-title' : undefined}>
          {title && <h2 id="dialog-title">{title}</h2>}
          <div className="modal-content">{children}</div>
        </DialogPrimitive>
      </ModalPrimitive>
    </ModalOverlayPrimitive>
  )
}
