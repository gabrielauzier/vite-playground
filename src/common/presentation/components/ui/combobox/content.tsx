import { PopoverContent, Command } from '../..'
import { Check } from 'lucide-react'
import { cn } from '@/common/lib/shadcn-ui/utils'

interface ComboboxContentProps {
  labels: {
    value: string
    label: string
  }[]
  currentValue: string
  onValueChange(value: string): void
  onOpenChange(open: boolean): void
  placeholder?: string
}

export function ComboboxContent({
  labels,
  currentValue: value,
  onValueChange,
  onOpenChange,
  placeholder = 'Search an option...',
}: ComboboxContentProps) {
  return (
    <PopoverContent className="w-sidebar p-0">
      <Command.Root>
        <Command.Input placeholder={placeholder} />
        <Command.Empty>No framework found.</Command.Empty>
        <Command.Group>
          {labels.map((item) => (
            <Command.Item
              key={item.value}
              value={item.value}
              onSelect={(currentValue) => {
                onValueChange(currentValue === value ? '' : currentValue)
                onOpenChange(false)
              }}
            >
              <Check
                className={cn(
                  'mr-2 h-4 w-4',
                  value === item.value ? 'opacity-100' : 'opacity-0',
                )}
              />
              {item.label}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.Root>
    </PopoverContent>
  )
}
