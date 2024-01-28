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
  stronger?: boolean
}

export function Text({
  children,
  className,
  size = 'md',
  as = 'p',
  stronger = false,
  ...rest
}: TextProps) {
  const Tag: any = as

  return (
    <Tag
      className={classNames(
        'text-zinc-500 dark:text-zinc-100',
        `text-${size}`,
        stronger && 'text-zinc-800',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
