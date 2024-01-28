import { Profile } from './profile'
import { Search } from './search'

export function Header() {
  return (
    <header className="h-16 flex items-center justify-end border-b border-zinc-200 shadow-sm shadow-zinc-50">
      <div className="flex gap-2">
        <Search />
        <Profile />
      </div>
    </header>
  )
}
