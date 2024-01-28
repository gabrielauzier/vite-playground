import './common/styles/global.css'

import { Text, Heading, Button } from './common/presentation/components'

function App() {
  return (
    <body className="dark:bg-zinc-900 min-h-screen ">
      <Button variant="default">Hello</Button>
      <Heading as="h1">Theres no country for old man</Heading>
      <Text>Hello Main New</Text>
      <Text>Hello Main New</Text>
    </body>
  )
}

export default App
