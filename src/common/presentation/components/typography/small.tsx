import { ReactNode } from 'react'

interface SmallProps {
  children: ReactNode
}

export function Small({ children }: SmallProps) {
  return <small className="text-sm font-medium leading-none">{children}</small>
}
