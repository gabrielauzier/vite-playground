import { Heading, Stack } from '@/common/presentation/components'
import { CompaniesTabs } from '../components/tabs'

export function CompaniesLayout() {
  return (
    <Stack>
      <Heading size="lg">Companies</Heading>

      <Stack>
        <CompaniesTabs />
      </Stack>
    </Stack>
  )
}
