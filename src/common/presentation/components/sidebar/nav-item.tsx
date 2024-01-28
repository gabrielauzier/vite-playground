import { ReactElement } from 'react'
import { Text } from '..'

interface NavItemProps {
  children: string
  icon: ReactElement
}

export function NavItem({ children, icon }: NavItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-zinc-50 hover:bg-opacity-80 focus:bg-zinc-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-zinc-900 focus:text-zinc-900 active:text-zinc-900 outline-none"
    >
      <div className="grid place-items-center mr-4 text-zinc-600">{icon}</div>
      <Text stronger size="md">
        {children}
      </Text>
    </div>
  )
}
