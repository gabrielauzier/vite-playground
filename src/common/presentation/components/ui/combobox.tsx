import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button, Text } from '..'
import * as Command from './command'
import { cn } from '@/common/lib/shadcn-ui/utils'
// {
//   Command.,
//   Command.Empty,
//   Command.Group,
//   Command.Input,
//   Command.Item,
// }
interface ComboxboxProps {
  labels: {
    value: string
    label: string
  }[]
}

export function Combobox({ labels: frameworks }: ComboxboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-sidebar justify-between"
        >
          <div className="flex gap-4">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5 h-5 rounded-full"></div>
            <Text stronger>
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : 'Select a team...'}
            </Text>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-sidebar p-0">
        <Command.Root>
          <Command.Input placeholder="Search framework..." />
          <Command.Empty>No framework found.</Command.Empty>
          <Command.Group>
            {frameworks.map((framework) => (
              <Command.Item
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {framework.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.Root>
      </PopoverContent>
    </Popover>
  )
}
