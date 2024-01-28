import * as React from 'react'

import { Command as CommandPrimitive } from 'cmdk'
import { cn } from '@/common/lib/shadcn-ui/utils'

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-zinc-200 dark:bg-zinc-800', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName
