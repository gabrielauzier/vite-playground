import { Tabs } from '@/common/presentation/components'

export function CompaniesTabs() {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        Make changes to your account here.
      </Tabs.Content>
      <Tabs.Content value="password">Change your password here.</Tabs.Content>
    </Tabs.Root>
  )
}
