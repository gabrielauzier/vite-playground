import './common/styles/global.css'

import { RootLayout } from './common/presentation/layouts/root-layout'
import { Sidebar } from './common/presentation/components/sidebar'

function App() {
  return (
    <RootLayout>
      <Sidebar></Sidebar>
    </RootLayout>
  )
}

export default App
