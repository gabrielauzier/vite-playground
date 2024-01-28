import { cn } from '@/common/lib/shadcn-ui/utils'
import { PopoverTrigger } from '../..'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchBoxTrigger() {
  return (
    <PopoverTrigger asChild>
      <div
        className={cn(
          'w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-100 flex items-center justify-center',
          'hover:bg-opacity-60 cursor-pointer',
        )}
      >
        <MagnifyingGlass className="text-zinc-500 w-4 h-4" />
      </div>
    </PopoverTrigger>
  )
}
