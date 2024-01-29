import { cn } from '@/common/lib/shadcn-ui/utils'
import React from 'react'

export interface StackProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  space?: number
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, space = 4, ...props }, ref) => {
    return (
      <div
        className={cn('flex flex-col', `space-y-${space}`, className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Stack.displayName = 'Stack'
