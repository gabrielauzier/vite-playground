import { Profile } from './profile'
import { SearchBoxImpl } from './search-box'
import { TeamsCombobox } from './teams-combobox'

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-200 shadow-sm shadow-zinc-50">
      <div className="flex items-center h-full max-w-[1280px] m-auto w-full justify-between">
        <TeamsCombobox />

        <div className="flex items-center gap-2">
          <SearchBoxImpl />
          <Profile />
        </div>
      </div>
    </header>
  )
}
