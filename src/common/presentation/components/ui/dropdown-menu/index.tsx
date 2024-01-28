import {
  DropdownMenuGroup as Group,
  DropdownMenuPortal as Portal,
  DropdownMenuRadioGroup as RadioGroup,
  DropdownMenuSub as Sub,
  DropdownMenuTrigger as Trigger,
  DropdownMenu as Root,
} from './primitives'
import { DropdownMenuCheckboxItem as CheckboxItem } from './menu-checkbox-item'
import { DropdownMenuContent as Content } from './menu-content'
import { DropdownMenuItem as Item } from './menu-item'
import { DropdownMenuLabel as Label } from './menu-label'
import { DropdownMenuRadioItem as RadioItem } from './menu-radio-item'
import { DropdownMenuSeparator as Separator } from './menu-separator'
import { DropdownMenuShortcut as Shortcut } from './menu-shorcut'
import { DropdownMenuSubContent as SubContent } from './sub-content'
import { DropdownMenuSubTrigger as SubTrigger } from './trigger'

export const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  Shortcut,
  Group,
  Portal,
  Sub,
  SubContent,
  SubTrigger,
  RadioGroup,
}
