import { ReactNode } from 'react'

interface LeadProps {
  children: ReactNode
}

export function Lead({ children }: LeadProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>
}
