import { ReactNode } from 'react'
import { Header } from '../components'
import { Sidebar } from '../components/sidebar'

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <body className="dark:bg-zinc-900 min-h-[calc(100vh - 4rem)] max-w-[1280px] m-auto">
        <div className="flex">
          <Sidebar />
          <main className="pl-8 pt-6 w-full">{children}</main>
        </div>
      </body>
    </>
  )
}
