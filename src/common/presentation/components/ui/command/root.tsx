import * as React from 'react'

import { Command as CommandPrimitive } from 'cmdk'
import { cn } from '@/common/lib/shadcn-ui/utils'

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName
