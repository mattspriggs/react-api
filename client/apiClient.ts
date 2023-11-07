/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<Widget[]> {
  const widgets = await request.get(widgetUrl)
  return widgets.body
}
