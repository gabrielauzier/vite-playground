import { DropdownMenu, Text } from '../..'
import { ProfileTrigger } from './trigger'

export function Profile() {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger>
        <ProfileTrigger></ProfileTrigger>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <div className="flex flex-col pb-1.5">
          <DropdownMenu.Label className="pb-0">
            Gabriel Auzier
          </DropdownMenu.Label>
          <Text className="px-2" size="xs">
            gabrielvascoauzier@gmail.com
          </Text>
        </div>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Billing</DropdownMenu.Item>
        <DropdownMenu.Item>Team</DropdownMenu.Item>
        <DropdownMenu.Item>Subscription</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
