import { ReactNode } from 'react'

interface MutedProps {
  children: ReactNode
}

export function Muted({ children }: MutedProps) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
