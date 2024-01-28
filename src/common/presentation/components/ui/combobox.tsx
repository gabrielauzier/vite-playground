import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button, Text } from '..'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command'
import { cn } from '@/common/lib/shadcn-ui/utils'

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
          className="w-[320px] justify-between"
        >
          <div className="flex gap-4">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-5 h-5 rounded-full"></div>
            <Text>
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : 'Select framework...'}
            </Text>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
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
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
