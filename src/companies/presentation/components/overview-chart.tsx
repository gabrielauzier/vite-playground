/* eslint-disable @typescript-eslint/no-explicit-any */
import { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', value: 2300 },
  { month: 'Fev', value: 3200 },
  { month: 'Mar', value: 1400 },
  { month: 'Apr', value: 3000 },
  { month: 'May', value: 3400 },
  { month: 'Jun', value: 1600 },
  { month: 'Jul', value: 2800 },
  { month: 'Ago', value: 3300 },
  { month: 'Sep', value: 1300 },
  { month: 'Oct', value: 3000 },
  { month: 'Nov', value: 3500 },
  { month: 'Dez', value: 3000 },
]

export class OverviewChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc'

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} barSize="100%">
          <XAxis
            dataKey="month"
            tickLine={false}
            fontFamily="Inter"
            fontSize={12}
            axisLine={false}
          />
          <YAxis
            color="#fff"
            fontFamily="Inter"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(data: number) => {
              return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(data)
            }}
          />
          <Tooltip active={false} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
