import { ReactNode } from 'react'
import { Popover } from '../../ui/popover'

interface SearchBoxRootProps {
  children: ReactNode
  open: boolean
  onOpenChange(open: boolean): void
}

export function SearchBoxRoot({
  open,
  onOpenChange,
  children,
}: SearchBoxRootProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      {children}
    </Popover>
  )
}
