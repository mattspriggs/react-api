import { useState } from 'react'
import { NewWidget, Widget } from '../../models/Widget'

interface Props {
  setWidgets: (widgets: Widget[]) => void
}
export default function addWidgetForm() {
  const [form, setForm] = useState<NewWidget>({})
}
