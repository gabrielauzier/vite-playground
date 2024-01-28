import { Combobox } from '..'
import { Profile } from './profile'
import { Search } from './search'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-200 shadow-sm shadow-zinc-50">
      <div className="flex items-center h-full max-w-[1280px] m-auto w-full justify-between">
        <Combobox labels={frameworks} />

        <div className="flex items-center gap-2">
          <Search />
          <Profile />
        </div>
      </div>
    </header>
  )
}
