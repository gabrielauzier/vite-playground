import { ReactNode } from 'react'

export function Root({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 h-[calc(100vh-4rem)] w-full max-w-sidebar p-4 border-r">
      {children}
    </div>
  )
}
