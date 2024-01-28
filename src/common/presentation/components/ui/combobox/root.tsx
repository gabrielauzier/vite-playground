import { ReactNode } from 'react'
import { Popover } from '../popover'

interface ComboboxRootProps {
  children: ReactNode
  open: boolean
  onOpenChange(open: boolean): void
}

export function ComboboxRoot({
  open,
  onOpenChange,
  children,
}: ComboboxRootProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      {children}
    </Popover>
  )
}
