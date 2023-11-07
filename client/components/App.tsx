import { useState } from 'react'
import { Widget } from '../../models/Widget'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
