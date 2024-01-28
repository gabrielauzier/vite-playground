import { useState } from 'react'
import { Combobox } from '../..'

type Labels = {
  value: string
  label: string
}[]

export function TeamsCombobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const labels: Labels = [
    { label: 'Byte Builders', value: 'team01' },
    { label: 'Code Crafters', value: 'team02' },
    { label: 'Script Savants', value: 'team03' },
    { label: 'Pixel Pioneers', value: 'team04' },
    { label: 'Tech Titans', value: 'team05' },
  ]

  return (
    <Combobox.Root open={open} onOpenChange={setOpen}>
      <Combobox.Trigger
        open={open}
        currentValue={value}
        labels={labels}
        placeholder="Select a team..."
      />
      <Combobox.Content
        currentValue={value}
        labels={labels}
        placeholder="Select a team..."
        onOpenChange={setOpen}
        onValueChange={setValue}
      />
    </Combobox.Root>
  )
}
