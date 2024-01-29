import { CreditCard, DollarSign, Users } from 'lucide-react'
import { OverviewCard } from '../components'

export function Overview() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <OverviewCard
        title="Total Revenue"
        value="$45,231.89"
        description="+20.1% from last month"
        icon={<DollarSign className="w-4 h-4" />}
      />
      <OverviewCard
        title="Subscriptions"
        value="+2350"
        description="+180.1% from last month"
        icon={<Users className="w-4 h-4" />}
      />
      <OverviewCard
        title="Sales"
        value="+12,234"
        description="+19% from last month"
        icon={<CreditCard className="w-4 h-4" />}
      />
    </div>
  )
}
