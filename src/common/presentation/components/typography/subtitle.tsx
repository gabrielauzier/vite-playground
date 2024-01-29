import { cn } from '@/common/lib/shadcn-ui/utils'
import React from 'react'

// interface SubtitleProps exntends {
//   children: ReactNode
// }

// export function Subtitle({ children }: SubtitleProps) {
//   return (
//     <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
//       {children}
//     </h3>
//   )
// }

export interface SubtitleProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

export const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Subtitle.displayName = 'Stack'
