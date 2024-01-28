import { ChevronsUpDown } from 'lucide-react'
import { Text, Button, PopoverTrigger } from '../..'

interface ComboboxTriggerProps {
  labels: {
    value: string
    label: string
  }[]
  currentValue: string
  open: boolean
  placeholder?: string
}

export function ComboboxTrigger({
  labels,
  currentValue,
  open,
  placeholder = 'Select an option...',
}: ComboboxTriggerProps) {
  return (
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
            {currentValue
              ? labels.find((label) => label.value === currentValue)?.label
              : placeholder}
          </Text>
        </div>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
  )
}
