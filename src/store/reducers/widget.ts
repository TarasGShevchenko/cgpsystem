import { createReducer } from 'typesafe-actions'

import { ActionTypes, IWidget } from '../types'
import {
  addWidgetAction,
  copyWidgetAction,
  deleteWidgetAction,
  downWidgetAction,
  editingWidgetAction,
  selectWidgetAction,
  setFromStorage,
  upWidgetAction,
} from '../actions'
import { createWidget } from '../../utils'

export type WidgetsState = {
  active: Pick<IWidget, 'id'> | null
  data: IWidget[]
}

const initialState = {
  active: null,
  data: [],
}

export const widgets = createReducer<WidgetsState, ActionTypes>(initialState)
  .handleAction(setFromStorage, (state, { payload: data }) => ({
    ...state,
    data,
  }))
  .handleAction(addWidgetAction, (state, { payload }) => {
    const newWidget = createWidget(payload)
    return {
      active: { id: newWidget.id },
      data: [...state.data, newWidget],
    }
  })
  .handleAction(selectWidgetAction, (state, { payload: active }) => ({
    ...state,
    active,
  }))
  .handleAction(upWidgetAction, (state, { payload: { id } }) => {
    const data = [...state.data]
    const widget = state.data.filter((elem) => elem.id === id)[0]
    const index = data.indexOf(widget)
    if (index > 0) {
      data.splice(index, 1)
      data.splice(index - 1, 0, widget)
    }
    return {
      ...state,
      data,
    }
  })
  .handleAction(downWidgetAction, (state, { payload: { id } }) => {
    const data = [...state.data]
    const widget = state.data.filter((elem) => elem.id === id)[0]
    const index = data.indexOf(widget)
    if (index < state.data.length) {
      data.splice(index, 1)
      data.splice(index + 1, 0, widget)
    }
    return {
      ...state,
      data,
    }
  })
  .handleAction(copyWidgetAction, (state, { payload: { id } }) => {
    const data = [...state.data]
    const widget = state.data.filter((elem) => elem.id === id)[0]
    const newWidget = createWidget(widget.type)
    data.splice(data.indexOf(widget) + 1, 0, { ...newWidget, content: widget.content })
    return {
      active: { id: newWidget.id },
      data,
    }
  })
  .handleAction(deleteWidgetAction, (state, { payload: { id } }) => {
    const data = [...state.data]
    const widget = state.data.filter((elem) => elem.id === id)[0]
    data.splice(data.indexOf(widget), 1)
    return {
      active: null,
      data,
    }
  })
  .handleAction(editingWidgetAction, (state, { payload: { id, content } }) => ({
    ...state,
    data: state.data.map((elem) => ({ ...elem, content: elem.id === id ? content : elem.content })),
  }))
