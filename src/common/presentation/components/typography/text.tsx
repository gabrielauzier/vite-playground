/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

import { TypographyHtmlTags } from '@/common/@types'

type TextSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

export interface TextProps extends ComponentProps<'p'> {
  children?: ReactNode
  size?: TextSize
  as?: TypographyHtmlTags
}

export function Text({
  children,
  className,
  size = 'md',
  as = 'p',
  ...rest
}: TextProps) {
  const Tag: any = as

  return (
    <Tag
      className={classNames('text-gray-100', `text-${size}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
