import React, { useState } from 'react'
import { createWidget } from '../apiClient'
import { NewWidget, Widget } from '../../models/Widget'
import { prependOnceListener } from 'superagent'

interface Props {
  widgets: Widget[]
  setWidgets: (widgets: Widget[]) => void
}

const initialWidgetState = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0,
}

export default function AddWidgetForm(props: Props) {
  const [form, setForm] = useState<NewWidget>(initialWidgetState)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [newWidget] = await createWidget(form)
    props.setWidgets([...props.widgets, newWidget])
    setForm(initialWidgetState)
  }
  return (
    <>
      <h1>Add Widget</h1>
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <p>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </p>
        {/* MFG */}
        <p>
          <label htmlFor="mfg">Manufacturer:</label>
          <br />
          <input id="mfg" onChange={handleChange} value={form.mfg} name="mfg" />
        </p>
        {/* PRICE */}
        <p>
          <label htmlFor="price">Price:</label>
          <br />
          <input
            id="price"
            onChange={handleChange}
            value={form.price}
            name="price"
          />
        </p>
        {/* INSTOCK */}
        <p>
          <label htmlFor="inStock">Quantity:</label>
          <br />
          <input
            id="inStock"
            onChange={handleChange}
            value={form.inStock}
            name="inStock"
          />
        </p>
        <button>Add a Widget</button>
      </form>
    </>
  )
}
