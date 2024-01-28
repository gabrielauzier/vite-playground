import { ReactNode } from 'react'

export function Navigation({ children }: { children: ReactNode }) {
  return (
    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
      {children}
    </nav>
  )
}
