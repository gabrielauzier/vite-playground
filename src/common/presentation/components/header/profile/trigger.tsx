import { User } from 'phosphor-react'
import { cn } from '@/common/lib/shadcn-ui/utils'

export function ProfileTrigger() {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-100 flex items-center justify-center',
        'hover:bg-opacity-60 cursor-pointer',
      )}
    >
      <User className="text-zinc-500 w-4 h-4" />
    </div>
  )
}
