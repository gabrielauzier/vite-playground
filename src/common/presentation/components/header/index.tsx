import { Profile } from './profile'
import { Search } from './search'

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-200 shadow-sm shadow-zinc-50">
      <div className="flex items-center h-full gap-2 max-w-[1280px] m-auto w-full justify-end">
        <Search />
        <Profile />
      </div>
    </header>
  )
}
