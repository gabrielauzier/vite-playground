import * as React from 'react'

import { cn } from '@/common/lib/shadcn-ui/utils'

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('leading-none tracking-tight text-sm font-medium', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'
