import { Card } from '@/common/presentation/components'
import { ReactElement } from 'react'

interface OverviewCardProps {
  title: string
  value: string
  description: string
  icon: ReactElement
}

export function OverviewCard({
  title,
  value,
  description,
  icon,
}: OverviewCardProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <div className="text-zinc-400">{icon}</div>
      </Card.Header>
      <Card.Content>
        <strong className="text-2xl">{value}</strong>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card.Root>
  )
}
