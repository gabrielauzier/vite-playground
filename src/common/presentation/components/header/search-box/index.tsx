import { useState } from 'react'

import { SearchBoxContent as Content } from './content'
import { SearchBoxRoot as Root } from './root'
import { SearchBoxTrigger as Trigger } from './trigger'

export const SearchBox = {
  Content,
  Root,
  Trigger,
}

export function SearchBoxImpl() {
  const [open, setOpen] = useState(false)

  return (
    <SearchBox.Root open={open} onOpenChange={setOpen}>
      <SearchBox.Trigger />
      <SearchBox.Content></SearchBox.Content>
    </SearchBox.Root>
  )
}
