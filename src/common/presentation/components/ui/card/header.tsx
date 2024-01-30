import * as React from 'react'

import { cn } from '@/common/lib/shadcn-ui/utils'

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex space-y-1.5 p-6 pb-4 flex-row items-center justify-between',
      className,
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'
