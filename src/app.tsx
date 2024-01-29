import './common/styles/global.css'

import { RootLayout } from './common/presentation/layouts/root-layout'
import { CompaniesLayout } from './companies/presentation/layouts'

function App() {
  return (
    <RootLayout>
      <CompaniesLayout></CompaniesLayout>
    </RootLayout>
  )
}

export default App
