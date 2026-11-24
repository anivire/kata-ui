import { Toaster } from '@anivire/kata-ui'
import type { ReactNode } from 'react'

export default function AppRoot({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
