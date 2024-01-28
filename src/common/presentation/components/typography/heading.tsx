/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

import { TypographyHtmlTags } from '@/common/@types'

const HeadingSize = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
  '2xl': 'text-5xl',
  '3xl': 'text-6xl',
  '4xl': 'text-7xl',
  '5xl': 'text-8xl',
  '6xl': 'text-9xl',
}

export interface HeadingProps extends ComponentProps<'h2'> {
  children?: ReactNode
  className?: string
  size?: keyof typeof HeadingSize
  as?: TypographyHtmlTags
}

export function Heading({
  children,
  className,
  size = 'md',
  as = 'h2',
  ...rest
}: HeadingProps) {
  const Tag: any = as
  return (
    <Tag
      className={classNames(
        'text-gray-100 leading-snug',
        HeadingSize[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
