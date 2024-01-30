import { Heading, Stack } from '@/common/presentation/components'
import { CompaniesTabs } from './tabs'

export function CompaniesLayout() {
  return (
    <Stack>
      <Heading size="lg">Companies</Heading>

      <div className="mt-2">
        <CompaniesTabs />
      </div>
    </Stack>
  )
}
