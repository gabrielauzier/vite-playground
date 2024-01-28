import { ReactNode } from 'react'
import { Header } from '../components'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <body className="dark:bg-zinc-900 min-h-[calc(100vh - 4rem)] max-w-[1280px] m-auto">
        {children}
      </body>
    </>
  )
}
