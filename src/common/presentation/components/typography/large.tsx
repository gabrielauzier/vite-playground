import { ReactNode } from 'react'

interface LargeProps {
  children: ReactNode
}

export function Large({ children }: LargeProps) {
  return <div className="text-lg font-semibold">{children}</div>
}
