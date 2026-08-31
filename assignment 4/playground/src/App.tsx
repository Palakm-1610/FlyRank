import React, { useState } from 'react'
import Modal from './components/Modal'
import Tabs from './components/Tabs'
import Disclosure from './components/Disclosure'
import {
  Dialog as ShadcnDialog,
  DialogTrigger as ShadcnDialogTrigger,
  DialogTitle as ShadcnDialogTitle,
  DialogDescription as ShadcnDialogDescription,
  DialogClose as ShadcnDialogClose,
  DialogHeader as ShadcnDialogHeader,
  DialogFooter as ShadcnDialogFooter,
} from './components/shadcn/Dialog'
import {
  Tabs as TabsShadcn,
  TabsList as TabsListShadcn,
  TabsTrigger as TabsTriggerShadcn,
  TabsContent as TabsContentShadcn,
} from './components/shadcn/TabsShadcn'

export default function App(): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <div className="app">
      <h1>ARIA Playground</h1>

      <section>
        <h2>Modal (Dialog)</h2>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={open} onClose={() => setOpen(false)} title="Example dialog">
          <p>
            This is a simple modal dialog. Try tabbing through focusable elements, and press
            Escape to close.
          </p>
          <button onClick={() => alert('Action inside modal')}>Action</button>
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      </section>

      <section>
        <h2>Tabs</h2>
        <Tabs />
        <h3>shadcn Tabs</h3>
        <TabsShadcn defaultSelectedKey="overview" className="w-[400px]">
          <TabsListShadcn>
            <TabsTriggerShadcn id="overview">Overview</TabsTriggerShadcn>
            <TabsTriggerShadcn id="analytics">Analytics</TabsTriggerShadcn>
            <TabsTriggerShadcn id="reports">Reports</TabsTriggerShadcn>
          </TabsListShadcn>
          <TabsContentShadcn id="overview">Shadcn overview content</TabsContentShadcn>
          <TabsContentShadcn id="analytics">Shadcn analytics content</TabsContentShadcn>
          <TabsContentShadcn id="reports">Shadcn reports content</TabsContentShadcn>
        </TabsShadcn>
      </section>

      <section>
        <h2>Disclosure</h2>
        <Disclosure title="More details">
          <p>Hidden content revealed. Try toggling with Enter or Space, and tab through.</p>
          <button>Inner button</button>
        </Disclosure>
      </section>

      <section>
        <h2>shadcn Dialog</h2>
        <ShadcnDialogTrigger>
          <form>
            <button type="button">Open shadcn dialog</button>
            <ShadcnDialog className="sm:max-w-sm">
              <ShadcnDialogHeader>
                <ShadcnDialogTitle>Edit profile</ShadcnDialogTitle>
                <ShadcnDialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </ShadcnDialogDescription>
              </ShadcnDialogHeader>
              <div style={{ padding: 8 }}>
                <label htmlFor="name-2">Name</label>
                <input id="name-2" defaultValue="Jane" />
              </div>
              <ShadcnDialogFooter>
                <ShadcnDialogClose variant="outline">Cancel</ShadcnDialogClose>
                <button type="submit">Save changes</button>
              </ShadcnDialogFooter>
            </ShadcnDialog>
          </form>
        </ShadcnDialogTrigger>
      </section>
    </div>
  )
}
