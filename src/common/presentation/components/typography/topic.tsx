import { ReactNode } from 'react'

interface TopicProps {
  children: ReactNode
}

export function Topic({ children }: TopicProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}
