import { useEffect, useState } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const intialWidgets: Widget[] = []
  const [widgets, setWidgets] = useState(intialWidgets)

  async function fetchWidgets() {
    const widgets = await getWidgets()
    setWidgets(widgets)
  }

  useEffect(() => {
    console.log('widgets in use effect')
    try {
      fetchWidgets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <ul>
          {widgets.map((widget) => (
            <li key={widget.id}>
              <h2>{widget.name}</h2>
              <p>Manufacturer: {widget.mfg}</p>
              <p>Price: {widget.price}</p>
              <p>Amount in stock: {widget.inStock}</p>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
    </>
  )
}

export default App
