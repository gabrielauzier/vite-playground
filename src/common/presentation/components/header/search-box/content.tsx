import { Command, PopoverContent } from '../..'

export function SearchBoxContent() {
  return (
    <PopoverContent className="w-sidebar p-0" sideOffset={-40} align="end">
      <Command.Root>
        <Command.Input placeholder="Type a command. or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>Calendar</Command.Item>
            <Command.Item>Search Emoji</Command.Item>
            <Command.Item>Calculator</Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>Profile</Command.Item>
            <Command.Item>Billing</Command.Item>
            <Command.Item>Settings</Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Root>
    </PopoverContent>
  )
}
