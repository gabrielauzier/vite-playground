import { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}
