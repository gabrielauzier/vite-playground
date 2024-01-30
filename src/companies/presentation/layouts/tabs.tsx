import { Tabs } from '@/common/presentation/components'
import { Overview } from '../pages/overview'

export function CompaniesTabs() {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>

      <div className="mt-4">
        <Tabs.Content value="overview">
          <Overview />
        </Tabs.Content>
        <Tabs.Content value="analytics">Analytics</Tabs.Content>
        <Tabs.Content value="reports">Reports</Tabs.Content>
        <Tabs.Content value="notifications">Notifications</Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
