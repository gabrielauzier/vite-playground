import * as React from 'react'

import { cn } from '@/common/lib/shadcn-ui/utils'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'
