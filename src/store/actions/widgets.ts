import { createAction } from 'typesafe-actions'

import { IWidget } from '../types'
import { WidgetIdentifier } from '../../enums'

export const setFromStorage = createAction('@@widget/setFromStorage')<IWidget[]>()

export const addWidgetAction = createAction('@@widget/addWidgetAction')<WidgetIdentifier>()
export const selectWidgetAction = createAction('@@widget/selectWidgetAction')<Pick<IWidget, 'id'>>()
export const upWidgetAction = createAction('@@widget/upWidgetAction')<Pick<IWidget, 'id'>>()
export const downWidgetAction = createAction('@@widget/downWidgetAction')<Pick<IWidget, 'id'>>()
export const copyWidgetAction = createAction('@@widget/copyWidgetAction')<Pick<IWidget, 'id'>>()
export const deleteWidgetAction = createAction('@@widget/deleteWidgetAction')<Pick<IWidget, 'id'>>()
export const editingWidgetAction = createAction('@@widget/editingWidgetAction')<Pick<IWidget, 'id' | 'content'>>()
